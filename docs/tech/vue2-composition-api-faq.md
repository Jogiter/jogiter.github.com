---
title: vue2 + typescript + composition-api 常见问题
---

# {{ $frontmatter.title }}

[[toc]]

:::danger
使用限制 [composition-api#limitations](https://github.com/vuejs/composition-api#limitations)
:::

## 环境

- nuxt@2.15.3
- typescript@4.2.4
- vue@2.6.12

## 安装

安装 `@nuxtjs/composition-api`:

> yarn add @nuxtjs/composition-api

配置 `nuxt.config.js` 开启模块

```typescript
{
  buildModules: ['@nuxtjs/composition-api/module']
}
```

## setup

```typescript
import {
  defineComponent,
  reactive,
  onMounted,
  useRoute,
} from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    // ...
  },
})
```

## router & route

> [@nuxtjs/composition-api#routes](https://composition-api.nuxtjs.org/packages/routes)

```typescript
import { defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { query } = useRoute().value
    const id = query.id as string

    const router = useRouter()
    router.push('/')
  },
})
```

## $axios

> [@nuxtjs/axios#typescript](https://axios.nuxtjs.org/setup#typescript)

配置 tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["@nuxt/types", "@nuxtjs/axios"]
  }
}
```

```typescript
import { defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $axios } = useContext()
    // ...
  },
})
```

## $loading

```typescript
import {
  defineComponent,
  useRoute,
  wrapProperty,
  useContext,
} from '@nuxtjs/composition-api'
import type { ElLoadingComponent } from 'element-ui/types/loading'
export default defineComponent({
  setup() {
    const { $axios } = useContext()
    const { query } = useRoute().value
    const id = query.id as string
    const data = []

    const fetchApi = async () => {
      const $loading = wrapProperty('$loading', false)()
      let loading!: ElLoadingComponent
      try {
        loading = $loading({})
        data = await $axios.$get(API.apiDetail(id))
      } catch (e) {
        console.error(e)
      } finally {
        loading.close()
      }
    }

    fetchApi()

    return {
      data,
    }
  },
})
```

:::tip
[wrapProperty](https://composition-api.nuxtjs.org/API/wrap) 第二个参数是一个布尔值，指示辅助函数是否应该返回一个计算属性，它默认为 true
:::

## vuex

```typescript
import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()
  },
})
```

### mapState / mapMutations / mapActions / mapGetters

方式一：[vuex#accessing-mutations-and-actions](https://next.vuex.vuejs.org/guide/composition-api.html#accessing-mutations-and-actions)

```typescript
import { defineComponent, useStore } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const store = useStore()

    const fooMutation = (...args: any[]) =>
      store.commit('namespace/fooMutation', ...args)
    // call fooMutation with args
    // fooMutation('foo', 'bar')

    return {
      // access a mutation
      increment: () => store.commit('increment'),

      // access an action
      asyncIncrement: () => store.dispatch('asyncIncrement'),
    }
  },
})
```

方式二：[vuex-composition-helpers](https://github.com/greenpress/vuex-composition-helpers) (封装了 store 的 state/commit/dispath)

```typescript
import {
  useNamespacedMutations,
  useNamespacedState,
} from 'vuex-composition-helpers'

const namespace = 'interface-setting'

export default defineComponent({
  setup() {
    const { code } = useNamespacedState(namespace, ['code'])

    const { updateCode } = useNamespacedMutations(namespace, ['updateCode'])

    return {
      code,
      updateCode,
    }
  },
})
```

## refs

```html
<template>
  <el-form ref="dialogFormRef" :model="dialogForm">
    <!-- ... -->
  </el-form>
  <el-button type="primary" @click="onDialogFormSubmit">确 定</el-button>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
  import type { ElForm } from 'element-ui/types/form'

  export default defineComponent({
    setup() {
      const dialogForm = reactive({...})
    	const dialogFormRef = ref({} as ElForm)

      const onDialogFormSubmit = () => {
        dialogFormRef.value.validate(async valid => {
          if (valid) {
            // do with dialogForm
          } else {
            return false
          }
        })
      }

      return {
        dialogForm,
      	dialogFormRef,
        onDialogFormSubmit,
      }
    }
  })
</script>
```

## jsx in typescript

way 1: replace jsx with vnode

```vue
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column
      v-for="col in columns"
      :key="col.prop"
      v-bind="{ ...col }"
    />
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
import { h } from '@vue/composition-api'
export default defineComponent({
  setup() {
    return {
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
        },
      ],
      columns: [
        {
          prop: 'date',
          label: '日期',
        },
        {
          prop: 'name',
          label: '姓名',
          formatter(row, column, value) {
            // avoid writing jsx in typescript. instead of return a vdom
            return [
              h(
                ElementPlus.ElButton,
                {
                  type: 'success',
                  icon: 'el-icon-search',
                },
                '搜索'
              ),
            ]
          },
        },
        {
          prop: 'address',
          label: '地址',
        },
      ],
    }
  },
})
</script>
```

[demo](https://codepen.io/Jogiter/pen/JjWrdNP?editors=0010)

way2: (推荐)

1. 创建 jsx.d.ts

```typescript
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends Vue {}
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}
```

2. 更新 `tsconfig.json`

```json
{
  "compilerOptions": {
    "jsx": "preserve"
  }
}
```

3. code

```html
<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="col in columns" :key="col.prop" v-bind="{...col}" />
  </el-table>
</template>

<script lang="tsx">
  import { defineComponent, ref, reactive } from '@nuxtjs/composition-api'
  export default defineComponent({
    setup() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
        columns: [
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop: 'name',
            label: '姓名',
            formatter(row, column, value) {
              return <ElButton type={row.type} icon={row.icon}></ElButton>
            },
          },
          {
            prop: 'address',
            label: '地址',
          },
        ],
      }
    },
  })
</script>
```

## vuex types

> vuex@3.6.2 支持 vue2。如果使用 vue3，请使用 vuex@4

```typescript
// Getter, Plugin 等参见 vuex/types
import { MutationTree, ActionTree } from 'vuex'

const export const state = () => ({
  stateA: '',
  stateB: {
    foo: 0
  },
  stateC: false
})

type State = ReturnType<typeof state>

export const mutations: MutationTree<State> = {
  updateA(state, payload: string) {
    state.stateA = payload
  },
  updateB(state, payload: {foo: number}) {
    state.stateB = payload
  },
}
export const actions: ActionTree<State, {}> = {
	async login({ commit }, payload: any) {
    const json = await $axios.post(API.login, payload)
    commit('updateB', json)
  }
}
```

## provide/inject(响应性)

父组件中提供响应式的注入

```typescript
import { defineComponent, provide, toRef } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props) {
    //
    provide('height', toRef(props, 'height'))
  }
}
```

子组件中监听响应式的注入

```typescript
import { defineComponent, inject, watch } from '@nuxtjs/composition-api'

export default defineComponent({
  setup(props) {
    watch(
      inject('height') as string,
      (height) => {
        // do something with height
      },
      {
        immediate: true,
      }
    )
  }
}
```

[Provide / Inject](https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html#%E8%AE%BE%E6%83%B3%E5%9C%BA%E6%99%AF)

## readings

- [nuxt-community/composition-api](https://composition-api.nuxtjs.org/)
- [@nuxtjs/axios](https://axios.nuxtjs.org/setup)
- [vue/composition-api](https://v3.vuejs.org/guide/composition-api-introduction.html)
