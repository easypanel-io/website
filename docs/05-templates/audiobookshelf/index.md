---
hide_title: true
sidebar_label: Audiobookshelf
title: Audiobookshelf | Self-Host on Easypanel
description: How to install Audiobookshelf on Easypanel? 1-Click installation template for Audiobookshelf on Easypanel
---

<!-- generated -->

# Audiobookshelf

1-Click installation template for Audiobookshelf on Easypanel

## Description

Audiobookshelf is a self-hosted server designed to manage and play your audiobooks and podcasts. It works best when you have an organized directory structure, as it takes information from your folder names, including the author name, series name, book title, publish year, series sequence, and subtitle. The app uses the ID3 metadata tags in audio files to populate data, and it supports the same configuration options you would pass to a Docker container. Audiobookshelf is designed to be deployed on your own server using Easypanel, a modern server control panel. With Audiobookshelf, you can enjoy your favorite audiobooks and podcasts in a well-organized and easily accessible manner.

## Instructions

Starter Host Path will be bind to &quot;/audiobooks&quot; inside the container. You can bind any other directories you want to use for your book and podcast collections.

## Benefits

- Self-Hosted Audiobook and Podcast Server: Audiobookshelf allows you to host your own audiobook and podcast server. This means you can have all your favorite audiobooks and podcasts in one place, accessible from anywhere. No more switching between different platforms or apps to listen to your favorite content.
- Organized Directory Structure: Audiobookshelf works best when you have an organized directory structure. It takes information from your folder names, including the author name, series name, book title, publish year, series sequence, and subtitle. This makes it easy to find and manage your audiobooks and podcasts.
- Metadata Extraction: Audiobookshelf uses the ID3 metadata tags in audio files to populate data. This includes details like artist, album, subtitle, publisher, year, composer, description, genre, series, series-part, language, isbn, and asin. This ensures that all your content is accurately labeled and easy to search.

## Features

- Audio Tracks: An audiobook in Audiobookshelf contains tracks. Tracks are audio files assigned a track number. The track number is parsed from the audio filename and from the ID3 tags of the audio file. This allows for easy navigation within an audiobook.
- Additional Metadata: Audiobookshelf allows for additional metadata to be added. If you have a file named desc.txt in the library item folder it will be used as the description. If you have a file named reader.txt in the library item folder it will be used as the narrator. If you have an OPF file with extension .opf in the library item folder it will be parsed.
- Directory Structure for Podcasts: Audiobookshelf supports a specific directory structure for podcasts. This makes it easy to organize and manage your podcasts, ensuring that each episode is easy to find and play.

## Links

- [Website](https://www.audiobookshelf.org)
- [Documentation](https://www.audiobookshelf.org/docs)
- [Github](https://github.com/advplyr/audiobookshelf)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/audiobookshelf)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | audiobookshelf
App Service Image | - | yes | ghcr.io/advplyr/audiobookshelf:2.13.4
Starter Host Path | - | yes | 

## Screenshots

![Audiobookshelf Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-17 – Template created (v2.2.16)
- 2024-03-10 – Version bumped to 2.8.0
- 2024-09-30 – Version bumped to 2.13.4

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
- [Berk Sümbül](https://berksmbl.com)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
