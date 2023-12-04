---
title: PWA
---

# {{ $frontmatter.title }}

[[toc]]

## 渐进式 Web 应用

渐进式 Web 应用 (PWA) 采用渐进式增强技术以向用户提供更可靠的体验，使用新功能来提供更完整的体验，并且可以安装。此外，由于**该应用是一个 Web 应用**，因此只需一个代码库即可覆盖任何位置、任何设备上的任何人。 安装后，PWA 看起来与其他任何应用都一样，具体包括：

- 它在主屏幕、应用启动器、启动板或开始菜单中具有一个图标。
- 当您在设备上搜索应用时，系统会显示此图标。
- 它在一个单独的窗口中打开，与浏览器的界面完全分开。
- 它能够实现与操作系统的更高级集成，例如网址处理或标题栏自定义。
- 离线时也能使用。

### 渐进式增强

渐进式增强是指 PWA 应用程序应该能够在各种设备和浏览器上运行，并且应该能够逐步增强功能，以便在支持更多功能的设备上提供更好的用户体验。这意味着 PWA 应用程序应该能够在不支持所有功能的设备上运行，并且应该能够根据设备和浏览器的功能逐步增强应用程序的功能。

例如，如果设备不支持推送通知，则 PWA 应用程序应该能够在不使用推送通知的情况下正常工作。但是，如果设备支持推送通知，则 PWA 应用程序应该能够使用推送通知来提供更好的用户体验。

渐进式增强的另一个例子是离线访问。如果设备不支持离线访问，则 PWA 应用程序应该能够在在线模式下正常工作。但是，如果设备支持离线访问，则 PWA 应用程序应该能够缓存必要的资源以供离线使用，从而提供更好的用户体验。

总之，渐进式增强是指 PWA 应用程序应该能够在各种设备和浏览器上运行，并且应该能够根据设备和浏览器的功能逐步增强应用程序的功能，以便在支持更多功能的设备上提供更好的用户体验。

## **PWA 的关键特征**

1. **渐进式增强**：PWA 应用程序应该能够在各种设备和浏览器上运行，并且应该能够逐步增强功能，以便在支持更多功能的设备上提供更好的用户体验。
2. **离线访问**：PWA 应用程序应该能够在离线时继续工作，并且应该能够缓存必要的资源以供离线使用。
3. **应用清单**：PWA 应用程序应该具有清单文件，其中包含应用程序的名称，图标和其他元数据。这使得应用程序可以像本机应用程序一样添加到主屏幕上。
4. **推送通知**：PWA 应用程序应该能够向用户发送推送通知，以便在应用程序处于后台或离线时通知用户。
5. **安全性**：PWA 应用程序应该通过 HTTPS 协议进行访问，以确保数据的安全性和隐私性。
6. **响应式设计**：PWA 应用程序应该能够在各种设备上以响应式方式运行，并且应该能够适应不同的屏幕大小和分辨率。
7. **可发现性**：PWA 应用程序应该能够被**搜索引擎**索引，并且应该能够在应用商店中发现和下载。

从技术层面解读 PWA 的必要条件：

- [ ] **HTTPS 协议**
- [ ] **响应式设计**
- [ ] **SEO 支持**
- [ ] **应用清单**
- [ ] **渐进式增强**
  - [ ] **离线访问**
  - [ ] **推送通知**

## PWA 的优势及挑战

PWA 的优势：

- 可以像本机应用程序一样运行，并具有许多本机应用程序的功能，例如离线访问，推送通知和设备硬件访问。
- 可以通过 Web 浏览器访问，无需下载和安装。
- 可以在各种设备和平台上运行，无需为每个平台构建单独的应用程序。
- 使用现代 Web 技术构建，易于维护和更新。
- 可以通过应用清单添加到主屏幕上，提高可发现性。

PWA 的挑战：

- 与原生应用程序相比，性能可能较差。
- 某些设备和浏览器可能不支持所有功能。
- 无法在应用商店中发现和下载。
- 需要使用 HTTPS 协议进行访问，以确保数据的安全性和隐私性。
- 可能需要更多的开发工作来实现离线访问和推送通知等功能。
- 可能需要更多的测试工作来确保在各种设备和浏览器上的兼容性。

## PWA 开发常见的问题

**问：苹果手机如何在屏幕上安装 pwa？**

要在 iPhone 的主屏幕上安装 PWA（渐进式 Web 应用程序），请按照以下步骤操作：

1. 在 iPhone 上打开 Safari，然后导航到包含您要安装的 PWA 的网站。
2. 点击屏幕底部的“共享”按钮。
3. 向下滚动并点击“添加到主屏幕”。
4. 输入应用程序的名称，然后点击“添加”。
5. PWA 现在将作为应用程序图标显示在您的主屏幕上。
6. 点击应用程序图标启动 PWA。

请注意，并非所有 PWA 都可以安装在 iOS 设备上。 该网站必须满足某些可安装条件，例如具有有效的 SSL 证书和 Web 应用程序清单文件。 此外，由于 Safari 浏览器的限制，PWA 的某些功能可能无法在 iOS 设备上运行。

**问：我可以使用其他浏览器在 iPhone 主屏幕上安装 pwa 吗？**

**不可以，无法使用 Safari 以外的浏览器在 iPhone 的主屏幕上安装 PWA。** 这是因为 Apple 要求 iOS 上的所有 Web 浏览器使用与 Safari 相同的底层 WebKit 渲染引擎，这意味着它们无法提供 Safari 中不可用的功能。

但是，某些第三方浏览器（例如 Google Chrome 和 Microsoft Edge）允许您在主屏幕上添加网站的快捷方式，这可以提供与安装 PWA 类似的体验。 要使用 Google Chrome 或 Microsoft Edge 在主屏幕上添加网站的快捷方式，请按照以下步骤操作：

1. 在 iPhone 上打开 Google Chrome 或 Microsoft Edge，然后导航到要添加到主屏幕的网站。
2. 点击屏幕底部的“共享”按钮。
3. 向下滚动并点击“添加到主屏幕”。
4. 输入快捷方式的名称，然后点击“添加”。
5. 该快捷方式现在将作为应用程序图标显示在主屏幕上。
6. 点击快捷方式在浏览器中启动网站。

请注意，这与安装 PWA 不同，因为快捷方式只会在浏览器中打开网站，而不是将其作为独立应用程序启动。 此外，由于 Safari 浏览器的限制，PWA 的某些功能可能无法在 iOS 设备上运行。

## PWA requirements

- https://vite-pwa-org.netlify.app/guide/pwa-minimal-requirements.html

**Server**

server **must**:

- serve `manifest.webmanifest` with `application/manifest+json` mime type
- you must serve your application over `https`
- you must redirect from `http` to `https`

**Cache-Control[](https://vite-pwa-org.netlify.app/deployment/#cache-control)**

Ensure you have a very restrictive setup for your `Cache-Control` headers in place.

Double check that **you do not** have caching features enabled, especially `immutable`, on locations like:

- `/`
- `/sw.js`
- `/index.html`
- `/manifest.webmanifest`

## pwa-icons

- https://javascript.plainenglish.io/app-icons-in-a-pwa-8fb775207ad7
  - PWA Builder — https://www.pwabuilder.com/imageGenerator
  - PWA App Icon generator — https://tools.crawlink.com/tools/pwa-icon-generator/
- https://github.com/elegantapp/pwa-asset-generator
- https://vite-pwa-org.netlify.app/assets-generator/
- [Maskable.app](https://maskable.app/)  是一款免费的在线工具，用于测试和创建可遮盖的图标版本。

```json
{
  "name": "Sample",
  "theme_color": "#1976d2",
  "background_color": "#fafafa",
  "display": "standalone",
  "scope": "./",
  "start_url": "./",
  "icons": [
    {
      "src": "assets/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "assets/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    }
  ]
}
```

## Install guide

- `https://web.dev/learn/pwa/installation-prompt?hl=zh-tw#libraries`

- https://zoltangy.github.io/react-pwa-install-demo/
- https://pwainstall.glitch.me/
- **宣傳 PWA 安裝的模式**
  - https://web.dev/articles/promote-install?hl=zh-tw
- theme-color: [https://mlearn-pwa-app-shortcuts.glitch.me](https://mlearn-pwa-app-shortcuts.glitch.me/)

## web-push

- https://dashboard.onesignal.com/apps/1eb0d43d-90a6-4ab0-9a04-13523be8bfb1/settings/webpush/install

```jsx
<script src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js" defer></script>
<script>
  window.OneSignalDeferred = window.OneSignalDeferred || [];
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
      appId: "1eb0d43d-90a6-4ab0-9a04-13523be8bfb1",
    });
  });
</script>
```

iOS / iPadOS 具体要求：

- 设备正在运行 iPadOS / iOS 16.4 或更高版本
- 网站需要被视为 Web 应用程序
- 有一个清单，通常称为 manifest.json
- 最终用户已将站点添加到主屏幕并从那里打开它
- 打开网络应用程序后，仍然必须像平常一样提示用户通知权限。

## update

- https://vite-pwa-org.netlify.app/guide/prompt-for-update.html

- `registerType`
  - `prompt`
  - `autoUpdate`

### ssr/ssg

- https://vite-pwa-org.netlify.app/guide/prompt-for-update.html#ssr-ssg

SEO 优化。

### pwa-config-example

```jsx
pwa: {
  manifest: {
    name: 'Nuxt Vite PWA',
    short_name: 'NuxtVitePWA',
    theme_color: '#1976d2',
    background_color: '#faefae',
    display: 'standalone',
    scope: './',
    start_url: './',
    icons: [
      {
        src: 'icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
      },
      {
        src: 'icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: 'icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: 'icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: 'icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: 'icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'icons/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    description: 'description about pwa',
  },

  workbox: {
    // for spa
    navigateFallback: '/',
  },
},
```

### 开发注意点

- `$pwa.needRefresh` 在 vercel 部署的 https 服务中不生效。
- 通过 [ngrok](https://ngrok.com/download) 穿透的本地服务，则可以正常生效。

## readings

- https://vite-pwa-org.netlify.app/guide/
  - https://web.dev/learn/pwa/web-app-manifest?hl=zh-tw
  - https://docs.elk.zone/pwa
- https://docs.elk.zone/pwa#debugging-pwa-in-mobile-browsers
