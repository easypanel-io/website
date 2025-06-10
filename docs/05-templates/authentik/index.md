---
hide_title: true
sidebar_label: Authentik
title: Authentik | Self-Host on Easypanel
description: How to install Authentik on Easypanel? 1-Click installation template for Authentik on Easypanel
---

<!-- generated -->

# Authentik

1-Click installation template for Authentik on Easypanel

## Description

Authentik is an open-source Identity Provider focused on flexibility and versatility. It provides secure authentication, authorization, and user management with support for single sign-on (SSO), multi-factor authentication (MFA), and a modern user interface.

## Instructions

Change this URL /if/flow/default-authentication-flow/?next=%2F to /if/flow/initial-setup/ in the browser to setup the initial admin user.

## Benefits

- Centralized Identity Management: Manage users, groups, and permissions from a single dashboard
- Flexible Authentication: Support for multiple authentication sources including LDAP, SAML, and OAuth/OIDC
- Strong Security: Built-in MFA, brute-force protection, and security auditing capabilities
- Self-hosted Solution: Complete control over your identity infrastructure and user data

## Features

- Single Sign-On (SSO): Enable seamless login across multiple applications and services
- Multi-factor Authentication: Add additional security with TOTP, WebAuthn/FIDO2, and more
- Role-based Access Control: Define granular access policies based on user attributes and roles
- User Self-service: Allow users to manage their profiles, reset passwords, and enroll MFA
- Customizable Flows: Design authentication workflows that meet your organization's needs
- API & Integration Support: Extensive API and integrations with popular services and platforms
- Outposts: Deploy proxy services to integrate with legacy applications

## Links

- [Website](https://goauthentik.io)
- [Documentation](https://goauthentik.io/docs)
- [GitHub](https://github.com/goauthentik/authentik)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/authentik)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | authentik
App Service Image | - | yes | ghcr.io/goauthentik/server:2025.2.4

## Screenshots

![Authentik Screenshot](./assets/screenshot.png)

## Change Log

- 2025-04-23 – Initial release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
