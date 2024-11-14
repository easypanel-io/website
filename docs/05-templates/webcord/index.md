---
hide_title: true
sidebar_label: Webcord
title: Webcord | Self-Host on Easypanel
description: How to install Webcord on Easypanel? 1-Click installation template for Webcord on Easypanel
---

<!-- generated -->

# Webcord

1-Click installation template for Webcord on Easypanel

## Description

WebCord is an application designed to enhance your Discord experience. It is a pack of security and privacy hardenings, Discord features reimplementations, Electron / Chromium / Discord bugs workarounds, stylesheets, internal pages and wrapped https://discord.com page. It is designed to conform with ToS as much as it is possible. The application can be accessed at: http://yourhost:3000/ or https://yourhost:3001/. This container is based on Docker Baseimage KasmVNC which means there are additional environment variables and run configurations to enable or disable specific functionality.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Enhanced Security and Privacy: WebCord provides security and privacy hardenings to protect your Discord communication and data.
- Improved Discord Features: WebCord includes reimplementations of Discord features, allowing you to enhance your Discord experience.
- Bug Workarounds and Stylesheets: WebCord addresses Electron / Chromium / Discord bugs and provides custom stylesheets for a better user interface.

## Features

- Conforms with Discord's Terms of Service: WebCord is designed to conform with Discord's Terms of Service, ensuring compliance while using the app.
- Multi-Platform Support: WebCord supports multiple architectures, making it compatible with various devices and operating systems.
- Lossless Image Streaming: WebCord can deliver lossless images at a high framerate to your web browser, providing a superior visual experience.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-webcord)
- [Github](https://github.com/SpacingBat3/WebCord)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/webcord)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | webcord
App Service Image | - | yes | lscr.io/linuxserver/webcord:4.10.2

## Screenshots

![Webcord Screenshot](./assets/screenshot.png)

## Change Log

- 2023-5-7 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Berk Sümbül](https://berksmbl.com)
