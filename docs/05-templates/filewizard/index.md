---
hide_title: true
sidebar_label: FileWizard
title: FileWizard | Self-Host on Easypanel
description: How to install FileWizard on Easypanel? 1-Click installation template for FileWizard on Easypanel
---

<!-- generated -->

# FileWizard

1-Click installation template for FileWizard on Easypanel

## Description

FileWizard is a self hosted browser based utility for file conversion OCR and audio transcription. It wraps FFmpeg LibreOffice Pandoc ImageMagick faster-whisper Tesseract and more behind a FastAPI backend and a simple web UI.

## Instructions

After deploy open your domain on port 8000. For local trusted use keep Local only enabled. To use OIDC authentication set Local only to false then add OAuth settings in settings.yml.

## Benefits

- Many Conversion Pipelines: Convert documents media and images using well known CLI tools configured from the UI and settings file.
- OCR and Transcription: Run Tesseract OCR and Whisper style transcription for local speech to text workflows.
- Self Hosted Control: Keep files on your own storage volumes with a straightforward Docker image from the upstream maintainers.

## Features

- Format Conversion: Broad format support through LibreOffice Pandoc FFmpeg Ghostscript and related tools.
- Job History: Background jobs with status updates and persistent history in the app.
- Configurable Tools: Extend or tune conversions using settings.yml in the mounted config volume.

## Links

- [Documentation](https://github.com/LoredCast/filewizard/wiki)
- [GitHub](https://github.com/LoredCast/filewizard)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/filewizard)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | filewizard
App Service Image | - | yes | loredcast/filewizard:0.4-latest
Local Only (disable for OIDC) | - | no | true
Download Kokoro on Startup | - | no | true
OMP Threads | - | no | 1
Transcription Device (optional) | cpu or cuda when using a GPU image | no | 
Transcription Compute Type (optional) | e.g. int8 float16 int8_float16 for GPU builds | no | 
Transcription Device Index (optional) | GPU index when multiple devices are available | no | 

## Screenshots

![FileWizard Screenshot](./assets/screenshot.png)

## Change Log

- 2026-04-03 – Initial Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
