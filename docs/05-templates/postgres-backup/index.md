---
hide_title: true
sidebar_label: Postgres Backup
title: Postgres Backup | Self-Host on Easypanel
description: How to install Postgres Backup on Easypanel? 1-Click installation template for Postgres Backup on Easypanel
---

<!-- generated -->

# Postgres Backup

1-Click installation template for Postgres Backup on Easypanel

## Description

The postgres-backup-s3 app is a powerful tool designed to backup your PostgreSQL databases to Amazon S3. It supports periodic backups, allowing you to schedule automatic backups at your convenience. This ensures that your data is always safe and can be restored whenever needed. The app also offers the option to backup all available databases at once, creating a single archive with a timestamp for easy identification. For added security, the app provides an encryption feature. By setting an encryption password, your backup can be encrypted and only decrypted with the correct password. This app is perfect for those who want to ensure their PostgreSQL databases are securely backed up in a reliable and efficient manner.

## Instructions

In order to test that you configured it properly, remove the SCHEDULE variable from the environment, click deploy and check the logs. If everything works fine, you can add the SCHEDULE variable back. You can read more about the environment variables here: https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3

## Benefits

- Secure Database Backup: The app provides a secure way to backup your PostgreSQL databases to S3. It supports encryption, allowing you to set a password to encrypt your backup for an added layer of security.
- Automatic Backups: The app supports automatic periodic backups. You can set a schedule for the app to automatically backup your databases, ensuring your data is always safe and up-to-date.
- Comprehensive Backup Options: The app allows you to backup all available databases or select specific ones. This gives you the flexibility to choose what data to backup.

## Features

- PostgreSQL to S3 Backup: The app allows you to backup your PostgreSQL databases to S3. It supports both Docker and Docker Compose usage for flexibility and ease of use.
- Encryption: The app supports encryption for your backups. You can set an encryption password to secure your data. The backup can be decrypted using openssl aes-256-cbc.
- Scheduling: The app allows you to set a schedule for automatic backups. This ensures your databases are regularly backed up without manual intervention.
- Backup All Databases: The app allows you to backup all available databases. This feature ensures that no data is left unprotected.
- S3 Endpoint Configuration: The app allows you to specify an alternate S3 endpoint. This is useful if you're using an S3 Compatible Storage Provider.

## Links

- [Documentation](https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3)
- [Github](https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/postgres-backup)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | postgres-backup
App Service Image | - | yes | easypanel/postgres-backup-s3
Postgres Host | - | yes | 
Postgres Port | - | yes | 5432
Postgres User | - | yes | postgres
Postgres Password | - | yes | 
S3 Access Key | - | yes | 
S3 Secret Key | - | yes | 
S3 Bucket | - | yes | 
S3 Prefix | - | yes | backup
S3 Region | - | yes | us-west-1
S3 Endpoint | - | yes | 
Schedule | You can use CRON syntax | yes | @daily

## Screenshots


## Change Log

- 2022-08-05 – first release

## Contributors

- [Andrei Canta](https://github.com/deiucanta)
