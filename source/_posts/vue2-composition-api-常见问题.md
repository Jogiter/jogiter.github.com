---
title: vue2 + composition-api 常见问题
date: 2021-04-21 14:46:03
tags:
  - vue
---

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

## readings

- [nuxt-community/composition-api](https://composition-api.nuxtjs.org/)
- [@nuxtjs/axios](https://axios.nuxtjs.org/setup)
- [vue/composition-api](https://v3.vuejs.org/guide/composition-api-introduction.html)