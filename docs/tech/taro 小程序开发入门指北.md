---
title: taro 小程序开发入门指北
---

# {{ $frontmatter.title }}

[[toc]]

## 入门学习资料

- 小程序官方文档：[https://developers.weixin.qq.com/miniprogram/dev/api/](https://developers.weixin.qq.com/miniprogram/dev/api/)
- taro: [https://taro-docs.jd.com/taro/docs](https://taro-docs.jd.com/taro/docs)
  - [小程序框架全面测评](https://taro-docs.jd.com/taro/blog/2019-03-12-mini-program-framework-full-review#%E6%9C%AA%E6%9D%A5)
  - 最佳实践: [https://taro-docs.jd.com/taro/docs/best-practice/](https://taro-docs.jd.com/taro/docs/best-practice/)
  - debug: [https://taro-docs.jd.com/taro/docs/debug/](https://taro-docs.jd.com/taro/docs/debug/)
  - [taro#将 Taro CLI 版本与项目中 Taro 相关依赖的版本保持一致](https://taro-docs.jd.com/taro/blog/2020-09-01-taro-versions#%E5%B0%86-taro-cli-%E7%89%88%E6%9C%AC%E4%B8%8E%E9%A1%B9%E7%9B%AE%E4%B8%AD-taro-%E7%9B%B8%E5%85%B3%E4%BE%9D%E8%B5%96%E7%9A%84%E7%89%88%E6%9C%AC%E4%BF%9D%E6%8C%81%E4%B8%80%E8%87%B4)
  - [骨架屏](https://taro-docs.jd.com/taro/docs/treasures/#%E9%AA%A8%E6%9E%B6%E5%B1%8F%E6%8F%92%E4%BB%B6)
  - [tailwindcss 插件](https://taro-docs.jd.com/taro/docs/treasures/#tailwindcss-%E6%8F%92%E4%BB%B6)
  - iconfont
  - [lazycodeloading](https://taro-docs.jd.com/taro/docs/app-config#lazycodeloading)
  - [小程序热重载](https://taro-docs.jd.com/taro/docs/config-detail#minihot)
  - [性能优化](https://taro-docs.jd.com/taro/docs/optimized)
    - [打包体积分析](https://taro-docs.jd.com/taro/docs/guide#%E6%89%93%E5%8C%85%E4%BD%93%E7%A7%AF%E5%88%86%E6%9E%90)
      - [JavaScript 兼容性分析](https://taro-docs.jd.com/taro/docs/guide#javascript)
  - [编译优化](https://taro-docs.jd.com/taro/docs/mini-split-chunks-plugin)
  - [taro-plugin-pinia 支持使用 Pinia 进行状态管理](https://taro-docs.jd.com/taro/docs/treasures/#taro-plugin-pinia-%E6%94%AF%E6%8C%81%E4%BD%BF%E7%94%A8-pinia-%E8%BF%9B%E8%A1%8C%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86)

## 如何在 Taro 小程序集成 eslint、tslint、prettier

项目背景：当前 taro 版本 v3.4.12。基于 taro-cli 构建的项目有预留 eslint 的配置，但是官方并没有集成文档。本人也是刚开始接触 taro，因此记录一下在 taro 项目中集成代码规范的经历。

### 相关链接

- [eslint](https://eslint.org/) eslint 已集成了 tslint
  - [The future of TypeScript on ESLint](https://eslint.org/blog/2019/01/future-typescript-eslint)
  - [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) eslint 集成 tslint
- [prettier](https://prettier.io/docs/en/install.html)
  - [integrating-with-linters](https://prettier.io/docs/en/integrating-with-linters.html)
  - [Pre-commit Hook](https://prettier.io/docs/en/precommit.html)

### 如何在新项目集成

1.使用 taro-cli 初始化一个全新的小程序项目。

```sh
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# 使用命令创建模板项目
$ taro init myApp
```

2.安装依赖

```sh
# 安装 typepscript-eslint 依赖
yarn add --dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin
# 安装 prettier 依赖
yarn add --dev --exact prettier eslint-config-prettier eslint-plugin-prettier
# 创建 prettier 配置文件。配置内容参考 https://prettier.io/docs/en/configuration.html#basic-configuration
echo {}> .prettierrc.json
```

3.更新 `.eslintrc` 文件

```js
// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
{
  "extends": [
    "taro/vue3", // 项目初始化时选择的框架类型
    "eslint:recommended", // 新增 eslint 推荐校验
    "plugin:@typescript-eslint/recommended", // 新增 typescript 推荐校验
    "prettier" // 新增 prettier 校验。比如引号，分号等配置
  ],
  "plugins": ["prettier"], // 使用 eslint-plugin-prettier 解决 eslint 和 prettier 的规则冲突
  "rules": {
    "prettier/prettier": "error" // 开启 prettier 规则校验
  }
}
```

4.更新 `package.json` 的 `scripts`:

```js
{
  "scripts": {
    "lint": "eslint --ext .js,.ts,.vue,.jsx,.tsx ."
  }
}
```

5.创建 `.eslintignore` 文件，忽略一些不需要检查的文件。

```js
node_modules
dist
```

然后就可以修改文件，查看是否符合代码规范了。也可以运行 `yarn lint` 对整体项目的代码进行检查。

### 如何在老项目中集成

eslint 更新比较快，有些插件可能无法兼容，我们需要确保使用最新版的 eslint 及相关插件。因此方案如下：

1. 升级 taro 到最新版本
2. 参考上述步骤进行配置

#### taro 升级

参考 [taro#将 Taro CLI 版本与项目中 Taro 相关依赖的版本保持一致](https://taro-docs.jd.com/taro/blog/2020-09-01-taro-versions#%E5%B0%86-taro-cli-%E7%89%88%E6%9C%AC%E4%B8%8E%E9%A1%B9%E7%9B%AE%E4%B8%AD-taro-%E7%9B%B8%E5%85%B3%E4%BE%9D%E8%B5%96%E7%9A%84%E7%89%88%E6%9C%AC%E4%BF%9D%E6%8C%81%E4%B8%80%E8%87%B4)

```sh
# 升级
taro update project

# 自动化检查项目配置和代码合法性
taro doctor
```

然后参考 [如何在新项目集成](#如何在新项目集成) 集成即可完成相关配置。
