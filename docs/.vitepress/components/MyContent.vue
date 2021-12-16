<script>
import { useRoute } from 'vitepress'
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup() {
    const route = useRoute()

    return () =>
      h(
        'main',
        { style: { position: 'relative' }, class: 'page' },
        h(
          'div',
          {
            class: 'container',
          },
          h(
            'div',
            {
              class: 'content',
            },
            h(
              'div',
              {
                class: 'prose prose-xl m-auto pt-3',
              },
              route.component ? h(route.component) : null
            )
          )
        )
      )
  },
})
</script>

<style scoped>
.page {
  padding-top: var(--header-height);
}

@media (min-width: 720px) {
  .page {
    margin-left: 16.4rem;
  }
}

@media (min-width: 960px) {
  .page {
    margin-left: 20rem;
  }
}

.container {
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  max-width: 48rem;
}

.content {
  padding-bottom: 1.5rem;
}

@media (max-width: 420px) {
  .content {
    /* fix carbon ads display */
    clear: both;
  }
}
</style>
