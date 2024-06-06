---
hide_title: true
sidebar_label: Mongo Express
title: Mongo Express | Self-Host on Easypanel
description: How to install Mongo Express on Easypanel? 1-Click installation template for Mongo Express on Easypanel
---

<!-- generated -->

# Mongo Express

1-Click installation template for Mongo Express on Easypanel

## Description

mongo-express is a web-based MongoDB admin interface designed with Node.js, Express, and Bootstrap3. It allows you to connect to multiple databases, view, add, delete databases, and manage collections. You can also view, add, update, and delete documents within these collections. The app supports previewing audio, video, and image assets inline in the collection view. Large or nested objects are collapsible for easy overview, and big document properties are loaded on-demand to keep the collection view fast. The app also supports GridFS, enabling you to add, get, and delete incredibly large files. It uses BSON data types in documents and is mobile responsive, thanks to Bootstrap 3. The app also supports connection and authentication to individual databases, as well as admin authentication to view all databases. It includes features for database blacklist/whitelist, custom CA, and CA validation disabling, and supports replica sets.

## Benefits

- Efficient Database Management: mongo-express is a web-based MongoDB admin interface that allows you to efficiently manage your databases. You can connect to multiple databases, view, add, delete databases, and authenticate to individual databases.
- Comprehensive Collection Management: The app provides comprehensive collection management features. You can view, add, rename, and delete collections. It also allows you to view, add, update, and delete documents within the collections.
- Large File Support: With GridFS support, mongo-express allows you to add, get, and delete incredibly large files. This makes it a suitable tool for managing large datasets.
- Mobile Responsive: mongo-express is mobile responsive, making it easy to manage your databases even when you're on the go. It works passably on small screens, providing you with flexibility and convenience.

## Features

- Database and Collection Management: mongo-express allows you to connect to multiple databases, view, add, delete databases, view, add, rename, delete collections, and view, add, update, delete documents.
- Large File Handling: The app supports GridFS, enabling you to add, get, and delete incredibly large files. It also features async on-demand loading of big document properties to keep the collection view fast.
- Asset Preview: mongo-express allows you to preview audio, video, and image assets inline in the collection view. This feature enhances your user experience by providing a quick overview of your assets.
- Data Type Support: mongo-express supports the use of BSON data types in documents, providing you with flexibility in data management.
- Authentication Features: The app allows you to connect and authenticate to individual databases. You can also authenticate as an admin to view all databases.
- Customization Options: mongo-express provides various customization options, including database blacklist/whitelist, custom CA, and CA validation disabling. It also supports replica sets.

## Links

- [Github](https://github.com/mongo-express/mongo-express)
- [Docker](https://hub.docker.com/_/mongo-express/)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mongo-express)

## Options

Name | Description | Required | Default Value
-|-|-|-
Mongo URL | mongodb://admin:pass@localhost:27017/db?ssl=false | yes | 
Username | - | no | 
Password | - | no | 
App Service Name | - | yes | mongo-express
App Service Image | - | yes | mongo-express:1.0.2-18

## Screenshots

![Mongo Express Screenshot](./assets/screenshot1.png)
![Mongo Express Screenshot](./assets/screenshot2.png)
![Mongo Express Screenshot](./assets/screenshot3.png)
![Mongo Express Screenshot](./assets/screenshot4.png)

## Change Log

- 2023-07-10 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
