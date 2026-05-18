---
sidebar_label: Scripts
title: Scripts in Easypanel
description: Learn how to create and run reusable shell scripts directly from the Easypanel UI for your App and Box services.
---

# Scripts

Scripts in Easypanel let you define named shell commands that you can run against your service on demand, directly from the UI. They are available for both **App** and **Box** services.

Use scripts for one-off operational tasks — database migrations, cache clearing, data seeding, health checks, and anything else you would normally type into the console but want to save and reuse.

## When to Use Scripts

| Situation | Recommended tool |
|-----------|-----------------|
| Run a command once or on demand | **Scripts** |
| Run a command on a schedule | [Cron Job](/docs/guides/cron-job) |
| Keep a process running continuously | Processes |
| Explore or debug interactively | Console |

Scripts are ideal when the task is repeatable but not automatic. Instead of opening the console and typing the same command every time you deploy, you define it once and run it with a click.

## Finding the Scripts Section

1. Open your **project** in Easypanel.
2. Click on your **App** or **Box** service.
3. In the left navigation, select **Scripts**.

## Creating a Script

1. In the **Scripts** section, click **Add Script**.
2. Give the script a descriptive **name** (e.g., `migrate`, `seed-db`, `clear-cache`).
3. Enter the shell **command** to run (e.g., `php artisan migrate --force`).
4. Click **Save**.

:::tip
Name your scripts after what they do, not how they do it. `migrate` is clearer than `run-artisan-command`.
:::

## Running a Script

Once saved, each script appears as a row in the Scripts list. Click the **Run** button next to the script to execute it immediately inside your running container.

A log output panel will open so you can follow the execution in real time and confirm success or diagnose errors.

:::info
Scripts run inside the container using the same environment as your service, so all environment variables defined in the **Environment** section are available.
:::

## Editing and Deleting Scripts

- To **edit** a script, click the edit icon next to it, update the name or command, and save.
- To **delete** a script, click the delete icon and confirm.

Deleting a script does not affect your service or any previously run executions.

## Practical Examples

### Database migration (Laravel)

```bash
php artisan migrate --force
```

### Database seeding (Laravel)

```bash
php artisan db:seed --force
```

### Clear application cache (Laravel)

```bash
php artisan cache:clear && php artisan config:clear && php artisan route:clear
```

### Run Prisma migrations (Node.js)

```bash
npx prisma migrate deploy
```

### Run database migrations (Django)

```bash
python manage.py migrate
```

### Collect static files (Django)

```bash
python manage.py collectstatic --noinput
```

### Check application health (any service)

```bash
curl -f http://localhost:3000/health || exit 1
```

## Best Practices

**Keep scripts focused** — one script per task. Avoid combining unrelated operations in a single script; it makes failures harder to diagnose.

**Use `--force` or `--no-interaction` flags** — scripts run non-interactively, so commands that prompt for confirmation will hang. Pass the appropriate flags to skip prompts.

**Test in staging first** — destructive scripts (e.g., dropping tables, clearing data) should be validated in a staging environment before running in production.

**Prefer scripts over console for repeated tasks** — if you find yourself typing the same command in the console on every deploy, move it to a script.

## Conclusion

Scripts give you a simple, reliable way to manage operational tasks for your services without leaving the Easypanel UI. Whether you are running migrations after a deployment, seeding a fresh database, or clearing caches, scripts let you define the command once and run it whenever you need it.

If you have any questions or need further assistance, feel free to reach out on our [Discord channel](https://discord.gg/9bcDSXcZQ7).
