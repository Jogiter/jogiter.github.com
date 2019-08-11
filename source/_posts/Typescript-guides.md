---
title: Typescript guides
date: 2019-08-11 12:55:51
tags:
 - typescript
---

## 阅读链接

+ official
  + [typescript](https://www.typescriptlang.org/docs/home.html)
+ demos 
  + [TypeScript-Vue-Starter](https://github.com/microsoft/TypeScript-Vue-Starter)
  + [typescript-vue-todomvc](https://github.com/DanielRosenwasser/typescript-vue-todomvc)
+ tools
  + [vue-class-component](https://github.com/vuejs/vue-class-component)
  + [vue-property-decorator](https://github.com/kaorun343/vue-property-decorator)
  + [typescript-starter](https://github.com/bitjson/typescript-starter)
+ awesome
  + [awesome-typescript](https://github.com/dzharii/awesome-typescript)
  + [https://github.com/DefinitelyTyped/DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)
  + [https://microsoft.github.io/TypeSearch/](https://microsoft.github.io/TypeSearch/)

## 注意事项

请注意我们的单文件组件的一些事项： 

-  我们必须编写 `<script lang =“ts”>` 才能使用 `TypeScript`。 
-  我们必须在 `index.ts` 中导入扩展名为 `.vue` 的组件。 
-  **我们能够在 `<style> ` 标签中编写与我们的组件隔离的 `CSS` ，这是我们在 `.ts` 组件中无法做到的。** 
-  我们默认导出了对 `Vue.extend` 的调用（而不是选项包本身）。如果你不写 `Vue.extend`，`Vetur` 会让它看起来像是正常工作，但是你在构建项目时会遇到错误。

> typescript 英文文档比中文文档更新快，更准确信息请翻阅英文文档。

## Q&A:

Q: Error: `vue-loader` was used without the corresponding plugin

1. 升级 `vue-loader` 到 14 版本以上
2. 在 `webpack.config.js` 中添加：

```js
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  // ...
  plugins: [
    new VueLoaderPlugin()
  ]
}
```

Q: # [Could not find a declaration file for module 'module-name'. '/path/to/module-name.js' implicitly has an 'any' type](https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam)

Here are two other solutions

When a module is not yours - try to install types from `@types`:

```sh
npm install -D @types/module-name
```

If the above install errors - try changing `import` statements to `require`:

```js
// import * as yourModuleName from 'module-name';
const yourModuleName = require('module-name');
```

Q: [Property 'style' does not exist on type 'Element'](https://github.com/Microsoft/TypeScript/issues/3263)

```source-ts
class Test {
  constructor(elem:HTMLElement) {
    elem.style.color = 'red';
  };
}

let elem = <HTMLElement>document.querySelector('#test');
let test = new Test(elem);
```

Q: 如何处理在 `Vue.prototype` 上添加的变量

在 `vue.d.ts` 文件中添加定义：

```source-ts
import  Vue  from  'vue';

declare  module  'vue/types/vue' {
  interface  Vue {
    $bus:  Vue
  }
}
```

Q: [ts属性后面的感叹号有什么用处？](https://www.leevii.com/2018/10/what-does-the-exclamation-point-behind-the-ts-attribute-mean.html)

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

```js
import { Vue, Component } from  'vue-property-decorator'
import { State, Mutation } from  'vuex-class'

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
