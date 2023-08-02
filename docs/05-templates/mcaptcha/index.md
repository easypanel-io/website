---
hide_title: true
sidebar_label: mCaptcha
title: mCaptcha | Self-Host on Easypanel
description: How to install mCaptcha on Easypanel? 1-Click installation template for mCaptcha on Easypanel
---

<!-- generated -->

# mCaptcha

1-Click installation template for mCaptcha on Easypanel

## Description

mCaptcha is a proof-of-work based captcha system that prioritizes user privacy and offers a fully automated experience. Unlike traditional captcha systems, mCaptcha does not track or profile users, ensuring a privacy-focused user experience. It is designed to be robust and accurate, not relying on IP addresses for rate-limiting, making it suitable for users behind NATs. The user experience is silent and seamless, eliminating the need for annoying image-based captchas. mCaptcha uses a proof-of-work solution to fiercely defend your site, making it more expensive for attackers to target your site than for you to respond to their requests. It is a libre software, with client libraries licensed under proprietary-friendly free software licenses. mCaptcha is also compatible with reCAPTCHA and hCaptcha, making it a convenient drop-in replacement. The core functionality of mCaptcha is to use a SHA256 based proof-of-work system to rate limit users, providing a token upon successful validation that users can then submit with their request or form submission to the target website.

## Instructions

Login with aaronsw:password

## Benefits

- Privacy Focused: mCaptcha is a proof-of-work based captcha system that prioritizes your privacy. It doesn't track or profile your users, ensuring a secure and private user experience.
- Robust and Accurate: Whether your users are behind NATs or not, mCaptcha provides a seamless experience. It doesn't use IP addresses for rate-limiting, making it a reliable and accurate system.
- Best-in-class User Experience: mCaptcha is designed to be unobtrusive. Your users won't even notice it's there. No more annoying images or unnecessary tasks.
- Defend Like Castles: mCaptcha's proof-of-work based solution defends your site fiercely, making attacking your site more expensive than what it will take for you to respond to the attacker's requests.
- Libre Software: mCaptcha is a free software. It's client libraries are licensed using proprietary-friendly free software licenses but the core is AGPL'd.

## Features

- Proof-of-Work Based: mCaptcha uses SHA256 based proof-of-work (PoW) to rate limit users. This makes interacting with websites (computationally) expensive for the user, deterring malicious attacks.
- Automated Process: The entire process is automated from the user's point of view. All they have to do is click on a button to initiate the process.
- Resistant to Replay Attacks: mCaptcha's proof-of-work configurations have short lifetimes and can be used only once. This makes it resistant to replay attacks.
- Seamless User Experience: mCaptcha's user experience is super silent. Solving CAPTCHAs has never been easier. One click and your users are on their way.
- Compatible with reCAPTCHA and hCaptcha: Already using a captcha solution? No worries, mCaptcha's APIs are compatible with reCAPTCHA and hCaptcha!

## Links

- [Website](https://mcaptcha.org)
- [Documentation](https://mcaptcha.org/docs)
- [Github](https://github.com/mcaptcha/mcaptcha)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/mcaptcha)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | mcaptcha
App Service Image | - | yes | mcaptcha/mcaptcha:latest
Database Service Name | - | yes | mcaptcha-db
Redis Service Name | - | yes | mcaptcha-redis

## Screenshots

![mCaptcha Screenshot](./assets/screenshot1.png)
![mCaptcha Screenshot](./assets/screenshot2.png)
![mCaptcha Screenshot](./assets/screenshot3.png)

## Change Log

- 2023-5-18 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
