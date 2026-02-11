---

sidebar\_label: Custom Service Domain  
title: Custom Service Domain  
description: Learn how to configure automatic custom domains for your services in Easypanel.

---

# Custom Service Domain

Custom Service Domain is a premium feature that allows you to automatically assign custom domain names to every service you deploy in Easypanel. Instead of manually configuring domains for each service, Easypanel will automatically generate a subdomain based on your service and project names.

:::info  
This feature requires a paid Easypanel license (Hobby, Growth, or Business plan).  
:::

## How It Works

When you configure a Custom Service Domain, every service you deploy will automatically receive a extended custom service domain in the following format:

```
[service-name]-[project-name].your-custom-service-domain.com
```

For example, if you have:

*   Domain: `apps.example.com`
*   Project: `myproject`
*   Service: `api`

Your service will automatically be accessible at: `api-myproject.apps.example.com`

## Step 1 - Configure DNS at Your Domain Registrar

First, you need to add a wildcard DNS record at your domain registrar pointing to your Easypanel server's IP address.

1.  Log in to your domain registrar (e.g., Cloudflare, Namecheap, GoDaddy, Route53)
2.  Navigate to the DNS settings for your domain
3.  Add a new **A Record** with the following settings:

| Field | Value |
| --- | --- |
| Type | A |
| Name/Host | `*` (or `*.apps` if using a subdomain like `apps.example.com`) |
| Value/Points to | Your Easypanel server's IP address |
| TTL | Auto or 3600 |

### Example DNS Configurations

**For** `**.example.com**`**:**

```
Type: A
Name: *
Value: 123.45.67.89
```

**For** `***.apps.example.com**`**:**

```
Type: A
Name: *.apps
Value: 123.45.67.89
```

:::tip  
If you're using Cloudflare, you can enable the proxy (orange cloud) for additional security and performance benefits. Make sure your SSL/TLS mode is set to "Full" or "Full (Strict)".  
:::

## Step 2 - Configure Custom Service Domain in Easypanel

1.  Open your Easypanel dashboard
2.  Navigate to **Settings -> General**
3.  Find the **Custom Service Domain** section
4.  Enter your wildcard domain (e.g., `apps.example.com`)
5.  Click **Save**

:::caution  
Make sure to enter only the base domain without the wildcard (`*`). For example, enter `apps.example.com`, not `*.apps.example.com`.  
:::

## Step 3 - Deploy Your Services

Once configured, every new service you deploy will automatically receive a custom service domain. You don't need to manually add domains anymore!

1.  Create a new project or use an existing one
2.  Add a service (App, Box, or any other service type)
3.  Deploy your service
4.  Your service will automatically be accessible at `[service]-[project].your-custom-service-domain.com`

## Customizing Individual Service Domains

While the automatic domain assignment is convenient, you can still customize domains for individual services:

1.  Go to your service. 
2.  Navigate to the **Domains** section
3.  You can:
    *   **Keep the auto-generated domain** - No action needed
    *   **Add additional domains** - Click "Add Domain" and enter your custom domain
    *   **Replace the auto-generated domain** - Remove the auto-generated domain and add your own

## Best Practices

**Use a dedicated subdomain** - Instead of `*.example.com`, consider using `*.apps.example.com` to keep your main domain available for other purposes.

**Plan your naming convention** - Since domains are generated as `[service]-[project].your-custom-service-domain.com`, use descriptive project and service names.

**Monitor DNS propagation** - After adding DNS records, it may take a few minutes to a few hours for changes to propagate globally.

**Test with a single service first** - Before deploying multiple services, test with one service to ensure your DNS and Easypanel configuration is correct.

## Troubleshooting

### Domain not resolving

1.  Verify your DNS record is correctly configured using a tool like [dnschecker.org](https://dnschecker.org)
2.  Ensure the wildcard record points to the correct IP address
3.  Wait for DNS propagation (can take up to 24-48 hours in rare cases)

### Service not accessible

1.  Ensure the service is deployed and running
2.  Check that the service is listening on the configured port

## Conclusion

Custom Service Domain simplifies domain management in Easypanel by automatically assigning custom service domains to your services. With a simple wildcard DNS configuration, you can deploy services without worrying about manual domain setup each time.

If you have any questions or need further assistance, feel free to reach out to us on our [Discord channel](https://discord.gg/9bcDSXcZQ7).