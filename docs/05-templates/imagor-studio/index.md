---
hide_title: true
sidebar_label: Imagor Studio
title: Imagor Studio | Self-Host on Easypanel
description: How to install Imagor Studio on Easypanel? 1-Click installation template for Imagor Studio on Easypanel
---

<!-- generated -->

# Imagor Studio

1-Click installation template for Imagor Studio on Easypanel

## Description

Imagor Studio is a self-hosted image gallery and live editing web application designed for photographers, content creators, and digital artists. It provides a modern web interface for browsing, organizing, and editing your image collections with real-time image transformation capabilities. Built on top of the Imagor image processing server, the studio interface offers intuitive tools for image manipulation including resizing, cropping, filtering, and format conversion without modifying original files. All edits are performed on-demand using URL-based parameters, ensuring your source images remain untouched while generating optimized versions for different use cases. The application features a responsive gallery view for browsing images, a built-in editor with live preview, support for various image formats, and SQLite database for managing metadata and user preferences. With its lightweight architecture and flexible storage options, Imagor Studio enables you to maintain a private image library with professional editing capabilities accessible from any web browser. Perfect for photographers managing personal portfolios, content creators organizing media assets, web developers optimizing images for websites, or anyone needing a self-hosted alternative to cloud-based image management services with built-in editing tools.

## Benefits

- Non-Destructive Editing: Edit images with real-time transformations using URL parameters without modifying original files, preserving your source images indefinitely.
- Self-Hosted Privacy: Keep your entire image library and editing workflow on your own infrastructure, ensuring complete privacy and control over your visual content.
- On-Demand Processing: Generate optimized image versions only when needed, saving storage space and processing resources while maintaining flexibility.
- Web-Based Access: Access your image gallery and editing tools from any device with a web browser, no software installation required.

## Features

- Image Gallery: Browse and organize your image collections through a responsive, modern web interface with thumbnail previews.
- Live Image Editor: Edit images in real-time with immediate visual feedback using built-in tools for resizing, cropping, filtering, and format conversion.
- URL-Based Transformations: Apply image transformations via URL parameters, enabling programmatic image processing and integration with other applications.
- Format Support: Work with various image formats including JPEG, PNG, WebP, and more, with automatic format conversion capabilities.
- SQLite Database: Lightweight SQLite database stores metadata, preferences, and organizational information without requiring external database servers.
- Read-Only Gallery Mount: Mount your existing image directories as read-only to safely browse and edit without risk of accidental modifications to originals.

## Links

- [Website](https://imagor.net/)
- [Documentation](https://docs.studio.imagor.net/)
- [Docker Hub](https://hub.docker.com/r/shumc/imagor-studio)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/imagor-studio)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | imagor-studio
App Service Image | - | yes | shumc/imagor-studio:0.8.13

## Screenshots

![Imagor Studio Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-27 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
