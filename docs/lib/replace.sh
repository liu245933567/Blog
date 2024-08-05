#!/bin/bash

# 显示脚本用法
usage() {
  echo "Usage: $0 -ip <new_ip_address> -pwd <new_db_password> [-path <root_path>]"
  exit 1
}

# 初始化参数
NEW_IP=""
NEW_DB_PASSWORD=""
ROOT_PATH="./" # 设置默认值为 /home

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
  -path)
    ROOT_PATH="$2"
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

# 检查指定路径是否存在
if [ ! -d "$ROOT_PATH" ]; then
  echo "Error: Specified root path does not exist."
  exit 1
fi

echo "解压 $ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch.zip"
unzip "$ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch.zip" -d "$ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch"

echo "删除 $ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch.zip"
rm -f "$ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch.zip"

echo "解压 $ROOT_PATH/www/wwwroot/zc/atm/appstore/patch.zip"
unzip "$ROOT_PATH/www/wwwroot/zc/atm/appstore/patch.zip" -d "$ROOT_PATH/www/wwwroot/zc/atm/appstore/patch"

echo "删除 $ROOT_PATH/www/wwwroot/zc/atm/appstore/patch.zip"
rm -f "$ROOT_PATH/www/wwwroot/zc/atm/appstore/patch.zip"

echo "替换文件中IP地址"
find "$ROOT_PATH" -type f | xargs sed -i "s/192.168.100.200/$NEW_IP/g"

echo "替换文件中数据库密码"
find "$ROOT_PATH" -type f | xargs sed -i "s/wddb20240711/$NEW_DB_PASSWORD/g"

echo "重新压缩 $ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch.zip"
zip -r "$ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch.zip" "$ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch"

echo "删除 $ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch"
rm -rf "$ROOT_PATH/www/wwwroot/zc/atm/g-bits/patch"

echo "重新压缩 $ROOT_PATH/www/wwwroot/zc/atm/appstore/patch.zip"
zip -r "$ROOT_PATH/www/wwwroot/zc/atm/appstore/patch.zip" "$ROOT_PATH/www/wwwroot/zc/atm/appstore/patch"

echo "删除 $ROOT_PATH/www/wwwroot/zc/atm/appstore/patch"
rm -rf "$ROOT_PATH/www/wwwroot/zc/atm/appstore/patch"
