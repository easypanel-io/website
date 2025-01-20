---
hide_title: true
sidebar_label: Chromium
title: Chromium | Self-Host on Easypanel
description: How to install Chromium on Easypanel? 1-Click installation template for Chromium on Easypanel
---

<!-- generated -->

# Chromium

1-Click installation template for Chromium on Easypanel

## Description

Chromium is an open-source browser project that is designed to provide a safer, faster, and more stable way for all users to experience the web. This app is a Docker containerized version of Chromium, allowing you to deploy and run the Chromium browser in a Docker environment. The app supports multiple architectures, including x86-64 and arm64, and can be accessed via HTTP or HTTPS. It offers additional environment variables and run configurations to enable or disable specific functionality. The app also allows you to specify one or multiple Chromium CLI flags, which will be passed to the application in full. This containerized version of Chromium is designed to function efficiently with modern websites, and includes options for GPU acceleration and Docker in Docker (DinD) setup.

## Benefits

- Open-Source Browser: Chromium is an open-source browser project that aims to build a safer, faster, and more stable way for all users to experience the web. It is designed to be accessible and user-friendly, providing a seamless browsing experience.
- Multi-Platform Awareness: The app utilizes the docker manifest for multi-platform awareness. This means it can retrieve the correct image for your architecture, ensuring optimal performance and compatibility.
- Customizable Environment: The app offers a range of environment variables and run configurations to enable or disable specific functionality. This allows for a highly customizable browsing experience tailored to your needs.

## Features

- Accessible Interface: The application can be accessed at specific host addresses, providing a straightforward and easy-to-navigate interface.
- HTTP Basic Auth: Chromium supports HTTP Basic auth, providing an extra layer of security for your browsing. You can set a username and password for authentication.
- Docker in Docker Setup: The app offers a Docker in Docker (DinD) setup inside the container to use docker in an isolated environment. This feature enhances the performance and security of your browsing experience.
- GPU Acceleration: The app supports GPU acceleration, allowing you to leverage a host video card for GPU-accelerated applications. This feature enhances the speed and performance of the browser.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-chromium)
- [Github](https://github.com/linuxserver/docker-chromium)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/chromium)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | chromium
App Service Image | - | yes | lscr.io/linuxserver/chromium:5f5dd27e-ls102

## Screenshots

![Chromium Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-14 – first release
- 2024-09-30 – Version changed to version-dc5fa092
- 2025-01-09 – Version bumped to 5f5dd27e-ls102

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
