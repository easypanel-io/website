---
hide_title: true
sidebar_label: ZNC
title: ZNC | Self-Host on Easypanel
description: How to install ZNC on Easypanel? 1-Click installation template for ZNC on Easypanel
---

<!-- generated -->

# ZNC

1-Click installation template for ZNC on Easypanel

## Description

ZNC is an IRC bouncer that is designed to stay connected to IRC servers and channels, allowing you to access them at any time.

## Instructions

default login is admin/admin

## Benefits

- Always Connected: ZNC keeps you permanently connected to your favorite IRC channels and servers, ensuring you never miss important messages.
- Custom Modules: Extend ZNC's functionality with custom modules, allowing for personalized features and enhancements.

## Features

- Detachable Sessions: ZNC allows you to detach and reattach to IRC sessions without losing the session state, similar to screen or tmux for IRC.
- Multiple Networks: Connect to multiple IRC networks simultaneously with a single ZNC instance.
- Playback Buffers: ZNC stores chat history when you're away, allowing you to catch up on what you missed once you reconnect.
- SSL/TLS Support: Secure your connections with SSL/TLS, protecting your privacy and data integrity.
- Web Interface: Manage your ZNC settings and configurations through a user-friendly web interface.

## Links

- [Website](https://github.com/linuxserver)
- [Documentation](https://hub.docker.com/r/linuxserver/znc)
- [Github](https://github.com/linuxserver/docker-znc/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/znc)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | znc
App Service Image | - | yes | lscr.io/linuxserver/znc:1.9.1
PUID | - | yes | 1000
PGID | - | yes | 1000
Timezone | - | yes | Europe/London

## Screenshots

![ZNC Screenshot](./assets/screenshot.png)

## Change Log

- 2024-04-27 – first release

## Contributors

- [LinuxServer.io Team](https://linuxserver.io/)
