---
hide_title: true
sidebar_label: GlitchTip
title: GlitchTip | Self-Host on Easypanel
description: How to install GlitchTip on Easypanel? 1-Click installation template for GlitchTip on Easypanel
---

<!-- generated -->

# GlitchTip

1-Click installation template for GlitchTip on Easypanel

## Description

GlitchTip is a simple, open-source error tracking application designed to collect, organize, and alert you about every error from your project in real time. It allows you to monitor your software&#39;s performance, track errors, and check your site&#39;s uptime all in one place. GlitchTip is compatible with Sentry client SDKs, offering a more straightforward operation. It provides a comprehensive error tracking system, reporting your website or application&#39;s exceptions, log messages, Content Security Policy violations, and more. With GlitchTip, you can also monitor your application&#39;s performance, identifying slow web requests, database calls, and other transactions. Additionally, it offers uptime monitoring, pinging your site and alerting you when it&#39;s not responding. GlitchTip is the perfect choice for those who value simplicity, affordability, and the freedom provided by open source.

## Instructions

To create an admin user, run the command ./manage.py createsuperuser

## Benefits

- Real-Time Error Tracking: GlitchTip collects every error from your project in real time, helping you to organize and make them useful. You can receive alerts when and where you want, ensuring you're always on top of any issues that arise.
- Affordable and Simple: GlitchTip is designed with simplicity and affordability in mind. It's an open-source solution that you can modify and use as you see fit, without breaking your budget.
- Performance Monitoring: With GlitchTip, you can monitor your application's performance and find out where your app is slow. It takes a simple, out of the box approach, helping you to identify your slowest web requests, database calls, and other transactions.
- Uptime Monitoring: GlitchTip can ping your site and warn you when it's not responding. It can also send you an alert via email or webhook if it doesn't receive your scheduled ping.

## Features

- Error Tracking: GlitchTip allows you to report your website or application's exceptions, log messages, Content Security Policy violations, and more to one place for triage and resolution.
- Application Performance Monitoring: GlitchTip provides a simple, out of the box approach to application performance monitoring. It helps you to identify your slowest web requests, database calls, and other transactions.
- Uptime Monitoring: GlitchTip can ping your site and warn you when it's not responding. It can also reverse this process and send GlitchTip a request on schedule. If GlitchTip doesn't receive your ping, it will send you an alert.

## Links

- [Website](https://glitchtip.com/)
- [Gitlab](https://gitlab.com/glitchtip)
- [Docker](https://hub.docker.com/r/glitchtip/glitchtip)
- [Documentation](https://glitchtip.com/documentation)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/glitchtip)

## Options

Name | Description | Required | Default Value
-|-|-|-
Enable User Registration | - | no | false
Enable Organization Creation | - | no | false
App Service Name | - | yes | glitchtip
App Service Image | - | yes | glitchtip/glitchtip:v4.2
Redis Service Name | - | yes | glitchtip-db
Redis Service Name | - | yes | glitchtip-redis

## Screenshots

![GlitchTip Screenshot](./assets/screenshot.png)

## Change Log

- 2023-04-06 – First Release
- 2024-10-09 – Version changed to v4.1.4
- 2025-01-14 – Version bumped to v4.2

## Contributors

- [Berk Sümbül](https://berksmbl.com)
