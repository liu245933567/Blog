---
post: true
title: 解决Centos无法yum源的问题
date: 2024-07-05
categories:
  - 信息技术
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

## 方法二

当出现这个问题后首先想到了网络问题

1.通过ip addr检查了一下网络接口发现没问题
2.resolv.conf中手动配置了一下DNS也无法解决
3.检查了一下虚拟机的网络设置也没问题
4.ip route检查路由表发现没问题
5.关了一下防火墙也无法解决问题 

打开CentOS-Base.repo

```bash
sudo vim /etc/yum.repos.d/CentOS-Base.repo
```

将CentOS-Base.repo里的内容全部替换为：

```txt
# CentOS-Base.repo  
#  
# 这里配置了CentOS的yum源，使用了阿里云和清华大学的镜像点。  
#  
  
[base]  
name=CentOS-$releasever - Base  
baseurl=http://mirrors.aliyun.com/centos/$releasever/os/$basearch/  
        http://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/os/$basearch/  
gpgcheck=1  
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7  
  
#released updates   
[updates]  
name=CentOS-$releasever - Updates  
baseurl=http://mirrors.aliyun.com/centos/$releasever/updates/$basearch/  
        http://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/updates/$basearch/  
gpgcheck=1  
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7  
  
#additional packages that may be useful  
[extras]  
name=CentOS-$releasever - Extras  
baseurl=http://mirrors.aliyun.com/centos/$releasever/extras/$basearch/  
        http://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/extras/$basearch/  
gpgcheck=1  
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7  
  
#additional packages that extend functionality of existing packages  
[centosplus]  
name=CentOS-$releasever - Plus  
baseurl=http://mirrors.aliyun.com/centos/$releasever/centosplus/$basearch/  
        http://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/centosplus/$basearch/  
gpgcheck=1  
enabled=0  
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7  
  
#contrib - packages by Centos Users  
[contrib]  
name=CentOS-$releasever - Contrib  
baseurl=http://mirrors.aliyun.com/centos/$releasever/contrib/$basearch/  
        http://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/contrib/$basearch/  
gpgcheck=1  
enabled=0  
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-CentOS-7  
  
# 使用failovermethod指定优先级，这里设置为随机（roundrobin），也可以改为priority并指定每个URL的优先级  
failovermethod=roundrobin
```

清理YUM缓存并更新

```bash
sudo yum clean all

sudo yum makecache

sudo yum update

```

(参考地址)[https://blog.csdn.net/qq_46302361/article/details/140169844?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-1-140169844-blog-127119019.235^v43^pc_blog_bottom_relevance_base5&spm=1001.2101.3001.4242.2&utm_relevant_index=4]
