---
sidebar_label: Custom SSL Certificate
title: Custom SSL Certificate Configuration
description: Custom SSL Certificate Configuration guide
---

# Custom SSL Certificate Configuration

In this guide, we will take you through the process of configuring a custom SSL certificate for your Easypanel Traefik installation. Follow the steps below to successfully set up your SSL certificate.

## Step 1 - Creating a Directory for Certificates

Connect to your server via SSH and execute the following command to create a directory named "certs" under `/etc/easypanel/traefik/`.

```
sudo mkdir -p /etc/easypanel/traefik/certs
```

The `-p` flag will create the necessary parent directories if they do not exist.

## Step 2 - Uploading Certificates

Upload your SSL certificate files (`.crt` and `.key`) to the newly created directory.

:::info
In order to upload your certificates to `/etc/easypanel/traefik/certs/` you can check out the [file management guide](/docs/guides/file-management)
:::

## Step 3 - Creating the "custom.yaml" File

Create a new file named "custom.yaml" under `/etc/easypanel/traefik/config/` via FileZilla or using the following command:

```
sudo nano /etc/easypanel/traefik/config/custom.yaml
```

This will open the file in the nano text editor. If you prefer to use a different text editor such as vim or emacs, replace `nano` with your preferred editor.

`custom.yaml` example:

```
tls:
  certificates:
    - certFile: /data/certs/**examplecert**.crt
      keyFile: /data/certs/**examplecert**.key
```

## Step 4 - Restarting Traefik

Restart Traefik using the appropriate command for your operating system and installation method. Head to settings and click the restart button.

![Environment Setup](./restart.png)

## Step 5 - Configuring Domain Settings

Open the EasyPanel user interface in your web browser and navigate to the "Domains" tab. Locate the domain you're working with and update its settings.

- Set the expose port (ex: 80).
- Enable the option for Let's Encrypt, typically by checking a box or toggling a switch.

## Step 6 - Clearing Browser Cache and Testing

Clear your browser cache to ensure you load the most recent version of your site. The process may vary depending on the browser you're using. Generally, you can find this option in the browser's settings or preferences.

After clearing your cache, visit your site in the browser and verify that everything is working correctly.

Please note that these instructions are based on general knowledge and typical configurations. Your server or configuration may require different commands or steps. Always ensure you understand the commands you're running on your server.

If you encounter any issues or have further questions, feel free to seek additional support or consult Easypanel's documentation.
