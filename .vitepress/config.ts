import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "山有扶苏的空间",
  description: "一个记录生活的地方~",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://s2.loli.net/2024/03/04/NpGLzUyWm7FkX1u.png",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "https://s2.loli.net/2024/03/04/NpGLzUyWm7FkX1u.png",

    nav: [
      { text: "查看博客", link: "/posts" },
      { text: "我的书单", link: "/books" },
      { text: "我喜欢的影视", link: "/media-content" },
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
