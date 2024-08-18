"""Platform for sensor integration."""

import logging
from datetime import timedelta
import json
import requests
import voluptuous as vol

from homeassistant.components.sensor import PLATFORM_SCHEMA
import homeassistant.helpers.config_validation as cv
from homeassistant.const import (CONF_TIME_ZONE)
from homeassistant.util import Throttle
from homeassistant.helpers.entity import Entity

import abalin_nameday

DOMAIN = "abalin_nameday"

_LOGGER = logging.getLogger(__name__)

SCAN_INTERVAL = timedelta(minutes=60)
MIN_TIME_BETWEEN_UPDATES = timedelta(minutes=30)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(CONF_TIME_ZONE): cv.string,
    vol.Required("country"): cv.string,
})

SENSOR_PREFIX = 'Nameday '

async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    """Set up the sensor platform."""
    country = config.get("country")
    timezone = config.get(CONF_TIME_ZONE)

    try:
        data = NameDayData(country, timezone)
    except requests.exceptions.HTTPError as error:
        _LOGGER.error(error)
        return False

    entities = []

    entities.append(NameDaySensor(data))

    async_add_entities(entities, True)


class NameDayData(object):

    def __init__(self, country, timezone):
        self._state = None
        self.country = country
        self.timezone = timezone
        self.data = None

    @Throttle(MIN_TIME_BETWEEN_UPDATES)
    def update(self, sensorType):
        _LOGGER.debug("Updating NameDay sensor")
        myNameDay = abalin_nameday.namedayRequestor(self.country, self.timezone)
        try:
            self.data = json.loads(myNameDay.GetData())
        except requests.exceptions.RequestException as exc:
            _LOGGER.error("Error occurred while fetching data: %r", exc)
            self.data = None
            return False

class NameDaySensor(Entity):

    def __init__(self, data):
        self.data = data
        self.type = "NameDay"
        self._name = SENSOR_PREFIX + data.country.upper()
        self._unit = None
        self._icon = "mdi:account-details"
        self._state = None

    @property
    def name(self):
        return self._name

    @property
    def icon(self):
        return self._icon

    @property
    def state(self):
        return self._state

    @property
    def unit_of_measurement(self):
        return self._unit

    def update(self):
        """
        This is the only method that should fetch new data for Home Assistant.
        """
        self.data.update(self.type)

        nameDayData = self.data.data

        try:
            self._state = nameDayData["namedays"]["nameday"][self.data.country]
        except:
            self._state = None
