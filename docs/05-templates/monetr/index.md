---
hide_title: true
sidebar_label: Monetr
title: Monetr | Self-Host on Easypanel
description: How to install Monetr on Easypanel? 1-Click installation template for Monetr on Easypanel
---

<!-- generated -->

# Monetr

1-Click installation template for Monetr on Easypanel

## Description

Monetr is a self-hosted personal finance management application that helps you track your spending, manage budgets, and gain insights into your financial habits. Built with modern architecture, Monetr provides a comprehensive solution for managing your personal finances with features like transaction tracking, budget management, spending analysis, and financial goal setting. The system uses PostgreSQL for data persistence and Valkey (Redis-compatible) for caching and session management. Perfect for individuals looking for a self-hosted alternative to commercial personal finance applications.

## Benefits

- Personal Finance Management: Track your spending, manage budgets, and gain insights into your financial habits with a comprehensive personal finance application.
- Self-Hosted Solution: Keep your financial data private and under your control with a self-hosted deployment.
- Modern Architecture: Built with PostgreSQL for reliable data persistence and Valkey for efficient caching and session management.
- Automatic Migrations: Database migrations run automatically on startup, ensuring your database schema is always up to date.

## Features

- Transaction Tracking: Track and categorize your income and expenses with detailed transaction management.
- Budget Management: Create and manage budgets to help you stay on track with your financial goals.
- Spending Analysis: Analyze your spending patterns with detailed reports and visualizations.
- PostgreSQL Database: Reliable PostgreSQL database for persistent storage of all financial data and user information.
- Valkey Caching: Valkey (Redis-compatible) for efficient caching and session management, improving application performance.
- Certificate Generation: Automatically generates SSL certificates on startup for secure communication.
- Web-Based Interface: Access and manage your finances through a modern web interface accessible on port 4000.

## Links

- [GitHub](https://github.com/monetr/monetr)
- [Website](https://monetr.app)
- [Documentation](https://monetr.app/documentation/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/monetr)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | monetr
App Service Image | - | yes | ghcr.io/monetr/monetr:1.9.0
Valkey Image | Valkey (Redis-compatible) image version | yes | valkey/valkey:9.0.2
Allow Sign Up | Allow new user registrations (recommended to disable if exposed to public internet) | no | true
Storage Enabled | Enable file storage functionality | no | true
Storage Provider | Storage provider type (e.g., filesystem, s3) | no | filesystem

## Screenshots

![Monetr Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-28 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
