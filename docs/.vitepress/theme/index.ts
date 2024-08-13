import DefaultTheme from 'vitepress/theme';
import { createPinia } from 'pinia';
// 使用 tooltip库。用于hover提示、悬浮框等。教程见 https://floating-vue.starpad.dev/
// import FloatingVue from 'floating-vue';
// 使用 toast 库。用于弹框提示反馈等。教程见 https://vue3-toastify.js-bridge.com/
// import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';

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
    // app.use(FloatingVue, {
    //   themes: {
    //     tooltip: {
    //       distance: 8,
    //       delay: { show: 500, hide: 0 },
    //     },
    //   },
    // });
    // app.use(Vue3Toasity, {
    //   theme: 'colored',
    //   closeOnClick: false,
    // } as ToastContainerOptions);
    // app.component("Blogs", Blogs);
  },
};
