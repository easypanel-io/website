---
hide_title: true
sidebar_label: Docker Registry
title: Docker Registry | Self-Host on Easypanel
description: How to install Docker Registry on Easypanel? 1-Click installation template for Docker Registry on Easypanel
---

<!-- generated -->

# Docker Registry

1-Click installation template for Docker Registry on Easypanel

## Description

The Docker Registry is an implementation of the Docker Registry HTTP API V2 for storing and distributing Docker images. It is used with Docker 1.6+ and provides a simple, secure, and scalable base for building a large-scale registry solution or running a private registry. It is a core library for many registry operators including Docker Hub, GitHub Container Registry, GitLab Container Registry, and DigitalOcean Container Registry. The Docker Registry is available as an official Docker image and is supported on multiple architectures.

## Instructions

The Registry doesn&#39;t have a UI. To interact with the registry you should use the Docker CLI.

## Benefits

- Secure and Scalable: The Docker Registry provides a secure and scalable solution for storing and distributing Docker images. It is designed to handle large-scale deployments and can be easily scaled to meet the needs of your organization.
- Integration with Docker: The Docker Registry integrates seamlessly with Docker and can be used with Docker 1.6+ to store and distribute Docker images. It provides an implementation of the Docker Registry HTTP API V2, allowing you to easily push and pull images from the registry.
- Support for Multiple Architectures: The Docker Registry is available as an official Docker image and is supported on multiple architectures, including amd64, arm32v6, arm32v7, arm64v8, ppc64le, and s390x. This allows you to run the registry on a wide range of hardware platforms.

## Features

- Implementation of Docker Registry HTTP API V2: The Docker Registry provides an implementation of the Docker Registry HTTP API V2, which allows you to interact with the registry using standard Docker commands. This includes features such as pushing and pulling images, tagging images, and searching for images.
- Easy Deployment and Configuration: The Docker Registry can be easily deployed and configured using Docker. You can run a local registry with a single command, and it can be configured to run on a specific port and with custom settings. The registry can also be deployed in a high-availability setup for increased reliability.
- Integration with Other Registry Operators: The Docker Registry is a core library for many registry operators, including Docker Hub, GitHub Container Registry, GitLab Container Registry, and DigitalOcean Container Registry. This means that you can use the Docker Registry as a base for building your own registry solution or integrate it with existing registry operators.

## Links

- [Website](https://hub.docker.com/_/registry)
- [Github](https://github.com/distribution/distribution)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/docker-registry)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | docker-registry
App Service Image | - | yes | registry:2.8.1
User | - | yes | admin
Password | - | yes | admin

## Screenshots


## Change Log

- 2022-08-09 – first release

## Contributors

- [Bedeoan Raul](https://github.com/bedeoan)
- [Andrei Canta](https://github.com/deiucanta)
