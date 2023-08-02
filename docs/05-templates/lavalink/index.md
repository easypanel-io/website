---
hide_title: true
sidebar_label: Lavalink
title: Lavalink | Self-Host on Easypanel
description: How to install Lavalink on Easypanel? 1-Click installation template for Lavalink on Easypanel
---

<!-- generated -->

# Lavalink

1-Click installation template for Lavalink on Easypanel

## Description

Lavalink is a standalone audio sending node based on Lavaplayer and Koe. It allows for sending audio without it ever reaching any of your shards. It is being used in production by FredBoat, Dyno, LewdBot, and more.

## Benefits

- Powered by Lavaplayer: Lavalink is powered by Lavaplayer, a powerful audio player library for Java. This ensures high-quality audio playback and support for various audio sources.
- Minimal CPU/memory footprint: Lavalink is designed to have a minimal impact on CPU and memory usage, allowing it to run efficiently even on resource-constrained systems.
- Twitch/YouTube stream support: Lavalink supports streaming audio from Twitch and YouTube, allowing you to play live streams in your application.
- Event system: Lavalink provides an event system that allows you to listen for various events, such as track start, track end, and player update. This makes it easy to build interactive audio applications.
- Seeking: Lavalink supports seeking within audio tracks, allowing users to skip to a specific position in a track.
- Volume control: Lavalink provides volume control functionality, allowing users to adjust the volume of the audio playback.
- REST API: Lavalink offers a REST API for resolving Lavaplayer tracks, controlling players, and more. This API can be used to integrate Lavalink with other services or build custom applications.
- Statistics: Lavalink provides statistics that are useful for load balancing. These statistics can help you monitor the performance of your audio nodes and make informed decisions about resource allocation.
- Basic authentication: Lavalink supports basic authentication, allowing you to secure your audio nodes and restrict access to authorized users.
- Prometheus metrics: Lavalink includes Prometheus metrics that provide detailed information about the performance and usage of your audio nodes. These metrics can be used for monitoring and troubleshooting purposes.
- Docker support: Lavalink provides Docker images, making it easy to deploy and manage your audio nodes in containerized environments.
- Plugin support: Lavalink supports plugins, allowing you to extend its functionality and customize its behavior to suit your specific needs.

## Features

- Powered by Lavaplayer: Lavalink is built on top of Lavaplayer, a powerful audio player library for Java. This ensures high-quality audio playback and support for various audio sources, including YouTube, SoundCloud, Bandcamp, and more.
- Minimal CPU/memory footprint: Lavalink is designed to have a minimal impact on CPU and memory usage, allowing it to run efficiently even on resource-constrained systems. This makes it suitable for running on low-end hardware or in cloud environments with limited resources.
- Twitch/YouTube stream support: Lavalink supports streaming audio from Twitch and YouTube, allowing you to play live streams in your application. This is useful for applications that require real-time audio playback, such as music bots or live streaming platforms.
- Event system: Lavalink provides an event system that allows you to listen for various events, such as track start, track end, and player update. This makes it easy to build interactive audio applications that respond to user actions or track changes.
- Seeking: Lavalink supports seeking within audio tracks, allowing users to skip to a specific position in a track. This is useful for applications that require precise control over audio playback, such as podcast players or audio editing tools.
- Volume control: Lavalink provides volume control functionality, allowing users to adjust the volume of the audio playback. This is useful for applications that require dynamic volume adjustments, such as music players or voice chat systems.
- REST API: Lavalink offers a REST API for resolving Lavaplayer tracks, controlling players, and more. This API can be used to integrate Lavalink with other services or build custom applications that interact with the audio nodes.
- Statistics: Lavalink provides statistics that are useful for load balancing. These statistics include information about the number of active players, CPU and memory usage, and network traffic. This allows you to monitor the performance of your audio nodes and make informed decisions about resource allocation.
- Basic authentication: Lavalink supports basic authentication, allowing you to secure your audio nodes and restrict access to authorized users. This is important for applications that handle sensitive audio content or require user authentication for accessing the audio nodes.
- Prometheus metrics: Lavalink includes Prometheus metrics that provide detailed information about the performance and usage of your audio nodes. These metrics can be used for monitoring and troubleshooting purposes, allowing you to identify and resolve performance issues quickly.
- Docker support: Lavalink provides Docker images, making it easy to deploy and manage your audio nodes in containerized environments. This simplifies the deployment process and allows you to take advantage of containerization benefits, such as scalability, portability, and isolation.
- Plugin support: Lavalink supports plugins, allowing you to extend its functionality and customize its behavior to suit your specific needs. You can develop and install plugins to add new features, integrate with external services, or enhance the existing functionality of Lavalink.

## Links

- [Documentation](https://github.com/freyacodes/Lavalink/blob/master/README.md)
- [Github](https://github.com/freyacodes/Lavalink)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/lavalink)

## Options

Name | Description | Required | Default Value
-|-|-|-
Auth server password | - | yes | 
App Service Name | - | yes | lavalink-server
App Service Image | - | yes | fredboat/lavalink:v3.7

## Screenshots


## Change Log

- 2019-07-24 – first release

## Contributors

- [kaname-png](https://github.com/kaname-png)
