---
sidebar_label: Quickstart
title: Box Service Quickstart (Operator)
description: 60-second operator cheat sheet for Box Service—setup, daily ops, UI locations, and troubleshooting.
---

# Box Service Quickstart (Operator)

60-second summary: **Box Service** = flexible custom service in Easypanel with deploy scripts, process management, logs/console, IDE, and domain routing.

## Fast setup

1. **Go to:** Project → Create Service → **Box**
2. Set **service name**
3. Choose **preset** (PHP, Node.js, Laravel, Next.js, WordPress) or **No Preset**
4. **Install repo** (or Skip)
5. **Deploy**
6. Open **Logs** + **Console** to verify
7. **Add domain** if needed

## Daily operations

| Action | Use for |
|--------|--------|
| **Deploy** | Run latest deployment logic |
| **Stop / Restart** | Recover process state |
| **Logs** | First place to check for failures |
| **Console** | Inspect runtime manually |
| **Rebuild Docker image** | Fix environment-layer issues |

## Where to look in the UI

| Section | What you’ll find |
|---------|------------------|
| **Overview** | Controls + runtime stats |
| **Deployments** | Deployment script, history, trigger URL |
| **Git** | Repo + branch |
| **Processes** | App/worker command control |
| **Scripts** | Reusable ops scripts |
| **Domains** | Public routing |
| **IDE** | Quick edits |
| **Modules** | Runtime/web stack settings |

## Quick troubleshooting

**If deployment looks wrong:**

1. Check **Logs**
2. Verify **Processes** are correct and running
3. Test **Open URL**
4. If still inconsistent → **Rebuild Docker image** then redeploy

**If the UI shows an error but the app seems to work:**  
Trust logs, metrics, and process state over the toast message only.

## Minimal runbook

1. **Before changes:** open Logs
2. **Deploy** your change
3. **Verify:** URL + logs + process status
4. **If failed:** Restart → if still failed, **Rebuild image** → redeploy

---

For full reference, see [Box Service (Overview)](/docs/services/box).
