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

This app allows you to backup your PostgresSQL database to S3, with support for periodic backups. It can be run as a Docker container or using Docker Compose.

## Instructions

In order to test that you configured it properly, remove the SCHEDULE variable from the environment, click deploy and check the logs. If everything works fine, you can add the SCHEDULE variable back. You can read more about the environment variables here: https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3

## Benefits

- Automated backups: You can schedule the backup to run automatically at a specified time using the SCHEDULE environment variable.
- Selective backup: You can choose to backup a specific database or all available databases by setting the POSTGRES_BACKUP_ALL environment variable.
- Encryption support: You can encrypt the backup file using the ENCRYPTION_PASSWORD environment variable.

## Features

- Docker support: The app can be run as a Docker container, making it easy to deploy and manage.
- Docker Compose support: The app can also be run using Docker Compose, allowing you to define and manage the container along with other services.
- Flexible configuration: You can configure various environment variables to customize the backup process, such as S3 access credentials, database connection details, and backup options.

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
