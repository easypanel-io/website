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

Vaultwarden is an unofficial Bitwarden server implementation designed for self-hosted deployments. It is written in Rust and is compatible with the official Bitwarden clients. This application is ideal for individuals, families, and smaller organizations who find the official resource-heavy service undesirable. Vaultwarden supports a wide range of features including personal and organization vault support, password sharing and access control, file attachments, two-step login via email, Duo, YubiKey, and FIDO2 WebAuthn, and many more. It also supports live sync for desktop/browser clients/extensions and mobile clients (Android/iOS). However, it does not prioritize the development of features mainly useful to larger organizations such as single sign-on and directory syncing.

## Instructions

To access the administration interface, please go to /admin on your installation url. The admin token is in your &quot;Environment&quot; tab.

## Benefits

- Self-hosted deployment: Vaultwarden allows you to host your own Bitwarden server, giving you full control over your data and privacy.
- Compatibility with official Bitwarden clients: Vaultwarden is fully compatible with the official Bitwarden clients, ensuring a seamless user experience.
- Ideal for individuals, families, and smaller organizations: Vaultwarden is designed to meet the needs of individuals, families, and smaller organizations, providing a lightweight and efficient solution.

## Features

- Web interface: Access your vault and manage your passwords through a user-friendly web interface.
- Password sharing and access control: Share passwords securely with others and control their access to your shared items.
- File attachments and website icons: Attach files to your passwords and store website icons for easy identification.
- Two-step login and authentication options: Enhance the security of your vault with two-step login and authentication options, including email, Duo, YubiKey, and FIDO2 WebAuthn.
- Emergency Access and Master password re-prompt: Set up emergency access to your vault and enable master password re-prompt for added security.
- Live sync for desktop/browser and mobile clients: Keep your vault in sync across all your devices, including desktop/browser clients/extensions and mobile clients (Android/iOS).

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
