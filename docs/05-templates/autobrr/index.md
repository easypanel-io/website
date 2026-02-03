---
hide_title: true
sidebar_label: Autobrr
title: Autobrr | Self-Host on Easypanel
description: How to install Autobrr on Easypanel? 1-Click installation template for Autobrr on Easypanel
---

<!-- generated -->

# Autobrr

1-Click installation template for Autobrr on Easypanel

## Description

Autobrr is a modern download automation tool for torrent indexers and trackers. It monitors IRC announce channels and RSS feeds from various torrent trackers, automatically downloading torrents that match your custom filters and rules. Autobrr acts as a bridge between torrent indexers and your download clients, enabling advanced automation workflows. It supports numerous torrent clients including qBittorrent, Deluge, Transmission, and rTorrent, and integrates with media management tools like Sonarr, Radarr, and Lidarr. With powerful filtering capabilities based on resolution, codec, release group, and custom regex patterns, Autobrr ensures you only download exactly what you want. Perfect for automating private tracker workflows, racing releases, and maintaining ratio requirements.

## Benefits

- Advanced Automation: Automate torrent downloads with powerful filtering rules based on quality, release group, codec, and custom patterns.
- Multi-Client Support: Works with all major torrent clients including qBittorrent, Deluge, Transmission, and rTorrent for flexible setup.
- Private Tracker Optimization: Perfect for private trackers with IRC announce monitoring, fast releases, and ratio management features.

## Features

- IRC Announce Monitoring: Monitor IRC announce channels from multiple trackers simultaneously to catch new releases instantly.
- RSS Feed Support: Track RSS feeds from torrent indexers and trackers for sites without IRC announce channels.
- Smart Filtering: Create complex filters with conditions for resolution, codec, release group, size limits, and custom regex patterns.
- Download Client Integration: Send torrents directly to qBittorrent, Deluge, Transmission, rTorrent, or other supported clients.
- Arr Integration: Integrate with Sonarr, Radarr, Lidarr, and Whisparr for seamless media management automation.
- Release Racing: Optimized for fast release grabbing to maintain ratio requirements on private trackers.

## Links

- [Website](https://autobrr.com/)
- [Documentation](https://autobrr.com/introduction)
- [Github](https://github.com/autobrr/autobrr)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/autobrr)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | autobrr
App Service Image | - | yes | ghcr.io/autobrr/autobrr:v1.69
Timezone | - | no | UTC

## Screenshots

![Autobrr Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-19 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
