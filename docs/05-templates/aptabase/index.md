---
hide_title: true
sidebar_label: Aptabase
title: Aptabase | Self-Host on Easypanel
description: How to install Aptabase on Easypanel? 1-Click installation template for Aptabase on Easypanel
---

<!-- generated -->

# Aptabase

1-Click installation template for Aptabase on Easypanel

## Description

Aptabase is an open-source, privacy-focused analytics platform for mobile and desktop applications. It provides real-time analytics, crash reporting, and user insights while respecting user privacy.

## Instructions

Sign up and open the console logs where it will print the link to authorize the email. Copy the URL part that looks like this. [url, https://your-domain/api/_auth/continue?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiU2lnbkluIiwibmFtZSI6IkFoc29uIFNoYWlraCIsImVtYWlsIjoiYWhzb25zaGFpa2g2MTZAZ21haWwuY29tIiwibmJmIjoxNzQ0MTE5MDgyLCJleHAiOjE3NDQxMTk5ODIsImlhdCI6MTc0NDExOTA4MiwiaXNzIjoiYXB0YWJhc2Utc2gifQ.PxbVTiVOXsTkkxQKV1AOGaaEpLnMOOtgSRMqDY6dkIg]\u0027. Do not copy this part at the end ]\u0027

## Benefits

- Privacy Focused: Built with privacy in mind, ensuring user data protection
- Real-time Analytics: Get instant insights into your application usage
- Crash Reporting: Automatic crash detection and reporting
- Self-hosted: Complete control over your data and infrastructure
- Open Source: Transparent and community-driven development

## Features

- Analytics Dashboard: Comprehensive analytics and user insights
- Crash Reporting: Automatic crash detection and detailed reports
- User Segmentation: Analyze user behavior and create segments
- Real-time Updates: Live updates of application usage data
- API Access: Programmatic access to analytics data

## Links

- [Website](https://aptabase.com)
- [Documentation](https://aptabase.com/docs)
- [GitHub](https://github.com/aptabase/aptabase)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/aptabase)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | aptabase
App Service Image | - | yes | ghcr.io/aptabase/aptabase:main
ClickHouse Service Image | - | yes | clickhouse/clickhouse-server:23.8.4.69-alpine

## Screenshots

![Aptabase Screenshot](./assets/screenshot.png)

## Change Log

- 2024-04-04 – First Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
