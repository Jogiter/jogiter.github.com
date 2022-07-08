const fs = require('fs')
const path = require('path')

module.exports = {
  title: 'Jogiter`s mind',
  description: 'EveryThing about Me!',

  themeConfig: {
    repo: 'Jogiter/jogiter.github.com',
    docsDir: 'docs',
    docsBranch: 'vitepress',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页面',
    lastUpdated: '最后更新',

    algolia: {
      appId: '3FNT30KAKM',
      apiKey: '6cba52928cfdc70de6b230fbc7fedf10',
      indexName: 'jogiter-blog',
    },

    nav: [
      { text: '个人简介', link: '/about/' },
      {
        text: 'Awesome 学习链接',
        link: '/reading/',
      },
      {
        text: '杂文',
        items: generateBlogLinks('essay'),
      },
      {
        text: '情感',
        items: generateBlogLinks('emotion'),
      },
      {
        text: '社交账号',
        items: [
          {
            text: 'Github',
            link: 'https://github.com/Jogiter',
          },
          {
            text: '邮箱',
            link: 'mailto:jogiter.g@gmail.com',
          },
        ],
      },
    ],
    sidebar: {
      '/emotion': 'auto',
      '/essay': 'auto',
      '/about': false,
      '/reading': false,
      // catch-all fallback
      '/': [
        {
          text: '文章',
          children: generateBlogLinks('tech'),
        },
      ],
    },
  },
}

function generateBlogLinks(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, `../${dir}/`))
  return files
    .filter((file) => file.slice(0, -3) !== 'index')
    .map((file) => {
      const name = file.slice(0, -3)
      return {
        text: name,
        link: `${dir}/${name}`,
      }
    })
}
