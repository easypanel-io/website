---
hide_title: true
sidebar_label: Keycloak
title: Keycloak | Self-Host on Easypanel
description: How to install Keycloak on Easypanel? 1-Click installation template for Keycloak on Easypanel
---

<!-- generated -->

# Keycloak

1-Click installation template for Keycloak on Easypanel

## Description

Keycloak is an open-source Identity and Access Management tool that adds authentication to applications and secures services with minimal effort. It eliminates the need for storing or authenticating users, providing user federation, robust authentication, user management, and fine-grained authorization. Keycloak offers a Single-Sign On feature, allowing users to authenticate with Keycloak rather than individual applications, ensuring a seamless login experience across multiple applications. It also supports social login and can authenticate users with existing OpenID Connect or SAML 2.0 Identity Providers. Keycloak has built-in support to connect to existing LDAP or Active Directory servers and provides a centralized admin console for managing all aspects of the server. It also offers an account management console for users to manage their own accounts. Based on standard protocols, Keycloak supports OpenID Connect, OAuth 2.0, and SAML, and provides fine-grained authorization services for advanced permission management.

## Benefits

- Effortless Authentication: Keycloak simplifies the process of adding authentication to applications and securing services, eliminating the need to handle user storage or authentication.
- Single Sign-On: Users only need to authenticate once with Keycloak to gain access to multiple applications, removing the need for multiple logins and logouts.
- Social Login and Identity Brokering: Keycloak makes it easy to enable login with social networks and can authenticate users with existing OpenID Connect or SAML 2.0 Identity Providers.
- User Federation: Keycloak can connect to existing LDAP or Active Directory servers, and even allows for the implementation of your own provider if you have users in other stores.
- Fine-Grained Authorization: Keycloak provides fine-grained authorization services, allowing you to manage permissions for all your services and define the exact policies you need.

## Features

- Admin Console: The admin console allows administrators to centrally manage all aspects of the Keycloak server, including enabling and disabling features, configuring identity brokering and user federation, and managing applications, services, users, permissions, and sessions.
- Account Management Console: Users can manage their own accounts through the account management console, including updating their profile, changing passwords, setting up two-factor authentication, managing sessions, and viewing account history.
- Standard Protocols: Keycloak is based on standard protocols and provides support for OpenID Connect, OAuth 2.0, and SAML.
- Authorization Services: If role-based authorization doesn't cover your needs, Keycloak provides fine-grained authorization services as well. This allows you to manage permissions for all your services from the Keycloak admin console.
- Single-Sign On: Keycloak provides single-sign out, which means users only have to logout once to be logged-out of all applications that use Keycloak.
- Identity Brokering and Social Login: Enabling login with social networks is easy to add through the admin console. Keycloak can also authenticate users with existing OpenID Connect or SAML 2.0 Identity Providers.
- User Federation: Keycloak has built-in support to connect to existing LDAP or Active Directory servers. You can also implement your own provider if you have users in other stores.

## Links

- [Website](https://www.keycloak.org)
- [Documentation](https://www.keycloak.org/documentation)
- [Github](https://github.com/keycloak/keycloak)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/keycloak)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | keycloak
App Service Image | - | yes | bitnami/keycloak:24.0.4
Database Service Name | - | yes | keycloak-db
Username | - | yes | 
Password | - | yes | 

## Screenshots

![Keycloak Screenshot](./assets/screenshot.png)

## Change Log

- 2023-3-16 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
