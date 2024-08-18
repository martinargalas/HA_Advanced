"""
Custom component for Home Assistant to enable controlling the PC on which HASS.Agent is installed as a mediaplayer.

https://github.com/LAB02-Research/HASS.Agent

Example configuration.yaml entry:

media_player:
  - platform: hass_agent_mediaplayer
    name: hassagent mediaplayer
    host: 192.168.0.1

With this custom component loaded, you can control the media on which HASS.Agent is installed and send TTS audio.
"""
from __future__ import annotations

import logging
import re
import asyncio
import requests
import voluptuous as vol
import homeassistant.helpers.config_validation as cv

from homeassistant.components.media_player import (
    DEVICE_CLASSES_SCHEMA,
    PLATFORM_SCHEMA,
    MediaPlayerEntity,
    MediaPlayerEntityFeature,
)

from homeassistant.components.media_player.const import (
    MEDIA_TYPE_MUSIC
)

from homeassistant.components.media_player.browse_media import (
    async_process_play_media_url,
)

from homeassistant.const import (
    CONF_HOST,
    CONF_NAME,
    CONF_PORT,
    STATE_IDLE,
    STATE_OFF,
    STATE_PAUSED,
    STATE_PLAYING
)

from homeassistant.core import HomeAssistant
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.typing import ConfigType, DiscoveryInfoType
from homeassistant.components import media_source

_LOGGER = logging.getLogger(__name__)

DEFAULT_NAME = "hass-agent-mediaplayer"
DEFAULT_PORT = 5115

SUPPORT_HAMP = (
    MediaPlayerEntityFeature.VOLUME_MUTE
    | MediaPlayerEntityFeature.PAUSE
    | MediaPlayerEntityFeature.STOP
    | MediaPlayerEntityFeature.PREVIOUS_TRACK
    | MediaPlayerEntityFeature.NEXT_TRACK
    | MediaPlayerEntityFeature.VOLUME_STEP
    | MediaPlayerEntityFeature.PLAY
    | MediaPlayerEntityFeature.PLAY_MEDIA
)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend(
    {
        vol.Required(CONF_HOST): cv.string,
        vol.Optional(CONF_NAME, default=DEFAULT_NAME): cv.string,
        vol.Optional(CONF_PORT, default=DEFAULT_PORT): cv.port,
    }
)


def setup_platform(
    hass: HomeAssistant,
    config: ConfigType,
    add_entities: AddEntitiesCallback,
    discovery_info: DiscoveryInfoType | None = None,
) -> None:
    """ Configure a HASS.Agent MediaPlayer """
    name = config.get(CONF_NAME)
    host = config.get(CONF_HOST)
    port = config.get(CONF_PORT)

    url = f"http://{host}:{port}/media"

    add_entities([HassAgentMediaPlayerDevice(name, url)], True)


class HassAgentMediaPlayerDevice(MediaPlayerEntity):
    """ HASS.Agent MediaPlayer Device """

    def __init__(self, name, url):
        """ Initialize """
        self._name = name
        self._url = url
        self._available = False
        self._muted = False
        self._volumeLevel = 0
        self._playing = ""
        self._state = ""

    def update(self):
        """ Get the current states """
        try:
            """ Muted """
            params = {"request": "muted"}
            response = requests.get(f"{self._url}", params=params, timeout=3)
            self._muted = response.text == "1"

            """ VolumeLevel """
            params = {"request": "volume"}
            response = requests.get(f"{self._url}", params=params, timeout=3)
            self._volumeLevel = int(response.text)

            """ Playing """
            params = {"request": "playing"}
            response = requests.get(f"{self._url}", params=params, timeout=3)
            self._playing = response.text

            """ State """
            params = {"request": "state"}
            response = requests.get(f"{self._url}", params=params, timeout=3)
            self._state = response.text

            """ Done """
            self._available = True
        except requests.exceptions.RequestException:
            if self.available:
                _LOGGER.debug("Could not connect to HASS.Agent MediaPlayer at: %s", self._url)

            self._playing = ""
            self._state = ""
            self._available = False

    def _send_command(self, command):
        """ Send a command """
        try:
            _LOGGER.debug("Sending command: %s", command)

            params = {"command": command}
            requests.get(f"{self._url}", params=params, timeout=3)
        except requests.exceptions.RequestException:
            _LOGGER.debug(
                "Could not send command %d to HASS.Agent MediaPlayer at: %s", command, self._url
            )

    def _send_media(self, media):
        """ Send the command to start playing a media URI """
        try:
            _LOGGER.debug("Sending media: %s", media)

            params = {"play_media": media}
            requests.get(f"{self._url}", params=params, timeout=3)
        except requests.exceptions.RequestException:
            _LOGGER.debug(
                "Could not send media %d to HASS.Agent MediaPlayer at: %s", media, self._url
            )

    @property
    def name(self):
        """ Return the name of the device """
        return self._name

    @property
    def state(self):
        """ Return the state of the device """
        if self._state is None:
            return STATE_OFF
        if self._state == "idle":
            return STATE_IDLE
        if self._state == "playing":
            return STATE_PLAYING
        if self._state == "paused":
            return STATE_PAUSED

        return STATE_IDLE

    @property
    def available(self):
        """ Return if we're available """
        return self._available

    @property
    def media_title(self):
        """ Return the title of current playing media """
        return self._playing

    @property
    def volume_level(self):
        """ Return the volume level of the media player (0..1) """
        return self._volumeLevel / 100.0

    @property
    def is_volume_muted(self):
        """ Return if volume is currently muted """
        return self._muted

    @property
    def media_duration(self):
        """ Return the duration of the current playing media in seconds """
        """ NOT IMPLEMENTED """
        return 0

    @property
    def supported_features(self):
        """ Flag media player features that are supported """
        return SUPPORT_HAMP

    @property
    def device_class(self):
        """ Announce ourselve as a speaker """
        return "DEVICE_CLASS_SPEAKER"

    @property
    def media_content_type(self):
        """ Content type of current playing media """
        return MEDIA_TYPE_MUSIC

    def volume_up(self):
        """ Volume up the media player """
        self._send_command("volumeup")

    def volume_down(self):
        """ Volume down media player """
        self._send_command("volumedown")

    def mute_volume(self, mute):
        """ Mute the volume """
        self._send_command("mute")

    def media_play(self):
        """ Send play command """
        self._send_command("play")
        self._state = STATE_PLAYING

    def media_pause(self):
        """ Send pause command """
        self._send_command("pause")
        self._state = STATE_PAUSED

    def media_stop(self):
        """ Send stop command """
        self._send_command("stop")
        self._state = STATE_PAUSED

    def media_next_track(self):
        """ Send next track command """
        self._send_command("next")

    def media_previous_track(self):
        """ Send previous track command """
        self._send_command("previous")

    def play_media(self, media_type: str, media_id: str, **kwargs: Any):
        """ Play media source """
        if media_type != MEDIA_TYPE_MUSIC:
            _LOGGER.error(
                "Invalid media type %r. Only %s is supported!",
                media_type,
                MEDIA_TYPE_MUSIC,
            )
            return

        if media_source.is_media_source_id(media_id):
            play_item = asyncio.run_coroutine_threadsafe(
                media_source.async_resolve_media(self.hass, media_id), self.hass.loop
            ).result()

            # play_item returns a relative URL if it has to be resolved on the Home Assistant host
            # This call will turn it into a full URL
            media_id = async_process_play_media_url(self.hass, play_item.url)

        _LOGGER.debug("Received media request from HA: %s", media_id)

        self._send_media(media_id)
        self._state = STATE_PLAYING
