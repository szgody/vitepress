import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Gody主页',
  description: '欢迎来到Gody的技术服务网站',
  themeConfig: {
    logo: '/assets/image/index.gif',
    nav: [
      { text: '首页', link: '/' },
      { text: '服务', link: '/services' },
      { text: '联系', link: '/contact' }
    ],
    sidebar: [
      {
        text: '服务项目',
        items: [
          { text: '服务器部署与维护', link: '/services/server-deployment' },
          { text: 'PC硬件服务', link: '/services/pc-hardware' },
          { text: '大模型部署', link: '/services/model-deployment' }
        ]
      }
    ],
    footer: {
      message: '欢迎咨询相关技术服务',
      copyright: 'Copyright © 2023 Gody'
    }
  },
  markdown: {
    lineNumbers: true
  }
})