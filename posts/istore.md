---
title: IStore 折腾记录
date: 2024-04-08
categories:
  - Nas
---

## ADGhome

https://www.youtube.com/watch?v=cu0Kk5hhUMk&t=78s

![20240408104252](https://s2.loli.net/2024/04/08/VWzyGuUE4A8ealt.png)

## Jellyfin

```
chmod 1777 /tmp

apt update
apt install fonts-noto-cjk-extra


/mnt/sata1-4/fonts:/usr/share/fonts/truetype/dejavu
```

## Emby

镜像名称 lovechen/embyserver:latest

```
13.224.161.90 api.themoviedb.org
104.16.61.155 image.themoviedb.org
13.35.67.86 api.themoviedb.org
54.192.151.79 www.themoviedb.org
13.225.89.239 api.thetvdb.com
13.249.175.212 api.thetvdb.com
13.35.161.120 api.thetvdb.com
13.226.238.76 api.themoviedb.org
13.35.7.102 api.themoviedb.org
13.225.103.26 api.themoviedb.org
13.226.191.85 api.themoviedb.org
13.225.103.110 api.themoviedb.org
52.85.79.89 api.themoviedb.org
13.225.41.40 api.themoviedb.org
13.226.251.88 api.themoviedb.org
```

istore 中运行参数

```shell
docker run \
--network=host \
-p '8096:8096' \
-p '8920:8920' \
-p '1901:1900/udp' \
-p '7359:7359/udp' \
-v /mnt/sata1-4/Configs/emby:/config \
-v /mnt/usb1/media/:/data \
-e TZ="Asia/Shanghai" \
--device /dev/dri:/dev/dri \
-e UID=0 \
-e GID=0 \
-e GIDLIST=0 \
--restart always \
--name emby \
-d lovechen/embyserver:latest
```

```
docker run \
#设置网络模式
--network=bridge \
#开放端口
#http
-p '8096:8096' \
#https
-p '8920:8920' \
#dlna
-p '1900:1900/udp' \
#local network discovery
-p '7359:7359/udp' \
#映射配置目录
-v /data/emby:/config \
#映射影视资源目录
-v /data/downloads/:/data \
#设置时区
-e TZ="Asia/Shanghai" \
#映射硬解驱动
--device /dev/dri:/dev/dri \
#设置权限
-e UID=0 \
-e GID=0 \
-e GIDLIST=0 \
--restart always \
#设置代理（用于TMDB等搜集信息）
-e HTTP_PROXY="http://你的代理IP:你的代理端口/" \
-e HTTPS_PROXY="http://你的代理IP:你的代理端口/" \
#docker名字
--name emby \
#docker源版本
-d lovechen/embyserver:版本号
```

## Nas-Tool

```
/mnt/sata1-4/Configs/NasTools:/config
/mnt:/mnt:rslave



NASTOOL_AUTO_UPDATE=false
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/lib/chromium
S6_SERVICES_GRACETIME=30000
S6_KILL_GRACETIME=60000
S6_CMD_WAIT_FOR_SERVICES_MAXTIME=0
S6_SYNC_DISKS=1
HOME=/nt
TERM=xterm
PS1=\u@\h:\w $
REPO_URL=https://github.com/NAStool/nas-tools.git
LANG=C.UTF-8
TZ=Asia/Shanghai
NASTOOL_CONFIG=/config/config.yaml
NASTOOL_CN_UPDATE=true
NASTOOL_VERSION=master
PYPI_MIRROR=https://pypi.tuna.tsinghua.edu.cn/simple
ALPINE_MIRROR=mirrors.ustc.edu.cn
PUID=0
PGID=0
UMASK=000
WORKDIR=/nas-tools
```

```shell
docker run -d \
    --name nas-tools \
    --hostname nas-tools \
    -p 3000:3000   `# 默认的webui控制端口` \
    -v /mnt/sata1-4/Configs/NasTools:/config  `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
    -v /mnt/usb1/media:/media    `# 媒体目录，多个目录需要分别映射进来` \
    -e PUID=0     `# 想切换为哪个用户来运行程序，该用户的uid，详见下方说明` \
    -e PGID=0     `# 想切换为哪个用户来运行程序，该用户的gid，详见下方说明` \
    -e UMASK=000  `# 掩码权限，默认000，可以考虑设置为022` \
    -e NASTOOL_AUTO_UPDATE=false `# 如需在启动容器时自动升级程程序请设置为true` \
    -e NASTOOL_CN_UPDATE=false `# 如果开启了容器启动自动升级程序，并且网络不太友好时，可以设置为true，会使用国内源进行软件更新` \
    hsuyelin/nas-tools
```

## MoviePilot

```shell
docker run -d \
    --name movie-pilot \
    --hostname movie-pilot \
    -p 3000:3000   `# 默认的webui控制端口` \
    -e AUTH_SITE=   `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
    -e QINGWA_UID=   `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
    -e QINGWA_PASSKEY=   `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
    -v /mnt/sata1-4/Configs/MoviePilot:/config  `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
    -v /mnt/sata1-4/Configs/moviepilot:/moviepilot  `# 冒号左边请修改为你想在主机上保存配置文件的路径` \
    -v /mnt/usb1/media:/media    `# 媒体目录，多个目录需要分别映射进来` \
    -e PUID=0     `# 想切换为哪个用户来运行程序，该用户的uid，详见下方说明` \
    -e PGID=0     `# 想切换为哪个用户来运行程序，该用户的gid，详见下方说明` \
    -e UMASK=000  `# 掩码权限，默认000，可以考虑设置为022` \
    jxxghp/moviepilot:latest
```

## metatube-server

```shell
docker run -d -p 8081:8080 -v /mnt/sata1-4/Configs/metatube-server:/config --name metatube metatube/metatube-server:latest -dsn /config/metatube.db
```
