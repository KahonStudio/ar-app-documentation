import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'AR POP-UP BOOK',
  description: 'AR Perspective pop-up book documentation',

  theme: defaultTheme({
    logo: '.vuepress/public/images/ar-logo.png',

    navbar: ['/', '/table-of-contents'],
  }),

  bundler: viteBundler(),
})
