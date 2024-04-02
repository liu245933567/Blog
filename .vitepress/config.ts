import { defineConfig } from "vitepress";
import UnoCSS from "unocss/vite";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "山有扶苏的空间",
  description: "A VitePress Site",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://s2.loli.net/2024/03/04/NpGLzUyWm7FkX1u.png",
      },
    ],
  ],
  vite: {
    // @ts-ignore
    plugins: [UnoCSS()],
    define: {
      "process.env": {},
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://s2.loli.net/2024/03/04/NpGLzUyWm7FkX1u.png",

    nav: [
      { text: "查看博客", link: "/posts" },
      { text: "我的书单", link: "/books" },
    ],

    // sidebar: [
    //   {
    //     text: "Examples",
    //     items: [
    //       { text: "Markdown Examples", link: "/markdown-examples" },
    //       { text: "Runtime API Examples", link: "/api-examples" },
    //     ],
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/liu245933567/blog" },
    ],
  },
});
