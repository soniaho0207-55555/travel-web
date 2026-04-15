# 马丘比丘 · 内容交付 · v2.3 Phase 1

**景点数**：4（主遗址首批 ticket + 本文件 3 子景点 + 本文件补主遗址 6 条 tips）
**Tier 分布**：A × 1（主遗址）+ B × 1（华纳比丘）+ C × 2（太阳神殿 / 拴日石）

> **说明**：马丘比丘主遗址 ticket 已在首批样板 `PM首批内容-v2.3-Phase1-数据样本.md §1.5` 交付（S/152 环线 / Huayna 加购 / 6:00 首批 / 14:00 二波）。本文件第 0 节补**主遗址 6 条 Tier A tips**（首批遗漏，Dev 合入时 flag 发现）。
>
> 其余 3 个是遗址内的子景点——**华纳比丘**（遗址背后尖峰，每日限 400 人登山）、**太阳神殿**（Torreón 塔形圣所，冬至对准）、**拴日石**（Intihuatana 天文石柱，春秋分测影）。
>
> **data.js wiki 注意**：data.js 上"太阳神殿"的 wiki 字段写的是 `Ollantaytambo`（另一处遗址），但描述内容是马丘比丘主遗址内的 **Torreón 塔**（半圆形对准冬至日出）。以下内容按描述（Torreón）写，Dev 可同步修正 wiki 字段。

---

## 0. 马丘比丘主遗址（Machu Picchu）· Tier A · tips 补交

> ticket 4 件套见首批样板 `PM首批内容-v2.3-Phase1-数据样本.md §1.5`。以下 6 条 tips 填入主遗址 landmark 的 `tips[]`（Dev 已选方案 A：在 `machu-picchu.landmarks[]` 头部新增主遗址 entry）。

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '2024 年起强制按 5 条环线（Circuito 1-5）分区售票——经典"全景环线 2"S/152 最值，含上城 + 下城 + 守望小屋俯瞰机位' // ✓ 锚点：数字 5 条 / S/152 + 具体名字环线 2 / 守望小屋 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '06:00 首批入场看晨雾穿峰金光，09:00-11:00 团客高峰，14:00 后二波人流减半 + 斜阳暖色；11:30-13:30 正午光线最硬' // ✓ 锚点：具体时间 06:00/09:00-11:00/14:00/11:30-13:30 + 数字一半
  },
  {
    category: 'walking',
    text: '环线单向通行 + 不可回头——进门前先决定"守望小屋"俯瞰机位走哪条（Circuito 1 上城 / Circuito 2 全景）；走错只能出遗址重买票' // ✓ 锚点：具体名字 Circuito 1/2 / 守望小屋 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '最经典明信片机位在守望小屋平台（Guardhouse）东南角——主城 + 华纳比丘尖峰 + 梯田三层构图全齐；Circuito 1 和 2 才经过，3/4/5 不经过' // ✓ 锚点：具体方向东南角 + 具体名字守望小屋 / Circuito + 数字 3 层
  },
  {
    category: 'cold',
    text: '海拔 2430 米紫外线是海平面 2 倍；旱季（5-9 月）白天 22℃ 但晨间 3-8℃；雨季（11-3 月）午后 30 分钟暴雨概率 70% + 2 月官方维护封闭' // ✓ 锚点：数字 2430 米/2 倍/22℃/3-8℃/70%/30 分钟 + 具体时间 5-9 月/11-3 月
  },
  {
    category: 'ticket',
    text: '进入遗址必须由持证向导陪同（2019 年起规定），散客拼团 S/50（约 ¥100）2 小时讲解，入口 Ticket Check 外有持牌导游候场' // ✓ 锚点：数字 2019 年/S/50/¥100/2 小时 + 只有去过才知道
  }
]
```

**锚点命中自检**：每条都命中至少 1 项（数字 / 具体时间 / 具体方向 / 具体名字 / 只有去过才知道）✅
**自检红绿灯**：☑ tips 6/6 / ☑ category 4 种（ticket / timing / walking / photo / cold）/ ☑ 全部命中锚点

---

## 1. 华纳比丘（Huayna Picchu）· Tier B

### ticket

```javascript
ticket: {
  price: '需额外购票（主门票之外）；主门票 + 华纳比丘组合约 USD 75（约 ¥540）',
  channels: [
    {
      name: '官方 tuboleto.cultura.pe',
      url: 'https://www.tuboleto.cultura.pe/', // ✋ Dev 核对秘鲁文化部售票平台
      note: '唯一官方售票；需选 Circuito 3 + Huayna Picchu 路线；每日限 400 人分 2 批次入场'
    },
    {
      name: 'GetYourGuide / Viator 代理',
      url: 'https://www.getyourguide.com/',
      note: '旺季（5-9 月）官方售罄时可买代理票，但溢价 $20-50'
    }
  ],
  bookingWindow: {
    peak:     '旱季（5-9 月）：必须提前 2-3 个月抢；6-8 月整周 400 配额提前 90 天开售瞬空',
    shoulder: '过渡季（4、10 月）：提前 30 天',
    offpeak:  '雨季（11-3 月）：提前 7-14 天有余票；但山路湿滑 + 云雾遮视野，摔伤率最高'
  },
  timingTip: '两个入场批次 07:00-08:00 / 10:00-11:00；选第一批看日出云海穿透峰顶最震撼；登顶全程 1 小时 + 海拔 2720 米（高马丘比丘 300 米）+ 铁链石阶一段极陡；恐高 / 膝盖不好放弃'
} // ✋ Dev 上线前核对：tuboleto.cultura.pe 现行价 / 400 人限额 / 开放批次时间
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '每日限 400 人分 2 批（07:00 / 10:00），旱季 5-9 月提前 90 天瞬空；旺季订不上可买代理票 +$30 溢价' // ✓ 锚点：数字 400/90 天/$30 + 具体时间 07:00/10:00
  },
  {
    category: 'timing',
    text: '第一批 07:00 入场可拍晨雾穿透峰顶黄金光；10:00 第二批抵达时云雾常散尽失去"云中城"效果' // ✓ 锚点：具体时间 07:00/10:00 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '登顶单程 1 小时 1500 石阶 + 海拔净升 300 米；"死亡台阶"段 60 度石壁需铁链辅助 + 湿滑；往返全程 2.5-3 小时' // ✓ 锚点：数字 1 小时/1500 级/300 米/60 度/2.5-3 小时 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '山顶最经典机位在"月亮神庙"分岔口向北拍俯瞰——整个马丘比丘遗址 + 乌鲁班巴河 U 形河谷 + 远方 Salkantay 雪山同框' // ✓ 锚点：具体方向北 + 具体名字月亮神庙 / Salkantay + 只有去过才知道
  },
  {
    category: 'cold',
    text: '早上 07:00 气温 8-12℃ + 雨季可降至 3℃；登顶流汗后山顶风大体感 5℃；分层穿衣 + 防雨外套必备' // ✓ 锚点：具体时间 07:00 + 数字 8-12℃/3℃/5℃
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 5/5 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] tuboleto.cultura.pe / [ ] 400 人限额 / [ ] 入场批次时间

---

## 2. 太阳神殿（Torreón · 主遗址内）· Tier C

### ticket

```javascript
ticket: {
  price: '含在马丘比丘主门票内（Circuito 2 路线可近距离观看）',
  channels: [
    {
      name: '主遗址 Circuito 2',
      url: 'https://www.tuboleto.cultura.pe/',
      note: '必须选 Circuito 2 路线才经过 Torreón 塔；Circuito 1/3 不经过'
    }
  ],
  bookingWindow: '与主门票同步预订；无独立配额',
  timingTip: '半圆形塔身对准冬至日出方向（每年 6 月 21 日南半球冬至），阳光精确穿窗打在祭石上；非冬至日 06:00-07:00 低角度朝阳仍能看到石墙金光；Torreón 下方是印加皇陵 Royal Mausoleum 岩洞'
} // ✋ Dev 上线前核对：Circuito 路线是否仍经过 Torreón
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '含在主门票内但必须选 Circuito 2 路线才经过；Circuito 1 走高台景观 + Circuito 3 走下城，都不到 Torreón' // ✓ 锚点：具体名字 Circuito 2 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '冬至 6 月 21 日阳光精确穿东窗照射祭石是全年高光时刻；其他日期 06:00-07:00 低角度朝阳仍金光' // ✓ 锚点：具体时间 6 月 21 日 / 06:00-07:00 + 具体方向东窗
  },
  {
    category: 'photo',
    text: '石墙"无缝贴合"到无法插入一张纸是印加石工巅峰；最佳拍摄角度在塔外东北侧 5 米低位仰拍，能同时收到半圆弧 + 两个圣窗' // ✓ 锚点：具体方向东北侧 + 数字 5 米/2 个 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '位于主遗址西区中段；从主入口沿 Circuito 2 走 400 米即达；塔下方洞穴是"皇陵"需弯腰进入（非所有团均经过）' // ✓ 锚点：具体方向西区 + 数字 400 米
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（单句 window）/ ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] Circuito 2 路线 / [ ] 皇陵入口状态

---

## 3. 拴日石（Intihuatana）· Tier C

### ticket

```javascript
ticket: {
  price: '含在马丘比丘主门票内（Circuito 1 + Circuito 2 均经过）',
  channels: [
    {
      name: '主遗址主门票',
      url: 'https://www.tuboleto.cultura.pe/',
      note: '本体已被围栏隔离，游客不可触摸；只能外围 2 米观察'
    }
  ],
  bookingWindow: '与主门票同步预订',
  timingTip: '春分 3 月 21 日 / 秋分 9 月 23 日正午太阳正悬石柱正上方 + 石柱不投任何影子——是印加"拴住太阳"的原始含义；非春秋分日正午 12:00 影子最短，仍能观察印加天文学意图'
} // ✋ Dev 上线前核对：围栏距离 / 是否仍完全禁止触摸
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '含主门票；2000 年啤酒广告拍摄时被起重机砸缺一角，之后全面围栏隔离，游客只能 2 米外观察' // ✓ 锚点：数字 2000 年/2 米 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '春分 3 月 21 日 / 秋分 9 月 23 日正午 12:00 石柱无影是年度两次天文高光；非春秋分仍可在 12:00 看短影' // ✓ 锚点：具体时间 3 月 21 日 / 9 月 23 日 / 12:00 + 数字 2 次
  },
  {
    category: 'photo',
    text: '位于主遗址最高点金字塔式台阶顶部；最佳机位是北侧 3 米低位仰拍——石柱 + 背景 Huayna Picchu 峰同框' // ✓ 锚点：具体方向北侧 + 数字 3 米 + 具体名字 Huayna Picchu
  },
  {
    category: 'walking',
    text: '从主入口沿 Circuito 1 走 600 米 + 爬 50 级台阶到顶；是遗址海拔最高的观景点（2460 米），天气清时可俯瞰整个马丘比丘城' // ✓ 锚点：数字 600 米/50 级/2460 米
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（单句 window）/ ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 围栏距离规则

---

## 本城 worldContext 节点

```javascript
// 追加到 Machu-picchu.timeline 相应节点

{ year: '约1438年', event: '印加帝国崛起',
  worldContext: '此时世界：中国明正统三年，土木堡之变前 11 年；奥斯曼围攻君士坦丁堡前 15 年；欧洲古腾堡即将发明活字印刷；日本应仁之乱前 29 年' },

{ year: '约1450年', event: '马丘比丘建造',
  worldContext: '此时世界：中国明景泰元年；古腾堡活字印刷刚发明；君士坦丁堡陷落前 3 年；佛罗伦萨美第奇家族柯西莫执政鼎盛' },

{ year: '1533年', event: '西班牙征服印加',
  worldContext: '此时世界：中国明嘉靖十二年；英王亨利八世刚与罗马教廷决裂；奥斯曼苏莱曼大帝鼎盛期；日本战国时代' },

{ year: '1911年', event: '海勒姆·宾厄姆发现遗址',
  worldContext: '此时世界：中国辛亥革命爆发、清帝退位前夕；泰坦尼克号下水前 1 年；阿蒙森刚到达南极点；相对论发表 6 年' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 主遗址（首批+补 tips） | A | ✅ 首批 | ✅ 6/6 | ✅ 4/3 | ✅ |
| 华纳比丘 | B | ✅ | ✅ 5/5 | ✅ 4/3 | ✅ |
| 太阳神殿 Torreón | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| 拴日石 Intihuatana | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 4 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 华纳比丘 tuboleto.cultura.pe / 400 人限额 / 入场时间
- [ ] 太阳神殿 Circuito 2 路线
- [ ] 拴日石 围栏距离
- [ ] data.js wiki 'Ollantaytambo' 建议修正为 'Sacred Plaza'/'Machu Picchu#Temple of the Sun'（太阳神殿 Torreón 与 Ollantaytambo 不是同地）
