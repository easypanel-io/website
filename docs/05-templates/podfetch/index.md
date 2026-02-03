---
hide_title: true
sidebar_label: Podfetch
title: Podfetch | Self-Host on Easypanel
description: How to install Podfetch on Easypanel? 1-Click installation template for Podfetch on Easypanel
---

<!-- generated -->

# Podfetch

1-Click installation template for Podfetch on Easypanel

## Description

Podfetch is a self-hosted podcast manager and aggregator that allows you to subscribe to, download, and organize your favorite podcasts from a single centralized interface. It automatically fetches new episodes from RSS feeds at configurable intervals, stores podcast metadata and audio files locally, and provides a web-based interface for browsing and managing your podcast library. The application features automatic episode downloading, customizable polling intervals for checking new content, SQLite database for lightweight data management, and organized file storage for podcast episodes. With its built-in audio player, you can stream episodes directly from the web interface without needing external podcast clients. Podfetch supports multiple podcast subscriptions, episode filtering, playback progress tracking, and automatic cleanup of old episodes to manage storage. The Rust-based backend ensures efficient performance and low resource usage, making it ideal for running on home servers or low-powered devices. Perfect for podcast enthusiasts who want complete control over their podcast library, users seeking privacy and independence from commercial podcast platforms, home lab administrators building media server ecosystems, or anyone who wants to archive and organize podcast episodes without relying on third-party services or dealing with platform-specific limitations.

## Benefits

- Complete Podcast Control: Manage your entire podcast library from a single interface with automatic episode downloads and organized storage.
- Privacy & Independence: Keep your podcast subscriptions and listening habits private on your own infrastructure, away from commercial tracking.
- Automatic Episode Management: Automatically fetch new episodes from RSS feeds at configurable intervals, ensuring you never miss new content.
- Lightweight & Efficient: Rust-based backend provides excellent performance with minimal resource usage, perfect for home servers and low-powered devices.

## Features

- RSS Feed Aggregation: Subscribe to unlimited podcast RSS feeds and automatically aggregate episodes from all your favorite shows.
- Automatic Downloads: Automatically download new episodes as they become available, with configurable polling intervals for feed updates.
- Web-Based Player: Stream podcast episodes directly from the web interface with a built-in audio player, no external apps required.
- Episode Management: Filter episodes, mark as played/unplayed, and manage your podcast queue with intuitive controls.
- Playback Progress Tracking: Track listening progress across episodes and resume playback from where you left off.
- SQLite Database: Lightweight SQLite database stores podcast metadata, subscriptions, and playback history without requiring external databases.
- Organized Storage: Automatically organize downloaded episodes by podcast with structured file storage for easy access and management.
- Storage Optimization: Configure automatic cleanup of old or played episodes to manage disk space efficiently.

## Links

- [Website](https://www.samtv.fyi/PodFetch/)
- [GitHub](https://github.com/SamTV12345/PodFetch)
- [Docker Hub](https://hub.docker.com/r/samuel19982/podfetch)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/podfetch)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | podfetch
App Service Image | - | yes | samuel19982/podfetch:v4.9.0
Polling Interval (minutes) | - | no | 60

## Screenshots

![Podfetch Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-28 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
