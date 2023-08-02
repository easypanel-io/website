---
hide_title: true
sidebar_label: Jirafeau
title: Jirafeau | Self-Host on Easypanel
description: How to install Jirafeau on Easypanel? 1-Click installation template for Jirafeau on Easypanel
---

<!-- generated -->

# Jirafeau

1-Click installation template for Jirafeau on Easypanel

## Description

Jirafeau is an open-source file sharing app that allows users to easily upload and share files. It offers features such as one-click file sharing, file preview in the browser, password protection, expiration time for downloads, and more. Jirafeau does not require a database and has a simple language support system. It also supports file level deduplication for storage optimization. The app is based on the KISS (Keep It Simple, Stupid) principle and is available under the GNU Affero General Public License v3 (AGPL-3.0).

## Benefits

- Easy file sharing: Jirafeau provides a simple and straightforward way to upload and share files. Users can select a file, upload it, and get a download link and a delete link.
- Large file support: Thanks to the HTML5 file API, Jirafeau can handle large files without being limited by PHP post_max_size. Users can easily send any large files through the app.
- Security and privacy: Jirafeau offers optional password protection for uploading or downloading files. Users can also set expiration time for downloads and enable data encryption for added security.
- No database required: Jirafeau does not rely on a database for file storage. It uses basic PHP and file level deduplication to optimize storage and minimize dependencies.

## Features

- One-click file sharing: Users can easily upload a file and get a download link and a delete link with just one click.
- File preview in browser: Jirafeau allows users to preview the content of a file in the browser, if possible.
- Password protection: Users can optionally set a password for uploading or downloading files, adding an extra layer of security.
- Expiration time for downloads: Jirafeau allows users to set an expiration time for downloads, after which the file will no longer be accessible.
- File level deduplication: Jirafeau supports file level deduplication, which means duplicate files are only stored once and multiple links are generated.
- No database, only basic PHP: Jirafeau does not require a database for file storage. It uses basic PHP and file system operations to manage files.
- Simple language support: Jirafeau supports multiple languages and offers a simple language support system. Users can contribute translations through Weblate.
- Data encryption: Jirafeau offers optional data encryption, where the server encrypts the data and sends the decryption key to the user. The decryption key is not stored on the server, providing added security.

## Links

- [Github](https://gitlab.com/mojo42/Jirafeau)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/jirafeau)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | jirafeau
App Service Image | - | yes | jgeusebroek/jirafeau:20221008

## Screenshots

![Jirafeau Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-22 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
