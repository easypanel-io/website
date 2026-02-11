---
hide_title: true
sidebar_label: Loonflow
title: Loonflow | Self-Host on Easypanel
description: How to install Loonflow on Easypanel? 1-Click installation template for Loonflow on Easypanel
---

<!-- generated -->

# Loonflow

1-Click installation template for Loonflow on Easypanel

## Description

Loonflow is a comprehensive workflow management system that provides end-to-end workflow automation and process management capabilities. Built with Django and React, Loonflow offers a complete solution for designing, executing, and monitoring business workflows. The system consists of a PostgreSQL database for data persistence, Redis for task queue management, a Django backend API, a React frontend UI, and Celery workers for asynchronous task processing. Perfect for organizations looking to automate business processes and manage complex workflows with a self-hosted solution.

## Instructions

You can change the lanaguage by clicking the admin icon, click the first option, and then change it to American English in the dropdown.

## Benefits

- Workflow Automation: Design and execute complex business workflows with visual workflow designer and automated process execution.
- Self-Hosted Solution: Maintain complete control over your workflow data and processes with a self-hosted deployment.
- Scalable Architecture: Built with microservices architecture including separate backend, frontend, and task worker services for scalability.
- Task Queue Management: Redis-powered task queue with Celery workers for reliable asynchronous task processing and workflow execution.

## Features

- Workflow Designer: Visual workflow designer for creating and managing complex business processes with drag-and-drop interface.
- PostgreSQL Database: Reliable PostgreSQL database for persistent storage of workflow definitions, execution history, and system data.
- Redis Task Queue: Redis-based task queue for managing asynchronous workflow tasks and ensuring reliable task execution.
- Celery Workers: Dedicated Celery worker service for processing workflow tasks with configurable concurrency and queue management.
- Django Backend API: Robust Django REST API backend with automatic database migrations and superuser creation on startup.
- React Frontend UI: Modern React-based user interface for workflow management, monitoring, and administration.
- Multi-Tenant Support: Built-in multi-tenant support with configurable tenant names and domains for organizational isolation.

## Links

- [GitHub](https://github.com/blackholll/loonflow)
- [Documentation](https://loonflow.readthedocs.io/en/r3.0/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/loonflow)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | loonflow
Backend Image | - | yes | blackholll/loonflow-backend:r3.0.1
UI Image | - | yes | blackholll/loonflow-ui:r3.0.1
PostgreSQL Database Name | - | yes | loonflow
Admin Email | Email address for the Django superuser | yes | admin@example.com
Admin Name | Username for the Django superuser | yes | admin
Admin Password | Password for the Django superuser | yes | admin123
Tenant Name | Name of the tenant/organization | yes | Default Tenant

## Screenshots

![Loonflow Screenshot](./assets/screenshot.png)

## Change Log

- 2025-01-22 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
