---
description: Run a phpMyAdmin service in one minute.
---

# phpMyAdmin

This template helps you deploy a phpMyAdmin app. Under the hood it creates one service.

## App Service

This service is based on the official phpMyAdmin Docker image.

- Docker Image
  - Name: [`phpmyadmin`](https://hub.docker.com/_/phpmyadmin)
  - Version: `latest`
- Environment
  - `PMA_ARBITRARY=1`
