---
description: Run a Ghost service in one minute.
---

# Ghost

This template helps you deploy a Ghost app. Under the hood it creates one service.

## App Service

This service is based on the official Ghost Docker image.

- Docker Image
  - Name: [`ghost`](https://hub.docker.com/_/ghost)
  - Version: `latest`
- Volumes
  - `/var/lib/ghost/content`
