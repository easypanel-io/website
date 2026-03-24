---
hide_title: true
sidebar_label: Sharkord
title: Sharkord | Self-Host on Easypanel
description: How to install Sharkord on Easypanel? 1-Click installation template for Sharkord on Easypanel
---

<!-- generated -->

# Sharkord

1-Click installation template for Sharkord on Easypanel

## Description

Sharkord is a lightweight, open-source, self-hosted chat platform designed as a privacy-focused alternative to Discord for small groups. It provides voice, video, text chat, and screen sharing—all running on your own server. Supports screen sharing up to 4K@60fps. Designed for 5-25 users.

## Instructions

After deployment, access Sharkord via the main domain. Create your server and
invite others. Voice and video use port 40000. Data is stored in the data volume.
Note: Sharkord is in alpha—expect bugs and breaking changes.


## Benefits

- Data Ownership: All conversations and files stay on your server with no corporate data collection
- Lightweight: Runs on modest hardware, even a Raspberry Pi 4
- Fully Open Source: MIT License—inspect, customize, and contribute
- No Artificial Limits: No paywalls, user caps, or premium tiers

## Features

- Voice & Video: High-quality voice and video chat
- Screen Sharing: Screen sharing up to 4K@60fps
- Text Chat: Real-time text messaging
- Self-Hosted: Complete control over your data and infrastructure

## Links

- [Website](https://sharkord.com/)
- [Documentation](https://sharkord.com/docs)
- [GitHub](https://github.com/Sharkord/sharkord)
- [Demo](https://demo.sharkord.com/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/sharkord)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | sharkord
App Service Image | - | yes | sharkord/sharkord:v0.0.11
App Service Port | - | yes | 40000

## Screenshots

![Sharkord Screenshot](./assets/screenshot.png)

## Change Log

- 2026-02-09 – First Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
