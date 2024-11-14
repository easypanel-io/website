---
hide_title: true
sidebar_label: Verdaccio
title: Verdaccio | Self-Host on Easypanel
description: How to install Verdaccio on Easypanel? 1-Click installation template for Verdaccio on Easypanel
---

<!-- generated -->

# Verdaccio

1-Click installation template for Verdaccio on Easypanel

## Description

Verdaccio is a lightweight, private npm proxy registry built in Node.js, designed to simplify and enhance your development workflow. It provides a simple, zero-configuration-required local private NPM registry, eliminating the need for a full database to get started. Verdaccio comes equipped with its own compact database and the capability to proxy other registries, such as npmjs.org, while caching the downloaded modules for improved efficiency. It allows you to use all the benefits of the npm package system in your company without exposing all your code to the public. You can link multiple registries, fetch packages from multiple sources in a single project, and even publish locally modified versions of third-party packages. Verdaccio is compatible with popular npm clients like npm, yarn, and pnpm, and supports various plugins for extended storage capabilities.

## Benefits

- Private Package Management: Easily use private packages in your company without sending code to the public.
- Multiple Registries: Fetch packages from multiple sources in one project by chaining registries.
- Caching and Failover: Decrease latency and provide limited failover by caching the npmjs.org registry.
- Override Public Packages: Use modified versions of 3rd-party packages by publishing your own version locally.

## Features

- Private NPM Registry: A lightweight Node.js private proxy registry for managing npm packages.
- Zero-Config Required: No need for an entire database, comes with its own tiny database out of the box.
- Proxy Other Registries: Ability to proxy other registries like npmjs.org and cache downloaded modules.
- Extendable Storage: Supports community-made plugins to hook into services like Amazon's S3 or Google Cloud Storage.

## Links

- [Website](https://verdaccio.org/)
- [Documentation](https://verdaccio.org/docs/what-is-verdaccio)
- [Github](https://github.com/verdaccio/verdaccio)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/verdaccio)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | verdaccio
App Service Image | - | yes | verdaccio/verdaccio:6.0.1

## Screenshots

![Verdaccio Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-31 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
