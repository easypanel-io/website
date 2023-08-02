---
hide_title: true
sidebar_label: Remmina
title: Remmina | Self-Host on Easypanel
description: How to install Remmina on Easypanel? 1-Click installation template for Remmina on Easypanel
---

<!-- generated -->

# Remmina

1-Click installation template for Remmina on Easypanel

## Description

Remmina is a remote desktop client designed to be useful for system administrators and travellers who need to work with multiple remote computers. It supports a variety of network protocols, including RDP, VNC, SPICE, NX, XDMCP, SSH and EXEC, all within an integrated and consistent user interface. The app is written in GTK and is designed to be functional on both large and tiny screens. It can be accessed via http://yourhost:3000/ or https://yourhost:3001/. The app is based on Docker Baseimage KasmVNC, which provides additional environment variables and run configurations to enable or disable specific functionality.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Remote Access: Remmina provides the ability to access and work on multiple remote computers, making it an ideal tool for system administrators and travellers.
- Supports Multiple Network Protocols: The app supports a variety of network protocols including RDP, VNC, SPICE, NX, XDMCP, SSH and EXEC, offering flexibility and versatility in remote connections.
- Integrated and Consistent User Interface: Remmina offers an integrated and consistent user interface, making it easy to navigate and use, regardless of the network protocol being utilized.

## Features

- Multi-Platform Awareness: Remmina utilizes the docker manifest for multi-platform awareness, ensuring the correct image is retrieved for your architecture.
- Application Setup: The application can be accessed at specified host addresses, providing easy setup and access to the application.
- Environment Variables: Remmina allows for the setting of environment variables, providing customization and control over the application's functionality.
- Lossless Mode: The app is capable of delivering a true lossless image at a high framerate to your web browser, providing high-quality remote desktop visuals.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-remmina)
- [Github](https://github.com/linuxserver/docker-remmina)
- [Website](https://remmina.org)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/remmina)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | remmina
App Service Image | - | yes | lscr.io/linuxserver/remmina:latest

## Screenshots

![Remmina Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-15 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
