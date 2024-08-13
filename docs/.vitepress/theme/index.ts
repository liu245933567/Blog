import DefaultTheme from 'vitepress/theme';
import { createPinia } from 'pinia';
// 使用 tooltip库。用于hover提示、悬浮框等。教程见 https://floating-vue.starpad.dev/
import FloatingVue from 'floating-vue';
// 使用 toast 库。用于弹框提示反馈等。教程见 https://vue3-toastify.js-bridge.com/
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";
import Layout from './components/Layout.vue';

import 'floating-vue/dist/style.css';
import 'uno.css';
import './styles/style.css';
// import './styles/snow.css';

const pinia = createPinia();

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册自定义全局组件
    app.use(pinia);
    app.use(FloatingVue, {
      themes: {
        tooltip: {
          distance: 8,
          delay: { show: 500, hide: 0 },
        },
      },
    });
    app.use(Vue3Toasity, {
      theme: 'colored',
      closeOnClick: false,
    } as ToastContainerOptions);
    // app.component("Blogs", Blogs);
  },
  setup() {
    // 获取前言和路由
    const { frontmatter } = toRefs(useData());
    const route = useRoute();

    // 评论组件 - https://giscus.app/
    giscusTalk(
      {
        repo: 'liu245933567/blog',
        repoId: 'R_kgDOG8FIqA',
        category: 'Announcements', // 默认: `General`
        categoryId: 'DIC_kwDOG8FIqM4Chk04',
        mapping: 'pathname', // 默认: `pathname`
        inputPosition: 'top', // 默认: `top`
        lang: 'zh-CN', // 默认: `zh-CN`
        // i18n 国际化设置（注意：该配置会覆盖 lang 设置的默认语言）
        // 配置为一个对象，里面为键值对组：
        // [你的 i18n 配置名称]: [对应 Giscus 中的语言包名称]
        locales: {
          'zh-Hans': 'zh-CN',
          'en-US': 'en',
        },
        homePageShowComment: false, // 首页是否显示评论区，默认为否
        lightTheme: 'light', // 默认: `light`
        darkTheme: 'transparent_dark', // 默认: `transparent_dark`
        // ...
      },
      {
        frontmatter,
        route,
      },
      // 是否全部页面启动评论区。
      // 默认为 true，表示启用，此参数可忽略；
      // 如果为 false，表示不启用。
      // 可以在页面使用 `comment: true` 前言单独启用
      true,
    );
  },
};
