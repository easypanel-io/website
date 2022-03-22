# Node.js

Easypanel uses Cloud Native Buildpacks to build Docker images. Thus, you don't have to write and maintain fragile `Dockerfile` files.

For a Node.js app, you simply need a `package.json` file at the root of your project.

## Building the app

In the build phase, the buildpack will install your dependencies using `npm install` or using `yarn`.

After that, it will run the `build` script from your `package.json` file.

```json
"scripts": {
  "build": "..."
}
```

## Running the app

By default, the buildpack will run the `start` script from your `package.json` file. You can customize that script according to your needs.

```json
"scripts": {
  "start": "..."
}
```

Aditionally, you can change the start command by creating a Procfile with a `web` entry like this

```
web: npm run start:production
```

## Specifying a Node.js Version

Inside your `package.json` you can specify the engine version like this

```json
"engines": {
  "node": "16.x"
}
```

## Using Yarn instead of NPM

If you have a `yarn.lock` file, the buildpack will install and use Yarn.

## Keeping `devDependencies`

By default, the buildpack will install `devDependencies` in the build phase but will remove them after. If you want to keep your `devDependencies` you need to set `NPM_CONFIG_PRODUCTION=false` or `YARN_PRODUCTION=false` as environment variables.
