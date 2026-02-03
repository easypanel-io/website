---
hide_title: true
sidebar_label: DCM
title: DCM | Self-Host on Easypanel
description: How to install DCM on Easypanel? 1-Click installation template for DCM on Easypanel
---

<!-- generated -->

# DCM

1-Click installation template for DCM on Easypanel

## Description

DCM is a lightweight self-hosted web interface for managing and monitoring Docker containers. It provides a simple dashboard to view container status, start/stop operations, and inspect basic container details. Designed to be minimal and easy to deploy, DCM helps you keep an eye on your containers without exposing the full Docker API or using heavier management stacks. Ideal for small home labs or users who want a quick overview of their running services via a browser.

## Benefits

- Simple Container Dashboard: Monitor Docker containers from a minimal web UI without complex setups.
- Lightweight & Easy: Small footprint and quick deployment for home labs and small servers.
- Safe Visibility: View status and basic controls without exposing full Docker API access.
- Self-Hosted Control: Keep container visibility on your own infrastructure with no third-party dependencies.

## Features

- Container Overview: See running containers, status, and basic info at a glance.
- Start/Stop Controls: Basic lifecycle controls to start or stop containers from the UI.
- Minimal Config: No external databases or complex setup required; deploy and use.
- Web Access: Access the dashboard via browser on the exposed port.

## Links

- [GitHub](https://github.com/ajnart/dcm)
- [Docker Hub](https://hub.docker.com/r/ajnart/dcm)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/dcm)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | dcm
App Service Image | - | yes | ghcr.io/ajnart/dcm:sha-a42eb18

## Screenshots

![DCM Screenshot](./assets/screenshot.png)

## Change Log

- 2025-12-11 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
