---
hide_title: true
sidebar_label: Memcached
title: Memcached | Self-Host on Easypanel
description: How to install Memcached on Easypanel? 1-Click installation template for Memcached on Easypanel
---

<!-- generated -->

# Memcached

1-Click installation template for Memcached on Easypanel

## Description

Memcached is a high-performance, distributed memory object caching system designed for speeding up dynamic web applications by alleviating database load. It works by storing data and objects in RAM to reduce the number of times an external data source must be read. Memcached is simple yet powerful, featuring a straightforward design that enables rapid deployment, ease of development, and solves many problems facing large data caches. It&#39;s particularly useful for database call, API call, or page rendering result caching.

## Benefits

- High Performance: Memcached provides extremely fast performance with O(1) get/set/delete operations and supports operations over 50,000 QPS per node.
- Simple to Use: With a simple design and protocol, Memcached is easy to implement and use in your applications.
- Distributed Architecture: Scale horizontally by adding more nodes to your Memcached cluster, distributing memory and load across multiple machines.

## Features

- In-Memory Caching: Store frequently accessed data in RAM for lightning-fast retrieval, reducing database load.
- Multi-protocol Support: Connect to Memcached using various clients in different languages like PHP, Python, Ruby, Java, and more.
- Key-Value Storage: Store any arbitrary data (strings, objects) associated with a key for simple retrieval.
- LRU Eviction: Least Recently Used (LRU) algorithm automatically removes the least-used items when memory is needed.

## Links

- [Website](https://memcached.org/)
- [Documentation](https://github.com/memcached/memcached/wiki)
- [Github](https://github.com/memcached/memcached)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/memcached)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | memcached
App Service Image | - | yes | memcached:1.6.40

## Screenshots


## Change Log

- 2025-03-20 – Initial template release
- 2025-07-22 – Update to 1.6.38
- 2025-12-29 – Version bumped to 1.6.40

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
