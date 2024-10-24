---
hide_title: true
sidebar_label: MailCrab
title: MailCrab | Self-Host on Easypanel
description: How to install MailCrab on Easypanel? 1-Click installation template for MailCrab on Easypanel
---

<!-- generated -->

# MailCrab

1-Click installation template for MailCrab on Easypanel

## Description

MailCrab is an email test server designed for development purposes. It is an accept-all SMTP server that provides a web interface for viewing and inspecting all incoming emails. You can view formatted mail, download attachments, view headers, or view the complete raw mail contents. The app runs on all amd64 and arm64 platforms using docker. The backend server and the frontend of the app are both written in Rust. The backend receives email over an unencrypted connection on a configurable port, and all email is stored in memory while the application is running. The frontend initially performs a call to receive all existing email metadata and then subscribes for new messages using the websocket connection. When opening a message, the endpoint is used to retrieve the complete message body and raw email. The backend also accepts a few commands over the websocket, to mark a message as opened, to delete a single message or delete all messages.

## Benefits

- Efficient Email Testing: MailCrab is an email test server that allows developers to efficiently test their email functionalities during development. It accepts all SMTP server emails, making it a versatile tool for various email testing scenarios.
- Comprehensive Email Inspection: With MailCrab, you can view and inspect all incoming emails in a user-friendly web interface. It allows you to view formatted mail, download attachments, view headers, or see the complete raw mail contents, providing a comprehensive overview of your email tests.
- Lightweight and Versatile: MailCrab is a lightweight app, with just a 7.77 MB docker image, making it easy to deploy and run. It is also versatile, running on all amd64 and arm64 platforms using docker.

## Features

- Accept-all SMTP Server: MailCrab operates as an accept-all SMTP server, allowing you to test a wide range of email functionalities.
- Web Interface: The app provides a web interface where you can view and inspect all incoming emails, offering a user-friendly way to manage your email tests.
- Email Inspection Tools: MailCrab offers tools to view formatted mail, download attachments, view headers, or see the complete raw mail contents, giving you a detailed insight into your email tests.
- Cross-Platform Compatibility: MailCrab is compatible with all amd64 and arm64 platforms using docker, making it a versatile tool for various development environments.

## Links

- [Github](https://github.com/tweedegolf/mailcrab)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mailcrab)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mailcrab
App Service Image | - | yes | marlonb/mailcrab:v1.3.0

## Screenshots

![MailCrab Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-5 – first release
- 2024-10-18 – Updated version to 1.3.0

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
