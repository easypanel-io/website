---
hide_title: true
sidebar_label: imgproxy
title: imgproxy | Self-Host on Easypanel
description: How to install imgproxy on Easypanel? 1-Click installation template for imgproxy on Easypanel
---

<!-- generated -->

# imgproxy

1-Click installation template for imgproxy on Easypanel

## Description

imgproxy is a powerful app designed to optimize images for web use, making websites and apps run faster while saving storage and SaaS costs. It works by resizing and processing images on the fly, eliminating the need for disk space and reducing the cost of conforming all saved images to specific formats. imgproxy offers a wide range of features for editing images, including resizing, cropping, contrast adjustment, pixelization, saturation, rotating, and more. It also provides security features to protect against common attack vectors in image processing. With imgproxy, you can upload images directly to the cloud or your cluster and request images by specifying parameters in the request URL. The app uses the world’s fastest image processing library, libvips, ensuring quick processing and a small memory footprint. imgproxy Pro plans offer advanced features and vary by capacity and types of support.

## Instructions

To generate a image URL you can use the following link: https://progapandist.github.io/imgproxy-form/#. Your Salt and Key can be found in the environment variables once you create the service. You can also find more environment variables here: https://docs.imgproxy.net/configuration

## Benefits

- Optimized Image Processing: imgproxy is designed to make websites and apps run faster by optimizing images for the web on the fly. It saves storage and SaaS costs by reducing the need for disk space and eliminating the requirement for all saved images to conform to specific formats.
- Fast and Efficient: Built on the world’s fastest image processing library, libvips, imgproxy is incredibly fast and has a minimal memory footprint. It can handle a large amount of image resizing quickly and efficiently.
- Secure Image Processing: imgproxy provides robust security measures to protect against common attack vectors in image processing. It checks an image’s real dimensions, cancels processing if it’s too big or not a real image, and prevents denial-of-service attacks by requiring URL signing.

## Features

- On-the-Fly Image Resizing: imgproxy resizes and processes images on the fly, eliminating the need to repeatedly prepare images to fit your design every time it changes.
- Advanced Image Editing: With over 55+ features, imgproxy offers a comprehensive selection of image editing tools. These include resizing, cropping, contrast adjustment, pixelization, saturation, rotation, background addition, GIF to MP4 conversion, padding, blurring, brightness adjustment, PDF preview generation, and more.
- Pro Version: imgproxy Pro offers advanced features and varies by capacity and types of support. It includes concurrent image processing limits, basic and Pro features, priority support, and a 14-day free trial period.

## Links

- [Website](https://imgproxy.net/)
- [Documentation](https://docs.imgproxy.net/)
- [Github](https://www.github.com/imgproxy/imgproxy)
- [Template Source](https://github.com/easypanel-io/templates/tree/main/templates/imgproxy)

## Options

Name | Description | Required | Default Value
-|-|-|-
App Service Name | - | yes | imgproxy
App Service Image | - | yes | darthsim/imgproxy:v3.9

## Screenshots


## Change Log

- 2022-08-05 – first release

## Contributors

- [Ivan Ryan](https://github.com/ivanonpc-22)
