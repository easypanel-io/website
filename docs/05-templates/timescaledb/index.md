---
hide_title: true
sidebar_label: TimescaleDB
title: TimescaleDB | Self-Host on Easypanel
description: How to install TimescaleDB on Easypanel? 1-Click installation template for TimescaleDB on Easypanel
---

<!-- generated -->

# TimescaleDB

1-Click installation template for TimescaleDB on Easypanel

## Description

TimescaleDB is an open-source time-series database optimized for fast ingest and complex queries. It is built on top of PostgreSQL and provides automatic partitioning across time and space, making it ideal for IoT, monitoring, analytics, and other time-series data applications. It offers native time-series functionality while maintaining the reliability and flexibility of PostgreSQL.

## Instructions

After deployment, connect to TimescaleDB using your app domain on port 5432 with username `postgres`, password set in Database Password, and database `postgres`; for example, `psql &quot;postgresql://postgres:&lt;YOUR_PASSWORD&gt;@&lt;YOUR_DOMAIN&gt;:5432/postgres&quot;`; TimescaleDB is PostgreSQL-compatible, so any PostgreSQL client or ORM can use the same connection details.

## Benefits

- Time-Series Optimization: Optimized for handling time-series data efficiently.
- PostgreSQL Compatibility: Full compatibility with PostgreSQL ecosystem.
- High Availability: Built-in high availability features.
- Scalability: Automatic partitioning for better performance.

## Features

- Time-Series Functions: Native time-series functions and operators.
- Automatic Partitioning: Automatic partitioning across time and space.
- Continuous Aggregates: Efficient aggregation of time-series data.
- Compression: Built-in data compression capabilities.

## Links

- [Website](https://www.timescale.com/)
- [Documentation](https://docs.timescale.com/)
- [Docker Hub](https://hub.docker.com/r/timescale/timescaledb-ha)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/timescaledb)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | timescaledb
TimescaleDB Image | - | yes | timescale/timescaledb-ha:pg17
Database Password | - | yes | postgres

## Screenshots


## Change Log

- 2025-03-26 – Initial template release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
