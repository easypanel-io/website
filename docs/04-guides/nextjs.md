---
sidebar_label: Next JS
title: Deploy a Next JS app
description: How to deploy a Next JS app on your server.
---

This guide outlines the steps you need to follow to deploy a Next JS app on Easypanel.

## Setup Project

You can create a new project or use an existing one. Projects are a simple way to group your services.

## Setup App Service

1. Create a new **App** service

   The **name** of the service is arbitrary. The **domain name** is where your app will live.

2. Connect Github repository

   You can do this in the **Source** panel from the **General** tab.

3. Setup environment variables

   If your app doesn't have any variables, you can skip this step.

4. Click the **Deploy** button

## FAQ

Most of your questions have answers in the dedicated documentation section for [Node.js](/docs/languages/nodejs).

### How to specify the Node.js version?

Find the answer [here](/docs/languages/nodejs#specifying-a-nodejs-version).

### How to keep `devDependencies` in production?

Find the answer [here](/docs/languages/nodejs#avoid-purging-devdependencies).
