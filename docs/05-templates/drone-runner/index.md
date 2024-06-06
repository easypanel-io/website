---
hide_title: true
sidebar_label: Drone Runner
title: Drone Runner | Self-Host on Easypanel
description: How to install Drone Runner on Easypanel? 1-Click installation template for Drone Runner on Easypanel
---

<!-- generated -->

# Drone Runner

1-Click installation template for Drone Runner on Easypanel

## Description

Drone.io is a self-service Continuous Integration platform designed for busy development teams. It automates software build and testing, making it easier for teams to manage their development process. The platform allows for configuration as a code, with pipelines configured through a simple, easy-to-read file committed to your git repository. Each pipeline step is executed inside an isolated Docker container that is automatically downloaded at runtime. Drone.io integrates seamlessly with multiple source code management systems, including GitHub, GitHubEnterprise, Bitbucket, and GitLab. It supports multiple operating systems and architectures, and works with any language, database, or service that runs inside a Docker container. The platform also allows for advanced customization, including custom access controls, approval workflows, secret management, and yaml syntax extensions. Drone.io ensures that every build runs in an isolated Docker container, providing full control and preventing conflicting builds on shared servers.

## Benefits

- Automated Software Build and Testing: Drone is a self-service Continuous Integration platform designed to automate software build and testing for busy development teams. This allows for more efficient and error-free software development.
- Configuration as a Code: Drone allows pipelines to be configured with a simple, easy-to-read file that you commit to your git repository. This makes it easier to manage and track changes in your pipeline configuration.
- Isolated Builds: Each pipeline step in Drone is executed inside an isolated Docker container that is automatically downloaded at runtime. This ensures that there are no conflicting builds on shared servers and gives you full control over your build environment.
- Effortless Scaling: Drone is designed to scale automatically, making it a great choice for both small and large projects. It installs from a single binary, simplifying the setup process.

## Features

- Integration with Any Source Code Manager: Drone integrates seamlessly with multiple source code management systems, including GitHub, GitHubEnterprise, Bitbucket, and GitLab. This makes it a versatile tool for any development team.
- Support for Any Platform and Language: Drone natively supports multiple operating systems and architectures, including Linux x64, ARM, ARM64 and Windows x64. It also works with any language, database or service that runs inside a Docker container.
- Plugin Creation and Sharing: Drone allows you to create and share plugins, which are containers that drop pre-configured steps into your pipeline. You can choose from hundreds of existing plugins, or create your own to suit your specific needs.
- Advanced Customization: Drone makes advanced customization easy. You can implement custom access controls, approval workflows, secret management, yaml syntax extensions and more to tailor the platform to your project's needs.

## Links

- [Website](https://drone.io/)
- [Documentation](https://github.com/harness/drone#setup-documentation)
- [Github](https://github.com/harness/drone)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/drone-runner)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | drone-runner
App Service Image | - | yes | drone/drone-runner-docker:1.8.3
Drone Server Hostname | - | yes | drone.company.com
RPC Secret | - | yes | Secret
RPC Protocol | - | no | https
Runner Capacity | - | yes | 2

## Screenshots


## Change Log

- 2022-08-04 – first release

## Contributors

- [Ivan Ryan](https://github.com/ivanonpc-22)
