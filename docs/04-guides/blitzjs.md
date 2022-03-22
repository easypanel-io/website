---
sidebar_label: Blitz JS
title: Deploy a Blitz JS app
description: How to deploy a Blitz JS app on your server.
---

This guide outlines the steps you need to follow to deploy a Blitz JS app on Easypanel.

## Create Procfile

To specify how the app should start, you need to create a `Procfile` file at the root of your project with the following contents.

```
web: yarn blitz prisma migrate deploy && yarn start --port $PORT
```

## Setup Database Service

Before deploying your Blitz JS app, you should create a database service like **Postgres**. Keep their credentials handy because you will need them later.

## Setup App Service

1. Create a new **App** service

   The **name** of the service is arbitrary. The **domain name** is where your app will live.

2. Connect Github repository

   You can do this in the **Source** panel from the **General** tab.

3. Setup environment variables

   Make sure you set the `SESSION_SECRET_KEY` variable and the other ones your app uses.

   A quick way to configure a database is to use the **Connection URL** in the `DATABASE_URL` variable.

4. Click the **Deploy** button

## FAQ

### How to specify the Node.js version?

TODO: Link to the version section in Languages -> Node.js.
