---
hide_title: true
sidebar_label: Authorizer
title: Authorizer | Self-Host on Easypanel
description: How to install Authorizer on Easypanel? 1-Click installation template for Authorizer on Easypanel
---

<!-- generated -->

# Authorizer

1-Click installation template for Authorizer on Easypanel

## Description

Authorizer is an authentication and authorization service that allows you to authenticate and authorize users for your apps. It provides a low code tool and low cost deployment, allowing you to build secure apps 10x faster. With Authorizer, you own your user data in your preferred database and can authenticate users with multiple auth recipes. It also supports role-based access control and OAuth2 and OpenID compatible APIs. You can deploy your instance easily and integrate it with your application using the provided library. Authorizer offers secure session management, multiple auth recipes, database integration, customizable emails, event webhooks, and multi-factor authentication. It supports various databases and can be deployed anywhere. Join the community on Discord and share your experience with Authorizer.

## Benefits

- Build Secure Apps 10x faster: Authorizer provides a low code tool and low cost deployment, allowing you to build secure apps quickly and efficiently.
- Own your user data in your preferred database: With Authorizer, you have full control over your user data and can store it in your preferred database.
- Authenticate users with multiple auth recipes: Authorizer supports multiple authentication recipes, including major social logins, basic auth, and magic link auth.
- Authorize Users Based on your business roles: You can define roles and authorize your APIs with role-based session tokens using Authorizer.
- Deploy Your Instance: Authorizer offers multiple deployment options, including Heroku, Docker, and Kubernetes, allowing you to deploy your authentication and authorization service anywhere.

## Features

- Secure Session Management: Authorizer implements secure session management with HTTP only cookies and supports the Authorization Code flow for mobile-based authentication.
- Auth Recipes: Authorizer supports multiple authentication recipes, including major social logins, basic auth, and magic link auth. More recipes are coming soon.
- Connect to Your Database: Authorizer supports 11+ databases, including major SQL, NoSQL, and GraphDBs, allowing you to connect to your preferred database.
- Integrate or Implement: Authorizer comes with a built-in universal login page, but you can also build a custom UI using JavaScript, React, or any framework. More SDKs are coming soon.
- Role Based Access Control: Authorizer allows you to define roles and authorize your APIs with role-based session tokens, providing granular access control.
- Customize Emails: You can send emails with custom email templates and dynamic variables using Authorizer.
- Listen to Events: Authorizer allows you to configure webhooks for various events on the service and take necessary actions with event data.
- Multi Factor Authentication: Authorizer provides an added layer of security with email-based OTP for basic authentication.
- Myriad Database Support: Authorizer supports a wide range of databases, allowing you to choose the one that suits your needs.

## Links

- [Website](https://authorizer.dev)
- [Documentation](https://docs.authorizer.dev/)
- [Github](https://github.com/authorizerdev/authorizer)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/authorizer)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | authorizer
App Service Image | - | yes | lakhansamani/authorizer:1.1.46
Database Service Name | - | yes | authorizer-db
Redis Service Name | - | yes | authorizer-redis

## Screenshots

![Authorizer Screenshot](./assets/screenshot.png)

## Change Log

- 2023-01-25 – first release
- 2023-03-14 – Update to v1.1.41

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
