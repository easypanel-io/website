---
hide_title: true
sidebar_label: Mailhog
title: Mailhog | Self-Host on Easypanel
description: How to install Mailhog on Easypanel? 1-Click installation template for Mailhog on Easypanel
---

<!-- generated -->

# Mailhog

1-Click installation template for Mailhog on Easypanel

## Description

MailHog is an intuitive email testing tool designed for developers. It allows you to configure your application to use MailHog for SMTP delivery, enabling you to view your outgoing emails in a user-friendly web UI. The app also offers the option to release messages to real SMTP servers for delivery. With MailHog, you can view messages in the web UI or retrieve them using the JSON API. It supports SMTP AUTH and PIPELINING, and provides real-time updates using EventSource. MailHog also includes a Chaos Monkey for failure testing and HTTP basic authentication for its UI and API. It&#39;s lightweight, portable, and requires no installation.

## Benefits

- Efficient Email Testing: MailHog is a powerful tool for developers, allowing you to easily test your outgoing SMTP server. It provides a simple way to view your outgoing emails in a web-based user interface, ensuring that your email system is working as expected.
- Flexible Email Release: With MailHog, you have the option to release your emails to real SMTP servers for delivery. This gives you the flexibility to test your emails in a controlled environment before sending them out to actual recipients.
- Multi-Platform Compatibility: Built with Go, MailHog runs without installation on multiple platforms. This makes it a versatile tool that can be used in a variety of development environments.

## Features

- Web UI for Email Viewing: MailHog provides a web interface where you can view your messages in plain text, HTML, or source form. This makes it easy to inspect your outgoing emails and ensure they are formatted correctly.
- JSON API for Message Retrieval: MailHog includes a JSON API that allows you to list, retrieve, and delete messages. This provides a convenient way to manage your test emails and keep your testing environment clean.
- Real-time Updates: MailHog supports real-time updates using EventSource. This means you can see changes to your outgoing emails as they happen, helping you to identify and fix issues more quickly.
- Support for SMTP AUTH and PIPELINING: MailHog implements RFC5321, including support for SMTP AUTH (RFC4954) and PIPELINING (RFC2920). This ensures that your test emails are sent in accordance with established email protocols.
- In-memory Message Storage: MailHog stores messages in-memory, providing a lightweight and efficient way to manage your test emails. It also supports MongoDB and file-based storage for message persistence.

## Links

- [Github](https://github.com/mailhog/MailHog/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mailhog)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mailhog
App Service Image | - | yes | mailhog/mailhog:v1.0.1

## Screenshots

![Mailhog Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-31 – first release

## Contributors

- [Rubén Robles](https://github.com/D8vjork)
