---
title: tailwindcss 集成阿里字体库
tags:
  - tailwindcss
  - font-face
---

# {{ $frontmatter.title }}

[[toc]]

在做一个官网页面时，设计稿用了用了[阿里的字体库](https://www.iconfont.cn/fonts/index?spm=a313x.7781069.1998910419.16)。中文使用[阿里巴巴普惠体 2.0](https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=adI1E7HF7yme)，英文使用[阿里妈妈方圆体](https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=pOvFIr086ADR)。项目是使用 tailwindcss 库来实现样式的。这里记录一下遇到的一些问题。

## 字体库基础知识

### @font-face 用法

```css
@font-face {
  font-family: 'Open Sans';
  src: url('/fonts/OpenSans-Regular-webfont.woff2') format('woff2'), url('/fonts/OpenSans-Regular-webfont.woff')
      format('woff');
}
```

### Font MIME Types

> [https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)

| Format                 | MIME type  | Browser compatibility                    |
| ---------------------- | ---------- | ---------------------------------------- |
| TrueType               | font/ttf   | https://caniuse.com/?search=font%2Fttf   |
| OpenType               | font/otf   | https://caniuse.com/?search=font%2Fotf   |
| Web Open Font Format   | font/woff  | https://caniuse.com/?search=font%2Fwoff  |
| Web Open Font Format 2 | font/woff2 | https://caniuse.com/?search=font%2Fwoff2 |

### Browser compatibility

![alibaba](https://img.cdn.jogiter.cn/public/blog/font-face-Browser-compatibility.jpg)

## font-variation-settings

>[https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variation-settings](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-variation-settings)

>When using font-variation-settings it is important to note that **axis names are case-sensitive**. The registered axis names must be in lower case, and custom axes must be in upper case

阿里妈妈字体使用了自定义变量 `BEVL` 来控制字体的圆角行为。

![alibaba](https://img.cdn.jogiter.cn/public/blog/alimama-radius.png)

通过开发者工具查看字体代码的实现使用了 `font-variation-settings` 来控制圆角大小，圆角值范围从 1 到 100，值越小字体越方，值越大字体越圆。

```css
font-family: "阿里妈妈方圆体 VF Regular", webfont-notdef;
--wght: 400;
--BEVL: 1;
font-variation-settings: 'wght' var(--wght),'BEVL' var(--BEVL);
```

设置圆角值为 1 时，问号是方的：
![alibaba](https://img.cdn.jogiter.cn/public/blog/alimama-radius-1.jpg)

设置圆角值为 1 时，问号是圆的：
![alibaba](https://img.cdn.jogiter.cn/public/blog/alimama-radius-100.jpg)

## 阿里巴巴普惠体 2.0

### 难点 1：如何下载正确的字体库

阿里的字体库官网页面是 [https://www.iconfont.cn/fonts/index](https://www.iconfont.cn/fonts/index)。在该页面找到`阿里巴巴普惠体 2.0`字体库后，点击下载。下载后文件夹内容如下：

![alibaba](https://img.cdn.jogiter.cn/public/blog/font-face1.jpg)

下载包中只有 ttf 格式的字体。为了能够正确的在浏览器中显示，我们还需要其他格式的字体。

好在在字体库的介绍中隐藏着另一个官方链接：[https://www.alibabafonts.com/?spm=a313x.7781069.1998910419.54#/font](https://www.alibabafonts.com/?spm=a313x.7781069.1998910419.54#/font)。在这里找到 `阿里巴巴普惠体2.0` 字体，选择对应的字体类型，点击 `下载字体` 即可得到需要的字体文件类型。比如我需要 `Alibaba PuHuiTi 2.0 - 55 Regular` 类型的字体，下载后截图如下：

![alibaba](https://img.cdn.jogiter.cn/public/blog/font-face2.jpg)

### 难点 1：字体设置

在下载字体的旁边复制代码可得：

```html
<style>
@font-face {
	font-family: AlibabaPuHuiTi-2-55-Regular;
	src:url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-2/AlibabaPuHuiTi-2-55-Regular/AlibabaPuHuiTi-2-55-Regular.eot) format('embedded-opentype'),
url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-2/AlibabaPuHuiTi-2-55-Regular/AlibabaPuHuiTi-2-55-Regular.otf) format('opentype'),
url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-2/AlibabaPuHuiTi-2-55-Regular/AlibabaPuHuiTi-2-55-Regular.ttf) format('TrueType'),
url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-2/AlibabaPuHuiTi-2-55-Regular/AlibabaPuHuiTi-2-55-Regular.woff) format('woff'),
url(https://puhuiti.oss-cn-hangzhou.aliyuncs.com/AlibabaPuHuiTi-2/AlibabaPuHuiTi-2-55-Regular/AlibabaPuHuiTi-2-55-Regular.woff2) format('woff2');
}
</style>
```

我们只需要在 `tailwind.css` 中将 `url` 设置为本地的字体文件路径即可。

```css
@font-face {
  font-family: 'ff-alibaba';
  src:
    url('../fonts/ali-baba/AlibabaPuHuiTi-2-55-Regular.eot')
      format('embedded-opentype'),
    url('../fonts/ali-baba/AlibabaPuHuiTi-2-55-Regular.otf')
      format('opentype'),
    url('../fonts/ali-baba/AlibabaPuHuiTi-2-55-Regular.ttf')
      format('TrueType'),
    url('../fonts/ali-baba/AlibabaPuHuiTi-2-55-Regular.woff') format('woff'),
    url('../fonts/ali-baba/AlibabaPuHuiTi-2-55-Regular.woff2') format('woff2');
  font-display: swap;
}
```

然后配置 `tailwind.config.ts`：

```ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        alibaba: '"ff-alibaba"',
      },
    }
  }
}
```

这样就可以在组件中使用 `font-alibaba` 来控制文字的 `font-family` 了。

## 阿里妈妈方圆体

### 难点1：使用哪一份字体库

参考 `阿里巴巴普惠体2.0` 字体发现有 2 个地方可以下载字体库。不好的地方在于 `阿里妈妈方圆体` 在 2 个地方的字体**不一致**，从下图的文件大小可以看出来。

[alibabafonts.com](https://www.alibabafonts.com/?spm=a313x.7781069.1998910419.54#/more)：

![alibaba](https://img.cdn.jogiter.cn/public/blog/alibabafonts.com-alimama.jpg)

[iconfont.cn](https://www.iconfont.cn/fonts/detail?spm=a313x.7781069.1998910419.d9df05512&cnid=pOvFIr086ADR)：

![alibaba](https://img.cdn.jogiter.cn/public/blog/iconfont.cn-alimama.jpg)

这里的解决办法就是咨询设计师，保持和设计稿同款字体即可。

### 难点2：字体圆角不对

因为该字体库使用了 `font-variation-settings` 的原因，因此我们需要在 `tailwindcss` 中同样的配置好对应的值就好了。具体配置代码如下：

配置 `tailwind.css`:

```css
/* 阿里妈妈方圆体-圆角配置 */
:root {
  --BEVL: 1;
}

@font-face {
  font-family: 'alimama';
  src:
    url('../fonts/ali-mama/AlimamaFangYuanTiVF-Thin.woff2') format('woff2'),
    url('../fonts/ali-mama/AlimamaFangYuanTiVF-Thin.woff') format('woff'),
    url('../fonts/ali-mama/AlimamaFangYuanTiVF-Thin.ttf') format('TrueType');
  font-display: swap;
}
```

然后配置 `tailwind.config.ts`：

```ts
import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        alimama: [
          '"alimama"',
          {
            fontVariationSettings: '"BEVL" var(--BEVL)',
          },
        ],
      },
    }
  }
}
```

这样就可以在组件中使用 `font-alimama` 来控制文字的 `font-family` 了，而且可以通过修改 `--BEVL` 的值来控制字体的圆角大小。


## 其他阅读链接

- https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face
- https://www.fontsquirrel.com/tools/webfont-generator