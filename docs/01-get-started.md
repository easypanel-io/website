# Get Started

## Installation

1. Create a server in your prefered cloud (DigitalOcean, Linode, Hetzner, AWS, GCP, Azure, etc)
2. Make sure you have Docker installed on the server
3. Run the following command

```shell
docker run --rm -it \
  -v /etc/easypanel:/etc/easypanel \
  -v /var/run/docker.sock:/var/run/docker.sock:ro \
  easypanel/easypanel setup
```

That's it!
