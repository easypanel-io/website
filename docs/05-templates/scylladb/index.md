---
hide_title: true
sidebar_label: ScyllaDB
title: ScyllaDB | Self-Host on Easypanel
description: How to install ScyllaDB on Easypanel? 1-Click installation template for ScyllaDB on Easypanel
---

<!-- generated -->

# ScyllaDB

1-Click installation template for ScyllaDB on Easypanel

## Description

ScyllaDB is a distributed NoSQL database that is compatible with Apache Cassandra but offers superior performance and lower latency. It&#39;s designed to handle high-throughput, low-latency workloads with linear scalability. ScyllaDB is written in C++ and uses a shared-nothing architecture, making it highly efficient for modern hardware. It&#39;s particularly well-suited for applications requiring high availability, consistent performance, and massive scalability.

## Instructions

Once the server is up, you can connect to ScyllaDB using the following ports 9042 - Native transport (CQL) 9160 - Thrift transport 7000 - Inter-node communication 7001 - SSL inter-node communication 10000 - REST API

## Benefits

- High Performance: Superior performance compared to Apache Cassandra with lower latency and higher throughput.
- Linear Scalability: Scale horizontally with predictable performance as you add more nodes.
- Cassandra Compatibility: Drop-in replacement for Apache Cassandra with improved performance and reliability.

## Features

- Distributed Architecture: Built on a shared-nothing architecture for maximum performance and reliability.
- CQL Support: Compatible with Cassandra Query Language (CQL) for easy migration.
- Monitoring & Management: Built-in monitoring tools and JMX support for system management.
- Data Consistency: Configurable consistency levels for optimal performance and reliability.

## Links

- [Website](https://www.scylladb.com/)
- [Documentation](https://docs.scylladb.com/)
- [Docker Hub](https://hub.docker.com/r/scylladb/scylla)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/scylladb)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | scylla
ScyllaDB Image | - | yes | scylladb/scylla:6.1
CQL Port | Port for Native transport (CQL) | yes | 9042
Thrift Port | Port for Thrift transport | yes | 9160
RPC Port | Port for Inter-node communication | yes | 7000
RPC SSL Port | Port for SSL inter-node communication | yes | 7001
REST Port | Port for REST API | yes | 10000

## Screenshots


## Change Log

- 2025-03-24 – Initial template release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
