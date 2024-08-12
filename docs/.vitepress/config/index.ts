import { defineConfig } from 'vitepress';
import mdItCustomAttrs from 'markdown-it-custom-attrs';
import UnoCSS from 'unocss/vite';
import { search as zhSearch } from './zh';

import { head } from './head';
import type { ThemeConfig } from '../types';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: '山有扶苏的博客',
  description: '山有扶苏的博客',
  base: '/',
  head,
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      });
    },
  },
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    nav: [],
    sidebar: [
      // 这里如果删掉，左侧栏的内容全部不显示。页面布局会变成通栏
      {},
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    music: [
      //音乐列表，音乐播放器参数在.vitepress/store/player.ts。封面和歌词不支持可自行按照文章教程修改
      // {
      //     "id": 1,
      //     "title": "陷落Falling",
      //     "author": "不知名选手Au / 马也_Crabbit",
      //     "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0Nzk=",
      //     "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/01.jpg",
      //     "lrc": ""
      // },
      // {
      //     "id": 2,
      //     "title": "一个人想着一个人 ",
      //     "author": "如懿",
      //     "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0ODA=",
      //     "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/02.jpg",
      //     "lrc": ""
      // },
      // {
      //     "id": 3,
      //     "title": "夜车（Cover 曾轶可）",
      //     "author": "姜铭杨",
      //     "url": "https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE0ODE=",
      //     "pic": "https://enshimama.oss-cn-shanghai.aliyuncs.com/smartgallery/music/03.jpg",
      //     "lrc": ""
      // },
      {
        id: 4,
        title: '迎春花 / 財神到 / 祝福你 (廣東)',
        author: '邓丽君 / 林子祥 / 甄妮',
        url: 'https://res.wx.qq.com/voice/getvoice?mediaid=MzUzMDUzMjQyMl8xMDAwMDE4NTI=',
        pic: '',
        lrc: '',
      },
    ],
    search: {
      provider: 'algolia',
      options: {
        appId: 'IE6CYWO4P2',
        apiKey: 'b103f8010bdcfc8cb4732574ca89beea',
        indexName: 'oneddd',
        ...zhSearch?.zh,
      },
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '暗黑切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    article: {
      cc: {
        author: '山有扶苏',
        authorLink: 'https://blog.oneddd.site',
        license: '署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)',
        licenseLink: 'http://creativecommons.org/licenses/by-sa/4.0/',
      },
    },
    banner: [],
    outlineTitle: '目录',
    website: {
      copyadd: true,
      perpage: 12,
      homeBanner: false,
      bannerHeight: 200,
      showWelcome: false,
      welcomeusestate: false,
      welcome: {
        autoClose: 6000,
      },
      showSnow: false,
      showUserCard: false,
      cardPosition: 3,
      cardMusic: true,
      cardCoffee: true,
      coffeeQrcode: 'https://s2.loli.net/2024/08/05/YUrdsWj4HPGNI1E.png',
      showLantern: false,
      lanternText: ['新', '年'],
      showFirework: false,
      fireworkTitle: '🧨烟花许愿🧨｜②⓪②④新年',
      fireworkWords: [
        '恭贺新禧',
        '万事如意',
        '新年快乐',
        '恭喜发财',
        '岁岁平安',
        '吉祥如意',
        '心想事成',
        '万事顺遂',
        '一帆风顺',
        '二龙腾飞',
        '三羊开泰',
        '四季平安',
        '五福临门',
        '六六大顺',
        '七星高照',
        '八方来财',
        '九九同心',
        '十全十美',
        '荣华富贵',
        '金玉满堂',
        '龙凤呈祥',
        '喜气洋洋',
        '鸿运当头',
        '财源广进',
        '笑口常开',
        '幸福安康',
        '日进斗金',
        '生意兴隆',
        '步步高升',
        '年年有余',
        '迎春接福',
        '喜气盈门',
        '花团锦簇',
        '前程似锦',
        '福满人间',
        '春回大地',
        '辞旧迎新',
        '万象更新',
        '吉祥如意',
        '万事大吉',
        '马到成功',
        '功成名就',
        '鱼跃龙门',
        '一飞冲天',
        '瑞气盈门',
        '福寿康宁',
        '时来运转',
        '鸿运高照',
        '三阳开泰',
        '否极泰来',
        '鸿运亨通',
        '一帆风顺',
        '出入平安',
        '顺风顺水',
        '龙凤呈祥',
        '花好月圆',
        '张灯结彩',
        '欢天喜地',
        '合家欢乐',
        '幸福美满',
        '和气致祥',
        '招财进宝',
        '开门大吉',
        '迎春接福',
        '福泽满门',
        '花开富贵',
        '竹报平安',
        '大吉大利',
        '恭喜发财',
      ],
      showFooter: true,
      icpRecordCode: '鄂ICP备2022014994号-1',
      publicSecurityRecordCode: '鄂公网安备42282202000143号',
      link: 'https://www.oneddd.site',
    },
    logo: {
      light: '/logo.png',
      dark: '/logo.png',
    },
  } as ThemeConfig,

  srcExclude: ['README.md'],

  vite: {
    plugins: [UnoCSS()],
    server: {
      port: 5000,
      host: '0.0.0.0',
    },
  },
});
