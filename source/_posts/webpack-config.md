---
title: webpack.config
date: 2018-4-12 15:03:25
tags:
  - webpack
  - vue
categories:
  - JavaScript
---

## 常用的 webpack 插件

+ [提取css文件并压缩](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
+ [路由懒加载](https://router.vuejs.org/zh-cn/advanced/lazy-loading.html)
+ [fastclick](https://github.com/ftlabs/fastclick)
+ 添加loading组件 -- [Vue组件的三种调用方式](https://molunerfinn.com/vue-components/#Loading)
+ `.vue`文件不会`eslint --fix`，使用[eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue#user-content-gear-configs)
+ [Duplicate keys detected](https://github.com/vuejs/vue/issues/7323)，见`src/component/numbers.vue`
+ 仿原生滚动下拉刷新&上拉加载。[didi-scroll](https://github.com/didi/cube-ui/blob/dev/src/components/scroll/scroll.vue)

## webpack兼容ie8问题

```js
plugins: [
    /** [uglify#1179](https://github.com/mishoo/UglifyJS2/pull/1179)
     * [Webpack构建兼容IE8](https://segmentfault.com/a/1190000007699918?winzoom=1)
     */
    new webpack.optimize.UglifyJsPlugin({
        compress: { screw_ie8: false },
        mangle: false,
        output: { screw_ie8: false },
    })
]
```

使用webpack打包后，代码没有兼容问题；[uglifyjs](https://github.com/mishoo/UglifyJS2/)压缩后才会不兼容ie8。因此在压缩时配置兼容ie8；


## [如何在 webpack 中引入未模块化的库，如 Zepto](https://sebastianblade.com/how-to-import-unmodular-library-like-zepto/)

```js
// webpack.config
{
  // ...
  module: {
    loaders: [{
      test: require.resolve('zepto'),
      loader: 'exports-loader?window.Zepto!script-loader'
    }]
  }
}
```

这样我们在页面入口文件中就可以这么写：

```js
// entry.js
import $ from 'zepto'

$(function () {
  // ...
})
```

----

## tree-shaking

- [Tree Shaking](https://doc.webpack-china.org/guides/tree-shaking/)

为了学会使用 tree shaking，你必须……

+	使用 ES2015 模块语法（即 import 和 export）。
+	引入一个能够删除未引用代码(dead code)的压缩工具(minifier)（例如 UglifyJSPlugin）。

----

## vue webpack 项目配置

a demo config file:

```js
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Jarvis = require('webpack-jarvis')
const merge = require('webpack-merge')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

let base = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'js/[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue$: 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/, // to lint .vue files, also need to config .eslintrc.js
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter'),
              fix: true, // eslint --fix
              failOnError: true
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                js: 'babel-loader!eslint-loader'
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.(png|jp(e)?g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'image/[name].[ext]'
            }
          }
        ]
      }, {
        test: /.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, './node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendor']
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      chunksSortMode: 'dependency',
      hash: true,
      cache: true
    })
  ]
}

if (process.env.NODE_ENV === 'dev') {
  base = merge(base, {
    plugins: [
      devServer: {
        contentBase: path.join(__dirname, 'src'),
        // host: '0.0.0.0',
        port: 80,
        compress: false
      },
      new webpack.DefinePlugin({
        DEV: true
      }),
      // A very intelligent browser based Webpack dashboard
      new Jarvis({
        port: 1337 // optional: set a port
      })
    ]
  })
}

if (process.env.NODE_ENV === 'production') {
  base = merge(base, {
    plugins: [
      // spa add favicon
      new CopyWebpackPlugin([
        {
          from: 'src/favicon.ico'
        }
      ]),
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        }
      })
    ]
  })
}

module.exports = base
```

打包后生产的目录结构如下：

```Tree
├── dist
|   ├── css/
|   ├── image/
|   └── js/
|   └── index.html
|   └── favicon.ico
```

----

## `.eslintrc.js`: lint `.js` and `.vue` files

```.eslintrc.js
module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  // more configs see https://github.com/vuejs/eslint-plugin-vue#user-content-gear-configs
  extends: ['plugin:vue/base', 'standard'],
  plugins: [
    'vue'
  ]
}
```

----

## add favicon to spa

1.use [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)

```js
// spa add favicon
new CopyWebpackPlugin([
  {
    from: 'favicon.ico',
    to: 'dest'
  }
]),
```

2.use native javascript

in your `main.js`

```js
// add favicon
const favicon = require('./images/favicon.png')
let link = window.document.querySelector('link[rel*="icon"]') || document.createElement('link')
link.type = 'image/x-icon'
link.rel = 'shortcut icon'
link.href = favicon
window.document.getElementsByTagName('head')[0].appendChild(link)
```
