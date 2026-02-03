---
hide_title: true
sidebar_label: PgBackWeb
title: PgBackWeb | Self-Host on Easypanel
description: How to install PgBackWeb on Easypanel? 1-Click installation template for PgBackWeb on Easypanel
---

<!-- generated -->

# PgBackWeb

1-Click installation template for PgBackWeb on Easypanel

## Description

PgBackWeb is a comprehensive web-based backup solution for PostgreSQL databases. It provides an intuitive interface to manage, schedule, and monitor PostgreSQL backups with support for multiple backup destinations including local storage and S3-compatible object storage. The application allows you to configure automated backup schedules, manage retention policies, and restore databases through a user-friendly web interface. PgBackWeb ensures your PostgreSQL databases are safely backed up with encryption support, making it an essential tool for database administrators who need reliable backup management without complex command-line operations. It supports multiple PostgreSQL instances and provides detailed backup logs and notifications.

## Benefits

- Web-Based Management: Manage all your PostgreSQL backups through an intuitive web interface without needing to write complex scripts or use command-line tools.
- Automated Backup Scheduling: Configure automated backup schedules with flexible timing options and retention policies to ensure your databases are always protected.
- Multiple Storage Options: Store backups locally or in S3-compatible object storage services like AWS S3, MinIO, or DigitalOcean Spaces for offsite backup redundancy.
- Encryption Support: Protect sensitive data with built-in encryption capabilities, ensuring your backup data remains secure both in transit and at rest.

## Features

- Backup Scheduling: Create flexible backup schedules with cron-like expressions to automate database backups at any frequency that suits your needs.
- Multiple Database Support: Manage backups for multiple PostgreSQL databases from a single interface, perfect for administrators managing several database instances.
- Retention Policies: Configure automatic backup retention policies to manage storage space efficiently by removing old backups based on your requirements.
- Restore Functionality: Easily restore databases from backups through the web interface with support for point-in-time recovery and selective restoration.
- S3 Integration: Native support for S3-compatible storage backends allows you to store backups in cloud object storage for disaster recovery scenarios.
- Backup Monitoring: Monitor backup job status, view detailed logs, and receive notifications about backup success or failures to ensure data protection.
- Local Storage Support: Store backups on local volumes for quick access and recovery, ideal for development environments or air-gapped deployments.
- User-Friendly Interface: Clean, modern web interface makes backup management accessible to users of all technical skill levels without sacrificing advanced features.

## Links

- [GitHub](https://github.com/eduardolat/pgbackweb)
- [Documentation](https://github.com/eduardolat/pgbackweb#readme)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/pgbackweb)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | pgbackweb
App Service Image | PgBackWeb Docker image | yes | eduardolat/pgbackweb:0.5.1
Connection String | The connection string to the PostgreSQL database | no | 

## Screenshots

![PgBackWeb Screenshot](./assets/screenshot.png)

## Change Log

- 2025-10-22 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
