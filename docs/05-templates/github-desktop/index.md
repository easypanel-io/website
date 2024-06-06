---
hide_title: true
sidebar_label: Github Desktop
title: Github Desktop | Self-Host on Easypanel
description: How to install Github Desktop on Easypanel? 1-Click installation template for Github Desktop on Easypanel
---

<!-- generated -->

# Github Desktop

1-Click installation template for Github Desktop on Easypanel

## Description

Github Desktop is an open-source, Electron-based application that simplifies the way you interact with GitHub. Written in TypeScript and using React, this app provides a user-friendly interface for managing your GitHub repositories. It allows you to access your GitHub account, manage your repositories, make changes, and track updates, all from the convenience of your desktop. The app is accessible via http://yourhost:3000/ or https://yourhost:3001/. It supports multiple architectures and can be easily deployed using Docker. Please note that this app requires specific environment variables and run configurations for optimal functionality.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Efficient GitHub Management: The Github Desktop app allows users to manage their GitHub repositories in a more efficient and streamlined manner. It provides a user-friendly interface that makes it easy to commit changes, create branches, and sync with the remote repository.
- Multi-Platform Support: The app supports multiple architectures, making it accessible to a wide range of users. It utilizes the Docker manifest for multi-platform awareness, ensuring the correct image is retrieved for your architecture.
- Secure Access: The app can be accessed securely via HTTP and HTTPS, ensuring that your data and information are always protected. It also supports HTTP Basic auth for added security.

## Features

- Open Source: Github Desktop is an open-source Electron-based GitHub app. It is written in TypeScript and uses React, making it a reliable and transparent tool for managing GitHub repositories.
- Customizable Environment: The app provides a range of optional environment variables and run configurations that can be customized to suit your needs. This includes the ability to change the internal port the container listens on, the HTTP Basic auth username and password, and more.
- Docker Integration: The app is capable of starting a Docker in Docker (DinD) setup inside the container, allowing you to use Docker in an isolated environment. This feature can be used to increase performance and functionality.
- Lossless Mode: The app is capable of delivering a true lossless image at a high framerate to your web browser. This feature ensures that you always get the highest quality image possible.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-github-desktop)
- [Github](https://github.com/desktop/desktop)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/github-desktop)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | github-desktop
App Service Image | - | yes | lscr.io/linuxserver/github-desktop:latest

## Screenshots

![Github Desktop Screenshot](./assets/screenshot.png)

## Change Log

- 2023-04-12 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
