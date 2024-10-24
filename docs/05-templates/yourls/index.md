---
hide_title: true
sidebar_label: YOURLS
title: YOURLS | Self-Host on Easypanel
description: How to install YOURLS on Easypanel? 1-Click installation template for YOURLS on Easypanel
---

<!-- generated -->

# YOURLS

1-Click installation template for YOURLS on Easypanel

## Description

YOURLS (Your Own URL Shortener) is a powerful, self-hosted service designed for creating and managing short URLs. It provides a clean and simple interface, supports plugins for extended functionality, and offers detailed link tracking analytics. With YOURLS, you can maintain control over your short links and branding. The application is accessible via your host on ports 8080 and 8081. This container is based on Docker Baseimage KasmVNC, providing additional environment variables and configurations for enhanced flexibility. It also supports the docker manifest for multi-platform awareness, ensuring the correct image for your architecture.

## Instructions

Use admin:admin123 to login.

## Benefits

- Simple URL Management: YOURLS allows you to create, manage, and track short URLs easily through its web interface or API.
- Self-Hosted Solution: Stay in control of your links with a self-hosted service, ensuring privacy and flexibility.
- Custom Branding: Customize your short links with your own domain to enhance branding and credibility.

## Features

- API Access: Integrate YOURLS with other tools using its flexible API for programmatic access.
- Plugins Support: Extend YOURLS functionality with various community-built plugins.
- Analytics Dashboard: Get detailed insights into clicks, referrers, and geographical data.
- Custom Links: Create personalized short links with custom slugs for better memorability.

## Links

- [Documentation](https://yourls.org/#Guide)
- [Github](https://github.com/YOURLS/YOURLS)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/yourls)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | yourls
App Service Image | - | yes | yourls:1.9
Database Service Name | - | yes | yourls-db

## Screenshots

![YOURLS Screenshot](./assets/screenshot.png)

## Change Log

- 2024-10-17 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
