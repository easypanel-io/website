---
hide_title: true
sidebar_label: LibreOffice
title: LibreOffice | Self-Host on Easypanel
description: How to install LibreOffice on Easypanel? 1-Click installation template for LibreOffice on Easypanel
---

<!-- generated -->

# LibreOffice

1-Click installation template for LibreOffice on Easypanel

## Description

LibreOffice is a free and powerful office suite app that serves as a successor to OpenOffice.org. It features a clean interface and feature-rich tools that help you unleash your creativity and enhance your productivity. The app can be accessed at http://yourhost:3000/ or https://yourhost:3001/. It is designed to deliver a true lossless image at a high framerate to your web browser. The app also supports multiple architectures, ensuring that it can be used on a variety of platforms. This app is perfect for those who need a comprehensive office suite for their daily tasks.

## Benefits

- Powerful Office Suite: LibreOffice is a free and powerful office suite, a successor to OpenOffice.org. It offers a clean interface and feature-rich tools that help you unleash your creativity and enhance your productivity.
- Multi-Platform Awareness: The app utilizes the docker manifest for multi-platform awareness. This means that pulling the LibreOffice image should retrieve the correct image for your architecture, ensuring optimal compatibility and performance.
- Accessible Anywhere: The application can be accessed at your host, making it easy to work from anywhere. This flexibility allows you to stay productive no matter where you are.

## Features

- Customizable Environment Variables: LibreOffice offers a range of environment variables that you can customize to suit your needs. These include the internal port the container listens on, HTTP Basic auth username and password, the home directory for the file manager, and more.
- Optional Run Configurations: The app provides optional run configurations, including the ability to start a Docker in Docker setup inside the container, mount a GPU into the container for GPU accelerated applications, and deliver a true lossless image at a high framerate to your web browser.
- User / Group Identifiers: When using volumes, you can specify the user PUID and group PGID to avoid permissions issues between the host OS and the container. This ensures that any volume directories on the host are owned by the same user you specify.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-libreoffice)
- [Github](https://github.com/linuxserver/docker-libreoffice)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/libreoffice)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | libreoffice
App Service Image | - | yes | lscr.io/linuxserver/libreoffice:7.6.7

## Screenshots

![LibreOffice Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-14 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
