---
hide_title: true
sidebar_label: BlackCandy
title: BlackCandy | Self-Host on Easypanel
description: How to install BlackCandy on Easypanel? 1-Click installation template for BlackCandy on Easypanel
---

<!-- generated -->

# BlackCandy

1-Click installation template for BlackCandy on Easypanel

## Description

BlackCandy is a self-hosted music streaming server built with Rails and Hotwire. It provides a clean, modern web interface for streaming your personal music collection. The goal of the project is to create a real personal music center that you can access from anywhere. It features mobile apps for iOS and Android, supports multiple audio formats, and offers a beautiful, responsive interface.

## Instructions

default login is admin@admin.com and password is foobar

## Benefits

- Beautiful Web Interface: Enjoy a clean, modern, and responsive web interface built with Rails and Hotwire for an excellent user experience across all devices.
- Mobile App Support: Access your music on the go with native mobile apps available for iOS (App Store) and Android (F-Droid and GitHub releases).
- Easy Installation: Simple Docker-based installation that gets you up and running quickly with minimal configuration required.
- Personal Music Center: Create your own personal music streaming service with full control over your music library and user access.

## Features

- Modern Web Interface: Clean and intuitive web interface built with Rails and Hotwire, providing a smooth and responsive music browsing experience.
- Multiple Database Support: Supports both SQLite (default) for simple setups and PostgreSQL for more demanding installations or cloud deployments.
- Data Persistence: All data is stored in `/app/storage` for easy backup and persistence across container updates and restarts.
- Discogs Integration: Optional integration with Discogs API to automatically fetch artist and album artwork for your music collection.
- Demo Mode: Built-in demo mode for testing and showcasing features without giving users administrative privileges.
- Customizable Deployment: Flexible configuration options including custom ports, media paths, database options, and SSL enforcement.

## Links

- [GitHub](https://github.com/blackcandy-org/blackcandy)
- [Documentation](https://github.com/blackcandy-org/blackcandy#readme)
- [Demo](https://demo.blackcandy.org)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/blackcandy)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | blackcandy
App Service Image | BlackCandy Docker image | yes | blackcandy/blackcandy:3.1.0
Media Path | Path to your media files | yes | /tmp

## Screenshots

![BlackCandy Screenshot](./assets/screenshot.png)

## Change Log

- 2025-06-26 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
