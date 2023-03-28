---
sidebar_label: linkding
title: linkding
description: How to install linkding on Easypanel? 1-Click installation template for linkding on Easypanel
---

<!-- generated -->

1-Click installation template for linkding on Easypanel

## Description

linkding is a simple bookmark service that you can host yourself. It's designed be to be minimal, fast, and easy to set up using Docker.

## Instructions

If the login fails with a error 500, please restart the "linkding" app service. This can be caused by the database not being properly reachable at linkding's first start.

## Links

- [Github](https://github.com/sissbruecker/linkding)
- [Demo](https://demo.linkding.link/)

## Options

Name | Description | Required | Default Value
-|-|-|-
Domain | - | no | 
App Service Name | - | yes | linkding
App Service Image | - | yes | sissbruecker/linkding:1.17.2
Superuser Name | - | yes | 
Superuser Password | - | yes | 
Disable background tasks | - | no | false
Disable URL validation | - | no | false
Database Type | - | yes | sqlite
Database Service Name (Can be ignored if SQLite) | - | yes | linkding-db

## Screenshots

![linkding Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-18 – Template created (v1.17.2)

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
