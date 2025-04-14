---
hide_title: true
sidebar_label: Milvus
title: Milvus | Self-Host on Easypanel
description: How to install Milvus on Easypanel? 1-Click installation template for Milvus on Easypanel
---

<!-- generated -->

# Milvus

1-Click installation template for Milvus on Easypanel

## Description

Milvus is an open-source vector database designed for AI applications and similarity search. It provides high-performance vector search capabilities and is optimized for handling large-scale vector data. Milvus supports various index types and search methods, making it ideal for applications like recommendation systems, image search, and natural language processing.

## Benefits

- Vector Search: High-performance vector similarity search capabilities.
- Scalability: Designed for handling large-scale vector data.
- Multiple Index Types: Support for various index types and search methods.
- AI Integration: Optimized for AI and machine learning applications.

## Features

- Vector Database: Native support for vector data storage and search.
- Distributed Architecture: Scalable distributed architecture.
- Rich APIs: Multiple programming language support.
- Monitoring: Built-in monitoring and management tools.

## Links

- [Website](https://milvus.io/)
- [Documentation](https://milvus.io/docs/)
- [GitHub](https://github.com/milvus-io/milvus)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/milvus)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | milvus
Milvus Image | - | yes | milvusdb/milvus:v2.0.2
ETCD Image | - | yes | quay.io/coreos/etcd:v3.5.0
MinIO Image | - | yes | minio/minio:RELEASE.2020-12-03T00-03-10Z
MinIO Access Key | Access key for MinIO | yes | minioadmin
MinIO Secret Key | Secret key for MinIO | yes | minioadmin

## Screenshots


## Change Log

- 2025-03-27 – Initial template release (v2.0.2)

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
