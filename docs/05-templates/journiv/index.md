---
hide_title: true
sidebar_label: Journiv
title: Journiv | Self-Host on Easypanel
description: How to install Journiv on Easypanel? 1-Click installation template for Journiv on Easypanel
---

<!-- generated -->

# Journiv

1-Click installation template for Journiv on Easypanel

## Description

Journiv is a self-hosted journaling and note-taking application designed for personal reflection and documentation. The application provides a secure, private platform for writing and organizing your thoughts, experiences, and memories. Built with a modern web interface, Journiv offers features for creating journal entries, organizing content with tags and categories, and searching through your journal history. The application uses SQLite for lightweight data storage, Redis for caching and background task processing, and Celery for asynchronous operations. With support for rich text editing, file attachments, and export capabilities, Journiv helps you maintain a comprehensive digital journal. The platform prioritizes privacy and data ownership, ensuring all your journal entries remain on your own infrastructure. Perfect for individuals who want a private journaling solution, writers maintaining personal writing projects, users seeking a self-hosted alternative to cloud-based note-taking services, or anyone who values complete control over their personal reflections and memories.

## Benefits

- Private Journaling: Keep your personal thoughts and reflections completely private on your own infrastructure without cloud storage concerns.
- Rich Text Editing: Create detailed journal entries with rich text formatting, images, and attachments for comprehensive documentation.
- Search & Organization: Find entries quickly with powerful search capabilities and organize content with tags and categories.
- Self-Hosted Control: Complete ownership of your journal data with no reliance on third-party services or cloud providers.

## Features

- Journal Entries: Create, edit, and manage journal entries with rich text support for detailed personal documentation.
- Tagging System: Organize entries with tags and categories for easy navigation and content discovery.
- Search Functionality: Powerful search capabilities to quickly find specific entries or topics across your entire journal.
- File Attachments: Attach images, documents, and other files to journal entries for complete context.
- Export Capabilities: Export your journal entries in various formats for backup or migration purposes.
- Background Processing: Celery worker handles background tasks and asynchronous operations for improved performance.
- Redis Caching: Redis integration provides fast caching and task queue management for responsive user experience.
- SQLite Storage: Lightweight SQLite database for simple deployment without requiring external database services.

## Links

- [Website](https://journiv.com)
- [Docker Hub](https://hub.docker.com/r/swalabtech/journiv-app)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/journiv)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | journiv
App Service Image | - | yes | swalabtech/journiv-app:latest

## Screenshots

![Journiv Screenshot](./assets/screenshot.png)

## Change Log

- 2025-12-16 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
