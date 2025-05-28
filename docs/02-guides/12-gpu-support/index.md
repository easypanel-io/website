---
sidebar_label: GPU Support
title: GPU Support
description: Learn how to set up Easypanel with GPU support using the NVIDIA Container Toolkit, allowing you to run GPU-accelerated containers.
---

# GPU Support

In this guide, we will walk you through the process of setting up Easypanel with GPU support using the NVIDIA Container Toolkit. This configuration allows you to run GPU-accelerated containers for applications that require graphics processing capabilities.

## Prerequisites

Before you begin, ensure you have the following:

*   Ubuntu 20.04 or newer (commands may vary for other distributions)
*   NVIDIA GPU(s) physically installed
*   NVIDIA drivers installed on all GPU nodes

## Step 1 - Install NVIDIA Container Toolkit

Run these commands on each node that has a GPU:

```shell
# Add the NVIDIA Container Toolkit repository
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
&& curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list

# Update the package lists
sudo apt-get update

# Install NVIDIA Container Toolkit
sudo apt-get install -y nvidia-container-toolkit
```

## Step 2 - Identify GPU UUIDs

Docker identifies your GPUs by their Universally Unique IDentifier (UUID). Find the GPU UUID for the GPU(s) in your machine:

```shell
nvidia-smi -a
```

A typical UUID looks like `GPU-45cbf7b3-f919-7228-7a26-b06628ebefa1`. For Docker Swarm configuration, you only need the first two dash-separated parts, e.g.: `GPU-45cbf7b3`.

## Step 3 - Configure Docker Daemon

Modify the Docker daemon configuration file on each GPU node:

```shell
sudo nano /etc/docker/daemon.json
```

Add or modify the file to include these settings, making sure to use your GPU's UUID:

```json
{
  "runtimes": {
    "nvidia": {
      "path": "/usr/bin/nvidia-container-runtime",
      "runtimeArgs": []
    }
  },
  "default-runtime": "nvidia",
  "node-generic-resources": [
    "DOCKER_RESOURCE_GPU=GPU-45cbf7b3"
  ]
}
```

:::note
Replace `GPU-45cbf7b3` with your actual GPU UUID first parts.
:::

Next, enable GPU resource advertising by adding or uncommenting the following in `/etc/nvidia-container-runtime/config.toml`:

```
swarm-resource = "DOCKER_RESOURCE_GPU"
```

:::note
In newer versions of nvidia-container-runtime (3.2.0+), this option might be deprecated.
:::

Restart Docker to apply the changes:

```shell
sudo systemctl restart docker
```

## Step 4 - Verify NVIDIA Container Toolkit Installation

Test that the NVIDIA Container Toolkit is working properly:

```shell
sudo docker run --rm --gpus all nvidia/cuda:11.6.2-base-ubuntu20.04 nvidia-smi
```

You should see the output of `nvidia-smi` showing your GPU(s).

## Step 5 - Deploy Service From Easypanel

You can now create a service in Easypanel that will automatically use the Nvidia as a default runtime.

## Understanding GPU Runtime Overhead

Running all Docker containers using the NVIDIA runtime (e.g., with `--runtime=nvidia` or by setting it as the default runtime) **does not introduce significant overhead** if your applications are not using the GPU.

Key points to understand:

- **No GPU, No Overhead**: If the container does not use GPU features, the NVIDIA runtime does not engage GPU drivers or libraries in a way that would impact performance.

- **How It Works**: The NVIDIA runtime primarily acts as a wrapper to enable GPU access for containers. When a containerized application does not attempt to use CUDA or GPU resources, the runtime does not load GPU libraries or allocate GPU resources for that container.

- **Compatibility**: You can run containers built for GPU support on systems without a GPU, and they will simply not use GPU features. The runtime will not cause failures or meaningful slowdowns in this case.

- **Resource Usage**: There is negligible extra resource usage (CPU, memory) from the NVIDIA runtime itself when GPU features are not invoked. The container behaves similarly to running under the default `runc` runtime, unless GPU-specific calls are made.

In summary, there is no practical overhead for non-GPU workloads when using the NVIDIA runtime for all services. It is safe to use the NVIDIA runtime as the default, even for containers that do not need GPU acceleration.

## Troubleshooting

If you encounter issues with your GPU setup, try the following troubleshooting steps:

### Check GPU visibility in containers

```shell
docker run --rm --gpus all nvidia/cuda:11.6.2-base-ubuntu20.04 nvidia-smi
```

### Verify Docker runtime configuration

```shell
docker info | grep -i runtime
```

### Check service logs

```shell
docker service logs <SERVICE-NAME>
```

## Additional Notes

*   Ensure the NVIDIA driver version is compatible with the CUDA version you intend to use.
*   For production workloads, consider using resource reservation and limits to manage GPU allocation.

## Conclusion

By following the steps outlined in this guide, you have successfully set up Easypanel with GPU support using the NVIDIA Container Toolkit. This configuration allows you to run GPU-accelerated containers for applications that require graphics processing capabilities. If you encounter any issues or have further questions, please consult the Easypanel documentation or reach out to the support team.