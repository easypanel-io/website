---
hide_title: true
sidebar_label: linkding
title: linkding | Self-Host on Easypanel
description: How to install linkding on Easypanel? 1-Click installation template for linkding on Easypanel
---

<!-- generated -->

# linkding

1-Click installation template for linkding on Easypanel

## Description

Linkding is a self-hosted bookmark manager that allows you to efficiently manage and organize your bookmarks. With a clean and optimized user interface, you can easily add, share, and edit bookmarks. The app also allows you to add notes to your bookmarks using Markdown and provides a &#39;read it later&#39; functionality. It automatically generates titles, descriptions, and icons for your bookmarked websites and creates snapshots of them on the Internet Archive Wayback Machine. You can also import and export bookmarks in Netscape HTML format. The app offers light and dark themes for your convenience. It also provides a REST API for developing third-party apps and an admin panel for user self-service and raw data access.

## Instructions

If the login fails with a error 500, please restart the &quot;linkding&quot; app service. This can be caused by the database not being properly reachable at linkding&#39;s first start.

## Benefits

- Self-Hosted Bookmark Manager: Linkding provides a self-hosted solution for managing your bookmarks. It offers a clean and minimalistic user interface optimized for readability, making it easy to manage and organize your bookmarks.
- Fast and Easy Setup: Designed to be minimal, fast, and easy to set up, Linkding can be quickly deployed using Docker. It supports SQLite as a default database with PostgreSQL as an optional choice.
- Read it Later Functionality: Linkding comes with a 'Read it Later' feature that allows you to save bookmarks for later reading. This feature is particularly useful for users who come across interesting content but don't have time to read it immediately.
- Share Bookmarks: Linkding allows you to share your bookmarks with other users. This feature is especially useful for teams working on a project together or for individuals who want to share interesting finds with friends or family.

## Features

- Organize Bookmarks with Tags: Linkding allows you to organize your bookmarks using tags. This feature makes it easy to categorize and find your bookmarks.
- Add Notes using Markdown: Linkding supports Markdown, a lightweight markup language, for adding notes to your bookmarks. This feature allows you to add context or additional information to your bookmarks.
- Bulk Editing: Linkding provides a bulk editing feature, allowing you to make changes to multiple bookmarks at once. This feature can save you time when you need to update or organize your bookmarks.
- Automatically Provides Titles, Descriptions and Icons: Linkding automatically provides titles, descriptions, and icons for bookmarked websites. This feature saves you the hassle of manually entering this information.
- Import and Export Bookmarks: Linkding supports importing and exporting bookmarks in Netscape HTML format. This feature makes it easy to migrate your bookmarks to and from other bookmark managers.
- Browser Extensions: Linkding offers extensions for Firefox and Chrome, as well as a bookmarklet. These tools make it easy to add and manage bookmarks directly from your browser.

## Links

- [Github](https://github.com/sissbruecker/linkding)
- [Demo](https://demo.linkding.link/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/linkding)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | linkding
App Service Image | - | yes | sissbruecker/linkding:1.9.0
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
- 2024-10-16 – Updated Version to (1.9.0)

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
