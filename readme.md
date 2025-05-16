# TRMNL Node.js server using JSX or HTML

Technologies used:
- [Express.js](https://expressjs.com/) as API server
- [Satori](https://www.npmjs.com/package/satori) for rendering JSX (or HTML) to SVG
- [resvg-js](https://www.npmjs.com/package/@resvg/resvg-js) for rendering SVG to PNG


## Prerequisites
To run your TRMNL server you need any form of server (VM, droplet, pod, instance) somewhere, for example AWS, Google Cloud, Digital Ocean.

## Quick Start
1. Press button `Use this template` on Github or clone this repository
2. Example of JSX code already in repo and you can change it
3. You can preview result locally
4. After changes you should deploy your version of this repo to your server

## Design limitations
Satori uses the same Flexbox layout engine as React Native, and it’s not a complete CSS implementation.<br>
However, it supports a subset of the spec that covers most common [CSS features](https://github.com/vercel/satori?tab=readme-ov-file#css)

## Troubleshooting
Check log of errors on device:
```
https://usetrmnl.com/dashboard > top right dropdown > gear icon > scroll down to "Logs"
```
Fetch Screen Content as your device (Developer edition):
```
curl https://usetrmnl.com/api/display --header "access-token:xxxxxx"
```
