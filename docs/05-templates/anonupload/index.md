---
hide_title: true
sidebar_label: AnonUpload
title: AnonUpload | Self-Host on Easypanel
description: How to install AnonUpload on Easypanel? 1-Click installation template for AnonUpload on Easypanel
---

<!-- generated -->

# AnonUpload

1-Click installation template for AnonUpload on Easypanel

## Description

AnonUpload is a simple, databaseless PHP file uploader that allows secure and anonymous file sharing. It is designed to work with any web server, including Nginx, Apache, and Lightspeed. The app does not show the direct filename used to enhance privacy. AnonUpload can be hosted with Docker and supports environment variables for configuration.

## Instructions

visit /admin for the administration interface

## Benefits

- Secure and Anonymous: AnonUpload ensures the security and anonymity of file sharing by not displaying the direct filename used.
- Databaseless: AnonUpload does not require a database for file storage, making it lightweight and easy to deploy.
- Plausible Analytics Integration: AnonUpload can be integrated with Plausible Analytics to track file uploads and downloads.
- Dockerized: AnonUpload can be easily deployed using Docker, allowing for easy setup and scalability.

## Features

- Anonymous File Sharing: Users can upload files anonymously without revealing their identity or the direct filename.
- Supports Various File Types: AnonUpload supports a wide range of file types, including images, documents, audio, video, archives, and text files.
- File Size Verification: AnonUpload verifies the size of uploaded files to ensure they meet the specified limits.
- Customizable File Destination: The app allows users to specify the destination folder for uploaded files.
- Configurable Download Time: Users can set the time limit for file downloads, after which the file will no longer be accessible.

## Links

- [Github](https://github.com/supernova3339/anonupload)
- [Enviroment Variables](https://github.com/Supernova3339/anonupload/blob/main/env.md)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/anonupload)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | anonupload
App Service Image | - | yes | ghcr.io/supernova3339/anonfiles:1
Admin Email | - | yes | 
Admin Password | - | yes | 
App Contact Email | - | yes | 

## Screenshots

![AnonUpload Screenshot](./assets/screenshot.png)

## Change Log

- 2022-12-22 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
