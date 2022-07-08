---
title: mediaSourceExtension
type: 'tags'
tags:
  - video
categories:
  - JavaScript
---

# {{ $frontmatter.title }}

[[toc]]

## demo

在 [迅雷直播](http://live.xunlei.com/) 中审查元素，可以看到视频元素会看到它的 src 是一个 [Blob URL](https://www.w3.org/TR/FileAPI/#url)。

```html
<video
  preload="metadata"
  src="blob:http://live.xunlei.com/79a71646-6b99-419c-a3c3-d7c171266aca"
></video>
```

**与普通的 html5 video 的区别**

1. 直接访问 `src` 的链接，无法播放视频
2. 无法右键保存到本地

| 使用 html5 video                                                                 | 使用 MSE                                                               |
| :------------------------------------------------------------------------------- | :--------------------------------------------------------------------- |
| ![使用 html5 video](https://img.cdn.jogiter.cn/public/blog/rightmouse-video.png) | ![使用 MSE](https://img.cdn.jogiter.cn/public/blog/rightmouse-mse.png) |

3. 支持分片加载，加快视频打开速度，节省流量

比如打开一个 `197 MB` 的视频文件，使用分片加载用户体验会更好。

一次性加载完毕

![bufferAll](https://img.cdn.jogiter.cn/public/blog/bufferAll.gif)

分片加载，每次加载一部分

![bufferWhenNeeded](https://img.cdn.jogiter.cn/public/blog/bufferWhenNeeded.gif)

## 使用 [URL.createObjectURL(blob)](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL#Example) 创建 Blob URL

在每次调用 `createObjectURL()` 方法时，都会创建一个新的 `URL` 对象，即使你已经用相同的对象作为参数创建过。当不再需要这些 URL 对象时，每个对象必须通过调用 `URL.revokeObjectURL()` 方法来释放。浏览器会在文档退出的时候自动释放它们，但是为了获得最佳性能和内存使用状况，你应该在安全的时机主动释放掉它们。

```js
// blob = scheme ":" origin "/" UUID
let url = URL.createObjectURL(new Blob([], { type: 'image/png' }))
let img = document.createElement('img')
img.src = url
img.onload = function () {
  window.URL.revokeObjectURL(url)
}
document.body.appendChild(img)
// <img src="blob:https://developer.mozilla.org/0495d5c4-5b70-4960-8bdb-3b761d3b1c56">
```

**createObjectURL 的兼容性**

![caniuse?search=createObjectURL](https://img.cdn.jogiter.cn/public/blog/createObjectURL.png)

[demo](https://codepen.io/pen/)，更多例子参考 [使用 Web 应用程序中的文件](https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications)

## Media Source Extensions

允许 `JavaScript` 动态构建 `<audio>` 和 `<video>` 的媒体流。它定义了一个 `MediaSource` 对象，可以作为 `HTMLMediaElement` 的媒体数据源。 `MediaSource` 对象具有一个或多个 `SourceBuffer` 对象。应用程序将数据段附加到 `SourceBuffer` 对象，并可以根据系统性能和其他因素调整附加数据的质量。来自 `SourceBuffer` 对象的数据被管理为用于解码和播放的音频，视频和文本数据的轨道缓冲器。

![pipeline_model](https://www.w3.org/TR/media-source/pipeline_model.svg)

### [HTML 的媒体支持浏览器兼容情况](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Supported_media_formats#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%83%85%E5%86%B5)

![Supported_media_formats#浏览器兼容情况](https://img.cdn.jogiter.cn/public/blog/MSE-support.png)

判断给定的 [MIME 类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 是否被当前的浏览器支持

```js
let mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
let isMediaSourceSupported =
  'MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)

if (isMediaSourceSupported) {
  let mediaSource = new MediaSource()
  // ...
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec)
}
```

> MediaSource.isTypeSupported('mime; codecs=""'); 需要指定 codecs

### transcoding

并非所有浏览器都支持所有编解码器，所以我们需要对资源进行转码。这里推荐使用 [FFmpeg](https://github.com/FFmpeg/FFmpeg)

```
ffmpeg -i input.wav output.mp3
ffmpeg -i input.y4m -i input.wav output.webm
```

### 获取资源的 codecs 及资源碎片化

下载 [Bento4 ](https://github.com/axiomatic-systems/Bento4)

Bento4 SDK 包含几个使用 SDK API 构建的命令行应用程序/工具。这些包括：

| 程序名      | 描述                                                        |
| :---------- | :---------------------------------------------------------- |
| mp4info     | 显示有关 MP4 文件的高级信息，包括所有曲目和编解码器详细信息 |
| mp4dump     | 显示 MP4 文件的整个原子/框结构                              |
| mp4fragment | 从非碎片文件创建碎片化 MP4 文件或重新碎片已碎片化的文件     |
| mp4split    | 将碎片化的 MP4 文件拆分为离散文件                           |

查看资源的 Codecs

```
./mp4info.exe src/pirates.mp4 | grep Codecs
#   Codecs String: mp4a.40.2
#   Codecs String: avc1.4D401F
```

那么 mimeCodec = 'avc1.4D401F, mp4a.40.2'

查看资源碎片化状态

```
./mp4info.exe ./src/pirates.mp4 | grep fragments
#fragments:  no
```

资源碎片化

```
./mp4fragment.exe src/pirates.mp4 src/pirates_fragment.mp4
#found regular I-frame interval: 17496 frames (at 23.976 frames per second)
#auto-detected fragment duration too large, using default
```

再次查看资源碎片化状态

```
./mp4info.exe ./src/pirates_fragmented.mp4 | grep fragments

#fragments:  yes
#    sample count with fragments: 61991
#    duration with fragments:     63478784
#    duration with fragments:     1439428 (ms)
#    sample count with fragments: 34511
#    duration with fragments:     69091022
#    duration with fragments:     1439396 (ms)
```

### 使用 MSE 播放二进制数据流

- [DEMO: BUFFER ASAP](http://nickdesaulniers.github.io/netfix/demo/bufferAll.html)
- [DEMO: BUFFER JUST IN TIME](http://nickdesaulniers.github.io/netfix/demo/bufferWhenNeeded.html)

```js
var video = document.querySelector('video')

var assetURL = 'frag_bunny.mp4'
// Need to be specific for Blink regarding codecs
// ./mp4info frag_bunny.mp4 | grep Codec
var mimeCodec = 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"'

if ('MediaSource' in window && MediaSource.isTypeSupported(mimeCodec)) {
  var mediaSource = new MediaSource()
  //console.log(mediaSource.readyState); // closed
  video.src = URL.createObjectURL(mediaSource)
  mediaSource.addEventListener('sourceopen', sourceOpen)
} else {
  console.error('Unsupported MIME type or codec: ', mimeCodec)
}

function sourceOpen(_) {
  //console.log(this.readyState); // open
  var mediaSource = this
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec)
  fetchAB(assetURL, function (buf) {
    sourceBuffer.addEventListener('updateend', function (_) {
      mediaSource.endOfStream()
      video.play()
      //console.log(mediaSource.readyState); // ended
    })
    sourceBuffer.appendBuffer(buf)
  })
}

function fetchAB(url, cb) {
  console.log(url)
  var xhr = new XMLHttpRequest()
  xhr.open('get', url)
  xhr.responseType = 'arraybuffer'
  xhr.onload = function () {
    cb(xhr.response)
  }
  xhr.send()
}
```

替换本地资源后，报 MediaSource 错误：

> Uncaught DOMException: Failed to execute 'endOfStream' on 'MediaSource': The MediaSource's readyState is not 'open'.

原因是因为视频资源不是 `fragmented `，需要进行转换，操作流程参考上一节。

### 注意

1. prevent-html5-video-from-being-downloaded-right-click-saved？

最简单的方式移除视频标签的右键“保存”选项

```js
$(document).ready(function () {
  $('#videoElementID').bind('contextmenu', function () {
    return false
  })
})
```

> This does not help however if JavaScript is disabled in the browser

2. Firefox 61 上报错(QuotaExceededError: The quota has been exceeded.)

firefox 会限制 fragment 的大小。firefox 需要 fragment 小于 20M。chrome & Edge 无限制.

## 阅读链接

- 使用 [MediaSource](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaSource) 播放视频
- [MIME 类型](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [Blob](https://developer.mozilla.org/zh-CN/docs/Web/API/Blob) Blob 对象表示一个不可变、原始数据的类文件对象。Blob 表示的不一定是 JavaScript 原生格式的数据。File 接口基于 Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。
- [Using files from web applications](https://developer.mozilla.org/zh-CN/docs/Web/API/File/Using_files_from_web_applications)
- [Let's build a Netflix](https://github.com/nickdesaulniers/netfix) 使用 MediaSource 播放视频 demo
- [LET'S MAKE A NETFLIX](http://nickdesaulniers.github.io/netfix/#/)
- [caniuse: createObjectURL](https://caniuse.com/#search=createObjectURL)
- [autoplay-policy-changes](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) 谷歌 66 版本自动播放政策更改
- [prevent-html5-video-from-being-downloaded-right-click-saved](https://stackoverflow.com/questions/9756837/prevent-html5-video-from-being-downloaded-right-click-saved)
- 谷歌浏览器中更改自动播放策略: `chrome://flags/#autoplay-policy`
- [Postbird-demo](http://postbird.gitee.io/postbirdmp4toblob/)
- [axiomatic-systems/Bento4](https://github.com/axiomatic-systems/Bento4) 全功能 MP4 格式和 MPEG DASH 库和工具
- [ffmpeg](https://chocolatey.org/packages?q=ffmpeg) windows 上安装 ffmpeg
- [media-source](https://www.w3.org/TR/media-source/) Media Source Extensions
