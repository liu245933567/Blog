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

> 说明：本端所用IP为 192.168.100.200 数据库密码为 wddb20240711 如果用虚拟机的话可以直接设定上述IP和数据库密码

## 环境准备

1. 运行在16G内存以上的 [Linux 64位系统](https://mirrors.aliyun.com/centos/7/isos/x86_64/)
2. [宝塔面版](https://bt5.me/) 这里推荐开心版
   - 安装 nginx 1.22
   - 安装 php5.4
   - 安装 mysql 5.6
  

  
## 更改端配置

上传服务端和web网站到根目录 /6zn_192.168.100.200_wddb20240711.zip 并解压，可以使用下面的脚本进行批量替换

```sh
#!/bin/bash

# 显示脚本用法
usage() {
    echo "Usage: $0 -ip <new_ip_address> -pwd <new_db_password> [-path <root_path>]"
    exit 1
}

# 初始化参数
NEW_IP=""
NEW_DB_PASSWORD=""
ROOT_PATH="./"

# 解析命令行参数
while getopts "ip:pwd:path:" opt; do
    case $opt in
        ip)
            NEW_IP="$OPTARG"
            ;;
        pwd)
            NEW_DB_PASSWORD="$OPTARG"
            ;;
        path)
            ROOT_PATH="$OPTARG"
            ;;
        *)
            usage
            ;;
    esac
done

# 检查是否设置了必要的参数
if [ -z "$NEW_IP" ] || [ -z "$NEW_DB_PASSWORD" ]; then
    usage
fi

# 检查指定路径是否存在
if [ ! -d "$ROOT_PATH" ]; then
    echo "Error: Specified root path does not exist."
    exit 1
fi

# 替换文件中IP地址
find "$ROOT_PATH" -type f | xargs sed -i "s/192.168.100.200/$NEW_IP/g"

# 替换文件中数据库密码
find "$ROOT_PATH" -type f -name '_._' | xargs sed -i "s/wddb20240711/$NEW_DB_PASSWORD/g"
```

最后需要手动修改密文配置, 该修改需要搭配解密工具进行修改

`/www/wwwroot/zc/wd/110001_config_20190415.json`




3.解压服务端
cd /
unzip 6zn_192.168.100.200_wddb20240711.zip



