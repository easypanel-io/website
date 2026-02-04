---
hide_title: true
sidebar_label: TruffleHog
title: TruffleHog | Self-Host on Easypanel
description: How to install TruffleHog on Easypanel? 1-Click installation template for TruffleHog on Easypanel
---

<!-- generated -->

# TruffleHog

1-Click installation template for TruffleHog on Easypanel

## Description

TruffleHog is a security tool that finds secrets in your code, repositories, and files. It uses pattern matching, entropy analysis, and other methods to detect potential secrets and credentials.

## Instructions

After installation, TruffleHog will scan the specified directory for secrets. Configure the scan path and command options in the settings.

## Benefits

- Security Scanning: Find secrets and credentials in your code and repositories
- Multiple Detection Methods: Uses pattern matching, entropy analysis, and other methods
- Customizable: Configurable scanning options and paths
- Open Source: Free and open-source security tool

## Features

- Secret Detection: Find API keys, passwords, tokens, and other secrets
- Pattern Matching: Detect secrets using regex patterns and entropy analysis
- Custom Commands: Configure custom scanning commands and options
- Volume Mounting: Scan any directory by mounting it to the container
- Continuous Scanning: Run scans on a schedule or as part of CI/CD

## Links

- [Website](https://trufflesecurity.com)
- [GitHub](https://github.com/trufflesecurity/trufflehog)
- [Documentation](https://trufflesecurity.com/docs/trufflehog)
- [Docker Hub](https://hub.docker.com/r/trufflesecurity/trufflehog)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/trufflehog)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | trufflehog
App Service Image | - | yes | trufflesecurity/trufflehog:3.92.5
Scan Path | Host path to scan for secrets | yes | /path/to/scan
Scan Command | Command to run for scanning (e.g., 'trufflehog filesystem /workdir') | yes | trufflehog filesystem /workdir

## Screenshots

![TruffleHog Screenshot](./assets/screenshot.png)

## Change Log

- 2025-05-05 – Initial release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
