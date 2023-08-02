---
hide_title: true
sidebar_label: Hasty Paste
title: Hasty Paste | Self-Host on Easypanel
description: How to install Hasty Paste on Easypanel? 1-Click installation template for Hasty Paste on Easypanel
---

<!-- generated -->

# Hasty Paste

1-Click installation template for Hasty Paste on Easypanel

## Description

Hasty Paste is a fast and minimal paste bin app that allows users to quickly paste and share text. It is commonly used for sharing debug logs and providing tech support. The app is designed to be lightweight and resource-efficient, with features such as publicly accessible pastes, randomly generated IDs, optional long IDs for added security, expiring pastes, dark theme, and optional syntax highlighting. It also offers a REST API and supports custom file systems, including flat-file system and S3 objects. Hasty Paste is available as a lightweight Docker image and is easy to install and use. The project is actively maintained and welcomes contributions from the community.

## Instructions

Hasty Paste takes a minute or two on first launch.

## Benefits

- Fast and Minimal: Hasty Paste is designed to be fast and minimal, allowing users to quickly paste and share text without any unnecessary features or distractions.
- Publicly Accessible: Pastes created in Hasty Paste are publicly accessible, meaning no authentication is required to view or access the shared text.
- Secure and Random IDs: Hasty Paste generates random IDs for each paste, reducing the risk of brute force attacks. It also offers an optional 'long' ID for added security.
- Expiring Pastes: Users can choose to create expiring pastes, which automatically delete after a certain period of time. This is useful for sharing temporary or sensitive information.
- Dark Theme: Hasty Paste offers a dark theme option for users who prefer a darker interface.
- Optional Syntax Highlighting: Users can enable optional syntax highlighting for their pastes, making it easier to read and understand code snippets.
- REST API: Hasty Paste provides a REST API for programmatic access to create and manage pastes. This allows developers to integrate the app into their own applications or workflows.
- Custom File Systems: Hasty Paste supports custom file systems, including a flat-file system and S3 objects. This flexibility allows users to choose the storage solution that best fits their needs.
- Lightweight Docker Image: Hasty Paste is available as a lightweight Docker image, built on Alpine Linux. This makes it easy to deploy and run the app in containerized environments.

## Features

- Quickly Paste and Save: Hasty Paste allows users to quickly paste and save text, making it easy to share information with others.
- Randomly Generated IDs: Each paste in Hasty Paste is assigned a randomly generated ID, ensuring uniqueness and reducing the risk of brute force attacks.
- Optional 'Long' IDs: Hasty Paste offers an optional 'long' ID format, which provides added security by increasing the complexity of the ID.
- Expiring Pastes: Users can choose to create expiring pastes, which automatically delete after a certain period of time. This is useful for sharing temporary or sensitive information.
- Dark Theme: Hasty Paste offers a dark theme option, providing a visually appealing interface for users who prefer darker colors.
- Optional Syntax Highlighting: Users can enable optional syntax highlighting for their pastes, making it easier to read and understand code snippets.
- No JavaScript Needed: Hasty Paste does not require JavaScript to function, ensuring compatibility with a wide range of devices and browsers.
- Minimal Resource Usage: Hasty Paste is designed to use minimal resources, making it efficient and lightweight.
- REST API: Hasty Paste provides a REST API for programmatic access to create and manage pastes. This allows developers to integrate the app into their own applications or workflows.
- Pick Your File System: Hasty Paste supports custom file systems, allowing users to choose the storage solution that best fits their needs. Options include a custom flat-file system and S3 objects.
- Caching: Hasty Paste supports caching, both internal and with Redis, to improve performance and reduce load on the file system.
- Lightweight Docker Image: Hasty Paste is available as a lightweight Docker image, built on Alpine Linux. This makes it easy to deploy and run the app in containerized environments.

## Links

- [Documentation](https://enchantedcode.co.uk/hasty-paste/)
- [Github](https://github.com/enchant97/hasty-paste)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/hastypaste)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | hastypaste
App Service Image | - | yes | ghcr.io/enchant97/hasty-paste:1.9.0
Redis Service Name | - | yes | hastypaste-redis

## Screenshots

![Hasty Paste Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-30 – first release
- 2023-2-24 – Update to v1.9.0

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
