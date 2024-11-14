---
hide_title: true
sidebar_label: Pterodactyl Panel
title: Pterodactyl Panel | Self-Host on Easypanel
description: How to install Pterodactyl Panel on Easypanel? 1-Click installation template for Pterodactyl Panel on Easypanel
---

<!-- generated -->

# Pterodactyl Panel

1-Click installation template for Pterodactyl Panel on Easypanel

## Description

Pterodactyl® is a free, open-source game server management panel that allows you to manage your game servers with ease and efficiency. It is built with PHP, React, and Go, and designed with a focus on security. Pterodactyl runs all game servers in isolated Docker containers, providing a secure environment for each game. It also offers a beautiful and intuitive user interface, making it easy for anyone to use. The platform supports a wide variety of games, including Minecraft, Rust, Terraria, Teamspeak, Mumble, Team Fortress 2, Counter Strike Global Offensive, Garry&#39;s Mod, ARK Survival Evolved, and many more. With Pterodactyl, you can host your games across the world without having to bloat each physical machine with additional dependencies. It&#39;s time to make game servers a first-class citizen on your platform with Pterodactyl.

## Instructions

After installing, open the console and run &quot;php artisan p:user:make&quot;.

## Benefits

- Secure Game Server Management: Pterodactyl Panel is designed with security as a priority. It uses bcrypt hashing, AES-256-CBC encryption, and HTTPS support to ensure your game servers are secure. All servers run in isolated Docker containers, limiting attack vectors and providing strict resource limits.
- User-Friendly Interface: Pterodactyl Panel offers a beautiful and intuitive user interface. It's designed to be easy to use, saving you from unnecessary stress and frustration.
- Scalability: Whether you're a hosting company, a large gaming network, or just a group of friends playing video games, Pterodactyl Panel can scale to meet your needs.
- Cost-Effective Solution: Pterodactyl Panel is 100% free and open-source. There are no exorbitant monthly costs, making it a cost-effective solution for managing your game servers.

## Features

- Modern Tooling: Pterodactyl Panel is built on a modern stack, utilizing the best design practices. This makes it easy to jump in and make modifications if needed.
- Docker Core: Pterodactyl Panel runs all game servers in isolated Docker containers. This provides environments tailored to each specific game and ensures that resources are used efficiently.
- Support for a Variety of Games: Pterodactyl Panel supports a wide variety of games, including Minecraft, Rust, Terraria, Teamspeak, Mumble, Team Fortress 2, Counter Strike: Global Offensive, Garry's Mod, ARK: Survival Evolved, and many more.
- Open Source: Pterodactyl Panel is open-source, meaning all of its code is completely accessible and modifiable. This allows for complete transparency and the ability to tailor the software to your specific needs.

## Links

- [Website](https://pterodactyl.io/)
- [Documentation](https://pterodactyl.io/project/introduction.html)
- [Github](https://github.com/pterodactyl/panel)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/pterodactyl-panel)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | panel
App Service Image | - | yes | ghcr.io/pterodactyl/panel:v1.11.9
Redis Service Name | - | yes | panel-redis
Database Service Name | - | yes | panel-db

## Screenshots

![Pterodactyl Panel Screenshot](./assets/screenshot.png)

## Change Log

- 2023-07-10 – Update to v1.11

## Contributors

- [Dane Everitt](https://github.com/DaneEveritt)
- [Matthew Penner](https://github.com/matthewpi)
