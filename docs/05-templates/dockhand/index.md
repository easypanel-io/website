---
hide_title: true
sidebar_label: Dockhand
title: Dockhand | Self-Host on Easypanel
description: How to install Dockhand on Easypanel? 1-Click installation template for Dockhand on Easypanel
---

<!-- generated -->

# Dockhand

1-Click installation template for Dockhand on Easypanel

## Description

Dockhand is a modern Docker container management and monitoring tool that provides an intuitive web interface for managing your Docker containers, images, volumes, and networks. With real-time container statistics, log viewing, and container lifecycle management, Dockhand simplifies Docker operations for both developers and system administrators. The application offers comprehensive container management capabilities including start, stop, restart, and removal operations, along with detailed container information and resource usage monitoring. Perfect for developers who need a visual interface for Docker management, system administrators monitoring container infrastructure, or teams looking for an alternative to command-line Docker tools.

## Instructions

After deployment, access Dockhand at your domain. The application requires
access to the Docker socket to manage containers. Make sure you have the
necessary permissions to access the Docker daemon.


## Benefits

- Visual Docker Management: Intuitive web interface for managing Docker containers without needing to use command-line tools.
- Real-Time Monitoring: Monitor container statistics, resource usage, and logs in real-time through the web interface.
- Container Lifecycle Management: Easily start, stop, restart, and remove containers with a few clicks from the web interface.
- Self-Hosted Solution: Deploy on your own infrastructure for complete control over your Docker management tools.

## Features

- Container Management: Full lifecycle management of Docker containers including creation, modification, and deletion operations.
- Image Management: View and manage Docker images, including pulling new images and removing unused ones.
- Volume Management: Manage Docker volumes, view volume details, and clean up unused volumes.
- Network Management: View and manage Docker networks, including network configuration and container connections.
- Log Viewing: Real-time log viewing for containers with search and filtering capabilities.
- Resource Monitoring: Monitor container resource usage including CPU, memory, and network statistics.
- Docker Socket Integration: Direct integration with Docker daemon through socket access for comprehensive container management.

## Links

- [GitHub](https://github.com/fnsys/dockhand)
- [Website](https://dockhand.pro)
- [Docker Hub](https://hub.docker.com/r/fnsys/dockhand)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/dockhand)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | dockhand
App Service Image | - | yes | fnsys/dockhand:8d75d786

## Screenshots

![Dockhand Screenshot](./assets/screenshot.png)

## Change Log

- 2026-01-07 (8d75d786) – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
