---
title: 博客添加docSearch
tags: blog
---

# {{ $frontmatter.title }}

[[toc]]

自从博客从 `hexo` 迁移到 `vitepress` 后（对 vuepress 感觉不好，所以一直没有迁移，但是 vitepress 真香定律让我动了心思），一直心心念念的想要集成博客搜索功能。前几天在 [https://www.algolia.com/](https://www.algolia.com/) 注册了账号后，发现搜索没有结果，今天花了大半天踩坑，终于完整的实现了搜索功能。

## 什么是 DocSearch

根据 [docsearch.algolia.com](https://docsearch.algolia.com/docs/what-is-docsearch/) 的快速描述。 DocSearch 分为 2 个部分：一个爬虫程序和一个前端库。

* 爬虫程序：用来获取博客的查询关键字，为博客搜索接口提供结果。
* 前端库：用来提供沉浸式搜索体验。（就是集成了 UI 组件和搜索接口，能够快速接入搜索功能）

## vitepress 博客添加 algolia 配置

根据 [vitepress#theme-config-algolia-search](https://vitepress.vuejs.org/config/algolia-search.html) 文档，只需要如下配置：

```js
module.exports = {
  themeConfig: {
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name'
    }
  }
}
```

这里的配置信息需要登录 [https://www.algolia.com/](https://www.algolia.com/) 后，查看 API Keys 获得。

![API Keys](/public/algolia-api-keys.jpg)

* `Application ID` 这是您的唯一应用程序标识符。它用于在使用Algolia的API时识别您。
* `Search-Only API Key` 这是在前端代码中使用的公共API密钥。此密钥仅用于搜索查询和向Insights API发送数据。
* `Admin API Key` 这是管理API密钥。请保守秘密，仅从后端使用：此密钥用于创建、更新和删除索引。您还可以使用它来管理API密钥。
* `IndexName` 创建应用后，创建用于博客搜索的索引。

完成配置后，就可以在博客界面上看到搜索框了。但是输入任何内容，你会发现都查不到结果。这是因为在 algolia 的后台还没有上传索引。

::: warning Note
[Algolia DocSearch](https://community.algolia.com/docsearch/) requires you to submit your site to them for indexing before it starts working.
:::

## 上传索引

[Algolia Crawler](https://www.algolia.com/doc/tools/crawler/getting-started/overview/) 支持两种方式进行生成索引。

* 官方推荐使用 [The admin console](https://crawler.algolia.com/admin/)。需要付费。
* 使用 [Crawler REST API](https://www.algolia.com/doc/tools/crawler/apis/crawler-rest-api)

上述两种方式，其一需要付费，本篇不做介绍，有兴趣的可以参阅官方文档。其二使用 API 调用相对较麻烦。经过多番查阅文档，终于找到了可以在可以自行生成索引的方式 [docsearch#legacy/run-your-own](https://docsearch.algolia.com/docs/legacy/run-your-own)

### 本地运行

需要安装 python 环境。我在这里花费了很多时间。最终仍是运行失败。因此弃坑了。

记录一下遇到的问题：

* 安装 python 3.10.0 版本：`choco install python3`（使用管理员身份运行 power shell）。
* 安装 pipenv 需要使用国内的 python 镜像源。
* 公司网络有进行拦截，导致安装失败。（使用个人 wifi 后安装成功:cry:）
* windows 平台下运行 `pipenv install`、 `pipenv shell`命令失败。弃坑于此！

### 使用 GithubAction

使用 [darrenjennings/algolia-docsearch-action](https://github.com/darrenjennings/algolia-docsearch-action) 进行搜索索引上传。

```yaml
name: Index Algolia
on:
  push:
    branches:
    - vitepress
  pull_request_review:
    branches:
    - vitepress
    types:
      - submitted

jobs:
  algolia_indexer:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v2
      - uses: darrenjennings/algolia-docsearch-action@master
        with:
          algolia_application_id: ${{ secrets.ALGOLIA_APPID }}
          algolia_api_key: ${{ secrets.ALGOLIA_APIKEY }}
          file: algolia-config.json
```

1. 创建 `.github/workflows/algolia.yml`
2. 添加 `Actions secrets`
   1. 添加 `ALGOLIA_APIKEY`，值为 [algolia 配置](#vitepress-博客添加-algolia-配置) 的 `Admin API Key`
   2. 添加 `ALGOLIA_APPID`，值为 [algolia 配置](#vitepress-博客添加-algolia-配置) 的 `Application ID`
   3. 添加 `ALGOLIA_INDEXNAME`，值为 [algolia 配置](#vitepress-博客添加-algolia-配置) 的 `IndexName`
3. 在项目根目录创建 `algolia-config.json`

```json
{
  "index_name": "jogiter-blog",
  "start_urls": ["http://blog.jogiter.cn/"],
  "selectors": {
    "lvl0": ".content h1",
    "lvl1": ".content h2",
    "lvl2": ".content h3",
    "lvl3": ".content h4",
    "lvl4": ".content h5",
    "lvl5": ".content h6",
    "text": ".content p, .content li"
  }
}
```

至此，已完成 Action 配置。提交代码到 github，然后等待 Action 执行完毕后，即可进行搜索啦:smile:。

## 相关链接

* [https://www.algolia.com/](https://www.algolia.com/)
* [https://vitepress.vuejs.org/](https://vitepress.vuejs.org/)
* [https://docsearch.algolia.com/](https://docsearch.algolia.com/)
* [GithubAction: algolia-docsearch-action](https://github.com/darrenjennings/algolia-docsearch-action) 运行 docsearch scraper 并更新索引
