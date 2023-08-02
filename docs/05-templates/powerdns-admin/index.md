---
hide_title: true
sidebar_label: PowerDNS-Admin
title: PowerDNS-Admin | Self-Host on Easypanel
description: How to install PowerDNS-Admin on Easypanel? 1-Click installation template for PowerDNS-Admin on Easypanel
---

<!-- generated -->

# PowerDNS-Admin

1-Click installation template for PowerDNS-Admin on Easypanel

## Description

PowerDNS-Admin is a web interface for managing PowerDNS, a DNS server software. It provides advanced features such as forward and reverse zone management, zone templating, user management with role-based access control, activity logging, and zone-specific access control. It also supports authentication with local users, SAML, LDAP, and OAuth providers. The app includes two-factor authentication support and provides an API for zone and record management. It has easy IPv6 PTR record editing and supports the DynDNS 2 protocol. PowerDNS-Admin has full IDN/Punycode support and offers configuration and statistics monitoring for the PowerDNS service.

## Benefits

- Easy DNS Management: PowerDNS-Admin provides a user-friendly web interface for managing DNS zones and records. It allows users to easily create, edit, and delete DNS records, as well as manage zone configurations.
- Advanced Features: PowerDNS-Admin offers advanced features such as zone templating, user management with role-based access control, activity logging, and zone-specific access control. It also supports authentication with various providers and includes two-factor authentication support.
- API Integration: PowerDNS-Admin provides an API for zone and record management, allowing users to automate DNS management tasks and integrate with other systems and applications.
- Monitoring and Statistics: PowerDNS-Admin includes configuration and statistics monitoring for the PowerDNS service. Users can easily monitor the health and performance of their DNS infrastructure.

## Features

- Forward and Reverse Zone Management: PowerDNS-Admin allows users to manage both forward and reverse DNS zones. Users can create, edit, and delete zones, as well as manage zone configurations.
- Zone Templating: PowerDNS-Admin supports zone templating, allowing users to create new zones based on predefined templates. This helps streamline the process of creating and managing multiple similar zones.
- User Management with Role-Based Access Control: PowerDNS-Admin provides user management functionality with role-based access control. Administrators can create and manage user accounts, assign roles, and control access to zones and features based on user roles.
- Activity Logging: PowerDNS-Admin logs user activities, providing administrators with a detailed audit trail of changes made to DNS zones and records. This helps with troubleshooting and compliance.
- Zone-Specific Access Control: PowerDNS-Admin allows administrators to define zone-specific access control rules, granting or restricting access to specific zones based on user roles and permissions.
- Authentication Support: PowerDNS-Admin supports various authentication methods, including local user authentication, SAML, LDAP (OpenLDAP/Active Directory), and OAuth (Google/GitHub/Azure/OpenID). This allows users to authenticate using their existing credentials.
- Two-Factor Authentication Support: PowerDNS-Admin includes support for two-factor authentication using TOTP (Time-based One-Time Password). This adds an extra layer of security to user accounts.
- PDNS Service Configuration & Statistics Monitoring: PowerDNS-Admin provides configuration and statistics monitoring for the PowerDNS service. Users can view and modify PDNS service settings, as well as monitor the health and performance of the service.
- DynDNS 2 Protocol Support: PowerDNS-Admin supports the DynDNS 2 protocol, allowing users to easily manage dynamic DNS records for their domains.
- Easy IPv6 PTR Record Editing: PowerDNS-Admin simplifies the process of editing IPv6 PTR (reverse DNS) records. Users can easily manage PTR records for their IPv6 addresses.
- API for Zone and Record Management: PowerDNS-Admin provides an API for zone and record management. Users can programmatically create, edit, and delete DNS zones and records, as well as perform other DNS management tasks.
- Full IDN/Punycode Support: PowerDNS-Admin fully supports Internationalized Domain Names (IDN) and Punycode encoding. Users can manage DNS records for domains with non-ASCII characters.

## Links

- [Github](https://github.com/PowerDNS-Admin/PowerDNS-Admin)
- [Documentation](https://github.com/PowerDNS-Admin/PowerDNS-Admin/wiki)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/powerdns-admin)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | powerdns-admin
App Service Image | - | yes | ngoduykhanh/powerdns-admin:latest

## Screenshots

![PowerDNS-Admin Screenshot](./assets/screenshot.png)

## Change Log

- 2022-11-28 – first release

## Contributors

- [Migu2k](https://github.com/migu2k)
