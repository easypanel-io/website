---
hide_title: true
sidebar_label: SimStudio AI
title: SimStudio AI | Self-Host on Easypanel
description: How to install SimStudio AI on Easypanel? 1-Click installation template for SimStudio AI on Easypanel
---

<!-- generated -->

# SimStudio AI

1-Click installation template for SimStudio AI on Easypanel

## Description

SimStudio AI is an advanced AI simulation platform that combines cutting-edge artificial intelligence with intuitive design tools. It provides a comprehensive environment for creating, running, and analyzing AI-powered simulations with support for various AI models and integrations. The platform features authentication, email notifications, and extensible AI provider support including local models via Ollama.

## Instructions

Please provide the OAuth credentials for Google or GitHub or both.

## Benefits

- AI-Powered Simulations: Create and run sophisticated AI simulations with support for multiple AI providers and models including local options.
- Comprehensive Authentication: Built-in authentication system with support for Google and GitHub OAuth providers for secure user management.
- Vector Database Support: PostgreSQL with pgvector extension for advanced AI and machine learning workloads requiring vector operations.
- Flexible AI Integration: Support for various AI providers including OpenAI-compatible APIs and local models via Ollama for maximum flexibility.

## Features

- Multi-Provider AI Support: Integrate with various AI providers and services, including local models through Ollama for privacy and control.
- OAuth Authentication: Secure user authentication with Google and GitHub OAuth integration for easy user onboarding.
- Email Notifications: Built-in email notification system using Resend API for user communication and alerts.
- Database Migrations: Automated database schema management with dedicated migration service for smooth updates and deployments.

## Links

- [Website](https://simstudio.ai)
- [GitHub](https://github.com/simstudioai/sim)
- [Documentation](https://docs.simstudio.ai/introduction)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/simstudio)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | simstudio
App Service Image | SimStudio AI main application Docker image | yes | ghcr.io/simstudioai/simstudio:v0.5.79
Migrations Service Image | SimStudio AI database migrations Docker image | yes | ghcr.io/simstudioai/migrations:v0.5.79
Freestyle API Key | Optional API key for Freestyle AI services | no | 
Google OAuth Client ID | Optional Google OAuth client ID for authentication | no | 
Google OAuth Client Secret | Optional Google OAuth client secret for authentication | no | 
GitHub OAuth Client ID | Optional GitHub OAuth client ID for authentication | no | 
GitHub OAuth Client Secret | Optional GitHub OAuth client secret for authentication | no | 
Resend API Key | Optional Resend API key for email notifications | no | 
Ollama URL | URL for Ollama server for local AI models | no | http://localhost:11434

## Screenshots

![SimStudio AI Screenshot](./assets/screenshot.png)

## Change Log

- 2025-06-24 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
