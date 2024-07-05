import { defineConfig } from 'vitepress';
import mdItCustomAttrs from 'markdown-it-custom-attrs';
import UnoCSS from "unocss/vite";

import { head } from './theme/head';
import type { ThemeConfig } from './theme/types';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
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
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
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
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    darkModeSwitchLabel: '暗黑切换',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    banner: [
      {
        link: '/posts/2024/01/freebie-chinese-font.html',
        image:
          'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlxg58m6w3j21z40m8dis.jpg',
        title: '',
      },
      {
        link: '/posts/2024/01/freebie-chinese-font.html',
        image:
          'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlxg58m6w3j21z40m8dis.jpg',
        title: '',
      },
    ],
    outlineTitle: '目录',
    website: {
      copyadd: true, //用户复制页面内容时尾巴自动添加版权声明
      perpage: 12, //列表页每页显示数量
      homeBanner: false, //显示首页 banner,banner列表在上面 banner中配置
      bannerHeight: 200, //banner高度
      showWelcome: false, //是否显示首页底部右下角弹框，（调试时弹框不显示的话先关闭浏览器再运行，因为有可能开启了缓存）内容请在组件.vitepress/theme/components/Welcome.vue编写
      welcomeusestate: false, //底部弹框是否使用sessionStorage缓存(即不关闭页面仅显示一次)
      welcome: {
        autoClose: 6000, //多长时间自动关闭，false为不关闭
      },
      showSnow: true, //是否开启雪花。开启后仅在暗黑模式下显示
      showUserCard: false, //是否显示列表中的博主名片
      cardPosition: 3, //显示在第几个位置
      cardMusic: true, //是否显示播放音乐，音乐列表在上面 music中配置
      cardCoffee: true, //是否显示打赏咖啡，
      coffeeQrcode:
        'https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hm0f859sm6j208c08cabm.jpg', //打赏咖啡二维码图片地址。如果是跳转网页地址需自行修改代码
      showLantern: false, //是否显示灯笼挂件
      lanternText: ['新', '年'], //灯笼上的字,数组形式
      showFirework: false, //是否显示侧栏烟花特效
      fireworkTitle: '🧨烟花许愿🧨｜②⓪②④新年', //烟花许愿标题
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
      ], //烟花许愿关键词
      showFooter: true, //是否显示全局底部信息
      icpRecordCode: '鄂ICP备2022014994号-1', //网站备案号
      publicSecurityRecordCode: '鄂公网安备42282202000143号', //公安备案号
      link: 'https://appbeebee.com/',
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
