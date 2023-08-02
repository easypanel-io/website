---
hide_title: true
sidebar_label: Plex
title: Plex | Self-Host on Easypanel
description: How to install Plex on Easypanel? 1-Click installation template for Plex on Easypanel
---

<!-- generated -->

# Plex

1-Click installation template for Plex on Easypanel

## Description

Plex Media Server is an app that allows you to stream your video, music, and photo collections to any device. It is easy to install and can be used on phones, tablets, streaming devices, gaming consoles, and smart TVs. With Plex Media Server, you can access your media anytime, anywhere.

## Instructions

If you get a libusb error, please ignore it.

## Benefits

- Stream your media anywhere: With Plex Media Server, you can stream your video, music, and photo collections to any device, no matter where you are.
- Easy installation: Installing Plex Media Server is simple and straightforward, allowing you to start streaming your media in no time.
- Support for multiple devices: Plex Media Server is compatible with a wide range of devices, including phones, tablets, streaming devices, gaming consoles, and smart TVs.

## Features

- Networking options: Plex Media Server offers three types of networking options: bridge, host, and macvlan. You can choose the one that best suits your needs.
- Docker support: Plex Media Server provides an official Docker container, making it easy to deploy and manage the app in a Docker environment.
- Configurable settings: You can customize various settings of Plex Media Server, such as the timezone, claim token, IP address, hostname, and more.
- Hardware transcoding support: If your Docker host has an Intel CPU with Quick Sync feature and you have a Plex Pass subscription, you can enable hardware transcoding for improved performance.

## Links

- [Documentation](https://support.plex.tv/articles/catagories/plex-media-server)
- [Github](https://github.com/plexinc/pms-docker)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/plex)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | plex
App Service Image | - | yes | lscr.io/linuxserver/plex:latest

## Screenshots

![Plex Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-23 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
