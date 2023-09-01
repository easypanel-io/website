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

Jirafeau is an open-source software designed for simple and efficient file sharing. It operates on a &#39;one-click-filesharing&#39; principle, where you select your file, upload it, and share a link. The app allows you to send large files without any size limit, thanks to the HTML5 file API. It also provides a real-time progress report, showing speed, percentage, and remaining upload time. Jirafeau offers optional password protection for both uploading and downloading, and you can set an expiration time for downloads. The app also has a self-destruct feature, which deletes the file after the first download. It uses base 64 encoding to shorten URLs and allows for maximal upload size configuration. Jirafeau also features optional data encryption and a small administration interface.

## Benefits

- Effortless File Sharing: Jirafeau makes file sharing a breeze. With just a few clicks, you can upload and share your files. No need for complex setups or configurations.
- Secure and Private: Your files are safe with Jirafeau. The app offers optional password protection for both uploading and downloading files, ensuring your data remains secure.
- Control Over Your Files: Jirafeau gives you control over your shared files. You can set expiration times for downloads and even opt for files to self-destruct after the first download.

## Features

- One-Click File Sharing: Jirafeau simplifies file sharing. Simply select your file, upload it, and share the link. It's as easy as 1-2-3.
- Large File Support: With Jirafeau, you can send large files without worrying about size limits. Thanks to the HTML5 file API, the PHP post_max_size limit is not relevant.
- Progress Tracking: Jirafeau shows the progress of your file upload, including speed, percentage, and remaining upload time.
- Content Preview: Jirafeau allows you to preview content in your browser, if possible, before downloading.
- File Deduplication: Jirafeau optimizes storage by not storing duplicate files. Instead, it generates multiple links for the same file.
- Optional Data Encryption: For added security, Jirafeau offers optional data encryption. The decryption key is sent to the user and not stored on the server.

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
