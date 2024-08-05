---
post: true
title: 某道手游架设
date: 2024-08-04
categories:
  - 游戏架设
tags:
  - 某道手游
description: 某道手游六周年测试端架设
---

> 说明：本端所用IP为 `192.168.100.200` 数据库密码为 `wddb20240711` 如果用虚拟机的话可以直接设定上述IP和数据库密码

## 环境准备

1. 运行在16G内存以上的 [Linux 64位系统](https://mirrors.aliyun.com/centos/7/isos/x86_64/)
2. [宝塔面版](https://bt5.me/) 这里推荐开心版
   - 安装 nginx 1.22
   - 安装 php5.4
   - 安装 mysql 5.6

## 修改端文件

将 `6zn_192.168.100.200_wddb20240711.zip` 上传服务端根文件夹 `/`

在 `/` 创建 `replace.sh` 文件，内容如下

::: details 点我查看代码
<<< @/lib/shell/wd.replace.sh
:::

执行脚本

```bash
./replace.sh -ip 192.168.100.200 -pwd <PASSWORD>
```

## 建立站点

`81` 端口 php5.4

建站路径 `/www/wwwroot/zc/`

## 数据库设置

设置数据库外部网络访问，以便sql工具链接

```bash
mysql -u root -p
```

::: warning 注意
不要直接将下方 sql 复制到 mysql 命令行中执行，先在本地替换完'你的数据库密码'后执行
:::

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '你的数据库密码' WITH GRANT OPTION;
FLUSH PRIVILEGES;
Quit;
```

更改数据库最大连接数，防止连接数过多导致服务器崩溃

![20240805205901](https://s2.loli.net/2024/08/05/cEC8V5y9MQbuYnk.png)

导入数据库

```bash
# 导入区组数据库
cd /home/db
./sk

# 导入阵营数据库
cd /home/db1
./sk1
```

## 项目启动

::: info :tada: 恭喜
完成以上操作后，可以启动项目了
:::

```bash
# 启动区组
cd /home/1
./qd

# 启动阵营
cd /home/2
./qd
```

出现如下证明启动成功

```bash
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
[service.c] Game server allows user to login now.
```

## 页面资源服务修改

使用工具修改秘文

`/www/wwwroot/zc/wd/110001_config_20190415.json` `SdkConfig`

![20240805201520](https://s2.loli.net/2024/08/05/mfFUpacCV8NnG9z.png)

![20240805201409](https://s2.loli.net/2024/08/05/YP2xfUAXMkOGvyN.png)

## 修改热更文件IP

修改客户端页面登陆

`/www/wwwroot/zc/atm/g-bits/aaa.zip`

- aaa/atmu/src/dlg/AccountInputDlg.luac --修改ip
- aaa/atmu/src/mgr/LeitingSdkMgr.luac --修改ip

安卓

`/www/wwwroot/zc/atm/g-bits/patch.zip`

- patch/dist.lua -修改IP
- patch/patch_url.lua -修改ip
- patch/patch_url_ats.lua -修改ip

::: info 有一种简单方式
将 `/www/wwwroot/zc/atm/g-bits/aaa.zip` `/www/wwwroot/zc/atm/g-bits/patch.zip` 同时解压


执行

```bash
find /www/wwwroot/zc/atm/g-bits -type f -name '*.*' | xargs sed -i 's/192.168.100.200/$NEW_IP/g'
```

然后按照原来的文件名重新打包
:::

IOS

`/www/wwwroot/zc/atm/appstore/patch.zip` patch.php下载出来修改后缀为zip

- patch/dist.lua -修改IP
- patch/patch_url.lua -修改ip
- patch/patch_url_ats.lua -修改ip

## 修改客户端IP

安卓

`apk\assets\sdkConfig.properties`     使用加密解密工具
`apk\assets\res\PlatformConfig.luac`  IP

IOS

`6zn.ipa\Payload\AsktaoMobile iOS.app\Info.plist`   修改APP名字
`6zn.ipa\Payload\AsktaoMobile iOS.app\res\PlatformConfig.luac`

## 应用地址

### 注册地址

IP:81/reg.html

### 邮件发货地址

IP:81/jzfh
