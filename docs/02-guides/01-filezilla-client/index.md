---
sidebar_label: FileZilla Client
title: Connecting to the Server via FileZilla Configuration
description: Connecting to the Server via FileZilla Configuration guide
---

# Connecting to the Server via FileZilla

In this guide, we will walk you through the process of connecting to your Easypanel server using FileZilla. By establishing a connection, you can easily manage and transfer files between your local machine and the server. Follow the steps below to connect to the server via FileZilla.

## Prerequisites

Before you begin, ensure you have the following:

- FileZilla FTP client installed on your local machine. If you don't have it installed follow the official download link [oficial download link](https://filezilla-project.org/download.php).
- SFTP (SSH File Transfer Protocol) support enabled in FileZilla.

## Step 1: Configuring SFTP in FileZilla

If you haven't done so already, follow these steps to enable SFTP in FileZilla:

1. Open FileZilla on your local machine.
2. Go to "Edit" in the menu bar and select "Settings."
3. In the left-hand sidebar, select "SFTP."
4. Click on the "Add key file" button and browse to the location where your SSH key file is stored.
5. Enter the passphrase if your key file is password-protected.
6. Click "OK" to save the settings.

## Step 2: Connecting via SFTP

To connect to the server using FileZilla and SFTP, follow these steps:

1. Open FileZilla on your local machine.
2. In the top menu, click on "File" and select "Site Manager."
3. In the Site Manager window, click on "New Site" to create a new connection profile.
4. Enter a name for the connection profile (e.g., "Easypanel Server").
5. Under the "Host" field, enter the IP address or hostname of your server.
6. Select "SFTP - SSH File Transfer Protocol" as the protocol.
7. Choose "Use the custom port" and enter the SSH port number (default is 22).
8. Select "Key file" as the logon type.
9. Click on the "Browse" button next to "Key file" and locate your SSH key file.
10. Enter the username associated with your server.
11. Click "Connect" to establish the SFTP connection.

## Step 3: Navigating the Server Files

Once connected, you can navigate the server files using FileZilla's interface. The important directories related to Easypanel are located in the following locations:

- Easypanel configuration files: `/etc/easypanel`
- Easypanel projects: `/etc/easypanel/projects`
- Persisted files from services: `/etc/easypanel/volumes`

You can explore these directories to access and manage the necessary files for your Easypanel server.

## Conclusion

By following the steps outlined in this guide, you can easily connect to your Easypanel server via FileZilla using SFTP. Ensure that you have SFTP support enabled in FileZilla and that you have the necessary SSH key file. Once connected, you can navigate the server files and perform file management tasks efficiently. If you encounter any issues or have further questions, don't hesitate to seek assistance from the Easypanel support team or refer to their documentation. Happy file transferring!
