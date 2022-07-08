---
title: js 字符串比较大小
---

# {{ $frontmatter.title }}

[[toc]]

> 按每个字符的 charCode 大小进行比较，直到分出大小为止

## demos

```js
{
  let a = 'a11'
  let b = 'a2'
  console.log(a > b) // false
}
```

a 和 b 比较，步骤如下：

1.  a[0]='a', b[0]='a', 他们的 charCode 相等，所以比较下一项
2.  a[1]='1', b[1]='2', 1 的 charCode 是 49， 2 的是 50， 所以 a[1] < b[1]
3.  所以 a < b

```js
console.log('选择' > '努力') // true
```

因为 "选" 的 charCode 是 36873，"努" 的 charCode 是 21162

## 版本号比较大小

常见[版本号](https://semver.org/lang/zh-CN/) `0.0.1` 等，当某些特定情况下，如要进行版本号大小对比。因此有人会采用上述办法来比较。但是会有 bug。

```js
{
  let v1 = '9.1.21'
  let v2 = '7.1.1.28'
  console.log(v1 > v2) // true
}
{
  // v2 实际上是大于 v1
  let v1 = '9.1.21'
  let v2 = '10.1.1.28'
  console.log(v1 > v2) // true
}
```

为了修复此 Bug，我写了一个函数：

```js
// 对比版本号大小
function isBiggerVersion(v1, v2) {
  var result = true
  var array1 = v1.split('.')
  var array2 = v2.split('.')
  var isFirstLonger = array1.length >= array2.length

  function _bigger(longer, shorter) {
    var l = ~~(longer[0] || 0)
    var s = ~~(shorter[0] || 0)
    if (s >= l) {
      return false
    }
    if (s < l) {
      return true
    }
    if (s === l) {
      longer.shift()
      shorter.shift()

      return _bigger(longer, shorter)
    }
  }

  return isFirstLonger ? _bigger(array1, array2) : !_bigger(array2, array1)
}
```

下面是测试：

```js
{
  let v1 = '9.1.21'
  let v2 = v1
  console.log(isBiggerVersion(v1, v2)) // false
}

{
  let v1 = '9.1.21'
  let v2 = '10.1.1.28'
  console.log(isBiggerVersion(v1, v2)) // false
}

{
  let v1 = '9.1.21'
  let v2 = '10.0.1.28'
  console.log(isBiggerVersion(v1, v2)) // false
}

{
  let v1 = '9.1.21'
  let v2 = '9.0.1.28'
  console.log(isBiggerVersion(v1, v2)) // true
}

{
  let v1 = '9.1.21'
  let v2 = '9.1.1.28'
  console.log(isBiggerVersion(v1, v2)) // true
}
{
  let v1 = '9.1.21'
  let v2 = '8.1.1.28'
  console.log(isBiggerVersion(v1, v2)) // true
}

{
  let v1 = '9.1.21'
  let v2 = '8.1'
  console.log(isBiggerVersion(v1, v2)) // true
}

{
  let v1 = '9.1.21'
  let v2 = '10.1'
  console.log(isBiggerVersion(v1, v2)) // false
}
```

## 参考文章

- [小议 js 下字符串比较大小](https://www.cnblogs.com/52cik/p/js-string-comparison.html)
- [node-semver](https://github.com/npm/node-semver/blob/master/semver.js#L471-L491)
