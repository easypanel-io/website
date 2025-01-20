---
hide_title: true
sidebar_label: Mailpit
title: Mailpit | Self-Host on Easypanel
description: How to install Mailpit on Easypanel? 1-Click installation template for Mailpit on Easypanel
---

<!-- generated -->

# Mailpit

1-Click installation template for Mailpit on Easypanel

## Description

Mailpit is a modern email testing tool designed for developers. It allows you to configure your application to use Mailpit for SMTP delivery, enabling you to view your outgoing emails in a user-friendly web UI. The app also offers the option to forward messages to real SMTP servers for delivery. With Mailpit, you can view messages in the web UI or retrieve them using the JSON API. It supports SMTP AUTH and PIPELINING and provides real-time updates using WebSocket. Mailpit also includes message search functionality, custom SMTP configurations, and HTTP basic authentication for its UI and API. It&#39;s lightweight, portable, and easy to deploy.

## Benefits

- Efficient Email Testing: Mailpit is a powerful tool for developers, allowing you to easily test your outgoing SMTP server. It provides a simple way to view your outgoing emails in a web-based user interface, ensuring that your email system is working as expected.
- Flexible Email Forwarding: With Mailpit, you have the option to forward your emails to real SMTP servers for delivery. This gives you the flexibility to test your emails in a controlled environment before sending them out to actual recipients.
- Multi-Platform Compatibility: Built with Go, Mailpit runs without installation on multiple platforms. This makes it a versatile tool that can be used in a variety of development environments.

## Features

- Web UI for Email Viewing: Mailpit provides a web interface where you can view your messages in plain text, HTML, or source form. This makes it easy to inspect your outgoing emails and ensure they are formatted correctly.
- JSON API for Message Retrieval: Mailpit includes a JSON API that allows you to list, retrieve, and delete messages. This provides a convenient way to manage your test emails and keep your testing environment clean.
- Real-time Updates: Mailpit supports real-time updates using WebSocket. This means you can see changes to your outgoing emails as they happen, helping you to identify and fix issues more quickly.
- Support for SMTP AUTH and PIPELINING: Mailpit implements RFC5321, including support for SMTP AUTH (RFC4954) and PIPELINING (RFC2920). This ensures that your test emails are sent in accordance with established email protocols.
- In-memory Message Storage: Mailpit stores messages in-memory, providing a lightweight and efficient way to manage your test emails. It also supports file-based storage for message persistence.
- Advanced Search Functionality: Mailpit includes powerful search capabilities, allowing you to quickly find specific emails or content within messages.

## Links

- [Github](https://github.com/axllent/mailpit)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mailpit)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mailpit
App Service Image | - | yes | axllent/mailpit:v1.21

## Screenshots

![Mailpit Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-13 – First Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
