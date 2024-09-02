---
sidebar_label: Pin Easypanel version
title: Pin Easypanel version
description: Pin Easypanel version
---

# Pin Easypanel version

In this guide, we will walk you through the process of pinning a specific version of Easypanel to prevent it from being automatically updated when the service restarts. This is achieved by setting the environment variable `RELEASE_TAG` to a specific version. Follow the steps below to update these settings and gain more control over your Easypanel updates.

## Finding available release tags

To pin Easypanel to a specific version, you first need to know which versions are available. You can find a list of all possible release tags on [DockerHub](https://hub.docker.com/r/easypanel/easypanel/tags).

## Method 1: Using Portainer to set the `RELEASE_TAG`

If you have installed [Portainer](/docs/templates/portainer), you can easily set or change the `RELEASE_TAG` environment variable for Easypanel using the following steps:

 1. Open Portainer and navigate to the Services section.
 2. Find and click on the service named easypanel.
 3. Go to the Environment variables section.
 4. Look for the `RELEASE_TAG` variable. If it doesn’t exist, add it; if it does, modify its value to the desired version tag (e.g., `1.50.0`).
 5. Apply the changes.

## Method 2: Pinning the Easypanel version via Command Line

You can also pin the Easypanel version by running a Docker command directly. Below is an example command to pin the version to `1.50.0`:

```shell
docker run --rm -it \
  -v /etc/easypanel:/etc/easypanel \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  -e RELEASE_TAG=1.50.0 \
  easypanel/easypanel:1.50.0 setup
```

## Summary

By following the steps above, you can easily pin Easypanel to a specific version, ensuring that it does not automatically update when the service restarts. This gives you better control over your environment and avoids potential issues with unwanted updates.

Feel free to reach out if you have any questions or need further assistance.
