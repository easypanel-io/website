# App Service

The app service helps you deploy your application code. It's very versatile.

## Source

There are two different source types

- a Github repository
- a Docker image

For the Docker image, Easypanel will just pull the image and run it. For the Github repository Easypanel will build a Docker image from your code.

If your repository has a `Dockerfile`, the Docker image will be built will use it. Otherwise, it will detect which type of app you have and build it using Cloud Native Builpacks.

## Environment

This is where you will put the contents of your `.env` file. These variables will be available at build-time and run-time.

## Domains & Proxy

If you are deploying a web app, you want to serve your app on a domain name. Easypanel makes this very easy. Once you add a domain name and deploy your app, it will configure the proxy service to serve your app on that domain.

These days, it's really important to serve your web app on HTTPS. Easypanel will grab and setup a free Let's Encrypt certificate for you in seconds.

One important configuration you need to make is the proxy port. That is the port which your app is listening on (port 3000, 8000, etc.)

## Volumes

Since Easypanel is based on Docker, every time a service is restarted you will loose your data. The solution for that is to manually specify which files you want to persist. Docker calls these volumes and we use the same name.

There are two types of volumes you can configure

- Volume
  - this will create a directory in `/etc/easypanel/projects/[project]/[service]/volumes/[volume]`
  - the `source` field is the name of that volume
  - the `target` field is the path inside your service
- Bind
  - this will bind a path on the host machine (source) to a path inside your service (target)
  - the `source` field is the path on your host machine
  - the `target` field is the path inside your service

## Ports

The ports are useful for exposing non-web apps.

- Published - this is the port on your host machine
- Target - this is the port inside your service

:::info
If you are deploying a web app, you should use the "Domain & Proxy" settings.
:::

## Deploy settings

You can configure how many containers you want to deploy for each service. For example, if you have a worker app, you could run multiple workers in parallel.

Also, you can configure the "command" and the "arguments" which are used when starting a container.

## Deploy Webhook

Each app service has a URL which will trigger a new deployment. This is useful for 3rd party apps. You could have a chat bot that triggers the deployment or a physical button on your desk.

## Auto Deploy

After your service is fully setup and working, you can enable the auto deployment. This will add the webhook in your Github repository and every time you push to Github a deployment will start.

## Logs

Monitoring apps in production is hard. In the logs stream you will see the output for your service. If your service runs multiple containers (replicas) the outputs of all of them will be merged in the same stream.

## Console

If you want to dive even deeper into your service, you can use the console feature. This helps you start an in-browser terminal which is connected to your service.

Most services have `bash` installed. If not, `sh` will be there.

There is a special button called "Launcher". It will start a `bash` process but will also configure the environment for your (`$PATH`, etc).
