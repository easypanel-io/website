---
hide_title: true
sidebar_label: Poste
title: Poste | Self-Host on Easypanel
description: How to install Poste on Easypanel? 1-Click installation template for Poste on Easypanel
---

<!-- generated -->

# Poste

1-Click installation template for Poste on Easypanel

## Description

Poste is a self-hosted mail server solution that provides a complete and secure email hosting platform. It offers built-in features such as spam filtering, DKIM signing, and webmail access to ensure a reliable email experience. This app is a Docker containerized version of Poste, making it easy to deploy and manage across various environments.

## Benefits

- Self-Hosted Mail Server: Poste is a self-hosted email server solution that ensures privacy and data ownership. Users have full control over their email accounts, domains, and mail data without relying on third-party services.
- Secure & Encrypted Communication: Poste includes built-in support for TLS encryption, DKIM signing, SPF, and DMARC to enhance email security and prevent phishing attacks.
- Multi-Platform Support: The app is compatible with multiple architectures, including x86-64 and arm64, ensuring broad deployment possibilities.
- Customizable & Extensible: Poste offers configuration options, allowing administrators to tailor the email server to their specific needs, including domain management, email filtering, and authentication settings.

## Features

- Webmail Interface: Poste provides a user-friendly webmail interface, allowing users to access and manage their emails directly from a browser.
- Spam & Malware Protection: The app includes built-in spam filtering and virus scanning to ensure incoming and outgoing emails are safe and free from malicious content.
- Domain & Account Management: Administrators can easily create and manage email accounts, set up custom domains, and configure forwarding rules within the Poste dashboard.
- Secure Email Protocols: Poste supports standard email protocols such as SMTP, IMAP, and POP3, ensuring compatibility with a wide range of email clients.
- Easy SSL Integration: Poste simplifies SSL certificate management with built-in Let's Encrypt support, making it easy to enable HTTPS for secure email access.
- Easy Deployment with Docker: Poste is containerized for quick and seamless deployment, simplifying the installation and management process.

## Links

- [Documentation](https://poste.io/docs)
- [Github](https://github.com/analogic/poste.io)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/poste)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | poste
App Service Image | - | yes | analogic/poste.io:2.5.8
Custom HTTP Port | - | yes | 8080
Custom HTTPS Port | - | yes | 8443
Virtual Host | - | yes | mail.example.com
SMTP Relay | - | yes | 25
POP3 Port | - | yes | 110
IMAP Port | - | yes | 143
SMTP Port | - | yes | 465
SMTPS Port | - | yes | 587
Secure IMAP Port | - | yes | 993
Secure POP3 Port | - | yes | 995
Email Filter Port | - | yes | 4190

## Screenshots

![Poste Screenshot](./assets/screenshot.png)

## Change Log

- 2025-02-18 – first release
- 2025-07-24 – Version bumped to 2.5.5
- 2025-12-29 – Version bumped to 2.5.8

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
