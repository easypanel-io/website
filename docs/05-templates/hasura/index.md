---
hide_title: true
sidebar_label: Hasura
title: Hasura | Self-Host on Easypanel
description: How to install Hasura on Easypanel? 1-Click installation template for Hasura on Easypanel
---

<!-- generated -->

# Hasura

1-Click installation template for Hasura on Easypanel

## Description

Hasura is a powerful Data API Platform that automates the process of building, securing, optimizing, and deploying GraphQL and REST APIs. It eliminates the need for manual API creation, enabling developers to generate APIs effortlessly by connecting to existing databases. This results in rapid, scalable application development. Hasura is compatible with a variety of popular databases, including PostgreSQL, MySQL, and MongoDB, allowing you to build GraphQL APIs on top of your existing databases. It also provides comprehensive tools to secure APIs beyond authentication and authorization. With Hasura, you can accelerate the development of new applications or add new features to an existing application in days instead of weeks. It also helps in fast-tracking cloud migration, frontend and backend modernization, and application re-architecture projects by automating 80% of your API development work.

## Benefits

- Rapid API Development: Hasura allows for faster API development, reducing cost, complexity, and time to market. It enables you to build new applications or add new features to an existing application in days instead of weeks.
- Accelerated Modernization: Hasura fast tracks cloud migration, frontend and backend modernization, and application re-architecture projects by automating 80% of your API development work.
- Standardized Data Access: Hasura replaces direct database access with a scalable, performant, and secure data API to create a unified and federated core data service.

## Features

- Instant API: Hasura provides an instant API from your data to a unified GraphQL or REST API in minutes.
- Authorization: Hasura allows you to define granular, role-based permissions down to the row and column level.
- Performance: Hasura ensures faster API response times and scalability that’s automatically optimized.
- Observability: Hasura offers precision insights for optimal availability and performance of your APIs.
- API Security: Hasura provides comprehensive tools to secure APIs beyond authentication and authorization.
- Federation: Hasura allows you to connect, manage, and iterate siloed, disparate data on a supergraph.

## Links

- [Website](https://hasura.io/)
- [Documentation](https://hasura.io/docs/latest/deployment/deployment-guides/kubernetes)
- [Github](https://github.com/hasura/graphql-engine)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/hasura)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | hasura
App Service Image | - | yes | hasura/graphql-engine:v2.8.4
Database Service Name | - | yes | hasura-db
Hasura Admin Secret Key | - | yes | mysecretkey
Console Enable | - | yes | true
Dev mode Enable | - | yes | true

## Screenshots

![Hasura Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-16 – first release

## Contributors

- [Amit Gadhia](https://github.com/amitoo7)
