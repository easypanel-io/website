---
hide_title: true
sidebar_label: Satisfactory Server
title: Satisfactory Server | Self-Host on Easypanel
description: How to install Satisfactory Server on Easypanel? 1-Click installation template for Satisfactory Server on Easypanel
---

<!-- generated -->

# Satisfactory Server

1-Click installation template for Satisfactory Server on Easypanel

## Description

Satisfactory Server is a dedicated server for the popular factory building game Satisfactory by Coffee Stain Studios. This containerized server allows you to host your own multiplayer world for friends to join and collaborate on massive factory projects. The server handles all game logic, world persistence, and player connections, while requiring minimal setup and maintenance. Perfect for players who want reliable, 24/7 access to their factory world without having to host the game on their own computer.

## Benefits

- Dedicated Game Server: Host your Satisfactory world on a dedicated server that runs 24/7, allowing players to connect anytime without the host needing to be online.
- Performance Optimization: Dedicated server improves game performance by offloading server processing from player computers, resulting in smoother gameplay for everyone.
- Persistent World: Your factory world remains online and accessible at all times, enabling continuous progress and collaboration among players.

## Features

- Easy Multiplayer Setup: Quickly set up and configure a multiplayer server without complex networking or port forwarding requirements.
- Customizable Server Settings: Adjust player capacity, resource allocation, and other settings to match your preferences and server capabilities.
- Save Management: Automatic save handling ensures your factory progress is securely stored and persisted between server restarts.
- Resource Control: Define memory limits and reservations to optimize server performance and ensure stability during gameplay.
- Experimental Support: Option to run experimental versions of the game to access new features before they're officially released.

## Links

- [Docker Hub](https://hub.docker.com/r/wolveix/satisfactory-server)
- [GitHub](https://github.com/wolveix/satisfactory-server)
- [Game Website](https://www.satisfactorygame.com/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/satisfactory)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | satisfactory-server
App Service Image | - | yes | wolveix/satisfactory-server:v1.9.10
Maximum Players | Maximum number of players that can join the server simultaneously | yes | 4
Game Port | Port for the game server | yes | 7777
Beacon Port | Port for the beacon server | yes | 15000
Query Port | Port for the query server | yes | 15777

## Screenshots


## Change Log

- 2025-04-24 – First Release
- 2026-05-08 – Version bumped to v1.9.10

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
