---
hide_title: true
sidebar_label: Gameyfin
title: Gameyfin | Self-Host on Easypanel
description: How to install Gameyfin on Easypanel? 1-Click installation template for Gameyfin on Easypanel
---

<!-- generated -->

# Gameyfin

1-Click installation template for Gameyfin on Easypanel

## Description

Gameyfin is a free and open-source application for managing your video game library. Track installed and wanted games, fetch metadata (e.g. IGDB, Steam), and use plugins for downloads and extra providers. It runs as a Kotlin / Spring Boot app with a web UI, PF4J plugins, and optional OIDC. Docker is the recommended install path; persist db, data, plugin data, logs, and mount at least one folder for your game files.

## Instructions

APP_KEY is generated on deploy (32 random bytes, Base64). Do not change it
after data exists or the app cannot decrypt secrets in the database; if you
recreate the service, restore the same APP_KEY from a backup.
Libraries: Put (or bind) your games under the library volume; inside
Gameyfin, add libraries whose paths are under `/library`
(https://gameyfin.org/installation/getting-started/).
PUID / PGID default to 1000; set them to your host user/group if file
permissions on mounted volumes are wrong.
Optional: for the bundled torrent plugin, publish host ports 6969 and 6881
on this service.


## Benefits

- Self-hosted library: Own your metadata and library layout without relying on a hosted service.
- Metadata & plugins: Multiple metadata sources and a plugin system with data under plugindata.
- Reverse-proxy ready: APP_URL is set from your primary domain for correct links and first-run logs.

## Features

- Library & metadata: Organize games and enrich them with IGDB and other providers.
- Plugin system: Download and metadata plugins; state persists in /opt/gameyfin/plugindata.
- Docker layout: Matches upstream compose for db, data, plugindata, logs, plus a library path.
- Encrypted DB fields: APP_KEY secures sensitive values stored in the embedded database.
- Authentication: Local accounts and optional OpenID Connect.

## Links

- [Website](https://gameyfin.org)
- [Documentation](https://gameyfin.org/installation/docker/)
- [GitHub](https://github.com/gameyfin/gameyfin)
- [Container registry (GHCR)](https://github.com/gameyfin/gameyfin/pkgs/container/gameyfin)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/gameyfin)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | gameyfin
Gameyfin Image | - | yes | ghcr.io/gameyfin/gameyfin:2.4.0
PUID | Container user ID for file ownership (non-root). | yes | 1000
PGID | Container group ID for file ownership (non-root). | yes | 1000

## Screenshots

![Gameyfin Screenshot](./assets/screenshot.png)

## Change Log

- 2025-10-02 – First Release
- 2026-03-20 – Website/docs links, setup instructions, plugindata volume, /library mount, Base64 APP_KEY, APP_URL, configurable PUID/PGID (1000), image pin 2.4.0

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
