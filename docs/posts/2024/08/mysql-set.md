---
post: true
title: Mysql 常用设置
date: 2024-08-05
description: 常用设置
categories:
  - 编程技术
tags:
  - Mysql
  - CentOS
---

## general_log 开启和关闭

```sql
# 查看状态
show global variables like '%general%';

# 开启general log模式
set global general_log=on;

# 关闭general log模式
set global general_log=off;

# 看看日志文件保存位置
show variables like 'general_log_file';

# 设置日志文件保存位置
set global general_log_file='/www/server/data/general.log';
```

清理日志文件, 找到general_log的文件 执行

```bash
cat /dev/null > /www/server/data/general.log;
```
