---
hide_title: true
sidebar_label: 2FAuth
title: 2FAuth | Self-Host on Easypanel
description: How to install 2FAuth on Easypanel? 1-Click installation template for 2FAuth on Easypanel
---

<!-- generated -->

# 2FAuth

1-Click installation template for 2FAuth on Easypanel

## Description

2FAuth is a web based self-hosted alternative to One Time Passcode (OTP) generators like Google Authenticator, designed for both mobile and desktop.

## Benefits

- Increased Security: Two-factor authentication provides a more secure method of access compared to using a password alone. By adding a second authentication factor, you protect your
- Account Protection: Even if your password is compromised or stolen, a second authentication factor helps secure your account.

## Features

- Generate passwords: The main purpose of 2FAuth Serve you some fresh TOTP/HOTP security codes aka One-Time Passwords.
- Work anywhere: It's a Web App, it just works, whatever device you're on. You only need one device (not even yours) and an Internet connection.
- QR codes scan: Scan and decode QR codes to add a 2FA account in no time. Actually, it decodes any QR code, even non 2FA.
- 2FA management: Manage your 2FA accounts, organize and classify them using Groups, edit & delete them. You can even manually add an account without scanning a QR code.
- Protect your data: 2FAuth protects your data with Privacy, Self-hosting, WebAuthn authentication, OTP obfuscation, and Auto lock.
- Multi-user: Share your instance with your family, your friends. Everyone can have an account.
- Import / Export: Migrate from another 2FA app to 2FAuth or export your 2FA data in a breeze.

## Links

- [Website](https://2fauth.app/)
- [Documentation](https://docs.2fauth.app/)
- [Github](https://github.com/Bubka/2FAuth)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/2fauth)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | 2fauth
App Service Image | - | yes | 2fauth/2fauth:5.4.3
App Owner Mail | - | no | mail@example.com
Database Type | - | yes | sqlite
Database Service Name | - | yes | 2fauth-db
Enable Redis | - | no | false
Database Service Name | - | yes | 2fauth-redis

## Screenshots

![2FAuth Screenshot](./assets/screenshot.png)

## Change Log

- 2024-03-17 – First Release
- 2025-01-06 – Version bumped to 5.4.3

## Contributors

- [Berk Sümbül](https://berksmbl.com)
