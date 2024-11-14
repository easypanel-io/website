---
hide_title: true
sidebar_label: Weblate
title: Weblate | Self-Host on Easypanel
description: How to install Weblate on Easypanel? 1-Click installation template for Weblate on Easypanel
---

<!-- generated -->

# Weblate

1-Click installation template for Weblate on Easypanel

## Description

Weblate is a powerful, web-based continuous localization system. It is designed to simplify the process of translating text from one language to another, making it an invaluable tool for projects and companies operating in multiple countries. With Weblate, users can easily translate using the platform, download and upload translations, and even integrate with version control systems for seamless workflow. The app supports a wide range of file formats, and it also provides a REST API and Python API for further flexibility. Weblate also offers features like automatic suggestions, translation memory, and various checks and fixups to ensure high-quality translations. Whether you&#39;re starting with internationalization or managing an established translators community, Weblate has the features to support your translation needs.

## Instructions

Please use the following credentials to login. changeme@easypanel.io|changeme

## Benefits

- Efficient Localization: Weblate is a web-based continuous localization system that allows you to easily translate and manage your software projects. With Weblate, you can streamline the localization process and ensure that your app is available in multiple languages.
- Collaborative Translation: Weblate enables collaboration among translators, making it easy for multiple contributors to work on translations simultaneously. This helps to speed up the translation process and ensures high-quality translations.
- Version Control Integration: Weblate seamlessly integrates with version control systems like Git, allowing you to manage translations directly from your code repository. This simplifies the workflow and ensures that translations are always in sync with the latest code changes.

## Features

- Web-Based Interface: Weblate provides a user-friendly web-based interface that allows you to easily manage your translation projects. You can add new languages, import and export translations, and track the progress of translations.
- Glossary and Translation Memory: Weblate includes features like glossary and translation memory, which help to improve translation consistency and efficiency. The glossary allows you to define and manage a list of terms and their translations, while the translation memory suggests previously translated segments for reuse.
- Automatic Checks and Fixups: Weblate automatically checks translations for common errors and inconsistencies, such as missing placeholders or incorrect formatting. It also provides fixup suggestions to help translators correct these issues quickly.

## Links

- [Documentation](https://docs.weblate.org/en/latest/index.html)
- [Github](https://github.com/WeblateOrg/weblate)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/weblate)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | weblate
App Service Image | - | yes | weblate/weblate:5.8.3.0
Database Service Name | - | yes | weblate-db
Redis Service Name | - | yes | weblate-redis
No Reply Email | - | yes | 
Email Host | - | yes | 
Email Username | - | yes | 
Email Password | - | yes | 

## Screenshots

![Weblate Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-23 – first release
- 2023-03-22 – Update to v4.16

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
