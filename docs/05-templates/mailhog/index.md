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

MailHog is an email testing tool for developers. It allows you to configure your application to use MailHog for SMTP delivery and view messages in a web UI. You can also retrieve messages with the JSON API and optionally release them to real SMTP servers for delivery.

## Benefits

- Easy installation: MailHog is built with Go and runs without installation on multiple platforms. You can download the latest release for your platform or use package managers like Homebrew or apt-get to install it.
- Web UI for viewing messages: MailHog provides a web interface where you can view your outgoing email messages. You can see the plain text, HTML, or source of the messages.
- SMTP server with support for authentication: MailHog includes an ESMTP server that implements RFC5321. It also supports SMTP AUTH (RFC4954) and PIPELINING (RFC2920).
- Message storage and retrieval: MailHog supports in-memory message storage as well as MongoDB and file-based storage for message persistence. You can use the HTTP API to list, retrieve, and delete messages.

## Features

- SMTP server: MailHog includes an ESMTP server that you can configure your application to use for SMTP delivery.
- Web UI: MailHog provides a web interface where you can view your outgoing email messages. You can see the plain text, HTML, or source of the messages.
- JSON API: MailHog provides a JSON API that allows you to retrieve messages programmatically.
- Release to real SMTP servers: MailHog allows you to release messages to real SMTP servers for delivery.
- SMTP AUTH and PIPELINING support: MailHog supports SMTP AUTH (RFC4954) and PIPELINING (RFC2920) for secure and efficient email delivery.
- Message storage: MailHog supports in-memory message storage as well as MongoDB and file-based storage for message persistence.
- Chaos Monkey for failure testing: MailHog includes a Chaos Monkey feature that allows you to simulate failures and test the resilience of your email system.

## Links

- [Github](https://github.com/mailhog/MailHog/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mailhog)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mailhog
App Service Image | - | yes | mailhog/mailhog:latest

## Screenshots

![Mailhog Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-31 – first release

## Contributors

- [Rubén Robles](https://github.com/D8vjork)
