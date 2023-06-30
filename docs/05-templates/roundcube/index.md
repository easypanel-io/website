---
sidebar_label: Roundcube
title: Roundcube
description: How to install Roundcube on Easypanel? 1-Click installation template for Roundcube on Easypanel
---

<!-- generated -->

1-Click installation template for Roundcube on Easypanel

## Description

This project is a free and open source webmail solution with a desktop-like user interface which is easy to install/configure and that runs on a standard LAMPP server. The skins use the latest web standards to render a functional and customizable UI. Roundcube includes other sophisticated open-source libraries such as PEAR, an IMAP library derived from IlohaMail, the TinyMCE rich text editor, Googiespell library for spell checking and the HTML5-PHP sanitizer by Masterminds.

## Instructions

After Roundcube is installed, you can log in to the mail accounts on the service where you entered the &quot;SMTP&quot; information.

## Links

- [Website](https://roundcube.net/)
- [Github](https://github.com/roundcube/roundcubemail/)
- [Docker](https://hub.docker.com/r/roundcube/roundcubemail/)

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

- [BerkSMBL](https://berksmbl.com)
