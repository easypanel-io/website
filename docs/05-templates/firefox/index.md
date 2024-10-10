---
hide_title: true
sidebar_label: Firefox
title: Firefox | Self-Host on Easypanel
description: How to install Firefox on Easypanel? 1-Click installation template for Firefox on Easypanel
---

<!-- generated -->

# Firefox

1-Click installation template for Firefox on Easypanel

## Description

Firefox Browser, also known as Mozilla Firefox or simply Firefox, is a free and open-source web browser developed by the Mozilla Foundation and its subsidiary, the Mozilla Corporation. This app allows you to deploy and run Firefox in a containerized environment, providing a secure and isolated space for your browsing activities. Firefox uses the Gecko layout engine to render web pages, implementing current and anticipated web standards. The app supports multiple architectures and can be accessed via HTTP or HTTPS. It also offers additional environment variables and run configurations to enable or disable specific functionalities. This containerized version of Firefox is capable of delivering a true lossless image at a high framerate to your web browser, providing an optimal browsing experience.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Open-Source Web Browser: Firefox Browser, developed by the Mozilla Foundation, is a free and open-source web browser. It uses the Gecko layout engine to render web pages, implementing current and anticipated web standards.
- Multi-Platform Awareness: The app utilizes the docker manifest for multi-platform awareness. This means that simply pulling the correct image for your architecture is made easy and straightforward.
- Accessible Application: The application can be accessed at specified host addresses, providing flexibility and ease of use.
- Customizable Environment Variables: The app offers a range of optional environment variables that can be customized to suit your needs, such as changing the internal port the container listens on, setting the HTTP Basic auth username and password, and more.

## Features

- Lossless Mode: The app is capable of delivering a true lossless image at a high framerate to your web browser. This feature enhances the visual experience and performance of the app.
- Docker in Docker (DinD) Setup: The app offers an optional run configuration that starts a Docker in Docker (DinD) setup inside the container. This allows you to use docker in an isolated environment, enhancing security and performance.
- GPU Acceleration: The app supports mounting a GPU into the container. This can be used in conjunction with the DRINODE environment variable to leverage a host video card for GPU accelerated applications.
- Environment Variables from Files: The app allows you to set any environment variable from a file using a special prepend FILE__. This feature enhances security and flexibility in managing environment variables.
- User / Group Identifiers: The app allows you to specify the user PUID and group PGID to avoid permission issues between the host OS and the container when using volumes.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-firefox)
- [Github](https://github.com/linuxserver/docker-firefox)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/firefox)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | firefox
App Service Image | - | yes | lscr.io/linuxserver/firefox:0.24.04

## Screenshots

![Firefox Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-14 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
