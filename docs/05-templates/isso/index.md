---
hide_title: true
sidebar_label: Isso
title: Isso | Self-Host on Easypanel
description: How to install Isso on Easypanel? 1-Click installation template for Isso on Easypanel
---

<!-- generated -->

# Isso

1-Click installation template for Isso on Easypanel

## Description

Isso is a lightweight commenting server designed to be a seamless alternative to Disqus. It is written in Python and JavaScript, and it allows users to leave comments on your website in a simple and straightforward manner. The app supports anonymous comments, preserving the identity of your users, and is easy to manage. Users can write comments in Markdown, and they also have the ability to edit or delete their own comments within a default time frame of 15 minutes. The app uses a SQLite backend, ensuring that your comments are not treated as Big Data. Additionally, it offers Disqus and WordPress import features, allowing you to migrate your existing comments without any hassle. The app is easily integrated into your website by embedding a single JavaScript file.

## Instructions

Go to /admin for administration interface

## Benefits

- Lightweight Commenting Server: Isso is a lightweight commenting server that offers a simple and efficient way to manage comments on your website. It is designed to be a drop-in replacement for Disqus, providing a more streamlined and user-friendly experience.
- Maintains User Anonymity: Unlike other commenting systems, Isso allows for anonymous comments, ensuring the privacy of your website visitors. It maintains user identity without recording personal information like IP addresses or email.
- Easy Integration: Isso uses JavaScript and cross-origin resource sharing for easy integration into static websites. This makes it a versatile tool that can be used with a wide range of web platforms.

## Features

- Markdown Support: Isso supports comments written in Markdown, allowing users to format their comments in a way that is both easy to write and read.
- Comment Moderation: With Isso, comments in the moderation queue are not publicly visible before activation. This gives you control over what is displayed on your website.
- User Comment Management: Users can edit or delete their own comments within a default window of 15 minutes. This gives users the ability to correct or remove their comments as needed.
- Disqus & WordPress Import: Isso allows for easy migration of your Disqus or WordPress comments without any hassle. This makes transitioning to Isso a smooth process.
- SQLite Backend: Isso uses an SQLite backend, demonstrating that comments are not Big Data and can be managed efficiently and effectively.

## Links

- [Documentation](https://isso-comments.de/docs/)
- [Github](https://github.com/posativ/isso)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/isso)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | isso
App Service Image | - | yes | ghcr.io/isso-comments/isso:release
Admin Password | - | yes | 

## Screenshots

![Isso Screenshot](./assets/screenshot.png)

## Change Log

- 2023-2-9 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
