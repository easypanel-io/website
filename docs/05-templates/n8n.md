---
description: Run a n8n service in one minute.
---

# n8n

This template helps you deploy a n8n app. Under the hood it creates one service.

## App Service

This service is based on the official n8n Docker image.

- Docker Image
  - Name: [`n8nio/n8n`](https://hub.docker.com/r/n8nio/n8n)
  - Version: `latest`
- Volumes
  - `/home/node/.n8n`
