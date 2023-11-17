# Builders

Since Easypanel is powered by Docker, everything needs to be built as a Docker image. When you want to deploy your own apps, all you have is the source code. Easypanel provides several ways to build a Docker image from your source code.

## Dockerfile

This is the most known way to build Docker images. You create a `Dockerfile` and inside you write instructions on how to build your image. This method gives you the most control but it requires more effort to write and maintain your `Dockerfile`.

To read more about how to write a `Dockerfile` checkout the official [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

## Heroku Buildpacks

[Heroku](https://www.heroku.com) pioneered a new way of building applications. Instead of you having to write instructions on how the app should be built, they analyze your code automatically and detect which languages and frameworks you use. It's a "magical" way to build Docker images. In our experience, it works amazingly for some languages/frameworks and it fails to work out of the box for others.

To read more about how it works and how to configure it, you can read their [documentation](https://devcenter.heroku.com/articles/heroku-20-stack).

Here are the supported languages:

- [Ruby](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-ruby)
- [Node.js](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-nodejs)
- [Python](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-python)
- [Java](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-java)
- [PHP](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-php)
- [Go](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-go)

## Paketo Buildpacks

The project was started at [Cloud Foundry](https://cloudfoundry.org). Paketo Buildpacks are very similar to Heroku Buildpacks. Check out their [documentation](https://paketo.io/).

Here are the supported languages:

- [Java](https://paketo.io/docs/howto/java/)
- [Node.js](https://paketo.io/docs/howto/nodejs/)
- [.NET Core](https://paketo.io/docs/howto/dotnet-core/)
- [Go](https://paketo.io/docs/howto/go/)
- [Python](https://paketo.io/docs/howto/python/)
- [PHP](https://paketo.io/docs/howto/php/)
- [Ruby](https://paketo.io/docs/howto/ruby/)

## Nixpacks

The project was started at [Railway](https://railway.app) in an attempt to fix the issues Heroku Buildpacks have. It uses Nix packages for reproducible environments. Check out their [documentation](https://nixpacks.com).

Here are the supported languages:

- [Crystal](https://nixpacks.com/docs/providers/crystal)
- [C#/.NET](https://nixpacks.com/docs/providers/csharp)
- [Dart](https://nixpacks.com/docs/providers/dart)
- [Deno](https://nixpacks.com/docs/providers/deno)
- [F#](https://nixpacks.com/docs/providers/fsharp)
- [Go](https://nixpacks.com/docs/providers/go)
- [Haskell](https://nixpacks.com/docs/providers/haskell)
- [Java](https://nixpacks.com/docs/providers/java)
- [Clojure](https://nixpacks.com/docs/providers/clojure)
- [Node](https://nixpacks.com/docs/providers/node)
- [PHP](https://nixpacks.com/docs/providers/php)
- [Python](https://nixpacks.com/docs/providers/python)
- [Ruby](https://nixpacks.com/docs/providers/ruby)
- [Rust](https://nixpacks.com/docs/providers/rust)
- [Staticfile](https://nixpacks.com/docs/providers/staticfile)
- [Swift](https://nixpacks.com/docs/providers/swift)
- [Zig](https://nixpacks.com/docs/providers/zig-lang)
