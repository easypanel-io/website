---
hide_title: true
sidebar_label: Vaultwarden
title: Vaultwarden | Self-Host on Easypanel
description: How to install Vaultwarden on Easypanel? 1-Click installation template for Vaultwarden on Easypanel
---

<!-- generated -->

# Vaultwarden

1-Click installation template for Vaultwarden on Easypanel

## Description

Vaultwarden is an unofficial Bitwarden server implementation written in Rust. It is compatible with the official Bitwarden clients, and is ideal for self-hosted deployments where running the official resource-heavy service is undesirable. Vaultwarden is targeted towards individuals, families, and smaller organizations.

## Instructions

To access the administration interface, please go to /admin on your installation url. The admin token is in your &quot;Environment&quot; tab.

## Benefits

- Self-hosted: Vaultwarden allows you to host your own Bitwarden server, giving you full control over your data and privacy.
- Compatible with official clients: Vaultwarden is compatible with the official Bitwarden clients, so you can continue using your favorite client apps.
- Lightweight: Vaultwarden is written in Rust and is designed to be lightweight, making it ideal for smaller deployments.

## Features

- Web interface: Vaultwarden provides a web interface similar to the official Bitwarden web interface, allowing you to access your passwords and other data from any device with a web browser.
- Personal and organization vault support: Vaultwarden supports both personal and organization vaults, allowing you to organize and share your passwords and other data.
- Password sharing and access control: Vaultwarden allows you to share passwords with others and control their access to your shared items.
- File attachments: Vaultwarden supports attaching files to your items, allowing you to store additional information or documents securely.
- Two-step login: Vaultwarden supports two-step login using email, Duo, YubiKey, and FIDO2 WebAuthn, providing an extra layer of security for your account.

## Links

- [Documentation](https://github.com/dani-garcia/vaultwarden/wiki)
- [Github](https://github.com/dani-garcia/vaultwarden)
- [Enviroment Variables](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/vaultwarden)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | vaultwarden
App Service Image | - | yes | vaultwarden/server:latest

## Screenshots

![Vaultwarden Screenshot](./assets/screenshot1.png)
![Vaultwarden Screenshot](./assets/screenshot2.png)
![Vaultwarden Screenshot](./assets/screenshot3.png)

## Change Log

- 2022-11-19 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
