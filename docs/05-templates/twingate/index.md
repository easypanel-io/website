---
hide_title: true
sidebar_label: Twingate
title: Twingate | Self-Host on Easypanel
description: How to install Twingate on Easypanel? 1-Click installation template for Twingate on Easypanel
---

<!-- generated -->

# Twingate

1-Click installation template for Twingate on Easypanel

## Description

Twingate Connector securely bridges your private network resources to the Twingate Zero Trust platform without exposing inbound ports. Deploy a lightweight connector container and authenticate it with your tenant network and connector tokens.

## Instructions

Before deploying, create a Connector in your Twingate Admin Console and copy the generated tokens. Set `Twingate Network` to your tenant name (the subdomain part of your Twingate URL), then paste the connector `Access Token` and `Refresh Token` into the template fields. Deploy at least one connector; for production, run two connectors on separate hosts for high availability.

## Benefits

- Zero Trust Private Access: Publish internal resources through Twingate without opening inbound firewall ports or exposing services directly to the internet.
- Lightweight Deployment: Run the connector as a single container with minimal configuration and straightforward token-based authentication.
- Better Access Control: Centralize remote access policies in Twingate while keeping workloads in your own infrastructure.

## Features

- Token-Based Connector Authentication: Configure tenant, access token, and refresh token values directly through template inputs.
- Built-in Logging Controls: Tune connector observability with configurable analytics version and log level settings.
- Compose-Compatible Environment: Mirrors the standard Docker Compose connector environment variable setup for easy migration.

## Links

- [Website](https://www.twingate.com)
- [GitHub](https://github.com/Twingate/docker)
- [Docker Hub](https://hub.docker.com/r/twingate/connector)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/twingate)

## Options

Name | Description | Required | Default Value
-|-|-|-
Connector Name | - | yes | twingate-connector
Connector Image | - | yes | twingate/connector:1.88.0
Twingate Network (Tenant Name) | - | yes | 
Twingate Access Token | - | yes | 
Twingate Refresh Token | - | yes | 
Log Analytics Version | - | yes | v2
Log Level | - | yes | 3

## Screenshots


## Change Log

- 2026-03-27 – Initial template release
- 2026-03-27 – Version bumped to 1.88.0

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
