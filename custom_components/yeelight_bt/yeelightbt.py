"""
Creator : hcoohb
License : MIT
Source  : https://github.com/hcoohb/hass-yeelightbt
"""
from __future__ import annotations

# Standard imports
import asyncio
import enum
import logging
import struct
from typing import Any, Callable, cast

# 3rd party imports
from bleak import BleakClient, BleakError, BleakScanner
from bleak.backends.client import BaseBleakClient
from bleak.backends.device import BLEDevice
from bleak_retry_connector import establish_connection

NOTIFY_UUID = "8f65073d-9f57-4aaa-afea-397d19d5bbeb"
CONTROL_UUID = "aa7d3f34-2d4f-41e0-807f-52fbf8cf7443"

COMMAND_STX = 0x43
CMD_PAIR = 0x67
CMD_PAIR_ON = 0x02
RES_PAIR = 0x63
CMD_POWER = 0x40
CMD_POWER_ON = 0x01
CMD_POWER_OFF = 0x02
CMD_COLOR = 0x41
CMD_BRIGHTNESS = 0x42
CMD_TEMP = 0x43
CMD_RGB = 0x41
CMD_GETSTATE = 0x44
CMD_GETSTATE_SEC = 0x02
RES_GETSTATE = 0x45
CMD_GETNAME = 0x52
RES_GETNAME = 0x53
CMD_GETVER = 0x5C
RES_GETVER = 0x5D
CMD_GETSERIAL = 0x5E
RES_GETSERIAL = 0x5F
RES_GETTIME = 0x62

MODEL_BEDSIDE = "Bedside"
MODEL_CANDELA = "Candela"
MODEL_UNKNOWN = "Unknown"


class Conn(enum.Enum):
    DISCONNECTED = 1
    UNPAIRED = 2
    PAIRING = 3
    PAIRED = 4


_LOGGER = logging.getLogger(__name__)


def model_from_name(ble_name: str) -> str:
    model = MODEL_UNKNOWN
    if ble_name.startswith("XMCTD_"):
        model = MODEL_BEDSIDE
    if ble_name.startswith("yeelight_ms"):
        model = MODEL_CANDELA
    return model


class Lamp:
    """The class that represents a Yeelight lamp
    A Lamp object describe a real world Yeelight lamp.
    """

    MODE_COLOR = 0x01
    MODE_WHITE = 0x02
    MODE_FLOW = 0x03

    def __init__(self, ble_device: BLEDevice):
        self._client: BleakClient | None = None
        self._ble_device = ble_device
        self._mac = self._ble_device.address
        _LOGGER.debug(
            f"Initializing Yeelight Lamp {self._ble_device.name} ({self._mac})"
        )
        _LOGGER.debug(f"BLE_device details: {self._ble_device.details}")
        self._is_on = False
        self._rgb = (0, 0, 0)
        self._brightness = 0
        self._temperature = 0
        self.versions: str | None = None
        self._model = model_from_name(self._ble_device.name)
        self._mode: int | None = (
            self.MODE_WHITE if self._model == MODEL_CANDELA else None
        )
        # store func to call on state received:
        self._state_callbacks: list[Callable[[], None]] = []
        self._conn = Conn.DISCONNECTED
        self._pair_resp_event = asyncio.Event()
        self._read_service = False
        self._is_client_bluez = True

    def __str__(self) -> str:
        """The string representation"""
        mode_str = {
            self.MODE_COLOR: "Color",
            self.MODE_WHITE: "White",
            self.MODE_FLOW: "Flow",
        }
        str_rgb = (
            f"rgb_{self._rgb} "
            if self._mode in [self.MODE_COLOR, self.MODE_FLOW]
            else ""
        )
        str_temp = f"temp_{self._temperature}" if self._mode == self.MODE_WHITE else ""
        str_mode = mode_str[self._mode] if self._mode in mode_str else self._mode
        str_bri = f"bri_{self._brightness} " if self._mode else ""
        str_rep = (
            f"<Lamp {self._mac} "
            f"{'ON' if self._is_on else 'OFF'} "
            f"mode_{str_mode} "
            f"{str_bri}{str_rgb}{str_temp}"
            f">"
        )
        return str_rep

    def add_callback_on_state_changed(self, func: Callable[[], None]) -> None:
        """
        Register callbacks to be called when lamp state is received or bt disconnected
        """
        self._state_callbacks.append(func)

    def run_state_changed_cb(self) -> None:
        """Execute all registered callbacks for a state change"""
        for func in self._state_callbacks:
            func()

    def diconnected_cb(self, client: BaseBleakClient) -> None:
        _LOGGER.debug(f"Disconnected CB from client {client}")
        # ensure we are responding to the newest client:
        # if client != self._client:
        #     return
        self._mode = None  # lamp not available
        self._conn = Conn.DISCONNECTED
        self.run_state_changed_cb()

    async def connect(self, num_tries: int = 3) -> None:
        if (
            self._client and not self._client.is_connected
        ):  # check the connection has not dropped
            await self.disconnect()
        if self._conn == Conn.PAIRING or self._conn == Conn.PAIRED:
            # We do not try to reconnect if we are disconnected or unpaired
            return
        _LOGGER.debug("Initiating new connection")
        try:
            if self._client:
                await self.disconnect()

            _LOGGER.debug(f"Connecting now to {self._ble_device}:...")
            self._client = await establish_connection(
                BleakClient,
                device=self._ble_device,
                name=self._mac,
                disconnected_callback=self.diconnected_cb,
                max_attempts=4,
            )
            _LOGGER.debug(
                f"Client used is: {self._client}. Backend is {self._client._backend}"
            )
            self._is_client_bluez = (
                str(type(self._client._backend))
                == "<class 'bleak.backends.bluezdbus.client.BleakClientBlueZDBus'>"
            )
            self._conn = Conn.UNPAIRED
            _LOGGER.debug(f"Connected: {self._client.is_connected}")

            # read services if in debug mode:
            if not self._read_service and _LOGGER.isEnabledFor(logging.DEBUG):
                await self.read_services()
                self._read_service = True
                await asyncio.sleep(0.2)

            if self._model == MODEL_BEDSIDE:
                _LOGGER.debug("Request Notify")
                await self._client.start_notify(NOTIFY_UUID, self.notification_handler)
                await asyncio.sleep(0.3)
                _LOGGER.debug("Request Pairing")
                await self.pair()
                await asyncio.sleep(0.3)
                if self._conn == Conn.PAIRED:
                    # ensure we get state straight away after connection
                    await self.get_state()
                    if not self.versions:
                        await self.get_version()
                        await self.get_serial()

            if self._model == MODEL_CANDELA and self._is_client_bluez:
                # It may be that on bluez the notification request is not sent properly
                # Not sure on esp... so only applyt to bluez
                _LOGGER.debug("Request Pairing")
                await self.pair()
                # since we have no feedback
                # we wait longer on first connection in case need to push button...
                await asyncio.sleep(0.3 if self.versions else 10)
                # now we are assuming that we paired successfully
                self._conn = Conn.PAIRED
                # ensure we get state straight away after connection
                await self.get_state()
                if not self.versions:
                    await self.get_version()
                    await self.get_serial()
                # advertise to HA lamp is now available:
                self.run_state_changed_cb()

            _LOGGER.debug(f"Connection status: {self._conn}")

        except asyncio.TimeoutError:
            _LOGGER.error("Connection Timeout error")
        except BleakError as err:
            _LOGGER.error(f"Connection: BleakError: {err}")

    async def pair(self) -> None:
        """Send pairing command directly"""
        bits = bytearray(struct.pack("BBB15x", COMMAND_STX, CMD_PAIR, CMD_PAIR_ON))
        if self._conn != Conn.UNPAIRED or self._client is None:
            _LOGGER.error("Pairing: Cannot request pair as not connected")
            return
        try:
            if self._model == MODEL_CANDELA and self._is_client_bluez:
                await self._client.write_gatt_char(CONTROL_UUID, bits)
                return
            self._pair_resp_event.clear()
            await self._client.write_gatt_char(CONTROL_UUID, bits)
            # wait after pairing to receive notif of pair result:
            await self._pair_resp_event.wait()
        except asyncio.TimeoutError:
            _LOGGER.error("Pairing: Timeout error")
        except BleakError as err:
            _LOGGER.error(f"Pairing: BleakError: {err}")

    async def disconnect(self) -> None:
        if self._client is None:
            return
        try:
            await self._client.disconnect()
        except asyncio.TimeoutError:
            _LOGGER.error("Disconnection: Timeout error")
        except BleakError as err:
            _LOGGER.error(f"Disconnection: BleakError: {err}")
        self._conn = Conn.DISCONNECTED

    @property
    def mac(self) -> str:
        return self._mac

    @property
    def available(self) -> bool:
        return self._conn == Conn.PAIRED

    @property
    def model(self) -> str:
        return self._model

    @property
    def mode(self) -> int | None:
        return self._mode

    @property
    def is_on(self) -> bool:
        return self._is_on

    @property
    def temperature(self) -> int:
        return self._temperature

    @property
    def brightness(self) -> int:
        return self._brightness

    @property
    def color(self) -> tuple[int, int, int]:
        return self._rgb

    def get_prop_min_max(self) -> dict[str, Any]:
        return {
            "brightness": {"min": 0, "max": 100},
            "temperature": {"min": 1700, "max": 6500},
            "color": {"min": 0, "max": 255},
        }

    async def send_cmd(self, bits: bytes, wait_notif: float = 0.5) -> bool:
        await self.connect()
        if self._conn == Conn.PAIRED and self._client is not None:
            try:
                await self._client.write_gatt_char(CONTROL_UUID, bytearray(bits))
                await asyncio.sleep(wait_notif)
                return True
            except asyncio.TimeoutError:
                _LOGGER.error("Send Cmd: Timeout error")
            except BleakError as err:
                _LOGGER.error(f"Send Cmd: BleakError: {err}")
        return False

    async def get_state(self) -> None:
        """Request the state of the lamp (send back state through notif)"""
        bits = struct.pack("BBB15x", COMMAND_STX, CMD_GETSTATE, CMD_GETSTATE_SEC)
        _LOGGER.debug("Send Cmd: Get_state")
        await self.send_cmd(bits)

    async def turn_on(self) -> None:
        """Turn the lamp on. (send back state through notif)"""
        bits = struct.pack("BBB15x", COMMAND_STX, CMD_POWER, CMD_POWER_ON)
        _LOGGER.debug("Send Cmd: Turn On")
        await self.send_cmd(bits)

    async def turn_off(self) -> None:
        """Turn the lamp off. (send back state through notif)"""
        bits = struct.pack("BBB15x", COMMAND_STX, CMD_POWER, CMD_POWER_OFF)
        _LOGGER.debug("Send Cmd: Turn Off")
        await self.send_cmd(bits)

    # set_brightness/temperature/color do NOT send a notification back.
    # However, the lamp takes time to transition to new state
    # and if another command (including get_state) is sent during that time,
    # it stops the transition where it is...
    async def set_brightness(self, brightness: int) -> None:
        """Set the brightness [1-100] (no notif)"""
        brightness = min(100, max(0, int(brightness)))
        _LOGGER.debug(f"Set_brightness {brightness}")
        bits = struct.pack("BBB15x", COMMAND_STX, CMD_BRIGHTNESS, brightness)
        _LOGGER.debug("Send Cmd: Brightness")
        if await self.send_cmd(bits, wait_notif=0):
            self._brightness = brightness

    async def set_temperature(self, kelvin: int, brightness: int | None = None) -> None:
        """Set the temperature (White mode) [1700 - 6500 K] (no notif)"""
        if brightness is None:
            brightness = self._brightness
        kelvin = min(6500, max(1700, int(kelvin)))
        _LOGGER.debug(f"Set_temperature {kelvin}, {brightness}")
        bits = struct.pack(">BBhB13x", COMMAND_STX, CMD_TEMP, kelvin, brightness)
        _LOGGER.debug("Send Cmd: Temperature")
        if await self.send_cmd(bits, wait_notif=0):
            self._temperature = kelvin
            self._brightness = brightness
            self._mode = self.MODE_WHITE

    async def set_color(
        self, red: int, green: int, blue: int, brightness: int | None = None
    ) -> None:
        """Set the color of the lamp [0-255] (no notif)"""
        if brightness is None:
            brightness = self._brightness
        _LOGGER.debug(f"Set_color {(red, green, blue)}, {brightness}")
        bits = struct.pack(
            "BBBBBBB11x", COMMAND_STX, CMD_RGB, red, green, blue, 0x01, brightness
        )
        _LOGGER.debug("Send Cmd: Color")
        if await self.send_cmd(bits, wait_notif=0):
            self._rgb = (red, green, blue)
            self._brightness = brightness
            self._mode = self.MODE_COLOR

    async def get_name(self) -> None:
        """Get the name from the lamp (through notif)"""
        bits = struct.pack("BB16x", COMMAND_STX, CMD_GETNAME)
        _LOGGER.debug("Send Cmd: Get_Name")
        await self.send_cmd(bits)

    async def get_version(self) -> None:
        """Get the versions from the lamp (through notif)"""
        bits = struct.pack("BB16x", COMMAND_STX, CMD_GETVER)
        _LOGGER.debug("Send Cmd: Get_Version")
        await self.send_cmd(bits)

    async def get_serial(self) -> None:
        """Get the serial from the lamp (through notif)"""
        bits = struct.pack("BB16x", COMMAND_STX, CMD_GETSERIAL)
        _LOGGER.debug("Send Cmd: Get_Serial")
        await self.send_cmd(bits)

    def notification_handler(self, cHandle: int, data: bytearray) -> None:
        """Method called when a notification is sent from the lamp
        It is processed here rather than in the handleNotification() function,
        because the latter is not a method of the Lamp class, therefore it can't access
        the Lamp object's data
        :args: - data : the received data from the lamp in hex format
        """
        _LOGGER.debug(f"Received 0x{data.hex()} from handle={cHandle}")

        res_type = struct.unpack("xB16x", data)[0]  # the type of response we got
        if res_type == RES_GETSTATE:  # state result
            state = struct.unpack(">xxBBBBBBBhx6x", data)
            self._is_on = state[0] == CMD_POWER_ON
            if self._model == MODEL_CANDELA:
                self._brightness = state[1]
                self._mode = (
                    state[2] if self._conn == Conn.PAIRED else None
                )  # Not entirely sure this is the mode...
                # Candela seems to also give something in state 3 and 4...
            else:
                self._mode = state[1] if self._conn == Conn.PAIRED else None
                self._rgb = (state[2], state[3], state[4])  # , state[5])
                self._brightness = state[6]
                self._temperature = state[7]
            _LOGGER.debug(self)
            # Call any callback registered:
            self.run_state_changed_cb()

        if res_type == RES_PAIR:  # pairing result
            pair_mode = struct.unpack("xxB15x", data)[0]
            if pair_mode == 0x01:  # The lamp is requesting pairing. push small button!
                _LOGGER.error(
                    "Yeelight pairing request: Push the little button of the lamp now! (All commands will be ignored until the lamp is paired)"
                )
                self._mode = None  # unavailable in HA for now
                self._conn = Conn.PAIRING
            if pair_mode == 0x02:
                _LOGGER.debug("Yeelight pairing was successful!")
                self._conn = Conn.PAIRED
                self._pair_resp_event.set()
            if pair_mode == 0x03:
                _LOGGER.error(
                    "Yeelight is not paired! The next connection will attempt a new pairing request."
                )
                self._mode = None  # unavailable in HA
                self._conn = Conn.UNPAIRED
                self._pair_resp_event.set()
            if pair_mode == 0x04:
                _LOGGER.debug("Yeelight is already paired")
                self._conn = Conn.PAIRED
                self._pair_resp_event.set()
            if pair_mode == 0x06 or pair_mode == 0x07:
                # 0x07: Lamp disconnect imminent
                _LOGGER.error(
                    "The pairing request returned unexpected results. Please reset the lamp (https://www.youtube.com/watch?v=PnjcOSgnbAM) and the pairing process will be attempted again on next connection."
                )
                self._conn = Conn.UNPAIRED
                self._pair_resp_event.set()

        if res_type == RES_GETVER:
            self.versions = cast(str, struct.unpack("xxBHHHH6x", data))
            _LOGGER.info(f"Lamp {self._mac} exposes versions:{self.versions}")

        if res_type == RES_GETSERIAL:
            self.serial = struct.unpack("xxB15x", data)[0]
            _LOGGER.info(f"Lamp {self._mac} exposes serial:{self.serial}")

    async def read_services(self) -> None:
        if self._client is None:
            return
        for service in self._client.services:
            _LOGGER.info(f"[Service] {service}")
            for char in service.characteristics:
                if "read" in char.properties:
                    try:
                        value = bytes(await self._client.read_gatt_char(char.uuid))
                        _LOGGER.info(
                            f"__[Characteristic] {char} ({','.join(char.properties)}), Value: {str(value)}"
                        )
                    except Exception as e:
                        _LOGGER.error(
                            f"__[Characteristic] {char} ({','.join(char.properties)}), Value: {e}"
                        )

                else:
                    value = None
                    _LOGGER.info(
                        f"__[Characteristic] {char} ({','.join(char.properties)}), Value: {value}"
                    )

                for descriptor in char.descriptors:
                    try:
                        value = bytes(
                            await self._client.read_gatt_descriptor(descriptor.handle)
                        )
                        _LOGGER.info(
                            f"____[Descriptor] {descriptor}) | Value: {str(value)}"
                        )
                    except Exception as e:
                        _LOGGER.error(f"____[Descriptor] {descriptor}) | Value: {e}")


async def find_device_by_address(
    address: str, timeout: float = 20.0
) -> BLEDevice | None:
    from bleak import BleakScanner

    return await BleakScanner.find_device_by_address(address.upper(), timeout=timeout)


async def discover_yeelight_lamps(
    scanner: type[BleakScanner] | None = None,
) -> list[dict[str, Any]]:
    """Scanning feature
    Scan the BLE neighborhood for an Yeelight lamp
    This method requires the script to be launched as root
    Returns the list of nearby lamps
    """
    lamp_list = []
    scanner = scanner if scanner is not None else BleakScanner

    devices = await scanner.discover()
    for d in devices:
        model = model_from_name(d.name)
        if model != MODEL_UNKNOWN:
            lamp_list.append({"ble_device": d, "model": model})
            _LOGGER.info(f"found {model} with mac: {d.address}, details:{d.details}")
    return lamp_list


if __name__ == "__main__":

    import sys

    # bleak backends are very loud, this reduces the log spam when using --debug
    logging.getLogger("bleak.backends").setLevel(logging.WARNING)
    # start the logger to stdout
    logging.basicConfig(stream=sys.stdout, level=logging.DEBUG)
    _LOGGER.info("YEELIGHT_BT scanning starts")

    # start discovery:
    # lamp_list = asyncio.run(discover_yeelight_lamps())
    # _LOGGER.info("YEELIGHT_BT scanning ends")
    # from bleak import BleakScanner
    # device = asyncio.run( BleakScanner.find_device_by_address("F8:24:41:E6:3E:39", timeout=20.0))
    # print("DEVICE:")
    # print(device)
    # print("DEVICE END")
    # lamp_list = [device]

    # # now try to connect to the lamp
    # if not lamp_list:
    #     exit

    async def test_light() -> None:

        device = await find_device_by_address("F8:24:41:E6:3E:39")
        if device is None:
            print("No device found")
            return
        lamp_list = [{"ble_device": device, "model": MODEL_BEDSIDE}]

        yee = Lamp(cast(BLEDevice, lamp_list[0]["ble_device"]))
        await yee.connect()
        await asyncio.sleep(2.0)
        await yee.turn_on()
        await asyncio.sleep(2.0)
        await yee.turn_off()
        await asyncio.sleep(2.0)
        await yee.turn_on()
        await asyncio.sleep(2.0)
        await yee.get_name()
        await asyncio.sleep(2.0)
        await yee.get_version()
        await asyncio.sleep(2.0)
        await yee.get_serial()
        await asyncio.sleep(2.0)
        await yee.get_state()
        await asyncio.sleep(2.0)
        await yee.set_brightness(20)
        await asyncio.sleep(1.0)
        await yee.set_brightness(70)
        await asyncio.sleep(2.0)
        await yee.set_temperature(6000)
        await asyncio.sleep(2.0)
        await yee.set_color(red=100, green=250, blue=50)
        await asyncio.sleep(2.0)
        await yee.turn_off()
        await asyncio.sleep(2.0)
        await yee.disconnect()
        await asyncio.sleep(2.0)

    asyncio.run(test_light())
    print("The end")
