---
hide_title: true
sidebar_label: Soketi
title: Soketi | Self-Host on Easypanel
description: How to install Soketi on Easypanel? 1-Click installation template for Soketi on Easypanel
---

<!-- generated -->

# Soketi

1-Click installation template for Soketi on Easypanel

## Description

Soketi is a serverless WebSockets server that allows developers to deploy real-time applications at a cheaper cost. It is built with fast and resilient technology and is compatible with the Pusher protocol. With Soketi, developers have full control over app management and can trigger HTTP requests using webhooks. It can be deployed on Cloudflare Workers for global scalability. Soketi is a simple, fast, and open-source solution for real-time communication.

## Benefits

- Cheaper Cost: Soketi is cheaper than its competitors because you only pay for your infrastructure. It can be as cheap as $5 on DigitalOcean.
- Fast and Resilient: Soketi is built with fast and resilient technology, guaranteeing core message delivery in less than 100ms. It can scale to hundreds of servers without losing performance.
- Pusher Compatible: Soketi is compatible with the Pusher protocol, allowing developers to connect to the server without replacing their existing code.
- Full App Management: Soketi provides built-in app management, similar to Pusher. Developers can define their own app credentials and have full control over access. It also supports reading from popular databases like MySQL or DynamoDB.
- HTTP Webhooks: Soketi allows developers to trigger HTTP requests using webhooks. This feature can be paired with Lambda functions for additional functionality.

## Features

- Serverless Deployment: Soketi can be deployed as a serverless solution, allowing developers to deploy real-time applications at a cheaper cost using Cloudflare Workers.
- Scalability: Soketi can scale to hundreds of servers using the Redis or NATS adapter without losing performance.
- Open Source: Soketi is an open-source solution, providing transparency and flexibility for developers.
- Fast Performance: Soketi is built with fast technology, written on top of C and ported to Node.js. It has an average time of 6ms to distribute a message to 1k users with minimal CPU and RAM usage.

## Links

- [Website](https://soketi.app/)
- [Documentation](https://docs.soketi.app/)
- [Github](https://github.com/soketi/soketi/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/soketi)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | soketi
App Service Image | - | yes | quay.io/soketi/soketi:1.4-16-debian
Redis Service Name | - | yes | redis
Soketi Default App ID | - | no | myapp
Soketi Default App Key | - | no | 
Soketi Default App Secret Key | - | no | 
Enable default app message exchange between clients | - | no | true

## Screenshots


## Change Log

- 2022-10-31 – first release

## Contributors

- [Rubén Robles](https://github.com/D8vjork)
