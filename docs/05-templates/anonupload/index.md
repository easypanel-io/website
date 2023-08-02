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

AnonUpload is a secure, anonymous file sharing application that does not require a database. It is built with privacy as a priority, ensuring that the direct filename used is not displayed. This PHP file uploader is designed to work anywhere, be it Nginx, Apache, Lightspeed, or any other platform. AnonUpload supports a wide range of file types including jpeg, jpg, gif, png, zip, xls, doc, mp3, mp4, mpeg, wav, avi, rar, 7z, txt and more. It also provides size verification for uploaded files, allowing for a maximum upload size of 10GB and no minimum size. The application also includes a download time feature, which sets a waiting time before a file can be downloaded.

## Instructions

visit /admin for the administration interface

## Benefits

- Secure File Sharing: AnonUpload offers a secure platform for file sharing. It ensures your files are kept private and safe during the sharing process.
- Anonymous File Sharing: With AnonUpload, your identity remains anonymous while sharing files. It does not show the direct filename used, maintaining your privacy.
- No Database Required: AnonUpload operates without a database, making it a simple and efficient solution for file sharing.
- Versatile Compatibility: AnonUpload is designed to work anywhere, be it Nginx, Apache, Lightspeed, or any other platform. It does not use rewrites, just pure PHP.

## Features

- File Uploading: AnonUpload allows you to upload various types of files including jpeg, jpg, gif, png, zip, xls, doc, mp3, mp4, mpeg, wav, avi, rar, 7z, txt, and more.
- File Size Verification: The app verifies the size of the uploaded files. It supports a maximum upload size of 10GB and a minimum upload size of 0KB.
- File Destination Control: You can specify the destination folder for the uploaded files.
- Download Time Control: You can set the time to wait until the file downloads. The default time is 30 seconds.

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
