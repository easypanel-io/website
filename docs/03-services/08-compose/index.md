---
sidebar_label: Overview
title: Compose Service
description: Deploy multi-container Docker Compose stacks with Git or inline compose files, domains, and operational controls.
---

# Compose Service

The **Compose Service** in Easypanel lets you deploy and run multi-container applications using Docker Compose. You get built-in controls for deployment, domains, security, maintenance, and integration with Git—all from the panel.

:::caution Beta
Compose Service is currently in **Beta**. Use staging or non-critical workloads first, and keep backups and a rollback plan.
:::

## When to Use Compose Service

Compose Service is **especially recommended** when **App Service limitations** prevent a successful deploy—for example when your stack requires options that App Service cannot map, such as **running a container as root** (user/security context in Docker Compose). In those cases, Compose gives you full control over the compose file and runtime.

Compose is also a good fit when you:

- Have an existing `docker-compose.yml` (or `compose.yaml`) and want to run it in Easypanel
- Need multiple containers that work together (e.g. app + database + cache)
- Want to connect the stack to a Git repo and redeploy on changes
- Prefer panel controls (deploy, restart, logs, console, domains) over CLI-only workflows

:::important
**Networking:** Services inside a Compose stack run on a **separate network** from other apps in the same project. They can talk to each other by service name within the stack, but they are isolated from non-Compose services in the project.
:::

:::info
For a single container or simple app without these needs, the [App Service](/docs/services/app) or [Box Service](/docs/services/box) may be simpler.
:::

## Creating a Compose Service

1. Open your **project**
2. Go to **Service** → choose **Compose (Beta)**
3. Enter a **service name**
4. Click **Create**

The Compose service is created immediately. You must configure **Source** before you can deploy.

## Source Configuration

You can provide your Compose configuration in two ways.

### Inline compose file

- Use the built-in editor to paste or edit your `docker-compose.yml` (or `compose.yaml`) content.
- Click **Save** to store the configuration.

:::warning
Deploy will fail with **No source provided** if the compose source is empty or not saved. Ensure the editor has valid content and you have saved before deploying.
:::

### Git source

Connect a Git repository that contains your Compose file and optional build context:

| Field | Description |
|-------|-------------|
| **Repository URL** | Git repository URL (required) |
| **Branch** | Branch to use (e.g. `main`, `master`) |
| **Build Path** | Path in the repo where the Compose file and build context live (e.g. `/nginx-flask-mysql`) |
| **Docker Compose File** | Compose filename (e.g. `compose.yaml`, `docker-compose.yml`) |

For **private repositories**, use **Generate SSH key** and add the public key to your Git provider.

Example:

- **Repository:** `https://github.com/docker/awesome-compose`
- **Branch:** `master`
- **Build Path:** `/nginx-flask-mysql`
- **Docker Compose File:** `compose.yaml`

After saving, **Deploy** will sync the repo, build images if needed, and orchestrate the stack.

## Service Interface

For a Compose service, the left navigation typically includes:

| Section | Purpose |
|--------|--------|
| **Overview** | Summary, controls, and runtime metrics (CPU, memory, network) |
| **Source** | Inline compose editor or Git configuration |
| **Deployments** | Deployment history, detail logs, and deploy trigger URL |
| **Environment** | Environment variables for the stack |
| **Domains** | Public URLs and routing |
| **Redirects** | Redirect rules |
| **Security** | Security-related options |
| **Maintenance** | Maintenance and cleanup options |

### Top action bar

- **Deploy** – Run the deployment pipeline (sync Git if used, build, create/start containers).
- **Stop** – Stop the stack.
- **Restart** – Restart the stack.
- **Logs** – View logs (deployment and/or runtime).
- **Console** – Open a shell in the service context.
- **Open** – Open the service URL in a browser.
- **Destroy** – Remove the Compose service and its resources (use with care).

## Deployment Lifecycle

1. **Deploy** runs the pipeline: Git sync (if configured), image pull/build, network and volume creation, container create/start.
2. **Deployments** shows each run; **View** opens the detailed action log for that deployment.
3. A unique **deploy trigger URL** is available for the service (e.g. for CI/CD or webhooks). You can **regenerate** the deploy token if it is exposed or rotated.

:::tip
Treat the deploy trigger URL as a secret. Rotate it (regenerate token) if it is ever exposed.
:::

## Warnings and Errors

### No source provided

- **Cause:** Deploy was run without a valid source (inline compose empty/unsaved or Git not configured).
- **Fix:** Add and save your compose content in **Source**, or complete and save Git settings, then deploy again.

### Compose configuration warnings

Easypanel may show warnings such as:

- **"ports is used in [service]. It might cause conflicts with other services."**

Published `ports` in your Compose file expose containers on the host and can conflict with other services or with panel-managed routing.

- **Prefer:** Use internal networking between services and expose only what you need via **Domains** and panel routing.
- **If you need host ports:** Ensure they are unique and document why they are required.

Resolve or acknowledge these in the Compose configuration, then redeploy if you made changes.

## Volumes and Data

Volumes defined in your Compose file are managed by Easypanel. Data is stored under:

```
/etc/easypanel/projects/[project]/[service]/volumes/
```

:::warning
Only data in defined volumes is persisted. Data written elsewhere in containers will be lost on restart or redeploy.
:::

## Networking

Services in the same Compose stack can reach each other by **service name** as hostname. Easypanel sets up a **dedicated network for that Compose stack**—separate from other apps and services in the same project. So Compose services can talk to each other inside the stack, but they are not on the same network as App or Box services in the project.

Example: if you have services `backend` and `db` in the stack, the backend can connect to the database at `db:5432` (or the port you define).

## Environment Variables

Configure variables in the **Environment** tab and/or in your Compose file (`environment` or `env_file`).

:::info
Easypanel project “magic” variable you can use:
- `$(PROJECT_NAME)` – project name
:::

## Security and Production

1. **Deploy trigger URL** – Treat as a secret; rotate (regenerate) if exposed.
2. **Git** – Prefer a dedicated branch and, for production, private repos with SSH key authentication.
3. **Ports** – Avoid unnecessary `ports` in Compose; use Domains and panel routing for HTTP/HTTPS where possible.
4. **Beta** – Use staging first, keep backups, and have a rollback plan.

## Troubleshooting

| Situation | What to do |
|-----------|------------|
| Deploy fails | Open **Deployments** → **View** on the failed run and check the action logs (sync, build, create/start steps). |
| Warnings in UI | Read the Compose issues panel; address port conflicts or other reported issues, then save and redeploy. |
| Service not reachable | Check **Domains** and **Open** URL; verify the app listens on the port you configured. |
| Unclear state | Check **Logs** and **Console**; **Restart** the stack, or **Rebuild** (if available) and redeploy. |

## Example Compose Snippet

```yaml
version: "3.8"
services:
  web:
    image: nginx:alpine
    volumes:
      - ./html:/usr/share/nginx/html
    depends_on:
      - api

  api:
    image: node:18-alpine
    working_dir: /app
    command: node server.js
    environment:
      - DATABASE_URL=postgres://db:5432/myapp
    depends_on:
      - db

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:
```

Prefer **Domains** in Easypanel to expose the web front instead of publishing host ports in Compose when possible.

## Best Practices

1. **Pin image tags** – Avoid `latest` for reproducible deployments.
2. **Use `depends_on`** – Make startup order explicit.
3. **Externalize config** – Use environment variables for environment-specific settings.
4. **Minimize host ports** – Rely on internal networking and panel Domains/redirects.
5. **Health checks** – Add `healthcheck` in Compose where supported for more reliable orchestration.

## See Also

- [Compose Service Quickstart](/docs/services/compose/quickstart) – Short operator runbook
- [App Service](/docs/services/app) – Single-container or build-from-repo apps
- [Box Service](/docs/services/box) – Development environments with presets
