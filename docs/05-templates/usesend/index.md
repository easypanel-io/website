---
hide_title: true
sidebar_label: Usesend
title: Usesend | Self-Host on Easypanel
description: How to install Usesend on Easypanel? 1-Click installation template for Usesend on Easypanel
---

<!-- generated -->

# Usesend

1-Click installation template for Usesend on Easypanel

## Description

Usesend is a self-hosted email marketing and transactional email platform that gives you complete control over your email infrastructure. It provides a modern, user-friendly interface for creating, sending, and tracking email campaigns, newsletters, and transactional emails. Usesend features advanced segmentation, email automation, template management, analytics, and subscriber management. Built with Next.js and powered by PostgreSQL, Redis, and MinIO for reliable storage, it offers enterprise-grade features without vendor lock-in or usage-based pricing. Usesend supports GitHub OAuth for authentication and includes API rate limiting and SMTP configuration for sending emails. Perfect for businesses and developers who want full ownership of their email marketing infrastructure.

## Instructions

After deployment, configure your GitHub OAuth app credentials and AWS Access Key and Secret Key.

## Benefits

- Self-Hosted & Private: Complete control over your email infrastructure and subscriber data. No vendor lock-in, no usage limits, and full data privacy.
- Cost-Effective: Eliminate expensive per-email or per-subscriber pricing. Pay only for your infrastructure, not for every email you send.
- Enterprise Features: Advanced segmentation, automation, analytics, and API access typically found in expensive SaaS platforms, available in your self-hosted instance.

## Features

- Email Campaign Management: Create and send beautiful email campaigns with a modern editor, template management, and scheduling capabilities.
- Subscriber Management: Organize subscribers with advanced segmentation, custom fields, tags, and list management for targeted campaigns.
- Email Automation: Set up automated email workflows triggered by subscriber actions, dates, or custom events.
- Analytics & Tracking: Comprehensive email analytics including open rates, click rates, bounces, and engagement metrics with detailed reporting.
- API & Integrations: RESTful API for integrating email sending into your applications with rate limiting and authentication.
- Transactional Emails: Send transactional emails like password resets, order confirmations, and notifications through the API.

## Links

- [Website](https://usesend.com/)
- [Documentation](https://docs.usesend.com/)
- [Github](https://github.com/usesend/usesend)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/usesend)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | usesend
App Service Image | - | yes | usesend/usesend:v1.7.1
GitHub OAuth App ID | - | yes | 
GitHub OAuth App Secret | - | yes | 
AWS Access Key | - | yes | 
AWS Secret Key | - | yes | 
API Rate Limit (requests per minute) | - | no | 60

## Screenshots

![Usesend Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-13 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
