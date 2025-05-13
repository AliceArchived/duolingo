import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/duolingo/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  theme: defaultTheme({
    logo: 'logo.png',
    contributors: false,
    // navbar: [
    //   {
    //     text: 'abc',
    //     link: 'relative path',
    //   },
    // ],
    sidebar: {
      '/': [

        {
          text: 'General',
          collapsable: true,
          children: [
            '/order/sec01.md',
            '/order/sec02.md',
            '/order/sec03.md',
            '/order/sec04.md',
            '/order/sec05.md',

          ],
        },
        {
          text: 'Story - A ',
          collapsable: true,
          children: [
            '/story/A/A_001.md',
            '/story/A/A_002.md',
            '/story/A/A_003.md',
            '/story/A/A_004.md',
            '/story/A/A_005.md',
            '/story/A/A_006.md',
            '/story/A/A_007.md',
            '/story/A/A_008.md',
            '/story/A/A_009.md',
            '/story/A/A_010.md',
            '/story/A/A_011.md',
            '/story/A/A_012.md',
            '/story/A/A_013.md',
            '/story/A/A_014.md',
            '/story/A/A_015.md',
            '/story/A/A_016.md',
            '/story/A/A_017.md',
            '/story/A/A_018.md',
            '/story/A/A_019.md',
            '/story/A/A_020.md',
            '/story/A/A_021.md',
            '/story/A/A_022.md',
          ],
        },
        {
          text: 'Story - B ',
          collapsable: true,
          children: [
            '/story/B/B_001.md',
            '/story/B/B_002.md',
            '/story/B/B_003.md',
            // '/story/B/B_004.md',
            // '/story/B/B_005.md',
            // '/story/B/B_006.md',
            // '/story/B/B_007.md',
            // '/story/B/B_008.md',
            // '/story/B/B_009.md',
            // '/story/B/B_010.md',
            // '/story/B/B_011.md',
            // '/story/B/B_012.md',
            // '/story/B/B_013.md',
            // '/story/B/B_014.md',
            // '/story/B/B_015.md',
            // '/story/B/B_016.md',
            // '/story/B/B_017.md',
            // '/story/B/B_018.md',
            // '/story/B/B_019.md',
            // '/story/B/B_020.md',
            // '/story/B/B_021.md',
            // '/story/B/B_022.md',
          ],
        },
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Alice's Archive",
  description: "Alice's Archive",
})


