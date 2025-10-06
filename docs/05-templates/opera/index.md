---
hide_title: true
sidebar_label: Opera
title: Opera | Self-Host on Easypanel
description: How to install Opera on Easypanel? 1-Click installation template for Opera on Easypanel
---

<!-- generated -->

# Opera

1-Click installation template for Opera on Easypanel

## Description

Opera is a multi-platform web browser developed by Opera. This app is based on Chromium, but sets itself apart from other Chromium-based browsers through its unique user interface and additional features. The app can be accessed at http://yourhost:3000/ or https://yourhost:3001/. It provides a true lossless image at a high frame rate to your web browser by changing the Stream Quality preset to &#39;Lossless&#39;. The app also allows you to specify one or multiple Chromium CLI flags, which will be passed to the application in full. This app is designed to avoid permission issues that can arise between the host OS and the container by allowing you to specify the user PUID and group PGID.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Multi-Platform Web Browser: Opera is a versatile web browser that can be used across multiple platforms. It is developed by Opera, a company renowned for its innovative and user-friendly browsing solutions.
- Based on Chromium: Opera is built on Chromium, ensuring high performance and compatibility with a wide range of web technologies. Despite its Chromium base, Opera stands out with its unique user interface and features.
- Multi-Architecture Support: The Opera Docker image supports multiple architectures, making it adaptable to various systems. Simply pulling the image should retrieve the correct version for your architecture.

## Features

- User Interface: Opera differentiates itself from other Chromium-based browsers through its unique user interface. It offers a clean, intuitive, and customizable browsing experience.
- Additional Environment Variables: The Docker Baseimage KasmVNC, which the Opera container is based on, provides additional environment variables and run configurations. These allow you to enable or disable specific functionalities as per your requirements.
- Lossless Mode: Opera's Docker container can deliver a true lossless image at a high frame rate to your web browser. This ensures a high-quality browsing experience.
- Docker CLI and Docker Compose Support: You can create a container from the Opera image using either Docker CLI or Docker Compose, providing flexibility in deployment.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-opera)
- [Github](https://github.com/linuxserver/docker-opera)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/opera)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | opera
App Service Image | - | yes | lscr.io/linuxserver/opera:120.0.5543

## Screenshots

![Opera Screenshot](./assets/screenshot.png)

## Change Log

- 2023-5-7 – first release
- 2025-07-24 – Version bumped to 120.0.5543

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
