---
sidebar_label: Passbolt
title: Passbolt
description: How to install Passbolt on Easypanel? 1-Click installation template for Passbolt on Easypanel
---

<!-- generated -->

1-Click installation template for Passbolt on Easypanel

## Description

The open source password manager for teams

## Instructions

In order to create the first admin account, the following needs to be executed inside the passpolt container &quot;su -m -c &quot;bin/cake passbolt register_user -u YOUR@EMAIL.COM -f YOURNAME -l SURNAME -r admin&quot; -s /bin/sh www-data&quot;. Please follow further instructions of the command output.

## Links

- [Website](https://passbolt.com)
- [Documentation](https://help.passbolt.com)
- [Github](https://github.com/passbolt/)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | passbolt
Domain | - | yes | 
App Service Image | - | yes | passbolt/passbolt:3.12.0-3-ce
Database Service Name | - | yes | passbolt-db

## Screenshots

![Passbolt Screenshot](./assets/screenshot.jpg)

## Change Log

- 2023-04-03 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
