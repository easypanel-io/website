---
hide_title: true
sidebar_label: ngrok
title: ngrok | Self-Host on Easypanel
description: How to install ngrok on Easypanel? 1-Click installation template for ngrok on Easypanel
---

<!-- generated -->

# ngrok

1-Click installation template for ngrok on Easypanel

## Description

ngrok is a secure tunneling service that creates secure tunnels from a public endpoint to a locally running web service. It&#39;s perfect for exposing local development servers, testing webhooks, and sharing your work with others. This template provides easy deployment of ngrok with configurable authentication, regions, and target services.

## Benefits

- Secure Tunneling: Create secure tunnels from public endpoints to your locally running services, perfect for development and testing.
- Easy Webhook Testing: Test webhooks and integrations by exposing your local development server to the internet with a public URL.
- Multiple Protocols: Support for HTTP, HTTPS, and TCP protocols to tunnel various types of services and applications.
- Global Regions: Choose from multiple global regions to optimize latency and performance for your specific use case.
- Custom Domains: Use custom domains for your tunnels with ngrok Pro plan, providing professional URLs for your services.

## Features

- Web Interface: Access the ngrok web interface to inspect HTTP requests, view tunnel status, and manage your tunnels through a user-friendly dashboard.
- Request Inspection: Inspect all HTTP requests and responses in real-time, making debugging and development much easier.
- Authentication: Secure your tunnels with ngrok authentication tokens, ensuring only authorized access to your services.
- Region Selection: Choose from multiple global regions to optimize performance and reduce latency for your specific geographic location.
- Protocol Support: Support for HTTP, HTTPS, and TCP protocols, allowing you to tunnel various types of services and applications.
- Custom Domains: Use custom domains for your tunnels with ngrok Pro plan, providing professional and memorable URLs for your services.

## Links

- [Website](https://ngrok.com)
- [Documentation](https://ngrok.com/docs)
- [GitHub](https://github.com/ngrok/ngrok)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/ngrok)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | ngrok
App Service Image | - | yes | ngrok/ngrok:3.34.1-alpine
ngrok Auth Token | - | yes | 
ngrok Service Name | The name of the service that will be tunneled. | yes | ngrok
ngrok Target Port | The port of the service that will be tunneled. | yes | 

## Screenshots


## Change Log

- 2025-07-16 – first release
- 2025-12-29 – Version bumped to 3.34.1

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
