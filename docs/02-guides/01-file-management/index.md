---
sidebar_label: File Management
title: File Management
description: Learn how to efficiently manage files on Easypanel using FileZilla or FileBrowser
---

# File Management

Managing files on your Easypanel server is essential for maintaining an organized website or application. In this guide, we will explore two powerful tools, FileZilla and FileBrowser, that enable you to efficiently handle file management tasks on Easypanel. Whether you prefer the versatility of a dedicated FTP client like FileZilla or the user-friendly interface provided by FileBrowser, we have you covered. Let's dive into each tool and discover how they can streamline your file management workflow on Easypanel.

## File Management with FileZilla

FileZilla is a popular FTP client that facilitates file transfers between your local machine and the Easypanel server. Here's how you can leverage FileZilla for effective file management on Easypanel:

### Prerequisites

Before you begin, make sure you have the following:

- FileZilla FTP client installed on your local machine. If you don't have it installed, you can download it from the official website [here](https://filezilla-project.org/download.php).
- SFTP (SSH File Transfer Protocol) support enabled in FileZilla.

### Connecting via SFTP with SSH Key

To connect to your Easypanel server using FileZilla and SFTP with an SSH key, follow these steps:

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

### Connecting via SFTP with User and Password

To connect to your Easypanel server using FileZilla and SFTP with a username and password, follow these steps:

1. Open FileZilla on your local machine.
2. In the top menu, click on "File" and select "Site Manager."
3. In the Site Manager window, click on "New Site" to create a new connection profile.
4. Enter a name for the connection profile (e.g., "Easypanel Server").
5. Under the "Host" field, enter the IP address or hostname of your server.
6. Select "SFTP - SSH File Transfer Protocol" as the protocol.
7. Choose "Use the custom port" and enter the SSH port number (default is 22).
8. Select "Normal" as the logon type.
9. Enter the username and password associated with your server.
10. Click "Connect" to establish the SFTP connection.

### Navigating and Managing Files

Once connected, you can navigate and manage files on your Easypanel server using FileZilla's intuitive interface. Here are some key file management tasks you can perform:

- **Uploading Files**: Select files from your local machine and drag them to the desired directory on the server.
- **Downloading Files**: Select files from the server and drag them to your local machine.
- **Renaming, Moving, and Deleting Files**: Right-click on a file and choose the desired action from the context menu.

## File Management with FileBrowser

FileBrowser is a tool that provides a user-friendly file management interface within the Easypanel dashboard. Let's explore how to utilize FileBrowser for efficient file management on Easypanel:

### Prerequisites

Before getting started, ensure the following:

- You have an Easypanel server up and running.
- You have access to the Easypanel dashboard.
- [Filebrowser template](/docs/templates/filebrowser) is installed and configured on your Easypanel instance.

### Step 1 - Accessing the FileBrowser Interface

To access the FileBrowser template for file management, follow these steps:

1. Log in to your Easypanel dashboard.
2. Navigate to the project's page where you have FileBrowser installed and press "Open" to access FileBrowser.

### Step 2 - Managing Files with FileBrowser

Once you have created the FileBrowser instance, you can start managing files using its user-friendly interface:

1. You will be presented with a file explorer-like interface within the Easypanel dashboard.
2. Use the navigation panel to browse through the directory structure of your Easypanel server.
3. Click on folders to expand them and view their contents.
4. Perform various file management tasks such as uploading, downloading, renaming, moving, and deleting files using the FileBrowser interface.

## Conclusion

By utilizing both FileZilla and FileBrowser, you can efficiently manage files on your Easypanel server. FileZilla offers a robust FTP client with advanced features for transferring and organizing files, while FileBrowser provides a user-friendly file management interface within the Easypanel dashboard. Incorporate these tools into your file management workflow on Easypanel and streamline your operations. If you encounter any issues or have further questions, consult the Easypanel documentation or reach out to the Easypanel support team. Enjoy seamless file management on Easypanel!
