---
hide_title: true
sidebar_label: Pgadmin
title: Pgadmin | Self-Host on Easypanel
description: How to install Pgadmin on Easypanel? 1-Click installation template for Pgadmin on Easypanel
---

<!-- generated -->

# Pgadmin

1-Click installation template for Pgadmin on Easypanel

## Description

PGAdmin is a popular open-source administration and management tool for PostgreSQL databases. It provides a web-based interface to interact with PostgreSQL databases, allowing users to create, modify, and manage databases, tables, roles, and queries with ease. PGAdmin supports advanced query execution, database performance analysis, and extensive user management capabilities. With a modern and intuitive UI, it is designed for database administrators, developers, and analysts to efficiently work with PostgreSQL databases. Additional features include SQL query editor, ERD diagrams, scheduled backups, and monitoring tools.

## Benefits

- Web-Based Database Administration: PGAdmin provides a powerful web-based interface for managing PostgreSQL databases, making it accessible from anywhere without needing a desktop client installation.
- Advanced Query Execution: The built-in SQL editor allows users to write, execute, and debug queries efficiently with syntax highlighting, autocompletion, and query history.
- User and Role Management: PGAdmin enables administrators to manage users, roles, and permissions effectively, ensuring secure access control over the database.

## Features

- Query Tool: PGAdmin includes an advanced SQL query tool that supports syntax highlighting, query formatting, and execution plan visualization.
- Database Designer (ERD): This feature allows users to visualize database schema relationships with an entity-relationship diagram (ERD) builder.
- Backup and Restore: PGAdmin provides tools to schedule and perform database backups and restorations, ensuring data safety and recovery options.
- Server Monitoring: Users can monitor database performance and resource usage through PGAdmin's built-in dashboard, helping identify slow queries and bottlenecks.
- Multi-Database Support: PGAdmin supports managing multiple PostgreSQL servers from a single interface, making it ideal for large-scale database environments.

## Links

- [Documentation](https://www.pgadmin.org/docs/)
- [Github](https://github.com/pgadmin-org/pgadmin4)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/pgadmin)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | pgadmin
App Service Image | - | yes | dpage/pgadmin4:9.5.0
Default Email | - | yes | admin@example.com
Default Password | - | yes | password

## Screenshots

![Pgadmin Screenshot](./assets/screenshot.png)

## Change Log

- 2025-02-25 – first release
- 2025-07-24 – Update to 9.5.0

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
