---
hide_title: true
sidebar_label: Pidgin
title: Pidgin | Self-Host on Easypanel
description: How to install Pidgin on Easypanel? 1-Click installation template for Pidgin on Easypanel
---

<!-- generated -->

# Pidgin

1-Click installation template for Pidgin on Easypanel

## Description

Pidgin is a versatile chat application that allows you to log into multiple chat networks simultaneously. This means you can chat with friends on XMPP while also participating in an IRC channel. The application supports a wide range of chat networks, including but not limited to Bonjour, Discord, Facebook, Google Talk, Hangouts, ICQ, Instagram, IRC, Skype, Slack, Telegram, and XMPP. This Pidgin installation comes with default chat plugins and a series of third-party ones. The application also includes Firefox to help you fill out captchas or pre-auth before loading your credentials into the program. Pidgin can be accessed at http://yourhost:3000/ or https://yourhost:3001/. The app is designed to provide a seamless and integrated chat experience across multiple platforms.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Multi-Network Chatting: Pidgin allows you to log into accounts on multiple chat networks simultaneously. This means you can be chatting with friends on XMPP and sitting in an IRC channel at the same time, providing a seamless chatting experience.
- Third-Party Plugins: This Pidgin installation comes with default chat plugins plus a series of third-party ones. These plugins enhance the functionality of the app, allowing you to customize your chatting experience to suit your needs.
- Integrated Web Browser: To ease integration with some third-party plugins, Firefox is included in this image. This allows you to fill out captchas or pre-auth before loading your credentials into the program, providing a more streamlined user experience.

## Features

- Multi-Platform Awareness: The app utilizes the docker manifest for multi-platform awareness. Simply pulling the correct image for your architecture should retrieve the correct image for your arch.
- Supported Chat Networks: Pidgin supports a wide range of chat networks including XMPP, IRC, Discord, Facebook, Google Talk, Instagram, Skype, Slack, Telegram, and many more. This allows you to connect with friends and colleagues across different platforms.
- Customizable Settings: The app allows you to customize various settings such as the internal port the container listens on for http and https, HTTP Basic auth username and password, subfolder for the application if running a subfolder reverse proxy, and the page title displayed on the web browser.
- Secure Access: The application can be accessed securely at https://yourhost:3001/. This ensures that your chat conversations are protected from unauthorized access.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-pidgin)
- [Github](https://github.com/linuxserver/docker-pidgin)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/pidgin)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | pidgin
App Service Image | - | yes | lscr.io/linuxserver/pidgin:latest

## Screenshots

![Pidgin Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-23 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
