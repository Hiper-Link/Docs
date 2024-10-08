import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'


module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'HiperLink',
  description: '🌈 HiperLink | 🔗 嗨皮立刻 - 📆 使用文档',
  base: '/Docs/',

  // Build
  dest: 'dist',

  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }]
    // ['link', { rel: 'manifest', href: '/Docs/manifest.webmanifest' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ...其他标签
  ],

  // 主题和它的配置
  markdown: {
    code: {
      lineNumbers: false // 代码块不显示行号
    }
  },
  theme: defaultTheme({
    logo: 'logo.svg',
    navbar: [
      {
        text: '💡 首页',
        link: '/'
      }, {
        text: '📖 用户指南',
        link: '/Docs/'
      }, {
        text: '🧩 插件市场',
        link: '/PluginMarket/'
      }, {
        text: '🚧 插件开发',
        link: '/PluginDocs/'
      }, {
        text: '📌 关于我们',
        link: '/About/'
      }, {
        text: '🌈 HiperLink',
        children: [
          {
            text: 'Github',
            link: 'https://github.com/Hiper-Link/HiperLink-core'
          }, {
            text: 'Gitee',
            link: 'https://gitee.com/HiperLink/HiperLink-core'
          }
        ]
      }
    ],
    sidebar: {
      '/Docs/': [
        {
          text: '📖 用户指南',
          children: ['/Docs/README.md', '/Docs/Start.md'],
        },
      ],
      '/PluginDocs/': [
        {
          text: '插件开发',
          children: ['/PluginDocs/README.md'],
        }, {
          text: '创建插件',
          children: ['/PluginDocs/Basic/Format.md', '/PluginDocs/Basic/Metadata.md', '/PluginDocs/Basic/Example.md', '/PluginDocs/Basic/Tips.md'],
        }, {
          text: '你好，世界！',
          children: [
              '/PluginDocs/HelloWorld/Go.md',
              '/PluginDocs/HelloWorld/Python.md',
              '/PluginDocs/HelloWorld/Rust.md',
          ],
        }, {
          text: '前后端交互',
          children: [
              '/PluginDocs/Web/Index.md',
'/PluginDocs/Web/Interaction.md',
'/PluginDocs/Web/Back.md',
          ],
        }
      ]
    },
    editLink: true,
    editLinkText: '在 Github 上编辑此页',
    docsRepo: 'https://github.com/Hiper-Link/Docs',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    contributorsText: '贡献者',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    tip: '提示',
    warning: '注意',
    danger: '警告'
  }),

  // 插件
  plugins: [
    backToTopPlugin(),
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        }
      }
    }),
    pwaPlugin(),
    pwaPopupPlugin(
      {
        locales: {
          '/': {
            message: '文档有更新',
            buttonText: '刷新'
          }
        }
      })
  ],
}
