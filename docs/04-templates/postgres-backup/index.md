---
sidebar_label: Postgres Backup
title: Postgres Backup
description: How to install Postgres Backup on Easypanel? 1-Click installation template for Postgres Backup on Easypanel
---

<!-- generated -->

1-Click installation template for Postgres Backup on Easypanel

## Description

Backup Postgres to S3. Supports periodic backups & mutli files.

## Instructions

In order to test that you configured it properly, remove the SCHEDULE variable from the environment, click deploy and check the logs. If everything works fine, you can add the SCHEDULE variable back. You can read more about the environment variables here: https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3

## Links

- [Documentation](https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3)
- [Github](https://github.com/schickling/dockerfiles/tree/master/postgres-backup-s3)

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
