---
hide_title: true
sidebar_label: Listmonk
title: Listmonk | Self-Host on Easypanel
description: How to install Listmonk on Easypanel? 1-Click installation template for Listmonk on Easypanel
---

<!-- generated -->

# Listmonk

1-Click installation template for Listmonk on Easypanel

## Description

listmonk is a self-hosted, high performance mailing list and newsletter manager. It comes as a standalone binary and the only dependency is a Postgres database.

## Benefits

- Performance: listmonk is designed to handle millions of subscribers and can send campaigns of millions of emails. It has a low CPU and memory footprint, making it efficient and scalable.
- Flexibility: listmonk offers a range of features including mailing list management, transactional mails, analytics, templating, media management, and more. It can be easily integrated with external systems and supports multiple messaging mediums.
- Privacy: listmonk prioritizes subscriber privacy by allowing them to blocklist themselves, export their data, and wipe their data with a single click.

## Features

- Mailing Lists: Manage millions of subscribers across multiple lists with custom JSON attributes. Query and segment subscribers using SQL expressions. Import data in bulk or integrate with external CRMs and subscriber databases.
- Transactional Mails: Send transactional messages to subscribers using pre-defined templates. Supports various messaging mediums including email, SMS, and messaging interfaces like Whatsapp.
- Analytics: Provides simple analytics and visualizations. Allows easy integration with external visualization programs.
- Templating: Create dynamic email templates using the Go templating language. Supports template expressions, logic, and functions. Write emails in HTML, Markdown, or plain text.
- Media Management: Upload images for email campaigns on the server's filesystem or use S3 compatible backends like Amazon S3 or Minio.
- Extensibility: Connect HTTP webhooks to send messages through various mediums like SMS, Whatsapp, FCM notifications, and more.

## Links

- [Website](https://listmonk.app/)
- [Documentation](https://listmonk.app/docs/)
- [Github](https://github.com/knadh/listmonk)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/listmonk)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | listmonk
App Service Image | - | yes | listmonk/listmonk
Database Service Name | - | yes | listmonk-db
Admin Username | - | yes | 
Admin Password | - | yes | 

## Screenshots

![Listmonk Screenshot](./assets/screenshot.png)

## Change Log

- 2023-2-3 – first release

## Contributors

- [Serban Alexandru](https://github.com/serban-alexandru)
- [Supernova3339](https://github.com/supernova3339)
