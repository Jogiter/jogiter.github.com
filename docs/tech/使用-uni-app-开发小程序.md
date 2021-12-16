---
title: 使用 uni-app 开发小程序
date: 2019-08-11 12:58:06
tags:
  - mp
  - 小程序
---

## 阅读链接

- 官网
  - [uniapp 官网](https://uniapp.dcloud.io/)
  - [微信公众平台：小程序](https://mp.weixin.qq.com/)
  - [微信官方文档：小程序](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/)
  - [ColorUI 组件库](https://github.com/weilanwl/ColorUI)
  - [使用微信小程序第三方 SDK 及资源汇总](https://ask.dcloud.net.cn/article/35070)
    - 通用 SDK
      - [个推统计](http://docs.getui.com/geshu/start/wx_mp/)
      - [又拍云存储](http://docs.upyun.com/api/small_program/)
      - [七牛云存储](https://github.com/gpake/qiniu-wxapp-sdk/blob/master/README.md)
      - [腾讯地图](https://lbs.qq.com/qqmap_wx_jssdk/)
      - [百度地图](http://lbsyun.baidu.com/index.php?title=wxjsapi)
      - [高德地图](https://lbs.amap.com/api/wx/summary)
      - [网易云信 IM](http://netease.im/wechatApplets)
      - [环信 IM](http://docs.easemob.com/im/applet/intro)
      - [融云 IM](https://www.rongcloud.cn/docs/mini_program.html)
      - [极光 IM](https://docs.jiguang.cn/jmessage/client/im_sdk_wxapplet/)
      - [腾讯云会话](https://cloud.tencent.com/document/product/619/11449)
      - [阿拉丁](https://www.aldwx.com/)
      - [神策数据](https://www.sensorsdata.cn/)
      - [诸葛IO](https://zhugeio.com/)
      - [GrowingIO](https://docs.growingio.com/docs/sdk-integration/mina-sdk)
      - [讯飞 AI](https://www.xfyun.cn/solutions/miniAppSolution)
      - [leancloud serverless开发](https://leancloud.cn/docs/sdk_setup-js.html#hash1778723680)
      - [bomb serverless开发](https://ask.dcloud.net.cn/question/54795)
- Vue 开发常用功能
  - I18n
  - Vuex
    - 在 `lang=ts` 条件下，配合 [vuex-class](https://github.com/ktsn/vuex-class)使用 mapAction，mapState。
  - Typescript
  - vue
    - 支持过滤器
    - 不支持指令
    - 不知此路由，小程序中没有路由

## 如何创建新页面

1. 在 `src/pages` 目录创建新的页面
2. 在 `src/pages.json` 中添加页面路径

## ts 环境如何引入 uni-ui 组件

- uni-ui 目前支持编译到：H5、App、小程序
- 本页面介绍使用 npm 的安装使用方式，也可下载相关组件直接使用，组件下载地址见上表
- uni-ui 不支持使用 Vue.use() 的方式安装
- uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要安装 `node-sass` 和 `sass-loader`

**install**

```
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
  import uniLoadMore from '@dcloudio/uni-ui/lib/uni-load-more/uni-load-more.vue';

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
    destination
  }
});
```

`store/destination.ts`

```js
export default {
  namespaced: true,
  state: {},
  mutation: {}
  // ...
};
```

`page.vue`

```typescript
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { State, Mutation, Action, namespace } from 'vuex-class';

const store = namespace('destination');

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
1 rpx = systemInfo.windowWidth / 750;
// 用 rpx 计算 px
1 px = 750 / systemInfo.windowWidth;
```

### UI 稿(以 375 为标准尺寸)上面标注，屏幕宽度=320 时，大小为 64x64。则在 css 中需要写多少？

> 64 / (320 / 375) = 75

- [小程序 WXSS](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxss.html#%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)
- [klook 图片优化分析](https://klook.slab.com/posts/admin-web-%E5%9B%BE%E7%89%87%E6%98%BE%E7%A4%BA-size%E4%BC%98%E5%8C%96-tradeoff%E5%88%86%E6%9E%90-e4ml1xqz)
- [cloudinary](https://cloudinary.com/documentation/image_transformations#img_trans_overview)

## 登录

登录流程时序

![login](https://res.wx.qq.com/wxdoc/dist/assets/img/api-login.2fcc9f35.jpg)

**API：**

- [wx.login](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html)：调用接口获取登录凭证（code）。
- [wx.checkSession](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.checkSession.html)：检查登录态是否过期。
- [wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html)：获取用户信息。不包含 openid 等敏感信息。

**示例：**

```html
<template>
  <view>
    <image class="logo" :src="userInfo.avatarUrl ? userInfo.avatarUrl : '../../static/user-default.png'"></image>
    <text>{{userInfo.nickName}}</text>
    <button v-if="!isAuthorized" open-type="getUserInfo" @getuserinfo="getUserInfo">登录</button>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
    isAuthorized = false;
    userInfo: any = {};

    WXgetUserInfo() {
        wx.getUserInfo({
            success: (res: any) => {
                this.isAuthorized = true;
                this.userInfo = res.userInfo;
            },
            fail: (e: any) => {
                // 需要用户点击页面的按钮触发授权，才可以获取用户信息。
                console.log('需要用户点击页面的按钮触发授权，才可以获取用户信息。');
            }
        })
    }

    onLoad() {
      wx.checkSession({
          success: () => {
              //session_key 未过期，并且在本生命周期一直有效
              this.WXgetUserInfo();
          },
          fail: () => {
              // session_key 已经失效，需要重新执行登录流程
              wx.login({
                  success: (res: any) => {
                      const { code } = res;
                      if (code) {
                          console.log('登录成功！' + code)

                          // 获取用户信息
                          this.WXgetUserInfo(code);
                      } else {
                          console.log('登录失败！' + res.errMsg)
                      }
                  }
              })
          }
      })
  }
```

获取用户登录信息后，使用 `code` 调用 `auth.code2Session` 换取 用户唯一标识 `openid`。将其存储在数据库的用户信息表中。

### 获取用户的敏感信息，如手机号

**API：**

- [auth.code2Session](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html)：使用 code 换取 openid 和 session_key 等信息。**本接口应在服务器端调用**
  - method：`GET`
  - url：`https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code`
  - params：
    - appid(string)：小程序 appId
    - secret(string)：小程序 appSecret
    - js_code(string)：登录时获取的 code
    - grant_type(string)：授权类型，此处只需填写 authorization_code
  - response：
    - openid(string): 用户唯一标识
    - session_key(string): 会话密钥
    - unionid(string)：用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回，详见 [UnionID 机制说明](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/union-id.html)。
    - errcode(number)：错误码
    - errmsg(string)：错误信息

**示例：**

```js
wx.login({
    success: (res: any) => {
        const { code } = res;
        if (code) {
            // 获取用户信息
            wx.getUserInfo({
                withCredentials: true, // encryptedData, iv 等敏感信息
                success: (res: any) => {
                    const { encryptedData, iv } = res;
                    // todo: 将 encryptedData, iv 和 code 传递到开发者服务器，获取用户手机号等信息
                },
                fail: (e: any) => {
                    // 需要用户点击页面的按钮触发授权，才可以获取用户信息。
                }
            })
        } else {
            console.log('登录失败！' + res.errMsg)
        }
    }
})
```

如上述步骤获取 `encryptedData`, `iv` 和 `code` 后，参考加密数据解密算法的官网示例代码，[点此下载](https://res.wx.qq.com/wxdoc/dist/assets/media/aes-sample.eae1f364.zip)。根据示例即可获取用户手机号等敏感信息。

## 分享

- [小程序分享，看这篇就够了](https://juejin.im/post/5b4418fee51d4519115cde19)

小程序如果想对外分享，必须在 page 里面定义 `onShareAppMessage` 函数，来配置页面分享转发相关的信息。

- 只有定义了此事件处理函数，右上角菜单才会显示 “转发” 按钮
- 用户点击转发按钮的时候会调用
- 此事件需要 return 一个 Object，用于自定义转发内容

注意事项：

- 转发后不添加 `imageUrl` 的话，将**截图**作为转发的默认图片。
- from 字段可以通过在转发成功后调取的 `success` 、 `complete` 来进行对 `menu` 和 `button` 的不同操作
- 如果有携带 `shareTicket` 值，会在 `success` 回调产生，返回结果在 `shareTickets` 字段中，是一个数组，可以做一定处理

### 异步设置分享内容

```typescript
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

## 如何在小程序中引用 [iconfont](https://www.iconfont.cn/)

1. 将平台中项目的 `https://at.alicdn.com/t/{font_path}.css` 的内容拷贝到本地项目中
2. 在 `src/App.vue` 的 `style` 中引用 `@import "./static/css/icon.css";`
3. 使用： `<text class="icon icon-user"></text>`

> fontfamily： `icon` 和 prefix： `icon-` 可在平台中自行修改

## 遇到奇怪的错误时，首先请尝试以下方法

1、关闭微信开发者工具，然后重新打开。
2、执行 `rm -rf dist` ，删掉打包后的目录，然后重新执行打包命令。
