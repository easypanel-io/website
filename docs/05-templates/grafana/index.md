---
hide_title: true
sidebar_label: Grafana
title: Grafana | Self-Host on Easypanel
description: How to install Grafana on Easypanel? 1-Click installation template for Grafana on Easypanel
---

<!-- generated -->

# Grafana

1-Click installation template for Grafana on Easypanel

## Description

Grafana is a powerful, open-source platform designed to provide comprehensive metrics, logs, and trace data visualization. It allows users to query, visualize, and alert on their data, offering high-scale distributed tracing and scalable, performant metrics. The app also includes features for incident response and management, performance testing, and on-call management. Grafana can connect to various data sources and applications, providing operational dashboards for your data anywhere. It also offers a free forever plan, allowing users to monitor their data with 10,000 series metrics, 50 GB of logs, 50 GB of traces, and 500 VUh of k6 testing. Grafana is a versatile tool for anyone looking to gain insights from their data.

## Instructions

Login with admin:admin

## Benefits

- Comprehensive Data Visualization: Grafana provides a powerful platform for visualizing your data, making it easy to understand and analyze. It supports a wide range of data sources, allowing you to bring together all your data in one place.
- Effective Incident Response & Management: With Grafana Alerting, Grafana Incident, and Grafana OnCall, you can effectively manage incidents and respond quickly to issues. This ensures that your systems remain up and running, minimizing downtime and disruption.
- Performance Testing: Grafana k6 allows you to conduct performance testing, ensuring that your systems are capable of handling the demands placed on them. This helps to prevent issues before they occur, improving the reliability of your systems.

## Features

- Grafana Loki: A multi-tenant log aggregation system that allows you to easily manage and analyze your logs.
- Grafana Tempo: A high-scale distributed tracing backend that provides detailed insights into your systems.
- Grafana Mimir: A scalable and performant metrics backend that allows you to effectively monitor your systems.
- Grafana OnCall: An on-call management feature that ensures you can quickly respond to incidents and issues.
- Grafana k6: A load testing tool for engineering teams that helps ensure your systems can handle the demands placed on them.
- Prometheus: A powerful tool for monitoring Kubernetes and cloud native systems, providing detailed insights and metrics.

## Links

- [Website](https://grafana.com)
- [Documentation](https://grafana.com/docs)
- [Github](https://github.com/grafana/grafana)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/grafana)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | grafana
App Service Image | - | yes | grafana/grafana-oss:11.4.0

## Screenshots

![Grafana Screenshot](./assets/screenshot.jpg)

## Change Log

- 2023-3-15 – first release
- 2024-10-09 – Version changed to 11.2.2
- 2025-01-14 – Version bumped to 11.4.0

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
