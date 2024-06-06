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

Listmonk is a self-hosted, high-performance mailing list and newsletter manager. It is designed to manage millions of subscribers across various single and double opt-in lists, with custom JSON attributes for each subscriber. The app allows you to query and segment subscribers with SQL expressions and offers a fast bulk importer for easy integration with external CRMs and subscriber databases. Listmonk also provides a simple API for sending transactional messages to subscribers using pre-defined templates. These messages can be sent via email, SMS, Whatsapp, or any medium via Messenger interfaces. The app also includes simple analytics and visualization tools, a powerful templating system for creating dynamic email templates, and a media manager for uploading images for email campaigns. Listmonk is free, open-source, and designed for high performance, with a single binary application that runs everywhere with a minimal CPU and memory footprint.

## Benefits

- High Performance: Listmonk is a high-performance mailing list and newsletter manager that can handle millions of subscribers with ease. It is designed to be efficient and fast, ensuring that your campaigns reach your audience quickly and effectively.
- Customizable: With Listmonk, you have the power to customize your newsletters to your liking. It supports powerful, dynamic email templates with the Go templating language, allowing you to create unique and engaging content for your subscribers.
- Privacy Focused: Listmonk respects the privacy of your subscribers. It allows subscribers to permanently blocklist themselves, export all their data, and to wipe all their data in a single click, ensuring that their privacy is always protected.

## Features

- Mailing Lists Management: Manage millions of subscribers across many single and double opt-in lists with custom JSON attributes for each subscriber. Query and segment subscribers with SQL expressions.
- Transactional Mails: Listmonk provides a simple API to send arbitrary transactional messages to subscribers using pre-defined templates. Send messages as e-mail, SMS, Whatsapp messages or any medium via Messenger interfaces.
- Analytics: Listmonk comes with simple analytics and visualizations. Connect external visualization programs to the database easily with the simple table structure.
- Templating: Create powerful, dynamic e-mail templates with the Go templating language. Use template expressions, logic, and 100+ functions in subject lines and content.
- Performance: Listmonk is designed for high performance. It is multi-threaded, high-throughput, multi-SMTP email queues. It has throughput and sliding window rate limiting for fine grained control.
- Media Management: Use the media manager to upload images for e-mail campaigns on the server's filesystem, Amazon S3, or any S3 compatible (Minio) backend.
- Extensibility: More than just e-mail campaigns. Connect HTTP webhooks to send SMS, Whatsapp, FCM notifications, or any type of messages.

## Links

- [Website](https://listmonk.app/)
- [Documentation](https://listmonk.app/docs/)
- [Github](https://github.com/knadh/listmonk)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/listmonk)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | listmonk
App Service Image | - | yes | listmonk/listmonk:v3.0.0
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
