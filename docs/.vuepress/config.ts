import { defineUserConfig } from "vuepress";
import { recoTheme } from "vuepress-theme-reco";

export default defineUserConfig({
  theme: recoTheme({
    // options
  }),
  lang: "zh-CN",
  title: "紫禁之巅攻略",
  description: "你好， 欢迎查看紫禁之巅攻略~",
  head: [["link", { rel: "icon", href: "https://wd.gyyx.cn/favicon.ico" }]],
});
