---
sidebar_label: Remote Docker Builder
title: Remote Docker Builder
description: Remote Docker Builder
---

# How to create a remote Docker builder in Easypanel?

In this guide, we will learn how to create a remote Docker builder in Easypanel. In versions above `2.8.0`, Easypanel supports remote Docker builders. Following this guide will help you to create a remote Docker builder to avoid high resource consumption on your machine.

## Prerequisites

- Easypanel installed and running on your server (version above `2.8.0`).
- a remote server with Docker installed and running.

## Step 1 - Create the Docker Builder on your remote server

Run the following command on your remote server to create the Docker builder:

```shell
docker run -d --rm \
  --name=remote-buildkitd \
  --privileged \
  -p 1234:1234 \
  moby/buildkit:latest \
  --addr tcp://0.0.0.0:1234
```

This command will create a Docker builder on your remote server and expose the port `1234`.

## Step 2 - Connect to your remote Docker builder

Run the following command on your main server to create the Docker builder:

```shell
docker buildx create \
  --use \
  --name remote-container \
  --driver remote \
  --driver-opt default-load=true \
  tcp://{REMOTE_SERVER_IP}:1234
```

## Summary

By following the steps above, you can easily create a remote Docker builder. Feel free to reach out if you have any questions or need further assistance.
