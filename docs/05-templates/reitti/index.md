---
hide_title: true
sidebar_label: Reitti
title: Reitti | Self-Host on Easypanel
description: How to install Reitti on Easypanel? 1-Click installation template for Reitti on Easypanel
---

<!-- generated -->

# Reitti

1-Click installation template for Reitti on Easypanel

## Description

Reitti is a self-hosted journey planning and route optimization application designed for public transportation, cycling, and walking routes. Built on OpenStreetMap data, it provides intelligent route calculations using the Photon geocoding engine for address lookups and PostGIS for spatial data processing. The application features a web-based interface for planning multi-modal journeys, real-time route optimization, and comprehensive mapping capabilities. With RabbitMQ for task queuing and Redis for high-performance caching, Reitti delivers fast and responsive route calculations even with complex multi-leg journeys. The system can be configured for specific regions to optimize data storage and performance, making it suitable for cities, regions, or entire countries depending on your needs. Perfect for organizations wanting to provide their own journey planning services, transportation agencies developing custom routing solutions, smart city initiatives requiring private routing infrastructure, or developers building location-based applications with routing capabilities without relying on commercial APIs or sharing user data with third-party services.

## Benefits

- Self-Hosted Route Planning: Complete control over your routing infrastructure with no dependency on commercial APIs or third-party services for journey planning.
- OpenStreetMap Based: Leverages the comprehensive and community-maintained OpenStreetMap database for accurate, up-to-date geographic data.
- Multi-Modal Routing: Calculate optimal routes combining public transportation, walking, cycling, and other transportation modes for comprehensive journey planning.
- Privacy-Focused: Keep all route planning and user data on your own infrastructure, ensuring complete privacy and data sovereignty.

## Features

- Photon Geocoding: Integrated Photon geocoding engine provides fast and accurate address-to-coordinate conversion using OpenStreetMap data.
- PostGIS Spatial Database: Advanced spatial data processing with PostGIS enables complex geographic queries and efficient route calculations.
- Asynchronous Processing: RabbitMQ message queue handles complex routing calculations asynchronously for responsive user experience.
- High-Performance Caching: Redis caching layer dramatically speeds up repeated route queries and reduces database load.
- Regional Configuration: Configure the system for specific geographic regions to optimize storage space and improve performance.
- RESTful API: Programmatic access to routing capabilities enables integration with custom applications and services.

## Links

- [Docker Hub](https://hub.docker.com/r/dedicatedcode/reitti)
- [Github](https://github.com/dedicatedcode/reitti)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/reitti)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | reitti
App Service Image | - | yes | dedicatedcode/reitti:2.5.0
Region Code (e.g., de, us, fi - leave empty for worldwide) | - | no | de

## Screenshots

![Reitti Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-26 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
