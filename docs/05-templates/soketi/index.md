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

Soketi Serverless is an open-source WebSockets server that offers a cost-effective, fast, and resilient solution for real-time deployment to Cloudflare. It is designed to be cheaper than any competitor, as you only pay for your infrastructure. It guarantees core message delivery in less than 100ms, thanks to its construction on top of C and porting to Node.js. Soketi is compatible with Pusher Protocol v7, meaning you can connect to the server without needing to replace your existing code. It is ready for production and can scale to hundreds of servers with Redis or NATS without losing performance. Soketi also offers built-in app management, allowing you to define your own app credentials and read from any database. Additionally, it features HTTP Webhooks that trigger HTTP requests whenever a channel gets occupied. Soketi can be deployed to Cloudflare Workers, bringing it closer to your users worldwide. It is also compatible with most popular databases, like MySQL or DynamoDB.

## Benefits

- Cost Effective: Soketi Serverless is cheaper than any competitor because you only pay for your infrastructure. Whether it's your basement server or cloud, it fits and runs. It can be as cheap as $5 on DigitalOcean.
- Fast and Resilient: Guaranteed core message delivery in less than 100ms. Soketi is built with one of the fastest available technologies, making it blazing fast. It is also resilient enough to maintain performance even when scaled to hundreds of servers.
- Pusher Compatible: Soketi uses the Pusher Protocol v7, meaning you don't need to replace your existing code. You just connect to the server.
- Ready for Production: Soketi is ready for production. You can scale it to hundreds of servers with Redis or NATS and it will maintain its performance. It is resilient enough for you to have a good night's sleep.

## Features

- Built-in App Management: Just like Pusher, you can define your own app credentials with Soketi. You don't even need Pusher for it, and you can read from any database.
- HTTP Webhooks: Soketi can trigger HTTP requests whenever a channel gets occupied. Pair it with Lambda functions and Soketi will invoke them for you.
- Unlimited Connections and Messages: Soketi offers unlimited peak connections and messages per month. The maximum message size and members per channel are also configurable.
- Deployable on Cloudflare: Soketi can be deployed to Cloudflare Workers, bringing it closer to your users all around the world.

## Links

- [Website](https://soketi.app/)
- [Documentation](https://docs.soketi.app/)
- [Github](https://github.com/soketi/soketi/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/soketi)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | soketi
App Service Image | - | yes | quay.io/soketi/soketi:1.6-16-debian
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
