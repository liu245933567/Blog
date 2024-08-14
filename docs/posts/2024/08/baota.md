---
post: true
title: 宝塔
date: 2024-08-04
categories:
  - 信息技术
tags:
  - 宝塔
description: 宝塔
---

# 宝塔开心版 

[https://bt5.me/](https://bt5.me/)

在安装过程中可能会遇到下面错误

```bash
Loaded plugins: fastestmirror, langpacks
Loading mirror speeds from cached hostfile
Could not retrieve mirrorlist http://mirrorlist.centos.org/?release=7&arch=x86_64&repo=os&infra=stock error was
14: curl#6 - "Could not resolve host: mirrorlist.centos.org; Unknown error"
```

请参考  [解决Centos无法yum源的问题](/posts/2024/08/centos-yum.md)

## 防火墙

1、关闭防火墙：sudo systemctl stop firewalld.service

```bash
sudo systemctl stop firewalld.service
```

2、关闭开机启动：sudo systemctl disable firewalld.service

```bash
sudo systemctl disable firewalld.service
```