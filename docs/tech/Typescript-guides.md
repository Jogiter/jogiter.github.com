---
title: Typescript guides
tags:
  - typescript
---

# {{ $frontmatter.title }}

[[toc]]

## 学习链接

- [typescript-official](https://www.typescriptlang.org/docs/handbook/intro.html) 官方英文文档。（中文文档更新较慢。建议阅读官网文档）
  - [utility-types](https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype) 内置的工具类型
- [tsdoc](https://github.com/microsoft/tsdoc) 标准的文档注释
- [typedoc](https://github.com/TypeStrong/typedoc) ts 文档生成器
- [deno](https://github.com/denoland/deno) runtime for ts
- [utility-types](https://github.com/piotrwitek/utility-types) ts 中的 lodash
- vue 中相关的库
  - [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator) Vue.js and Property Decorator
  - [vue-class-component](https://github.com/vuejs/vue-class-component) ES / TypeScript decorator for class-style Vue components.
- [typescript 在线编辑器](https://www.typescriptlang.org/play?#code/Q)
- [type-challenges](https://github.com/type-challenges/type-challenges) TypeScript 类型挑战
- Books
  - [深入理解 TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)

| TypeScript                       | JavaScript                       |
| :------------------------------- | :------------------------------- |
| TS 是一种面向对象的脚本语言      | JS 是一种面向对象的脚本语言      |
| 依赖语言（编译为 JavaScript）    | 独立语言（可以解释和执行）       |
| 编译语言，无法在浏览器中直接执行 | 解释语言，直接在网络浏览器中执行 |
| 可以静态输入                     | 动态类型                         |
| 更好的结构和简洁                 | 不受类型系统限制，因此更加灵活   |
| 扩展名为.ts                      | 具有.js 扩展名                   |
| 复杂项目的理想选择               | 适用于小型，简单的项目           |

## 注意事项

请注意我们的单文件组件的一些事项：

- 我们必须编写 `<script lang =“ts”>` 才能使用 `TypeScript`。
- 我们必须在 `index.ts` 中导入扩展名为 `.vue` 的组件。
- **我们能够在 `<style> ` 标签中编写与我们的组件隔离的 `CSS` ，这是我们在 `.ts` 组件中无法做到的。**
- 我们默认导出了对 `Vue.extend` 的调用（而不是选项包本身）。如果你不写 `Vue.extend`，`Vetur` 会让它看起来像是正常工作，但是你在构建项目时会遇到错误。

> typescript 英文文档比中文文档更新快，更准确信息请翻阅英文文档。

## Q&A:

Q: Error: `vue-loader` was used without the corresponding plugin

1. 升级 `vue-loader` 到 14 版本以上
2. 在 `webpack.config.js` 中添加：

```js
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  // ...
  plugins: [new VueLoaderPlugin()],
}
```

Q: # [Could not find a declaration file for module 'module-name'. '/path/to/module-name.js' implicitly has an 'any' type](https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam)

Here are two other solutions

When a module is not yours - try to install types from `@types`:

```
npm install -D @types/module-name
```

If the above install errors - try changing `import` statements to `require`:

```js
// import * as yourModuleName from 'module-name';
const yourModuleName = require('module-name')
```

Q: [Property 'style' does not exist on type 'Element'](https://github.com/Microsoft/TypeScript/issues/3263)

```typescript
class Test {
  constructor(elem: HTMLElement) {
    elem.style.color = 'red'
  }
}

let elem = <HTMLElement>document.querySelector('#test')
let test = new Test(elem)
```

Q: 如何处理在 `Vue.prototype` 上添加的变量

在 `vue.d.ts` 文件中添加定义：

```typescript
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $bus: Vue
  }
}
```

Q: [ts 属性后面的感叹号有什么用处？](https://www.leevii.com/2018/10/what-does-the-exclamation-point-behind-the-ts-attribute-mean.html)

感叹号是非`null`和非`undefined`的类型断言，所以上面的写法就是对`propA`这个属性进行非空断言。文档的相关说明在[这里](https://github.com/Microsoft/TypeScript/wiki/What's-new-in-TypeScript#non-null-assertion-operator)

Q: [Property '…' has no initializer and is not definitely assigned in the constructor](https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc)

原因： [typescript-2-7#strict-class-initialization](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#strict-class-initialization)

解决方案：

```js
// method 1
keys: any[] = []

// method 2
keys!: any[]

// method 3: not recommended
// settings in tsconfig.json
"strictPropertyInitialization": false
```

Q: `this.$router.push({})` tslint error

[Location interface typing for params should be more permissive](https://github.com/vuejs/vue-router/issues/2662)

Q: how to write mapState function in vuex?

```js
import { Vue, Component } from  'vue-property-decorator'
import { mapState, mapMutations } from  'vuex'

@Component({
  name      : 'hello',
  computed  : {
    ...mapState({
      count: 'count',
    }),
  },
})
export default class HelloComponent extends Vue {
  count!: number

  get countDisplay(): string {
    return this.count.toString() + '!!!'
  }
}
```

使用 [vuex-class](https://github.com/ktsn/vuex-class/blob/master/test/bindings.ts)

```typescript
import { Vue, Component } from 'vue-property-decorator'
import { State, Mutation } from 'vuex-class'

@Component({
  name: 'hello',
})
export default class HelloComponent extends Vue {
  @State readonly count!: number

  get countDisplay(): string {
    return this.count.toString() + '!!!'
  }
}
```

Q: 辨析联合类型

> 当类中含有[字面量成员](https://jkchao.github.io/typescript-book-chinese/typings/literals.html)时，我们可以用该类的属性来辨析联合类型。

```typescript
interface Square {
  kind: 'square'
  size: number
}

interface Rectangle {
  kind: 'rectangle'
  width: number
  height: number
}

type Shape = Square | Rectangle

function area(s: Shape) {
  if (s.kind === 'square') {
    // 现在 TypeScript 知道 s 的类型是 Square
    // 所以你现在能安全使用它
    return s.size * s.size
  } else {
    // 不是一个 square ？因此 TypeScript 将会推算出 s 一定是 Rectangle
    return s.width * s.height
  }
}
```

Q: 配合 Axios 使用泛型

通常情况下，我们会把后端返回数据格式单独放入一个 interface 里：

```typescript
// 请求接口数据
export interface ResponseData<T = any> {
  /**
   * 状态码
   * @type { number }
   */
  code: number

  /**
   * 数据
   * @type { T }
   */
  result: T

  /**
   * 消息
   * @type { string }
   */
  message: string
}
```

当我们把 API 单独抽离成单个模块时：

```typescript
// 在 axios.ts 文件中对 axios 进行了处理，例如添加通用配置、拦截器等
import Ax from './axios'

import { ResponseData } from './interface.ts'

export function getUser<T>() {
  return Ax.get<ResponseData<T>>('/somepath')
    .then((res) => res.data)
    .catch((err) => console.error(err))
}
```

接着我们写入返回的数据类型 User，这可以让 TypeScript 顺利推断出我们想要的类型：

```typescript
interface User {
  name: string
  age: number
}

async function test() {
  // user 被推断出为
  // {
  //  code: number,
  //  result: { name: string, age: number },
  //  message: string
  // }
  const user = await getUser<User>()
}
```

Q: 枚举使用

```typescript
enum Color {
  Red = '#fea',
  Green = '#eaf',
  Blue = '#afe',
}

// type ColorKey = "Red" | "Green" | "Blue"
type ColorKey = keyof typeof Color

function test(color: ColorKey) {
  return Color[color]
}

const n = test('Red')
```
