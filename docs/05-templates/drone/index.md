---
hide_title: true
sidebar_label: Drone
title: Drone | Self-Host on Easypanel
description: How to install Drone on Easypanel? 1-Click installation template for Drone on Easypanel
---

<!-- generated -->

# Drone

1-Click installation template for Drone on Easypanel

## Description

Drone.io is a self-service Continuous Integration platform designed for busy development teams. It automates software build and testing, making it an essential tool for efficient and effective software development. Drone.io is configured with a simple, easy-to-read file that you commit to your git repository, and each pipeline step is executed inside an isolated Docker container that is automatically downloaded at runtime. The platform integrates seamlessly with multiple source code management systems, including GitHub, GitHubEnterprise, Bitbucket, and GitLab, and supports multiple operating systems and architectures. Drone.io works with any language, database or service that runs inside a Docker container, and allows you to create and share plugins for pre-configured steps in your pipeline. Advanced customization is made easy with Drone.io, with features for implementing custom access controls, approval workflows, secret management, yaml syntax extensions and more. The platform also ensures isolated builds to avoid conflicts on shared servers, and offers effortless scaling.

## Benefits

- Automated Software Build and Testing: Drone is a self-service Continuous Integration platform designed for busy development teams. It automates the process of software build and testing, saving time and reducing errors.
- Seamless Integration: Drone integrates seamlessly with multiple source code management systems, including GitHub, GitHubEnterprise, Bitbucket, and GitLab, making it a versatile tool for any development team.
- Support for Multiple Platforms: Drone natively supports multiple operating systems and architectures, including Linux x64, ARM, ARM64 and Windows x64, making it a flexible solution for diverse development environments.
- Effortless Scaling: Drone installs from a single binary and scales automatically, making it an ideal solution for both small and large projects.

## Features

- Configuration as a Code: Pipelines in Drone are configured with a simple, easy-to-read file that you commit to your git repository. Each Pipeline step is executed inside an isolated Docker container that is automatically downloaded at runtime.
- Support for Any Language: Drone works with any language, database or service that runs inside a Docker container. You can choose from thousands of public Docker images or provide your own.
- Plugin Creation and Sharing: Drone uses containers to drop pre-configured steps into your pipeline. You can choose from hundreds of existing plugins, or create your own.
- Advanced Customization: Drone makes advanced customization easy. You can implement custom access controls, approval workflows, secret management, yaml syntax extensions and more.
- Isolated Builds: With Drone, you don't have to worry about conflicting builds on shared servers. Every build runs in an isolated Docker container, giving you full control.

## Links

- [Website](https://drone.io/)
- [Documentation](https://github.com/harness/drone#setup-documentation)
- [Github](https://github.com/harness/drone)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/drone)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | drone
App Service Image | - | yes | drone/drone:2.25.0
Runner Service Name | - | yes | drone-runner
Runner Service Image | - | yes | drone/drone-runner-docker:1.8.3
GitHub OAuth Client ID | - | yes | 
GitHub OAuth Client Secret | - | yes | secret
RPC Host | - | yes | 
RPC Protocol | - | yes | https
Install Runner Service | - | no | false
Capacity for runner if enabled | - | no | 2

## Screenshots

![Drone Screenshot](./assets/screenshot.png)

## Change Log

- 2022-08-04 – first release
- 2025-01-09 – Version bumped to 2.25.0

## Contributors

- [Ivan Ryan](https://github.com/ivanonpc-22)
