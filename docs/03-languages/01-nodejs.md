# Node.js

Easypanel uses Cloud Native Buildpacks to build Docker images. Thus, you don't have to write and maintain fragile `Dockerfile` files.

For a Node.js app, all you need is a `package.json` file at the root of your project.

## Building the app

In the build phase, the buildpack will install your dependencies using `npm install` or using `yarn`.

After that, it will run the `build` script from your `package.json` file.

```json title="package.json"
"scripts": {
  "build": "..."
}
```

## Running the app

By default, the buildpack will run the `start` script from your `package.json` file. You can customize that script according to your needs.

```json title="package.json"
"scripts": {
  "start": "..."
}
```

Additionally, you can change the start command by creating a `Procfile` with a `web` entry like this

```plain title="Procfile"
web: npm run start:production
```

## Specifying a Node.js version

Inside your `package.json`, you can specify the engine version like this

```json title="package.json"
"engines": {
  "node": "16.x"
}
```

## Using Yarn instead of NPM

If you have a `yarn.lock` file, the buildpack will install and use Yarn.

## Avoid purging `devDependencies`

By default, the buildpack installs `devDependencies` in the build phase but removes them after. If you want to keep your `devDependencies` you need to set `NPM_CONFIG_PRODUCTION=false` or `YARN_PRODUCTION=false` as environment variables.
