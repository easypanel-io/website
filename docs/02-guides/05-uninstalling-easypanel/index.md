---
sidebar_label: Uninstalling Easypanel
title: Uninstalling Easypanel
description: Uninstalling Easypanel Guide
---

# Tutorial: Uninstalling Easypanel

In this tutorial, we will guide you through the process of uninstalling Easypanel from your system using the provided commands. Please follow the steps below to successfully remove Easypanel.

## Step 1: Stop and Remove Docker Services

To uninstall Easypanel, we first need to stop and remove the Docker services associated with it. Open your terminal and execute the following command:

```shell
docker service rm easypanel traefik error-pages
```

This command will stop and remove the Docker services named `easypanel`, `traefik`, and `error-pages` from your system.

## Step 2: Remove Easypanel Configuration Files

Next, we need to remove the Easypanel configuration files. Execute the following command to delete the Easypanel configuration directory:

```shell
rm -rf /etc/easypanel
```

This command will recursively remove the `/etc/easypanel` directory, along with all its contents.

## Step 3: Verify Uninstallation

To verify that Easypanel has been successfully uninstalled, you can check if the Docker services are no longer running and if the `/etc/easypanel` directory has been removed. You can use the following commands to check:

```shell
docker service ls
```

This command will list all the running Docker services. Ensure that the services `easypanel`, `traefik`, and `error-pages` are not present in the list.

```shell
ls /etc/easypanel
```

This command will check if the `/etc/easypanel` directory still exists. If it doesn't return any output, it means that the directory has been successfully removed.

## Conclusion

By following the steps in this tutorial, you have successfully uninstalled Easypanel from your system. Remember to verify that the Docker services have been removed and the Easypanel configuration directory is no longer present. If you have any further questions or need assistance, please feel free to reach out for support.
