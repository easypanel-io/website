---
hide_title: true
sidebar_label: Morphic
title: Morphic | Self-Host on Easypanel
description: How to install Morphic on Easypanel? 1-Click installation template for Morphic on Easypanel
---

<!-- generated -->

# Morphic

1-Click installation template for Morphic on Easypanel

## Description

Morphic is an AI-powered search and answer engine that combines the power of multiple AI models with real-time web search capabilities. It provides intelligent answers to user queries by leveraging various AI providers including OpenAI, Anthropic, Google, and Groq, while using SearxNG for privacy-focused web search. Morphic offers a conversational interface that delivers comprehensive, well-sourced answers with citations and follow-up questions, making it an excellent alternative to traditional search engines.

## Benefits

- Multi-Model AI Support: Access multiple AI providers including OpenAI, Anthropic, Google, and Groq for diverse AI capabilities and model selection.
- Privacy-Focused Search: Integrated SearxNG search engine ensures private web search without tracking or data collection from search providers.
- Intelligent Responses: Get comprehensive answers with proper citations, sources, and follow-up questions for deeper exploration of topics.
- Real-Time Information: Combine AI knowledge with real-time web search results for up-to-date and accurate information on current events and topics.

## Features

- Conversational Interface: Chat-based interface that provides natural language interactions with AI models for intuitive question-and-answer sessions.
- Source Citations: All responses include proper citations and links to sources, ensuring transparency and enabling fact verification.
- Follow-Up Questions: AI-generated follow-up questions help users explore topics more deeply and discover related information automatically.
- Multiple AI Providers: Choose from various AI models and providers based on your needs, with support for the latest language models from major providers.

## Links

- [GitHub](https://github.com/miurla/morphic)
- [Documentation](https://github.com/miurla/morphic#readme)
- [Demo](https://morphic.sh)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/morphic)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | morphic
App Service Image | Morphic Docker image | yes | ghcr.io/miurla/morphic:212c4a5cf94313b31b4b67fd85b6734ebc260a6c
SearxNG Service Image | SearxNG Docker image | yes | searxng/searxng:2025.6.25-39474b3
OpenAI API Key | Optional OpenAI API key for GPT models | no | 
Anthropic API Key | Optional Anthropic API key for Claude models | no | 
Google Generative AI API Key | Optional Google API key for Gemini models | no | 
Groq API Key | Optional Groq API key for fast inference | no | 

## Screenshots

![Morphic Screenshot](./assets/screenshot.png)

## Change Log

- 2025-06-25 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
