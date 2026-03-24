---
hide_title: true
sidebar_label: Tyk Gateway
title: Tyk Gateway | Self-Host on Easypanel
description: How to install Tyk Gateway on Easypanel? 1-Click installation template for Tyk Gateway on Easypanel
---

<!-- generated -->

# Tyk Gateway

1-Click installation template for Tyk Gateway on Easypanel

## Description

Tyk Gateway is an open-source API gateway for securing, scaling, and observing APIs. It sits in front of your upstream services and handles rate limiting, authentication, analytics, and transformations. This template runs the gateway in standalone mode with Redis for storage.

## Instructions

After deployment, access Tyk Gateway on the main domain (port 8080). Add API
definitions by placing JSON files in the apps volume (mounted at
/opt/tyk-gateway/apps). Configure policies in the policies volume and
middleware in the middleware volume. TYK_GW_SECRET is auto-generated; use it
when calling the Gateway API or with the Dashboard.


## Benefits

- API Security: Protect and authenticate APIs with keys, JWT, and policies
- Rate Limiting: Built-in rate limiting and quotas per API and key
- Self-Hosted: Full control over your API traffic and data
- Extensible: Middleware, plugins, and file-based API definitions

## Features

- Standalone Mode: Runs with Redis; no Dashboard or Pump required
- File-Based Config: APIs and policies loaded from mounted volumes
- Redis Storage: Session and rate-limit state in Redis
- WebSocket & REST: Proxy HTTP, HTTPS, and WebSocket upstreams

## Links

- [Website](https://tyk.io/)
- [Documentation](https://tyk.io/docs/)
- [GitHub](https://github.com/TykTechnologies/tyk)
- [Docker examples](https://github.com/TykTechnologies/tyk-gateway-docker)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/tyk-gateway)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | tyk-gateway
Gateway Image | - | yes | docker.tyk.io/tyk-gateway/tyk-gateway:v5.11.0
Redis Image | - | yes | redis:6.2.20-alpine

## Screenshots


## Change Log

- 2026-03-11 – First Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
