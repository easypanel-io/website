---
hide_title: true
sidebar_label: Ntfy
title: Ntfy | Self-Host on Easypanel
description: How to install Ntfy on Easypanel? 1-Click installation template for Ntfy on Easypanel
---

<!-- generated -->

# Ntfy

1-Click installation template for Ntfy on Easypanel

## Description

ntfy is a simple HTTP-based pub-sub notification service that allows you to send push notifications to your phone or desktop via scripts from any computer. It is used to notify yourself when scripts fail or long-running commands complete.

## Benefits

- Easy to use: ntfy allows you to send push notifications using simple HTTP PUT or POST requests, making it easy to integrate into your scripts or commands.
- Cross-platform: ntfy supports both Android and iOS devices, as well as desktop notifications, so you can receive notifications on any device.
- No sign-up or fees: ntfy is free to use and does not require any sign-up or payment. You can start sending push notifications right away.
- Open source: ntfy is an open source project, which means you can run your own instance of the service if you prefer. The source code is available on GitHub.

## Features

- Publishing messages: You can publish messages to ntfy using HTTP PUT or POST requests, or using the ntfy CLI. Messages can be sent in any language and can include custom content.
- Subscribing to topics: To receive notifications, you can subscribe to topics of your choosing. Topics do not need to be explicitly created, so you can pick a name and use it when publishing a message.
- Mobile and desktop support: ntfy supports both Android and iOS devices, allowing you to receive push notifications on your phone. It also supports desktop notifications, so you can receive notifications on your computer.
- API and self-hosting: ntfy provides an API that allows you to integrate push notifications into your own applications. If you prefer, you can also run your own instance of ntfy using the open source code.

## Links

- [Documentation](https://docs.ntfy.sh)
- [Github](https://github.com/binwiederhier/ntfy)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/ntfy)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | ntfy
App Service Image | - | yes | binwiederhier/ntfy:v2.4.0

## Screenshots

![Ntfy Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-21 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
