---
hide_title: true
sidebar_label: Gotify
title: Gotify | Self-Host on Easypanel
description: How to install Gotify on Easypanel? 1-Click installation template for Gotify on Easypanel
---

<!-- generated -->

# Gotify

1-Click installation template for Gotify on Easypanel

## Description

Gotify is a simple, self-hosted server for sending and receiving messages. It is designed with a user-friendly interface and a straightforward API, making it easy to use across different platforms. The core of Gotify is the server, which features a WebUI and functionality for sending messages via a REST-API, subscribing/receiving messages via a web socket connection, and managing users, clients, and applications. Gotify also includes an Android client for subscribing to the message stream of the server, creating push notifications for newly received messages. Additionally, there is a command line client for pushing messages to the server. All these features make Gotify a versatile tool for managing and exchanging messages while maintaining control over your data.

## Benefits

- Control Your Data: Gotify is a self-hosted app, meaning you have complete control over your data. It is free and open source, licensed under the MIT license.
- Cross Platform: Written in Go, Gotify can be easily compiled for different platforms, making it a versatile choice for sending and receiving messages.
- Simple to Use: Both Gotify's API and user interface are designed to be as simple as possible, making it easy to send and receive messages.

## Features

- Message Sending and Receiving: Gotify serves as a simple server for sending messages via a REST-API and subscribing/receiving messages via a web socket connection.
- User, Client, and Application Management: Gotify provides functionality for managing users, clients, and applications.
- Android Client: Gotify offers an Android client for subscribing to the message stream of the Gotify server. The app creates push notifications for newly received messages.
- Command Line Client: Gotify also features a command line client for pushing messages to the Gotify server.

## Links

- [Website](https://gotify.net/)
- [Documentation](https://gotify.net/docs/)
- [Github](https://github.com/gotify)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/gotify)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | gotify
App Service Image | - | yes | gotify/server:2.6
Password | - | yes | 
Timezone | - | no | Europe/London

## Screenshots

![Gotify Screenshot](./assets/screenshot.png)

## Change Log

- 2022-07-12 – first release
- 2023-2-24 – Update to v2.2.4
- 2025-01-14 – Version bumped to 2.6

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
- [Andrei Canta](https://github.com/deiucanta)
- [Supernova3339](https://github.com/supernova3339)
