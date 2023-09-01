---
sidebar_label: Cron Job
title: Running a Cron Job on Easypanel
description: Running a Cron Job on Easypanel Guide
---

# Cron Job

A cron job is a Linux command used to schedule tasks for future execution. It allows you to automate repetitive tasks, such as sending notifications or running scripts at specific intervals. In this guide, we will explain how to set up a cron job on Easypanel using two different scenarios: with a Dockerfile and without a Dockerfile.

## Using a Dockerfile

If you have a Dockerfile for your application, you can follow these steps to set up a cron job:

Open your Dockerfile and add the following lines:

```Dockerfile
RUN echo '*/5 * * * * /path/to/script.sh' >> /etc/crontabs/root
CMD ["/usr/sbin/crond", "-f"]
```

The above example sets up a cron job to run the `script.sh` file every 5 minutes. You can adjust the interval as per your requirements. For more information on how to write cron job intervals, you can refer to [crontab.guru](https://crontab.guru/).

## Using an External Service

If you don't have a Dockerfile, you can use an external service like [cron-job.org](https://cron-job.org/en/) to set up your cron job. Here's how:

1. Visit [cron-job.org](https://cron-job.org/en/) and sign up for a free account.

2. Follow the instructions provided by cron-job.org to create a new cron job. You can specify the desired schedule and the command or script to be executed.

3. Test the cron job to ensure it works as expected. If you encounter any issues, try again, and if the problem persists, you can seek assistance on our Discord channel: [link to Discord channel].

## Conclusion

By following the steps outlined in this guide, you can easily set up a cron job on Easypanel. Whether you have a Dockerfile or prefer using an external service like cron-job.org, you have options to automate your tasks effectively. If you have any questions or need further assistance, don't hesitate to reach out to us on our Discord channel. Happy scheduling!
