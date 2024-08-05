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

将 `6zn_192.168.100.200_wddb20240711.zip` 上传服务端根文件夹

批量修改，依次执行下方命令

```bash
# 解压
unzip /6zn_192.168.100.200_wddb20240711.zip

# 修改服务端IP
find /home -type f | xargs sed -i 's/192.168.100.200/192.168.33.134/g'
# 修改服务端数据库密码
find /home -type f | xargs sed -i 's/wddb20240711/你的数据库密码/g'
# 修改web网站IP
find /www/wwwroot/zc/ -type f | xargs sed -i 's/192.168.100.200/192.168.33.134/g'
# 修改web网站数据库密码
find /www/wwwroot/zc/  -type f | xargs sed -i 's/wddb20240711/你的数据库密码/g'
# 设置home文件可执行权限
chmod 777 -R /home
```

修改注册配置（手动）

- `/www/wwwroot/zc/192111/d/index.php` -- 修改ip
- `/www/wwwroot/zc/wd/110001_config_20190415.json` -- 修改秘文

修改热更文件IP

安卓

`/www/wwwroot/zc/atm/g-bits/patch.zip`

- patch/dist.lua -修改IP
- patch/patch_url.lua -修改ip
- patch/patch_url_ats.lua -修改ip

IOS

`/www/wwwroot/zc/atm/appstore/patch.zip` patch.php下载出来修改后缀为zip

- patch/dist.lua -修改IP
- patch/patch_url.lua -修改ip
- patch/patch_url_ats.lua -修改ip

修改客户端页面登陆

`/www/wwwroot/zc/atm/g-bits/aaa.zip`

- aaa/atmu/src/dlg/AccountInputDlg.luac --修改ip
- aaa/atmu/src/mgr/LeitingSdkMgr.luac --修改ip

## 数据库设置

设置数据库外部网络访问，以便sql工具链接

```bash
mysql -u root -p
```

```sql
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '你的数据库密码' WITH GRANT OPTION;
FLUSH PRIVILEGES;
Quit
```

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

## 建立站点

`81` 端口 php5.4

建站路径 `/www/wwwroot/zc/`
