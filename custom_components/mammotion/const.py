"""Constants for the Mammotion Luba integration."""

import logging
from typing import Final

from bleak_retry_connector import BleakError, BleakNotFoundError
from pymammotion.mammotion.devices.mammotion import CharacteristicMissingError

DOMAIN: Final = "mammotion"

DEVICE_SUPPORT = ("Luba", "Yuka")

ATTR_DIRECTION = "direction"

DEFAULT_RETRY_COUNT = 3
CONF_RETRY_COUNT = "retry_count"
LOGGER: Final = logging.getLogger(__package__)

COMMAND_EXCEPTIONS = (
    BleakNotFoundError,
    CharacteristicMissingError,
    BleakError,
    TimeoutError,
)
