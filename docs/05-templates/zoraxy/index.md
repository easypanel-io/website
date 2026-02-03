---
hide_title: true
sidebar_label: Zoraxy
title: Zoraxy | Self-Host on Easypanel
description: How to install Zoraxy on Easypanel? 1-Click installation template for Zoraxy on Easypanel
---

<!-- generated -->

# Zoraxy

1-Click installation template for Zoraxy on Easypanel

## Description

Zoraxy is a general-purpose reverse proxy and web application gateway designed for self-hosting enthusiasts. It offers an intuitive web interface for managing multiple web services with features like automatic SSL certificate management via ACME/Let&#39;s Encrypt, virtual directory hosting, HTTP to HTTPS redirection, and built-in authentication. Zoraxy supports WebSocket proxying, custom error pages, rate limiting, geographic access control with GeoIP, and Docker integration for seamless container management. Perfect for hosting multiple services on a single server with professional-grade routing, security, and access control.

## Benefits

- Easy to Use: Intuitive web-based interface for managing reverse proxy rules, SSL certificates, and access control without complex configuration files.
- Automatic SSL Management: Built-in ACME/Let's Encrypt integration for automatic SSL certificate provisioning and renewal, ensuring secure connections for all your services.
- Docker Integration: Native Docker socket integration for automatic service discovery and management, making it perfect for containerized environments.

## Features

- Reverse Proxy: Route traffic to multiple backend services based on domain names, paths, or custom rules with support for HTTP/HTTPS and WebSocket protocols.
- SSL/TLS Termination: Automatic SSL certificate management with Let's Encrypt, including HTTP-to-HTTPS redirection and secure TLS termination.
- Geographic Access Control: Fast GeoIP-based access control to restrict or allow traffic from specific countries or regions, enhancing security for your services.
- Authentication & Authorization: Built-in authentication system with support for basic auth, custom login pages, and user management for securing your applications.
- Rate Limiting & Security: Protect your services with configurable rate limiting, custom error pages, and advanced security features to prevent abuse.

## Links

- [Documentation](https://zoraxy.arozos.com/)
- [Github](https://github.com/tobychui/zoraxy)
- [Docker Hub](https://hub.docker.com/r/zoraxydocker/zoraxy)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/zoraxy)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | zoraxy
App Service Image | - | yes | zoraxydocker/zoraxy:v3.2.9

## Screenshots

![Zoraxy Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-07 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
