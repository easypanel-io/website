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

Paperless-ngx is a modern document management system designed to convert your physical documents into a searchable online archive, helping you maintain a clutter-free, paperless environment. It uses advanced OCR technology to add selectable text to image-only documents, and allows you to organize and index your scanned documents with tags, correspondents, types, and more. The app supports a variety of file formats including PDFs, images, plain text files, and Office documents. It also features a single-page application front end with a dashboard that displays basic statistics and allows document upload. With its full-text search functionality, you can easily find the documents you need, with results sorted by relevance to your search query. The app also includes email processing, enabling it to add documents from your email accounts. Moreover, Paperless-ngx is powered by machine learning, enabling it to learn from your documents and automatically assign tags, correspondents, and types to documents once you&#39;ve stored a few documents in it. It is optimized for multi-core systems, allowing it to process multiple documents in parallel.

## Instructions

Please use the following credentials to login. admin|password

## Benefits

- Efficient Document Management: Paperless-ngx is a document management system that transforms your physical documents into a searchable online archive, reducing the need for physical storage and making document retrieval easier and faster.
- Advanced Search Capabilities: With full text search, auto completion, and results sorted by relevance, Paperless-ngx makes it easy to find the documents you need. Highlighting shows you which parts of the document matched the query, and you can even search for similar documents.
- Email Processing: Paperless-ngx can add documents from your email accounts, allowing you to manage and archive important emails alongside your other documents. You can configure multiple accounts and filters for each account.
- Machine Learning Powered Document Matching: Paperless-ngx learns from your documents and can automatically assign tags, correspondents, and types to documents once you've stored a few documents in the system, saving you time and effort in document organization.

## Features

- Document Scanning and Indexing: Paperless-ngx allows you to organize and index your scanned documents with tags, correspondents, types, and more. It performs OCR on your documents, adds selectable text to image-only documents, and adds tags, correspondents, and document types to your documents.
- Support for Various Document Types: Paperless-ngx supports PDF documents, images, plain text files, and Office documents (Word, Excel, Powerpoint, and LibreOffice equivalents). Office document support is optional and provided by Apache Tika.
- Customizable Views: You can customize views in Paperless-ngx, save them, and display them on the dashboard. This allows you to tailor the system to your specific needs and preferences.
- Email Processing: When adding documents from mail, Paperless-ngx can move these mail to a new folder, mark them as read, flag them as important or delete them. This helps in managing your email documents efficiently.
- Sanity Checker: The integrated sanity checker in Paperless-ngx makes sure that your document archive is in good health, providing peace of mind and ensuring the integrity of your document archive.

## Links

- [Documentation](https://paperless-ngx.readthedocs.io/en/latest/)
- [Github](https://github.com/paperless-ngx/paperless-ngx)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/paperlessngx)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | paperlessngx
App Service Image | - | yes | paperlessngx/paperless-ngx:2.11.6
Redis Service Name | - | yes | paperlessngx-redis

## Screenshots

![Paperless-ngx Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-28 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
