---
post: true
title: Linux CentOS 平台安装 rar unrar 命令
date: 2024-08-04
description: Linux CentOS 平台安装 rar unrar 命令
categories:
  - 编程技术
tags:
  - Linux
  - CentOS 
---

如果 wget 命令还未安装，先进行安装。

```bash
yum install -y wget
```

输入以下命令下载 rar 安装包。

```shell
wget http://www.rarlab.com/rar/rarlinux-x64-4.2.0.tar.gz --no-check-certificate
```

解压压缩包，例如解压到`/usr/local`下。

```shell
tar zxvf rarlinux-x64-4.2.0.tar.gz -C /usr/local
```

进行命令连接，这样我们可以在任意目录下使用命令。解压完成后，在`/usr/local/rar`目录下就会有`rar`和`unrar`命令了。可以将 rar 和 unrar 命令链接到`/usr/local/bin`目录下。

```shell
ln -s /usr/local/rar/rar /usr/local/bin/rar ln -s /usr/local/rar/unrar /usr/local/bin/unrar
```

使用 `rar --help`和`unrar --help`可以查看帮助文档。

例如按完整路径解压缩 a.rar 文件，使用 x 参数会按压缩包里面的完整路径解压文件。

```shell
unrar x a.rar
```
