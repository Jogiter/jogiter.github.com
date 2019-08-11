---
title: 使用 uni-app 开发小程序
date: 2019-08-11 12:58:06
tags:
 - mp
 - 小程序
---

## 阅读链接

+ 官网
  + [uniapp](https://uniapp.dcloud.io/)
  + [小程序](https://mp.weixin.qq.com/)
+ Vue 开发常用功能
  + I18n
  + Vuex
    + 在 `lang=ts` 条件下，配合 [vuex-class](https://github.com/ktsn/vuex-class)使用 mapAction，mapState。
  + Typescript
  + vue
    + 支持过滤器
    + 不支持指令
    + 不知此路由，小程序中没有路由

## 如何创建新页面

1. 在 `src/pages` 目录创建新的页面
2. 在 `src/pages.json` 中添加页面路径

## ts 环境如何引入 uni-ui 组件

* uni-ui 目前支持编译到：H5、App、小程序
* 本页面介绍使用 npm 的安装使用方式，也可下载相关组件直接使用，组件下载地址见上表
* uni-ui 不支持使用 Vue.use() 的方式安装
* uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要安装 `node-sass` 和 `sass-loader`

**install**

```sh
npm install @dcloudio/uni-ui

# cli 创建的项目需要安装 `node-sass` 和 `sass-loader`
npm install -D node-sass sass-loader
```

**using**

```html
<template>
    <view>
        <uni-load-more
            :status="loadStatus"
            :content-text="loadContentText"
            v-show="hasMore"
        />
    </view>
</template>

<script lang="ts">
    import uniLoadMore from '@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue'

    @Component({
        components: {
            uniLoadMore
        }
    })
    export default class component extends Vue {
        // 下拉加载功能实现（uni 自带的生命周期）
        onReachBottom() {
            if (this.hasMore) {
                this.loadStatus = 'loading';
                // load more
            }
        }
    }
</script>

```

## vuex module 处理

`store/index.js`

```js
import Vue from 'vue';
import Vuex from 'vuex';
import destination from './destination';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        destination,
    },
});
```

`store/destination.ts`

```js
export default {
    namespaced: true,
    state: {},
    mutation: {},
    // ...
```

`page.vue`

```js
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { State, Mutation, Action, namespace } from 'vuex-class';

const store = namespace('destination')

@Component
export default class Page extends Vue {
    @store.State cityInfo!: CityInfo.Response;
    @store.Action getCityInfo!: (data: CityInfo.Param) => void;
}
```

## 小屏幕下的样式处理

### rpx 与 px 的换算

```js
const systemInfo = wx.getSystemInfoSync();
// 用 px 计算 rpx
1rpx = systemInfo.windowWidth / 750;
// 用 rpx 计算 px
1px = 750 / systemInfo.windowWidth;
```

### UI 稿(以 375 为标准尺寸)上面标注，屏幕宽度=320 时，大小为 64x64。则在 css 中需要写多少？

>64 / (320 / 375) = 75

+ [小程序 WXSS](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)
+ [klook 图片优化分析](https://klook.slab.com/posts/admin-web-%E5%9B%BE%E7%89%87%E6%98%BE%E7%A4%BA-size%E4%BC%98%E5%8C%96-tradeoff%E5%88%86%E6%9E%90-e4ml1xqz)
+ [cloudinary](https://cloudinary.com/documentation/image_transformations#img_trans_overview)

## 分享

+ [小程序分享，看这篇就够了](https://juejin.im/post/5b4418fee51d4519115cde19)

小程序如果想对外分享，必须在 page 里面定义 `onShareAppMessage` 函数，来配置页面分享转发相关的信息。

+ 只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按钮
+ 用户点击转发按钮的时候会调用
+ 此事件需要 return 一个 Object，用于自定义转发内容

注意事项：

+ 转发后不添加 `imageUrl` 的话，将**截图**作为转发的默认图片。
+ from 字段可以通过在转发成功后调取的 `success`、`complete` 来进行对 `menu` 和 `button` 的不同操作
+ 如果有携带 `shareTicket` 值，会在 `success` 回调产生，返回结果在 `shareTickets` 字段中，是一个数组，可以做一定处理

## 异步设置分享内容

```ts
shareText = '';
image = '';
onReady() {
    // 分享的标题和图片是异步获取时
    setTimeout(() => {
        this.shareText='修改内容',
        this.image='https://dummyimage.com/343x147/ed4040/fff';
    }, 2000);
}
// 定义了生命周期的方法，才会在
onShareAppMessage() {
    return {
        title: this.shareText ? this.shareText : "欢迎体验uni-app",
        path: '/pages/destination/index',
        imageUrl:this.image ? this.image : 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/app/share-logo@3.png'
    }
}
```

## 遇到奇怪的错误时，首先请尝试以下方法

1、关闭微信开发者工具，然后重新打开。
2、执行 `rm -rf dist`，删掉打包后的目录，然后重新执行打包命令。
