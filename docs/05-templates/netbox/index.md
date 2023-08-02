---
hide_title: true
sidebar_label: Netbox
title: Netbox | Self-Host on Easypanel
description: How to install Netbox on Easypanel? 1-Click installation template for Netbox on Easypanel
---

<!-- generated -->

# Netbox

1-Click installation template for Netbox on Easypanel

## Description

NetBox is a comprehensive DCIM solution that serves as the source of truth for everything on your network. It provides visibility and control across the entire enterprise, allowing efficient management of IP assets and customization of functionality to fit your needs.

## Benefits

- Comprehensive DCIM Solution: Gain visibility and control across the entire enterprise.
- IP Address Management: Efficient management of IP assets across the enterprise, removing the danger from data entry errors.
- Customization and Integration: Customize and extend NetBox's functionality to fit your needs.

## Features

- Built for Networks: NetBox has a curated data model specifically designed for network engineers and operators, covering all facets of network technology.
- Customizable & Extensible: NetBox offers various customization and extension mechanisms, including custom fields, validation, export templates, webhooks, plugins, and REST & GraphQL APIs.
- Always Open: NetBox is an open source application licensed under Apache 2, allowing complete access to the code base and avoiding vendor lock-in.
- Powered by Python: NetBox is built on the Django framework for Python, making it easy for network engineers to extend its functionality using Python tools.

## Links

- [Website](https://netbox.dev)
- [Documentation](https://docs.netbox.dev/)
- [Github](https://github.com/netbox-community/netbox)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/netbox)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | netbox
App Service Image | - | yes | lscr.io/linuxserver/netbox:3.4.6
Database Service Name | - | yes | netbox-db
Database Service Name | - | yes | netbox-redis
E-Mail Address | - | yes | 
Password | - | yes | 

## Screenshots

![Netbox Screenshot](./assets/screenshot1.png)
![Netbox Screenshot](./assets/screenshot2.png)

## Change Log

- 2023-3-17 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
