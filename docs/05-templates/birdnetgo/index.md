---
hide_title: true
sidebar_label: BirdNET-Go
title: BirdNET-Go | Self-Host on Easypanel
description: How to install BirdNET-Go on Easypanel? 1-Click installation template for BirdNET-Go on Easypanel
---

<!-- generated -->

# BirdNET-Go

1-Click installation template for BirdNET-Go on Easypanel

## Description

BirdNET-Go is a real-time bird sound identification and monitoring system that uses advanced AI and machine learning to recognize bird species from audio recordings. It analyzes ambient sounds from microphones or audio files to identify and catalog bird species in your area. BirdNET-Go features automatic species detection with confidence scoring, location-based range filtering to show only birds likely in your region, real-time audio streaming, and comprehensive logging of all detected species. The application supports custom sensitivity settings, overlap detection for better accuracy, and can utilize XNNPACK acceleration for improved performance. Perfect for bird enthusiasts, ornithologists, researchers, and anyone interested in monitoring local bird populations and creating automated bird sound databases.

## Benefits

- Automated Bird Identification: AI-powered real-time identification of bird species from audio using advanced BirdNET machine learning models with high accuracy.
- Location-Aware Filtering: Configure your GPS coordinates to filter detections showing only bird species likely to be in your region, reducing false positives.
- Continuous Monitoring: 24/7 automated monitoring and logging of bird species in your area. Build comprehensive databases of local bird populations over time.

## Features

- Real-Time Audio Analysis: Process live audio streams from microphones or audio files to identify bird sounds in real-time with configurable sensitivity.
- Species Confidence Scoring: Each detection includes confidence scores and threshold filtering to ensure accurate species identification.
- Geographic Range Filtering: Location-based filtering shows only birds expected in your area based on latitude/longitude coordinates.
- Audio Streaming: HLS streaming support for live audio playback and monitoring of detected bird sounds through web interface.
- Detection Logging: Comprehensive logging and database of all detected species with timestamps, confidence scores, and audio clips.
- Customizable Settings: Adjust sensitivity, detection thresholds, audio overlap, and model parameters to optimize for your environment.

## Links

- [Github](https://github.com/tphakala/birdnet-go)
- [Docker Hub](https://github.com/tphakala/birdnet-go/pkgs/container/birdnet-go)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/birdnetgo)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | birdnetgo
App Service Image | - | yes | ghcr.io/tphakala/birdnet-go:nightly-20251028
Timezone | - | no | UTC
Latitude (Optional - for location filtering) | - | no | 
Longitude (Optional - for location filtering) | - | no | 
Locale (e.g., en-us) | - | no | en-us

## Screenshots

![BirdNET-Go Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-18 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
