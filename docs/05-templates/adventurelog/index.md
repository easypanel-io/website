---
hide_title: true
sidebar_label: AdventureLog
title: AdventureLog | Self-Host on Easypanel
description: How to install AdventureLog on Easypanel? 1-Click installation template for AdventureLog on Easypanel
---

<!-- generated -->

# AdventureLog

1-Click installation template for AdventureLog on Easypanel

## Description

AdventureLog is a comprehensive travel tracking and adventure logging application that helps you document and organize your journeys around the world. Built with modern web technologies and PostGIS for geographic data management, it allows you to record your adventures, track visited locations, and create a visual map of your travels. The application features a clean, intuitive interface for logging trips, storing photos and memories, and analyzing your travel patterns. With support for geographic data through PostGIS, you can visualize your adventures on interactive maps and maintain a complete history of your explorations. Perfect for travelers, adventurers, and anyone who wants to keep a detailed record of their journeys.

## Benefits

- Travel Documentation: Keep a comprehensive record of all your travels and adventures in one centralized location with detailed logging capabilities.
- Geographic Visualization: Utilize PostGIS-powered geographic data to visualize your travels on interactive maps and see where you've been around the world.
- Media Storage: Store photos, notes, and memories from your adventures with persistent media storage that keeps your travel history safe.
- Modern Architecture: Built with a modern three-tier architecture featuring a dedicated frontend, backend API, and geographic database for optimal performance.

## Features

- Adventure Logging: Record detailed information about your trips, adventures, and travels with an intuitive interface designed for travel documentation.
- PostGIS Database: Leverages PostGIS (PostgreSQL with geographic extensions) for advanced location tracking, spatial queries, and map-based visualization.
- Media Management: Store and organize photos and media files from your adventures with persistent volume storage for all your travel memories.
- REST API Backend: Powerful backend API that handles all data operations, user management, and provides seamless integration with the frontend.
- Modern Web Interface: Clean, responsive web interface accessible from any device, making it easy to log adventures whether at home or on the go.
- Location Tracking: Track and visualize the places you've visited with geographic data support and mapping capabilities powered by PostGIS.
- Data Persistence: All your travel data, photos, and database information are stored in persistent volumes ensuring nothing is ever lost.
- Self-Hosted: Keep complete control of your travel data by hosting AdventureLog on your own infrastructure with full privacy and ownership.

## Links

- [GitHub Frontend](https://github.com/seanmorley15/adventurelog-frontend)
- [GitHub Backend](https://github.com/seanmorley15/adventurelog-backend)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/adventurelog)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | adventurelog
App Service Image | AdventureLog App Docker image | yes | ghcr.io/seanmorley15/adventurelog-frontend:v0.11.0
Backend Service Image | AdventureLog Backend Docker image | yes | ghcr.io/seanmorley15/adventurelog-backend:v0.11.0

## Screenshots

![AdventureLog Screenshot](./assets/screenshot.png)

## Change Log

- 2025-10-30 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
