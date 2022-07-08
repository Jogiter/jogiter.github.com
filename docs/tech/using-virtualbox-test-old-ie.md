---
title: using-virtualbox-test-old-ie
tags:
  - test
  - ie8
categories:
  - tool
---

# {{ $frontmatter.title }}

[[toc]]

## 使用 virtualbox 安装老版本 ie 进行测试

### 安装

1. [下载 virtualbox](https://www.virtualbox.org/wiki/Downloads)
2. [选择对应版本的虚拟机](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/)

### 使用 rgba 属性兼容 IE8

在 [caniuse](https://caniuse.com/#search=rgba) 查阅 rgba 的兼容性

![rbga 兼容性](https://img.cdn.jogiter.cn/public/blog/rgba.png)

### 使用方法

```html
<!--[if IE 8]>
  <style>
    .rbga-hack {
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000);
    }
  </style>
<![endif]-->
<style>
  .rbga-hack {
    filter: rgba(0, 0, 0, 0.5);
  }
</style>
```

startColorstr 和 endColorstr 的值由两部分组成：前两位是 alpha 值，后六位是颜色值，都是十六进制表示法；
可以用 x=a\*255 (其中 x 是表达式的 16 进制值，a 表示 alpha 值如 0.5 )；

```js
function getAlpha(opacity) {
  return (255 * opacity).toString(16).slice(0, 2).toUpperCase()
}

getAlpha(0.75) // BF
getAlpha(0.5) // 7F
```

最终效果如下

![ie8-rgba](https://img.cdn.jogiter.cn/public/blog/ie8-rgba.png)
