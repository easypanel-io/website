---
hide_title: true
sidebar_label: Github Actions Runner
title: Github Actions Runner | Self-Host on Easypanel
description: How to install Github Actions Runner on Easypanel? 1-Click installation template for Github Actions Runner on Easypanel
---

<!-- generated -->

# Github Actions Runner

1-Click installation template for Github Actions Runner on Easypanel

## Description

A GitHub Actions runner is a service that runs the jobs defined in your GitHub workflows.
This image is based on Linux 24.04

## Instructions

Go to your GitHub repository or organization. Navigate to Settings &gt; Actions &gt; Runners. Click Add Runner and copy the registration token provided.

## Benefits

- Full Environment Control: Customize the operating system, tools, and dependencies to match your project needs
- Persistent Resources: Keep build caches and artifacts between runs for faster execution
- Private Network Access: Run jobs inside secure environments with access to internal services and databases
- Cost Efficiency: Reduce reliance on GitHub-hosted runners by using your own infrastructure

## Features

- Custom Environment Setup: Install and configure any tools, libraries, or runtimes required for your workflows
- Hardware Flexibility: Run jobs on your own servers, virtual machines, or even specialized hardware like GPUs
- Persistent Storage: Retain build artifacts, logs, and caches between workflow runs
- Secure Network Integration: Connect workflows directly to internal systems and private databases
- Scalable Infrastructure: Register multiple runners to balance load and handle parallel jobs
- Long-running Jobs: Support workflows that require more time than GitHub-hosted runners allow
- Custom Labels: Tag runners with labels to target specific jobs and environments

## Links

- [Website](https://github.com/actions/runner)
- [Documentation](https://docs.github.com/en/actions/concepts/runners/self-hosted-runners)
- [GitHub](https://github.com/leogomide/gha-runner)
- [Docker Hub](https://hub.docker.com/r/leogomide/gha-runner)
- [Environment Variables](https://github.com/leogomide/gha-runner)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/github-actions-runner)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | gha-runner
App Service Image | - | yes | leogomide/gha-runner:latest-x64
Github Repository Link | - | yes | https://github.com/<your-repo>
Github Repository Token | - | yes | <your-runner-token>

## Screenshots


## Change Log

- 2025-09-19 – Initial release

## Contributors

- [Leonardo Gomide](https://github.com/leogomide)
