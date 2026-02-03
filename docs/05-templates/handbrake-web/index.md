---
hide_title: true
sidebar_label: Handbrake Web
title: Handbrake Web | Self-Host on Easypanel
description: How to install Handbrake Web on Easypanel? 1-Click installation template for Handbrake Web on Easypanel
---

<!-- generated -->

# Handbrake Web

1-Click installation template for Handbrake Web on Easypanel

## Description

Handbrake Web is a self-hosted video transcoding solution that provides a web-based interface for managing and processing video encoding jobs using the powerful HandBrake video transcoder. The application features a distributed architecture with a central server for job management and dedicated workers for processing, allowing you to scale encoding capacity by adding more workers. The web interface enables you to upload videos, configure encoding presets, monitor job progress, and manage your transcoding queue from any browser. Handbrake Web supports all the encoding formats and options available in HandBrake, including H.264, H.265/HEVC, VP9, and AV1 codecs, as well as various container formats like MP4, MKV, and WebM. The worker-based architecture allows for parallel processing of multiple videos and can leverage hardware acceleration when available. Perfect for media enthusiasts who need to convert video collections to different formats, content creators preparing videos for multiple platforms, home server administrators managing media libraries, or anyone who needs a reliable self-hosted solution for batch video transcoding without installing desktop applications.

## Benefits

- Web-Based Transcoding: Manage all your video encoding jobs through an intuitive web interface accessible from any browser without installing desktop software.
- Distributed Processing: Scale your encoding capacity by deploying multiple workers that process jobs in parallel from a central queue.
- HandBrake Power: Access all HandBrake encoding options including modern codecs like H.265, VP9, and AV1 with full preset customization.
- Self-Hosted Control: Keep your video files private on your own infrastructure without uploading to third-party cloud transcoding services.

## Features

- Job Queue Management: Submit, prioritize, pause, and monitor video encoding jobs through the centralized web interface.
- Multiple Workers: Deploy multiple worker containers to process encoding jobs in parallel and speed up large batch operations.
- Encoding Presets: Use built-in presets or create custom encoding profiles for consistent output across all your videos.
- Format Support: Support for modern video codecs including H.264, H.265/HEVC, VP9, AV1 and containers like MP4, MKV, WebM.
- Progress Monitoring: Real-time progress tracking for all encoding jobs with estimated time remaining and detailed status information.
- Hardware Acceleration: Leverage GPU hardware encoding when available for significantly faster transcoding performance.
- Batch Processing: Queue multiple videos for encoding and let workers process them automatically without manual intervention.
- Shared Storage: Workers and server share the same media volume ensuring seamless access to input files and encoded outputs.

## Links

- [GitHub](https://github.com/TheNickOfTime/handbrake-web)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/handbrake-web)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | handbrake-web
Server Image | - | yes | ghcr.io/thenickoftime/handbrake-web-server:latest
Worker Image | - | no | ghcr.io/thenickoftime/handbrake-web-worker:latest
Worker ID | - | no | worker-1

## Screenshots

![Handbrake Web Screenshot](./assets/screenshot.png)

## Change Log

- 2025-12-11 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
