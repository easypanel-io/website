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

Hasura is a platform that automates the development of data APIs, allowing teams to build, secure, operate, and scale APIs faster. It eliminates the need for manual API creation and provides tools for authorization, performance optimization, observability, and API security. With Hasura, developers can effortlessly generate APIs by connecting to existing databases, GraphQL and REST APIs. It supports integration with popular databases like PostgreSQL, MySQL, and MongoDB. Hasura is used by companies like Optum, Philips Healthcare, and Nutrien to accelerate development and modernize data access. The platform also offers a community where developers can connect, gain insights, and access expert guidance.

## Benefits

- Automated API Development: Hasura automates 80% of the tediousness of building, securing, optimizing, and deploying GraphQL and REST APIs, allowing teams to ship 10x faster.
- Instant API Generation: Hasura can generate a unified GraphQL or REST API from your data sources in minutes, eliminating the need for manual API creation.
- Granular Authorization: Hasura allows you to define role-based permissions down to the row and column level, providing comprehensive tools for API security beyond authentication and authorization.
- Performance Optimization: Hasura ensures faster API response times and automatically optimizes scalability for optimal availability and performance of your APIs.
- Federation of Disparate Data: Hasura enables you to connect, manage, and iterate siloed, disparate data on a supergraph, providing a unified view of your data sources.

## Features

- Instant API: Generate a unified GraphQL or REST API from your data sources in minutes.
- Authorization: Define granular, role-based permissions down to the row and column level.
- Performance: Ensure faster API response times and automatically optimize scalability.
- Observability: Get precision insights for optimal availability and performance of your APIs.
- API Security: Comprehensive tools to secure APIs beyond authentication and authorization.
- Federation: Connect, manage, and iterate siloed, disparate data on a supergraph.

## Links

- [Website](https://hasura.io/)
- [Documentation](https://hasura.io/docs/latest/deployment/deployment-guides/kubernetes)
- [Github](https://github.com/hasura/graphql-engine)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/hasura)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | hasura
App Service Image | - | yes | hasura/graphql-engine:v2.24.1
Database Service Name | - | yes | hasura-db
Hasura Admin Secret Key | - | yes | mysecretkey
Console Enable | - | yes | true
Dev mode Enable | - | yes | true
Hasura Domain name | - | no | 

## Screenshots

![Hasura Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-16 – first release

## Contributors

- [Amit Gadhia](https://github.com/amitoo7)
