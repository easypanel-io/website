---
hide_title: true
sidebar_label: Ploi Roadmap
title: Ploi Roadmap | Self-Host on Easypanel
description: How to install Ploi Roadmap on Easypanel? 1-Click installation template for Ploi Roadmap on Easypanel
---

<!-- generated -->

# Ploi Roadmap

1-Click installation template for Ploi Roadmap on Easypanel

## Description

Roadmap is an open-source software designed to streamline your roadmapping process. It offers a completely customizable platform where you can mention users in comments, upvote items to prioritize them, and generate automatic slugs. The software also features a Filament admin panel and a simplified role system that includes administrator, employee, and user roles. Roadmap supports OAuth 2 single sign-on with your own application and automatically generates OG images, including the branding color you&#39;ve set up. It also integrates with GitHub, allowing you to assign a repository to each project and manage issues directly from the roadmap admin. The software is built with PHP and requires a database to function.

## Instructions

After First Deployment, run &quot;php artisan roadmap:install&quot; to setup the inital user account.

## Benefits

- Customisable Roadmapping: Roadmap is an open-source software designed to cater to your roadmapping needs. It allows you to create a completely customisable roadmap, enabling you to plan and strategise effectively.
- Prioritise Tasks: With the ability to upvote items, you can easily identify which tasks or projects have more priority. This feature helps in better decision-making and resource allocation.
- Easy User Management: Roadmap comes with a simplified role system, including roles such as administrator, employee, and user. This makes it easy to manage users and their access levels within the application.
- Single Sign-On: Roadmap supports OAuth 2 single sign-on with your own application, providing a seamless and secure login experience for users.
- Automatic Image Generation: The software automatically generates Open Graph (OG) images, including the branding color you've set up. This feature helps in enhancing the visual appeal and recognition of your roadmap.

## Features

- Customisable Roadmapping: Create a completely customisable roadmap to plan and strategise effectively.
- User Mentions: Mention users in comments to facilitate communication and collaboration.
- Upvote System: Upvote items to identify which tasks or projects have more priority.
- Automatic Slug Generation: Automatically generate slugs for your items, making them easier to reference and find.
- Admin Panel: Manage your roadmap and users with the easy-to-use Filament admin panel.
- Role System: Manage users and their access levels with the simplified role system.
- Single Sign-On: Provide a seamless and secure login experience with OAuth 2 single sign-on.
- Automatic Image Generation: Enhance the visual appeal of your roadmap with automatically generated OG images.

## Links

- [Github](https://github.com/ploi-deploy/roadmap)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/ploi-roadmap)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | ploi-roadmap
App Service Image | - | yes | ghcr.io/easypanel-community/docker-ploi-roadmap:1.44.0
Database Service Name | - | yes | ploi-roadmap-db
Admin Notifications | - | yes | true
Language | - | yes | en
Timezone | - | yes | utc

## Screenshots

![Ploi Roadmap Screenshot](./assets/screenshot.png)

## Change Log

- 2023-1-6 – first release
- 2023-01-27 – Package and Image Fix

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Mxrcy](https://github.com/DrMxrcy)
