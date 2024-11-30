# App Service

The app service helps you deploy your application code. It's very versatile.

## Source

There are three different source types

- a Github repository
- a Custom git provider
- a Docker image

For the Docker image, Easypanel will just pull the image and run it. For the Github repository Easypanel will build a Docker image from your code.

If your repository has a `Dockerfile`, the Docker image will be built using it. Otherwise, it will detect which type of app you have and build it using Cloud Native Buildpacks.

## Environment

This is where you will put the contents of your `.env` file. These variables will be available at build-time and run-time.

:::info
The following "magic" environment variables exists within your EasyPanel project.

- `$(PROJECT_NAME)`: This will become the project name.
- `$(SERVICE_NAME)`: This will become the service name.
- `$(PRIMARY_DOMAIN)`: This is the services primary domain name, you can select the primary domain name by clicking the star under the service domains.
:::

## Domains & Proxy

If you are deploying a web app, you'll want to serve your app on a domain name. Once you add a domain name and deploy your app, it will configure the proxy service to serve your app on that domain.

These days, it's really important to serve your web app on HTTPS. Easypanel will grab and setup a free Let's Encrypt certificate for you in seconds.

One important configuration you need to make is the proxy port. That is the port which your app is listening on (port 3000, 8000, etc.)

## Mounts

Since Easypanel is based on Docker, every time a service is restarted you will lose your data. The solution for that is to manually specify which files you want to persist. Docker calls these mounts and we use the same name.

There are three types of mounts you can configure

- Volume
  - this will create a directory in `/etc/easypanel/projects/[project]/[service]/volumes/[volume]`
  - the `name` field is the name of that volume
  - the `mountPath` field is the path inside your container
- Bind
  - this will bind a path on the host machine (source) to a path inside your service
  - the `hostPath` field is the path on your host machine
  - the `mountPath` field is the path inside your container
- File
  - this will bind a file to a path inside your service
  - the `content` field is content of your file
  - the `mountPath` field is the path inside your container

:::info
You can mount one Docker container to use the same folder as another, enabling shared files between two containers. Ensure that both containers have the necessary permissions and ownerships to read, write, and execute the files as needed.
:::

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

## About Database Connection Pool

Because Easypanel deploys your apps as Docker containers, there is a caveat while using any database solution with your apps. It can be described as follows:

1. Initially, your app establishes connection with the database.
2. After *'X'* minutes of no requests to your app, Docker thinks that your app is not being used for a while -- hence killing all the active connections.
3. However, your app maybe configured (by default) to always have a minimum number of connections with the database. So, when your app is hit with the first request after being idle for some time, it thinks that the connection with the database is already there, so it attepmts to query the database.
4. But, since the connection was killed by Docker, your app fails to perform operations on the database - displaying `500` error to the client.
5. Now the app container realizes that there was no active connection with the database, so it establishes a new one.
6. The next request to your app is now successfully processed.

To solve this problem, you need to be sure that you set the connection pool's `min` value to `0`. This informs your application that there is zero minimum connection with the database, so it first checks if there is an active database connection before attempting to query it.

### Example (Node.js)

```javascript
// Doc: https://knexjs.org/guide/#pool
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
  },
  pool: { min: 0 }, // 👈 Notice this line. 'knex' sets this to '2' by default.
});
```
