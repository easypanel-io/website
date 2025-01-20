---
hide_title: true
sidebar_label: Blender
title: Blender | Self-Host on Easypanel
description: How to install Blender on Easypanel? 1-Click installation template for Blender on Easypanel
---

<!-- generated -->

# Blender

1-Click installation template for Blender on Easypanel

## Description

Blender is a comprehensive, free and open-source 3D computer graphics software toolset. It is used for creating animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games. The app is designed to be accessed at your host, providing a desktop GUI for easy interaction. It supports hardware acceleration for an enhanced desktop experience, although GPU rendering is not supported out of the box. The app is compatible with multiple architectures, ensuring it can be used on a variety of systems. Please note that while this app can run on Arm devices, it is recommended not to mount in /dev/dri due to the OpenGL ES version not being high enough to run Blender.

## Benefits

- 3D Graphics Creation: Blender is a powerful tool for creating 3D computer graphics. This includes animated films, visual effects, art, 3D printed models, motion graphics, interactive 3D applications, virtual reality, and computer games.
- Multi-Platform Awareness: The app utilizes the docker manifest for multi-platform awareness. This means it can retrieve the correct image for your architecture, ensuring optimal performance and compatibility.
- Hardware Acceleration: The app supports hardware acceleration for an enhanced desktop experience. This includes the ability to mount a GPU into the container for GPU accelerated applications.

## Features

- Open Source: Blender is a free and open-source software toolset. This means it's freely available for anyone to use, modify, and distribute.
- Accessible Application: The application can be accessed at your host via HTTP or HTTPS, providing flexibility and security for your workflows.
- Customizable Environment: The app provides a range of optional environment variables and run configurations. This allows you to customize the functionality and performance of the app to suit your specific needs.
- Docker Integration: The app is designed to work seamlessly with Docker. This includes the ability to start a Docker in Docker setup inside the container, and the ability to mount the Docker directory inside the container to the host for increased performance.

## Links

- [Documentation](https://docs.linuxserver.io/images/docker-blender)
- [Github](https://github.com/linuxserver/docker-blender)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/blender)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | blender
App Service Image | - | yes | lscr.io/linuxserver/blender:4.3.2

## Screenshots

![Blender Screenshot](./assets/screenshot.png)

## Change Log

- 2023-04-12 – first release
- 2024-09-30 – Changed static latest tag to 4.2.2 LTS
- 2025-01-06 – Version bumped to 4.3.2

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
