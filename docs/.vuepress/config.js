import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: 'AR POP-UP BOOK',
  description: 'AR Perspective pop-up book documentation',

  theme: defaultTheme({
    logo: '/images/ar-logo.png',

    navbar: ['/', '/table-of-contents'],
  }),

  // Ensure proper public directory handling
  dest: 'dist',

  bundler: viteBundler(),
})
