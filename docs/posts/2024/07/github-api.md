---
post: true
title: Github API 调用
date: 2024-07-05
cover: https://image.baidu.com/search/down?url=https://fc.sinaimg.cn/large/6364aa43gy1hlbmt59d9kj20k00dcjyw.jpg
coveross: https://cdn.enshimama.com/appbeebee/posts/iphone-pro-15-3d-mockups-free.gif
categories:
  - 编程技术
tags:
  - Github
description: Github API 调用
---

# Github API 调用

## 获取仓库信息

```js
/**
 * 通过 token方式获取 github api
 * @param name
 * @returns
 */
export const getGithub = async (name: any) => {
  const data = await (
    await fetch(`https://api.github.com/repos/${name}`, {
      headers: {
        // token if necessary
        Authorization:
          'Bearer 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',
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    })
  ).json();

  if (data) {
    return {
      code: 200,
      data: {
        pushed_at: data?.pushed_at, //最新推送
        updated_at: data?.updated_at, //最后更新
        stargazers_count: data?.stargazers_count, //星星数
        open_issues_count: data?.open_issues_count,
        forks_count: data?.forks_count, //forks
        license: data?.license?.name,
        homepage: data?.homepage,
      },
    };
  }
};
```
