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

SimpleTorrent is a self-hosted remote torrent client that allows you to manage your torrents remotely. Written in Go (golang), it enables you to start torrents remotely and download sets of files on the local disk of the server. These files are then retrievable or streamable via HTTP. The app offers individual file download control, the ability to run an external program on task completion, and a seeding ratio to stop tasks when reached. It also provides a download/upload speed limiter and detailed transfer stats in the web UI. SimpleTorrent supports real-time updates, is mobile-friendly, and offers a fast content server. It also supports IPv6 out of the box and has an updated torrent engine from anacrolix/torrent. Additional features include a torrent watcher, K8s/docker health-check endpoint, extra trackers from an external source, and a protocol handler to magnet.

## Benefits

- Remote Torrent Management: SimpleTorrent allows you to manage your torrents remotely. You can start torrents from anywhere and have them download files directly to the server's local disk. This makes it easy to manage your downloads without needing to be physically present at the server.
- Streamable Downloads: Once your files are downloaded to the server, they are retrievable or streamable via HTTP. This means you can access your downloaded content from any device with an internet connection, making it highly convenient and flexible.
- Control Over Individual File Downloads: SimpleTorrent gives you the ability to control individual file downloads. This means you can choose exactly which files you want to download from a torrent, giving you greater control over your downloads and saving server space.

## Features

- DoneCmd: This feature allows you to run an external program upon the completion of tasks. This can be useful for automating processes or triggering events once a download is complete.
- SeedRatio: This feature stops a task when a certain seeding ratio is reached. This allows you to control how much you seed back to the torrent community after your download is complete.
- UploadRate/DownloadRate: These features allow you to limit your upload and download speeds. This can be useful for managing bandwidth usage on your server.
- Torrent Watcher: This feature allows you to monitor your torrents in real-time. It provides detailed transfer stats in the web UI, giving you a clear overview of your torrent activity.
- Magnet RSS Subscribing: This feature supports subscribing to magnet RSS feeds. This allows you to automatically download new content from your favorite torrent feeds.

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
