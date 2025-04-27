// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
const oceanicNext = require('prism-react-renderer/themes/oceanicNext')
const duotoneLight = require('prism-react-renderer/themes/duotoneLight')

// 读取环境变量
require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'gta4汉化导航站',
  scripts: [
    { src: 'https://hm.baidu.com/hm.js?de86b38bbc3dec5ed31c4da285286374', async: true }
  ],
  // 将环境变量注入到客户端代码中
  customFields: {
    downloadLinks: {
      // 原版下载链接
      downloadZipUrl: process.env.DOWNLOAD_ZIP_URL || 'https://cloudflare-imgbed-4n1.pages.dev/file/1727105849241_GTA4汉化补丁2023-07-04.zip',
      downloadExeUrl: process.env.DOWNLOAD_EXE_URL || 'https://cloudflare-imgbed-4n1.pages.dev/file/1727106008861_GTA4汉化补丁2023-07-04.exe',

      // 整合包下载链接
      downloadIntegratedZipUrl: process.env.DOWNLOAD_INTEGRATED_ZIP_URL || 'https://dlink.host/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvYy9mNWVkZjQyZWJmODA2MWNlL0VmbmRSVWQ1aHhSQWp4WjQxdjYwRDAwQmtmbTZSdnVpZ3Rfb3k1RGo1T00wZHc_ZT15OXA2Rlo.zip',
      downloadIntegratedExeUrl: process.env.DOWNLOAD_INTEGRATED_EXE_URL || 'https://acbox.app/f/22zmI8/GTA4%E6%B1%89%E5%8C%96%E8%A1%A5%E4%B8%812024-09-13.exe',

      // 备用下载链接
      backupYejiUrl: process.env.BACKUP_YEJIYUN_URL || 'https://pan.huang1111.cn/s/9Q2n5Cd?path=%2F',
      backupBaiduUrl: process.env.BACKUP_BAIDU_URL || 'https://pan.baidu.com/share/init?surl=lYiAaFVzQGpJD79Fx56ZZw&pwd=1234',
      backupLanzouUrl: process.env.BACKUP_LANZOU_URL || 'https://wwnr.lanzouv.com/b07xe74sj',
      backupYongshuoUrl: process.env.BACKUP_YONGSHUO_URL || 'http://bigsb250.ysepan.com',

      // 新的备用链接 - 野鸡云
      backupAcboxUrl: process.env.BACKUP_ACBOX_URL || 'https://acbox.app/s/0QXQIb',
    }
  },
  tagline: 'gta4汉化导航网站,欢迎访问~',
  url: 'https://b9348.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'b9348', // Usually your GitHub org/user name.
  projectName: "b9348", // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
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
          // docLayoutComponent: './src/theme/DocItem/Layout/index.js'
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
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Wiki',
          //       to: '/',
          //     },
          //   ],
          // },
          {
            title: '开源地址',
            items: [
              {
                label: 'GitHub - GTAIV-Complete-Edition-text',
                href: 'https://github.com/GTAIV-Complete-Edition-text',
              }
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
          '觉得不错, 就给一个 ⭐️ Start 吧<a target="_blank" rel="noopener noreferrer" href="https://github.com/GTAIV-Complete-Edition-text/feedback-IV.CHS">Click here</a> ',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      metadata: [
        {
          name: 'Description',
          content: 'GTA4汉化导航站,提供一些关于《GTA4完整版》新汉化补丁的相关信息,本站致力于让每个用户在阅读完后都学会使用GTA4新汉化',
        },
        {
          name: 'Keywords',
          content: 'GTA4,gta4,gta4完整版,gta4新汉化,汉化导航,汉化导航站,gta4汉化导航站,gta4汉化导航,gta4完整版汉化,正版gta4汉化,gta4最新版汉化,gta4中文补丁,gta4中文导航,gta4最新中文,gta4中文导航站',
        },
        {
          name: 'google-site-verification',
          content: 'aKKnTwH1WGypsT4DbyVqKTY4Qt2Fi0NiOTikk8Us8w4'
        },
        {
          name: 'msvalidate.01',
          content: 'E95E84F34FA795B9B766086AFA806E13'
        },
        {
          name: 'baidu-site-verification',
          content: 'codeva-jM9srC2OdY'
        }
      ],
    }),
}

module.exports = config
