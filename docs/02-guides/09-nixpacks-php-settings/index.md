---
sidebar_label: Custom php.ini with Nixpacks
title: Custom php.ini with Nixpacks
description: Custom php.ini with Nixpacks
---

# Custom php.ini with Nixpacks

In this guide, we will walk you through the process of updating your PHP settings, such as `max_upload_size` and `max_execution_time`, if you are using Nixpacks to build you project. This can be easily achieved by creating a `.user.ini` file in the root folder of your project. Follow the steps below to update these settings.

## Creating the .user.ini File

To change your PHP settings, you need to create a `.user.ini` file in the root directory of your project. This file allows you to override the default PHP configuration for your specific project.

### Example .user.ini File

Here is an example of a `.user.ini` file with updated PHP settings:

```ini
memory_limit            = 4G
max_execution_time      = 180
max_input_time          = 180
post_max_size           = 512M
upload_max_filesize     = 512M
max_file_uploads        = 20
```

## Verifying the Changes

To ensure that your changes have taken effect, you can create a PHP file to display the current PHP settings. For example, create a file named `phpinfo.php` in the root directory with the following content:

```php
<?php
    phpinfo();
?>
```

Access this file through your web browser (e.g., `http://<YOUR_DOMAIN>/phpinfo.php`). Look for the updated settings to verify that your changes have been applied.

## Summary

By following the steps above, you can easily update your PHP settings like `max_upload_size` and `max_execution_time` by creating and editing a `.user.ini` file in your project's root directory when using Nixpacks as a builder. This allows for flexible configuration tailored to your project's needs.

Feel free to reach out if you have any questions or need further assistance.
