"""CEZ Distribuce"""

__version__ = "0.2"

import logging
from datetime import timedelta
import voluptuous as vol
import requests

from homeassistant.components.sensor import PLATFORM_SCHEMA
import homeassistant.helpers.config_validation as cv
from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.util import Throttle

from .continuous_measurement import ContinuousMeasurement
from .downloader import isHdo, getRequestUrl


MIN_TIME_BETWEEN_SCANS = timedelta(seconds=3600)
_LOGGER = logging.getLogger(__name__)

DOMAIN = "cezdistribuce"
CONF_REGION = "region"
CONF_CODE = "code"
CONF_NAME = "name"


PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_REGION): cv.string,
        vol.Required(CONF_CODE): cv.string,
        vol.Required(CONF_NAME): cv.string,
    }
)


def setup_platform(hass, config, add_entities, discovery_info=None):
    "setup platform"
    name = config.get(CONF_NAME)
    region = config.get(CONF_REGION)
    code = config.get(CONF_CODE)

    entities = []
    entities.append(CezDistribuce(name, region, code))
    add_entities(entities)


class CezDistribuce(BinarySensorEntity):
    "sensor class"

    def __init__(self, name, region, code):
        """Initialize the sensor."""
        self._name = name
        self.region = region
        self.code = code
        self.responseJson = "[]"
        self.update()

    @property
    def name(self):
        "sensor name"
        return self._name

    @property
    def icon(self):
        "sensor icon"
        return "mdi:power"

    @property
    def is_on(self):
        "sensor on/off"
        return isHdo(self.responseJson["data"])

    @property
    def extra_state_attributes(self):
        "additional attributes"
        attributes = {}
        attributes["response_json"] = self.responseJson
        return attributes

    @property
    def should_poll(self):
        "is pooled sensor"
        return True

    @property
    def available(self):
        "is available, based on latest data read"
        return self.last_update_success

    @property
    def device_class(self):
        "no device class"
        return ""

    @property
    def unique_id(self):
        "unique name"
        return "cezdistribuce_" + self._name

    @Throttle(MIN_TIME_BETWEEN_SCANS)
    def update(self):
        "update sensor"
        # REGION = "regionStred"
        # CODE = "A1B5DP6"
        _LOGGER.debug("Update data for code %s in region %s",self.code, self.region)
        if self.code in ContinuousMeasurement.isContinuousCode():
            self.responseJson = ContinuousMeasurement.getCode(self.code)
            _LOGGER.debug("Region %s read local data: %s",self.code, self.responseJson)
            self.last_update_success = True
            return

        response = requests.get(getRequestUrl(self.region, self.code), timeout=30)
        if response.status_code == 200:
            self.responseJson = response.json()
            _LOGGER.debug("Region %s read data from web: %s", self.responseJson)
            self.last_update_success = True
        else:
            _LOGGER.warning("Error getting data from CEZ. Status code: %s", 
                            self.code, response.status_code)
            self.last_update_success = False
