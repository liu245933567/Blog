import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "山有扶苏的博客",
  description: "你好， 欢迎查看山有扶苏的博客~",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://s2.loli.net/2024/03/04/NpGLzUyWm7FkX1u.png",
      },
    ],
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme: recoTheme({
    logo: "https://s2.loli.net/2024/03/04/NpGLzUyWm7FkX1u.png",
    navbar: [{ text: "博客", link: "/posts", icon: "DocumentAttachment" }],
  }),
});
