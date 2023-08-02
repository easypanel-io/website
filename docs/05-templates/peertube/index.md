---
hide_title: true
sidebar_label: PeerTube
title: PeerTube | Self-Host on Easypanel
description: How to install PeerTube on Easypanel? 1-Click installation template for PeerTube on Easypanel
---

<!-- generated -->

# PeerTube

1-Click installation template for PeerTube on Easypanel

## Description

ActivityPub-federated video streaming platform using P2P directly in your web browser

## Links

- [Website](https://joinpeertube.org/)
- [Documentation](https://docs.joinpeertube.org/)
- [Github](https://github.com/Chocobozzz/PeerTube)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/peertube)

## Options

Name | Description | Required | Default Value
-|-|-|-
Admin Mail | - | yes | 
SMTP Hostname | - | no | 
SMTP Port | - | no | 25
SMTP Username | - | no | 
SMTP Password | - | no | 
SMTP From | - | no | noreply@example.com
SMTP TLS | - | no | false
SMTP Disable STARTTLS | - | no | false
Signup Enabled | - | no | true
Transcoding Enabled | - | no | true
Contact Form Enabled | - | no | true
App Service Name | - | yes | peertube
App Service Image | - | yes | chocobozzz/peertube:v5.2.0-bullseye
Database Service Name | - | yes | peertube-db
Redis Service Name | - | yes | peertube-redis

## Screenshots

![PeerTube Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-24 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
