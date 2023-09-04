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

Plex Media Server is a powerful app that makes it easy to manage and stream your media collection to all your devices, anytime, anywhere. With Plex, you can stream your video, music, and photo collections from your phone, tablet, gaming console, smart TV, or any other favorite streaming device. The app is designed to work with three types of networking: bridge, host, and macvlan, each offering a unique way to connect your media server to your devices. Plex also offers advanced features like hardware transcoding support for Intel Quick Sync, making it a versatile choice for all your media streaming needs.

## Instructions

If you get a libusb error, please ignore it.

## Benefits

- Access Your Media Anywhere: With Plex Media Server, you can stream your video, music, and photo collections any time, anywhere, to any device. Whether you're on your phone, tablet, gaming console, or smart TV, your media is always at your fingertips.
- Easy to Use: Plex Media Server is designed to be easy to install and use. With our intuitive interface, you can easily manage your media collections and enjoy seamless streaming experience.
- Flexible Networking Options: Plex Media Server supports three types of networking: bridge, host, and macvlan. This flexibility allows you to choose the networking setup that best suits your needs.

## Features

- Media Streaming: Stream your video, music, and photo collections to any device. Plex Media Server supports streaming to all your favorite phones, tablets, streaming devices, gaming consoles, and smart TVs.
- Networking Options: Choose from three types of networking: bridge, host, and macvlan. Each type offers different benefits, and you can choose the one that best fits your setup.
- Docker Container: Plex Media Server comes in an official Docker container, making it easy to deploy and manage. Docker allows you to isolate your app in a container to ensure that it works uniformly across different environments.

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
