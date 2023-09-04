# Database Backups

The process of creating backups typically involves taking a snapshot of the data at a specific point in time and storing it in a separate location. This can be done manually or using Easypanel's automated backup.

Easypanel's database backups can be stored on a variety of different cloud storage services that supports s3.

Cloud storage services such as [`Amazon S3`](https://aws.amazon.com/fr/s3/), [`DigitalOcean Spaces`](https://www.digitalocean.com/products/spaces), and [`Scaleway Object Storage`](https://www.scaleway.com/en/object-storage/) provide scalable, durable, and secure storage for backups, and can be accessed using APIs and tools that are commonly used with backup software.

In addition to using third-party S3 providers, it is also possible to set up your own S3-compatible storage using open source software like [`MinIO`](https://min.io/) or [`Storj`](https://storj.io). This allows you to host an S3 instance on your own infrastructure, giving you full control over the storage environment and enabling you to store backups in a location that you trust.

## Requirements

- A server running Easypanel with at least one database
- An account from your S3 provider and credentials to access your bucket
- A freshly prepared bucket

## Destinations

Easypanel allows you to setup multiple S3 provider on the same server. That means that you can backup every database on a separate provider or not. To run backups you need at least one destination setup.

Every destinations needs a name that you define by yourself and it's credentials

All the following fields are required, if your configuration is wrong easypanel will throw you an error "Could not connect".

- Access Key Id
- Secret Access Key
- Bucket
- Region
- Endpoint

:::warning
If you misconfigured your crendential's permissions Easypanel won't warn you!  
 Your crendentials needs read/write access to your bucket!
:::

## Setup your database

Once you've configured your storage provider, it's time to configure your backup recurrence.
Each database service setup by Easypanel has it's own configuration. 

:::warning
The backup feature is disabled by default and only shows if you have the Hobby plan or higher.
:::

To configure database backups, go to your database service then scroll down to the 'backups' section.
This section allows you to choose which destination is targeted and which prefix your want for your database.

A prefix is appended to the final filename that will be uploaded to your storage provider. For some storage providers it will appear as a folder. For example you can set your database name or service name!

The schedule field sets a time interval for the backup to run. It is based on the CRON's format.
You can make your own cron expression easily using [`crontab.guru`](https://crontab.guru/).

:::warning
This field currently has no validation. If typed incorrectly, it won't work!
:::
