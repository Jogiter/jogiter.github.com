---
title: wechat save and share image
date: 2018-12-29 11:54:47
tags:
  - wechat
  - canvas
categories:
  - JavaScript
---

参考 [一次 H5 「保存页面为图片」 的踩坑之旅](https://juejin.im/post/5a17c5e26fb9a04527254689) 可以完成 90% 的工作量。项目主要用到的是 [html2canvas](https://html2canvas.hertzen.com/configuration)。

[online demo](https://blog.jogiter.cn/test/html2canvas/)

## [Discover the different features supported by html2canvas](http://html2canvas.hertzen.com/features)

**Unsupported CSS properties**

These CSS properties are NOT currently supported

- background-blend-mode
- border-image
- box-decoration-break
- box-shadow
- filter
- font-variant-ligatures
- mix-blend-mode
- object-fit
- repeating-linear-gradient()
- writing-mode
- zoom

## [3.2.2 图片画出来怎么不见了](https://juejin.im/post/5a17c5e26fb9a04527254689)

> 什么是“被污染”的 canvas?
>
> 尽管不通过 CORS 就可以在画布中使用图片，但是这会污染画布。一旦画布被污染，你就无法读取其数据。例如，你不能再使用画布的 toBlob(), toDataURL() 或 getImageData() 方法，调用它们会抛出安全错误。

**方案一：将图片转换成 base64**

前提条件：

- 给 img 元素设置 crossOrigin 属性，值为 anonymous
- 图片服务端设置允许跨域（返回 [CORS](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS) 头）

```js
function toDataURL(src, callback, outputFormat) {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.onload = function() {
    var canvas = document.createElement("CANVAS");
    var ctx = canvas.getContext("2d");
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}

toDataURL(
  "https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0",
  function(dataUrl) {
    console.log("RESULT:", dataUrl);
  }
);
```

**方案二：`html2canvas` 开启 `useCORS`(Whether to attempt to load images from a server using CORS)**

```js
html2canvas(document.body, {
  useCORS: true
}).then(function(canvas) {
  let img = new Image();
  img.src = canvas.toDataURL();
  document.body.appenChild(img);
});
```

## canvas 绘制模糊

**1.canvas 锯齿**

修改 [imageSmoothingEnabled](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled) 值

> CanvasRenderingContext2D.imageSmoothingEnabled 是 Canvas 2D API 用来设置图片是否平滑的属性，true 表示图片平滑（默认值），false 表示图片不平滑。当我们获取 imageSmoothingEnabled 属性值时， 它会返回最新设置的值。

> 以缩放画布为例，这个属性对像素为主的游戏很有用。默认的改变大小的算法会造成图片模糊并且破坏图片原有的像素。 如果那样的话，设置属性值为 false。

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img = new Image();
img.src = "https://mdn.mozillademos.org/files/222/Canvas_createpattern.png";
img.onload = function() {
  ctx.mozImageSmoothingEnabled = false;
  ctx.webkitImageSmoothingEnabled = false;
  ctx.msImageSmoothingEnabled = false;
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0, 400, 200);
};
```

**2.解决 Retina 屏下的 图片模糊问题**

[High DPI Canvas](https://www.html5rocks.com/en/tutorials/canvas/hidpi/)

```js
function setupCanvas(canvas) {
  // Get the device pixel ratio, falling back to 1.
  var dpr = window.devicePixelRatio || 1;
  // Get the size of the canvas in CSS pixels.
  var rect = canvas.getBoundingClientRect();
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  var ctx = canvas.getContext("2d");
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr);
  return ctx;
}

// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector(".my-canvas"));
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(200, 200);
ctx.stroke();
```

## 阅读链接

- [html2canvas](https://html2canvas.hertzen.com/configuration)
- [High DPI Canvas](https://www.html5rocks.com/en/tutorials/canvas/hidpi/)
- [一次 H5 「保存页面为图片」 的踩坑之旅](https://juejin.im/post/5a17c5e26fb9a04527254689)
- [启用了 CORS 的图片](https://developer.mozilla.org/zh-CN/docs/Web/HTML/CORS_enabled_image)
- [浏览器的同源策略](https://developer.mozilla.org/zh-CN/docs/Web/Security/Same-origin_policy)
- [将图像转换为 base64](https://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript)
- [CanvasRenderingContext2D](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D)
- [canvas 的优化](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas)
