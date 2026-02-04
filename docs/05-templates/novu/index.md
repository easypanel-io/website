---
hide_title: true
sidebar_label: Novu
title: Novu | Self-Host on Easypanel
description: How to install Novu on Easypanel? 1-Click installation template for Novu on Easypanel
---

<!-- generated -->

# Novu

1-Click installation template for Novu on Easypanel

## Description

Novu is an open-source notification infrastructure platform that provides a unified API for managing notifications across multiple channels including email, SMS, push notifications, in-app notifications, and chat. This template deploys a complete Novu infrastructure with separate services for API, Worker, WebSocket, and Dashboard components, backed by MongoDB and Redis. Built for developers who need reliable, scalable notification delivery with features like workflow automation, template management, subscriber management, and real-time analytics. Perfect for applications that require sophisticated notification systems with multi-channel delivery, personalization, and comprehensive tracking capabilities.

## Benefits

- Multi-Channel Notifications: Send notifications across email, SMS, push, in-app, and chat channels through a single unified API.
- Workflow Automation: Create complex notification workflows with triggers, delays, and conditional logic for sophisticated messaging.
- Developer-Friendly: Comprehensive APIs, SDKs, and documentation designed specifically for developers and development teams.

## Features

- Unified Notification API: Single API to manage notifications across all channels including email, SMS, push, in-app, and chat.
- Workflow Management: Visual workflow builder for creating complex notification sequences with conditions and triggers.
- Template Engine: Rich template system for creating and managing notification content across different channels.
- Subscriber Management: Comprehensive subscriber management with preferences, segmentation, and targeting capabilities.
- Real-time Analytics: Detailed analytics and insights into notification delivery, engagement, and performance metrics.
- Provider Integration: Support for multiple notification providers including SendGrid, Twilio, Firebase, and many others.

## Links

- [Github](https://github.com/novuhq/novu)
- [Website](https://novu.co)
- [Documentation](https://docs.novu.co)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/novu)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | novu
App Service Image | - | yes | ghcr.io/novuhq/novu/dashboard:2.3.0
API Service Image | - | yes | ghcr.io/novuhq/novu/api:2.3.0
Worker Service Image | - | yes | ghcr.io/novuhq/novu/worker:2.3.0
WebSocket Service Image | - | yes | ghcr.io/novuhq/novu/ws:2.3.0

## Screenshots

![Novu Screenshot](./assets/screenshot.png)

## Change Log

- 2025-07-04 – Initial release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
