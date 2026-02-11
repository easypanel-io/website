---
hide_title: true
sidebar_label: Shelfmark
title: Shelfmark | Self-Host on Easypanel
description: How to install Shelfmark on Easypanel? 1-Click installation template for Shelfmark on Easypanel
---

<!-- generated -->

# Shelfmark

1-Click installation template for Shelfmark on Easypanel

## Description

Shelfmark is a self-hosted book management and organization application that provides comprehensive tools for managing your digital book library. Built with modern architecture, Shelfmark offers a web-based interface accessible on port 8084 for organizing, cataloging, and managing your book collection. The system supports book downloads, configuration management, and integration with torrent and usenet download clients. Perfect for book enthusiasts and libraries looking for a self-hosted solution to manage their digital book collections.

## Benefits

- Digital Book Management: Organize and manage your digital book library with comprehensive cataloging and organization tools.
- Self-Hosted Solution: Keep your book collection private and under your control with a self-hosted deployment.
- Book Downloads: Download and organize books with support for integration with torrent and usenet download clients.
- Persistent Storage: All books and configuration data are stored in persistent volumes, ensuring your library is preserved across container restarts.

## Features

- Book Library Management: Catalog, organize, and manage your digital book collection with an intuitive web interface.
- Book Downloads: Download books to a dedicated volume with support for various download sources and formats.
- Configuration Management: Store application configuration in a persistent volume for reliable settings management.
- Download Client Integration: Integrate with torrent and usenet download clients for automated book downloads.
- File Permissions: Configure user and group IDs for proper file permissions on downloaded books and configuration files.

## Links

- [GitHub](https://github.com/calibrain/shelfmark)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/shelfmark)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | shelfmark
App Service Image | - | yes | ghcr.io/calibrain/shelfmark:sha-03c364e
User ID (PUID) | User ID for file permissions (0 for root) | yes | 0
Group ID (PGID) | Group ID for file permissions (0 for root) | yes | 0

## Screenshots

![Shelfmark Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-22 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
