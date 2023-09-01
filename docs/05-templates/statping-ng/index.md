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

Statping is a web and app status monitoring tool designed for any type of project. It automatically fetches your application and generates a beautiful, feature-rich status page. This status page generator supports MySQL, Postgres, or SQLite on multiple operating systems, ensuring future-proof and resilient monitoring. If your server crashes, your Statping service will remain online to notify your users of downtime. Lightweight and fast, Statping is available for Linux, Mac, and Windows, and even on a Raspberry Pi. The mobile app, available on the App Store and Google Play, allows you to view services, receive notifications when a service is offline, and manage groups, users, services, and messages. Statping can run on any server, from Docker to AWS EC2, and offers custom SASS styling for complete customization of your status page. It includes email notification via SMTP and Slack integration, and allows you to create your own plugins to interact with every element of your status page. With its easy-to-use dashboard, you can monitor your websites and applications with a basic HTTP GET request or a POST request with your own JSON.

## Benefits

- Future-Proof Status Page: Statping is designed to remain future-proof and intact even in the event of a failure. It ensures that your status page remains online to notify your users of downtime, even if your server crashes.
- Lightweight and Fast: Statping is a very lightweight application, ensuring that it won't be filling up your hard drive space. It is available for Linux, Mac, and Windows, and even runs on a Raspberry Pi.
- Cost-Effective Hosting: Statping offers multiple options for hosting your status page. It can run on any server, including AWS EC2, which might be the most cost-effective way to host your own Statping Status Page.
- Customizable Styling: Statping allows you to completely customize your Status Page using SASS styling with easy-to-use variables.
- Notification Integration: Statping includes email notification via SMTP and Slack integration using Incoming Webhook. Anytime a service fails, your specified Slack channel will receive a message.

## Features

- Status Page & Monitoring Server: Statping provides an easy-to-use Status Page for your websites and applications. It automatically fetches the application and renders a beautiful status page with tons of features.
- Mobile App: The Statping app, available on the App Store and Google Play, allows you to view services, receive notifications when a service is offline, update groups, users, services, messages, and more.
- User Created Notifiers: Statping is not just another Status Page for your applications, it's a framework that allows you to create your own plugins to interact with every element of your status page.
- Easy-to-use Dashboard: Statping provides a straightforward dashboard for monitoring your websites and applications with a basic HTTP GET request, or add a POST request with your own JSON to post to the endpoint.
- Prometheus Exporter: Statping includes a Prometheus Exporter so you can have even more monitoring power with your services.

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
