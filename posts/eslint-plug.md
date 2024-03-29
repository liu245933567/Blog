---
title: 常用 Eslint 插件
date: 2024-03-15
categories:
  - Eslint
---

## eslint-plugin-jsx-a11y

插件名称 `eslint-plugin-jsx-a11y`, [查看文档](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y?tab=readme-ov-file#readme)

eslint-plugin-jsx-a11y 是一个基于 ESLint 的插件，旨在帮助开发者遵守无障碍标准，确保网站和应用程序对所有用户都可访问。它提供了许多规则和规范，以确保网站和应用程序符合无障碍标准。一些常见的规则包括：

- alt-text：确保所有图像都有 alt 属性，以提供对屏幕阅读器的支持。
- aria-props：确保使用 aria-\* 属性时遵循正确的用法和语法。
- tabindex-no-positive：防止将正整数值分配给 tabindex 属性，这可能会干扰键盘用户的流畅访问。

通过使用 eslint-plugin-jsx-a11y，开发者可以在开发过程中识别和修复许多无障碍问题，从而提高网站和应用程序的可用性。在项目中添加 eslint-plugin-jsx-a11y 只需安装依赖并在 .eslintrc 文件中配置插件即可。

## eslint-plugin-import

插件名称 `eslint-plugin-import`, [查看文档](https://github.com/import-js/eslint-plugin-import)

eslint-plugin-import 是一个 ESLint 插件，用于检测和规范 JavaScript 代码中的 import 和 export 语句。它可以帮助开发者保持代码的可读性和可维护性，并减少错误和 bug。

该插件提供了多种规则，这些规则可以用来检测代码中的常见错误和问题，例如：

- 检查模块导入的路径是否正确，以避免代码无法正常工作或出现错误。
- 检查导入的模块是否存在，以防止引用不存在的模块。
- 检查导入的模块是否使用了正确的语法，例如只导入模块的一部分或者使用了默认导出。

同时，eslint-plugin-import 还可以帮助开发者进行更加细粒度的配置，例如允许或禁止某些特定的导入语法、限制导入的深度等等。

总的来说，eslint-plugin-import 是一个非常有用的工具，它可以帮助开发者规范和优化 JavaScript 代码中的导入语法，从而提高代码的质量和可读性。
