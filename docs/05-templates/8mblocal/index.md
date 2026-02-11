---
hide_title: true
sidebar_label: 8MB Local
title: 8MB Local | Self-Host on Easypanel
description: How to install 8MB Local on Easypanel? 1-Click installation template for 8MB Local on Easypanel
---

<!-- generated -->

# 8MB Local

1-Click installation template for 8MB Local on Easypanel

## Description

8MB Local is a self-hosted file processing and conversion application that provides tools for handling files and generating outputs. Built with modern architecture, 8MB Local offers a web-based interface accessible on port 8001 for processing files and managing uploads and outputs. The system stores uploaded files and generated outputs in separate persistent volumes, ensuring your data is preserved across container restarts. Perfect for individuals and organizations looking for a self-hosted solution for file processing and management.

## Benefits

- File Processing: Process and convert files with a self-hosted solution that gives you complete control over your file processing workflows.
- Self-Hosted Solution: Keep your files and processing data private and under your control with a self-hosted deployment.
- Separate Storage Volumes: Uploads and outputs are stored in separate persistent volumes, making it easy to manage and backup your data.
- Web-Based Interface: Access and manage your file processing through a modern web interface accessible on port 8001.

## Features

- File Upload Management: Upload and manage files through the web interface with dedicated storage for uploads.
- Output Generation: Generate and manage processed outputs with dedicated storage for output files.
- Persistent Storage: Uploads are stored in a dedicated volume at /app/uploads and outputs at /app/outputs for reliable data persistence.
- Containerized Deployment: Easily deploy 8MB Local in any environment that supports Docker with minimal configuration requirements.

## Links

- [Website](https://8mb.campuscal.tech/)
- [GitHub](https://github.com/JMS1717/8mb.local)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/8mblocal)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | 8mblocal
App Service Image | - | yes | jms1717/8mblocal:v133

## Screenshots

![8MB Local Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-23 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
