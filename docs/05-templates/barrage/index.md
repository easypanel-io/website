---
hide_title: true
sidebar_label: Barrage
title: Barrage | Self-Host on Easypanel
description: How to install Barrage on Easypanel? 1-Click installation template for Barrage on Easypanel
---

<!-- generated -->

# Barrage

1-Click installation template for Barrage on Easypanel

## Description

Barrage is a minimal Deluge WebUI with full mobile support. It allows you to manage your torrents from any device with a responsive mobile-first design. You can add torrents by URL or magnet, sort and filter torrents, set global upload and download speed limits, change file priority, and modify torrent options. Barrage can be deployed using Docker and requires the following environment variables: NEXTAUTH_SECRET (used to encrypt the NextAuth.js JWT), DELUGE_URL (the Deluge WebUI URL), DELUGE_PASSWORD (the password for the Deluge WebUI), and BARRAGE_PASSWORD (the password for accessing Barrage).

## Benefits

- Mobile Support: Barrage has a responsive mobile-first design, allowing you to manage your torrents from any device.
- Easy Deployment: Barrage can be quickly deployed using Docker, making it easy to set up and use.

## Features

- Add Torrents: You can add torrents to Barrage by URL or magnet links.
- Sort and Filter Torrents: Barrage allows you to sort and filter your torrents for easy management.
- Speed Limits: You can set global upload and download speed limits in Barrage.
- File Priority: Barrage allows you to change the priority of files within a torrent.
- Torrent Options: You can modify various options for your torrents in Barrage.

## Links

- [Github](https://github.com/maulik9898/barrage)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/barrage)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | barrage
App Service Image | - | yes | maulik9898/barrage:0.3.0
Deluge URL | - | yes | 
Deluge Password | - | yes | 
Barrage Password | - | yes | 

## Screenshots

![Barrage Screenshot](./assets/screenshot.png)

## Change Log

- 2023-1-25 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
