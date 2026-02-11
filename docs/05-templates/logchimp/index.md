---
hide_title: true
sidebar_label: LogChimp
title: LogChimp | Self-Host on Easypanel
description: How to install LogChimp on Easypanel? 1-Click installation template for LogChimp on Easypanel
---

<!-- generated -->

# LogChimp

1-Click installation template for LogChimp on Easypanel

## Description

LogChimp is an open-source feedback and changelog platform that lets you collect product feedback, publish updates, and keep users informed from a single place. It provides an API, a web UI, and a themed frontend for your users to submit ideas, vote, and read announcements. Built with PostgreSQL and Valkey (Redis), it supports self-hosted deployments with migrations, background processing, and email notifications.

## Benefits

- Unified Feedback & Changelog: Collect feedback, votes, and publish changelog updates from one platform.
- Self-Hosted Ownership: Keep feedback data, API, and frontend under your control on your own infra.
- Ready-to-Run Stack: Ships with PostgreSQL, Valkey (Redis), migrations job, API, and theme UI.
- Notifications & Email: Supports mail configuration for notifications to keep users informed.

## Features

- Feedback Boards: Collect ideas and feature requests, let users vote, and prioritize work.
- API + Themed Frontend: Separate API service and themed UI for users to browse updates and submit feedback.
- Database Migrations: Dedicated migrator job to keep the database schema up to date.
- Cache Layer: Valkey/Redis cache for performance and background jobs.
- Email Support: Configure SMTP credentials to send notifications and updates.

## Links

- [Website](https://logchimp.codecarrot.net)
- [Documentation](https://docs.logchimp.codecarrot.net/platform/what-is-logchimp)
- [GitHub](https://github.com/logchimp/logchimp)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/logchimp)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | logchimp
API Image | - | yes | ghcr.io/logchimp/logchimp/api:0.7.1
Theme Image | - | yes | ghcr.io/logchimp/logchimp/theme:0.7.1
Valkey Image | - | yes | valkey/valkey:9.0.2

## Screenshots

![LogChimp Screenshot](./assets/screenshot.png)

## Change Log

- 2025-12-23 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
