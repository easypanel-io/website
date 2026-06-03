---
hide_title: true
sidebar_label: Ferron
title: Ferron | Self-Host on Easypanel
description: How to install Ferron on Easypanel? 1-Click installation template for Ferron on Easypanel
---

<!-- generated -->

# Ferron

1-Click installation template for Ferron on Easypanel

## Description

Ferron is a fast, memory-safe web server written in Rust. This template deploys Ferron with the official Docker image and exposes it through your Easypanel domain so you can start serving web traffic quickly.

## Instructions

Deploy the template, then configure Ferron by mounting your own configuration and content files as needed for your use case.

## Benefits

- Fast Rust web server: Run a high-performance, memory-safe web server designed for modern workloads.
- Simple deployment: Start Ferron quickly with the official container image and default networking setup.
- Flexible hosting: Use Ferron for static hosting, reverse proxying, or mixed web server setups.

## Features

- Official image deployment: Uses the official `ferronserver/ferron` Docker image for predictable deployments.
- Domain-ready setup: Routes your Easypanel domain directly to the Ferron service.
- Production-oriented server: Supports modern web server use cases with a focus on reliability and safety.

## Links

- [Website](https://www.ferronweb.org/)
- [Documentation](https://www.ferronweb.org/docs/)
- [GitHub](https://github.com/ferronweb/ferron)
- [Docker Hub](https://hub.docker.com/r/ferronserver/ferron)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/ferron)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | ferron
Ferron Image | - | yes | ferronserver/ferron:2-debian

## Screenshots


## Change Log

- 2026-04-10 – Initial template release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
