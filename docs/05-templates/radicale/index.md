---
hide_title: true
sidebar_label: Radicale
title: Radicale | Self-Host on Easypanel
description: How to install Radicale on Easypanel? 1-Click installation template for Radicale on Easypanel
---

<!-- generated -->

# Radicale

1-Click installation template for Radicale on Easypanel

## Description

Radicale is a small but powerful CalDAV (calendars, to-do lists) and CardDAV (contacts) server. It allows you to share calendars and contact lists through CalDAV, CardDAV, and HTTP. Radicale supports events, todos, journal entries, and business cards. It works out-of-the-box, requiring no complicated setup or configuration. Radicale can limit access by authentication and secure connections with TLS. It works with many CalDAV and CardDAV clients, stores all data on the file system in a simple folder structure, and can be extended with plugins. Radicale is GPLv3-licensed free software.

## Instructions

Login with any username or password

## Benefits

- CalDAV/CardDAV Server: Radicale serves as a CalDAV (Calendar) and CardDAV (Contact) server, storing and allowing online sharing of calendars, address books, events, and contacts.
- Extensible with Plugins: Radicale can be extended with plugins for authentication, rights management, and storage, allowing for customization and enhanced functionality.
- Wide Compatibility: Radicale is available for various Linux distributions and also has a Dockerfile, ensuring wide compatibility and ease of installation.

## Features

- Modular Code: Radicale's code is organized into several modules, each handling a specific functionality, making it easier to understand and work with.
- Integrated HTTP Server: Radicale comes with an integrated HTTP server for standalone use, simplifying setup and operation.
- Web Interface: Radicale includes a web interface module, providing a user-friendly way to interact with the server.
- Authentication and Rights Management: Radicale includes modules for user authentication and rights management, ensuring secure access to data.
- Storage Management: Radicale's storage module handles the storing and loading of collections in the filesystem, providing a reliable way to manage data.

## Links

- [Website](https://radicale.org/)
- [Documentation](https://radicale.org/v3.html)
- [Github](https://github.com/Kozea/Radicale)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/radicale)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | radicale
App Service Image | - | yes | tomsquest/docker-radicale:3.3.0.1

## Screenshots

![Radicale Screenshot](./assets/screenshot.png)

## Change Log

- 2023-3-27 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
