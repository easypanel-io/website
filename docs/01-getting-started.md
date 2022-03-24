---
slug: /
---

# Getting Started

## Requirements

Easypanel can run on any cloud provider. DigitalOcean, Linode, Hetzner, AWS, GCP, Azure, you name it.

You will need a Linux server with Docker installed. Most providers have predefined images for Docker which will get you up-and-running faster.

## Installing Easpanel

```shell
docker run --rm -it \
  -v /etc/easypanel:/etc/easypanel \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  easypanel/easypanel setup
```

:::info
You must have root (sudo) privileges to run this command.
:::

## Updating Easypanel

```shell
docker image pull easypanel/easypanel && docker service update easypanel
```
