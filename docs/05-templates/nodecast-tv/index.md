---
hide_title: true
sidebar_label: NodeCast TV
title: NodeCast TV | Self-Host on Easypanel
description: How to install NodeCast TV on Easypanel? 1-Click installation template for NodeCast TV on Easypanel
---

<!-- generated -->

# NodeCast TV

1-Click installation template for NodeCast TV on Easypanel

## Description

NodeCast TV is a self-hosted media casting and streaming application that allows you to cast and stream media content to various devices. Built with Node.js, NodeCast TV provides a simple and efficient way to manage and stream your media library. It features a web-based interface accessible on port 3000 and stores application data in a persistent volume for reliable operation. Perfect for home media servers and self-hosting enthusiasts looking for a lightweight media casting solution.

## Benefits

- Media Casting: Stream and cast your media content to various devices with a simple and intuitive web interface.
- Self-Hosted Solution: Keep your media streaming private and under your control with a self-hosted deployment.
- Lightweight and Fast: Built with Node.js for efficient performance with minimal resource requirements.
- Persistent Storage: Application data is stored in a persistent volume, ensuring your configuration and media library are preserved across restarts.

## Features

- Web-Based Interface: Access your media casting application through a modern web interface on port 3000.
- Media Streaming: Stream and cast media content to compatible devices on your network.
- Data Persistence: Application data is stored in a dedicated volume at /app/data for reliable data management.
- Production Ready: Configured for production deployment with optimized Node.js environment settings.
- Containerized Deployment: Easily deploy NodeCast TV in any environment that supports Docker with minimal configuration.

## Links

- [GitHub](https://github.com/technomancer702/nodecast-tv)
- [Container](https://github.com/technomancer702/nodecast-tv/pkgs/container/nodecast-tv)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/nodecast-tv)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | nodecast-tv
App Service Image | - | yes | ghcr.io/technomancer702/nodecast-tv:1.4.4

## Screenshots

![NodeCast TV Screenshot](./assets/screenshot.png)
![NodeCast TV Screenshot](./assets/screenshot1.png)

## Change Log

- 2025-01-17 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
