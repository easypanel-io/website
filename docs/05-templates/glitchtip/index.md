---
hide_title: true
sidebar_label: GlitchTip
title: GlitchTip | Self-Host on Easypanel
description: How to install GlitchTip on Easypanel? 1-Click installation template for GlitchTip on Easypanel
---

<!-- generated -->

# GlitchTip

1-Click installation template for GlitchTip on Easypanel

## Description

An open source reimplementation of Sentry error tracking platform.

## Instructions

To create an admin user, run the command ./manage.py createsuperuser

## Links

- [Website](https://glitchtip.com/)
- [Gitlab](https://gitlab.com/glitchtip)
- [Docker](https://hub.docker.com/r/glitchtip/glitchtip)
- [Documentation](https://glitchtip.com/documentation)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/glitchtip)

## Options

Name | Description | Required | Default Value
-|-|-|-
Enable User Registration | - | no | false
Enable Organization Creation | - | no | false
App Service Name | - | yes | glitchtip
App Service Image | - | yes | glitchtip/glitchtip:v3.1.0
Redis Service Name | - | yes | glitchtip-db
Redis Service Name | - | yes | glitchtip-redis

## Screenshots

![GlitchTip Screenshot](./assets/screenshot.png)

## Change Log

- 2023-04-06 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
