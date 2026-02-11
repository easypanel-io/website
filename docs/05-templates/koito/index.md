---
hide_title: true
sidebar_label: Koito
title: Koito | Self-Host on Easypanel
description: How to install Koito on Easypanel? 1-Click installation template for Koito on Easypanel
---

<!-- generated -->

# Koito

1-Click installation template for Koito on Easypanel

## Description

Koito is a self-hosted, themeable ListenBrainz-compatible scrobbler for tracking music listening history and visualizing listening habits. It supports relay of listens to other ListenBrainz-compatible servers, import from Last.fm, Maloja, Spotify, and ListenBrainz, and features like artist statistics, interest-over-time graphs, and Spotify-wrapped-style rewinds. Built with Go and featuring a sleek modern UI with multiple built-in themes and custom theme support, Koito provides comprehensive music listening analytics while maintaining complete control over your scrobbling data.

## Benefits

- Music Listening Tracking: Track your music listening history across all your devices and music services with comprehensive scrobbling support.
- ListenBrainz Compatible: Fully compatible with ListenBrainz and any service that supports scrobbling to custom ListenBrainz URLs.
- Data Import: Import historical listening data from Last.fm, Maloja, Spotify, and ListenBrainz to consolidate your music history in one place.
- Visual Analytics: Beautiful visualizations including artist statistics, interest-over-time graphs, and Spotify-wrapped-style rewinds for insights into your listening habits.
- Self-Hosted Privacy: Complete control over your listening data with no reliance on external services or data sharing.

## Features

- ListenBrainz Compatibility: Fully compatible with ListenBrainz protocol, allowing integration with any ListenBrainz-compatible client or server.
- Listen Relay: Optionally relay listens submitted to your Koito instance to other compatible services for backup or synchronization.
- Themed Interface: Sleek, modern UI with multiple built-in themes and support for custom themes to personalize your experience.
- Historical Data Import: Import listening history from Last.fm, Maloja, Spotify, and ListenBrainz to build a comprehensive music listening database.
- PostgreSQL Database: Reliable PostgreSQL database for persistent storage of listening data and user preferences.
- Artist Analytics: Detailed artist and album metrics, listening trends, and personalized insights into your music preferences.

## Links

- [Website](https://koito.io)
- [GitHub](https://github.com/gabehf/koito)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/koito)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | koito
App Service Image | - | yes | gabehf/koito:v0.1.4

## Screenshots

![Koito Screenshot](./assets/screenshot.png)

## Change Log

- 2026-01-17 – Tempalate Release (v0.1.4)

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
