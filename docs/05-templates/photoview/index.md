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

Photoview is a user-friendly photo gallery designed for photographers. It allows you to easily navigate through directories filled with high-resolution photos and videos. The app syncs with your file system, automatically organizing your media based on the file structure. Directories become albums filled with the photos and videos found within them. Photoview also automatically rescans for new media, keeping your gallery updated. Multiple users can be configured, each with their own directory of photos and videos, and each user&#39;s media is kept private with a username and password. Albums and individual photos or videos can be shared through public or password-protected links. Photoview also analyzes photos for EXIF metadata, displaying this information next to the photo and using it to present photos on a map. The app also has a mobile version for iOS, allowing you to quickly access your media library from your phone. Photoview supports RAW images, automatically extracts metadata from images and videos, and optimizes videos for the web. It also generates thumbnails automatically and ensures that your media is secure and private.

## Instructions

You will need to mount the location where your photos are to complete the installation.

## Benefits

- Easy Media Organization: Photoview allows you to easily organize your media files. It automatically scans your file system for media and organizes them based on the file structure. Directories become albums populated with the photos and videos found inside.
- User Privacy: Photoview ensures user privacy by allowing each user to have their own directory of photos and videos. Each user is configured with a username and password, keeping their media private.
- Quick Access: With the official iOS app, you can quickly access your entire media library from your phone. Navigate, share, and download photos and videos directly within the app.
- Secure and Private: Photoview ensures the security of your media resources with a cookie-token, properly hashed passwords, and a strict CORS policy. Your media is valuable, and with Photoview, nothing leaves your server.

## Features

- File System Sync: Photoview syncs with your file system, automatically scanning for new media and adding it to keep your gallery updated. This gives you full control to organize your media how you want.
- User and Sharing: Photoview allows multiple users, each with their own directory of photos and videos. Albums and individual photos or videos can easily be shared by generating a public or password-protected link.
- Maps: When photos are analyzed for EXIF metadata, this information is displayed next to the photo. If the photo is taken with a mobile phone, it most likely includes the coordinates of where the picture was taken. This is used to automatically present the photos on a map.
- Mobile App: Photoview has an official iOS app that allows you to quickly access your entire media library from your phone. Navigate, share, and download photos and videos directly within the app.
- RAW Support: Photoview uses Darktable under the hood to convert RAW images, supporting many common formats.
- EXIF Metadata: Photoview automatically extracts the metadata of images and videos and shows it in the sidebar. It's also used to present images on a map.
- Video Support: Photoview uses Ffmpeg under the hood to convert videos and optimize them for the web.

## Links

- [Website](https://photoview.github.io/)
- [Github](https://github.com/photoview/photoview)
- [Demo](https://photos.qpqp.dk/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/photoview)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | photoview
App Service Image | - | yes | viktorstrate/photoview:sha-6693920
Database Type | - | yes | mariadb
Database Service Name | - | yes | photoview-db

## Screenshots

![Photoview Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-16 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
