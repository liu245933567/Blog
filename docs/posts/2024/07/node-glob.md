---
title: glob 文件匹配规则
date: 2024-07-05
categories:
  - 编程技术
tags:
  - Node
---

# glob

> glob 是由普通字符和 / 或 通配符 组成的字符串，用于 匹配文件路径。可以利用一个或多个 glob 在文件系统中定位文件。它本身属于一种标准，并且各类语言都有其完整实现。本文将基于 node-glob 进行语法讲解。



## 前言

文件匹配对于操作文件系统是很有必要的，他能帮助你方便，快捷的匹配到要找的目标文件，这对构建工具尤其有用，比如 gulp 、webpack 等，它可以根据你书写的规则高效匹配文件资源，提升构建速度。

下面将介绍 glob 的匹配语法。

## 分隔符
字符串片段（segment）是指两个分隔符之间的所有字符组成的字符串。在 `glob` 中，分隔符永远是 `/` 字符。不区分操作系统，即便是在采用 `\\` 作为分隔符的 Windows 操作系统中。

下面表示匹配 `src` 下的 `a.js`

`src/a.js`

> 注意：
> 
> 在 glob 中，`\\` 字符被保留作为转义符使用。

如下， `*` 被转义了，因此，`*` 将被作为一个普通字符使用，而不再是 通配符 了。

`glob*with_uncommon*\\_*character.js`

所以，以上规则表示，匹配当前目录下的 glob_with_uncommon*_\_character.js 文件。

## 特殊字符

特殊字符用来限制文件的匹配规则，你也可以称之为 `通配符`。

#### `*`(一个星号)
在一个字符串片段中匹配任意数量的字符，包括零个匹配。对于匹配单级目录下的文件很有用。

下面这个 glob 能够匹配类似 index.js 的文件，但是不能匹配类似 scripts/index.js 或 scripts/nested/index.js 的文件。

`*.js`

#### `**`(两个星号)
在多个字符串片段中匹配任意数量的字符，包括零个匹配。 对于匹配嵌套目录下的文件很有用。请确保适当地限制带有两个星号的 glob 的使用，以避免匹配大量不必要的目录。

下面这个 glob 被适当地限制在 scripts/ 目录下。它将匹配类似 `scripts/index.js`、`scripts/nested/index.js` 和 `scripts/nested/twice/index.js` 的文件。

`scripts/**/*.js`

在上面的示例中，如果没有 scripts/ 这个前缀做限制，node_modules 目录下的所有目录或其他目录也都将被匹配。

? 通配符
? 表示匹配 1 个字符。

'abc?.js'
以上表示匹配，类似 abc0.js 或 abc1.js 这样的文件。? 占据的位置可以是任何字符，但是你得存在。

?(pattern|pattern|pattern)
匹配满足 0 个 条件 或 1 个条件的文件

'test/dir/?(ab)c.js'
以上表示匹配，test/dir 文件夹下的 abc.js 或 c.js 文件。

!(pattern|pattern|pattern)
匹配不满足提供的条件的文件。

'test/dir/!(a|c)b.js'
以上会匹配在 test/dir 文件夹下，非 a 、c 开头的，以 b 结尾的文件。

+(pattern|pattern|pattern)
匹配满足 1 个及以上条件的文件。

'test/dir/+(ab)c.js'
以上模式会匹配到 test/dir 文件夹下的 ababc.js 或 abc.js 这样的文件。

*(pattern|pattern|pattern)
匹配满足 0 个及以上条件的文件。

'test/dir/*(a|b)b.js'
以上模式会匹配到 test/dir 文件夹下的 b.js 、ab.js 或 bb.js 文件。

@(pattern|pat*|pat?erN)
精确匹配提供条件之一的文件。

'test/dir/@(a|c)b.js'
以上表示精确匹配 test/dir 文件夹下的 ab.js 或 cb.js 文件。

字符范围匹配
这个匹配规则类似于 RegExp 对象中的 [...]。可以用于表示一个字符的范围。

'test/dir/[a-z].js'
以上表示匹配 test/dir 文件夹下像 a.js 、b.js 等等这样的文件。

'test/dir/[0-9].js'
以上表示匹配 test/dir 文件夹下像 0.js 、1.js 等等这样的文件。

你还可以像 RegExp 对象那样，使用 ^ 或 ! 进行取反操作。

'test/dir/[^0-9].js'

// 'test/dir/[!0-9].js'
这样对匹配 test/dir 文件夹下，以非单个数字命名的文件。例如 1.js，就不会被匹配到。

扩展
gulp
在 gulp 中，其将 glob 进行了扩展，可以将多个 glob 进行组合，glob 匹配时按照每个 glob 在数组中的位置依次进行匹配操作。

下面是 gulp 中的一个取反匹配操作：

第一个 glob 匹配到一组匹配项，然后后面的取反 glob 删除这些匹配项中的一部分。

glob 数组中的取反 （negative）glob 必须跟在一个非取反 （non-negative）glob 后面。

['script/**/*.js', '!scripts/vendor/']
如果任何取反 （non-negative）glob 跟随着一个非取反 （negative）glob，任何匹配项都不会被删除。

['script/**/*.js', '!scripts/vendor/', 'scripts/vendor/react.js']
如上规则，由于第三个 glob 的原因，第二个 glob 配置并不会生效，所以该条规则会递归返回 script 文件夹下的所有 .js 文件。

取反 （negative） glob 可以作为对带有两个星号的 glob 的限制手段。

['**/*.js', '!node_modules/']
在上面的示例中，如果取反 （negative）glob 是 !node_modules/**/*.js，那么各匹配项都必须与取反 glob 进行比较，这将导致执行速度极慢。

## 参考链接

[glob-syntax-rules](https://hongwenqing.com/2020/03/12/manual/glob-syntax-rules/)

[node-glob](https://github.com/isaacs/node-glob#glob-primer)
