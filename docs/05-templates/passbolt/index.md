---
hide_title: true
sidebar_label: Passbolt
title: Passbolt | Self-Host on Easypanel
description: How to install Passbolt on Easypanel? 1-Click installation template for Passbolt on Easypanel
---

<!-- generated -->

# Passbolt

1-Click installation template for Passbolt on Easypanel

## Description

Passbolt is a security-first, open source password manager designed for teams and businesses. It is trusted by thousands of organizations worldwide, including Fortune 500 companies, defense industry, universities, startups, and many others. The app puts security first, with top penetration testers regularly assessing its software. It supports user-owned secret keys and end-to-end encryption even in complex scenarios. Passbolt is also built for collaboration, allowing organizations and teams to securely share credentials with powerful auditing tools. It offers unparalleled granularity for both access controls and encrypted data. The app is headquartered in the EU, ensuring that privacy is not only a top priority but also guaranteed by law. Passbolt can be used from your browser or mobile phone, with real-time sharing. It also supports programmatic password retrieval, storage, and sharing with its JSON API.

## Instructions

In order to create the first admin account, the following needs to be executed inside the passpolt container &quot;su -m -c &quot;bin/cake passbolt register_user -u YOUR@EMAIL.COM -f YOURNAME -l SURNAME -r admin&quot; -s /bin/sh www-data&quot;. Please follow further instructions of the command output.

## Benefits

- Unparalleled Security: Passbolt is a password manager that prioritizes security above all else. It is regularly assessed by top penetration testers and the findings are made public. This transparency ensures that you can trust Passbolt with your most sensitive information.
- Built for Team Collaboration: Unlike most password managers that focus on individual users, Passbolt is designed to meet the needs of organizations and teams. It allows you to securely share your credentials and provides powerful auditing tools for power users.
- Privacy Guaranteed: Based in the EU, Passbolt guarantees your privacy by law. You can host it behind your firewalls or in an air-gapped environment where you have full control. Even the paid versions of Passbolt are 100% open source, ensuring transparency and allowing anyone to audit the code.

## Features

- User-Owned Secret Keys and End-to-End Encryption: Passbolt supports user-owned secret keys and end-to-end encryption, even in complex scenarios. This ensures that your data is always secure.
- Granular Access Controls: Passbolt provides unparalleled granularity for both access controls and encrypted data. This allows you to manage who has access to what information and when.
- Real-Time Password Syncing: Passbolt can be used from your browser or mobile phone, and sharing happens in real time. This means that you can access your passwords from any device, at any time.
- Developer-Friendly: Passbolt allows developers to retrieve, store, and share passwords programmatically with the JSON API. This makes it easy to automate tasks at scale.

## Links

- [Website](https://passbolt.com)
- [Documentation](https://help.passbolt.com)
- [Github](https://github.com/passbolt/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/passbolt)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | passbolt
App Service Image | - | yes | passbolt/passbolt:4.8.0-1-ce
Database Service Name | - | yes | passbolt-db

## Screenshots

![Passbolt Screenshot](./assets/screenshot.jpg)

## Change Log

- 2023-04-03 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
