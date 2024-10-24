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

The itzg/minecraft-server app is designed to provide a seamless Minecraft Server experience. It automatically downloads the latest stable version of the Minecraft server at startup, ensuring you&#39;re always up-to-date with the game&#39;s latest features and improvements. The app also allows you to run or upgrade to any specific version or the latest snapshot, giving you full control over your gaming experience. If you&#39;re using Minecraft clients on consoles, mobile, or native Windows, the app offers a dedicated Bedrock Server for optimal performance. The standard server port, 25565, will be exposed on your host machine for easy access and gameplay.

## Benefits

- Latest Minecraft Versions: The app automatically downloads the latest stable version of Minecraft Server at startup, ensuring you always have the most recent features and updates.
- Flexible Version Support: You can run or upgrade to any specific version of Minecraft Server or the latest snapshot, giving you the flexibility to choose the version that best suits your needs.
- Dedicated Server for Different Platforms: The app provides a dedicated server for Minecraft clients running on consoles, mobile, or native Windows, ensuring a smooth and seamless gaming experience across different platforms.

## Features

- Dynamic Version Support: The app supports dynamic versioning, automatically downloading the latest stable version of Minecraft Server at startup.
- Server Types and Modpack Support: The app supports various server types and modpacks, enhancing your Minecraft gaming experience with additional features and functionalities.
- Dedicated Server for Different Platforms: The app provides a dedicated server for Minecraft clients running on consoles, mobile, or native Windows, ensuring compatibility and a smooth gaming experience.

## Links

- [Github](https://github.com/itzg/docker-minecraft-server)
- [Docker](https://hub.docker.com/r/itzg/minecraft-server)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/minecraft-server)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | minecraft-server
App Service Image | - | yes | itzg/minecraft-server:2024.10.2
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
- 2024-10-19 – Update to 2024.10.2

## Contributors

- [Berk Sümbül](https://berksmbl.com)
- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
