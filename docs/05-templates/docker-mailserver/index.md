---
hide_title: true
sidebar_label: Docker Mailserver
title: Docker Mailserver | Self-Host on Easypanel
description: How to install Docker Mailserver on Easypanel? 1-Click installation template for Docker Mailserver on Easypanel
---

<!-- generated -->

# Docker Mailserver

1-Click installation template for Docker Mailserver on Easypanel

## Description

A fullstack but simple mail server (SMTP, IMAP, LDAP, Antispam, Antivirus, etc.) running inside a container. It provides a complete email solution with features like spam filtering, virus scanning, and secure email delivery.

## Instructions

Follow the guide to configure the mail server with environment variables.

## Benefits

- Complete Email Solution: Docker Mailserver provides a full-featured email server with SMTP, IMAP, and LDAP support. It includes all the essential components needed for a production-ready email system.
- Advanced Security Features: Built-in support for ClamAV antivirus, SpamAssassin spam filtering, and Fail2ban protection ensures your email server is secure and protected against common threats.
- Easy Deployment and Maintenance: As a Docker container, it's easy to deploy and maintain. The configuration is simple and version-controlled, making it perfect for both development and production environments.

## Features

- SMTP and IMAP Support: Full support for SMTP (port 25), IMAP (port 143), Submission (port 587), and IMAPS (port 993) protocols, making it compatible with all standard email clients.
- Antivirus and Spam Protection: Integrated ClamAV antivirus and SpamAssassin spam filtering provide comprehensive protection against malicious content and unwanted emails.
- Security Features: Includes Fail2ban protection against brute force attacks and Postgrey greylisting to reduce spam. Supports Let's Encrypt for SSL certificates.
- LDAP Integration: Built-in LDAP support allows for easy integration with existing directory services and user management systems.
- Customizable Configuration: Extensive configuration options through environment variables allow you to customize the server to your specific needs.
- Persistent Storage: Uses Docker volumes for persistent storage of mail data, logs, and SSL certificates, ensuring data is preserved across container restarts.

## Links

- [Github](https://github.com/docker-mailserver/docker-mailserver)
- [Guide](https://github.com/docker-mailserver/docker-mailserver/blob/master/mailserver.env)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/docker-mailserver)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mailserver
App Service Image | - | yes | docker.io/mailserver/docker-mailserver:v15.1.0
Hostname | - | yes | mail.example.com
Relay Host | - | yes | smtp.example.com
Relay Port | - | yes | 587
Relay User | - | yes | user
Relay Password | - | yes | password

## Screenshots


## Change Log

- 2025-04-24 – First Release
- 2026-05-06 – Version bumped to v15.1.0

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
