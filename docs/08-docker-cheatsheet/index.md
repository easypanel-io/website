---
sidebar_label: Docker Cheatsheet
title: Docker Cheat Sheet
description: Docker Cheat Sheet
---

# Docker Cheat Sheet

### \# The 'run' command

```bash
docker run IMAGE
```

#### assign a name to the container:

```bash
docker run -p HOSTPORT:CONTAINERPORT IMAGE
```

#### map all ports of image

```bash
docker run -P IMAGE
```

#### start a container in background

```bash
docker run -d IMAGE
```

#### assign a container when running

```bash
docker run --hostname HOSTNAME IMAGE
```

#### add a DNS entry when running

```bash
docker run --add-host HOSTNAME:IP IMAGE
```

#### map a local directory into the container when running

```bash
docker run -v HOSTDIR:TARGETDIR IMAGE
```

#### change the entrypoint when running

```bash
docker run -it --entrypoint EXECUTABLE IMAGE
```

### \# Manage Containers

#### Show a list of all running containers

```bash
docker ps
```

#### Show a list of all containers

```bash
docker ps -a
```

#### Delete a container

```bash
docker rn CONTAINER
```

#### Delete a running container

```bash
docker rm -f CONTAINER
```

#### Delete stopped containers

```bash
docker container prune
```

#### Stop a running container

```bash
docker stop CONTAINER
```

#### Start a stopped container

```bash
docker start CONTAINER
```

#### Copy a file from a container to the host

```bash
docker cp CONTAINER:SOURCE TARGET
```

#### Copy a file from the host to a container

```bash
docker cp TARGET CONTAINER:SOURCE
```

#### Start a shell inside a running container

```bash
docker exec -it CONTAINER EXECUTABLE
```

#### Rename a container

```bash
docker rename OLD_NAME NEW_NAME
```

#### Create an image out of container

```bash
docker commit CONTAINER
```

### \# Manage Images

#### Download an image

```bash
docker pull IMAGE[:TAG]
```

#### Upload an image to a repository

```bash
docker push IMAGE
```

#### Delete an image

```bash
docker rmi IMAGE
```

#### Show a list of all Images

```bash
docker images
```

#### Delete dangling images

```bash
docker image prune
```

#### Delete all unused images

```bash
docker image prune -a
```

#### Build an image from a Dockerfile

```bash
docker build DIRECTORY
```

#### Tag an image

```bash
docker tag IMAGE NEWIMAGE
```

#### Build and tag an image from a Dockerfile

```bash
docker build -t IMAGE DIRECTORY
```

#### Save an image to tar file

```bash
docker save IMAGE > FILE
```

#### Load an image from a tar file

```bash
docker load -i tarfile
```

### \# Info & Stats

#### Show the logs of a container

```bash
docker logs CONTAINER
```

#### Show stats of running containers

```bash
docker stats
```

#### Show processes of container

```bash
docker top CONTAINER
```

#### Show installed docker version

```bash
docker version
```

#### Get detailed info about an object

```bash
docker inspect NAME
```

#### Show all modified files in container

```bash
docker diff CONTAINER
```

#### Show mapped ports of a container

```bash
docker port CONTAINER
```

### \# Image Management Commands

#### List all local images

```bash
docker images
```

#### Show the image history (list of ancestors)

```bash
docker history IMAGE
```

#### Show low-level infos (json format)

```bash
docker inspect IMAGE
```

#### Tag an image

```bash
docker tag IMAGE TAG
```

#### Create an image (from a container)

```bash
docker commit container image
```

#### Create an image (from a tarball)

```bash
docker import url TAG
```

#### Delete images

```bash
docker rmi IMAGE
```

### \# Image Transfer Commands

#### Pull an Image/Repository from a Registry

```bash
docker pull repo:tag
```

#### Push an Image/Repository to a Registry

```bash
docker push repo:tag
```

#### Search for an Image on the Official Registry

```bash
docker search text
```

#### Login to a Registry

```bash
docker login
```

#### Logout from a Registry

```bash
docker logout
```

#### Export an Image/Repository as a Tarball

```bash
docker save -o repo_tag.tar repo:tag
```

#### Load Images from a Tarball

```bash
docker load -i repo_tag.tar
```

#### Proposed Script to Transfer Images Between Two Daemons over SSH

```bash
docker-ssh10 transfer_script
```

### \# Builder main commands

#### FROM

- **Command:**

  ```
  FROM image|scratch
  ```

- **Description:**
  Base image for the build.

#### MAINTAINER

- **Command:**

  ```
  MAINTAINER email
  ```

- **Description:**
  Set the name of the maintainer (metadata).

#### COPY

- **Command:**

  ```
  COPY path dst
  ```

- **Description:**
  Copy files or directories from the context into the container at the specified destination.

#### ADD

- **Command:**

  ```
  ADD src dst
  ```

- **Description:**
  Similar to COPY but can untar archives and accepts HTTP URLs as well.

#### RUN

- **Command:**

  ```
  RUN args...
  ```

- **Description:**
  Execute an arbitrary command inside the container during the build process.

#### USER

- **Command:**

  ```
  USER name
  ```

- **Description:**
  Set the default username or user context for subsequent commands.

#### WORKDIR

- **Command:**

  ```
  WORKDIR path
  ```

- **Description:**
  Set the default working directory for the container.

#### CMD

- **Command:**

  ```
  CMD args...
  ```

- **Description:**
  Set the default command to be executed when the container starts. This can be overridden at runtime.

#### ENV

- **Command:**

  ```
  ENV name value
  ```

- **Description:**
  Set an environment variable with the specified name and value inside the container.

### \# Dockerfile

- **Inheritance:**

  ```Dockerfile
  FROM ruby:2.2.2
  ```

- **Variables:**

  ```Dockerfile
  ENV APP_HOME /myapp
  ```

- **Initialization:**

  ```Dockerfile
  RUN mkdir $APP_HOME
  ```

- **Initialization (Continued):**

  ```Dockerfile
  RUN bundle install
  WORKDIR /myapp
  VOLUME ["/data"]
  ADD file.xyz /file.xyz
  COPY --chown=user:group host_file.xyz /path/container_file.xyz
  ```

- **Onbuild:**

  ```Dockerfile
  ONBUILD RUN bundle install
  ```

- **Commands:**

  ```Dockerfile
  EXPOSE 5900
  CMD ["bundle", "exec", "rails", "server"]
  ```

- **Entrypoint:**

  ```Dockerfile
  ENTRYPOINT ["executable", "param1", "param2"]
  ENTRYPOINT command param1 param2
  ```

- **Metadata:**

  ```Dockerfile
  LABEL version="1.0"
  LABEL "com.example.vendor"="ACME Incorporated"
  LABEL com.example.label-with-value="foo"
  LABEL description="This text illustrates that label-values can span multiple lines."
  ```

- **See also:**
  [Official Docs](https://docs.docker.com/engine/reference/builder/)

#### docker-compose

- **Basic example (docker-compose.yml):**

  ```yaml
  version: "2"

  services:
    web:
      build: .
      context: ./Path
      dockerfile: Dockerfile
      ports:
        - "5000:5000"
      volumes:
        - .:/code
    redis:
      image: redis
  ```

- **Commands:**

  - `docker-compose start`
  - `docker-compose stop`
  - `docker-compose pause`
  - `docker-compose unpause`
  - `docker-compose ps`
  - `docker-compose up`
  - `docker-compose down`

- **Reference:**

  - **Building:**

    ```yaml
    web:
      build: .
      build:
        context: ./dir
        dockerfile: Dockerfile.dev
      image: ubuntu
      image: ubuntu:14.04
      image: tutum/influxdb
      image: example-registry:4000/postgresql
      image: a4bc65fd
    ```

  - **Ports:**

    ```yaml
    ports:
      - "3000"
      - "8000:80" # guest:host
    expose: ["3000"]
    ```

  - **Commands:**

    ```yaml
    command: bundle exec thin -p 3000
    command: [bundle, exec, thin, -p, 3000]
    entrypoint: /app/start.sh
    entrypoint: [php, -d, vendor/bin/phpunit]
    ```

  - **Environment variables:**

    ```yaml
    environment:
      RACK_ENV: development
    environment:
      - RACK_ENV=development
    env_file: .env
    env_file: [.env, .development.env]
    ```

  - **Dependencies:**

    ```yaml
    links:
      - db:database
      - redis
    depends_on:
      - db
    ```

  - **Other options:**
    ```yaml
    extends:
      file: common.yml
      service: webapp
    volumes:
      - /var/lib/mysql
      - ./_data:/var/lib/mysql
    ```

- **Advanced features:**

  - **Labels:**

    ```yaml
    services:
      web:
        labels:
          com.example.description: "Accounting web app"
    ```

  - **DNS servers:**

    ```yaml
    services:
      web:
        dns: 8.8.8.8
    ```

  - **Devices:**

    ```yaml
    services:
      web:
        devices:
          - "/dev/ttyUSB0:/dev/ttyUSB0"
    ```

  - **External links:**

    ```yaml
    services:
      web:
        external_links:
          - redis_1
          - project_db_1:mysql
    ```

  - **Hosts:**
    ```yaml
    services:
      web:
        extra_hosts:
          - "somehost:192.168.1.100"
    ```

#### Docker Swarm Commands

- **List all services in the Swarm:**

  ```
  docker service ls
  ```

- **See all running services:**

  ```
  docker stack services stack_name
  ```

- **See all services logs:**

  ```
  docker service logs stack_name service_name
  ```

- **Scale services across nodes:**

  ```
  docker service scale stack_name_service_name=replicas
  ```

- **Clean up:**

  - Prune unused (dangling) images:

    ```
    docker image prune
    ```

  - Remove all images (including unused containers):

    ```
    docker image prune -a
    ```

  - Prune the entire system (including volumes and database info):
    ```
    docker system prune
    ```

- **Leave Swarm:**

  ```
  docker swarm leave
  ```

- **Remove Swarm (deletes all volume data and database info):**

  ```
  docker stack rm stack_name
  ```

- **Kill all running containers:**
  ```
  docker kill $(docker ps -q)
  ```

#### Docker Security - Docker Scout

- **Analyzing a Software Artifact for Vulnerabilities:**

  ```
  docker scout cves [OPTIONS] IMAGE|DIRECTORY|ARCHIVE
  ```

- **Display vulnerabilities from a Docker save tarball:**

  ```
  docker scout cves --format sarif --output redis.sarif.json redis
  ```

- **Comparing two images:**

  ```
  docker scout compare --to redis:6.0 redis:6-bullseye
  ```

- **Displaying the Quick Overview of an Image:**
  ```
  docker scout quickview redis:6.0
  ```
