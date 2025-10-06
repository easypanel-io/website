---
hide_title: true
sidebar_label: Cap
title: Cap | Self-Host on Easypanel
description: How to install Cap on Easypanel? 1-Click installation template for Cap on Easypanel
---

<!-- generated -->

# Cap

1-Click installation template for Cap on Easypanel

## Description

Cap is an open source screen recording and sharing platform, providing a lightweight alternative to Loom. With Cap, you can create beautiful, shareable screen recordings with instant sharing capabilities or local recording with full editing features. It supports 4K recording, 60fps capture, and offers both cloud and self-hosted storage options. Perfect for creating tutorials, presentations, educational content, and team collaboration. Cap includes features like auto-generated captions, titles, summaries, chapters, and AI-powered transcriptions.

## Benefits

- Open Source Screen Recording: Cap is a fully open source alternative to Loom, giving you complete control over your screen recording infrastructure. Record, edit, and share videos without vendor lock-in.
- Professional Quality Output: Create high-quality screen recordings with 4K support, 60fps capture, and intelligent compression. Perfect for professional presentations, tutorials, and educational content.
- Self-Hosted Storage: Use your own S3-compatible storage with MinIO included in this template. Keep full control over your recordings and data with custom storage solutions.
- AI-Powered Features: Automatically generate titles, summaries, clickable chapters, and transcriptions for every recording using Cap's built-in AI features.

## Features

- Instant Sharing: Hit record, stop, and instantly share a link. Your video goes live in seconds with automatically generated captions, titles, and summaries.
- Studio Mode: Record locally with full editing capabilities for maximum quality control. Perfect for detailed tutorials and professional content creation.
- Cross-Platform Recording: Native support for recording across different platforms with consistent quality and performance. Works seamlessly with your existing workflow.
- Team Collaboration: Share recordings with your team for feedback, collaboration, and async communication. Replace meetings with shareable screen recordings.
- Custom Storage Integration: Connect your own S3 bucket or use the included MinIO storage. Perfect for teams with compliance requirements or data sovereignty needs.
- Privacy Controls: Choose between instant sharing and local recording. Password protect sensitive recordings or keep everything local-only for maximum privacy.

## Links

- [Website](https://cap.so/)
- [GitHub](https://github.com/capsoftware/cap)
- [Documentation](https://cap.so/docs)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/cap)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | cap-web
App Service Image | - | yes | ghcr.io/capsoftware/cap-web:latest
MinIO Service Image | - | yes | bitnami/minio:latest
MinIO Access Key | - | yes | capS3root
MinIO Secret Key | - | yes | capS3root
S3 Bucket Name | (Optional) can be configured later | no | capso
S3 Region | (Optional) can be configured later | no | us-east-1

## Screenshots


## Change Log

- 2025-07-29 – first release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
