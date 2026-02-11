---
hide_title: true
sidebar_label: Keeper
title: Keeper | Self-Host on Easypanel
description: How to install Keeper on Easypanel? 1-Click installation template for Keeper on Easypanel
---

<!-- generated -->

# Keeper

1-Click installation template for Keeper on Easypanel

## Description

Keeper is a simple and open-source calendar synchronization and booking tool that allows you to pull events from remotely hosted iCal or ICS links and push them to one or many calendars. Built with modern architecture using Next.js and Bun, Keeper provides a comprehensive solution for calendar management and synchronization. The standalone version includes all services (web, API, cron) in a single container, making it easy to deploy. Keeper supports multiple calendar providers including Google Calendar, iCloud, Outlook, CalDAV, and Fastmail. Perfect for individuals and organizations looking to synchronize calendars across different platforms with a self-hosted solution.

## Benefits

- Calendar Synchronization: Synchronize events from multiple calendar sources (iCal, ICS links) and push them to one or many destination calendars seamlessly.
- Self-Hosted Solution: Keep your calendar data private and under your control with a self-hosted deployment.
- Multiple Provider Support: Support for Google Calendar, iCloud, Outlook, CalDAV, and Fastmail calendar providers for comprehensive calendar management.
- Standalone Deployment: All-in-one standalone image includes web, API, and cron services in a single container for easy deployment and management.

## Features

- Calendar Sync: Pull events from remotely hosted iCal or ICS links and synchronize them across multiple calendar destinations automatically.
- Web-Based Interface: Access and manage your calendar synchronizations through a modern web interface accessible on port 80.
- Multiple Calendar Providers: Support for Google Calendar, iCloud, Outlook, CalDAV, and Fastmail with OAuth authentication for seamless integration.
- Automated Synchronization: Background cron service automatically synchronizes calendars on a schedule to keep your events up to date.
- PostgreSQL Storage: Calendar data and synchronization configurations are stored in a dedicated PostgreSQL volume at /var/lib/postgresql/data for reliable persistence.
- OAuth Integration: Optional OAuth authentication with Google and Microsoft providers for secure calendar access and synchronization.
- Encryption Support: Built-in encryption support for securing calendar data and synchronization credentials.
- Containerized Deployment: Easily deploy Keeper in any environment that supports Docker with minimal configuration requirements.

## Links

- [Website](https://keeper.sh)
- [GitHub](https://github.com/ridafkih/keeper.sh)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/keeper)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | keeper
App Service Image | - | yes | ghcr.io/ridafkih/keeper-standalone:1.11.5
Better Auth Secret | Required secret key for Better Auth authentication. Auto-generated if empty for easy deployment. | no | 
Encryption Key | Required encryption key for data encryption. Auto-generated if empty for easy deployment. | no | 
Commercial Mode | Enable commercial mode features | no | false
Google Client ID | Google OAuth Client ID (optional) | no | 
Google Client Secret | Google OAuth Client Secret (optional) | no | 
Microsoft Client ID | Microsoft OAuth Client ID (optional) | no | 
Microsoft Client Secret | Microsoft OAuth Client Secret (optional) | no | 

## Screenshots

![Keeper Screenshot](./assets/screenshot.png)
![Keeper Screenshot](./assets/screenshot2.png)

## Change Log

- 2025-01-22 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
