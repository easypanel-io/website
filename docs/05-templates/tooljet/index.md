---
hide_title: true
sidebar_label: Tooljet
title: Tooljet | Self-Host on Easypanel
description: How to install Tooljet on Easypanel? 1-Click installation template for Tooljet on Easypanel
---

<!-- generated -->

# Tooljet

1-Click installation template for Tooljet on Easypanel

## Description

Tooljet is an open-source low-code platform for building internal tools and business applications. It provides a visual interface builder, database connectors, API integrations, and workflow automation capabilities. With Tooljet, teams can quickly build custom dashboards, admin panels, CRUD applications, and complex business tools without extensive coding. The platform supports multiple data sources, real-time collaboration, and enterprise-grade security features.

## Instructions

Please run migrations inside the tooljet container if required, it will take 2-3 minutes to complete. &quot;npm run db:migrate:prod&quot;

## Benefits

- Low-Code Development: Build complex business applications and internal tools using a visual interface builder without extensive coding knowledge or development resources.
- Rapid Prototyping: Quickly prototype and iterate on business ideas with drag-and-drop components, pre-built integrations, and real-time collaboration features.
- Data Source Integration: Connect to multiple data sources including databases, APIs, cloud services, and third-party tools through pre-built connectors and custom integrations.
- Enterprise Security: Built-in security features including authentication, authorization, audit logs, and compliance tools for enterprise-grade applications.

## Features

- Visual Interface Builder: Drag-and-drop interface builder with pre-built components for forms, tables, charts, and custom widgets for creating rich user interfaces.
- Database Connectors: Support for multiple database types including PostgreSQL, MySQL, MongoDB, and cloud databases with real-time data synchronization.
- API Integration: Built-in API client with support for REST, GraphQL, and webhook integrations for connecting to external services and data sources.
- Workflow Automation: Visual workflow builder powered by Temporal for creating complex business processes and automated workflows.
- Real-Time Collaboration: Multi-user collaboration features with real-time updates, comments, and version control for team-based development.
- Custom Components: Extend functionality with custom components, plugins, and integrations using JavaScript and React for advanced use cases.

## Links

- [GitHub](https://github.com/ToolJet/ToolJet)
- [Documentation](https://docs.tooljet.com/)
- [Docker Hub](https://hub.docker.com/r/tooljet/tooljet)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/tooljet)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | tooljet
App Service Image | Tooljet Docker image | yes | tooljet/tooljet-ce:v3.15.1
Temporal Image | Temporal server Docker image | no | temporalio/auto-setup:1.25.1

## Screenshots

![Tooljet Screenshot](./assets/screenshot.png)

## Change Log

- 2025-09-09 – Initial Template Release (v3.15.1)

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
