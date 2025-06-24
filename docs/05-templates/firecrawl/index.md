---
hide_title: true
sidebar_label: Firecrawl
title: Firecrawl | Self-Host on Easypanel
description: How to install Firecrawl on Easypanel? 1-Click installation template for Firecrawl on Easypanel
---

<!-- generated -->

# Firecrawl

1-Click installation template for Firecrawl on Easypanel

## Description

Firecrawl is an API service that takes a URL, crawls it, and converts it into clean markdown or structured data. It crawls all accessible subpages and gives you clean data for each. No sitemap required. Featuring advanced scraping, crawling, and data extraction capabilities with LLM-ready formats, anti-bot mechanisms, dynamic content handling, and powerful customization options. Perfect for AI applications, data extraction, and web automation.

## Benefits

- LLM-Ready Data Extraction: Converts any website into clean markdown or structured data optimized for use with language models and AI applications.
- Advanced Web Scraping: Handles the hard stuff - proxies, anti-bot mechanisms, dynamic content (JS-rendered), output parsing, and orchestration automatically.
- Multiple Extraction Modes: Supports scraping single pages, crawling entire websites, mapping site structures, web search, and AI-powered data extraction.
- Self-Hosted & Scalable: Deploy on your own infrastructure with full control over your data. Horizontally scalable architecture with separate API, worker, and rendering services.

## Features

- Multiple Content Formats: Extract content in markdown, HTML, structured JSON, screenshots, and more. Perfect for different use cases and AI model requirements.
- Intelligent Crawling: Smart crawling with depth control, URL filtering, deduplication, and respect for robots.txt. Efficiently discover and extract content from entire websites.
- AI-Powered Extraction: Use AI to extract structured data with custom prompts and schemas. Perfect for extracting specific information like prices, names, and details.
- Dynamic Content Support: Renders JavaScript-heavy pages with Playwright, handles SPAs, performs actions like clicking and scrolling before extraction.
- Batch Processing: Process thousands of URLs simultaneously with built-in queuing, rate limiting, and parallel processing capabilities.
- Web Search Integration: Search the web and optionally scrape search results in one operation. Perfect for research and content discovery.

## Links

- [Website](https://firecrawl.dev/)
- [Github](https://github.com/mendableai/firecrawl)
- [Documentation](https://docs.firecrawl.dev/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/firecrawl)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | firecrawl
App Service Image | - | yes | ghcr.io/mendableai/firecrawl:latest
Playwright Service Image | - | yes | ghcr.io/mendableai/playwright-service:latest

## Screenshots


## Change Log

- 2025-06-04 – First Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
