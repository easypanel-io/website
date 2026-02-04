---
hide_title: true
sidebar_label: Airsonic Advanced
title: Airsonic Advanced | Self-Host on Easypanel
description: How to install Airsonic Advanced on Easypanel? 1-Click installation template for Airsonic Advanced on Easypanel
---

<!-- generated -->

# Airsonic Advanced

1-Click installation template for Airsonic Advanced on Easypanel

## Description

Airsonic Advanced is a more modern implementation of the Airsonic fork with several key performance and feature enhancements. It&#39;s a free, web-based media streamer providing ubiquitous access to your music. Use it to share your music with friends, or to listen to your own music while at work. You can stream to multiple players simultaneously, for instance to one player in your kitchen and another in your living room. It supports very large music collections and works with any audio or video format that can stream over HTTP.

## Benefits

- Modern Web Interface: Enjoy a modern, responsive web interface with HTML5 compliance and improved user experience compared to vanilla Airsonic.
- Enhanced Performance: Experience significantly improved performance with faster media scanning, better UI rendering, and optimized streaming engine.
- Multi-Format Support: Stream any audio or video format that works over HTTP, including MP3, AAC, OGG, WMA, FLAC, APE, Musepack, WavPack and more.
- Large Collection Support: Designed to handle very large music collections (hundreds of gigabytes) with efficient indexing and browsing capabilities.

## Features

- Advanced Media Streaming: Stream music to multiple players simultaneously with support for transcoding and bitrate limiting for constrained bandwidth.
- Improved Security: Features a completely revamped credential system with modern password hashing algorithms like bcrypt and Argon for secure storage.
- Podcast Support: Integrated podcast receiver with features similar to iTunes, including OPML export capabilities and podcast management.
- WebSocket Communication: Uses WebSockets for real-time communication between server and web clients, providing instant updates and status indicators.
- Sonos & Chromecast Support: Built-in support for Sonos speakers and Chromecast devices for seamless music streaming throughout your home.
- Advanced Database Features: Supports multiple external databases (PostgreSQL, MySQL, MariaDB) with automatic backup and data export/import capabilities.

## Links

- [GitHub](https://github.com/airsonic-advanced/airsonic-advanced)
- [Documentation](https://github.com/airsonic-advanced/airsonic-advanced#readme)
- [Demo](https://airsonic.github.io/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/airsonic-advanced)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | airsonic-advanced
App Service Image | Airsonic Advanced Docker image | yes | airsonicadvanced/airsonic-advanced:gitcommit-68d11bfbfe051b0acaca2770c3c1f47f8d59201c
UPnP Port | UPnP port for the application | yes | 4041

## Screenshots

![Airsonic Advanced Screenshot](./assets/screenshot.png)

## Change Log

- 2025-06-26 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
