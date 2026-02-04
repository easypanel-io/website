---
hide_title: true
sidebar_label: Shelf
title: Shelf | Self-Host on Easypanel
description: How to install Shelf on Easypanel? 1-Click installation template for Shelf on Easypanel
---

<!-- generated -->

# Shelf

1-Click installation template for Shelf on Easypanel

## Description

Shelf.nu is an open-source asset management platform designed to help organizations track and manage their physical assets efficiently. It provides features for asset tracking, inventory management, check-in/check-out functionality, and reporting. The platform includes location tracking with maps, user management, and email notifications for asset-related activities.

## Instructions

Make sure to setup your Supabase instance before deploying this template.

## Benefits

- Asset Management: Comprehensive asset tracking and management system with check-in/check-out functionality.
- Location Tracking: Built-in mapping and location tracking features for physical asset management.
- User Management: Multi-user support with role-based access control and team collaboration features.
- Email Notifications: Automated email notifications for asset activities and important updates.

## Features

- Asset Tracking: Track physical assets with detailed information, photos, and status updates.
- Check-in/Check-out: Manage asset assignments and returns with automated tracking and notifications.
- Reporting: Generate reports on asset utilization, location history, and inventory status.
- Integration Ready: Built-in Supabase integration for authentication and additional cloud services.

## Links

- [Documentation](https://docs.shelf.nu/)
- [GitHub](https://github.com/shelf-nu/shelf.nu)
- [Website](https://www.shelf.nu)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/shelf)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | shelf
App Service Image | Shelf.nu Docker image | yes | ghcr.io/shelf-nu/shelf.nu:main-22c9ccd
Supabase Anonymous Public Key | Supabase anonymous public key for authentication | no | 
Supabase Service Role Key | Supabase service role key for server-side operations | no | 
Supabase URL | Your Supabase instance URL (e.g., https://yourproject.supabase.co) | no | 
MapTiler Token | MapTiler API token for location mapping features | no | 
SMTP Host | SMTP server hostname for email notifications | no | 
SMTP Username | SMTP username for email authentication | no | 
SMTP From Address | Email address to use as sender (e.g., "Support" <support@yourdomain.com>) | no | 
SMTP Password | SMTP password for email authentication | no | 

## Screenshots

![Shelf Screenshot](./assets/screenshot.png)

## Change Log

- 2025-06-17 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
