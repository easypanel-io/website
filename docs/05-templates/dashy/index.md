---
hide_title: true
sidebar_label: Dashy
title: Dashy | Self-Host on Easypanel
description: How to install Dashy on Easypanel? 1-Click installation template for Dashy on Easypanel
---

<!-- generated -->

# Dashy

1-Click installation template for Dashy on Easypanel

## Description

Dashy is the ultimate homepage for your homelab, designed to be your personal, privacy-respecting dashboard. It is highly customizable and easy to use, offering a unique user experience with its built-in themes and UI color palette editor. Dashy can auto-fetch icons from the favicon of each of your apps or services, and it provides an instant overview of the health of each of your apps with status indicators. It also features a simple authentication feature for protecting your dashboard, and supports multiple users with granular controls. Dashy comes with 50+ pre-built widgets for displaying dynamic content from any API-enabled service. It offers alternate views for a minimal view or a workspace view, and allows you to choose how to launch your apps. Dashy also includes a search and shortcuts feature for easy navigation, and an optional cloud backup and sync service for off-site config backup. The app supports multiple languages and is easily configurable through a simple YAML file or directly through the UI.

## Instructions

After deploying the project, it may take a while before the app is available (5 minutes).

## Benefits

- Highly Customizable: Dashy allows you to create a unique looking dashboard with tons of built-in themes and a UI color palette editor. You can also use custom CSS for further customization.
- Privacy-Respecting: Dashy respects your privacy and provides features like simple auth for protecting your dashboard. It also supports Keycloak and other SSO providers.
- Multi-Language Support: Dashy's UI has been translated into several languages including English, German, French, Dutch, and Slovenian. Your language should be applied automatically, or you can change it in the config menu.
- Cloud Backup & Sync: Dashy offers an optional, end-to-end encrypted, free backup cloud service. This enables you to have your config backed up off-site, and to sync data between multiple instances easily.

## Features

- Theming: With tons of built-in themes to choose from, plus a UI color palette editor, you can have a unique looking dashboard in no time. There is also support for custom CSS.
- Icons: Dashy can auto-fetch icons from the favicon of each of your apps/ services. There is also native support for Font Awesome, Material Design Icons, emoji icons and normal images.
- Status Indicators: Get an instant overview of the health of each of your apps with status indicators. Once enabled, a small dot next to each app will show whether it is up and online, with more info like response time visible on hover.
- Widgets: Display dynamic content from any API-enabled service. Dashy comes bundled with 50+ pre-built widgets for self-hosted services, productivity, and monitoring.
- Alternate Views: As well as the default home, there is also a minimal view, which makes a great fast-loading browser start page. Plus a workspace view useful for working on multiple apps at once, all without having to leave your dashboard.
- Launching Methods: Choose how to launch each of your apps by default, or right click for all options. Apps can be opened in a new tab, the same tab, a quick pop-up modal or in the workspace view.
- Search & Shortcuts: To search, just start typing, results will be filtered instantly. Use the arrow keys or tab to navigate through results, and press enter to launch. You can also create custom shortcuts for frequently used apps, or add custom tags for easier searching. Dashy can also be used to search the web using your favorite search engine.
- Configuration: Dashy's config is specified in a simple YAML file. But you can also configure directly through the UI, and have changes written to, and backed up on disk. Real-time validation and hints are in place to help you.
- Customizable Layouts: Structure your dashboard to fit your use case. From the UI, you can choose between different layouts, item sizes, show/ hide components, switch themes plus more. You can customize pretty much every area of your dashboard. There are config options for custom header, footer, nav bar links, title etc. You can also choose to hide any elements you don't need.

## Links

- [Website](https://dashy.to/)
- [Documentation](https://dashy.to/docs/)
- [Github](https://github.com/lissy93/dashy)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/dashy)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | dashy
App Service Image | - | yes | lissy93/dashy:release-3.1.1

## Screenshots

![Dashy Screenshot](./assets/screenshot.png)

## Change Log

- 2022-08-18 – First Release
- 2025-01-09 – Version bumped to release-3.1.1

## Contributors

- [Bedeoan Raul](https://github.com/bedeoan)
- [Andrei Canta](https://github.com/deiucanta)
