---
title: jsonp-vs-cors
date: 2018-05-29 21:21:58
tags: ajax
categories:
  - JavaScript
---

## jsonp vs cors

jsonp是利用 script 标签不受同源策略影响，可以跨域引入外部资源的特性，让服务器端返回可执行的 JS 函数，将要返回的数据作为参数传进函数，以此实现跨域加载数据的目的
cors是w3c提供的一个跨域标准，跨域资源共享。

**JSONP 的优缺点**

优点
1）因 script 隶属于 HTML 的标签，所以不存在兼容问题

缺点
1）因需使用 URL 引入资源，所以 JSONP 仅支持 get 请求
2）因 script 标签会将资源作为 JS 代码执行，所以可能会被注入恶意代码


**CORS 的使用**

前端：正常使用 AJAX 发送请求

服务端：若确定接受请求，则在返回结果中加入响应头：Access-Control-Allow-Origin

CORS 的优缺点
优点
1）使用简单方便、更为安全
2）支持 POST 请求方式

缺点
1）CORS 是一种新型跨域问题的解决方案：存在兼容问题——仅支持 IE10 以上


## links

+ [跨域资源共享 CORS 详解](http://www.ruanyifeng.com/blog/2016/04/cors.html)
+ [HTTP访问控制（CORS）](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS)
+ [前端解决跨域问题的8种方案](http://www.cnblogs.com/JChen666/p/3399951.html)
