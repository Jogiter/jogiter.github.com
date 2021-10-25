---
title: lerna with tsdx
date: 2020-09-03 18:43:26
---

## 使用 lerna 创建 Mono Project

```
# 创建项目
lerna init

# 创建包
cd packages
tsdx create packageName --template basic

# 使用 typedoc 生成文档
typedoc --theme minimal

# 编译所有的包
lerna run build

# 执行 @scopeName/packageName 包下面的 build 命令
lerna run build --scope @scopeName/packageName

# 添加 devDependencies 依赖
lerna add module-1 packages/prefix-* --dev
```

## tsdx

Note: this works on tsdx@0.13.3 or lower version. tsdx@14.x may be blocked

> [tsdx#6](https://github.com/formium/tsdx/issues/6)

**tsdx build does not bundle the dependencies?**

Currently createRollupConfig.ts does the following:

- Marks all imports as external if they are not relative / are absolute (seen here).
  - The intention is so that rollup doesn't bundle external dependencies. It assumes they're available in the environment.
- Only uses the commonjs rollup plugin if the umd format is used (seen here).
  - The commonjs plugin is needed because there's a chance your dependencies are not written in es6 and need to be converted so you can bundle them.

Both of these become an issue for this use case. Firstly we need all external dependencies bundled. Secondly a number of our bundles are probably not written in es6 and we'll need this conversion.

My work around is fairly simple, but there's potential implications I don't currently full understand:

Create a `tsdx.config.js` (in your project root):

```js
const commonjs = require('@rollup/plugin-commonjs');

module.exports = {
  rollup(config) {
    // Delete the external config property.
    // This essentially means we're allowing all packages to be bundled.
    delete config.external;

    // Manually use the commonjs plugin.
    // This is opposed to specifying umd as the format as there's more implications that, again, are unclear.
    config.plugins.push(commonjs());

    return config;
  },
};
```

You can then call yarn build and use the resulting dist/ as your lambda. When building expect a ton of warnings around dependencies, e.g.

**打包处理**

`package.json` 中修改 `build` 命令，添加 `format` 和 `name` 指定最终版本。

```json
{
  "scripts": {
    "build": "tsdx build --format umd --name ZegoRoom"
  }
}
```