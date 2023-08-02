---
hide_title: true
sidebar_label: Visual Studio Code Server
title: Visual Studio Code Server | Self-Host on Easypanel
description: How to install Visual Studio Code Server on Easypanel? 1-Click installation template for Visual Studio Code Server on Easypanel
---

<!-- generated -->

# Visual Studio Code Server

1-Click installation template for Visual Studio Code Server on Easypanel

## Description

Code-server is a remote development environment that allows you to access Visual Studio Code through a web browser. It provides a consistent development environment across different devices and platforms, allowing you to code on Chromebooks, tablets, and laptops. It also utilizes large cloud servers to speed up tests, compilations, and downloads. Code-server runs on a remote server, reducing resource usage on your local machine and preserving battery life.

## Features

- Web-based IDE: Code-server provides a web-based IDE that is accessible through a web browser. This allows you to code and work on your projects without the need to install any software on your local machine.
- GitHub Integration: Code-server supports GitHub integration, allowing you to easily work with your repositories and collaborate with others. You can set up your SSH key and configure your GitHub username and email directly from the code-server terminal.
- Password Protection: Code-server allows you to set a password or a hashed password to protect your development environment. This ensures that only authorized users can access your code and projects.
- Sudo Access: If enabled, code-server provides sudo access in the terminal, allowing you to perform administrative tasks and run commands with elevated privileges.
- Proxy Domain Support: Code-server supports proxy domain configuration, allowing you to access your development environment through a custom domain name.
- Default Workspace: You can set a default workspace directory for code-server, which will be opened by default when you access the web interface. This makes it easier to start working on your projects without navigating through directories.

## Links

- [Documentation](https://github.com/linuxserver/docker-code-server/blob/master/README.md)
- [Github](https://github.com/linuxserver/docker-code-server)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/vscode-server)

## Options

Name | Description | Required | Default Value
-|-|-|-
VS Code Server Password | - | yes | 
App Service Name | - | yes | vsc-server
App Service Image | - | yes | lscr.io/linuxserver/code-server:4.9.1-ls148

## Screenshots

![Visual Studio Code Server Screenshot](./assets/screenshot.png)

## Change Log

- 2022-10-28 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
