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

Docker Registry 2.0 is a powerful application designed to store and distribute Docker images. This app is an implementation of the Docker Registry HTTP API V2, compatible with Docker 1.6 and later versions. It provides a secure and scalable base for building a large scale registry solution or running a simple private registry. Docker Registry 2.0 is a core library for many registry operators including Docker Hub, GitHub Container Registry, GitLab Container Registry, and DigitalOcean Container Registry. It is also used by the CNCF Harbor Project and VMware Harbor Registry. The app allows users to efficiently store, manage, package, and exchange content, providing a professional grade and extensible content distribution system.

## Instructions

The Registry doesn&#39;t have a UI. To interact with the registry you should use the Docker CLI.

## Benefits

- Efficient Content Distribution: The Docker Registry 2.0 app provides an efficient, secure, and reliable way to store, manage, package, and exchange content. It is designed to be a professional-grade and extensible content distribution system.
- Scalability: Whether you're building a large scale registry solution or running a simple private registry, Docker Registry 2.0 is designed to scale to your needs. It's a core library for many registry operators, including Docker Hub, GitHub Container Registry, GitLab Container Registry, and DigitalOcean Container Registry.
- Security: Security is a key focus of Docker Registry 2.0. The app is designed to provide a secure tool chain for distributing content, ensuring that your data is protected.

## Features

- Open Source Registry: Docker Registry 2.0 is an open source registry implementation for storing and distributing container images using the OCI Distribution Specification.
- Rich Set of Libraries: The app includes a rich set of libraries for interacting with distribution components. These libraries provide a range of functionalities, making it easier to work with the distribution components.
- HTTP Communication: Clients can communicate with the registry using HTTP. This makes it easy to integrate Docker Registry 2.0 with Docker, containerd, and other OCI clients.
- Customization: Docker Registry 2.0 is designed to be extensible, allowing users to hack/roll their own on top of healthy open-source components or implement their own home made solution through good specs and solid extensions mechanism.

## Links

- [Website](https://hub.docker.com/_/registry)
- [Github](https://github.com/distribution/distribution)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/docker-registry)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | docker-registry
App Service Image | - | yes | registry:2.8.3
User | - | yes | admin
Password | - | yes | admin

## Screenshots


## Change Log

- 2022-08-09 – first release

## Contributors

- [Bedeoan Raul](https://github.com/bedeoan)
- [Andrei Canta](https://github.com/deiucanta)
