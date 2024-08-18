""" light platform """
from __future__ import annotations

import asyncio
import logging
from typing import TYPE_CHECKING, Any

import homeassistant.helpers.config_validation as cv
import voluptuous as vol
from homeassistant.components.light import (  # ATTR_EFFECT,; SUPPORT_EFFECT,
    ATTR_BRIGHTNESS,
    ATTR_COLOR_TEMP,
    ATTR_HS_COLOR,
    ENTITY_ID_FORMAT,
    PLATFORM_SCHEMA,
    SUPPORT_BRIGHTNESS,
    SUPPORT_COLOR,
    SUPPORT_COLOR_TEMP,
    LightEntity,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_MAC, CONF_NAME, EVENT_HOMEASSISTANT_STOP
from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity import generate_entity_id
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.util.color import color_hs_to_RGB, color_RGB_to_hs
from homeassistant.util.color import (
    color_temperature_kelvin_to_mired as kelvin_to_mired,
)
from homeassistant.util.color import (
    color_temperature_mired_to_kelvin as mired_to_kelvin,
)

from .const import DOMAIN
from .yeelightbt import MODEL_CANDELA, BleakError, Lamp

if TYPE_CHECKING:
    from bleak.backends.device import BLEDevice

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_MAC): cv.string,
        vol.Optional(CONF_NAME, default=DOMAIN): cv.string,
    }
)

LIGHT_EFFECT_LIST = ["flow", "none"]

SUPPORT_YEELIGHT_BT = SUPPORT_BRIGHTNESS  # | SUPPORT_EFFECT
SUPPORT_YEELIGHT_BEDSIDE = SUPPORT_YEELIGHT_BT | SUPPORT_COLOR_TEMP | SUPPORT_COLOR

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(
    hass: HomeAssistant,
    config_entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up the platform from config_entry."""
    _LOGGER.debug(
        f"light async_setup_entry: setting up the config entry {config_entry.title} "
        f"with data:{config_entry.data}"
    )
    name = config_entry.data.get(CONF_NAME) or DOMAIN
    ble_device = hass.data[DOMAIN][config_entry.entry_id]

    entity = YeelightBT(name, ble_device)
    async_add_entities([entity])


class YeelightBT(LightEntity):
    """Representation of a light."""

    def __init__(self, name: str, ble_device: BLEDevice) -> None:
        """Initialize the light."""
        self._name = name
        self._mac = ble_device.address
        self.entity_id = generate_entity_id(ENTITY_ID_FORMAT, self._name, [])
        self._is_on = False
        self._rgb = (0, 0, 0)
        self._ct = 0
        self._brightness = 0
        self._effect_list = LIGHT_EFFECT_LIST
        self._effect = "none"
        self._available = False

        _LOGGER.info(f"Initializing YeelightBT Entity: {self.name}, {self._mac}")
        self._dev = Lamp(ble_device)
        self._dev.add_callback_on_state_changed(self._status_cb)
        self._prop_min_max = self._dev.get_prop_min_max()
        self._min_mireds = kelvin_to_mired(
            self._prop_min_max["temperature"]["max"]
        )  # reversed scale
        self._max_mireds = kelvin_to_mired(
            self._prop_min_max["temperature"]["min"]
        )  # reversed scale

    async def async_added_to_hass(self) -> None:
        """Run when entity about to be added to hass."""
        self.async_on_remove(
            self.hass.bus.async_listen_once(
                EVENT_HOMEASSISTANT_STOP, self.async_will_remove_from_hass
            )
        )
        # schedule immediate refresh of lamp state:
        self.async_schedule_update_ha_state(force_refresh=True)

    async def async_will_remove_from_hass(self) -> None:
        """Run when entity will be removed from hass."""
        _LOGGER.debug("Running async_will_remove_from_hass")
        try:
            await self._dev.disconnect()
        except BleakError:
            _LOGGER.debug(
                f"Exception disconnecting from {self._dev._mac}", exc_info=True
            )

    @property
    def device_info(self) -> dict[str, Any]:
        # TODO: replace with _attr
        prop = {
            "identifiers": {
                # Serial numbers are unique identifiers within a specific domain
                (DOMAIN, self.unique_id)
            },
            "name": self._name,
            "manufacturer": "Yeelight",
            "model": self._dev.model,
        }
        if self._dev.versions:
            prop.update({"sw_version": "-".join(map(str, self._dev.versions[1:4]))})
        return prop

    @property
    def unique_id(self) -> str:
        # TODO: replace with _attr
        """Return the unique id of the light."""
        return self._mac

    @property
    def available(self) -> bool:
        return self._available

    @property
    def should_poll(self) -> bool:
        """Polling needed for a updating status."""
        return True

    @property
    def name(self) -> str:
        """Return the name of the light if any."""
        return self._name

    @property
    def min_mireds(self) -> float:
        """Return minimum supported color temperature."""
        return self._min_mireds

    @property
    def max_mireds(self) -> float:
        """Return minimum supported color temperature."""
        return self._max_mireds

    @property
    def brightness(self) -> int:
        """Return the brightness of this light between 0..255."""
        return self._brightness

    @property
    def hs_color(self) -> tuple[Any]:
        """
        Return the Hue and saturation color value.
        Lamp has rgb => we calculate hs
        """
        return color_RGB_to_hs(*self._rgb)

    @property
    def color_temp(self) -> int:
        """Return the CT color temperature."""
        return self._ct

    # @property
    # def effect_list(self):
    #     """Return the list of supported effects."""
    #     return self._effect_list

    # @property
    # def effect(self):
    #     """Return the current effect."""
    #     return self._effect

    @property
    def is_on(self) -> bool:
        """Return true if light is on."""
        return self._is_on

    @property
    def supported_features(self) -> int:
        """Flag supported features."""
        if self._dev.model == MODEL_CANDELA:
            return SUPPORT_YEELIGHT_BT
        return SUPPORT_YEELIGHT_BEDSIDE

    def _status_cb(self) -> None:
        _LOGGER.debug("Got state notification from the lamp")
        self._available = self._dev.available
        if not self._available:
            self.async_write_ha_state()
            return

        self._brightness = int(round(255.0 * self._dev.brightness / 100))
        self._is_on = self._dev.is_on
        if self._dev.mode == self._dev.MODE_WHITE:
            temp_in_k = int(self.scale_temp_reversed(self._dev.temperature))
            self._ct = int(kelvin_to_mired(temp_in_k))
            self._rgb = (0, 0, 0)
        else:
            self._ct = 0
            self._rgb = self._dev.color
        self.async_write_ha_state()

    async def async_update(self) -> None:
        # Note, update should only start fetching,
        # followed by asynchronous updates through notifications.
        try:
            _LOGGER.debug("Requesting an update of the lamp status")
            await self._dev.get_state()
        except Exception as ex:
            _LOGGER.error(f"Fail requesting the light status. Got exception: {ex}")
            _LOGGER.debug("Yeelight_BT trace:", exc_info=True)

    async def async_turn_on(self, **kwargs: int) -> None:
        """Turn the light on."""
        _LOGGER.debug(f"Trying to turn on. with ATTR:{kwargs}")

        # First if brightness of dev to 0: turn off
        if ATTR_BRIGHTNESS in kwargs:
            brightness = kwargs[ATTR_BRIGHTNESS]
            if brightness == 0:
                _LOGGER.debug("Lamp brightness to be set to 0... so turning off")
                await self.async_turn_off()
                return
        else:
            brightness = self._brightness
        brightness_dev = int(round(brightness * 1.0 / 255 * 100))

        # ATTR cannot be set while light is off, so turn it on first
        if not self._is_on:
            await self._dev.turn_on()
            if any(
                keyword in kwargs
                for keyword in (ATTR_HS_COLOR, ATTR_COLOR_TEMP, ATTR_BRIGHTNESS)
            ):
                await asyncio.sleep(0.5)  # wait for the lamp to turn on
        self._is_on = True

        if ATTR_HS_COLOR in kwargs:
            rgb: tuple[int, int, int] = color_hs_to_RGB(*kwargs.get(ATTR_HS_COLOR))
            self._rgb = rgb
            _LOGGER.debug(
                f"Trying to set color RGB:{rgb} with brighntess:{brightness_dev}"
            )
            await self._dev.set_color(*rgb, brightness=brightness_dev)
            # assuming new state before lamp update comes through:
            self._brightness = brightness_dev
            await asyncio.sleep(0.7)  # give time to transition before HA request update
            return

        if ATTR_COLOR_TEMP in kwargs:
            mireds = kwargs[ATTR_COLOR_TEMP]
            temp_in_k = int(mired_to_kelvin(mireds))
            scaled_temp_in_k = self.scale_temp(temp_in_k)
            _LOGGER.debug(
                f"Trying to set temp:{scaled_temp_in_k} with brightness:{brightness_dev}"
            )
            await self._dev.set_temperature(scaled_temp_in_k, brightness=brightness_dev)
            self._ct = mireds
            # assuming new state before lamp update comes through:
            self._brightness = brightness_dev
            await asyncio.sleep(0.7)  # give time to transition before HA request update
            return

        if ATTR_BRIGHTNESS in kwargs:
            _LOGGER.debug(f"Trying to set brightness: {brightness_dev}")
            await self._dev.set_brightness(brightness_dev)
            # assuming new state before lamp update comes through:
            self._brightness = int(round(float(brightness_dev) * 2.55))
            await asyncio.sleep(0.7)  # give time to transition before HA request update
            return

        # if ATTR_EFFECT in kwargs:
        #    self._effect = kwargs[ATTR_EFFECT]

    async def async_turn_off(self, **kwargs: int) -> None:
        """Turn the light off."""

        await self._dev.turn_off()
        self._is_on = False

    def scale_temp(self, temp: int) -> int:
        """Scale the temperature so that the white in HA UI correspond to the
        white on the lamp!"""
        a = self._prop_min_max["temperature"]["min"]
        b = self._prop_min_max["temperature"]["max"]
        mid = 2740  # the temp HA wants to set at when cliking on white in UI
        white = 4080  # the temp that correspond to true white on the lamp

        if temp < mid:
            new_temp = (white - a) / (mid - a) * temp + a * (mid - white) / (mid - a)
        else:
            new_temp = (b - white) / (b - mid) * temp + b * (white - mid) / (b - mid)
        return round(new_temp)

    def scale_temp_reversed(self, temp: int) -> int:
        """Reverse the scale to match HA UI"""
        a = self._prop_min_max["temperature"]["min"]
        b = self._prop_min_max["temperature"]["max"]
        mid = 2740
        white = 4080

        if temp < white:
            new_temp = (mid - a) / (white - a) * temp - a * (mid - white) / (white - a)
        else:
            new_temp = (b - mid) / (b - white) * temp - b * (white - mid) / (b - white)
        return round(new_temp)
