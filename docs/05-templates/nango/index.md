---
hide_title: true
sidebar_label: Nango
title: Nango | Self-Host on Easypanel
description: How to install Nango on Easypanel? 1-Click installation template for Nango on Easypanel
---

<!-- generated -->

# Nango

1-Click installation template for Nango on Easypanel

## Description

Nango is an open-source product integration platform that allows developers to build integrations quickly and maintain full control. It provides pre-built (O)Auth, API configuration, and templates for over 100 APIs. With Nango, developers can authorize integrations, sync data with external APIs, and unify integration code using a single API and unified models. The platform offers managed API authentication, bi-directional sync, real-time updates through webhooks, and an admin console to monitor activity and traffic. Nango supports any API and any use case, with templates for 100+ APIs out-of-the-box and the ability to add custom APIs. It is language agnostic and works with every programming language and framework. Nango is 100% open source, allowing developers to leverage the community&#39;s shared knowledge and contributions. The platform is loved by developers and CTOs for its ease of use, time-saving capabilities, and seamless OAuth implementation. Nango offers both self-hosted and cloud options for deployment.

## Instructions

Check the environment tab for your API key. Follow the instructions in the FILE mount.

## Benefits

- Build integrations fast: Nango provides pre-built (O)Auth, API configuration, and templates for over 100 APIs, allowing developers to build integrations quickly.
- Maintain full control: With Nango, developers have full control over their integrations. They can customize pre-built integrations, build their own on top of Nango's infrastructure, and manage user credentials securely.
- Simplify integration code: Nango offers unified models and a single API, simplifying integration code. Developers don't need to deal with each external API's schema and quirks anymore.
- Support for any API and use case: Nango supports any API and any use case. It provides templates for 100+ APIs out-of-the-box and allows developers to add custom APIs easily.
- Language agnostic: Nango works with every programming language and framework. Developers can leverage Nango's typed SDK in multiple languages or call the unified API directly.
- Open source community: Nango is 100% open source, allowing developers to leverage the community's shared knowledge and contributions. The platform is actively maintained and updated by a team and community of contributors.

## Features

- Managed API auth: Nango provides a drop-in UI to let users authorize integrations. It handles various authentication types (OAuth, API Key) and securely manages user credentials.
- Bi-directional sync: Nango continuously synchronizes data with external APIs in the background, ensuring data is always up to date.
- Real-time updates: Nango offers webhooks to get real-time updates on data changes from external APIs.
- Unified API & models: Nango provides a single API with documented and structured schemas, simplifying integration code and eliminating the need to deal with each external API's schema and quirks.
- Custom objects: Users can define custom objects and access the raw data through Nango, giving them flexibility and control over their integrations.
- Typed SDKs: Nango's typed SDKs offer auto-completion, strong types, and concise syntax, making integration development easier and more efficient.
- Admin console: Nango provides an admin console where users can inspect their customers' activity and traffic related to integrations.
- Monitoring: Nango ensures reliable external integrations with unified error reporting, allowing developers to identify and resolve issues quickly.

## Links

- [Website](https://nango.dev)
- [Documentation](https://docs.nango.dev)
- [Github](https://github.com/NangoHQ/nango)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/nango)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | nango
App Service Image | - | yes | nango.docker.scarf.sh/nangohq/nango-server:0.10.3
Database Service Name | - | yes | nango-db
Username | - | yes | 
Password | - | yes | 

## Screenshots

![Nango Screenshot](./assets/screenshot.png)

## Change Log

- 2023-3-13 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
