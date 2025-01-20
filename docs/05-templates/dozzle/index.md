---
hide_title: true
sidebar_label: Dozzle
title: Dozzle | Self-Host on Easypanel
description: How to install Dozzle on Easypanel? 1-Click installation template for Dozzle on Easypanel
---

<!-- generated -->

# Dozzle

1-Click installation template for Dozzle on Easypanel

## Description

Dozzle is a lightweight, web-based Docker log viewer designed for real-time monitoring and easy troubleshooting. It allows you to view logs of other Docker containers in real-time, streaming new log entries to the web interface without the need for page refreshes. Despite its capabilities, Dozzle is a small application that consumes very little memory and CPU, ensuring it doesn&#39;t cause performance issues when run alongside other containers. It also supports connecting to multiple remote hosts, providing a simple drop-down menu to switch between different hosts. Dozzle doesn&#39;t store any log files and is solely for live monitoring of your container logs. It also features an intelligent fuzzy search for container names, regex log search, split screen for viewing multiple logs, and live stats with memory and CPU usage. It also provides authentication with a username and password for added security.

## Benefits

- Real-time Monitoring: Dozzle allows you to view logs of other Docker containers in real-time. As new log entries are generated, they are streamed to the web interface without needing to refresh the page.
- Lightweight Application: Dozzle is a lightweight application written in Go, consuming very little memory and CPU. It can be run alongside other containers without causing performance issues.
- Multi-host Support: Dozzle UI supports connecting to multiple remote hosts with a simple drop-down to choose between different hosts.

## Features

- Intelligent Fuzzy Search: Dozzle features an intelligent fuzzy search for container names, making it easier to find the logs you need.
- Regex Log Search: You can search logs using regex, providing a powerful tool for pinpointing specific log entries.
- Live Stats: Dozzle provides live stats with memory and CPU usage, giving you real-time insights into your Docker containers.
- Authentication: Dozzle supports authentication with a username and password, ensuring that only authorized users can access your Docker logs.

## Links

- [Website](https://dozzle.dev)
- [Github](https://github.com/amir20/dozzle)
- [Docker](https://hub.docker.com/r/amir20/dozzle)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/dozzle)

## Options

Name | Description | Required | Default Value
-|-|-|-
Username | - | no | 
Password | - | no | 
Log Level | - | yes | info
No Analytics | - | yes | false
App Service Name | - | yes | dozzle
App Service Image | - | yes | amir20/dozzle:v8.10.1

## Screenshots

![Dozzle Screenshot](./assets/screenshot1.png)
![Dozzle Screenshot](./assets/screenshot2.png)
![Dozzle Screenshot](./assets/screenshot3.png)

## Change Log

- 2023-07-11 – First Release
- 2024-10-04 – Version changed from latest to v8.5.5
- 2025-01-09 – Version bumped to v8.10.1

## Contributors

- [Berk Sümbül](https://berksmbl.com)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
