---
hide_title: true
sidebar_label: OctoPrint
title: OctoPrint | Self-Host on Easypanel
description: How to install OctoPrint on Easypanel? 1-Click installation template for OctoPrint on Easypanel
---

<!-- generated -->

# OctoPrint

1-Click installation template for OctoPrint on Easypanel

## Description

OctoPrint is a comprehensive web interface designed to provide full remote control and monitoring of your 3D printer. It allows you to manage every aspect of your 3D printing jobs directly from your browser. With OctoPrint, you can access the embedded webcam feed to watch your printer in action, receive constant feedback on the progress of your print job, and even view a rendition of the GCODE you are currently printing. The app also enables you to monitor and adjust the temperatures of your hotends and print bed on the fly, move the print head along all axes, and start, stop, or pause your print job at any time. OctoPrint is compatible with most consumer 3D printers and its powerful plugin system allows for functionality extension. It is 100% open source, allowing everyone to modify it to their own needs. Additional features include creating timelapse recordings of your prints, slicing your STL files directly within the app, built-in access controls, and the ability to add system commands to the menu for easy shutdown or reboot of your OctoPrint server or printer.

## Benefits

- Full Remote Control & Monitoring: OctoPrint provides a comprehensive web interface for controlling your 3D printer. You can control and monitor every aspect of your 3D printer and your printing jobs right from within your browser. This includes access to the embedded webcam feed, constant feedback on the progress of your print job, temperature control of your hotends and print bed, and movement of the print head along all axes.
- Compatible and Extendable: OctoPrint is compatible with most consumer 3D printers out of the box. Its powerful plugin system allows for extending its functionality in various ways, including bed leveling visualization, timelapse creation, UI theming, firmware updating, and adding support for specific printers.
- 100% Open Source: OctoPrint is Free and Open Source Software released under the GNU Affero General Public License (AGPL). This means that all its source code is available in its GitHub repository and can be modified to suit your needs.

## Features

- Remote Control & Monitoring: Control and monitor every aspect of your 3D printer and your printing jobs right from within your browser. This includes starting, stopping, or pausing your current print job at any time.
- Plugin System: OctoPrint's powerful plugin system allows for extending its functionality in various ways. This includes visualizing your bed leveling, creating stunning timelapses, controlling the theming of OctoPrint’s UI, updating your printer’s firmware, and adding support for specific printers.
- Open Source: OctoPrint is Free and Open Source Software, meaning you can modify it to suit your needs. All its source code is available in its GitHub repository.
- Timelapse Recordings: Create awesome timelapse recordings of your prints directly within OctoPrint.
- Built-in Access Controls: Control who can control your printer with the built-in access controls.
- System Commands: Add system commands to the menu to easily shutdown or reboot your OctoPrint server or even your printer.
- Event Hooks: Configure event hooks to react to certain events within OctoPrint by calling external commands or sending custom GCODE to your printer.

## Links

- [Website](https://octoprint.org)
- [Docs](https://docs.octoprint.org)
- [Github](https://github.com/OctoPrint/OctoPrint)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/octoprint)

## Options

Name | Description | Required | Default Value
-|-|-|-
Enable MJPG Streamer | - | no | false
App Service Name | - | yes | octoprint
App Service Image | - | yes | octoprint/octoprint:1.10.2

## Screenshots

![OctoPrint Screenshot](./assets/screenshot1.png)
![OctoPrint Screenshot](./assets/screenshot2.png)
![OctoPrint Screenshot](./assets/screenshot3.png)
![OctoPrint Screenshot](./assets/screenshot4.png)

## Change Log

- 2023-07-11 – First Release

## Contributors

- [Berk Sümbül](https://berksmbl.com)
