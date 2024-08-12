---
post: true
title: Vite 常用配置
date: 2024-03-15
categories:
  - 编程技术
tags:
  - Vite
---

## Gzip 压缩

所需的库 `vite-plugin-compression` [文档地址](https://github.com/vbenjs/vite-plugin-compression/tree/main#readme)

```sh
yarn add vite-plugin-compression -D
```

配置示例

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true, // 默认即可
      disable: false, //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      filter: /\.(js|mjs|json|css|html|ttf)$/I,
      threshold: 10240, //压缩前最小文件大小
      algorithm: "gzip", //压缩算法
      ext: ".gz", //文件类型
    }),
  ],
  base: "/annotatepdf/",
  build: {
    assetsDir: "annotatepdf/",
  },
});
```

参考地址:

[vite-plugin-compression 进行 gzip 压缩](https://www.jianshu.com/p/90ecbaa18cf9)
