const fs = require('fs')
const path = require('path')

module.exports = {
  title: 'Jogiter`s Blog',
  description: 'EveryThing about Me!',
  themeConfig: {
    nav: [
      { text: '个人简介', link: '/about/' },
      {
        text: '技术',
        items: generateBlogLinks('techs'),
      },
      {
        text: '情感',
        items: generateBlogLinks('emotions'),
      },
      {
        text: '杂文',
        items: generateBlogLinks('essay'),
      },
      {
        text: '学习列表',
        link: '/reading/',
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
      // {
      //   text: 'Languages',
      //   items: [
      //     {
      //       text: 'English',
      //       link: 'https://vitejs.dev',
      //     },
      //     {
      //       text: '简体中文',
      //       link: 'https://cn.vitejs.dev',
      //     },
      //   ],
      // },
    ],
    sidebar: {
      '/techs': 'auto',
      '/emotions': 'auto',
      '/essay': 'auto',
      '/': 'auto',
      // catch-all fallback
      // '/': [
      //   {
      //     text: 'Guide',
      //     children: [
      //       {
      //         text: 'Why Vite',
      //         link: '/guide/why',
      //       },
      //     ],
      //   },
      //   {
      //     text: 'APIs',
      //     children: [
      //       {
      //         text: 'Plugin API',
      //         link: '/guide/api-plugin',
      //       },
      //     ],
      //   },
      // ],
    },
  },
};

function generateBlogLinks(dir) {
  const files = fs.readdirSync(path.resolve(__dirname, `../${dir}/`));
  return files.map((file) => {
    const name = file.slice(0, -3);
    return {
      text: name,
      link: `${dir}/${name}`,
    };
  });
}