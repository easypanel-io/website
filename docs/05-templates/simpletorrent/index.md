---
hide_title: true
sidebar_label: SimpleTorrent
title: SimpleTorrent | Self-Host on Easypanel
description: How to install SimpleTorrent on Easypanel? 1-Click installation template for SimpleTorrent on Easypanel
---

<!-- generated -->

# SimpleTorrent

1-Click installation template for SimpleTorrent on Easypanel

## Description

SimpleTorrent is a self-hosted remote torrent client written in Go. It allows users to start torrents remotely and download sets of files on the local disk of the server. The downloaded files can be retrieved or streamed via HTTP.

## Benefits

- Individual file download control: Users have control over which files within a torrent they want to download.
- Run external program on task completion: Users can specify an external program to run when a torrent download is completed.
- Seeding ratio control: Users can set a seeding ratio for a torrent, and the task will automatically stop when the ratio is reached.
- Download/Upload speed limiter: Users can limit the download and upload speeds of torrent downloads.
- Detailed transfer stats: The web UI provides detailed transfer statistics for each torrent download.
- Torrent Watcher: SimpleTorrent includes a Torrent Watcher feature that monitors a directory for new torrent files and automatically starts downloading them.
- K8s/docker health-check endpoint: SimpleTorrent provides a health-check endpoint for Kubernetes or Docker deployments.
- Extra trackers from external source: Users can add extra trackers to a torrent from an external source.
- Protocol Handler to magnet: SimpleTorrent supports magnet links and provides a protocol handler for easy integration with other applications.
- RSS subscribing supported: Users can subscribe to RSS feeds and automatically start downloading torrents based on the feed items.
- Flexible config file: SimpleTorrent accepts multiple formats for the config file, including JSON, YAML, and TOML.
- Single binary: SimpleTorrent is distributed as a single binary file, making it easy to install and run.
- Cross platform: SimpleTorrent is compatible with multiple operating systems, including Linux, Windows, and macOS.
- Embedded torrent search: SimpleTorrent includes an embedded torrent search feature, allowing users to search for torrents directly within the application.
- Real-time updates: The web UI provides real-time updates for torrent downloads, including progress, speed, and status.
- Mobile-friendly: The web UI is designed to be mobile-friendly, allowing users to manage torrent downloads from their mobile devices.
- Fast content server: SimpleTorrent includes a fast content server for serving downloaded files over HTTP.
- IPv6 out of the box: SimpleTorrent has built-in support for IPv6, making it compatible with IPv6 networks.
- Updated torrent engine: SimpleTorrent uses an updated torrent engine for improved performance and stability.

## Features

- Individual file download control: Users have control over which files within a torrent they want to download.
- Run external program on task completion: Users can specify an external program to run when a torrent download is completed.
- Seeding ratio control: Users can set a seeding ratio for a torrent, and the task will automatically stop when the ratio is reached.
- Download/Upload speed limiter: Users can limit the download and upload speeds of torrent downloads.
- Detailed transfer stats: The web UI provides detailed transfer statistics for each torrent download.
- Torrent Watcher: SimpleTorrent includes a Torrent Watcher feature that monitors a directory for new torrent files and automatically starts downloading them.
- K8s/docker health-check endpoint: SimpleTorrent provides a health-check endpoint for Kubernetes or Docker deployments.
- Extra trackers from external source: Users can add extra trackers to a torrent from an external source.
- Protocol Handler to magnet: SimpleTorrent supports magnet links and provides a protocol handler for easy integration with other applications.
- RSS subscribing supported: Users can subscribe to RSS feeds and automatically start downloading torrents based on the feed items.
- Flexible config file: SimpleTorrent accepts multiple formats for the config file, including JSON, YAML, and TOML.
- Single binary: SimpleTorrent is distributed as a single binary file, making it easy to install and run.
- Cross platform: SimpleTorrent is compatible with multiple operating systems, including Linux, Windows, and macOS.
- Embedded torrent search: SimpleTorrent includes an embedded torrent search feature, allowing users to search for torrents directly within the application.
- Real-time updates: The web UI provides real-time updates for torrent downloads, including progress, speed, and status.
- Mobile-friendly: The web UI is designed to be mobile-friendly, allowing users to manage torrent downloads from their mobile devices.
- Fast content server: SimpleTorrent includes a fast content server for serving downloaded files over HTTP.
- IPv6 out of the box: SimpleTorrent has built-in support for IPv6, making it compatible with IPv6 networks.
- Updated torrent engine: SimpleTorrent uses an updated torrent engine for improved performance and stability.

## Links

- [Documentation](https://github.com/boypt/simple-torrent/wiki)
- [Github](https://github.com/boypt/simple-torrent)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/simpletorrent)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | simpletorrent
App Service Image | - | yes | boypt/cloud-torrent:1.3.9

## Screenshots

![SimpleTorrent Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-28 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
