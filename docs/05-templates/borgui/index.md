---
hide_title: true
sidebar_label: Borg UI
title: Borg UI | Self-Host on Easypanel
description: How to install Borg UI on Easypanel? 1-Click installation template for Borg UI on Easypanel
---

<!-- generated -->

# Borg UI

1-Click installation template for Borg UI on Easypanel

## Description

Borg UI is a modern web-based interface for BorgBackup, the popular deduplicating backup program with compression and authenticated encryption. It provides an intuitive dashboard for managing backup repositories, creating and scheduling backups, monitoring backup status, and restoring files through a user-friendly web interface. BorgBackup is known for its efficiency through deduplication at the chunk level, strong encryption using AES-256, and data integrity verification. Borg UI simplifies the complexity of command-line operations by offering visual repository management, backup job configuration, automated scheduling, space-efficient storage tracking, and easy file restoration. The self-hosted solution gives you complete control over your backup infrastructure while maintaining the security and reliability of BorgBackup. With access to your entire filesystem, it can protect any data on your server including application files, databases, configurations, and user data. Perfect for system administrators, developers, and anyone who needs reliable, encrypted, and space-efficient backup solutions without relying on proprietary cloud backup services or complex command-line interfaces.

## Benefits

- User-Friendly Backup Management: Simplified web interface for BorgBackup eliminates the need for complex command-line operations while maintaining full backup capabilities.
- Space-Efficient Storage: Advanced deduplication and compression technology significantly reduces storage requirements by storing only unique data chunks across all backups.
- Security and Encryption: Built-in AES-256 encryption ensures your backup data remains secure with authenticated encryption and data integrity verification.
- Complete Filesystem Access: Full access to your server's filesystem enables comprehensive backup coverage for all applications, databases, and system files.

## Features

- Web-Based Interface: Modern, intuitive dashboard for managing all aspects of your backup operations without touching the command line.
- Repository Management: Create, configure, and manage multiple backup repositories with visual tools for monitoring storage usage and repository health.
- Automated Scheduling: Schedule automatic backups at regular intervals with flexible timing options to ensure your data is consistently protected.
- Deduplication Engine: Advanced chunk-level deduplication identifies and stores only unique data, dramatically reducing storage space and backup times.
- Easy Restoration: Browse backup archives and restore individual files or entire directories through the web interface with point-in-time recovery.
- Backup Monitoring: Real-time status updates, backup history, storage statistics, and alerts keep you informed about your backup infrastructure health.

## Links

- [BorgBackup Docs](https://borgbackup.readthedocs.io/)
- [Docker Hub](https://hub.docker.com/r/ainullcode/borg-ui)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/borgui)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | borgui
App Service Image | - | yes | ainullcode/borg-ui:1.17
Timezone | - | no | UTC

## Screenshots

![Borg UI Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-25 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
