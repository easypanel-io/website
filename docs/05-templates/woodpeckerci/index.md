---
hide_title: true
sidebar_label: WoodPecker CI
title: WoodPecker CI | Self-Host on Easypanel
description: How to install WoodPecker CI on Easypanel? 1-Click installation template for WoodPecker CI on Easypanel
---

<!-- generated -->

# WoodPecker CI

1-Click installation template for WoodPecker CI on Easypanel

## Description

WoodPecker CI is a modern, open-source continuous integration (CI) and delivery tool designed for developers who value simplicity, flexibility, and scalability. It integrates seamlessly with GitHub, allowing teams to automate testing, build, and deployment workflows efficiently. WoodPecker CI is lightweight, easy to deploy, and supports a wide range of programming languages and platforms. With its agent-based architecture, it provides high customizability and performance, making it ideal for both small projects and large-scale software development pipelines.

## Benefits

- Seamless GitHub Integration: WoodPecker CI integrates natively with GitHub to streamline your development workflows, automating builds, tests, and deployments.
- Lightweight and Efficient: With its lightweight design, WoodPecker CI is easy to deploy and manage, consuming minimal system resources.
- Open-Source and Transparent: Being open-source, WoodPecker CI allows developers to fully customize their CI/CD pipelines and ensures transparency.

## Features

- Flexible CI/CD Pipelines: WoodPecker CI offers customizable pipelines to fit the needs of any project, supporting diverse languages and platforms.
- Agent-Based Architecture: Its agent-based system ensures better resource management and scalability, allowing distributed builds.
- Easy Deployment: WoodPecker CI can be deployed quickly on various environments, including local machines, cloud platforms, and Kubernetes clusters.

## Links

- [Github](https://github.com/woodpecker-ci/woodpecker)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/woodpeckerci)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | woodpecker-ci
App Service Image | - | yes | woodpeckerci/woodpecker-server:v2.8.3
Agent Service Image | - | yes | woodpeckerci/woodpecker-agent:v2.8.3
GitHub Client ID | - | yes | 
GitHub Client Secret | - | yes | 

## Screenshots

![WoodPecker CI Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-27 – First Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
