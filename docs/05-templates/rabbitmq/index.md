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

RabbitMQ is a highly popular open source message broker used by businesses of all sizes, from startups to large enterprises. It is lightweight, easy to deploy, and supports multiple messaging protocols and streaming. RabbitMQ can be deployed in distributed and federated configurations, making it ideal for high-scale, high-availability requirements. It runs on various operating systems and cloud environments, and offers a wide range of developer tools for most popular languages. RabbitMQ supports asynchronous messaging, message queuing, delivery acknowledgement, and flexible routing to queues. It also offers a diverse array of tools and plugins for continuous integration, operational metrics, and integration with other enterprise systems. RabbitMQ is enterprise and cloud ready, with pluggable authentication, authorisation, and support for TLS and LDAP. It also provides an HTTP-API, command line tool, and UI for managing and monitoring the system.

## Instructions

Default user/pass is guest/guest (if you use the -management version of the image)

## Benefits

- Efficient Messaging: RabbitMQ is a highly efficient open-source message broker that supports multiple messaging protocols and streaming. It is used worldwide by both small startups and large enterprises.
- Scalability and High Availability: RabbitMQ can be deployed in distributed and federated configurations to meet high-scale, high-availability requirements. It is lightweight and easy to deploy on premises and in the cloud.
- Cross-Language Messaging: RabbitMQ provides a wide range of developer tools for most popular languages, enabling cross-language messaging with your favorite programming languages.

## Features

- Asynchronous Messaging: RabbitMQ supports multiple messaging protocols, message queuing, delivery acknowledgement, flexible routing to queues, and multiple exchange types.
- Distributed Deployment: RabbitMQ can be deployed as clusters for high availability and throughput, and can federate across multiple availability zones and regions.
- Enterprise & Cloud Ready: RabbitMQ supports pluggable authentication and authorisation, TLS and LDAP. It is lightweight and easy to deploy in public and private clouds.
- Tools & Plugins: RabbitMQ offers a diverse array of tools and plugins supporting continuous integration, operational metrics, and integration to other enterprise systems. It has a flexible plug-in approach for extending its functionality.
- Management & Monitoring: RabbitMQ provides an HTTP-API, command line tool, and UI for managing and monitoring its operations.

## Links

- [Website](https://www.rabbitmq.com/)
- [Documentation](https://www.rabbitmq.com/documentation.html)
- [Github](https://github.com/rabbitmq/rabbitmq-server/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/rabbitmq)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | rabbitmq:3.12.14
App Service Image | - | no | 
Enable RabbitMQ Management UI Plugin (modifies image) | - | no | 
Default User Name | - | no | 
Default User Password | - | no | 
RAM Memory Limit (recommended) | - | yes | 512MB

## Screenshots

![RabbitMQ Screenshot](./assets/screenshot.jpg)

## Change Log

- 2022-11-08 – first release

## Contributors

- [Rubén Robles](https://github.com/D8vjork)
