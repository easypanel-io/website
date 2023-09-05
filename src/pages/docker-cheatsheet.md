# Docker Cheat Sheet

## Installation

```
curl -sSL https://get.docker.com | sh
```

## Docker

### Basic Commands

| Command            | Description                      |
| ------------------ | -------------------------------- |
| `docker --version` | Display Docker version.          |
| `docker info`      | Display system-wide information. |
| `docker help`      | Display help for a command.      |
| `docker stats`     | Show stats of running containers |

### Container Operations

| Command                                         | Description                                           |
| ----------------------------------------------- | ----------------------------------------------------- |
| `docker run <options> <image>`                  | Start a container from an image.                      |
| `docker run --name <name> <image>`              | Specify a container name                              |
| `docker run -d <image>`                         | Start a container in background                       |
| `docker run -v <hostdir>:<targetdir> <image>`   | Map a local directory into the container when running |
| `docker run -p <hostport>:<targetport> <image>` | Publish container's port(s) to the host               |
| `docker exec -it <container> <command>`         | Execute a command in a running container.             |
| `docker exec -it <container> <executable>`      | Start a shell inside a running container              |
| `docker commit <container>`                     | Create an image out of container                      |
| `docker cp <container>:<source> <target>`       | Copy a file from a container to the host              |
| `docker cp <target> <container>:<source> `      | Copy a file from the host to a container              |
| `docker port <container>`                       | Show mapped ports of a container                      |
| `docker ps -a`                                  | List all containers.                                  |
| `docker ps`                                     | List running containers.                              |
| `docker rename <old_name> <new_name>`           | Rename a container                                    |
| `docker rm <container>`                         | Remove a stopped container.                           |
| `docker start <container>`                      | Start a stopped container.                            |
| `docker stop <container>`                       | Stop a running container.                             |

### Image Operations

| Command                          | Description                           |
| -------------------------------- | ------------------------------------- |
| `docker images`                  | List images.                          |
| `docker pull <image>`            | Pull an image from a Docker registry. |
| `docker rmi <image>`             | Remove an image.                      |
| `docker build -t <tag> .`        | Build an image from a Dockerfile.     |
| `docker push <image>`            | Upload an image to a repository       |
| `docker image prune`             | Delete dangling images                |
| `docker image prune -a`          | Delete all unused images              |
| `docker build <directory>`       | Build an image from a Dockerfile      |
| `docker tag <image> <new_image>` | Tag an image                          |
| `docker save <image> > <file>`   | Save an image to tar file             |
| `docker load -i <tarfile>`       | Load an image from a tar file         |

### Docker Registry

| Command                                              | Description                                  |
| ---------------------------------------------------- | -------------------------------------------- |
| `docker login`                                       | Log into a Docker registry.                  |
| `docker logout`                                      | Logout from a Registry                       |
| `docker tag <source_image>:<tag> <repository>:<tag>` | Tag an image.                                |
| `docker push <repository>:<tag>`                     | Push an image to a registry.                 |
| `docker search text`                                 | Search for an Image on the Official Registry |
| `docker save -o <repo_tag.tar> <repo>:<tag>`         | Export an Image/Repository as a Tarball      |

### Docker Networks

| Command                                           | Description                            |
| ------------------------------------------------- | -------------------------------------- |
| `docker network ls`                               | List networks.                         |
| `docker network create <name>`                    | Create a new network.                  |
| `docker network connect <network> <container>`    | Connect a container to a network.      |
| `docker network disconnect <network> <container>` | Disconnect a container from a network. |
| `docker network rm <network>`                     | Remove a network.                      |

### Docker Volumes

| Command                       | Description      |
| ----------------------------- | ---------------- |
| `docker volume create <name>` | Create a volume. |
| `docker volume ls`            | List volumes.    |
| `docker volume rm <volume>`   | Remove a volume. |

### Cleaning Up

| Command                  | Description                                                     |
| ------------------------ | --------------------------------------------------------------- |
| `docker system prune`    | Remove unused data (containers, volumes, networks, and images). |
| `docker container prune` | Remove all stopped containers.                                  |
| `docker image prune`     | Remove unused images.                                           |

## Dockerfile

| Command                       | Description                                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| `FROM <image>`                | Base image for the build.                                                                            |
| `MAINTAINER <email>`          | Set the name of the maintainer (metadata).                                                           |
| `COPY <source> <destination>` | Copy files or directories from the context into the container at the specified destination.          |
| `ADD <source> <destination>`  | Similar to COPY but can untar archives and accepts HTTP URLs as well.                                |
| `RUN <args>`                  | Execute an arbitrary command inside the container during the build process.                          |
| `USER <name>`                 | Set the default username or user context for subsequent commands.                                    |
| `WORKDIR <path>`              | Set the default working directory for the container.                                                 |
| `CMD <args>`                  | Set the default command to be executed when the container starts. This can be overridden at runtime. |
| `ENV <name> <value>`          | Set an environment variable with the specified name and value inside the container.                  |

## Docker Compose

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `docker-compose up`   | Start services defined in a `docker-compose.yml` file. |
| `docker-compose down` | Stop and remove all services defined in the file.      |
| `docker-compose logs` | View logs from services.                               |

## Docker Swarm

| Command                                                 | Description                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------- |
| `docker service ls`                                     | List all services in the Swarm                                |
| `docker stack services <stack_name>`                    | See all running services                                      |
| `docker service logs <stack_name> <service_name>`       | See all services logs                                         |
| `docker service scale stack_name_service_name=replicas` | Scale services across nodes                                   |
| `docker image prune`                                    | Prune unused (dangling) images                                |
| `docker image prune -a`                                 | Remove all images (including unused containers)               |
| `docker system prune`                                   | Prune the entire system (including volumes and database info) |
| `docker swarm leave`                                    | Leave Swarm                                                   |
| `docker stack rm <stack_name>`                          | Remove Swarm (deletes all volume data and database info)      |
| `docker kill $(docker ps -q)`                           | Kill all running containers                                   |

## Important Links

- [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/)
- [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
- [Docker Compose File Reference](https://docs.docker.com/compose/compose-file/compose-file-v3/)
- [Docker Engine API](https://docs.docker.com/engine/api/latest/)

<style>{`
    table tr > td:first-child {
       white-space: nowrap;
    }
`}
    
</style>
