---
hide_title: true
sidebar_label: MySQL Backup
title: MySQL Backup | Self-Host on Easypanel
description: How to install MySQL Backup on Easypanel? 1-Click installation template for MySQL Backup on Easypanel
---

<!-- generated -->

# MySQL Backup

1-Click installation template for MySQL Backup on Easypanel

## Description

mysql-backup-s3 is a Docker container that allows you to backup your MySQL databases to AWS S3. It supports periodic backups and multiple files.

## Instructions

In order to test that you configured it properly, remove the SCHEDULE variable from the environment, click deploy and check the logs. If everything works fine, you can add the SCHEDULE variable back. You can read more about the environment variables here: https://github.com/schickling/dockerfiles/tree/master/mysql-backup-s3

## Benefits

- Easy to use: Just run the Docker container with the required environment variables and your MySQL databases will be backed up to AWS S3.
- Flexible backup options: You can customize the mysqldump options and specify the databases you want to backup.
- Supports periodic backups: You can schedule the backup process to run at specific times using cron format.
- Supports multiple files: You can choose to have one file per database if needed.

## Features

- Customizable mysqldump options: You can specify additional mysqldump options or override the default options.
- Specify databases to backup: You can choose to backup all databases or specify a list of databases to backup.
- AWS S3 integration: Backups are stored in your AWS S3 bucket with the specified path prefix.
- Support for AWS Signature Version 4: Enables compatibility with minio servers.
- Flexible scheduling: You can schedule the backup process to run at specific times using cron format.

## Links

- [Documentation](https://github.com/schickling/dockerfiles/tree/master/mysql-backup-s3)
- [Github](https://github.com/schickling/dockerfiles/tree/master/mysql-backup-s3)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mysql-backup)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mysql-backup
App Service Image | - | yes | easypanel/mysql-backup-s3
MySQL Host | - | yes | 
MySQL Port | - | yes | 3306
MySQL User | - | yes | mysql
MySQL Password | - | yes | 
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
