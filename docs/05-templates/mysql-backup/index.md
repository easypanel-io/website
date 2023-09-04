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

The mysql-backup-s3 app is a powerful tool designed to backup your MySQL databases to your AWS S3 bucket. It supports periodic backups, allowing you to schedule backup times in cron format, ensuring your data is always safe and up-to-date. The app also supports multi-files, meaning you can have one file per database if you choose to. The app requires your AWS access key, AWS secret key, and AWS S3 bucket path. It also requires your MySQL host, user, and password. You can customize the path prefix in your bucket, the AWS S3 bucket region, and the AWS Endpoint URL. The app also allows you to add extra mysqldump options without overriding the default ones. With the mysql-backup-s3 app, you can ensure your MySQL databases are always backed up and secure in your AWS S3 bucket.

## Instructions

In order to test that you configured it properly, remove the SCHEDULE variable from the environment, click deploy and check the logs. If everything works fine, you can add the SCHEDULE variable back. You can read more about the environment variables here: https://github.com/schickling/dockerfiles/tree/master/mysql-backup-s3

## Benefits

- Secure and Reliable: The app provides a secure and reliable way to backup your MySQL databases to your AWS S3 bucket. It ensures that your data is safe and can be recovered whenever needed.
- Flexible and Customizable: The app allows you to customize your backup process according to your needs. You can choose the databases you want to backup, set a consistent filename to overwrite with your backup or use a timestamp, and even decide the AWS S3 bucket region.
- Automated Backups: The app supports periodic backups, allowing you to schedule your backup process in a cron format. This ensures that your databases are backed up regularly without any manual intervention.

## Features

- MySQL to S3 Backup: The app enables you to backup your MySQL databases to your AWS S3 bucket. It supports all databases and uses mysqldump options for the backup process.
- Multi-file Support: The app supports multi-file backups, allowing you to have one file per database. This makes it easier to manage and recover specific databases.
- AWS S3 Bucket Customization: The app allows you to customize your AWS S3 bucket settings. You can set the access key, secret key, bucket path, path prefix in your bucket, bucket region, and endpoint URL.
- Backup Scheduling: The app allows you to schedule your backup process in a cron format. This ensures that your databases are backed up regularly and automatically.

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
