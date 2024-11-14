---
hide_title: true
sidebar_label: Prometheus
title: Prometheus | Self-Host on Easypanel
description: How to install Prometheus on Easypanel? 1-Click installation template for Prometheus on Easypanel
---

<!-- generated -->

# Prometheus

1-Click installation template for Prometheus on Easypanel

## Description

Prometheus is an open-source monitoring and alerting toolkit designed for reliability and scalability. It collects metrics from configured targets at specified intervals, evaluates rule expressions, and triggers alerts when specified conditions are observed. Prometheus stores all data as time-series, making it ideal for monitoring application and system performance over time. Its powerful query language, PromQL, allows for real-time data analysis, and its flexible integrations support various exporters and service discovery mechanisms. Prometheus can also integrate with alerting tools like Alertmanager to send notifications via email, Slack, or other channels. With native support for Docker, Kubernetes, and other container platforms, Prometheus provides deep visibility into modern infrastructure and services.

## Benefits

- Scalable Monitoring: Prometheus excels at monitoring large-scale systems by collecting metrics from distributed applications and systems, making it a powerful tool for cloud-native environments.
- Time-Series Data Storage: Prometheus stores all data as time-series metrics, enabling detailed historical analysis of system behavior and trends.
- Flexible Alerting: With integrated support for Alertmanager, Prometheus can send alerts through various channels like email, Slack, and PagerDuty when issues arise.
- Powerful Querying with PromQL: Prometheus includes a flexible and powerful query language, PromQL, for analyzing time-series data in real-time, enabling deep insights into system performance.
- Service Discovery: Prometheus supports various service discovery mechanisms (including Kubernetes, Consul, and DNS) to automatically track and monitor dynamic environments.

## Features

- Metric Collection: Prometheus scrapes metrics from a wide range of targets, storing them as time-series data for analysis and alerting.
- Custom Dashboards: Use Prometheus with tools like Grafana to create detailed custom dashboards for visualizing metrics and performance data.
- Alerting: Set up alerts using Alertmanager to get notified via various channels like email, Slack, or PagerDuty when specific conditions are met.
- PromQL Query Language: Leverage PromQL, a powerful query language, to extract and analyze time-series data in real time.
- Container and Cloud Integration: Prometheus integrates seamlessly with Docker, Kubernetes, and other cloud-native platforms to monitor microservices, containers, and distributed systems.
- Exporters: Utilize Prometheus exporters to collect metrics from various applications, databases, and system components, expanding Prometheus' monitoring capabilities.

## Links

- [Github](https://github.com/prometheus/prometheus)
- [Documentation](https://prometheus.io/docs/introduction/overview/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/promethus)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | prometheus
App Service Image | - | yes | prom/prometheus:v2.55.0

## Screenshots

![Prometheus Screenshot](./assets/screenshot.png)

## Change Log

- 2024-10-13 – Initial Prometheus release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
