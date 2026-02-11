---
hide_title: true
sidebar_label: Convex
title: Convex | Self-Host on Easypanel
description: How to install Convex on Easypanel? 1-Click installation template for Convex on Easypanel
---

<!-- generated -->

# Convex

1-Click installation template for Convex on Easypanel

## Description

Convex is the open-source reactive database and backend platform designed for modern app developers. It provides real-time data synchronization, TypeScript-first development, and built-in features like authentication, file storage, and serverless functions. The self-hosted version includes the main backend service, dashboard for data management, and PostgreSQL database support. Perfect for building full-stack applications with automatic caching, real-time updates, and strong consistency guarantees.

## Instructions

You have to generate the admin key from the backend bash console. Run &quot;./generate_admin_key.sh&quot; and copy it. Go to the dashboard and login.

## Benefits

- Real-time Data Synchronization: Automatic real-time updates across all clients with optimistic concurrency control and conflict resolution for seamless user experiences.
- TypeScript-First Development: Write your entire backend in TypeScript with full type safety from database schema to client-side queries and mutations.
- Built-in Reactive Queries: Database queries automatically cache and subscribe to data changes, eliminating the need for manual cache invalidation or WebSocket management.
- Strong Consistency Guarantees: ACID compliance with immediate consistency, serializable isolation, and automatic conflict resolution using optimistic multi-version concurrency control.
- Serverless Functions Runtime: Deploy server functions with automatic scaling, hot reloads, and integrated development workflow using the Convex CLI.
- Integrated Development Experience: Built-in dashboard for data browsing, function testing, log viewing, and environment variable management with cloud-first development workflow.

## Features

- Reactive Database: NoSQL-style documents with relationships, custom indexes, and real-time subscriptions that automatically update your UI when data changes.
- TypeScript Functions: Write queries, mutations, and actions in TypeScript with full type safety and automatic code generation for client-side usage.
- Real-time Subscriptions: Automatic real-time data synchronization across all connected clients with optimistic updates and conflict resolution.
- Built-in Authentication: Integrated user authentication system with support for various providers and secure session management.
- File Storage: Built-in file upload and storage capabilities with automatic URL generation and secure access controls.
- Background Jobs: Schedule functions to run in the background with cron job support and automatic retry mechanisms for reliable task execution.
- HTTP Endpoints: Create HTTP endpoints for webhooks and external API integrations with automatic request routing and response handling.
- Vector Search: Built-in vector search capabilities for AI and machine learning applications with efficient similarity matching.
- Development Dashboard: Web-based interface for browsing data, testing functions, viewing logs, and managing environment variables during development.
- CLI Integration: Command-line tools for deployment, function management, schema migrations, and local development with hot reloading.
- Import/Export Tools: Streaming import and export capabilities for data migration and backup with snapshot support for point-in-time recovery.
- Runtime Validation: Automatic validation for function arguments and database data with schema enforcement and type checking at runtime.

## Links

- [Website](https://www.convex.dev)
- [Documentation](https://docs.convex.dev)
- [GitHub](https://github.com/get-convex/convex-backend)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/convex)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | convex
Backend Service Image | - | yes | ghcr.io/get-convex/convex-backend:1ece1b58fdb62ccd618f1d8183fa2d7ba414cc35
Dashboard Service Image | - | yes | ghcr.io/get-convex/convex-dashboard:1ece1b58fdb62ccd618f1d8183fa2d7ba414cc35
Convex Cloud Origin | Public URL for the Convex backend API | no | https://$(PRIMARY_DOMAIN)
Convex Site Origin | Public URL for the Convex site proxy | no | https://$(PRIMARY_DOMAIN):3211
Next Public Deployment URL | Public URL for the deployment (used by dashboard) | no | https://$(PRIMARY_DOMAIN)
Instance Secret | Secret key for instance authentication (auto-generated if empty) | no | 
Database Type | Select the database type to use | no | none
Database URL | Full database connection URL (required if database type is selected) | no | 
Rust Log Level | Logging level for Rust backend (e.g., info, debug, warn, error) | no | info
Document Retention Delay | Document retention delay in seconds (default: 2 days) | no | 172800
Instance Name | Name for this Convex instance (optional) | no | 
AWS Access Key ID | AWS access key for S3 storage (optional) | no | 
AWS Secret Access Key | AWS secret key for S3 storage (optional) | no | 
AWS Region | AWS region for S3 storage (optional) | no | 
S3 Endpoint URL | Custom S3 endpoint URL (for S3-compatible storage, optional) | no | 
S3 Files Bucket | S3 bucket name for file storage (optional) | no | 
S3 Modules Bucket | S3 bucket name for modules storage (optional) | no | 
Load Monaco Internally | Load Monaco editor internally (optional) | no | 

## Screenshots

![Convex Screenshot](./assets/screenshot.png)

## Change Log

- 2026-02-02 – Template Release (1ece1b58fdb62ccd618f1d8183fa2d7ba414cc35)

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
