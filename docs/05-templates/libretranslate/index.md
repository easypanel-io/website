---
hide_title: true
sidebar_label: LibreTranslate
title: LibreTranslate | Self-Host on Easypanel
description: How to install LibreTranslate on Easypanel? 1-Click installation template for LibreTranslate on Easypanel
---

<!-- generated -->

# LibreTranslate

1-Click installation template for LibreTranslate on Easypanel

## Description

LibreTranslate is a free and open-source machine translation API that is entirely self-hosted. It does not rely on proprietary providers like Google or Azure for translations. Instead, it uses the open-source Argos Translate library as its translation engine.

## Benefits

- Free and Open Source: LibreTranslate is free to use and the source code is available for anyone to view, modify, and distribute.
- Self-Hosted: You can run your own instance of LibreTranslate on your server, giving you full control over your translation service.
- No Proprietary Providers: Unlike other translation APIs, LibreTranslate does not rely on proprietary providers like Google or Azure. It uses the open-source Argos Translate library as its translation engine.

## Features

- Simple API: LibreTranslate provides a simple API for translating text. You can make requests to the API using various programming languages.
- Auto Detect Language: LibreTranslate can automatically detect the language of the input text, making it easier to translate text without specifying the source language.
- HTML Translation: LibreTranslate supports translating HTML content, preserving the structure and formatting of the original text.

## Links

- [Documentation](https://github.com/LibreTranslate/LibreTranslate/blob/master/README.md)
- [Github](https://github.com/LibreTranslate/LibreTranslate)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/libretranslate)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | libretranslate
App Service Image | - | yes | libretranslate/libretranslate:latest
Character limit for each translation | - | yes | 5000
Rate request limit | - | yes | 500
Bach translation limit | - | yes | 100
Google Analytics | - | no | 
Translation suggestions | - | yes | false
Disable Web UI | - | yes | false

## Screenshots

![LibreTranslate Screenshot](./assets/screenshot.jpg)

## Change Log

- 2020-12-20 – first release

## Contributors

- [kaname-png](https://github.com/kaname-png)
