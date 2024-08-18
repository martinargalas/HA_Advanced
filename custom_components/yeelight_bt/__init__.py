"""Control Yeelight bluetooth lamp."""
import logging

from homeassistant.components.bluetooth import (
    async_ble_device_from_address,
    async_scanner_count,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import CONF_MAC
from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ConfigEntryNotReady

from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up yeelight_bt from a config entry."""
    _LOGGER.debug(f"integration async setup entry: {entry.as_dict()}")
    hass.data.setdefault(DOMAIN, {})

    # Find ble device here so that we can raise device not found on startup
    address = entry.data.get(CONF_MAC)

    # try to get ble_device using HA scanner first
    ble_device = async_ble_device_from_address(hass, address.upper(), connectable=True)
    _LOGGER.debug(f"BLE device through HA bt: {ble_device}")
    if ble_device is None:
        # Check if any HA scanner on:
        count_scanners = async_scanner_count(hass, connectable=True)
        _LOGGER.debug(f"Count of BLE scanners in HA bt: {count_scanners}")
        if count_scanners < 1:
            raise ConfigEntryNotReady(
                "No bluetooth scanner detected. \
                Enable the bluetooth integration or ensure an esphome device \
                is running as a bluetooth proxy"
            )
        raise ConfigEntryNotReady(f"Could not find Yeelight with address {address}")

    hass.data[DOMAIN][entry.entry_id] = ble_device
    hass.async_create_task(
        hass.config_entries.async_forward_entry_setup(entry, "light")
    )
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry."""
    _LOGGER.debug("async unload entry")
    unload_ok = await hass.config_entries.async_forward_entry_unload(entry, "light")

    if unload_ok:
        hass.data[DOMAIN].pop(entry.entry_id)
        if not hass.config_entries.async_entries(DOMAIN):
            hass.data.pop(DOMAIN)
    return unload_ok
