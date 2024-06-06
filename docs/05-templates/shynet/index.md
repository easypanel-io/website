---
hide_title: true
sidebar_label: Shynet
title: Shynet | Self-Host on Easypanel
description: How to install Shynet on Easypanel? 1-Click installation template for Shynet on Easypanel
---

<!-- generated -->

# Shynet

1-Click installation template for Shynet on Easypanel

## Description

Shynet is a powerful, open-source analytics tool designed to provide you with clear, comprehensive insights about your website&#39;s traffic and user behavior. Unlike traditional analytics platforms, Shynet respects user privacy and does not track individual users across websites. Instead, it focuses on providing aggregate data and trends, helping you understand how users interact with your website as a whole. Shynet offers a range of features including real-time analytics, session tracking, and primary key integration. It also supports single-page applications, ensuring you get accurate data even when users navigate between pages within your application. With Shynet, you can easily create and manage multiple services, each with its own unique tracking script. The app also offers an API, allowing you to access all the information displayed on the dashboard programmatically. Whether you&#39;re a small business owner, a web developer, or a data analyst, Shynet provides you with the tools you need to make informed decisions about your website.

## Instructions

Open a console session and run ./manage.py createsuperuser to create your administrator account

## Benefits

- Real-time Analytics: Shynet provides real-time analytics, allowing you to monitor your website's traffic and user behavior in real time. This can help you make informed decisions and take immediate action based on the latest data.
- Privacy-Focused: Shynet respects user privacy by design. It does not use cookies or collect personally identifiable information. This makes it a great choice for businesses that value user privacy and want to comply with data protection regulations.
- Detailed Insights: With Shynet, you can gain detailed insights into your website's performance and user behavior. It provides comprehensive data on page views, sessions, and more, helping you understand your audience better.

## Features

- Easy Deployment: Shynet can be easily deployed using Docker, making it a convenient solution for businesses of all sizes. It supports both PostgreSQL and SQLite databases, giving you flexibility in your setup.
- Admin User Creation: Shynet allows you to create an admin user with a temporary password, providing secure access to your analytics dashboard.
- Customizable Whitelabel: You can customize the whitelabel of your Shynet instance, allowing you to rename it according to your preference.
- Service Creation and Tracking: Shynet enables you to create a service and generate a tracking script code. By injecting this script on your web pages, you can start tracking user behavior and collecting analytics data.
- API Access: Shynet provides API access to all the information displayed on the dashboard. This allows you to integrate Shynet's data with other systems or applications for further analysis and reporting.

## Links

- [Documentation](https://github.com/milesmcc/shynet/blob/master/GUIDE.md)
- [Github](https://github.com/milesmcc/shynet/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/shynet)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | shynet
App Service Image | - | yes | milesmcc/shynet:v0.13.1
Database Service Name | - | yes | shynet-db

## Screenshots

![Shynet Screenshot](./assets/screenshot.png)

## Change Log

- 2023-3-20 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
