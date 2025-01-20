---
hide_title: true
sidebar_label: Bytebase
title: Bytebase | Self-Host on Easypanel
description: How to install Bytebase on Easypanel? 1-Click installation template for Bytebase on Easypanel
---

<!-- generated -->

# Bytebase

1-Click installation template for Bytebase on Easypanel

## Description

Bytebase is a versatile application designed to streamline database management tasks. It supports a wide range of databases including MySQL, PostgreSQL, Snowflake, Oracle, SQL Server, MongoDB, Redis, Redshift, ClickHouse, TiDB, OceanBase, Google Spanner, and MariaDB. With Bytebase, you can easily configure and manage your database instances, perform SQL reviews, manage data models, roles, and permissions, and handle change workflows in batch mode. The app also offers features for secure data handling, VCS integration, slow query management, and disaster recovery. It comes with an embedded PostgreSQL instance for storing its metadata, but for production setup, it is recommended to store the metadata in an external PostgreSQL database. Bytebase is designed to be deployed easily and quickly, offering a step-by-step quick start guide for users.

## Benefits

- Efficient Database Management: Bytebase is designed to streamline database management tasks. It supports a variety of databases, including MySQL, PostgreSQL, Snowflake, Oracle, SQL Server, MongoDB, Redis, Redshift, ClickHouse, TiDB, OceanBase, Google Spanner, and MariaDB. This makes it a versatile tool for managing different types of databases.
- Secure Data Handling: Bytebase ensures the security of your data. It provides an embedded PostgreSQL instance for storing its own metadata. For a production setup, it is recommended to store the metadata in an external PostgreSQL database, further enhancing the security of your data.
- Comprehensive Database Operations: Bytebase allows you to perform a range of database operations. You can change the workflow, review SQL, change the database, and manage data securely. It also supports VCS integration (GitOps), slow query handling, and disaster recovery.

## Features

- Data Model Management: Bytebase allows you to manage your data models effectively. It provides core concepts and a step-by-step quick start guide to help you understand and use the data model feature.
- Roles and Permissions: Bytebase provides a roles and permissions feature. This allows you to manage user roles and permissions, ensuring that only authorized individuals have access to certain data or operations.
- SQL Editor: Bytebase includes a SQL editor feature. This allows you to write and edit SQL queries directly within the app, making it easier to manage and manipulate your data.
- VCS Integration (GitOps): Bytebase supports VCS integration (GitOps). This allows you to integrate your version control system with Bytebase, enabling you to track changes and manage your database more effectively.
- Disaster Recovery: Bytebase provides a disaster recovery feature. This ensures that your data is protected and can be recovered in the event of a disaster, providing peace of mind and enhancing the reliability of your database management.

## Links

- [Documentation](https://www.bytebase.com/docs/get-started/install/deploy-with-docker/)
- [Github](https://github.com/bytebase/bytebase)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/bytebase)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | bytebase
App Service Image | - | yes | bytebase/bytebase:3.2.0
Database Service Name | - | yes | bytebase-db

## Screenshots

![Bytebase Screenshot](./assets/screenshot.png)

## Change Log

- 2023-6-11 – first release
- 2024-03-12 – Version bumped to 2.14.1
- 2024-09-30 – Version bumped to 2.23.0
- 2025-01-06 – Version bumped to 3.2.0

## Contributors

- [Amit Gadhia](https://github.com/amitoo7)
- [Berk Sümbül](https://berksmbl.com)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
