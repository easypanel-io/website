---
hide_title: true
sidebar_label: Statping-ng
title: Statping-ng | Self-Host on Easypanel
description: How to install Statping-ng on Easypanel? 1-Click installation template for Statping-ng on Easypanel
---

<!-- generated -->

# Statping-ng

1-Click installation template for Statping-ng on Easypanel

## Description

Statping is an easy-to-use status page and monitoring server for websites and applications. It automatically fetches the application and renders a beautiful status page with tons of features. It allows you to use MySQL, Postgres, or SQLite on multiple operating systems. Statping is lightweight, fast, and available for Linux, Mac, and Windows. It also has a mobile app for viewing services and receiving notifications. You can run Statping on any server, including Docker and AWS EC2. It supports custom SASS styling and integrates with Slack, email, Twilio, and more. Statping is highly customizable and allows you to create your own plugins and notifiers. It has an easy-to-use dashboard and includes a Prometheus Exporter for additional monitoring power. You can run Statping on an EC2 server using the AWS AMI image and create security groups for port 80 and 443. Statping accepts push requests to the dev branch and provides testing on MySQL, Postgres, and SQLite.

## Benefits

- Easy to use: Statping is designed to be user-friendly and easy to set up and use. It provides a straightforward dashboard and intuitive features.
- Future-proof: Statping is built to remain intact even in the event of a failure. It ensures that your status page remains online to notify users of downtime, even if your server crashes.
- No requirements: Statping is built in Go Language and only requires the precompiled binary based on your operating system. There is no need to install anything extra.
- Lightweight and fast: Statping is a lightweight application available for Linux, Mac, and Windows. The Docker image is only ~16Mb, ensuring it doesn't take up much hard drive space.
- Mobile app: Statping has a mobile app available on the App Store and Google Play. The app allows you to view services, receive notifications, and update groups, users, services, messages, and more.
- Run on any server: Statping provides multiple options for running on different servers, including Docker and AWS EC2. It offers flexibility and compatibility with various hosting environments.
- Customizable: Statping allows you to customize your status page using SASS styling with easy-to-use variables. It also supports custom plugins and notifiers for greater customization.
- Integration with Slack, email, Twilio, and more: Statping includes email notification via SMTP and Slack integration using Incoming Webhook. It supports integration with various communication channels for efficient status updates.

## Features

- Status page generator: Statping automatically fetches the application and generates a status page with various features.
- Support for multiple databases: Statping supports MySQL, Postgres, and SQLite on multiple operating systems.
- Framework for creating plugins: Statping is not just a status page, but also a framework that allows you to create your own plugins to interact with every element of your status page.
- Easy-to-use dashboard: Statping provides a straightforward dashboard for monitoring websites and applications with basic HTTP GET or POST requests.
- Docker support: Statping can be run using the Docker image, making it easy to set up a status page in seconds.
- Prometheus Exporter: Statping includes a Prometheus Exporter for additional monitoring power with services.
- AWS EC2 support: Statping can be run on AWS EC2 servers, providing a cost-effective way to host your own status page.
- Contribution-friendly: Statping accepts push requests to the dev branch, allowing users to contribute their own features and notifiers.

## Links

- [Website](https://github.com/statping/statping)
- [Documentation](https://github.com/statping/statping)
- [Github](https://github.com/statping/statping)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/statping-ng)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | statping-ng
App Service Image | - | yes | adamboutcher/statping-ng:v0.90.78
Database Type | - | yes | sqlite
Database Service Name | - | yes | statping-ng-db

## Screenshots

![Statping-ng Screenshot](./assets/screenshot.png)

## Change Log

- 2022-07-12 – first release

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
- [Andrei Canta](https://github.com/deiucanta)
