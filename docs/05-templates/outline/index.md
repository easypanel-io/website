---
hide_title: true
sidebar_label: Outline Wiki
title: Outline Wiki | Self-Host on Easypanel
description: How to install Outline Wiki on Easypanel? 1-Click installation template for Outline Wiki on Easypanel
---

<!-- generated -->

# Outline Wiki

1-Click installation template for Outline Wiki on Easypanel

## Description

Outline is a team knowledge base and wiki that helps organize your team&#39;s information in a structured and searchable manner. It offers an intuitive editing experience with markdown support, slash commands, and rich embeds. You can collaborate on documents in real-time, with comments and threads keeping conversations organized. The platform integrates seamlessly with Slack, allowing you to search and share documents without leaving the chat. Outline also supports public sharing of documents with your own brand colors, logos, and domain. It&#39;s designed to be fast, collaborative, and easy to use, with a focus on security and permissions. It also supports multiple languages and offers integrations with tools like Figma, Loom, and more.

## Instructions

Notice, Auththenication Method is Required to use Outline. To use Other Login Methods, Just fill in dummy Cridentials and edit the env! Check out the Docs https://wiki.generaloutline.com/s/hosting/doc/authentication-7ViKRmRY5o! Notice, Some sort of SMTP is Optinal! Check the env Here https://github.com/outline/outline/blob/main/.env.sample

## Benefits

- Beautiful Documents: Outline provides an intuitive editor with markdown support, slash commands, rich embeds, and more. This allows you to create beautiful documents without even trying.
- Collaborate & Comment: Outline allows you to collaborate on documents in real-time. Comments and threads keep conversations organized, making collaboration efficient and effective.
- Structured & Instantly Searchable: With Outline, you can nest documents in a hierarchy, automatically build a network of backlinks, and search across everything in milliseconds.
- Integrated with Slack: Outline integrates with Slack, allowing you to search and share documents without leaving chat, and automatically post document updates.
- Public Sharing: Outline allows you to share documents publicly with a link, or privately with a team. You can use your own brand colors, logos, and domain.
- Fast & Collaborative: Outline is designed to be fast, collaborative, and easy to use. It ensures millisecond response times, documents load instantly, search is speedy and navigating the UI is snappy.

## Features

- Intuitive Editing Experience: Outline provides a blazing fast editor with markdown support, slash commands, embeds, and more.
- Collaboration: Outline allows you to collaborate on documents in real-time. Comments and threads keep conversations organized.
- Structured & Searchable: Outline allows you to nest documents in a hierarchy, automatically build a network of backlinks, and search across everything in milliseconds.
- Slack Integration: Outline integrates with Slack, allowing you to search and share documents without leaving chat, and automatically post document updates.
- Public Sharing: Outline allows you to share documents publicly with a link, or privately with a team. You can use your own brand colors, logos, and domain.
- Customizable: Outline supports custom domains, allowing you to have docs.yourteam.com. You can white label with your own brand and colors.

## Links

- [Website](https://www.getoutline.com/)
- [Documentation](https://www.getoutline.com/developers)
- [Github](https://github.com/outline)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/outline)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | outline
App Service Image | - | yes | outlinewiki/outline:0.80.2
Domain Url | outline.domain.com | yes | 
Database Service Name | - | yes | outline-db
Redis Service Name | - | yes | outline-redis
Google Client ID | - | yes | 
Google Client Secret | - | yes | 
Minio Service Name | - | yes | outline-minio

## Screenshots

![Outline Wiki Screenshot](./assets/screenshot.png)

## Change Log

- 2023-01-15 – first release
- 2023-03-04 – Version bumped to 0.75.2

## Contributors

- [DrMxrcy](https://github.com/DrMxrcy)
- [Berk Sümbül](https://berksmbl.com)
