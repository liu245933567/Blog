---
post: true
title: Linux 固定局域网ip
date: 2024-08-10
description: 记录一次解决 centos 固定局域网ip的经历
categories:
  - 信息技术
tags:
  - Linux
  - centos
  - 网络
---

**前言：今天按照网上的一些文章去设置虚拟机静态IP，踩了很多坑，花费了很多时间。所以此片文章完善详细操作步骤，解决遇到的一些问题，避免大家踩坑。不会配的请全部按照文中IP进行配置**

#### 1、点击编辑-虚拟网络编辑器

![](https://i-blog.csdnimg.cn/blog_migrate/c80abcd14cd92263e6991589062b2849.png)

**2、点击更改设置、修改虚拟网络配置器并确认保存（见图）**

![](https://i-blog.csdnimg.cn/blog_migrate/4988a0daa00af13d1adbd308e5ba3c65.png)

![](https://i-blog.csdnimg.cn/blog_migrate/e80e60e9a39145622a2cddbad550cf7e.png)

![](https://i-blog.csdnimg.cn/blog_migrate/d70c2b4bc8fa3ce85b0727c9ce384225.png)

**3、打开设置“网络和Internet”，点击“更改适配器选项”，点击适配器VMnet8，修改IP和DNS相关配置**  
![](https://i-blog.csdnimg.cn/blog_migrate/6812cea477d39a17a5e5dd077baa848a.png)

![](https://i-blog.csdnimg.cn/blog_migrate/b5f563c78984b97c094cd242c013e1b1.png)

![](https://i-blog.csdnimg.cn/blog_migrate/753ebe4d4e0ebd3e70e5985523802b1d.png)

**4、进入虚拟机，设置固定IP地址**

root用户登录虚拟机，输入命令：

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

![](https://i-blog.csdnimg.cn/blog_migrate/5261680a88feb19bd4e384abd2cc746e.png)

按如下修改配置，需要改一下图中圈出的配置部分（没有ifcfg-eth0配置文件的，需新增此配置文件，并复制下面所有的配置，再进行修改）

```bash
DEVICE=eth0

BOOTPROTO=static

HWADDR=00:0C:29:ec:28:03

IPV6INIT=yes

NM_CONTROLLED=yes

ONBOOT=yes

TYPE=Ethernet

UUID=7a47775a-8bca-4daf-80b4-965da12756a8

IPADDR=192.168.188.100

NETMASK=255.255.255.0

GATEWAY=192.168.188.1
```

![](https://i-blog.csdnimg.cn/blog_migrate/8d07cdedd6dc1b2ba79f10eb1341b560.png)

IPADDR：需要设置的虚拟机固定IP。可按图设置（此IP就是给虚拟机设置的固定IP，将来SSH等操作都可以通过这个IP连接到虚拟机）。

NETMASK、GATEWAY按图设置即可。

HWADDR：虚拟机MAC地址（必须修改）。虚拟机设置中可查看：  
![](https://i-blog.csdnimg.cn/blog_migrate/f1b18af1e70a79f12e12d6e1bbd79e2c.png)

**5、重启虚拟机**

![](https://i-blog.csdnimg.cn/blog_migrate/234b0c0bf49706a3b670a404989fe2c8.png)

**6、到此已全部配置完成，**

输入命令，查看固定IP是否设置成功

```bash
ip addr
```

固定IP为配置的192.168.188.100，修改成功。  
![](https://i-blog.csdnimg.cn/blog_migrate/b3fd1298b9e3c9189af7594a31783d6a.png)

ping一下百度，大功告成。

![](https://i-blog.csdnimg.cn/blog_migrate/0821aa63d48ff764d8b8bcc66de9a2de.png)

7、如果执行命令遇到以下问题

```undefined
ping baidu.com
```

返回：ping: baidu.com: Name or service not known

![](https://i-blog.csdnimg.cn/blog_migrate/78933bdd30989054c5d108bf2853428f.png)

解决方法是修改虚拟机DNS，按以下操作进行

执行命令，修改DNS配置文件：

```cobol
vi /etc/resolv.conf
```

添加以下内容并保存

```bash
nameserver 8.8.8.8
```

![](https://i-blog.csdnimg.cn/blog_migrate/01341f3f65734acd2b32cf8820233e18.png)

执行命令重启网络

```bash
service network restart
```

如果以上操作导致 ping baidu.com 时出现问题, 请尝试执行 `dhclient` 命令

```
[root@localhost ~]# dhclient
```


参考文档

[Vmware虚拟机Linux配置固定IP地址（详细版）](https://blog.csdn.net/jsryin/article/details/123304582)

[解决Centos系统设置静态ip时报错 ping: www.baidu.com: Name or service not known](https://plutoacharon.github.io/2020/07/05/%E8%A7%A3%E5%86%B3Centos%E7%B3%BB%E7%BB%9F%E8%AE%BE%E7%BD%AE%E9%9D%99%E6%80%81ip%E6%97%B6%E6%8A%A5%E9%94%99-ping-www-baidu-com-Name-or-service-not-known/)