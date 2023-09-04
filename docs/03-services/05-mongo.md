# Mongo Service

This service is based on the official [`Mongo`](https://hub.docker.com/_/mongo) Docker image.

## Data Location

The data directory can be found at the following path

```
/etc/easypanel/projects/[project]/[service]/data
```

## Remote Access

To enable remote access for your service, you need to expose it on a public port. In the panel, you can specify the port you want to expose your service to. The port must be unique.

Once you set the exposed port, your service will restart and the credentials section will reflect the updates.
