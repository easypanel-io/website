---
hide_title: true
sidebar_label: Gladys Assistant
title: Gladys Assistant | Self-Host on Easypanel
description: How to install Gladys Assistant on Easypanel? 1-Click installation template for Gladys Assistant on Easypanel
---

<!-- generated -->

# Gladys Assistant

1-Click installation template for Gladys Assistant on Easypanel

## Description

Gladys Assistant is a privacy-first, open-source home automation platform that allows you to control and automate your smart home devices. Built with Node.js, Gladys provides a comprehensive solution for managing IoT devices, creating automation scenarios, and monitoring your home environment. The system supports a wide range of devices including Zigbee, Z-Wave, Bluetooth, WiFi, and more. Gladys stores all data locally in SQLite, ensuring your home automation data remains private. Perfect for home automation enthusiasts looking for a self-hosted alternative to commercial smart home platforms.

## Benefits

- Home Automation: Control and automate your smart home devices with a comprehensive, privacy-first home automation platform.
- Privacy-First: All data is stored locally in SQLite, ensuring your home automation data remains private and under your control.
- Wide Device Support: Support for a wide range of devices including Zigbee, Z-Wave, Bluetooth, WiFi, and more through various integrations.
- Self-Hosted Solution: Keep your home automation data private and under your control with a self-hosted deployment.

## Features

- Device Management: Connect and manage a wide variety of smart home devices including lights, sensors, switches, and more.
- Automation Scenarios: Create complex automation scenarios with triggers, conditions, and actions to automate your home.
- Local Data Storage: All data is stored locally in SQLite, ensuring privacy and data ownership.
- Hardware Access: Direct access to hardware devices through Docker socket and device mounts for comprehensive device control.
- Web-Based Interface: Access and manage your home automation system through a modern web interface accessible on port 8080.
- Containerized Deployment: Easily deploy Gladys Assistant in any environment that supports Docker with hardware access capabilities.

## Links

- [Website](https://gladysassistant.com)
- [GitHub](https://github.com/GladysAssistant/Gladys)
- [Documentation](https://gladysassistant.com/docs)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/gladys)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | gladys
App Service Image | - | yes | gladysassistant/gladys:sha-c6bc0ba
Timezone | Timezone for the application (e.g., Asia/Karachi, America/New_York, Europe/London) | yes | Asia/Karachi

## Screenshots

![Gladys Assistant Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-29 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
