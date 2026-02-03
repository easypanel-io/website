---
hide_title: true
sidebar_label: Counter-Strike 2 Dedicated Server
title: Counter-Strike 2 Dedicated Server | Self-Host on Easypanel
description: How to install Counter-Strike 2 Dedicated Server on Easypanel? 1-Click installation template for Counter-Strike 2 Dedicated Server on Easypanel
---

<!-- generated -->

# Counter-Strike 2 Dedicated Server

1-Click installation template for Counter-Strike 2 Dedicated Server on Easypanel

## Description

Counter-Strike 2 Dedicated Server allows you to host your own CS2 game server with full control over configuration and settings. This self-hosted gaming solution provides a professional-grade server environment for competitive matches, casual gameplay, or private practice sessions. The server supports various game modes including casual, competitive, and deathmatch, with extensive customization options for maps, player limits, server rules, and bot configurations. Features include RCON remote administration, CSTV for broadcasting matches, workshop map support, and comprehensive logging. Perfect for gaming communities, esports teams, or anyone wanting to run their own CS2 server with dedicated resources and low latency.

## Instructions

IMPORTANT - You must obtain a Game Server Token from https://steamcommunity.com/dev/managegameservers before your server can be listed publicly.

## Benefits

- Full Control & Customization: Host your own CS2 server with complete control over game modes, maps, rules, and server settings. Perfect for competitive teams and gaming communities.
- Self-Hosted Performance: Ensure low latency and optimal performance by hosting on your own infrastructure. No reliance on third-party hosting services.
- Private & Secure: Create password-protected servers for private matches, practice sessions, or exclusive community events with full administrative control.

## Features

- Multiple Game Modes: Support for casual, competitive, deathmatch, and custom game modes with configurable settings for each type of gameplay.
- Workshop Integration: Load custom maps and collections directly from the Steam Workshop to expand your server's content and provide unique experiences.
- RCON Administration: Remote console access for server administration, allowing you to manage your server, execute commands, and monitor activity from anywhere.
- CSTV Broadcasting: Built-in SourceTV support for broadcasting matches with configurable delay, recording, and spectator settings for tournaments and events.

## Links

- [Steam Game Server Account Management](https://steamcommunity.com/dev/managegameservers)
- [Docker Hub](https://hub.docker.com/r/joedwards32/cs2)
- [CS2 Dedicated Servers Wiki](https://developer.valvesoftware.com/wiki/Counter-Strike_2/Dedicated_Servers)
- [Github](https://github.com/joedwards32/CS2)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/cs2)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | cs2-server
App Service Image | - | yes | joedwards32/cs2:4.0.0
Steam Game Server Token | - | no | 
Server Name | - | no | My CS2 Server
RCON Password | - | no | changeme
Server Password (Optional) | - | no | 
Max Players | - | no | 10
Game Alias | - | no | casual
Map Group | - | no | mg_active
Start Map | - | no | de_inferno
TCP/UDP Port | - | yes | 27015
TV UDP Port | - | yes | 27020

## Screenshots


## Change Log

- 2025-11-04 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
