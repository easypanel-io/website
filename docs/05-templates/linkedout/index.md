---
hide_title: true
sidebar_label: LinkedOut
title: LinkedOut | Self-Host on Easypanel
description: How to install LinkedOut on Easypanel? 1-Click installation template for LinkedOut on Easypanel
---

<!-- generated -->

# LinkedOut

1-Click installation template for LinkedOut on Easypanel

## Description

A comprehensive LinkedIn automation platform that helps streamline your LinkedIn outreach and engagement. The platform combines a modern Next.js frontend for managing campaigns and contacts, a robust PocketBase backend for secure data storage and user management, and powerful n8n workflow automation for handling LinkedIn interactions and follow-ups. With optional ngrok tunneling support for local development and testing, and easy deployment via Docker and Easypanel, LinkedOut provides everything needed to automate and scale your LinkedIn presence effectively.

## Benefits

- LinkedIn Automation Platform: LinkedOut provides a comprehensive platform for automating LinkedIn activities including outreach, connection management, and workflow automation through an intuitive web interface.
- Modern Tech Stack: Built with Next.js frontend, PocketBase backend, and n8n workflow automation, providing a robust and scalable architecture for LinkedIn automation needs.
- Workflow Automation: Integrated n8n workflow automation allows you to create complex automation workflows for LinkedIn activities, data processing, and integration with other services.

## Features

- LinkedIn Outreach Automation: Automate your LinkedIn outreach campaigns with customizable messaging, connection requests, and follow-up sequences to maximize your networking efforts.
- PocketBase Backend: Powerful backend database with built-in authentication, real-time subscriptions, and REST API for storing and managing LinkedIn automation data and user information.
- n8n Workflow Engine: Advanced workflow automation engine that enables complex automation scenarios, webhook integrations, and custom logic for LinkedIn automation workflows.
- Optional ngrok Tunneling: Optional ngrok integration provides secure tunneling for external access to your n8n workflows, enabling webhook callbacks and remote workflow management.

## Links

- [Documentation](https://github.com/maxt-n8n/linkedout#readme)
- [GitHub](https://github.com/maxt-n8n/linkedout)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/linkedout)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | linkedout
App Service Image | - | yes | dockeriddonuts/easypanel-linkedout-frontend:1.0
Backend Service Image | - | yes | dockeriddonuts/easypanel-linkedout-backend:1.0
n8n Service Image | - | yes | n8nio/n8n:1.102.3
ngrok Service Image | - | yes | ngrok/ngrok:3.23.3-alpine
ngrok Auth Token | create a token for ngrok service | yes | 
PocketBase Admin Email | - | yes | admin@example.com
PocketBase Admin Password | - | yes | changeme123

## Screenshots


## Change Log

- 2025-07-16 – first release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
