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

Verdaccio is a lightweight private npm proxy registry built in Node.js. It provides a compatible API with npm clients and supports semantic versioning. Verdaccio is a web app based on Node.js that acts as a private npm registry and a local network proxy. It is easy to install and use, and offers Docker and Kubernetes support. It is 100% compatible with yarn, npm, and pnpm.

## Benefits

- Use private packages: Verdaccio allows you to use private packages in your company without sending the code to the public. You can use your private packages just as easily as public ones.
- Link multiple registries: If you use multiple registries in your organization and need to fetch packages from multiple sources in one project, you can chain multiple registries and fetch from a single endpoint.
- Cache npmjs.org registry: Verdaccio can cache the npmjs.org registry, reducing latency and providing limited failover if you have multiple servers from which you want to install packages.
- Override public packages: If you want to use a modified version of a 3rd-party package, you can publish your version locally under the same name.

## Features

- Private npm proxy registry: Verdaccio acts as a private npm registry, allowing you to publish and access private packages.
- Local network proxy: Verdaccio can act as a proxy for other registries, such as npmjs.org, and cache downloaded modules to decrease latency and provide failover.
- Pluggable application: Verdaccio supports various community-made plugins to extend its storage capabilities, such as integrating with Amazon's S3 or Google Cloud Storage.
- Easy to install and use: Verdaccio comes with its own tiny database and requires no configuration to get started. It is compatible with popular npm clients like npm, yarn, and pnpm.
- Docker and Kubernetes support: Verdaccio provides an official Docker image and supports deployment using Kubernetes Helm for easy DevOps integration.

## Links

- [Website](https://verdaccio.org/)
- [Documentation](https://verdaccio.org/docs/what-is-verdaccio)
- [Github](https://github.com/verdaccio/verdaccio)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/verdaccio)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | verdaccio
App Service Image | - | yes | verdaccio/verdaccio:5.19.1

## Screenshots

![Verdaccio Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-31 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
