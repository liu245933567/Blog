import type { DefaultTheme } from 'vitepress';

export interface View {
  id?: string;
  views: number;
  created_at: string;
  status: number;
}

export interface ThemeConfig extends DefaultTheme.Config {
  // sidebar?: object[];
  // search: any;
  // nav: any;
  // socialLinks: any;
  music?: Song[];
  // outlineTitle?: string;
  // docFooter?: object;
  // darkModeSwitchLabel?: string;
  // sidebarMenuLabel?: string;
  // returnToTopLabel?: string;
  article?: object;
  website?: Wabsite;
  /** 主页轮播 */
  banner?: Banner[];
  // logo: any;
}

/** 主页轮播 */
interface Banner {
  /** 图片地址 */
  image: string;
  /** 跳转链接 */
  link: string;
  title: string;
}

/**
 * 网站配置
 */
interface Wabsite {
  /** 用户复制页面内容时尾巴自动添加版权声明 */
  copyadd: boolean;
  /** 列表页每页显示数量 */
  perpage: number;
  /** 显示首页 banner,banner列表在上面 banner中配置 */
  homeBanner: boolean;
  /** banner高度 */
  bannerHeight: number;
  /** 是否显示首页底部右下角弹框，（调试时弹框不显示的话先关闭浏览器再运行，因为有可能开启了缓存）内容请在组件.vitepress/theme/components/Welcome.vue编写 */
  showWelcome: boolean;
  /** 底部弹框是否使用sessionStorage缓存(即不关闭页面仅显示一次) */
  welcomeusestate: boolean;
  /**  */
  welcome: {
    /** 多长时间自动关闭，false为不关闭 */
    autoClose: number | boolean;
  };
  /** 是否开启雪花。开启后仅在暗黑模式下显示 */
  showSnow: boolean;
  /** 是否显示列表中的博主名片 */
  showUserCard: boolean;
  /** 显示在第几个位置 */
  cardPosition: number;
  /** 是否显示播放音乐，音乐列表在上面 music中配置 */
  cardMusic: boolean;
  /** 是否显示打赏咖啡， */
  cardCoffee: boolean;
  /** 打赏咖啡二维码图片地址。如果是跳转网页地址需自行修改代码 */
  coffeeQrcode: string;
  /** 是否显示灯笼挂件 */
  showLantern: boolean;
  /** 灯笼上的字,数组形式 */
  lanternText: string[];
  /** 是否显示侧栏烟花特效 */
  showFirework: boolean;
  /** 烟花许愿标题 */
  fireworkTitle: string;
  /** 烟花许愿关键词 */
  fireworkWords: string[];
  /** 是否显示全局底部信息 */
  showFooter: boolean;
  /** 网站备案号 */
  icpRecordCode: string;
  /** 公安备案号 */
  publicSecurityRecordCode: string;
  /** 首页链接 */
  link: string;
}

export interface Post {
  frontmatter?: Record<string, any>;
  relativePath?: string;
}

export interface Work {
  title?: string;
  view?: string;
  viewtit?: string;
  linkpan?: string;
  beecode?: string;
  github?: string;
  wxwords?: string;
  via?: string;
  qrcode?: string;
}

export interface Song {
  title?: string;
  id?: number;
  author?: string;
  url?: string;
  pic?: string;
  lrc?: any;
}

export interface Toolitem {
  icon?: string;
  title: string;
  desc?: string;
  link?: string;
  linktxt?: string;
}

export interface Tools {
  title: string;
  items: Toolitem[];
}
