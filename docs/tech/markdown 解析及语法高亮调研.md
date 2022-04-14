---
title: markdown 解析及语法高亮调研
---

# {{ $frontmatter.title }}

[[toc]]

项目起因: 迁移项目中的文档，发现两个问题：

1、h1、h2 等 heading 标签的行高和字体大小相同。原因是因为项目使用了 css-reset，导致 heading 标签样式被重置。
2、对应的语法高亮也没有显示。原因是高亮没有生效。

项目使用的 nuxtjs，因此先查询是否有官方的 markdown 依赖，关键词 nuxtjs+markdown，果然就有了 `@nuxtjs/markdownit` 库，有现有的就是省心，感谢社区！

然后，经历了参考文档 guide 一通操作...WTF...我都是按照文档来的，为什么结果却不是我期望的...

技术排查。一小时过去了...

~~@nuxtjs/markdownit 子依赖 @nuxtjs/markdownit-loader 依赖的 markdownit 版本是 ^8.3.1，~~
~~markdown-it-attrs 3.x 版本依赖 markdownit 9.x 以上。降级 markdown-it-attrs@2.4.1 即可~~

然后又是降级依赖版本，继续 demo，然后发现还是不兼容。弃坑。

重头开始调研！！！

## markdown 解析

- [markdown-it](https://npmjs.com/package/markdown-it) used by vitepress
- [marked](https://npmjs.com/package/marked)
- [remark-parse](https://npmjs.com/package/remark-parse) used by @nuxt/content
- diff
  - [markdown-it-vs-remark-parse-vs-marked](https://www.npmtrends.com/markdown-it-vs-remark-parse-vs-marked)

结论：推荐 `marked`

## 语法高亮

- prismjs both vitepress & @nuxt/content
- highlightjs
- diff
  - npmtrends
  - benchmark-compare-highlight.js-vs-prism
  - ie11
    - highlightjs: #2637 We don't support IE 11 anymore. Too old.You could try version 9 which still worked with 11.
    - prismjs: Wide browser support: Edge, IE11, Firefox, Chrome, Safari, Opera, most mobile browsers.

结论：推荐 `prismjs`

## 最终项目应用

---

[Demo](https://codesandbox.io/s/marked-prismjs-tailwindcss-typography-sy568)

---

### method one: custom headings

`nuxt.config.js` 设置 `markdown-loader` 的 `renderer`。可参考[官方文档](https://marked.js.org/using_pro#renderer)

```ts
const marked = require('marked')

/**
 * get heading class by level
 * @param {number} level heading 级别
 * @
 */
function getHeadingClassByLevel(level) {
  const headingClass = {
    1: 'text-3xl',
    2: 'text-2xl',
    3: 'text-xl',
    4: 'text-lg',
    5: 'text-base',
    6: 'text-sm',
  }

  return `text-gray-800 ${headingClass[level]}`
}

let renderer = new marked.Renderer()
/**
 * overRiding output of default heading
 * @see {@link https://marked.js.org/using_pro#renderer | renderer}
 */
renderer.heading = function (text, level, raw, slugger) {
  if (this.options.headerIds) {
    return (
      '<h' +
      level +
      ' class="' +
      getHeadingClassByLevel(level) +
      '"' +
      ' id="' +
      this.options.headerPrefix +
      slugger.slug(raw) +
      '">' +
      text +
      '</h' +
      level +
      '>\n'
    )
  }
  // ignore IDs
  return '<h' + level + '>' + text + '</h' + level + '>\n'
}

module.exports = {
  build: {
    extend(config, { isDev, isClient }) {
      config.module.rules.push({
        test: /\.md$/,
        loader: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              renderer,
            },
          },
        ],
      })
    },
  },
}
```

### method two: using @tailwindcss/typography

- [https://github.com/tailwindlabs/tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)

1、安装依赖

> yarn add @tailwindcss/typography

2、配置 tailwind.config.js

```ts
module.exports = {
  plugins: [require('@tailwindcss/typography')],
}
```

3、页面应用

```ts
<div class="prose max-w-full" v-html="html"></div>
```

### 阅读链接

- [markdown-it](https://npmjs.com/package/markdown-it)
- [marked](https://npmjs.com/package/marked)
- [prismjs](https://prismjs.com/index.html#basic-usage)
- [highlightjs](https://highlightjs.org/)
- [tailwindcss-typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [gist: marked-and-prism.js](https://gist.github.com/jpokan/e23e5606921b4a5aa98fd2dc2dd0e116)
- [markdown-loader](https://www.npmjs.com/package/markdown-loader)
- [html-loader](https://www.npmjs.com/package/html-loader) **webpack4.x should use version not higher than 1.3.2, above version dependents on webpack^5.0.0**
