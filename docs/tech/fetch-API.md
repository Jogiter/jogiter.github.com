---
title: fetch API
---

# {{ $frontmatter.title }}

[[toc]]

## http-request research

- XHR
  - https://github.com/axios/axios Promise based HTTP client for the browser and node.js (`axios`)
- Fetch
  - for Browser
    - https://github.com/JakeChampion/fetch A window.fetch JavaScript polyfill.(`whatwg-fetch`) *use xhr to polyfill.*
    - https://github.com/developit/unfetch 🐕 Bare minimum 500b fetch polyfill.(`unfetch`)
    - https://github.com/sindresorhus/ky 🌳 Tiny & elegant JavaScript HTTP client based on the browser Fetch API (`ky`)
  - for Node
    - https://www.npmjs.com/package/node-fetch (`node-fetch`)
- cross-platform
  - https://github.com/developit/unfetch/tree/main/packages/isomorphic-unfetch  Switches between [unfetch](https://github.com/developit/unfetch) & [node-fetch](https://github.com/bitinn/node-fetch) for client & server. (`isomorphic-unfetch`)
  - https://github.com/lquixada/cross-fetch Switches between https://github.com/bitinn/node-fetch/ & [whatwg-fetch](https://github.com/github/fetch/) for client & server. (`cross-fetch`)
  - interceptors
    - https://www.npmjs.com/package/@mswjs/interceptors

## fetch Browser Support

- https://caniuse.com/?search=fetch

![fetch-api](/fetch-api.png)

use polyfill `whatwg-fetch` :

- https://github.com/JakeChampion/fetch#browser-support
  - Chrome
  - Firefox
  - Safari 6.1+
  - Internet Explorer 10+

## npm trends for browser

- https://npmtrends.com/cross-fetch-vs-ky-vs-unfetch-vs-whatwg-fetch

Result: `whatwg-fetch` got the most **download counts for `fetch` api**

## npm trends for nodejs

- https://npmtrends.com/axios-vs-node-fetch

Result: `node-fetch` got the same download counts with `axios`  

## npm trends for all

- https://npmtrends.com/axios-vs-cross-fetch-vs-isomorphic-unfetch

**Consolution is to use `cross-fetch` .**
