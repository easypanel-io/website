---
hide_title: true
sidebar_label: Qdrant
title: Qdrant | Self-Host on Easypanel
description: How to install Qdrant on Easypanel? 1-Click installation template for Qdrant on Easypanel
---

<!-- generated -->

# Qdrant

1-Click installation template for Qdrant on Easypanel

## Description

Qdrant is a powerful vector database and vector similarity search engine designed to power the next generation of AI applications. It deploys as an API service, providing search for the nearest high-dimensional vectors. This allows embeddings or neural network encoders to be turned into full-fledged applications for matching, searching, recommending, and much more. Qdrant supports a large variety of data types and query conditions, including string matching, numerical ranges, geo-locations, and more. It is cloud-native and scales horizontally, ensuring efficient utilization of resources. With Qdrant, you can build and deploy semantic neural search on your data in minutes, understand user behavior in real time, and find similar images or detect duplicates with ease.

## Benefits

- Advanced Vector Similarity Search: Qdrant is a next-generation AI application that leverages advanced vector similarity search technology. It allows you to turn embeddings or neural network encoders into full-fledged applications for matching, searching, recommending, and much more.
- Fast and Accurate: Qdrant implements a unique custom modification of the HNSW algorithm for Approximate Nearest Neighbor Search. It provides state-of-the-art speed and applies search filters without compromising on results.
- Efficient and Scalable: Qdrant is cloud-native and scales horizontally. It effectively utilizes your resources and can be used with just the right amount of computational resources, no matter how much data you need to serve.
- Rich Data Types and Custom Business Logic: Qdrant supports a large variety of data types and query conditions. It allows you to build almost any custom business logic that should work on top of similarity matching.

## Features

- Easy to Use API: Qdrant provides the OpenAPI v3 specification to generate a client library in almost any programming language. You can also utilize ready-made clients for Python or other programming languages with additional functionality.
- Filterable: Qdrant supports additional payload associated with vectors. It not only stores payload but also allows filter results based on payload values. Unlike Elasticsearch post-filtering, Qdrant guarantees all relevant vectors are retrieved.
- Semantic Text Search: Qdrant allows you to overcome the limitations of full-text search by using a neural network-based semantic search. It uses semantic embeddings to find texts with similar meaning.
- Real-Time User Behavior Understanding: With Qdrant, user behavior can be represented as a semantic vector similar to text or images. This vector can represent user preferences, behavior patterns, or interest in the product. User vectors can be updated in real-time, eliminating the need to deploy a MapReduce cluster.
- Similar Image Search: Qdrant allows you to find similar images, detect duplicates, or even find a picture by text description. It enables you to apply arbitrary business logic on top of a similarity search.

## Links

- [Website](https://qdrant.tech/)
- [Documentation](https://qdrant.tech/documentation/)
- [Github](https://github.com/qdrant/qdrant)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/qdrant)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | qdrant
App Service Image | - | yes | qdrant/qdrant:v1.9.4

## Screenshots


## Change Log

- 2023-06-30 – first release

## Contributors

- [AlexSerban](https://github.com/serban-alexandru)
