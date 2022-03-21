---
description: Deploy a Wordpress website in one minute.
---

# Wordpress

This template helps you deploy a Wordpress website. Under the hood it creates two services.

## App Service

This service is based on the official Wordpress Docker image.

- Docker Image
  - Name: [`wordpress`](https://hub.docker.com/_/wordpress)
  - Version: `latest`
- Environment
  - `WORDPRESS_DB_HOST`
  - `WORDPRESS_DB_USER`
  - `WORDPRESS_DB_PASSWORD`
  - `WORDPRESS_DB_NAME`
- Volumes
  - `/var/www/html/wp-content`

## MySQL Service

This service provides the database that Wordpress uses.
