// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'gta4汉化导航站',
  scripts: [
    {src: 'https://hm.baidu.com/hm.js?de86b38bbc3dec5ed31c4da285286374',  async: true}
  ],
  tagline: 'gta4汉化导航网站,欢迎访问~',
  url: 'https://b9348.gitee.io',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'b9348', // Usually your GitHub org/user name.
  projectName: "b9348", // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-K06FBEHD1R',
          anonymizeIP: true,
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitee.com/b9348/b9348/tree/reactpress/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/home',

          // ... configuration object here
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: '《GTA4完整版》汉化导航',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/favicon.ico',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'right',
            label: '📗Wiki',
          },
          // { to: '/4', label: '☕捐助', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/',
              },
            ],
          },
          {
            title: 'Contact',
            items: [
              {
                label: 'GitHub issues',
                href: 'https://github.com/GTAIV-Complete-Edition-text',
              },
              {
                label: 'QQ Group',
                href: 'https://www.baidu.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} _____ 汉化组`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: oceanicNext,
        // theme: duotoneLight,
        // darkTheme: oceanicNext,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      announcementBar: {
        id: 'support_us',
        content:
          '🚀 如果你觉得还不错, 就给一个 ⭐️ Start 吧 ~ <a target="_blank" rel="noopener noreferrer" href="https://github.com/GTAIV-Complete-Edition-text/feedback-IV.CHS">Click here</a> ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      metadata: [
        {
          name: 'GTA4汉化导航站,提供一些关于《GTA4完整版》新汉化补丁的相关信息,本站致力于让每个用户在阅读完后都学会使用GTA4新汉化',
          content: 'Wiki Database,GTA4,gta4,gta4完整版,gta4新汉化,汉化导航,汉化导航站,gta4汉化导航站,gta4汉化导航,gta4完整版汉化,正版gta4汉化,gta4最新版汉化,gta4中文补丁,gta4中文导航,gta4最新中文,gta4中文导航站',
        },
        {
          name: 'google-site-verification',
          content: 'SqAJCwVJ1y-5Bb5O7CHpzjDqFFkhGTWScq-QZ0keg_U'
        },
        {
          name: 'msvalidate.01',
          content: 'E95E84F34FA795B9B766086AFA806E13'
        },
        {
          name: 'baidu-site-verification',
          content: 'code-9jjhtke8LU'
        }
      ],
    }),
}

module.exports = config
