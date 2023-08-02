---
hide_title: true
sidebar_label: Roundcube
title: Roundcube | Self-Host on Easypanel
description: How to install Roundcube on Easypanel? 1-Click installation template for Roundcube on Easypanel
---

<!-- generated -->

# Roundcube

1-Click installation template for Roundcube on Easypanel

## Description

Roundcube webmail is a browser-based multilingual IMAP client with an application-like user interface. It provides full functionality you expect from an email client, including MIME support, address book, folder manipulation, message searching and spell checking.

## Instructions

After Roundcube is installed, you can log in to the mail accounts on the service where you entered the &quot;SMTP&quot; information.

## Benefits

- Browser-based Email Client: Access your email from any web browser without the need for a separate email client software.
- Multilingual Support: Roundcube webmail supports multiple languages, allowing users from different regions to use the app in their preferred language.
- Full Email Functionality: Roundcube webmail provides all the features you expect from an email client, including MIME support, address book, folder management, message searching, and spell checking.

## Features

- Drag-&-drop message management: Easily manage your email messages by dragging and dropping them into folders or other actions.
- Full support for MIME and HTML messages: Roundcube webmail fully supports MIME and HTML messages, allowing you to view and compose richly formatted emails.
- Multiple sender identities: Manage multiple email addresses and sender identities within Roundcube webmail.
- Full featured address book with groups and LDAP connectors: Store and manage your contacts in the address book, including support for groups and LDAP connectors.
- Find-as-you-type address book integration: Quickly find contacts in the address book by typing their name or email address.
- Threaded message listing: View email conversations in a threaded format for easier organization and navigation.
- IDNA and SMTPUTF8 support: Roundcube webmail supports IDNA and SMTPUTF8 encoding for internationalized domain names and email addresses.
- Spell checking: Check the spelling of your email messages before sending them.
- Responsive skin (multi-device support): The user interface of Roundcube webmail is responsive and supports multiple devices, allowing you to access your email from desktops, laptops, tablets, and smartphones.
- Shared/global IMAP folders: Access shared or global IMAP folders within Roundcube webmail.
- Support for access control lists (ACL): Manage access control lists for folders and email messages within Roundcube webmail.
- Built-in caching for fast mailbox access: Roundcube webmail includes built-in caching for faster access to your mailbox.
- Unlimited users and messages: There are no limitations on the number of users or messages that can be managed within Roundcube webmail.
- Import/export functions: Import and export email messages and contacts to and from Roundcube webmail.
- Plug-in API for flexible extensions: Extend the functionality of Roundcube webmail using the plug-in API.
- XSS attack protection: Roundcube webmail includes protection against cross-site scripting (XSS) attacks.
- Support for PGP encryption: Encrypt and decrypt email messages using PGP encryption within Roundcube webmail.

## Links

- [Website](https://roundcube.net/)
- [Github](https://github.com/roundcube/roundcubemail/)
- [Docker](https://hub.docker.com/r/roundcube/roundcubemail/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/roundcube)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | roundcube
App Service Image | - | yes | roundcube/roundcubemail:1.5.3-apache
Default Host | Hostname of the IMAP server to connect to. For encypted connections, prefix the host with tls:// (STARTTLS) or ssl:// (SSL/TLS). | yes | 
Default Port | IMAP port number. | no | 143
SMTP Server | Hostname of the SMTP server to send mails. For encypted connections, prefix the host with tls:// (STARTTLS) or ssl:// (SSL/TLS). | yes | 
SMTP Port | SMTP port number. | no | 587
Plugins | List of built-in plugins to activate. | no | archive,zipdownload
Upload Max File Size | File upload size limit. | no | 5M

## Screenshots

![Roundcube Screenshot](./assets/screenshot1.png)
![Roundcube Screenshot](./assets/screenshot10.png)
![Roundcube Screenshot](./assets/screenshot11.png)
![Roundcube Screenshot](./assets/screenshot12.png)
![Roundcube Screenshot](./assets/screenshot2.png)
![Roundcube Screenshot](./assets/screenshot3.png)
![Roundcube Screenshot](./assets/screenshot4.png)
![Roundcube Screenshot](./assets/screenshot5.png)
![Roundcube Screenshot](./assets/screenshot6.png)
![Roundcube Screenshot](./assets/screenshot7.png)
![Roundcube Screenshot](./assets/screenshot8.png)
![Roundcube Screenshot](./assets/screenshot9.png)

## Change Log

- 2023-03-15 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
