---
sidebar_label: Traefik Dashboard
title: Enabling the Traefik Dashboard
description: Enabling the Traefik Dashboard Guide
---

# Traefik Dashboard

In this guide, we will take you through the process of enabling the Traefik dashboard, allowing you to monitor and manage your Traefik installation. Please follow the steps below to enable and access the Traefik dashboard.

## Enabling the Dashboard

To enable the Traefik dashboard, open your terminal and execute the following command:

```shell
docker service update --publish-add 8080:8080 traefik
```

This command will update the `traefik` Docker service and add the publish port mapping for port 8080. It will allow access to the Traefik dashboard through port 8080.

## Disabling the Dashboard

If you wish to disable the Traefik dashboard, execute the following command:

```shell
docker service update --publish-rm 8080 traefik
```

This command will remove the publish port mapping for port 8080 from the `traefik` Docker service, effectively disabling access to the Traefik dashboard.

## Accessing the Dashboard

To access the Traefik dashboard, use your browser and enter the following URL:

```
http://<YOUR_IP_ADDRESS>:8080
```

Replace `<YOUR_IP_ADDRESS>` with the IP address of your server where Traefik is running. This will direct you to the Traefik dashboard, where you can monitor and manage your Traefik installation.
