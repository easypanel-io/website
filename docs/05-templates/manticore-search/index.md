---
hide_title: true
sidebar_label: Manticore Search
title: Manticore Search | Self-Host on Easypanel
description: How to install Manticore Search on Easypanel? 1-Click installation template for Manticore Search on Easypanel
---

<!-- generated -->

# Manticore Search

1-Click installation template for Manticore Search on Easypanel

## Description

Manticore Search is an easy to use open source fast database for search. It helps thousands of companies from small to large, such as Craigslist, to search and filter petabytes of text data on a single or hundreds of nodes, do stream full-text filtering, add auto-complete, spell correction, more-like-this, faceting and other search-related technologies to their websites and applications.

## Instructions

The configuration file within the instance can be found at /etc/manticoresearch/manticore.conf. To apply custom settings, ensure that this file is mounted to your own configuration file. The ports are 9306/9308/9312 for SQL/HTTP/Binary, expose them depending on how you are going to use Manticore.

## Benefits

- High Performance: Fast search and filtering of petabytes of text data.
- Scalable: Works on single node or scales to hundreds of nodes.
- Production Ready: Used by companies like Craigslist for large-scale search.
- Feature Rich: Built-in support for advanced search features.

## Features

- Full-text Search: Advanced full-text search and filtering capabilities.
- Auto-complete: Built-in support for search suggestions.
- Spell Correction: Automatic spelling correction for search queries.
- Faceting: Support for faceted search and filtering.
- More-like-this: Find similar content based on search results.

## Links

- [Website](https://manticoresearch.com/)
- [Documentation](https://manual.manticoresearch.com/)
- [GitHub](https://github.com/manticoresoftware/manticoresearch)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/manticore-search)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | manticore-search
Manticore Image | - | yes | manticoresearch/manticore:9.2.14

## Screenshots


## Change Log

- 2025-04-03 – Initial template release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
