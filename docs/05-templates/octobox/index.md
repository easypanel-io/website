---
hide_title: true
sidebar_label: Octobox
title: Octobox | Self-Host on Easypanel
description: How to install Octobox on Easypanel? 1-Click installation template for Octobox on Easypanel
---

<!-- generated -->

# Octobox

1-Click installation template for Octobox on Easypanel

## Description

Octobox is an innovative app designed to help you manage your GitHub notifications more efficiently. With Octobox, you no longer have to worry about losing track of important issues or waking up to hundreds of notifications. The app adds an extra &#39;archived&#39; state to each notification, allowing you to mark it as &#39;done&#39;. If there&#39;s any activity on an archived thread, issue or PR, Octobox will move it back into your inbox. You can also search and filter notifications by repository, organization, type, action, state, CI status, and reason. Octobox keeps your notifications up to date with issue/pull-request status, CI status, labels, and more. The app is free for open source projects and offers enhanced notifications for private projects at a cost. Octobox is the perfect tool for developers who want to stay organized and focused.

## Benefits

- Efficient Notification Management: Octobox helps you manage your GitHub notifications efficiently, freeing up more time for you to focus on your projects. It adds an extra 'archived' state to each notification so you can mark it as 'done'. If anything happens on an archived thread, issue or PR, Octobox will move it back into your inbox.
- Stay Updated: With Octobox, you can keep your notifications up to date with issue/pull-request status, CI status, labels and more shown alongside basic title, organization, repo, and type information.
- Enhanced Notifications: By installing the GitHub app, Octobox will pull basic public and private notification information and add live information on issue, PR, and CI status, labels, authors and more to your organization's notifications.

## Features

- Archiving: Octobox extends GitHub's notification model by providing an additional 'archived' status, much like Gmail's email client. Archived notifications will not appear in your inbox again unless the thread, issue or PR receives a new notification.
- Starring: Octobox also adds a starred status to help you highlight important notifications with a star so you can come back and find them easily. Starred notifications are not social, they are more like bookmarks that GitHub stars.
- Muting: Muting a notification will mark the notification as read, move it to the archive and ignore all further notifications from this thread, issue or PR. Muting also sets the thread to ignore:true ignoring further notifications on GitHub too.
- Syncing: By default Octobox will synchronize every time you hit the synchronize button. You can set automatic refresh interval on the settings page.
- Searching: Octobox's search bar supports various filter prefixes. Combine them together and with free text searches, for example: 'github enterprise type:issue owner:octobox reason:assign'. Many prefixes accept multiple arguments when separated by commas or passed twice.

## Links

- [Website](https://octobox.io)
- [Documentation](https://octobox.io/documentation)
- [Github](https://github.com/octobox/octobox)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/octobox)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | octobox
App Service Image | - | yes | octoboxio/octobox:october-2024
Database Service Name | - | yes | octobox-db
Database Service Name | - | yes | octobox-redis
Github Client ID | - | yes | 
Github Client Secret | - | yes | 

## Screenshots

![Octobox Screenshot](./assets/screenshot.png)

## Change Log

- 2023-3-22 – first release

## Contributors

- [Supernova3339](https://github.com/Supernova3339)
