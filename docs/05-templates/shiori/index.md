---
hide_title: true
sidebar_label: Shiori
title: Shiori | Self-Host on Easypanel
description: How to install Shiori on Easypanel? 1-Click installation template for Shiori on Easypanel
---

<!-- generated -->

# Shiori

1-Click installation template for Shiori on Easypanel

## Description

Shiori is a straightforward bookmarks manager, designed as a simple alternative to Pocket. It is written in the Go language and can be used as either a command line application or a web application. Shiori allows for basic bookmark management, including adding, editing, deleting, and searching bookmarks. It also supports importing and exporting bookmarks from and to Netscape Bookmark file and importing bookmarks from Pocket. The application features a clean command line interface and a user-friendly web interface. It is portable and supports sqlite3, PostgreSQL, and MySQL as its database. Shiori also creates an offline archive of the webpage where possible. The Shiori Web Extension is a simple extension for managing bookmarks using Shiori, intended to integrate Shiori with your favorite web browser, allowing you to save and remove bookmarks in Shiori without leaving your current page.

## Instructions

The default account is &quot;shiori&quot; with password &quot;gopher&quot;. It is removed once another &quot;owner&quot; account is created.

## Benefits

- Efficient Bookmark Management: Shiori provides a simple and efficient way to manage your bookmarks. It allows you to add, edit, delete, and search bookmarks with ease, making it a convenient tool for organizing your online resources.
- Offline Access: Shiori creates an offline archive of the webpages you bookmark. This means you can access your saved content even when you're not connected to the internet.
- Portability: Shiori is distributed as a single binary, making it highly portable. You can use it on any device and carry your bookmarks with you wherever you go.
- Browser Integration: With the Shiori Web Extension, you can integrate Shiori with your favorite web browser. This allows you to save and remove bookmarks in Shiori without leaving your current page.

## Features

- Bookmark Management: Shiori allows you to add, edit, delete, and search bookmarks. It provides a simple and clean interface for managing your bookmarks.
- Import and Export Functionality: Shiori supports importing and exporting bookmarks from and to Netscape Bookmark file. It also allows you to import bookmarks from Pocket.
- Offline Archive: Shiori creates an offline archive of the webpages you bookmark. This allows you to access your saved content offline.
- Web Extension: Shiori offers a web extension that integrates Shiori with your web browser. This allows you to manage your bookmarks without switching from your current page.
- Database Support: Shiori supports sqlite3, PostgreSQL, and MySQL as its database. This provides flexibility in terms of data storage and management.

## Links

- [Github](https://github.com/go-shiori/shiori)
- [Web Extension](https://github.com/go-shiori/shiori-web-ext)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/shiori)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | shiori
App Service Image | - | yes | ghcr.io/go-shiori/shiori:v1.7.1
Database Service Name | - | yes | shiori-db

## Screenshots

![Shiori Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-17 – Template created (v1.5.4)

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
