---
title: 'eventloop,task and microtasks'
date: 2019-01-04 10:49:23
tags:
  - nodejs
  - translation
categories:
  - JavaScript
---

### 阅读链接

+ [Philip Roberts：What's event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
+ [Tasks, microtasks, queues and schedules](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
+ [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
+ [理解事件循环二(macrotask和microtask)](https://github.com/ccforward/cc/issues/48) 详细介绍了 event-loop 执行模型
+ [理解 JavaScript 中的 macrotask 和 microtask](https://juejin.im/entry/58d4df3b5c497d0057eb99ff) 本文章关于宏任务和微任务总结的很详细


### What's event loop

<iframe src="https://player.bilibili.com/player.html?aid=37759434&cid=66380541&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## task and microtask

+ macrotasks: `setTimeout`, `setInterval`, `setImmediate`, `I/O`, `UI渲染`
+ microtasks: `Promise`, `process.nextTick`, `Object.observe`, `MutationObserver`

**从规范中理解**

whatwg规范：[https://html.spec.whatwg.org/multipage/webappapis.html#task-queue](https://html.spec.whatwg.org/multipage/webappapis.html#task-queue)

+ 一个事件循环(event loop)会有一个或多个任务队列(task queue) task queue 就是 macrotask queue
+ 每一个 event loop 都有一个 microtask queue
+ task queue == macrotask queue != microtask queue
+ 一个任务 task 可以放入 macrotask queue 也可以放入 microtask queue 中
+ 当一个 task 被放入队列 queue(macro或micro) 那这个 task 就可以被立即执行了

当执行栈(call stack)为空的时候，开始依次执行：

1. 把最早的任务(task A)放入任务队列
2. 如果 task A 为null (那任务队列就是空)，直接跳到第6步
3. 将 currently running task 设置为 task A
4. 执行 task A (也就是执行回调函数)
5. 将 currently running task 设置为 null 并移出 task A
6. 执行 microtask 队列
  - a: 在 microtask 中选出最早的任务 task X
  - b: 如果 task X 为null (那 microtask 队列就是空)，直接跳到 g
  - c: 将 currently running task 设置为 task X
  - d: 执行 task X
  - e: 将 currently running task 设置为 null 并移出 task X
  - f: 在 microtask 中选出最早的任务 , 跳到 b
  - g: 结束 microtask 队列
7. 跳到第一步

上面就算是一个简单的 event-loop 执行模型

### Tasks, microtasks, queues and schedules（译）

**demo1**

```js
console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

日志应以什么顺序出现？

```js
script start
script end
promise1
promise2
setTimeout
```

**demo2**

HTML 如下：

```html
<div class="outer">
  <div class="inner"></div>
</div>
```

JavaScript 如下：

```js
// Let's get hold of those elements
var outer = document.querySelector('.outer');
var inner = document.querySelector('.inner');

// Let's listen for attribute changes on the
// outer element
new MutationObserver(function() {
  console.log('mutate');
}).observe(outer, {
  attributes: true
});

// Here's a click listener…
function onClick() {
  console.log('click');

  setTimeout(function() {
    console.log('timeout');
  }, 0);

  Promise.resolve().then(function() {
    console.log('promise');
  });

  outer.setAttribute('data-random', Math.random());
}

// …which we'll attach to both elements
inner.addEventListener('click', onClick);
outer.addEventListener('click', onClick);
```

当点击 `div.inner` 时会输出什么日志呢？

```js
click
promise
mutate
click
promise
mutate
timeout
timeout
```

**综上所述：**

+ `task` 按顺序执行，浏览器可以在它们之间进行渲染
+ `Microtasks` 按顺序执行，并执行：
  - 每次回调后，只要没有其他 `JavaScript` 在执行中
  - 在每项 `task` 结束时

更详细的理解请[阅读原文](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
