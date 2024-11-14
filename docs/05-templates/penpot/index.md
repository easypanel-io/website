---
hide_title: true
sidebar_label: Penpot
title: Penpot | Self-Host on Easypanel
description: How to install Penpot on Easypanel? 1-Click installation template for Penpot on Easypanel
---

<!-- generated -->

# Penpot

1-Click installation template for Penpot on Easypanel

## Description

Penpot is an open-source, design and prototyping platform that empowers teams to collaborate and bring creative ideas to life. Unlike other design tools, Penpot is entirely web-based and runs on open standards, allowing teams to access it from anywhere and on any platform. Trusted by designers and developers worldwide, Penpot is known for its flexibility and integration within diverse workflows. It offers real-time collaboration, making it easy for team members to co-create, review, and provide feedback instantly. The app supports complex design requirements, from vector editing to responsive design, and prioritizes user control over projects with extensive customization options. Penpot is built by a team dedicated to privacy and security, with a strong commitment to open-source principles. It ensures that designers and developers alike have the freedom to innovate without restrictions, providing a transparent, community-driven alternative to proprietary tools.

## Instructions

In order to configure email invitations for team members, please configure the environment variables provided in backend configuration.

## Benefits

- Open Source and Transparent: Penpot is fully open source, making it a transparent tool for design and prototyping. As an open-source project, it invites the community to contribute, improve, and verify its reliability and security.
- Collaboration-First Design: Penpot is built from the ground up for teamwork, allowing designers, developers, and stakeholders to collaborate in real-time. It’s ideal for organizations and teams that require a seamless design process with effective communication and instant feedback.
- Cross-Platform Accessibility: Penpot runs on web-based, open standards, making it accessible across all platforms. It ensures that designers and developers can access their work from any device without being tied to proprietary software or specific operating systems.

## Features

- Real-Time Collaboration and Feedback: Penpot enables real-time collaboration, allowing team members to co-create, review, and provide feedback on designs instantly. This feature streamlines the workflow and enhances team productivity.
- Responsive and Flexible Design Tools: Penpot offers advanced tools for vector editing, responsive design, and complex layouts, giving designers the flexibility they need to create beautiful and functional designs.
- Integration with Developer Workflows: Penpot is designed to integrate seamlessly with developer workflows, making hand-offs easier and faster. It bridges the gap between designers and developers, helping teams work together more effectively.
- Community-Driven Development: As a community-driven project, Penpot grows through user feedback and contributions. This means new features, improvements, and bug fixes are continuously shaped by the needs of its users.

## Links

- [Website](https://penpot.app)
- [Documentation](https://help.penpot.app)
- [Github](https://github.com/penpot)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/penpot)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | penpot
App Service Image | - | yes | penpotapp/frontend:2.3.1
App Backend Service Image | - | yes | penpotapp/backend:2.3.1
App Exporter Service Image | - | yes | penpotapp/exporter:2.3.1
Redis Service Name | - | yes | penpot-redis
Database Service Name | - | yes | penpot-db

## Screenshots

![Penpot Screenshot](./assets/screenshot.png)

## Change Log

- 2024-11-08 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
