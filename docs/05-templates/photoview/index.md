---
hide_title: true
sidebar_label: Photoview
title: Photoview | Self-Host on Easypanel
description: How to install Photoview on Easypanel? 1-Click installation template for Photoview on Easypanel
---

<!-- generated -->

# Photoview

1-Click installation template for Photoview on Easypanel

## Description

Photoview is a photo gallery app that allows you to organize and browse your photos and videos on your self-hosted personal server. It syncs with your file system, allowing you to organize your media how you want. It supports multiple users, sharing of albums and individual media, and displays EXIF metadata and maps. The app also has a mobile app for easy access on your phone. It supports RAW images, video conversion, and runs on ARM processors. Photoview is secure, private, free, and open-source.

## Instructions

You will need to mount the location where your photos are to complete the installation.

## Benefits

- Syncs with file system: Photoview automatically organizes your media based on the file structure of your file system. It can sync with file servers like Samba or FTP, or even files from a Nextcloud instance. It also automatically rescans for new media and keeps it updated.
- Multiple users and sharing: You can configure multiple users, each with their own directory of photos and videos. Each user has a username and password to keep their media private. Albums and individual media can be easily shared by generating public or password-protected links.
- Maps: Photoview analyzes the EXIF metadata of photos to display information such as the location where the photo was taken. It can automatically present photos on a map and group multiple photos taken at the same location.
- Mobile app: Photoview has an official iOS app that allows you to access your entire media library from your phone. You can navigate, share, and download photos and videos directly within the app.
- RAW support: Photoview uses Darktable to convert RAW images, making it compatible with many common RAW formats. You can check the supported cameras on the app's website.
- Video support: Photoview uses Ffmpeg to convert videos and optimize them for the web. It supports many common video formats.
- Runs on ARM: Photoview can run on ARM processors, including embedded devices like the Raspberry Pi.
- Performant: Photoview generates thumbnails automatically and loads photos when they are visible on the screen, making browsing fast. It also uses a cookie-token for media resource protection, properly hashes passwords, and has a strict CORS policy for API security.
- Secure and private: Photoview ensures the security and privacy of your media. All media resources are protected with a cookie-token, passwords are properly hashed, and the app does not send your media outside of your server.
- Free and open-source: Photoview is completely free to use and the code is open for everyone to look at and modify.

## Features

- Closely tied to the file system: Photoview presents images found on the local file system of the server, mapping directories to albums.
- User management: Each user has their own directory on the file system and can access photos within that directory.
- Sharing: Albums and individual media can be easily shared with public or password-protected links.
- Made for photography: Photoview supports RAW file formats and EXIF parsing, making it suitable for photographers.
- Video support: Photoview supports many common video formats and optimizes videos for the web.
- Face recognition: Photoview automatically detects faces in photos and groups photos of the same person together.
- Performant: Photoview generates thumbnails automatically and loads photos when they are visible on the screen.
- Secure: Photoview protects media resources with a cookie-token, hashes passwords, and has a strict CORS policy.
- Supported platforms: Photoview runs on Docker, Arch Linux, Aur, Unraid, EmbassyOS, and YunoHost.

## Links

- [Website](https://photoview.github.io/)
- [Github](https://github.com/photoview/photoview)
- [Demo](https://photos.qpqp.dk/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/photoview)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | photoview
App Service Image | - | yes | viktorstrate/photoview:2.3.13
Database Type | - | yes | mariadb
Database Service Name | - | yes | photoview-db

## Screenshots

![Photoview Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-16 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
