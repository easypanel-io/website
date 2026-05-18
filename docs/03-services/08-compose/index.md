---
sidebar_label: Overview
title: Compose Service
description: Deploy multi-container Docker Compose stacks in Easypanel with inline or Git-based source, domain routing, redirects, security, and maintenance controls.
---

# Compose Service


The Compose Service lets you deploy multi-container applications using Docker Compose syntax directly within Easypanel. Unlike the App Service — which manages a single container — the Compose Service lets you define multiple containers, networks, and volumes in a single `docker-compose.yml` file and run them as a coordinated stack.

## Creating a Compose Service

1. Open your project and click **+ Service**.
2. In the service picker, select **Compose**.
3. Enter a **Service Name** and click **Create**.

You are taken to the service overview with all configuration tabs in the left sidebar.

## Service Controls

A persistent action bar appears at the top of every Compose service page:

| Button | Description |
|--------|-------------|
| **Deploy** | Trigger a new deployment |
| **Stop** | Stop all containers in the stack |
| **Restart** | Restart the service |
| **Logs** | View real-time log output |
| **Console** | Open an in-browser terminal |
| **Open** | Open the primary domain in a new tab |
| **Notes** | Add or view service notes |
| **Destroy** | Permanently delete the service (requires typing the service name to confirm) |

Live resource stats — CPU %, Memory, and Network I/O — are also displayed in the header. The service name shows a **COMPOSE** badge, and a rename icon lets you rename the service at any time.

## Overview

The Overview tab shows a real-time **Logs** panel that streams output from all containers in the compose stack over a WebSocket connection. Controls in the panel let you minimize, refresh, or expand the log view to fullscreen.

## Source

The Source tab is where you provide your Docker Compose configuration. It has two sub-tabs.

### docker-compose.yml

A full-featured code editor where you paste or write your `docker-compose.yml` content directly in the UI. Click **Save** to persist the compose file.

:::info
This is the quickest way to get started. Paste your existing compose file, save, and deploy.
:::

:::warning Do not expose external ports in your compose file
Do **not** use the `ports` directive in your `docker-compose.yml` to expose containers to the host. Easypanel will warn you in the console if it detects published ports, and they can conflict with other services running on the server.

Instead, use the **Domains** tab to route traffic to any internal service and port. You only need to specify the internal container port — Easypanel and Traefik handle the rest.

```yaml
# ❌ Avoid this
services:
  web:
    image: nginx
    ports:
      - "80:80"

# ✅ Do this instead — leave ports out, configure routing in the Domains tab
services:
  web:
    image: nginx
    expose:
      - "80"
```
:::

### Git

Connect a Git repository that contains your Compose file:

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| Repository URL | Yes | — | URL of the Git repository |
| Branch | Yes | — | Branch to deploy from |
| Build Path | Yes | `/` | Path within the repository |
| Docker Compose File | Yes | `docker-compose.yml` | Path to the compose file within the repository |

Click **Save** after filling in the fields, then **Deploy** to sync and run the stack.

For private repositories, generate an SSH key from the Git tab and add the public key to your Git provider.

## Deployments

### Deployment History

A list of all past deployments with their status and timestamp. Each entry can be expanded to view the full action log for that run. The empty state shows "No actions found."

### Deployment Trigger

Each Compose service has a webhook URL you can use to trigger deployments from external systems:

```
http://{server-ip}:3000/api/compose/deploy/{token}
```

Making a request to this URL triggers a new deployment. Use it to integrate Easypanel with CI/CD pipelines, GitHub Actions, or any external tool. A copy button is available next to the URL, and a **Refresh Deploy Token** button lets you regenerate the token if it is ever exposed.

:::caution
Treat the deploy trigger URL as a secret. Regenerate the token immediately if it is exposed.
:::

## Environment

The Environment tab provides a code editor where you define environment variables in `.env` format (`KEY=VALUE`). Variables defined here are made available to **all services** in the compose stack.

The **Create .env file** toggle, when enabled, instructs Easypanel to write a `.env` file that Docker Compose will automatically load at runtime.

:::info
The following magic environment variable is available within your Easypanel project:
- `$(PROJECT_NAME)`: Resolves to the project name.
:::

Click **Save** after making changes.

## Domains

The Domains tab manages which hostnames and paths route to which containers in your compose stack.

When a Compose service is created, Easypanel automatically generates a default domain:

```
https://{project}-{service}.{server-id}.easypanel.host
```

Each domain entry in the list shows its source URL, the destination URL it forwards to, and controls to make it primary (star), open it, edit it, or remove it.

### Adding a Domain

Click **Add Domain** to open the Create Domain modal, which has three tabs.

**Details**

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| HTTPS | — | On | Enable or disable HTTPS for this domain |
| Host | Yes | — | The domain or subdomain (e.g. `myapp.example.com`) |
| Path | Yes | `/` | The path prefix on the host |
| Protocol | Yes | HTTP | HTTP or HTTPS for the destination |
| Port | Yes | 80 | Target port inside the container |
| Destination Path | Yes | `/` | Path inside the destination |
| Compose Service | Yes | — | The named service within your `docker-compose.yml` to route traffic to (e.g. `web`, `api`, `worker`) |

:::info
The **Compose Service** field is unique to the Compose Service. It refers to the service name as defined inside your `docker-compose.yml` — not the Easypanel service name. Use the wand button to auto-detect running services.
:::

:::tip Use Domains instead of ports
The **Port** field here targets the container's internal port directly — you do not need to publish it in your compose file. This is the correct way to expose web services in Easypanel. Keep the `ports` directive out of your `docker-compose.yml` entirely.
:::

**Middlewares**

Add one or more Traefik middleware names to apply to this domain. Each middleware entry has a remove button.

**SSL**

| Field | Default | Description |
|-------|---------|-------------|
| Certificate Resolver | `letsencrypt` | Name of the Traefik certificate resolver |
| Wildcard Domain | Off | Enable wildcard SSL certificate |

## Redirects

The Redirects tab lets you add URL redirect rules powered by Traefik. Click **Add Redirect** to open the Create Redirect modal:

| Field | Required | Default | Description |
|-------|----------|---------|-------------|
| Enabled | — | On | Enable or disable this redirect rule |
| Regex | Yes | — | Regular expression to match incoming request URLs |
| Replacement | Yes | — | Replacement URL (supports capture groups from the regex) |
| Permanent | — | Off | Send HTTP 301 (permanent) instead of HTTP 302 (temporary) |

The **Load Sample Config** dropdown provides four presets to get you started quickly:

- WWW to Non-WWW
- Non-WWW to WWW
- Old Domain to New Domain
- Old Path to New Path

## Security

The Security tab lets you protect your service with HTTP Basic Authentication. Click **Add Basic Auth** and provide a **Username** and **Password**. All routes on the service will require these credentials.

## Maintenance

The Maintenance tab lets you put your service into a maintenance mode that shows a custom page to visitors instead of the live service.

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| Enabled | Toggle | Off | Enable or disable maintenance mode |
| Title | Text | — | Heading displayed on the maintenance page |
| Subtitle | Text | — | Subheading displayed on the maintenance page |
| Custom Logo | Textarea | — | SVG markup or HTML for a custom logo |
| Custom CSS | Textarea | — | CSS to style the maintenance page |
| Hide Logo | Toggle | Off | Hide the Easypanel logo on the maintenance page |
| Hide Links | Toggle | Off | Hide navigation links on the maintenance page |

Click **Save** to apply changes.

## Compose Service vs App Service

| Feature | App Service | Compose Service |
|---------|-------------|-----------------|
| Container model | Single container | Multiple containers (full `docker-compose.yml`) |
| Source | GitHub, custom Git, Docker image | Inline `docker-compose.yml` or Git |
| Networks & volumes | Managed by Easypanel | Defined in the compose file |
| Replicas / scale | Configurable in the UI | Defined in the compose file |
| Mounts | Configured per-service in the UI | Defined in the compose file |
| Ports | Configured per-service in the UI | Defined in the compose file |
| Domain routing | Routes to the service directly | Routes to a named service within the stack |
| Status | Stable | Stable |
