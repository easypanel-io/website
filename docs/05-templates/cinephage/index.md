---
hide_title: true
sidebar_label: Cinephage
title: Cinephage | Self-Host on Easypanel
description: How to install Cinephage on Easypanel? 1-Click installation template for Cinephage on Easypanel
---

<!-- generated -->

# Cinephage

1-Click installation template for Cinephage on Easypanel

## Description

Cinephage is a self-hosted media management and streaming application designed for organizing and accessing your movie and TV show collection. It provides a modern web interface for browsing your media library, with features like metadata management, watch tracking, and streaming capabilities. Built with privacy and self-hosting in mind, Cinephage gives you complete control over your media collection without relying on external services.

## Benefits

- Self-Hosted Media Management: Complete control over your media library with no reliance on external services or cloud providers.
- Privacy-Focused: All your media and metadata stays on your own server, ensuring complete privacy and data ownership.
- Modern Web Interface: Clean, responsive web interface for browsing and managing your media collection from any device.
- Streaming Capabilities: Stream your media directly through the web interface without additional software.
- Metadata Management: Automatic metadata fetching and organization for movies and TV shows.

## Features

- Media Library Organization: Automatically organize and catalog your movie and TV show collection with rich metadata.
- Watch Tracking: Track what you've watched and manage your viewing history across your media library.
- Multi-Format Support: Supports various video formats and codecs for flexible media playback.
- Secure Access: Access your media library securely through the web interface with configurable authentication.
- Easy Deployment: Simple Docker-based deployment with minimal configuration required.

## Links

- [GitHub](https://github.com/moldytaint/cinephage)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/cinephage)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | cinephage
App Service Image | - | yes | ghcr.io/moldytaint/cinephage:sha-7e755e4
Media Path | Host path to your media directory (movies, TV shows, etc.) | yes | /media
Timezone | Timezone for the application (e.g., America/New_York, UTC) | yes | UTC

## Screenshots

![Cinephage Screenshot](./assets/screenshot.png)

## Change Log

- 2026-01-12 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
