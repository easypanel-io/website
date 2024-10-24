---
hide_title: true
sidebar_label: Matrix Synapse
title: Matrix Synapse | Self-Host on Easypanel
description: How to install Matrix Synapse on Easypanel? 1-Click installation template for Matrix Synapse on Easypanel
---

<!-- generated -->

# Matrix Synapse

1-Click installation template for Matrix Synapse on Easypanel

## Description

Matrix is an open network designed for secure, decentralised communication. This app allows you to chat with friends, family, communities, and co-workers, providing a cozy, safe, and supercharged environment for your conversations. You can reclaim your space and build advanced, rich communication applications on top of Matrix. The app is part of a rich ecosystem that includes clients, servers, bots, and application services. It&#39;s an open-source project, generously hosted by UpCloud. With Matrix, you can start a conversation, build apps, and explore the vast possibilities of a decentralised communication network.

## Instructions

To create a user, simply execute the command &quot;register_new_matrix_user -c data/homeserver.yaml&quot; via console connection.

## Benefits

- Secure and Decentralised Communication: Matrix provides a secure, open network for decentralised communication. It allows you to chat with friends, family, communities, and co-workers, ensuring your conversations are safe and private.
- Reclaim Your Space: Matrix allows you to build advanced, rich communication applications. It offers a cozy, safe, and supercharged place for your community, giving you the power to reclaim your digital space.
- Rich Ecosystem: Matrix is a rich ecosystem of clients, servers, bots, and application services. It provides a versatile platform for building a variety of communication applications.

## Features

- Open Network: Matrix provides an open network for secure, decentralised communication. You can start a conversation with anyone, anywhere, without worrying about security or privacy.
- Build Advanced Applications: Matrix allows you to build advanced, rich communication applications. It provides a robust platform for developers to create a variety of applications, from simple chatbots to complex communication systems.
- Rich Ecosystem: Matrix offers a rich ecosystem of clients, servers, bots, and application services. This ecosystem provides a wide range of tools and resources for developers to build and enhance their applications.

## Links

- [Website](https://matrix.org)
- [Docs](https://matrix-org.github.io/synapse)
- [Github](https://github.com/matrix-org/synapse)
- [Docker](https://hub.docker.com/r/matrixdotorg/synapse)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/matrix-synapse)

## Options

Name | Description | Required | Default Value
-|-|-|-
Report Stats | - | no | true
App Service Name | - | yes | synapse
App Service Image | - | yes | matrixdotorg/synapse:v1.99.0
Database Type | - | yes | postgres
Database Service Name | - | yes | synapse-db

## Screenshots


## Change Log

- 2023-03-28 – First Release
- 2024-10-18 – Updated version to v1.99.0

## Contributors

- [Berk Sümbül](https://berksmbl.com)
