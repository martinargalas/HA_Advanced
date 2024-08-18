"""
Adds support for the Salus Thermostat units.
"""
import datetime
import time
import logging
import re
import requests
import json 

import homeassistant.helpers.config_validation as cv
import voluptuous as vol
from homeassistant.components.climate.const import (
    HVACAction,
    HVACMode,
    ClimateEntityFeature,
)
from homeassistant.const import (
    ATTR_TEMPERATURE,
    CONF_PASSWORD,
    CONF_USERNAME,
    CONF_ID,
    UnitOfTemperature,
)

try:
    from homeassistant.components.climate import (
        ClimateEntity,
        PLATFORM_SCHEMA,
    )
except ImportError:
    from homeassistant.components.climate import (
        ClimateDevice as ClimateEntity,
        PLATFORM_SCHEMA,
    )


from homeassistant.helpers.reload import async_setup_reload_service

__version__ = "0.0.3"


_LOGGER = logging.getLogger(__name__)

URL_LOGIN = "https://salus-it500.com/public/login.php"
URL_GET_TOKEN = "https://salus-it500.com/public/control.php"
URL_GET_DATA = "https://salus-it500.com/public/ajax_device_values.php"
URL_SET_DATA = "https://salus-it500.com/includes/set.php"

DEFAULT_NAME = "Salus Thermostat"


CONF_NAME = "name"

# Values from web interface
MIN_TEMP = 5
MAX_TEMP = 34.5

SUPPORT_FLAGS = ClimateEntityFeature.TARGET_TEMPERATURE

DOMAIN = "salusfy"
PLATFORMS = ["climate"]



PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
        vol.Required(CONF_USERNAME): cv.string,
        vol.Required(CONF_PASSWORD): cv.string,
        vol.Required(CONF_ID): cv.string,
    }
)


# def setup_platform(hass, config, add_entities, discovery_info=None):
async def async_setup_platform(hass, config, async_add_entities, discovery_info=None):
    await async_setup_reload_service(hass, DOMAIN, PLATFORMS)
    """Set up the E-Thermostaat platform."""
    name = config.get(CONF_NAME)
    username = config.get(CONF_USERNAME)
    password = config.get(CONF_PASSWORD)
    id = config.get(CONF_ID)

    # add_entities(
    #     [SalusThermostat(name, username, password, id)]
    async_add_entities(
    [SalusThermostat(name, username, password, id)]
    )


class SalusThermostat(ClimateEntity):
    """Representation of a Salus Thermostat device."""

    def __init__(self, name, username, password, id):
        """Initialize the thermostat."""
        self._name = name
        self._username = username
        self._password = password
        self._id = id
        self._current_temperature = None
        self._target_temperature = None
        self._frost = None
        self._status = None
        self._current_operation_mode = None
        self._token = None
        
        self._session = requests.Session()
        
        
        self.update()
    
    @property
    def supported_features(self):
        """Return the list of supported features."""
        return SUPPORT_FLAGS

    @property
    def name(self):
        """Return the name of the thermostat."""
        return self._name
        
    @property
    def unique_id(self) -> str:
        """Return the unique ID for this thermostat."""
        return "_".join([self._name, "climate"])

    @property
    def should_poll(self):
        """Return if polling is required."""
        return True

    @property
    def min_temp(self):
        """Return the minimum temperature."""
        return MIN_TEMP

    @property
    def max_temp(self):
        """Return the maximum temperature."""
        return MAX_TEMP

    @property
    def temperature_unit(self):
        """Return the unit of measurement."""
        return UnitOfTemperature.CELSIUS

    @property
    def current_temperature(self):
        """Return the current temperature."""
        return self._current_temperature

    @property
    def target_temperature(self):
        """Return the temperature we try to reach."""
        return self._target_temperature


    @property
    def hvac_mode(self):
        """Return hvac operation ie. heat, cool mode."""
        try:
            climate_mode = self._current_operation_mode
            curr_hvac_mode = HVACMode.OFF
            if climate_mode == "ON":
                curr_hvac_mode = HVACMode.HEAT
            else:
                curr_hvac_mode = HVACMode.OFF
        except KeyError:
            return HVACMode.OFF
        return curr_hvac_mode
        
    @property
    def hvac_modes(self):
        """HVAC modes."""
        return [HVACMode.HEAT, HVACMode.OFF]

    @property
    def hvac_action(self):
        """Return the current running hvac operation."""
        if self._status == "ON":
            return HVACAction.HEATING
        return HVACAction.IDLE
        

    @property
    def preset_mode(self):
        """Return the current preset mode, e.g., home, away, temp."""
        return self._status
        
    @property
    def preset_modes(self):
        """Return a list of available preset modes."""
        return SUPPORT_PRESET
        
        
    def set_temperature(self, **kwargs):
        """Set new target temperature."""
        temperature = kwargs.get(ATTR_TEMPERATURE)
        if temperature is None:
            return
        self._set_temperature(temperature)

    def _set_temperature(self, temperature):
        """Set new target temperature, via URL commands."""
        payload = {"token": self._token, "devId": self._id, "tempUnit": "0", "current_tempZ1_set": "1", "current_tempZ1": temperature}
        headers = {"content-type": "application/x-www-form-urlencoded"}
        try:
            if self._session.post(URL_SET_DATA, data=payload, headers=headers):
                self._target_temperature = temperature
                # self.schedule_update_ha_state(force_refresh=True)
            _LOGGER.info("Salusfy set_temperature OK")
        except:
            _LOGGER.error("Error Setting the temperature.")

    def set_hvac_mode(self, hvac_mode):
        """Set HVAC mode, via URL commands."""
        
        headers = {"content-type": "application/x-www-form-urlencoded"}
        if hvac_mode == HVACMode.OFF:
            payload = {"token": self._token, "devId": self._id, "auto": "1", "auto_setZ1": "1"}
            try:
                if self._session.post(URL_SET_DATA, data=payload, headers=headers):
                    self._current_operation_mode = "OFF"
            except:
                _LOGGER.error("Error Setting HVAC mode OFF.")
        elif hvac_mode == HVACMode.HEAT:
            payload = {"token": self._token, "devId": self._id, "auto": "0", "auto_setZ1": "1"}
            try:
                if self._session.post(URL_SET_DATA, data=payload, headers=headers):
                    self._current_operation_mode = "ON"
            except:
                _LOGGER.error("Error Setting HVAC mode.")
        _LOGGER.info("Setting the HVAC mode.")
            
    def get_token(self):
        """Get the Session Token of the Thermostat."""
        payload = {"IDemail": self._username, "password": self._password, "login": "Login", "keep_logged_in": "1"}
        headers = {"content-type": "application/x-www-form-urlencoded"}
        
        try:
            self._session.post(URL_LOGIN, data=payload, headers=headers)
            params = {"devId": self._id}
            getTkoken = self._session.get(URL_GET_TOKEN,params=params)
            result = re.search('<input id="token" type="hidden" value="(.*)" />', getTkoken.text)
            _LOGGER.info("Salusfy get_token OK")
            self._token = result.group(1)
        except:
            _LOGGER.error("Error Geting the Session Token.")

    def _get_data(self):
        if self._token is None:
            self.get_token()
        params = {"devId": self._id, "token": self._token, "&_": str(int(round(time.time() * 1000)))}
        try:
            r = self._session.get(url = URL_GET_DATA, params = params)
            try:
                if r:
                    data = json.loads(r.text)
                    _LOGGER.info("Salusfy get_data output OK")
                    self._target_temperature = float(data["CH1currentSetPoint"])
                    self._current_temperature = float(data["CH1currentRoomTemp"])
                    self._frost = float(data["frost"])
                    
                    status = data['CH1heatOnOffStatus']
                    if status == "1":
                      self._status = "ON"
                    else:
                      self._status = "OFF"
                    mode = data['CH1heatOnOff']
                    if mode == "1":
                      self._current_operation_mode = "OFF"
                    else:
                      self._current_operation_mode = "ON"
                else:
                    _LOGGER.error("Could not get data from Salus.")
            except:
                self.get_token()
                self._get_data()
        except:
            _LOGGER.error("Error Geting the data from Web. Please check the connection to salus-it500.com manually.")

    def update(self):
        """Get the latest data."""
        self._get_data()

