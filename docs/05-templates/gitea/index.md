---
hide_title: true
sidebar_label: Gitea
title: Gitea | Self-Host on Easypanel
description: How to install Gitea on Easypanel? 1-Click installation template for Gitea on Easypanel
---

<!-- generated -->

# Gitea

1-Click installation template for Gitea on Easypanel

## Description

Gitea is a lightweight DevOps platform designed to streamline operations from planning to production. It enables the creation and management of repositories, exploration of commit history and code files, review and merging of code commits, and more. Gitea also supports standard Git features, including tags, cherry-picking, hooks, and integrated collaboration tools. It features an integrated CI/CD system, Gitea Actions, that is compatible with GitHub Actions. With Gitea, you can efficiently manage a project&#39;s requirements, features, and bugs through issue tasks, labeling, and kanban project boards. It supports more than 20 different kinds of public or private package management. Gitea is an open-source project that accelerates development and collaboration, offering universal compatibility and flexible deployment options. It also provides a powerful built-in CI/CD system and is developed with a focus on security. Gitea can be tailored to your requirements and is integrated with your favorite tools to boost your workflow.

## Benefits

- Efficient Development and Collaboration: Gitea is a lightweight DevOps platform that accelerates development and collaboration. It offers high-efficiency operations from planning to production, making development simpler and faster.
- Secure Code Ownership: Developed using Golang, a memory-safe language, Gitea focuses on security. It ensures that you securely own your code, with features like branch protection for enforcing code signing and WebAuthn-based 2FA login.
- Flexible and Customizable: Gitea offers universal compatibility and flexible deployment options. It can be tailored to your requirements, allowing you to enable or disable features with a single configuration file, customize site themes, UI languages, and more.
- Integrated with Your Favorite Tools: Gitea boosts your workflow with its versatile integrations. It syncs seamlessly with chat tools like Slack, Discord, MS Teams, Lark, and more, and improves workflows with CI/CD service compatibility.

## Features

- Code Hosting: Gitea enables the creation and management of repositories, exploration of commit history and code files, review and merging of code commits, collaboration management, branch handling, and more.
- Code Review: Gitea's code review accommodates both Pull Request and AGit workflows. Reviewers can easily examine code online and submit comments or inquiries, facilitating enhanced code quality.
- CI/CD: Gitea features an integrated CI/CD system, Gitea Actions, that is compatible with GitHub Actions. Users can create workflows using the familiar YAML format or utilize numerous existing plugins.
- Project Management: With Gitea, you can efficiently manage a project's requirements, features, and bugs through issue tasks, labeling, and kanban project boards. These tools help plan and track the progress of your software.
- Package Management: Gitea supports more than 20 different kinds of public or private package management, including Cargo, Chef, Composer, Conan, Conda, Container, Helm, Maven, npm, NuGet, Pub, PyPI, RubyGems, Vagrant, and more.

## Links

- [Website](https://gitea.io/en-us/)
- [Documentation](https://docs.gitea.io/en-us/)
- [Github](https://github.com/go-gitea/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/gitea)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | gitea
App Service Image | - | yes | gitea/gitea:1.23.1
Database Type | - | yes | 
Database Service Name | - | yes | gitea-db

## Screenshots

![Gitea Screenshot](./assets/screenshot.png)

## Change Log

- 2022-07-12 – first release
- 2023-2-24 – Update to v1.18.4
- 2025-01-14 – Version bumped to 1.23.1

## Contributors

- [Ponkhy](https://github.com/Ponkhy)
- [Andrei Canta](https://github.com/deiucanta)
- [Supernova3339](https://github.com/supernova3339)
