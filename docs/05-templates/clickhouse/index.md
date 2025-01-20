---
hide_title: true
sidebar_label: Clickhouse
title: Clickhouse | Self-Host on Easypanel
description: How to install Clickhouse on Easypanel? 1-Click installation template for Clickhouse on Easypanel
---

<!-- generated -->

# Clickhouse

1-Click installation template for Clickhouse on Easypanel

## Description

ClickHouse is an open-source database designed for real-time apps and analytics. It is renowned for its speed and resource efficiency, capable of querying billions of rows in mere milliseconds. ClickHouse supports a wide range of data sources, including databases, data warehouses, streams, logs, analytics, data lake formats, and local files. It is built on a column-oriented database structure, which is ideally suited to Online Analytical Processing (OLAP) scenarios, making it significantly faster in processing most queries. ClickHouse utilizes all available system resources to their full potential to process each analytical query as swiftly as possible. It can be deployed in any environment, whether on your machine or in the cloud, and offers the ability to run fast queries on local files without a server. ClickHouse is trusted by developers working with data at scale, including major companies like Disney+ and Uber.

## Benefits

- Real-Time Analytics: ClickHouse is designed for real-time analytics, allowing you to query billions of rows in milliseconds. This makes it an ideal solution for applications that require immediate insights from large volumes of data.
- High Performance: ClickHouse is the fastest and most resource-efficient open-source database available. It uses all available system resources to their full potential to process each analytical query as quickly as possible.
- Versatile Data Source Support: ClickHouse supports all the data sources you need to power your apps. Whether you're working with databases, data warehouses, streams, logs, analytics, data lake formats, or local files, ClickHouse can handle it.

## Features

- Column-Oriented Databases: Unlike row-oriented databases where data is stored in rows, ClickHouse is a column-oriented database. This means that data is stored in columns, with values from the same columns stored together. This makes ClickHouse at least 100x faster in processing most queries.
- Flexible Deployment: ClickHouse can be deployed in any environment, whether it's on your machine or in the cloud. You can run fast queries on local files without a server, spin up a database server with open-source ClickHouse, or deploy a fully managed ClickHouse service on AWS or GCP.
- Trusted by Developers: ClickHouse is trusted by developers that work with data at scale. Companies like Disney+ use ClickHouse to provide analytics for their content distribution system, and Uber migrated to ClickHouse from the ELK stack for their log analytics platform.

## Links

- [Website](https://clickhouse.com/)
- [Documentation](https://clickhouse.com/docs)
- [Github](https://github.com/ClickHouse/ClickHouse)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/clickhouse)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | clickhouse
App Service Image | - | yes | clickhouse/clickhouse-server:24.8

## Screenshots


## Change Log

- 2022-10-28 – first release
- 2025-01-09 – Version bumped to 24.8

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
