"""
Custom component for Home Assistant to enable sending messages via HASS Agent.


Example configuration.yaml entry:

notify:
  - name: hass notifier
    platform: hass_agent_notifier
    resource: http://192.168.0.1:5115/notify

With this custom component loaded, you can send messaged to a HASS Agent.
"""

import logging
from typing import Any
from contextlib import suppress

import requests
import voluptuous as vol
import re

from homeassistant.components.notify import (
    ATTR_TITLE_DEFAULT,
    ATTR_TITLE,
    ATTR_DATA,
    PLATFORM_SCHEMA,
    BaseNotificationService,
)

from homeassistant.components import media_source

from homeassistant.helpers.network import NoURLAvailableError, get_url

from http import HTTPStatus

from homeassistant.const import (
    CONF_RESOURCE,
)
import homeassistant.helpers.config_validation as cv

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({vol.Required(CONF_RESOURCE): cv.url})

_LOGGER = logging.getLogger(__name__)

CAMERA_PROXY_REGEX = re.compile(r"\/api\/camera_proxy\/camera\.(.*)")


def get_service(hass, config, discovery_info=None):
    """Get the HASS Agent notification service."""
    resource = config.get(CONF_RESOURCE)

    _LOGGER.info("Service created")

    return HassAgentNotificationService(hass, resource)


class HassAgentNotificationService(BaseNotificationService):
    """Implementation of the HASS Agent notification service"""

    def __init__(self, hass, resource):
        """Initialize the service."""
        self._resource = resource
        self._hass = hass

    def send_request(self, url, data):
        """Sends the json request"""
        return requests.post(url, json=data, timeout=10)

    async def async_send_message(self, message: str, **kwargs: Any):
        """Send the message to the provided resource."""
        _LOGGER.debug("Preparing notification")

        title = kwargs.get(ATTR_TITLE, ATTR_TITLE_DEFAULT)
        data = kwargs.get(ATTR_DATA, None)

        if data is None:
            data = dict()

        image = data.get("image", None)

        if image is not None:
            new_url = None

            camera_proxy_match = CAMERA_PROXY_REGEX.match(image)

            if camera_proxy_match is not None:
                camera = self.hass.states.get(f"camera.{camera_proxy_match.group(1)}")

                if camera is not None:
                    external_url = None
                    with suppress(NoURLAvailableError):  # external_url not configured
                        external_url = get_url(self.hass, allow_internal=False)

                    if external_url is not None:
                        access_token = camera.attributes["access_token"]
                        new_url = f"{external_url}{image}?token={access_token}"

            elif media_source.is_media_source_id(image):
                sourced_media = await media_source.async_resolve_media(self.hass, image)
                sourced_media = media_source.async_process_play_media_url(
                    self.hass, sourced_media.url
                )
                new_url = sourced_media

            if new_url is not None:
                data.update({"image": new_url})

        payload = {"message": message, "title": title, "data": data}

        _LOGGER.debug("Sending notification")

        try:

            response = await self.hass.async_add_executor_job(
                self.send_request, self._resource, payload
            )

            _LOGGER.debug("Checking result")

            if response.status_code == HTTPStatus.INTERNAL_SERVER_ERROR:
                _LOGGER.error(
                    "Server error. Response %d: %s",
                    response.status_code,
                    response.reason,
                )
            elif response.status_code == HTTPStatus.BAD_REQUEST:
                _LOGGER.error(
                    "Client error (bad request). Response %d: %s",
                    response.status_code,
                    response.reason,
                )
            elif response.status_code == HTTPStatus.NOT_FOUND:
                _LOGGER.debug(
                    "Server error (not found). Response %d: %s",
                    response.status_code,
                    response.reason,
                )
            elif response.status_code == HTTPStatus.METHOD_NOT_ALLOWED:
                _LOGGER.error(
                    "Server error (method not allowed). Response %d",
                    response.status_code,
                )
            elif response.status_code == HTTPStatus.REQUEST_TIMEOUT:
                _LOGGER.debug(
                    "Server error (request timeout). Response %d: %s",
                    response.status_code,
                    response.reason,
                )
            elif response.status_code == HTTPStatus.NOT_IMPLEMENTED:
                _LOGGER.error(
                    "Server error (not implemented). Response %d: %s",
                    response.status_code,
                    response.reason,
                )
            elif response.status_code == HTTPStatus.SERVICE_UNAVAILABLE:
                _LOGGER.error(
                    "Server error (service unavailable). Response %d",
                    response.status_code,
                )
            elif response.status_code == HTTPStatus.GATEWAY_TIMEOUT:
                _LOGGER.error(
                    "Network error (gateway timeout). Response %d: %s",
                    response.status_code,
                    response.reason,
                )
            elif response.status_code == HTTPStatus.OK:
                _LOGGER.debug(
                    "Success. Response %d: %s", response.status_code, response.reason
                )
            else:
                _LOGGER.debug(
                    "Unknown response %d: %s", response.status_code, response.reason
                )

        except Exception as ex:
            _LOGGER.debug("Error sending message: %s", ex)
