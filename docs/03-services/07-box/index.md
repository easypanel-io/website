---
sidebar_label: Overview
title: Box Service
description: Development environment for your applications with presets, Web IDE, and deploy workflows.
---

# Box Service

The Box service is a development environment for your applications. It provides a pre-configured environment with popular languages, frameworks, and tools, allowing you to develop directly in a web-based IDE and deploy your application simultaneously—no local setup required.

## Box Service Presets

When you create a Box service, you choose one of the following presets. Each preset comes with the runtime, tooling, and dependencies needed to build and run that type of application.

| Preset    | Description |
|-----------|-------------|
| **PHP**   | For PHP-based applications. Includes PHP runtime, Composer, and common extensions. Use for custom PHP sites, APIs, or legacy PHP apps. |
| **Node.js** | For JavaScript and TypeScript applications. Includes Node.js, npm, and yarn. Use for Express, Fastify, or any Node-based app. |
| **Laravel** | PHP framework for web artisans. Includes PHP, Composer, and the Laravel CLI. Use for full-stack Laravel apps, APIs, and Laravel-based projects. |
| **Next.js** | React framework for production. Includes Node.js and the Next.js toolchain. Use for React apps, static sites, or server-rendered Next.js applications. |
| **WordPress** | Popular content management system. Includes PHP, WordPress CLI, and typical WordPress dependencies. Use for blogs, sites, or headless WordPress. |

Choose the preset that matches your project type. You can develop in the Web IDE, run commands in the console, and deploy from the same environment.

:::tip
The Box service eliminates the need to install development tools on your local machine. Everything runs in the cloud, accessible from any browser.
:::

## When to Use Box Service

The Box service is ideal for:

- Developing applications directly in the browser without local setup
- Quick prototyping and experimentation with different frameworks
- Learning and exploring PHP, Node.js, Laravel, Next.js, or WordPress
- Developing when you don't have access to a local development environment
- Simultaneously developing and deploying your application

## Web IDE

The Box service includes a built-in web-based IDE that allows you to:

- Edit your code directly in the browser
- Access a terminal for running commands
- Manage files and folders
- Install packages and dependencies (Composer, npm, etc.)
- Run development servers (e.g., `php artisan serve`, `npm run dev`)

## Environment

Configure environment variables for your development environment. These variables will be available at runtime.

:::info
The following "magic" environment variable is available within your Easypanel project:

- `$(PROJECT_NAME)`: This will become the project name.
:::

## Mounts

Persist your code and data using mounts. There are three types of mounts available:

**Volume**

- Creates a directory in `/etc/easypanel/projects/[project]/[service]/volumes/[volume]`
- The `name` field is the name of that volume
- The `mountPath` field is the path inside your container

**Bind**

- Binds a path on the host machine to a path inside your container
- The `hostPath` field is the path on your host machine
- The `mountPath` field is the path inside your container

**File**

- Binds a file to a path inside your container
- The `content` field is the content of your file
- The `mountPath` field is the path inside your container

:::warning
Make sure to configure volumes for your project files to ensure your code persists across restarts.
:::

## Domains & Proxy

When your application is ready to be accessed, you can configure domain names to expose your development server or production build:

- Add your domain name in the Domains section
- Configure the proxy port (the port your application listens on)
- Easypanel will automatically provision SSL certificates via Let's Encrypt

## Ports

For non-web services or additional ports, you can expose them directly:

- **Published** - The port on your host machine
- **Target** - The port inside your container

## Logs

View real-time logs from your Box service to monitor your application output, debug issues, and track development server activity.

## Console

Access a full terminal directly in your browser. Use it to:

- Run framework CLI commands (e.g., `php artisan`, `npm run dev`, `npx create-next-app`)
- Install dependencies (Composer, npm, yarn)
- Execute scripts
- Manage your application

## Development Workflow

1. **Create a Box service** in your Easypanel project and select a preset (PHP, Node.js, Laravel, Next.js, or WordPress).
2. **Access the Web IDE** to start coding.
3. **Run your development server** using the terminal.
4. **Configure a domain** to preview your application.
5. **Continue developing**—changes are live.

## Data Location

Your project files and volumes are stored at:

```
/etc/easypanel/projects/[project]/[service]/volumes/[volume]
```

## Best Practices

1. **Use volumes for your code** - Ensure your project files persist across restarts.
2. **Commit regularly** - Even though your code is in the cloud, use Git for version control.
3. **Use environment variables** - Keep sensitive data like API keys in environment variables.
4. **Monitor resources** - Development environments can consume significant resources.
