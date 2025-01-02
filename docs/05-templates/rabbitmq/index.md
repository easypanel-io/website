---
hide_title: true
sidebar_label: RabbitMQ
title: RabbitMQ | Self-Host on Easypanel
description: How to install RabbitMQ on Easypanel? 1-Click installation template for RabbitMQ on Easypanel
---

<!-- generated -->

# RabbitMQ

1-Click installation template for RabbitMQ on Easypanel

## Description

RabbitMQ is an open-source message broker software that facilitates reliable messaging between applications and services. It supports a variety of messaging protocols such as AMQP and MQTT, making it a versatile solution for modern distributed systems. With RabbitMQ, you can efficiently manage message queues, exchanges, and routing, enabling seamless communication across different components of your application. It also provides a user-friendly web-based management interface for monitoring, configuration, and troubleshooting.

## Benefits

- Reliable Message Delivery: RabbitMQ ensures reliable and efficient message delivery with support for message acknowledgments, persistence, and clustering for high availability.
- Versatile Protocol Support: RabbitMQ supports multiple messaging protocols, including AMQP, MQTT, and STOMP, enabling flexibility in communication between different systems.
- Easy Management and Monitoring: With RabbitMQ's Management UI, you can monitor queues, exchanges, and message throughput, and easily configure the broker through a web interface.

## Features

- Lightweight and Fast: RabbitMQ is lightweight and optimized for fast message processing, making it ideal for both small-scale and enterprise-level applications.
- High Availability: RabbitMQ supports clustering and mirrored queues to ensure message availability and prevent data loss in case of failure.
- Management Web UI: The built-in web-based UI allows you to monitor queues, exchanges, and performance metrics in real time.
- Plugins and Extensibility: Extend RabbitMQ's functionality with a rich set of plugins for authentication, monitoring, and protocol support.

## Links

- [Website](https://www.rabbitmq.com/)
- [Documentation](https://www.rabbitmq.com/documentation.html)
- [GitHub](https://github.com/rabbitmq)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/rabbitmq)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | rabbitmq
App Service Image | - | yes | rabbitmq:3-management
Default Vhost | - | yes | /
Default User | - | yes | guest
Default Password | - | yes | guest
Default AMQP Port on Host | - | yes | 5672

## Screenshots

![RabbitMQ Screenshot](./assets/screenshot.jpg)

## Change Log

- 2024-12-17 – First release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
