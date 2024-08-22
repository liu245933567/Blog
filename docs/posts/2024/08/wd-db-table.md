---
post: true
title: 某道手游数据库表注释
date: 2024-08-11
description: 某道手游数据库表注释
categories:
  - 某道技术研究
tags:
  - 某道
---

adb和ddb，
adb数据库下，account表，（账号信息）
ddb数据库下，basic_char_info，data，gid_info以及property_recall表（角色数据）

1045是密码错误的意思
2003是磁盘慢了的意思
1009是元宝冲多了
1040是 链接限制的意思

db

acc_log 游戏账号日志
account 游戏账号列表
cost_log 游戏商城购买日志

221.229.175.24

ddb

basic_char_info 游戏角色名汇总 （polar=门派、gender=性别、time=创建角色时间）
data 证道殿与改名
gid_info 游戏角色名(删除这里等于删除角色)
property_recall 物品的回购（猜的，可能是卖给NPC商店的东西）
top_data 排行榜

ldb

anti_cheater_log 反作弊日志
apply_log 应用日志()
campaign_log 消耗日志（如吃药、穿上装备。打入石头等）
collect_data_log 订购日志（账号、gid、name、mac、ip、元宝数等等）
collect_data_log 用户的电脑配置
common_log 任务日志
*cost_coin_log 元宝消费记录（查元宝去哪了就查这个表）
debug_log 杂七杂八日志
equipment_log 装备日志
gift_log 爆的物品奖励（如六周年卡、首饰、喇叭等）
gm_log GM操作日志
important_log 牛逼装备、首饰日志（上榜的）
important_pet_log 牛逼宠物日志（上榜的）
item_transfer_log 物品转移日志
level_up_log 升级日志
login_log 登陆日志
money_log 游戏币日志
pet_level_up_log 宠物升级日志
pet_log 宠物日志
property_bind_log 物品、宠物、装备绑定日志
safe_log 物品、宠物、装备加锁日志
sale_log 拍卖、摆摊。商店日志
task_log 道行日志
*user_log 用户日志（包括交易、拾取、丢弃）

秀氣注释！

guessd.o 五行
limit_logind.o IP
manuald.o
marry_birthdayd.o 结婚
mobile_clientd.oGM手机助手
onlinemalld.o 商城
jingji_wangzhe.o新服竞技王者奖励
pet_eclosiond.o 宠物类绑定
jingji_shilian.o 竞技试炼
random_box_awardd.o 宝箱之类
recognized.o认主
restrictiond.o登录安全设置
salaryd.o工资系统
kaiqi_yuanshen.o开启元神出战
security_settingd.o手机绑定
jingyaoshu_task.o惊妖术
shopd.o商会
skill_workshopsd.o寄存
stalld.o摆塔
temp_daemond.o神龙变版本更新文件
time_luckd.o 12生肖守护灵
longxue_zhijing.o龙血之精
lottery_ticket.o奖券系统
lottery_ticket_ns.o新服奖券系统
melt_elixir.o 全服荣丹系统
melt_elixir_ns.o 新服荣丹系统
mount_task.o召唤精怪
new_artifact_instruct.o法宝三合一
new_mount_task.o 抓精怪
script_jial_delivery.o劫牢文件
script_jiebai.o结拜
script_xiandaonan.o飞升任务文件
send_exp_online.o在线送经验
shanggu-yaowang.o上古妖王文件
shenmuding_task.o神木鼎
shenxian_futi.o神仙附体
shihun.o 藏宝图放出的BOSS文件
shuadao_shijian.o每周刷道时间
special_nanhuangwushu.o南荒巫术特殊卦
tengyun_jiawu.o学习腾云家务
tiny_client_discount.o内测系统
web_client_discount.o内测系统
tongtianta.o通天塔
wudao_instruction.o悟道
script_arrest_murder.o 杀人安全区域
xuling-huanjing.o虚灵幻境文件
qixing_juhui.o七星聚会挑战
xunbao_task.o藏宝图
chaoji-baozang.o超级藏宝图
zhenxing_instruct.o阵法文件
ziwei_mingge.o紫薇命格卡
fabao_zhuanshi_instruct.o指引法宝转世系统
cangbaoge.o藏宝阁
bydr1234567.o 摇摆自制赏金猎人天墉城悬赏令
binfen_haoli_task.o缤纷好礼
binfen_haoli_tas1.o道行不够在线送
fabao_zhuanshi.o指引灵物法宝转世系统

reentry_asktao.o重返问道奖励

topd.o 排行榜文件
treasure_tradingd.o 七宝文件
treasureboxd.o 天降宝箱
user_sortd.o 排名
passpodd.o 购买乾坤锁发货
vipd.o 绑定乾坤锁
world_leveld.o 世界等级文件

instruction_safe.o指引

item_exploit_task.o飞行符

jail_task.o 坐牢
jewelry_mode_task.o 首饰加紫蟾聚灵珠
jineng_juexing.o技能觉醒
world_bossd.o世界大BOSS系统
weatherd.o 呼风唤雨文件
coin_traded.o元宝交易
char_upgraded.o飞升系统
beta_testd.o体验服文件
battlearrayd.o阵法
auth_protectd.o乾坤锁绑定之类的
antiaddictiond.o防沉迷
amendd.o非法获得
lingluo_huanxingjing.o 绫罗环境
GS:zone文件夹里面大部分都是地图文件
GS:skills基本都是技能文件
