---
hide_title: true
sidebar_label: GoClaw
title: GoClaw | Self-Host on Easypanel
description: How to install GoClaw on Easypanel? 1-Click installation template for GoClaw on Easypanel
---

<!-- generated -->

# GoClaw

1-Click installation template for GoClaw on Easypanel

## Description

Enterprise AI agent platform with teams, delegation &amp; orchestration. Single Go binary, 13+ LLM providers, 10+ channels, browser automation, and memory system.

## Instructions

After installation, access the web dashboard via your configured domain.
To add more LLM API keys (e.g., Anthropic, Groq), edit the environment variables of the GoClaw App Service.
Secure tokens like the Gateway Token and Encryption Key are auto-generated.


## Benefits

- Multi-Agent AI Gateway: Teams, delegation and orchestration managed through a single Go binary.
- 13+ LLM Providers: Supports multiple models easily swappable (OpenAI, Anthropic, Gemini, Groq, DeepSeek, local models...).
- Secure and Fast: Built in Go for high performance and minimal memory footprint.

## Features

- Team Collaboration: Multiple agents working together.
- Database Vector: Integrated semantic search memory via PostgreSQL with pgvector.

## Links

- [Website](https://goclaw.sh)
- [Documentation](https://docs.goclaw.sh)
- [Github](https://github.com/nextlevelbuilder/goclaw)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/goclaw)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | goclaw
App Service Image | Use a "-full" tag for Python/Node included, or a base version tag for minimal. | yes | ghcr.io/nextlevelbuilder/goclaw:v3.11.3-full
Web Service Image | - | yes | ghcr.io/nextlevelbuilder/goclaw-web:v3.11.3
Database Service Image | - | yes | pgvector/pgvector:pg17
Chrome CDP Service Image | Headless Chrome sidecar for browser automation via CDP. | yes | zenika/alpine-chrome:124
Gateway Token (GOCLAW_GATEWAY_TOKEN) | Leave blank to auto-generate | no | 
Encryption Key (GOCLAW_ENCRYPTION_KEY) | Leave blank to auto-generate | no | 
Default LLM Provider | - | no | openrouter
Provider API Key | Optional - API Key for the selected provider | no | 

## Screenshots

![GoClaw Screenshot](./assets/screenshot.png)

## Change Log

- 2026-04-16 – Updated to GoClaw v3.8.5, moved all Docker images to meta.yaml inputs
- 2026-03-25 – Applied review feedback — pinned images, simplified service naming, added proxy headers
- 2026-03-24 – Redesigned with Chrome CDP sidecar, removed permission-fixer hack
- 2026-03-19 – Initial release
- 2026-04-29 – Version bumped to v3.11.3-full

## Contributors

- [Alan Mosko](https://github.com/moskoweb)
