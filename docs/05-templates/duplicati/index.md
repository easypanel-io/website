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

Duplicati is a free, open-source backup software designed to store encrypted backups online. It is compatible with Windows, macOS, and Linux. The software works with standard protocols like FTP, SSH, WebDAV, and popular services such as Backblaze B2, Tardigrade, Microsoft OneDrive, Amazon S3, Google Drive, box.com, Mega, hubiC, and many others. Duplicati allows you to backup files and folders with strong AES-256 encryption, saving space with incremental backups and data deduplication. It can run backups on any machine through a web-based interface or via command line interface. Duplicati has a built-in scheduler and auto-updater, ensuring your backups are always up-to-date. It is designed for online backups from scratch, handling network issues efficiently. For instance, interrupted backups can be resumed, and Duplicati regularly tests the content of backups, detecting broken backups on corrupt storage systems before it’s too late. The software is configured by a web interface that runs in any browser and can be accessed from anywhere.

## Benefits

- Secure Backup: Duplicati is a free backup software that securely stores encrypted backups online, ensuring your data is safe and protected.
- Efficient Data Handling: Designed for online backups from scratch, Duplicati is not only data efficient but also handles network issues effectively. Interrupted backups can be resumed and the content of backups is tested regularly.
- Accessible Anywhere: With a web-based interface that runs in any browser, Duplicati can be accessed from anywhere. This makes it ideal for use on headless machines like a NAS (network attached storage).

## Features

- Strong Encryption: Duplicati uses strong AES-256 encryption to protect your privacy. You can also use GPG to encrypt your backup, ensuring your data is secure.
- Supports Many Backends: Duplicati works with standard protocols like FTP, SSH, WebDAV as well as popular services like Backblaze B2, Tardigrade, Microsoft OneDrive, Amazon S3, Google Drive, box.com, Mega, hubiC and many others.
- Incremental Backups and Data Deduplication: Save space with incremental backups and data deduplication. Duplicati uploads a full backup initially and stores smaller, incremental updates afterwards to save bandwidth and storage space.
- Built-in Scheduler and Auto-updater: Duplicati has a built-in scheduler and auto-updater, keeping your backups up-to-date automatically.

## Links

- [Website](https://www.duplicati.com/)
- [Documentation](https://duplicati.readthedocs.io/en/latest/)
- [Github](https://github.com/duplicati/duplicati)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/duplicati)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | duplicati
App Service Image | - | yes | lscr.io/linuxserver/duplicati:2.1.0
App Service Password | - | yes | password

## Screenshots

![Duplicati Screenshot](./assets/screenshot.jpg)

## Change Log

- 2022-08-05 – first release
- 2025-01-09 – Version bumped to 2.1.0

## Contributors

- [Andrei Canta](https://github.com/deiucanta)
