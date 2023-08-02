---
hide_title: true
sidebar_label: MeTube
title: MeTube | Self-Host on Easypanel
description: How to install MeTube on Easypanel? 1-Click installation template for MeTube on Easypanel
---

<!-- generated -->

# MeTube

1-Click installation template for MeTube on Easypanel

## Description

MeTube is a web GUI for youtube-dl that allows you to download videos from YouTube and other sites. It supports playlist downloads and can be run using Docker.

## Benefits

- Download videos from multiple sites: MeTube supports downloading videos from YouTube and dozens of other sites, allowing you to easily save your favorite videos for offline viewing.
- Playlist support: You can download entire playlists with MeTube, making it convenient to save multiple videos at once.
- Easy to use: MeTube provides a user-friendly web interface that makes it simple to search for and download videos. You can also customize the download settings to suit your preferences.

## Features

- Configuration via environment variables: You can customize MeTube's behavior by setting environment variables, such as the download directory, dark mode, and more.
- Browser extensions and shortcuts: MeTube provides browser extensions and shortcuts that allow you to quickly send videos from your browser to MeTube for downloading.
- Running behind a reverse proxy: MeTube can be run behind a reverse proxy, which is recommended for authentication and HTTPS support.

## Links

- [Documentation](https://github.com/alexta69/metube)
- [Github](https://github.com/alexta69/metube)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/metube)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | metube
App Service Image | - | yes | alexta69/metube:2023-04-30
Downloads Volume Name | - | yes | downloads

## Screenshots

![MeTube Screenshot](./assets/screenshot.png)

## Change Log

- 2022-07-12 – first release

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
- [Andrei Canta](https://github.com/deiucanta)
