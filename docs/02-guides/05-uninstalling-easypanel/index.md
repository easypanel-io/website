---
sidebar_label: Uninstall Easypanel
title: Uninstalling Easypanel
description: Uninstalling Easypanel Guide
---

# Uninstall Easypanel

In this guide, we will take you through the process of uninstalling Easypanel from your system using the provided commands. Please follow the steps below to successfully remove Easypanel.

## Step 1 - Removing Docker Services

To uninstall Easypanel, we first need to stop and remove the Docker services associated with it. Open your terminal and execute the following command:

```shell
docker service rm easypanel traefik error-pages
```

This command will stop and remove the Docker services named `easypanel`, `traefik`, and `error-pages` from your system.

## Step 2 - Removing Easypanel Files

Next, we need to remove the Easypanel configuration files. Execute the following command to delete the Easypanel configuration directory:

```shell
rm -rf /etc/easypanel
```

This command will recursively remove the `/etc/easypanel` directory, along with all its contents.

## Conclusion

By following the steps in this guide, you have successfully uninstalled Easypanel from your system. Remember to verify that the Docker services have been removed and the Easypanel configuration directory is no longer present. If you have any further questions or need assistance, please feel free to reach out for support.
