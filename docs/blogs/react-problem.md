---
title: React 项目配置常见问题
date: 2024-03-15
categories:
  - React
---

## 'React' must be in scope when using JSX

```json
{
  "name": "...",
  // ...
  "dependencies": {
    // ...
  },
  "eslintConfig": {
    "rules": {
      "react/react-in-jsx-scope": "off"
    }
  }
}
```
