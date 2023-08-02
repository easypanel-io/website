---
hide_title: true
sidebar_label: Paperless-ngx
title: Paperless-ngx | Self-Host on Easypanel
description: How to install Paperless-ngx on Easypanel? 1-Click installation template for Paperless-ngx on Easypanel
---

<!-- generated -->

# Paperless-ngx

1-Click installation template for Paperless-ngx on Easypanel

## Description

Paperless-ngx is a document management system that transforms your physical documents into a searchable online archive. It allows you to organize and index your scanned documents with tags, correspondents, types, and more. It performs OCR on your documents, adds selectable text to image-only documents, and supports various file formats including PDF, images, plain text files, and Office documents. The app stores your documents plain on disk and provides a single-page application front end with a dashboard for basic statistics and document upload. It also offers full-text search, auto-completion, highlighting, and searching for similar documents. Paperless-ngx supports email processing, machine learning-powered document matching, and is optimized for multi-core systems. The app can be deployed using docker-compose or by manually installing the dependencies and setting up Apache and a database server. Paperless-ngx is available in multiple languages and welcomes contributions from the community. However, it should be run on a trusted host due to the lack of encryption for stored information.

## Instructions

Please use the following credentials to login. admin|password

## Benefits

- Reduce Paper Usage: Transform physical documents into a searchable online archive, reducing the need for paper.
- Organize and Index Documents: Tag, categorize, and index scanned documents for easy retrieval and management.
- OCR and File Format Support: Perform OCR on documents, add selectable text to image-only documents, and support various file formats including PDF, images, plain text files, and Office documents.
- Email Processing: Automatically add documents from email accounts, configure multiple accounts and filters, and perform actions on the emails such as moving, marking as read, flagging, or deleting.
- Machine Learning-Powered Document Matching: Learn from stored documents to automatically assign tags, correspondents, and types to new documents.
- Optimized for Multi-Core Systems: Efficiently process multiple documents in parallel, taking advantage of multi-core systems.

## Features

- Document Organization and Indexing: Organize and index scanned documents with tags, correspondents, types, and more.
- OCR and Text Extraction: Perform OCR on documents, add selectable text to image-only documents, and extract metadata.
- File Format Support: Support PDF documents, images, plain text files, and Office documents (Word, Excel, PowerPoint, and LibreOffice equivalents).
- Plain Text Storage: Store documents plain on disk with configurable filenames and folders managed by the app.
- Single-Page Application Front End: Access the app through a single-page application front end with a dashboard for basic statistics and document upload.
- Full-Text Search: Search for documents using full-text search, with auto-completion, relevance sorting, and highlighting of matched parts.
- Similar Document Search: Find similar documents based on content and metadata.
- Email Processing: Automatically add documents from email accounts, configure multiple accounts and filters, and perform actions on the emails.
- Machine Learning-Powered Document Matching: Learn from stored documents to automatically assign tags, correspondents, and types to new documents.
- Multi-Core Optimization: Efficiently process multiple documents in parallel, optimized for multi-core systems.
- Sanity Checker: Check the health of your document archive to ensure data integrity.

## Links

- [Documentation](https://paperless-ngx.readthedocs.io/en/latest/)
- [Github](https://github.com/paperless-ngx/paperless-ngx)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/paperlessngx)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | paperlessngx
App Service Image | - | yes | paperlessngx/paperless-ngx:1.11.3
Redis Service Name | - | yes | paperlessngx-redis

## Screenshots

![Paperless-ngx Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-28 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
