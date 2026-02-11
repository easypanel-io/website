---
hide_title: true
sidebar_label: Tugtainer
title: Tugtainer | Self-Host on Easypanel
description: How to install Tugtainer on Easypanel? 1-Click installation template for Tugtainer on Easypanel
---

<!-- generated -->

# Tugtainer

1-Click installation template for Tugtainer on Easypanel

## Description

Tugtainer is a self-hosted Docker container management application that provides a web-based interface for managing Docker containers and images. Built with modern architecture, Tugtainer offers comprehensive container management capabilities including container lifecycle management, image management, and network configuration. The system uses a secure socket proxy service to safely access the Docker socket, providing an additional layer of security. Perfect for developers and system administrators looking for a self-hosted alternative to manage Docker containers with a user-friendly interface.

## Benefits

- Docker Container Management: Manage Docker containers, images, and networks through a user-friendly web interface with comprehensive management capabilities.
- Self-Hosted Solution: Keep your container management private and under your control with a self-hosted deployment.
- Secure Socket Proxy: Uses a secure socket proxy service to safely access the Docker socket, providing an additional layer of security compared to direct socket mounting.
- Persistent Storage: All application data is stored in a persistent volume, ensuring your configurations and settings are preserved across container restarts.

## Features

- Container Management: Start, stop, restart, and manage Docker containers with an intuitive web interface.
- Image Management: View, pull, and manage Docker images with comprehensive image management tools.
- Network Management: Configure and manage Docker networks through the web interface.
- Secure Socket Access: Socket proxy service provides secure access to Docker socket with configurable permissions and access controls.
- Web-Based Interface: Access and manage your Docker environment through a modern web interface accessible on port 80.
- Persistent Storage: Application data is stored in a dedicated volume at /tugtainer for reliable data persistence.
- Containerized Deployment: Easily deploy Tugtainer in any environment that supports Docker with minimal configuration requirements.

## Links

- [GitHub](https://github.com/quenary/tugtainer)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/tugtainer)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | tugtainer
App Service Image | - | yes | ghcr.io/quenary/tugtainer:v1.17.1
Socket Proxy Image | - | yes | ghcr.io/linuxserver/socket-proxy:3.2.10-r0-ls66
Timezone | Timezone for the application (e.g., Asia/Karachi, America/New_York, Europe/London) | yes | Asia/Karachi
Socket Proxy Containers | Enable container operations (0 or 1) | no | 1
Socket Proxy Events | Enable event streaming (0 or 1) | no | 1
Socket Proxy Images | Enable image operations (0 or 1) | no | 1
Socket Proxy Info | Enable info endpoint (0 or 1) | no | 1
Socket Proxy Log Level | Log level for socket proxy (debug, info, warning, error) | no | warning
Socket Proxy Ping | Enable ping endpoint (0 or 1) | no | 1
Socket Proxy Networks | Enable network operations (0 or 1) | no | 1
Socket Proxy Post | Enable POST operations (0 or 1) | no | 1
Socket Proxy Version | Enable version endpoint (0 or 1) | no | 1

## Screenshots

![Tugtainer Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-23 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
