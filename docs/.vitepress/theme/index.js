import './index.css'
import Theme from 'vitepress/theme';
import { h } from 'vue'
import MyContent from '../components/MyContent.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-footer': () =>
        h(
          'div',
          {
            style: 'padding: 3rem 1.5rem 3.25rem;',
          },
          [
            h(
              'p',
              {
                style:
                  'margin: auto; line-height: 1.4; font-size: .9rem; text-align: center;',
              },
              [
                'MIT Licensed | Copyright © 2021-present Jogiter ding | ',
                h(
                  'a',
                  {
                    class: 'text',
                    href: 'https://beian.miit.gov.cn/',
                    target: '_blank',
                  },
                  '粤ICP备18022983号'
                ),
              ]
            ),
          ]
        ),
    })
  },
  enhanceApp({ app }) {
    app.component('Content', MyContent)
  },
}