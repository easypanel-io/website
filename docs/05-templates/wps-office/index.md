---
hide_title: true
sidebar_label: WPS Office
title: WPS Office | Self-Host on Easypanel
description: How to install WPS Office on Easypanel? 1-Click installation template for WPS Office on Easypanel
---

<!-- generated -->

# WPS Office

1-Click installation template for WPS Office on Easypanel

## Description

WPS Office is a comprehensive office suite that is lightweight yet feature-rich. It offers high compatibility and a range of professional office software tools. With WPS Office, you can edit files in Writer, Presentation, Spreadsheet, and PDF, enhancing your work efficiency. The application can be accessed at your host on ports 3000 and 3001. This container is based on Docker Baseimage KasmVNC, which provides additional environment variables and run configurations to enable or disable specific functionality. The application also supports the docker manifest for multi-platform awareness, ensuring the correct image for your architecture is retrieved.

## Instructions

use abc:abc to login. To access the login interface, add ?login=true to your URL.

## Benefits

- Comprehensive Office Suite: WPS Office is a feature-rich office suite that includes tools for editing files in Writer, Presentation, Spreadsheet, and PDF formats.
- High Compatibility: WPS Office has high compatibility with other office software, allowing you to easily edit and collaborate on files with others.
- Improved Work Efficiency: By using WPS Office, you can enhance your work efficiency by efficiently editing and managing your office documents.

## Features

- Writer: Edit and create documents with advanced formatting and editing tools.
- Presentation: Create and deliver professional presentations with customizable templates and multimedia support.
- Spreadsheet: Manage and analyze data with powerful spreadsheet tools, including formulas, charts, and data manipulation functions.
- PDF: Edit and annotate PDF files, convert files to PDF format, and fill out PDF forms.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-wps-office)
- [Github](https://github.com/linuxserver/docker-wps-office)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/wps-office)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | wps-office
App Service Image | - | yes | lscr.io/linuxserver/wps-office:latest

## Screenshots

![WPS Office Screenshot](./assets/screenshot.png)

## Change Log

- 2023-5-7 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
