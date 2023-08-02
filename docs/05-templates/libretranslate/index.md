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

LibreTranslate is a free and open-source machine translation app that is entirely self-hosted. Unlike other translation apps, it does not rely on proprietary providers such as Google or Azure to perform translations. Instead, its translation engine is powered by the open-source Argos Translate library. LibreTranslate can translate text between different languages, auto-detect the language of the input text, and even handle HTML content. It provides a simple and intuitive interface for users to input the text they want to translate, select the source and target languages, and get the translated text. With LibreTranslate, you can enjoy a reliable, accurate, and privacy-friendly translation service right at your fingertips.

## Benefits

- Free and Open Source: LibreTranslate is a free and open source machine translation API, which means it is accessible to everyone and can be modified to suit individual needs.
- Self-Hosted: Unlike other APIs, LibreTranslate doesn't rely on proprietary providers such as Google or Azure to perform translations. It is entirely self-hosted, providing full control over data privacy and security.
- Powered by Argos Translate: LibreTranslate's translation engine is powered by the open source Argos Translate library, ensuring reliable and accurate translations.

## Features

- Simple Translation Requests: LibreTranslate allows users to easily translate text from one language to another. Simply input the text, specify the source and target languages, and the API will return the translated text.
- Auto Detect Language: LibreTranslate can automatically detect the language of the input text. This feature is especially useful when the source language is unknown.
- HTML Translation: LibreTranslate supports HTML translation. This means it can translate text within HTML code while preserving the original formatting and structure.

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
