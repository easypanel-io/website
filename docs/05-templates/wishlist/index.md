---
hide_title: true
sidebar_label: Wishlist
title: Wishlist | Self-Host on Easypanel
description: How to install Wishlist on Easypanel? 1-Click installation template for Wishlist on Easypanel
---

<!-- generated -->

# Wishlist

1-Click installation template for Wishlist on Easypanel

## Description

Wishlist is a self-hosted gift registry and wishlist management application that simplifies gift-giving for families, friends, and special occasions. It provides a centralized platform where users can create and share wishlists, claim items to prevent duplicate gifts, and track purchase status. The application features automatic product data fetching from URLs, user-friendly interfaces accessible to all ages, and support for multiple groups to separate different circles like family, friends, or coworkers. Wishlist includes registry mode for wedding registries or single comprehensive lists, item claiming with privacy to prevent gift spoilers, purchase tracking for claimed items, gift suggestions from friends and family, and user invitation via email with SMTP integration. Built with a modern web interface and Progressive Web App support, Wishlist offers seamless access across devices with offline capabilities. The application uses SQLite for lightweight data storage and stores user-uploaded images locally, ensuring all data remains on your infrastructure. With OAuth authentication support and customizable token expiration, Wishlist provides secure access control while maintaining ease of use. Perfect for families coordinating holidays and birthdays, couples managing wedding registries, friend groups organizing gift exchanges, or anyone who wants a private alternative to public wishlist services with complete control over their data and privacy.

## Benefits

- Prevent Duplicate Gifts: Users can claim items on wishlists, ensuring no one accidentally buys the same gift and eliminating gift-giving coordination headaches.
- Self-Hosted Privacy: Keep all wishlist data, user information, and gift plans on your own infrastructure, away from commercial platforms and data mining.
- Family-Friendly Interface: Simple, intuitive design that works for all age groups, making it easy for grandparents, parents, and kids to participate.
- Multi-Group Organization: Create separate groups for different social circles, keeping family wishlists separate from friend groups or coworkers.

## Features

- Item Claiming System: Claim items on wishlists to prevent duplicates while keeping the surprise intact with privacy settings that hide claims from list owners.
- Purchase Tracking: Mark claimed items as purchased to track fulfillment status and see which gifts have been bought.
- Automatic Product Fetching: Paste a product URL and automatically retrieve product name, price, image, and description from major retailers.
- User Invitations: Invite family and friends via email with customizable signup tokens and SMTP integration for seamless onboarding.
- Gift Suggestions: Provide and receive gift suggestions, helping friends and family contribute ideas when users need inspiration.
- Progressive Web App: Install on any device as a PWA for app-like experience with offline support and home screen shortcuts.
- Registry Mode: Enable registry mode for weddings or special events to maintain a single comprehensive list for all items.
- OAuth Authentication: Secure login with OAuth provider support for convenient and secure user authentication.

## Links

- [GitHub](https://github.com/cmintey/wishlist)
- [Docker Hub](https://github.com/cmintey/wishlist/pkgs/container/wishlist)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/wishlist)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | wishlist
App Service Image | - | yes | ghcr.io/cmintey/wishlist:v0.55.0
Token Expiration Time (hours) | - | no | 72

## Screenshots

![Wishlist Screenshot](./assets/screenshot.png)

## Change Log

- 2025-11-28 – Template Release

## Contributors

- [Ahson Shaikh](https://github.com/Ahson-Shaikh)
