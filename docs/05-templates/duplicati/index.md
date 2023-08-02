---
hide_title: true
sidebar_label: Duplicati
title: Duplicati | Self-Host on Easypanel
description: How to install Duplicati on Easypanel? 1-Click installation template for Duplicati on Easypanel
---

<!-- generated -->

# Duplicati

1-Click installation template for Duplicati on Easypanel

## Description

Duplicati is a free backup software that allows you to store encrypted backups online. It works on Windows, macOS, and Linux. You can backup files and folders with strong AES-256 encryption, save space with incremental backups and data deduplication, and run backups through the web-based interface or command line interface. Duplicati supports various protocols and services for backup storage, including FTP, SSH, WebDAV, Backblaze B2, Microsoft OneDrive, Amazon S3, Google Drive, and more. It is free and open source, and runs on Windows, Linux, and macOS.

## Benefits

- Secure Backup: Duplicati uses strong AES-256 encryption to protect your privacy. You can also use GPG to encrypt your backup.
- Online Backup: Duplicati was designed for online backups and handles network issues nicely. It can resume interrupted backups and regularly tests the content of backups.
- Cross-Platform: Duplicati runs on Windows, macOS, and Linux, making it accessible on different operating systems.

## Features

- Multiple Backends: Duplicati works with standard protocols like FTP, SSH, WebDAV, as well as popular services like Backblaze B2, Microsoft OneDrive, Amazon S3, Google Drive, and more.
- Strong Encryption: Backup files and folders with strong AES-256 encryption to ensure the security of your data.
- Incremental Backups: Save space with incremental backups that only backup changed parts of files.
- Web-based Interface: Duplicati is configured through a web interface that can be accessed from any browser, even on mobile devices.
- Command Line Interface: Run backups on any machine through the command line interface.
- Built-in Scheduler: Duplicati has a built-in scheduler for automated backups.
- Free and Open Source: Duplicati is free software and open source, licensed under LGPL. It can be used for free, even for commercial purposes.

## Links

- [Website](https://www.duplicati.com/)
- [Documentation](https://duplicati.readthedocs.io/en/latest/)
- [Github](https://github.com/duplicati/duplicati)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/duplicati)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | duplicati
App Service Image | - | yes | lscr.io/linuxserver/duplicati:2.0.6

## Screenshots

![Duplicati Screenshot](./assets/screenshot.jpg)

## Change Log

- 2022-08-05 – first release

## Contributors

- [Andrei Canta](https://github.com/deiucanta)
