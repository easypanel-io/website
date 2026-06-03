---
hide_title: true
sidebar_label: Vexa Dashboard
title: Vexa Dashboard | Self-Host on Easypanel
description: How to install Vexa Dashboard on Easypanel? 1-Click installation template for Vexa Dashboard on Easypanel
---

<!-- generated -->

# Vexa Dashboard

1-Click installation template for Vexa Dashboard on Easypanel

## Description

Vexa Dashboard is a complete, all-in-one solution for self-hosted meeting transcription. This template deploys both the Vexa API (real-time meeting transcription engine) and its web dashboard in a single click.

Vexa captures audio from Google Meet and Microsoft Teams meetings, transcribes it in real-time using Whisper AI, and provides a beautiful web interface to manage everything. Own your data, self-host everything, no cloud dependencies.

This template includes:
- Vexa API: The transcription engine with bot management
- Vexa Dashboard: Web interface for managing meetings and transcripts
- PostgreSQL: Database for storing all your data

Perfect for teams who want enterprise-grade meeting transcription without sending data to third parties.


## Instructions

After deployment, open the Vexa Dashboard URL in your browser. You can immediately start joining meetings and transcribing them.

To enable AI-powered transcript analysis, edit the vexa-dashboard service environment variables and uncomment the AI_MODEL and AI_API_KEY lines.

For better transcription quality (requires GPU), edit the vexa-api service and change WHISPER_MODEL_SIZE from &quot;tiny&quot; to &quot;medium&quot; or &quot;large-v3&quot;, and set DEVICE to &quot;gpu&quot;.


## Benefits

- All-in-One Deployment: Deploy the complete Vexa stack (API + Dashboard + Database) with a single click. No complex configuration required.
- 100% Self-Hosted: All your meeting data stays on your infrastructure. No data sent to third-party services. Complete privacy and control.
- Real-Time Transcription: Get live transcriptions as meetings happen via WebSocket. Support for 100+ languages with Whisper AI.
- AI-Powered Analysis: Optional AI assistant to chat with your transcripts. Supports OpenAI, Anthropic, Groq, and local Ollama.

## Features

- Multi-Platform Support: Send transcription bots to Google Meet and Microsoft Teams meetings. Zoom support coming soon.
- Live Transcription: Watch transcriptions appear in real-time via WebSocket connection with sub-second latency.
- Export Options: Download transcripts in multiple formats including TXT, JSON, SRT subtitles, and VTT captions.
- User Management: Admin dashboard for managing users, API tokens, and monitoring active transcription bots.
- Magic Link Auth: Secure passwordless authentication via email. Just configure SMTP and users get sign-in links.
- Dark Mode: System-aware theme switching for comfortable viewing in any environment.

## Links

- [Website](https://vexa.ai)
- [Documentation](https://github.com/Vexa-ai/vexa)
- [Dashboard GitHub](https://github.com/Vexa-ai/vexa-dashboard)
- [API GitHub](https://github.com/Vexa-ai/vexa)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/vexa-dashboard)

## Options

Name | Description | Required | Default Value
-|-|-|-
Project Name | - | yes | 
Dashboard Service Name | - | yes | vexa-dashboard
Dashboard Docker Image | - | yes | synapsr/vexa-dashboard:latest
API Service Name | - | yes | vexa-api
Database Service Name | - | yes | vexa-database
Default Bot Name (appears in meetings) | - | no | Vexa Transcription Bot

## Screenshots


## Change Log

- 2025-01-01 – First release - All-in-one deployment with Vexa API and Dashboard

## Contributors

- [Vexa Team](https://github.com/Vexa-ai)
- [Loan Talvat](https://github.com/loan-talvat)
