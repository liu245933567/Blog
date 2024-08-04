---
post: true
title: 解决Centos无法yum源的问题
date: 2024-07-05
categories:
  - 编程技术
tags:
  - CentOS
description: 解决Centos无法yum源的问题
---

1、安装yum依赖包，出现报错could not resolve host ：mirrorlist.centos.org:unknown error

此时 #ping mirrors.aliyun.com 不通

一般是由于dns解析存在问题，cd /etc/resolv.conf  修改nameserver 改为114.114.114.114。

![](https://img2024.cnblogs.com/blog/1960648/202407/1960648-20240703173858869-1100729159.png)

重启网卡：systemctl restart network

再次 #ping mirrors.aliyun.com 通了

 2、再次安装yum依赖包，如果还出现could not resolve host ：mirrorlist.centos.org:unknown error

mirrorlist.centos.org无法访问，尝试切换到其他可用的镜像源

**阿里云Centos镜像源地址：https://mirrors.aliyun.com/repo/**

修改/etc/yum.repos.d/Centos-Base.repo文件

1）进入到如下目录

```bash
cd /etc/yum.repos.d/
```

2）备份CentOS-Base.repo 。

```bash
mv CentOS-Base.repo CentOS-Base.repo.bak
```

3）下载yum源 

```bash
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

结合自己的Centos版本选择合适的yum源（查看Centos版本命令：Cat /etc/Centos-release）

4）清楚以前所有的过时的yum缓存

```bash
yum clean all
```

5）重新生成yum缓存

```bash
yum makecache
```

6）测试，yum install vim OK