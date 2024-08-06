---
post: true
title: Vscode 使用记录
date: 2024-08-06
description: 记录 vscode 使用过程中的一些设置
categories:
  - 编程技术
tags:
  - Vscode
---

## Markdown 文件智能提示解决

工作区设置 `settings.json` 文件添加如下配置

```json{4-8}
{
  "[markdown]": {
    "editor.wordWrap": "on",
    "editor.quickSuggestions": {
      "comments": "on",
      "strings": "on",
      "other": "on"
    }
  }
}
```
