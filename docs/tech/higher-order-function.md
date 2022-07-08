---
title: higher-order-function
tags: js-tips
categories:
  - JavaScript
---

# {{ $frontmatter.title }}

[[toc]]

## 柯里化

柯里化（Currying），又称部分求值（Partial Evaluation），是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。

核心思想是把多参数传入的函数拆成单参数（或部分）函数，内部再返回调用下一个单参数（或部分）函数，依次处理剩余的参数。

通用实现：

```js
var currying = function (fn) {
  var args = [].slice.call(arguments, 1)
  return function () {
    var newArgs = args.concat([].slice.call(arguments))
    return fn.apply(null, newArgs)
  }
}
```

柯里化有 3 个常见作用：

- 提前绑定好函数里面的某些参数，达到参数复用的效果，提高了适用性。
- 提前返回
- 延迟计算/运行

**参数复用**

```js
// 原始的加法函数
function origPlus(a, b) {
  return a + b
}

// 柯里化后的plus函数
function plus(a) {
  return function (b) {
    return a + b
  }
}

// ES6写法
const plus = (a) => (b) => a + b
plus(1)(2) // 3

//
let plus1 = plus(1)
plus1(2) // 3
plus1(3) // 4
```

**提前返回**

常见的兼容现代浏览器以及 IE 浏览器的事件添加方法

```js
var addEvent = function (el, type, fn, capture) {
  if (window.addEventListener) {
    el.addEventListener(
      type,
      function (e) {
        fn.call(el, e)
      },
      capture
    )
  } else if (window.attachEvent) {
    el.attachEvent('on' + type, function (e) {
      fn.call(el, e)
    })
  }
}
```

很显然，我们每次使用 addEvent 为元素添加事件的时候，都会走一遍 if...else if ...，其实只要一次判定就可以了。

```js
// 柯里化
var addEvent = (function () {
  if (window.addEventListener) {
    return function (el, event, fn, capture) {
      el.addEventListener(
        event,
        function (e) {
          fn.call(el, e)
        },
        capture
      )
    }
  } else if (window.attachEvent) {
    return function (el, event, fn, capture) {
      el.attachEvent('on' + event, function (e) {
        fn.call(el, e)
      })
    }
  }
})()
```

**延迟计算/运行**

```js
const curry = function (fn) {
  const _args = []
  return function cb(...rest) {
    if (rest.length === 0) {
      return fn.apply(this, _args)
    }
    _args.push(...rest)
    return cb
  }
}

const curryAdd = curry((...T) => T.reduce((sum, single) => (sum += single)))
curryAdd(1)
curryAdd(2)
curryAdd(3)
curryAdd() // 最后计算输出:6
```

**Function.prototype.bind 方法也是柯里化应用**

```js
if (!function () {}.bind) {
  Function.prototype.bind = function (context) {
    var self = this,
      args = Array.prototype.slice.call(arguments)

    return function () {
      return self.apply(context, args.slice(1))
    }
  }
}
```

**关于柯里化的性能**

柯里化使用了闭包，就会存在闭包的缺点，可能会造成内存泄漏。

**高阶柯里化函数**

```js
// es5
function curryingHelper(fn) {
  var _args = Array.prototype.slice.call(arguments, 1)
  return function () {
    var _newArgs = Array.prototype.slice.call(arguments)
    var _totalArgs = _args.concat(_newArgs)
    return fn.apply(this, _totalArgs)
  }
}

// es6
function curryingHelper(fn, ...args) {
  return (...newArgs) => {
    return fn.apply(this, args.concat(newArgs))
  }
}
```

写一个简单的函数验证上面的辅助柯里化函数的正确性, 代码部分如下:

```js
function showMsg(name, age, fruit) {
  console.log(
    'My name is ' +
      name +
      ", I'm " +
      age +
      ' years old, ' +
      ' and I like eat ' +
      fruit
  )
}

var curryingShowMsg1 = curryingHelper(showMsg, 'dreamapple')
curryingShowMsg1(22, 'apple') // My name is dreamapple, I'm 22 years old,  and I like eat apple

var curryingShowMsg2 = curryingHelper(showMsg, 'dreamapple', 20)
curryingShowMsg2('watermelon') // My name is dreamapple, I'm 20 years old,  and I like eat watermelon
```

我们希望那些经过柯里化后的函数可以每次只传递进去一个参数，然后可以进行**多次参数**的传递，那么应该怎么办呢？

```js
// es5
function betterCurryingHelper(fn, len) {
  var length = len || fn.length // fn.length表示的是这个函数的参数长度
  return function () {
    var allArgsFulfilled = arguments.length >= length

    // 如果参数全部满足,就可以终止递归调用
    if (allArgsFulfilled) {
      return fn.apply(this, arguments)
    } else {
      var argsNeedFulfilled = [fn].concat(Array.prototype.slice.call(arguments))
      return betterCurryingHelper(
        curryingHelper.apply(this, argsNeedFulfilled),
        length - arguments.length
      )
    }
  }
}

// es6
function betterCurryingHelper(fn, length = fn.length) {
  return (...args) => {
    let allArgsFulfilled = args.length >= length

    // 如果参数全部满足,就可以终止递归调用
    if (allArgsFulfilled) {
      return fn.apply(this, args)
    } else {
      let argsNeedFulfilled = [fn].concat(args)
      return betterCurryingHelper(
        curryingHelper.apply(this, argsNeedFulfilled),
        length - args.length
      )
    }
  }
}
```

检验一下这个函数的正确性:

```js
function showMsg(name, age, fruit) {
  console.log(
    'My name is ' +
      name +
      ", I'm " +
      age +
      ' years old, ' +
      ' and I like eat ' +
      fruit
  )
}

var betterShowMsg = betterCurryingHelper(showMsg)
betterShowMsg('dreamapple', 22, 'apple') // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg('dreamapple', 22)('apple') // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg('dreamapple')(22, 'apple') // My name is dreamapple, I'm 22 years old,  and I like eat apple
betterShowMsg('dreamapple')(22)('apple') // My name is dreamapple, I'm 22 years old,  and I like eat apple
```

> 更多内容请参阅[高阶柯里化函数](https://segmentfault.com/a/1190000006096034#articleHeader1)

新增面试题目：

Q1: 完成一个 sum 函数，使调用后输出 6。

```js
sum(1)(2)(3).valueOf()

// 答案
function add(a, b, c) {
  return {
    valueOf() {
      return a + b + c
    },
  }
}

// 使用上面的 betterCurryingHelper 函数
var sum = betterCurryingHelper(add)

sum(1)(2)(3).valueOf()
```

**javascript 中有趣的反柯里化**

```js
Function.prototype.uncurrying = function () {
  var _this = this
  return function () {
    return Function.prototype.call.apply(_this, arguments)
  }
}
```

功能测试：

```js
let obj = {}
let push = Array.prototype.push.uncurrying()
push(obj, 'first')
console.log(obj) // {0: "first", length: 1}
```

> 更多内容请参阅[javascript 中有趣的反柯里化](http://www.cnblogs.com/hustskyking/archive/2013/04/09/uncurrying.html)

**参考：**

- [掌握 JavaScript 函数的柯里化](https://segmentfault.com/a/1190000006096034#articleHeader2)
- [JS 中的柯里化(currying)](https://www.zhangxinxu.com/wordpress/2013/02/js-currying/)
- [理解运用 JS 的闭包、高阶函数、柯里化](https://blog.csdn.net/qq_42564846/article/details/81448352)
- [javascript 中有趣的反柯里化](http://www.cnblogs.com/hustskyking/archive/2013/04/09/uncurrying.html)

## 尾调用

尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指**某个函数的最后一步是调用另一个函数**。

```js
// 尾调用：true
function f(x) {
  return g(x)
}

// 尾调用：false
function f(x) {
  let y = g(x)
  return y
}

// 尾调用：false
function f(x) {
  return g(x) + 1
}

// 尾调用：false
function f(x) {
  g(x)
}
```

尾递归：函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

> 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

比较著名的例子，就是计算 Fibonacci 数列，也能充分说明尾递归优化的重要性。

```js
/**
 * [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/function#尾递归优化的实现)
 * 函数调用自身，称为递归。如果尾调用自身，就称为尾递归。
 * 递归非常耗费内存，但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。
 * 不同方式实现菲波那切数列
 *
 * 变形题目：一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
 * 解析 f(n) = f(n-1) + f(n-2); f(2) = 1; f(1) = 1.
 */

// 非尾递归。需要保存n个调用记录，复杂度 O(n)
function Fibonacci(n) {
  if (n <= 1) {
    return 1
  }
  return Fibonacci(n - 2) + Fibonacci(n - 1)
}
Fibonacci(10) // 89
Fibonacci(100) // 堆栈溢出
Fibonacci(500) // 堆栈溢出

// 尾递归。只保留一个调用记录，复杂度 O(1)
function Fibonacci(n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2
  }
  return Fibonacci(n - 1, ac2, ac1 + ac2)
}
Fibonacci2(100) // 573147844013817200000
Fibonacci2(1000) // 7.0330367711422765e+208
Fibonacci2(10000) // Infinity

// 尾递归优化
function tco(f) {
  var value
  var active = false
  var accumulated = []

  return function accumulator() {
    accumulated.push(arguments)
    if (!active) {
      active = true
      while (accumulated.length) {
        value = f.apply(this, accumulated.shift())
      }
      active = false
      return value
    }
  }
}

let fib = tco(function (n, ac1 = 1, ac2 = 1) {
  if (n <= 1) {
    return ac2
  }
  return fib(n - 1, ac2, ac1 + ac2)
})

// 不会发生调用栈溢出
fib(100) // 573147844013817200000
fib(1000) // 7.0330367711422765e+208
fib(100000) // Infinity
```

**参考：**

- [ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/function#%E5%B0%BE%E8%B0%83%E7%94%A8%E4%BC%98%E5%8C%96)
