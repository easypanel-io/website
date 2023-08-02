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

Synapse: Matrix homeserver written in Python/Twisted.

## Instructions

To create a user, simply execute the command &quot;register_new_matrix_user -c data/homeserver.yaml&quot; via console connection.

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
App Service Image | - | yes | matrixdotorg/synapse:v1.80.0
Database Type | - | yes | postgres
Database Service Name | - | yes | synapse-db

## Screenshots


## Change Log

- 2023-03-28 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
