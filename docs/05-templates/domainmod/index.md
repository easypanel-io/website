---
hide_title: true
sidebar_label: DomainMod
title: DomainMod | Self-Host on Easypanel
description: How to install DomainMod on Easypanel? 1-Click installation template for DomainMod on Easypanel
---

<!-- generated -->

# DomainMod

1-Click installation template for DomainMod on Easypanel

## Description

DomainMOD is a comprehensive open-source application designed to help you manage your domains and other internet assets in one central location. With DomainMOD, you can keep track of your domains, SSL certificates, registrar and SSL accounts, web hosting, DNS servers, IP addresses, and more. The application also offers a Bulk Domain Updater, allowing you to modify multiple domains at once, saving you time and effort. DomainMOD also includes a Data Warehouse feature, which lets you import data from your WHM web servers for analysis and reporting. The app is mobile-friendly, ensuring you can access your data anytime, anywhere. Furthermore, DomainMOD respects your privacy, ensuring only you have access to your data.

## Benefits

- Self-Hosted & Private: DomainMOD is a self-hosted application, ensuring that only you have access to your data. In a time where privacy is a hot topic, DomainMOD gives you the control and security you need over your domain information.
- Central Management: DomainMOD allows you to manage not only your domains but also your SSL certificates, registrar and SSL accounts, web hosting, DNS servers, IP addresses, and more, all in one central location.
- Multilingual Support: DomainMOD supports multiple languages including Dutch, English (Canada), English (United States), French, German, Italian, Polish, Portuguese, Russian, and Spanish, making it accessible to a global audience.
- User-Based Currencies: Every user can set their currency in DomainMOD, and it will be used throughout the entire system. This means every setting, webpage, report, and export will automatically display values in the user's chosen currency.
- Mobile-Friendly: DomainMOD was designed with mobile in mind, ensuring you can access and manage your data even while on the go.

## Features

- Registrar Importing: DomainMOD allows you to quickly import your domains using your registrar's API. Simply add the API credentials, choose the account, and let DomainMOD do the rest.
- Bulk Domain Updater: With the Bulk Updater feature, you can modify as many domains as you want with just a few clicks, saving you time and effort.
- Custom Data Fields: DomainMOD lets you track an unlimited amount of information for your domains & SSL certificates using Custom Fields. Plus, you can export this data for further analysis.
- Reporting: DomainMOD contains a Reporting section that allows you to run various reports against your data, helping you make sense of it and gain valuable insights.
- Segment Filters: Segments in DomainMOD allow you to save lists of domains that you can use to filter against your main domains. You can see how many match, how many don't, and easily view the results.
- Task Scheduler: The Task Scheduler in DomainMOD allows you to run system tasks at set times. You can run currency conversions, send emails about upcoming expirations, check for new versions, and more!
- Data Warehouse: The Data Warehouse in DomainMOD lets you import data from your WHM web servers, which you can then view, export, and run reports against to gain insight into your servers.

## Links

- [Website](https://domainmod.org/)
- [Documentation](https://domainmod.org/docs/)
- [Github](https://github.com/domainmod/domainmod/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/domainmod)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | domainmod
App Service Image | - | yes | domainmod/domainmod:4.23
Database Service Name | - | yes | domainmod-db
Timezone | - | yes | Europe/Copenhagen

## Screenshots

![DomainMod Screenshot](./assets/screenshot.png)

## Change Log

- 2022-07-12 – first release
- 2025-01-09 – Version bumped to 4.23

## Contributors

- [Mark Topper](https://github.com/marktopper)
- [Andrei Canta](https://github.com/deiucanta)
