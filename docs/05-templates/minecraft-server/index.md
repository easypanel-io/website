---
hide_title: true
sidebar_label: Minecraft Server
title: Minecraft Server | Self-Host on Easypanel
description: How to install Minecraft Server on Easypanel? 1-Click installation template for Minecraft Server on Easypanel
---

<!-- generated -->

# Minecraft Server

1-Click installation template for Minecraft Server on Easypanel

## Description

The itzg/minecraft-server Docker image provides a Minecraft Server that will automatically download the latest stable version at startup. It supports running/upgrading to any specific version or the latest snapshot. The image exposes the standard server port, 25565, on the host machine. For Minecraft clients running on consoles, mobile, or native Windows, a different image (itzg/minecraft-bedrock-server) should be used.

## Benefits

- Automatic version management: The Minecraft Server automatically downloads the latest stable version at startup, ensuring you are always up to date.
- Flexible version selection: You can run or upgrade to any specific version of Minecraft or use the latest snapshot.
- Easy deployment: The Docker image makes it easy to deploy and manage a Minecraft Server.

## Features

- Dynamic version support: The server automatically downloads the latest stable version or any specific version you choose.
- Server type support: The image supports different server types, including modpacks.
- Port exposure: The standard server port, 25565, is exposed on the host machine.

## Links

- [Github](https://github.com/itzg/docker-minecraft-server)
- [Docker](https://hub.docker.com/r/itzg/minecraft-server)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/minecraft-server)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | minecraft-server
App Service Image | - | yes | itzg/minecraft-server:2023.6.1
Server Name | - | no | MyServer
Version | - | no | LATEST
Server Types | - | no | VANILLA
Message of the Day | - | no | Minecraft Server powered by §aEasypanel§r
Icon URL | - | no | https://cdn.berksmbl.com/easypanel-icon.png
Game Mode | - | no | survival
Difficulty | - | no | easy
Max Players | - | no | 20
Max World Size | - | no | 10000
View Distance | - | no | 10
Max Build Height | - | no | 256
Max Tick Time | - | no | 60000
Please accept the Minecraft EULA | - | no | true
Allow Nether | - | no | true
Announce Player Achievements | - | no | true
Generate Structures | - | no | true
PVP Mode | - | no | true
Force Gamemode | - | no | false
Hardcore | - | no | false
Enable Command Block | - | no | true
Spawn Animals | - | no | true
Spawn Monsters | - | no | true
Spawn NPCs | - | no | true
Snooper Enabled | - | no | false
Online Mode | - | no | false
Enable RCON | - | no | false
Enable Query | - | no | false
Server Port | - | no | 25565
Query Port | - | no | 25565
RCON Port | - | no | 25575
RCON Password | - | no | 

## Screenshots


## Change Log

- 2023-03-18 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
