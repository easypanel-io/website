---
hide_title: true
sidebar_label: Mastodon
title: Mastodon | Self-Host on Easypanel
description: How to install Mastodon on Easypanel? 1-Click installation template for Mastodon on Easypanel
---

<!-- generated -->

# Mastodon

1-Click installation template for Mastodon on Easypanel

## Description

Mastodon is a unique social networking app that puts control back in your hands. It allows you to curate your own home feed, free from algorithms or ads, ensuring you see only what matters most to you. The app supports a wide range of content types, including audio, video, and picture posts, polls, content warnings, and more, enabling you to express yourself freely online. Mastodon is decentralized and open-source, meaning each server is a completely independent entity, yet able to interoperate with others to form a global social network. The app respects your agency, never serving ads or pushing profiles, and is built on open web protocols, allowing it to interact with any other platform that implements ActivityPub. With Mastodon, you have the power to manage your audience, moderate content, and create a social media experience that truly reflects you.

## Instructions

To create an admin account, type &quot;tootctl accounts create username --email user@example.com --confirmed --role Owner&quot; on the console.

## Benefits

- Control Your Own Social Media Experience: Mastodon gives you the power to curate your own home feed, without interference from algorithms or ads. Your timeline is filled with what matters to you most, not what a corporation thinks you should see.
- Decentralized and Independent: Each Mastodon server is a completely independent entity, yet able to interoperate with others to form one global social network. This decentralization ensures that instant global communication doesn't belong to one company.
- Respect for Your Agency: Mastodon respects your agency. Your feed is curated and created by you. We will never serve ads or push profiles for you to see. That means your data and your time are yours and yours alone.

## Features

- Follow Across Servers: Follow anyone across any Mastodon server from a single account and receive their posts in chronological order. Make your corner of the internet a little more like you.
- Moderation Your Way: Each server creates their own rules and regulations, which are enforced locally and not top-down like corporate social media. Join a server with the rules you agree with, or host your own.
- Unparalleled Creativity: Mastodon supports audio, video and picture posts, accessibility descriptions, polls, content warnings, animated avatars, custom emojis, thumbnail crop control, and more, to help you express yourself online.
- Interoperable: Built on open web protocols, Mastodon can speak with any other platform that implements ActivityPub. With one account you get access to a whole universe of social apps—the fediverse.

## Links

- [Website](https://joinmastodon.org)
- [Docs](https://docs.joinmastodon.org)
- [Github](https://github.com/mastodon/mastodon)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mastodon)

## Options

Name | Description | Required | Default Value
-|-|-|-
Enable Streaming Service | - | no | false
SMTP Server | - | no | 
SMTP Port | - | no | 587
SMTP Login | - | no | 
SMTP Password | - | no | 
SMTP From Address | - | no | notifications@example.com
App Service Name | - | yes | mastodon
App Service Image | - | yes | ghcr.io/mastodon/mastodon:v4.2.9

## Screenshots

![Mastodon Screenshot](./assets/screenshot.png)

## Change Log

- 2023-03-26 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
