---
sidebar_label: Quickstart
title: Compose Service Quickstart (Operator)
description: Short operator runbook for Compose Service—setup, deploy, and troubleshooting.
---

# Compose Service Quickstart (Operator)

Compose Service (Beta) runs Docker Compose stacks in Easypanel with Git or inline source, deployment history, trigger URL, and panel controls.

## Fast setup (Git workflow)

1. **Create:** Project → **Service** → **Compose (Beta)** → set service name → Create
2. **Source:** Open **Source** → choose **Git**
3. **Configure:** Repository URL, Branch, Build Path, Docker Compose File → **Save**
4. **Deploy** → check **Deployments** for status and logs
5. **Verify:** **Open** URL, **Logs**, **Console** if needed
6. **Domains:** Add and configure in **Domains** for public access

## Top actions

| Action | Use for |
|--------|--------|
| **Deploy** | Run pipeline (sync Git, build, create/start containers) |
| **Stop** | Stop the stack |
| **Restart** | Restart the stack |
| **Logs** | Inspect deployment and runtime logs |
| **Console** | Shell into the service context |
| **Open** | Open service URL in browser |
| **Destroy** | Remove the Compose service and resources |

## Where to look in the UI

| Section | What you’ll find |
|---------|------------------|
| **Overview** | Controls, CPU/memory/network metrics |
| **Source** | Inline compose editor or Git (repo, branch, path, compose file) |
| **Deployments** | History, detail logs, deploy trigger URL, token refresh |
| **Environment** | Environment variables |
| **Domains** | Public routing |
| **Redirects** | Redirect rules |
| **Security** | Security options |
| **Maintenance** | Maintenance and cleanup |

## Quick troubleshooting

**Deploy fails with “No source provided”**

- Inline: add compose content and **Save**
- Git: set Repository URL, Branch, Build Path, Docker Compose File and **Save**  
Then run **Deploy** again.

**Warnings: “ports is used in [service]…”**

- Host ports can conflict with other services. Prefer internal networking and **Domains** for HTTP/HTTPS.
- If you need ports, keep them unique and redeploy after changes.

**Deploy failed or inconsistent state**

1. Open **Deployments** → **View** on the failed run → read action logs
2. Fix **Source** (compose or Git) if wrong
3. **Restart** or **Deploy** again

## Minimal runbook

1. **Before changes:** Check **Logs** / **Deployments** for current state
2. **Change:** Edit **Source** or **Environment** → **Save**
3. **Deploy**
4. **Verify:** **Open** URL + **Logs** + process state
5. **If failed:** Check deployment detail logs → fix source/config → **Restart** or **Deploy** again

## Security reminders

- **Deploy trigger URL** = secret; rotate (regenerate token) if exposed
- Prefer **private repo + SSH key** for production
- Use **Domains** and panel routing instead of unnecessary host `ports` in Compose

---

For full reference, see [Compose Service (Overview)](/docs/services/compose).
