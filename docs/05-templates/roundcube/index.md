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

Roundcube webmail is a browser-based, multilingual IMAP client that offers an application-like user interface. It is designed to provide all the functionalities you would expect from an email client. This includes MIME support, an address book, folder manipulation, message searching, and spell checking. The app also supports drag-and-drop message management, multiple sender identities, and a full-featured address book with groups and LDAP connectors. It offers a threaded message listing, IDNA and SMTPUTF8 support, and a responsive skin for multi-device support. Roundcube webmail also features built-in caching for fast mailbox access, unlimited users and messages, import/export functions, and support for PGP encryption.

## Instructions

After Roundcube is installed, you can log in to the mail accounts on the service where you entered the &quot;SMTP&quot; information.

## Benefits

- Efficient Email Management: Roundcube webmail is a browser-based multilingual IMAP client that offers an application-like user interface. It provides full functionality you expect from an email client, making email management efficient and easy.
- Versatile Functionality: From MIME support, address book, folder manipulation, to message searching and spell checking, Roundcube webmail provides a wide range of features to cater to your email needs.
- Fast Mailbox Access: With built-in caching, Roundcube webmail ensures fast mailbox access, allowing you to browse through your emails quickly and seamlessly.
- Multi-Device Support: Roundcube webmail comes with a responsive skin, providing multi-device support. This means you can access your emails from any device, anytime, anywhere.

## Features

- Drag-&-drop Message Management: Roundcube webmail allows you to manage your messages easily with its drag-and-drop feature.
- Full Support for MIME and HTML Messages: Roundcube webmail provides full support for MIME and HTML messages, ensuring you can view and manage all types of email content.
- Multiple Sender Identities: With Roundcube webmail, you can manage multiple sender identities, making it ideal for users with multiple email accounts.
- Full Featured Address Book: Roundcube webmail includes a full-featured address book with groups and LDAP connectors, making it easy to manage your contacts.
- Threaded Message Listing: Roundcube webmail offers threaded message listing, allowing you to view your email conversations in a threaded view.
- Spell Checking: Roundcube webmail includes a spell checking feature, ensuring your emails are free of spelling errors.
- Support for Access Control Lists (ACL): Roundcube webmail supports access control lists (ACL), allowing you to control who has access to your emails.
- Import/Export Functions: Roundcube webmail includes import/export functions, allowing you to easily transfer your emails and contacts.
- Plug-in API for Flexible Extensions: Roundcube webmail comes with a plug-in API, allowing for flexible extensions to enhance its functionality.
- XSS Attack Protection: Roundcube webmail includes XSS attack protection, ensuring your emails are safe from cross-site scripting attacks.
- Support for PGP Encryption: Roundcube webmail supports PGP encryption, ensuring your emails are securely encrypted.

## Links

- [Website](https://roundcube.net/)
- [Github](https://github.com/roundcube/roundcubemail/)
- [Docker](https://hub.docker.com/r/roundcube/roundcubemail/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/roundcube)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | roundcube
App Service Image | - | yes | roundcube/roundcubemail:1.6.9-apache
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
