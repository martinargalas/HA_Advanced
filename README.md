# 🏠 HA_Advanced — Home Assistant Configuration

> **Advanced Home Assistant setup** — Fully automated smart home running on **Home Assistant 2026.3.1**, integrating solar energy management, multi-room audio, AI-powered voice assistants, security cameras, robotic lawnmower, heating control, and much more.

![Stars](https://img.shields.io/github/stars/martinargalas/HA_Advanced?style=flat-square)
![HA Version](https://img.shields.io/badge/HA-2026.3.1-blue?style=flat-square&logo=home-assistant)
![Entities](https://img.shields.io/badge/Entities-1888-green?style=flat-square)
![Automations](https://img.shields.io/badge/Automations-79-orange?style=flat-square)

---

## 📦 Repository Structure

```
home-assistant/config/
├── automations.yaml          # All automations
├── configuration.yaml        # Main HA configuration
├── .HA_VERSION               # Current HA version
├── .gitignore
├── blueprints/               # Custom automation blueprints
├── custom_components/        # HACS & custom integrations
├── themes/                   # UI themes
├── tts/                      # Text-to-speech files
├── ui_lovelace_minimalist/   # UI Lovelace Minimalist theme
├── www/community/            # Frontend custom cards
├── zigbee2mqtt/              # Zigbee2MQTT config
├── image/                    # Custom images
└── .cloud/                   # Nabu Casa cloud config
```

---

## 🌟 Feature Overview

### ⚡ Energy Management
Full solar + grid monitoring and cost tracking with a **GoodWe inverter** and smart metering.

- Real-time PV production (2 strings), grid import/export, house consumption per floor
- Virtual battery tracking for energy accounting
- Czech electricity tariff calculator (low/high tariff, distribution fees, taxes, POZE, OTE)
- Monthly/yearly energy statistics with cost breakdown
- Integration with **CEZ Distribuce CZ** for tariff switching
- PND (Power Node Data) script for interval-based analysis

### 🌡️ Heating & Hot Water
- Heat pump control — heating curve, reduced/comfort temperatures
- DHW (domestic hot water) temperature management with hysteresis
- Seasonal performance factor (SCOP) monitoring
- Heating rod hours and compressor statistics
- Smart On/Off automation based on season

### 🎵 Multi-room Audio (Sonos + Music Assistant)
- **Sonos** speakers
- **Music Assistant** with Subsonic/Plex/YouTube integration
- yTube Music Player with playlist and speaker selector
- Radio presets: Evropa 2, Country Radio, Impuls, Rock Radio, Frekvence 1, Rádiožurnál
- TTS announcements via OpenAI TTS, ElevenLabs, Piper, Google Translate
- Fade volume scripts, bathroom motion-triggered music

### 🤖 AI Voice Assistants (Multi-LLM)
- **Claude** (Anthropic) — primary conversation agent
- **ChatGPT / OpenAI** — extended conversation + STT/TTS
- **Ollama** — local LLM
- **ElevenLabs** — high-quality TTS
- **OpenWakeWord + Whisper (faster-whisper)** — local wake word detection and STT
- ViewAssist integration on kitchen tablet and PC
- HASS.Agent for Windows PC control

### 📷 Security & Cameras (Eufy + Frigate)
- **3× Eufy cameras**: Garage, Garden (Zahrada), Front Door (Přední dveře)
- **Frigate NVR** with AI object detection: person, car, pet, bicycle, motorcycle, cat, dog
- Person recognition via **Double Take** + **DeepStack**
- Family face recognition (Martin, Babina, Ema, Ondra, Kristyna, Děda, Gary)
- Motion alerts with snapshot notifications
- Camera live stream directly to LG OLED TV
- Homebase 3 alarm panel with guard mode

### 🌿 Robotic Lawnmower (Mammotion Luba)
- Autonomous GPS mower with RTK station
- Per-zone scheduling switches and angle control
- Mowing progress, speed, area, time tracking
- Rain detection, obstacle avoidance, camera integration

### 🪟 Smart Blinds / Covers
- **3 motorized covers**: Office, Kids room, Balcony (Aqara)
- Sun-angle based automation for max/mid/min tilt positions
- Seasonal settings (summer/winter) with configurable input numbers
- User-override switches per room

### 💡 Lighting
- **Philips Hue** lights: Living room, Kitchen bar, Garden (front + zones 1-5), Hallway, Hall
- **WLED** LED strip in kitchen with 31 addressable segments — effects, color palettes, presets
- Motion-triggered lights: WC (with timeout), Kitchen presence, Living room luminance
- Light scenes: Energize, Concentrate, Relax, Read, Nightlight, Rest, Natural Light
- Kids star projector automation
- Bathroom light automation (manual + auto with Aqara FP2 presence sensor)

### 🖥️ Media & Entertainment
- **NVIDIA SHIELD** (Android TV) + Apple TV 4K
- **PlayStation 5** — play time tracking, trophy stats, parental control (2h/day limit with notifications)
- **Plex** media server with multiple clients
- **Sonarr / Radarr / Lidarr / Bazarr** — media automation stack
- **SABnzbd + qBittorrent** via Gluetun VPN
- **Jackett / Prowlarr / Flaresolverr** — indexers
- **Overseerr/Seerr** — media requests
- Upcoming media cards (TMDB, Sonarr, Radarr)
- Spotify integration with Spotcast

### 🌐 Network & Infrastructure
- **Pi-Hole** DNS ad blocking (stats, enable/disable)
- **Cloudflared** tunnel
- **Traefik** reverse proxy
- **Portainer** Docker management (multiple instances)
- **Glances** system monitoring
- **Prometheus + Grafana + cAdvisor + Node Exporter** — full metrics stack
- **Uptime Kuma** — service monitoring
- **Immich** — self-hosted photo management
- **Vaultwarden** — password manager
- **Homepage** dashboard
- TP-Link X50 router (IP, download/upload speed)

### 📊 Dashboards (UI Lovelace Minimalist)
- Custom ApexCharts for energy, power flow, temperature history
- Sankey diagram for energy flows
- Power Flow Card Plus
- Bubble Card, Mushroom Cards, Mini Graph Card
- Frigate camera cards with WebRTC
- Mediarr media card
- WallPanel / Fully Kiosk on Samsung Tab A8 (kitchen tablet)
- Clock Weather Card, Atomic Calendar Revive

### 🔔 Notifications & Alerts
- Washing machine cycle completion notification
- Fridge temperature alarm
- Energy cost daily notification
- Kids bus departure reminder (KidsBus automation)
- PS5 playtime limit warnings (60 min / 120 min / forced stop at 122 min)
- Security camera motion alerts
- Teeth brushing reminder for kids (zuby automation)
- News feed updates (iDNES.cz RSS)

### 🌤️ Weather & Environment
- **Aladin** weather (Czech meteo service) + Home Assistant Forecast
- **Trinec-Kosmos** air quality station (NO₂, O₃, SO₂, PM10, PM2.5)
- Indoor climate: multiple Aqara temperature/humidity sensors in all rooms
- Smart radiator thermostats (E1) in 8 rooms
- Aqara FP2 millimeter-wave presence sensor (bathroom)

---

## 🧩 Key Custom Components (HACS)

| Component | Purpose |
|-----------|---------|
| `extended_openai_conversation` | Multi-LLM AI assistants |
| `mammotion` | Luba robotic mower |
| `eufy_security` | Eufy cameras + Homebase |
| `frigate` | NVR with AI detection |
| `double_take` | Face recognition |
| `music_assistant` | Multi-source audio |
| `ytube_music_player` | YouTube Music |
| `spotcast` | Spotify Cast |
| `browser_mod` | Browser control |
| `hass_agent` | Windows PC integration |
| `local_tuya` | Local Tuya devices |
| `plex_recently_added` | Plex media cards |
| `alarmo` | Alarm management |
| `stream_assist` / `view_assist` | Voice assistant UI |
| `llm_vision` | Vision AI integration |
| `portainer` | Docker monitoring |
| `pihole` | DNS ad blocking |
| `cez_distribuce_cz` | Czech electricity tariffs |

---

## 🏗️ Infrastructure

```
Home Server (Docker / Portainer)
├── Home Assistant
├── Frigate NVR
├── Music Assistant
├── Plex Media Server
├── Sonarr / Radarr / Lidarr / Bazarr
├── SABnzbd + qBittorrent (via Gluetun VPN)
├── Jackett / Prowlarr / Flaresolverr
├── Overseerr / Seerr
├── Immich (photos)
├── Vaultwarden (passwords)
├── Pi-Hole (DNS)
├── Prometheus + Grafana + Node Exporter + cAdvisor
├── Uptime Kuma
├── Glances
├── Homepage
├── AppDaemon
├── Cloudflared
├── Traefik
├── go2rtc
├── OpenWebUI
├── Whisper (STT) + Piper (TTS) + OpenWakeWord
└── DeepStack (AI object detection)
```

---

## ⚙️ Automation Highlights

| Automation | Description |
|-----------|-------------|
| **Blinds** (6×) | Sun-angle based tilt control for Office/Bedroom/Kids |
| **Lights Kitchen WLED** | Presence + water temperature color feedback |
| **Lights Bathroom** | FP2 presence sensor with manual override |
| **Light WC** | Motion on/off with configurable timeout |
| **PS5 Session** | Start/end tracking, daily reset, timed notifications + forced stop |
| **Luba Mowing** | Zone scheduling, GPS offset, map refresh |
| **Music Bathroom/Kitchen** | Auto-play on presence |
| **Washer Finished** | Notification when washing machine cycle ends |
| **TČ On/Off** | Heat pump seasonal control |
| **Energy Notify** | Daily energy cost summary |
| **Kids Bus** | School bus departure notification |
| **Camera Streams** | Auto-refresh + stream to TV |
| **Camera Notify** | Smart alerts for front door / garden / garage |



*This configuration is shared for inspiration and community learning. Feel free to ⭐ the repo!*
