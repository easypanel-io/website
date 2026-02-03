---
hide_title: true
sidebar_label: SoulSync
title: SoulSync | Self-Host on Easypanel
description: How to install SoulSync on Easypanel? 1-Click installation template for SoulSync on Easypanel
---

<!-- generated -->

# SoulSync

1-Click installation template for SoulSync on Easypanel

## Description

SoulSync is an automated music synchronization service that bridges the gap between streaming platforms and your local media library. It automatically syncs your Spotify and Tidal playlists to your self-hosted media servers like Plex, Jellyfin, or Navidrome by downloading tracks from Soulseek. The web-based interface provides a centralized dashboard for managing playlist synchronization, monitoring download progress, configuring OAuth connections with streaming services, and organizing your music collection. With automated discovery and intelligent matching algorithms, SoulSync ensures your local library stays up-to-date with your streaming playlists without manual intervention. The service handles the complete workflow from playlist detection through download orchestration to media server integration, making it effortless to maintain an offline music collection that mirrors your online listening habits. Perfect for music enthusiasts who want the convenience of streaming services combined with the reliability and ownership of local media files, audiophiles building high-quality music collections, or users preparing for offline listening scenarios while maintaining synchronization with their curated playlists.

## Benefits

- Automated Playlist Syncing: Automatically synchronize your Spotify and Tidal playlists to your local media library without manual downloads or conversions.
- Media Server Integration: Seamlessly integrate with Plex, Jellyfin, and Navidrome to make synchronized music instantly available across all your media clients.
- Offline Music Collection: Build and maintain a local music library that mirrors your streaming playlists, ensuring access even without internet connectivity.
- Centralized Management: Manage all your music synchronization from a single web interface with OAuth integration for streaming services and progress monitoring.

## Features

- Multi-Platform Sync: Connect with Spotify and Tidal accounts via OAuth to automatically track and sync your playlists to local storage.
- Soulseek Integration: Leverage the Soulseek network to download high-quality music files that match your streaming playlist tracks.
- Web-Based Dashboard: Monitor synchronization status, manage OAuth connections, configure download preferences, and view logs through an intuitive web interface.
- Intelligent Track Matching: Smart algorithms match streaming tracks to downloadable files with high accuracy based on metadata, ensuring correct downloads.
- Automated Download Management: Queue and manage downloads automatically with configurable paths, folder organization, and transfer monitoring.
- Media Server Connectivity: Direct integration with popular self-hosted media servers for immediate availability of newly synced music in your library.

## Links

- [GitHub](https://github.com/Nezreka/SoulSync)
- [Docker Hub](https://hub.docker.com/r/boulderbadgedad/soulsync)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/soulsync)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | soulsync
App Service Image | - | yes | boulderbadgedad/soulsync:latest
Timezone | - | no | UTC

## Screenshots

![SoulSync Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-26 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
