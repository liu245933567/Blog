#!/bin/bash

# 显示脚本用法
usage() {
  echo "Usage: $0 -ip <new_ip_address> -pwd <new_db_password>"
  exit 1
}

# 初始化参数
NEW_IP=""
NEW_DB_PASSWORD=""

# 解析命令行参数
while [[ $# -gt 0 ]]; do
  key="$1"

  case $key in
  -ip)
    NEW_IP="$2"
    shift # past argument
    shift # past value
    ;;
  -pwd)
    NEW_DB_PASSWORD="$2"
    shift # past argument
    shift # past value
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

echo "删除原文件"
rm -rf /home/1
rm -rf /home/2
rm -rf /home/db
rm -rf /home/db1
rm -rf /home/wendao
rm -rf /www/wwwroot/zc

echo "解压"
unzip /6zn_192.168.100.200_wddb20240711.zip

echo "修改服务端IP"
find /home -type f -name '*.*' | xargs sed -i "s/192.168.100.200/$NEW_IP/g"
find /home -type f | xargs sed -i "s/192.168.100.200/$NEW_IP/g"

echo "修改服务端数据库密码"
find /home -type f -name '*.*' | xargs sed -i "s/wddb20240711/$NEW_DB_PASSWORD/g"
find /home -type f | xargs sed -i "s/wddb20240711/$NEW_DB_PASSWORD/g"

echo "修改web网站IP"
find /www/wwwroot/zc/ -type f -name '*.*' | xargs sed -i "s/192.168.100.200/$NEW_IP/g"
find /www/wwwroot/zc/ -type f | xargs sed -i "s/192.168.100.200/$NEW_IP/g"

echo "修改web网站数据库密码"
find /www/wwwroot/zc/  -type f -name '*.*' | xargs sed -i "s/wddb20240711/$NEW_DB_PASSWORD/g"
find /www/wwwroot/zc/  -type f | xargs sed -i "s/wddb20240711/$NEW_DB_PASSWORD/g"

echo "设置home文件可执行权限"
chmod 777 -R /home


# 使用方法
# ./replace.sh -ip 192.168.100.200 -pwd <PASSWORD>