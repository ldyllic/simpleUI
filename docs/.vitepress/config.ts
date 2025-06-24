import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Simple UI",
  description: "A VitePress Site",
  vite: {
    plugins: [
      VueMacros.vite({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vueJsx: vueJsx(),
        },
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '简介', link: '/markdown-examples' },
      { text: '组件', link: '/components/button' },
    ],

    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是Simple UI？', link: '/markdown-examples' },
          { text: '设计原则', link: '/api-examples' },
          { text: '安装与使用', link: '/installUse' },
        ]
      },
      {
        text: '基础组件',
        items: [
          {text: 'Button 按钮', link: '/components/button' },
          {text: 'Icon 图标', link: '/components/icon' },
          {text: 'Collapse 折叠面板', link: '/components/collapse' },
          {text: 'Tooltip 文字提示', link: '/components/tooltip' },
          {text: 'Dropdown 下拉菜单', link: '/components/dropdown' },
          {text: 'Message 消息提示', link: '/components/message' },
        ]
      },
      {
        text: '表单组件',
        items: [
          {text: 'Input 输入框', link: '/components/input' },
          {text: 'Switch 开关', link: '/components/switch' },
          {text: 'Select 选择器', link: '/components/select' },
          {text: 'Form 表单', link: '/components/form' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ldyllic/simpleUI' }
    ]
  }
})
