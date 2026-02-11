---
hide_title: true
sidebar_label: OpenClaw
title: OpenClaw | Self-Host on Easypanel
description: How to install OpenClaw on Easypanel? 1-Click installation template for OpenClaw on Easypanel
---

<!-- generated -->

# OpenClaw

1-Click installation template for OpenClaw on Easypanel

## Description

OpenClaw is your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞 An open-source personal AI assistant platform that gives you complete control over your data and AI interactions. Built for Molty, OpenClaw provides a gateway service for WebSocket connections, CLI tools for management, and support for multiple channels including WhatsApp, Telegram, Slack, Discord, and more. Deploy your personal AI assistant with full data ownership and privacy.

## Instructions

Once deployed, the gateway service will start automatically. To complete setup, you can run the onboarding wizard by executing `node dist/index.js onboard --no-install-daemon` in the gateway service console. The gateway runs with `--allow-unconfigured` flag to enable initial setup.

## Benefits

- Your Own Personal AI Assistant: Deploy your personal AI assistant with complete data ownership and privacy. No cloud dependencies, your data stays yours.
- Multi-Platform Support: Works on any OS and platform. Connect via WhatsApp, Telegram, Slack, Discord, Microsoft Teams, and more through the gateway.
- Open Source & Self-Hosted: MIT licensed open-source project. Full control over your AI assistant with no vendor lock-in or data sharing.
- Gateway Architecture: WebSocket-based gateway service enables real-time communication with your AI assistant across all connected channels and devices.

## Features

- WebSocket Gateway: High-performance WebSocket gateway service for real-time communication with your AI assistant. Supports configurable bind addresses and ports.
- Multi-Channel Support: Connect your AI assistant to WhatsApp, Telegram, Slack, Discord, Microsoft Teams, SMS, and more through unified channel management.
- Skills & Workspace: Extensible skills system and workspace management for customizing your AI assistant's capabilities and behavior.
- Agent Control Protocol: Full agent control protocol (ACP) for managing AI agents, routing, and isolated agent workspaces with authentication.
- Control UI & Dashboard: Web-based control UI and dashboard for managing your AI assistant, viewing logs, configuring channels, and monitoring health.
- Claude AI Integration: Native support for Claude AI and Claude Web with session key and cookie authentication for seamless AI interactions.
- Persistent Configuration: All configuration, workspace data, and agent state are persisted in volumes for reliable operation across restarts.
- Health Monitoring: Built-in health checks, system events, heartbeat monitoring, and presence tracking for reliable operation.

## Links

- [Website](https://openclaw.ai)
- [GitHub](https://github.com/openclaw/openclaw)
- [Documentation](https://docs.openclaw.ai)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/openclaw)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | openclaw
OpenClaw Image | Docker image for OpenClaw | yes | ghcr.io/openclaw/openclaw:2026.2.3
Gateway Token | Token for authenticating with the gateway service (auto-generated if empty) | no | 
Gateway Bind | Network interface to bind to (e.g., lan, localhost) | no | lan
Gateway Port | Published port for the gateway service | no | 18789
Bridge Port | Published port for the bridge service | no | 18790
Claude AI Session Key | Claude AI session key (optional) | no | 
Claude Web Session Key | Claude Web session key (optional) | no | 
Claude Web Cookie | Claude Web cookie (optional) | no | 

## Screenshots

![OpenClaw Screenshot](./assets/screenshot.png)
![OpenClaw Screenshot](./assets/screenshot1.png)

## Change Log

- 2026-02-02 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
