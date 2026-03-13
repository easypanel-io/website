---
hide_title: true
sidebar_label: DragonflyDB
title: DragonflyDB | Self-Host on Easypanel
description: How to install DragonflyDB on Easypanel? 1-Click installation template for DragonflyDB on Easypanel
---

<!-- generated -->

# DragonflyDB

1-Click installation template for DragonflyDB on Easypanel

## Description

DragonflyDB is a modern, high-performance, Redis-compatible in-memory datastore that&#39;s designed for cloud workloads. It offers superior performance with up to 25x higher throughput than Redis while using fewer resources. DragonflyDB is fully compatible with Redis APIs and commands, making it a drop-in replacement that doesn&#39;t require code changes. It features automatic snapshots, optional persistence to disk, built-in replication, and efficient memory management. Perfect for caching, session storage, real-time analytics, and any use case that requires blazing-fast data access with lower operational costs.

## Instructions

After deployment, you can connect to DragonflyDB using any Redis client on port 6379. Make sure to use the password you configured for secure access. Data is automatically persisted to the mounted volume based on the snapshot schedule.

## Benefits

- Superior Performance: Experience up to 25x higher throughput compared to Redis with vertical scalability that maximizes multi-core CPU utilization.
- Redis Compatible: Drop-in replacement for Redis with full API compatibility. No code changes required - just point your existing Redis clients to DragonflyDB.
- Resource Efficient: Use significantly less memory and CPU resources compared to Redis while handling more operations, reducing infrastructure costs.

## Features

- Automatic Snapshots: Configure automatic snapshot intervals to persist data to disk, ensuring data durability without manual intervention.
- Multi-threaded Architecture: Efficiently utilizes all available CPU cores with a shared-nothing architecture that eliminates the need for Redis clustering for vertical scaling.
- Built-in Persistence: Supports RDB-style snapshots with customizable scheduling and automatic backup rotation for reliable data persistence.
- Memory Management: Advanced memory management with optional memory limits and efficient eviction policies to optimize resource usage.

## Links

- [Website](https://www.dragonflydb.io/)
- [Documentation](https://www.dragonflydb.io/docs)
- [Docker Hub](https://hub.docker.com/r/dragonflydb/dragonfly)
- [Github](https://github.com/dragonflydb/dragonfly)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/dragonfly)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | dragonfly
App Service Image | - | yes | docker.dragonflydb.io/dragonflydb/dragonfly:v1.34.2
Password | - | yes | 
Snapshot Cron Schedule | - | no | */5 * * * *
Max Memory (e.g., 8gb, leave empty for no limit) | - | no | 

## Screenshots


## Change Log

- 2025-11-04 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
