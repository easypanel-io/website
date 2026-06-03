---
hide_title: true
sidebar_label: Rybbit
title: Rybbit | Self-Host on Easypanel
description: How to install Rybbit on Easypanel? 1-Click installation template for Rybbit on Easypanel
---

<!-- generated -->

# Rybbit

1-Click installation template for Rybbit on Easypanel

## Description

Rybbit is a comprehensive analytics platform that provides powerful insights into user behavior and application performance. Built with modern web technologies including React frontend and Node.js backend, it offers real-time data processing with ClickHouse and PostgreSQL databases. The platform features a sleek dashboard for visualizing analytics data, user management with authentication, and configurable signup settings. Perfect for businesses looking to gain deep insights into their applications and user interactions.

## Instructions

After deployment, open your mapped domain to reach the Rybbit UI (Caddy serves the web app and proxies API traffic to the backend). The template generates PostgreSQL and ClickHouse passwords and a Better Auth secret automatically; you do not need to set them by hand unless you rotate credentials later in the services. Create the first account from the UI when sign-up is enabled. To send email (invites, password reset, etc.), add a Resend API key in the backend service environment. For custom domains or HTTPS, finish DNS and routing in Easypanel so the public URL matches how you access the app.

## Benefits

- Real-time Analytics: Process and visualize data in real-time with ClickHouse backend.
- User Management: Built-in authentication and user management system.
- Modern Stack: Built with React, Node.js, and modern web technologies.
- Self-Hosted: Full control over your analytics data with self-hosting.

## Features

- Analytics Dashboard: Comprehensive dashboard for visualizing analytics data and metrics.
- User Authentication: Secure user authentication and session management.
- Database Integration: Dual database setup with ClickHouse for analytics and PostgreSQL for application data.
- Email Integration: Email delivery capabilities with Resend API integration.
- Reverse Proxy: Built-in Caddy reverse proxy with automatic HTTPS.

## Links

- [GitHub](https://github.com/rybbit-io)
- [Website](https://rybbit.io)
- [Documentation](https://www.rybbit.io/docs)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/rybbit)

## Options

Name | Description | Required | Default Value
-|-|-|-
Service Name | - | yes | rybbit
Backend Image | - | yes | ghcr.io/rybbit-io/rybbit-backend:v1.0.0
Client Image | - | yes | ghcr.io/rybbit-io/rybbit-client:v1.0.0
Caddy Image | - | yes | caddy:2.10.0
ClickHouse Image | - | yes | clickhouse/clickhouse-server:25.4.2

## Screenshots

![Rybbit Screenshot](./assets/screenshot.png)

## Change Log

- 2025-06-03 – First release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
