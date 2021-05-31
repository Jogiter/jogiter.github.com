---
title: vue2 + composition-api 常见问题
date: 2021-04-21 14:46:03
tags:
  - vue
---

## 环境

• nuxt@2.15.3
• typescript@4.2.4
• vue@2.6.12

## 安装

安装 `@nuxtjs/composition-api`:

>yarn add @nuxtjs/composition-api

配置 `nuxt.config.js` 开启模块

```ts
{
  buildModules: [
    '@nuxtjs/composition-api/module'
  ]
}
```

## setup

```ts
import { defineComponent, reactive, onMounted, useRoute } from '@nuxtjs/composition-api'
export default defineComponent({
    setup() {
    // ...
  }
})
```

## router & route

>[@nuxtjs/composition-api#routes](https://composition-api.nuxtjs.org/packages/routes)

```ts
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

>[@nuxtjs/axios#typescript](https://axios.nuxtjs.org/setup#typescript)

配置 tsconfig.json

```json
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxtjs/axios"
    ]
  }
}
```

```ts
import { defineComponent, useContext } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const { $axios } = useContext()
    // ...
  }
})
```

## $loading

```ts
import { defineComponent, useRoute, wrapProperty, useContext } from '@nuxtjs/composition-api'
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
      data
    }
  }
})
```

## useStore

```ts
import { defineComponent, useStore } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const store = useStore()
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

```html
<template>
	<el-table :data="tableData" style="width: 100%">
    <el-table-column v-for="col in columns" :key="col.prop" v-bind="{...col}" />
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
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ],
        columns: [
          {
            prop: "date",
            label: "日期"
          },
          {
            prop: "name",
            label: "姓名",
            formatter(row, column, value) {
              // avoid writing jsx in typescript. instead of return a vdom
              return [
                h(
                  ElementPlus.ElButton,
                  {
                    type: "success",
                    icon: "el-icon-search"
                  },
                  "搜索"
                )
              ];
            }
          },
          {
            prop: "address",
            label: "地址"
          }
        ]
      }
		}
  })
</script>
```

[demo](https://codepen.io/Jogiter/pen/JjWrdNP?editors=0010)

way2: (推荐)

1. 创建 jsx.d.ts

```ts
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

> <script lang="tsx">

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
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄"
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄"
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄"
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄"
          }
        ],
        columns: [
          {
            prop: "date",
            label: "日期"
          },
          {
            prop: "name",
            label: "姓名",
            formatter(row, column, value) {
              return (<ElButton type={row.type} icon={row.icon}></ElButton>);
            }
          },
          {
            prop: "address",
            label: "地址"
          }
        ]
      }
    }
  })
</script>
```

## readings

- [nuxt-community/composition-api](https://composition-api.nuxtjs.org/)
- [@nuxtjs/axios](https://axios.nuxtjs.org/setup)
- [vue/composition-api](https://v3.vuejs.org/guide/composition-api-introduction.html)