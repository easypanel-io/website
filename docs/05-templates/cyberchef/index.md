---
hide_title: true
sidebar_label: CyberChef
title: CyberChef | Self-Host on Easypanel
description: How to install CyberChef on Easypanel? 1-Click installation template for CyberChef on Easypanel
---

<!-- generated -->

# CyberChef

1-Click installation template for CyberChef on Easypanel

## Description

CyberChef, also known as the Cyber Swiss Army Knife, is a versatile web app designed to perform a wide array of &#39;cyber&#39; operations within a web browser. It offers simple encoding methods like XOR and Base64, alongside more complex encryption techniques such as AES, DES, and Blowfish. CyberChef also provides tools for creating binary and hexdumps, compressing and decompressing data, calculating hashes and checksums, parsing IPv6 and X.509, changing character encodings, and much more. The app is designed to be user-friendly, enabling both technical and non-technical analysts to manipulate data in complex ways without the need for intricate tools or algorithms. CyberChef is still under active development, with ongoing testing, bug fixing, new feature additions, and documentation improvements.

## Benefits

- Data Manipulation: CyberChef is a web app that enables both technical and non-technical analysts to manipulate data in complex ways without having to deal with complex tools or algorithms. It simplifies tasks such as simple encoding like XOR and Base64, more complex encryption like AES, DES and Blowfish, creating binary and hexdumps, compression and decompression of data, calculating hashes and checksums, IPv6 and X.509 parsing, changing character encodings, and much more.
- Intuitive Interface: The app features an intuitive interface with four main areas: the input box, the output box, the operations list, and the recipe area. Users can easily drag and drop operations into the recipe area and see the outcome of their processing in the output box.
- Automated Encoding Detection: CyberChef uses a number of techniques to automatically detect which encodings your data is under. If it finds a suitable operation that makes sense of your data, it displays the 'magic' icon in the Output field which you can click to decode your data.

## Features

- Drag and Drop: Operations can be dragged in and out of the recipe list, or reorganised. Files up to 2GB can be dragged over the input box to load them directly into the browser.
- Auto Bake: Whenever you modify the input or the recipe, CyberChef will automatically 'bake' for you and produce the output immediately. This can be turned off and operated manually if it is affecting performance.
- Breakpoints: You can set breakpoints on any operation in your recipe to pause execution before running it. You can also step through the recipe one operation at a time to see what the data looks like at each stage.
- Save and Load Recipes: If you come up with an awesome recipe that you know you’ll want to use again, just click 'Save recipe' and add it to your local storage. It'll be waiting for you next time you visit CyberChef. You can also copy the URL, which includes your recipe and input, to easily share it with others.
- Search: If you know the name of the operation you want or a word associated with it, start typing it into the search field and any matching operations will immediately be shown.
- Highlighting: When you highlight text in the input or output, the offset and length values will be displayed and, if possible, the corresponding data will be highlighted in the output or input respectively.
- Save to File and Load from File: You can save the output to a file at any time or load a file by dragging and dropping it into the input field. Files up to around 2GB are supported.
- Client-Side Processing: None of your recipe configuration or input (either text or files) is ever sent to the CyberChef web server - all processing is carried out within your browser, on your own computer. Due to this feature, CyberChef can be downloaded and run locally.
- Deep Linking: By manipulating CyberChef's URL hash, you can change the initial settings with which the page opens. Supported arguments are recipe, input (encoded in Base64), and theme.

## Links

- [Documentation](https://github.com/gchq/CyberChef/wiki)
- [Github](https://github.com/gchq/CyberChef)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/cyberchef)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | cyberchef
App Service Image | - | yes | mpepping/cyberchef:v10.19.4

## Screenshots

![CyberChef Screenshot](./assets/screenshot.png)

## Change Log

- 2023-2-9 – first release
- 2024-09-30 – Version changed to v10.9.0
- 2025-01-09 – Version bumped to v10.19.4

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
- [Ahson Shaikh](https://github.com/MuhammadAhsanDonuts)
