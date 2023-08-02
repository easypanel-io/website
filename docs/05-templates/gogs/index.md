---
hide_title: true
sidebar_label: Gogs
title: Gogs | Self-Host on Easypanel
description: How to install Gogs on Easypanel? 1-Click installation template for Gogs on Easypanel
---

<!-- generated -->

# Gogs

1-Click installation template for Gogs on Easypanel

## Description

Gogs is a self-hosted Git service that aims to be simple, stable, and extensible. It can be set up easily on various platforms and supports features like user management, repository access, webhooks, Git hooks, issues, pull requests, wiki, and more. Gogs is open source and free to use.

## Benefits

- Easy to install: Gogs can be installed by running the binary for your platform, using Docker or Vagrant, or getting it packaged. It has low minimal requirements and can even run on a Raspberry Pi or NAS devices.
- Cross-platform: Gogs runs on any platform that Go can compile for, including Windows, Mac, Linux, and ARM-based systems.
- Open source: Gogs is 100% open source and free of charge. All source code is available under the MIT License on GitHub.

## Features

- User management: Gogs provides a user dashboard, user profile, and activity timeline for managing users.
- Repository access: Gogs supports SSH, HTTP, and HTTPS protocols for accessing repositories.
- Webhooks and Git hooks: Gogs allows you to set up webhooks for repositories, as well as Git hooks for custom actions.
- Issues, pull requests, and wiki: Gogs provides features for managing issues, pull requests, and a wiki for collaboration.
- Authentication: Gogs supports authentication via SMTP, LDAP, reverse proxy, GitHub.com, and GitHub Enterprise with 2FA.
- Customization: Gogs allows you to customize HTML templates, static files, and more.
- Database backend: Gogs supports various database backends, including PostgreSQL, MySQL, SQLite3, and TiDB.
- Localization: Gogs is available in over 31 languages.

## Links

- [Website](https://gogs.io/)
- [Documentation](https://gogs.io/docs)
- [Github](https://github.com/gogs/gogs)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/gogs)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | gogs
App Service Image | - | yes | gogs/gogs:0.13.0
SSH Port | - | yes | 2222

## Screenshots

![Gogs Screenshot](./assets/screenshot1.png)
![Gogs Screenshot](./assets/screenshot2.png)

## Change Log

- 2023-3-16 – first release

## Contributors

- [Supernova3339](https://github.com/supernova3339)
