---
hide_title: true
sidebar_label: Filezilla Client
title: Filezilla Client | Self-Host on Easypanel
description: How to install Filezilla Client on Easypanel? 1-Click installation template for Filezilla Client on Easypanel
---

<!-- generated -->

# Filezilla Client

1-Click installation template for Filezilla Client on Easypanel

## Description

FileZilla Client is a fast and reliable cross-platform FTP, FTPS and SFTP client. It is designed with a lot of useful features and an intuitive graphical user interface. The app is capable of delivering a true lossless image at a high framerate to your web browser. It supports multiple architectures and can be accessed via HTTP or HTTPS. The app also allows you to specify the user PUID and group PGID to avoid permission issues between the host OS and the container. It also provides the ability to override the default umask settings for services started within the containers.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Cross-Platform Compatibility: FileZilla Client is a cross-platform FTP, FTPS, and SFTP client, meaning it can be used on various operating systems without compatibility issues.
- Intuitive User Interface: The app features an intuitive graphical user interface, making it easy for users to navigate and operate, regardless of their technical expertise.
- Fast and Reliable: FileZilla Client is known for its speed and reliability, ensuring efficient and uninterrupted file transfers.

## Features

- Multi-Platform Awareness: The app utilizes the docker manifest for multi-platform awareness, allowing it to retrieve the correct image for your architecture.
- Customizable Environment Variables: FileZilla Client offers customizable environment variables, enabling users to adjust settings such as internal port, HTTP Basic auth username and password, and more.
- Lossless Mode: The app is capable of delivering a true lossless image at a high framerate to your web browser, ensuring the highest quality of image transmission.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-filezilla)
- [Github](https://github.com/linuxserver/docker-filezilla)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/filezilla)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | filezilla
App Service Image | - | yes | lscr.io/linuxserver/filezilla:3.68.1

## Screenshots

![Filezilla Client Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-21 – first release
- 2025-01-11 – Version bumped to 3.68.1

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
