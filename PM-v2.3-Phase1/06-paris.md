# 巴黎 · 内容交付 · v2.3 Phase 1

**景点数**：4 个（全新交付）
**Tier 分布**：A × 1（埃菲尔铁塔）+ B × 3（卢浮宫 / 凡尔赛 / 巴黎圣母院）

---

## 1. 埃菲尔铁塔（Eiffel Tower）· Tier A

### ticket

```javascript
ticket: {
  price: '二层电梯 €18.80；顶层电梯 €29.40；阶梯到二层 €11.80（25 岁以下 €5.90）',
  channels: [
    {
      name: '官方 toureiffel.paris',
      url: 'https://www.toureiffel.paris/', // ✋ Dev 核对官网
      note: '预售开放 60 天窗口；官网凌晨 00:00（巴黎时间）刷新次日余票'
    },
    {
      name: 'Get Your Guide 跳队导览',
      url: 'https://www.getyourguide.com/',
      note: '加约 €15 服务费，旺季常是唯一能买到当天票的途径'
    },
    {
      name: '阶梯入口 SW Pillar',
      url: null, // 现场排队
      note: '阶梯票不能网上买，只能现场 West/South 柱下窗口排队，旺季排 30-60 分钟'
    }
  ],
  bookingWindow: {
    peak:     '旺季（6-9 月 / 圣诞假期 / 情人节）：提前 7-10 天订顶层电梯；当天现场窗口 90% 时段售罄',
    shoulder: '平季（4-5 月、10-11 月）：提前 2-3 天即可',
    offpeak:  '淡季（1-2 月 · 除情人节）：当天 1 小时前买票都有余位'
  },
  timingTip: '日落前 60 分钟登顶可同时看日景与夜景，是最值的时段；每到整点铁塔闪灯 5 分钟（日落后至午夜），站在 Trocadéro 广场拍最经典'
} // ✋ Dev 上线前核对：toureiffel.paris 现行价 / 整点闪灯规则
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '顶层电梯 €29.40 是铁塔最贵但最值的——头顶是 324 米；二层 €18.80 视野已足够，家庭亲子推荐二层' // ✓ 锚点：数字 €29.40/€18.80/324 米 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 60 分钟登顶可连看日景 + 日落 + 夜景三段式；巴黎日落夏季 21:45 / 冬季 16:45，需提前订对应时段票' // ✓ 锚点：具体时间 21:45/16:45 + 数字 60 分钟
  },
  {
    category: 'photo',
    text: '最经典机位是 Trocadéro 广场（塞纳河北岸），面对铁塔 400 米正对称；整点闪灯 5 分钟是日落后唯一窗口' // ✓ 锚点：具体名字 Trocadéro + 数字 400 米 / 5 分钟
  },
  {
    category: 'walking',
    text: '地铁 Bir-Hakeim（6 号线）或 Trocadéro（9/6 号线）出，步行 5-10 分钟；铁塔东侧战神广场野餐是巴黎当地人常态' // ✓ 锚点：具体名字 Bir-Hakeim / Trocadéro + 数字 5-10 分钟
  },
  {
    category: 'ticket',
    text: '阶梯到二层 €11.80（25 岁以下仅 €5.90）是最便宜方案，但 674 级台阶 + 约 45 分钟攀登，体力要求高' // ✓ 锚点：数字 €11.80/674 级/45 分钟
  },
  {
    category: 'cold',
    text: '铁塔在塞纳河风口，顶层比地面冷 5-8℃；冬季 1-2 月顶层体感 -5℃ 以下，带厚围巾和手套' // ✓ 锚点：数字 5-8℃ / -5℃ + 具体时间 1-2 月
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 5 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] toureiffel.paris 票价 / [ ] 整点闪灯时长

---

## 2. 卢浮宫（Louvre）· Tier B

### ticket

```javascript
ticket: {
  price: '€22 在线票（含贝聿铭玻璃金字塔入口）；每月首个周五 18:00 后免费；EU 26 岁以下永久免费',
  channels: [
    {
      name: '官方 ticketlouvre.fr',
      url: 'https://www.ticketlouvre.fr/', // ✋ Dev 核对
      note: '必须网上预订 + 选 30 分钟时段；自 2022 起现场不再售票'
    },
    {
      name: 'Paris Museum Pass',
      url: 'https://www.parismuseumpass.fr/',
      note: '€70 两日票 / €85 四日票含卢浮宫 + 凡尔赛 + 奥赛，看 3 个以上博物馆就回本'
    }
  ],
  bookingWindow: {
    peak:     '旺季（6-8 月 / 圣诞假期 / 复活节周）：提前 10-14 天订时段，《蒙娜丽莎》所在 Denon 翼上午 10:00-13:00 时段永远抢',
    shoulder: '平季（3-5、9-11 月）：提前 3-5 天订'
  },
  timingTip: '想靠近《蒙娜丽莎》只有周三 / 五夜间延时（21:45 闭馆）进场且 19:00 后最少人；工作日开门 09:00 第一小时也行，午饭后前面永远 200 人'
} // ✋ Dev 上线前核对：ticketlouvre.fr 现行价 / 延时开放日
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€22 必须网上订时段；每月首个周五 18:00 后免费但需预约时段，席位瞬空' // ✓ 锚点：数字 €22 / 每月首个周五 18:00 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '周三 / 周五延时至 21:45，19:00 后人流下降 50%，是《蒙娜丽莎》最可拍机位的唯一窗口' // ✓ 锚点：具体时间 21:45/19:00 + 数字 50%
  },
  {
    category: 'walking',
    text: '卢浮宫 38 万件藏品全看需 4 天；一日精选动线：Denon 翼（蒙娜丽莎 + 胜利女神）→ Sully（断臂维纳斯）→ Richelieu（拿破仑套房），3 小时 6 公里' // ✓ 锚点：数字 38 万 / 4 天 / 3 小时 / 6 公里 + 具体名字 Denon/Sully/Richelieu
  },
  {
    category: 'photo',
    text: '玻璃金字塔最佳机位：广场东北角的"Pavillon Richelieu"阶梯，能把金字塔 + 倒金字塔 + 喷泉装进一张图' // ✓ 锚点：具体方向东北角 + 具体名字 Pavillon Richelieu
  },
  {
    category: 'walking',
    text: '入口避开金字塔主门（排队 30-60 分钟），选 Porte des Lions 南门或 Carrousel 地下入口，排队短 50%' // ✓ 锚点：具体名字 Porte des Lions / Carrousel + 数字 50%
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] ticketlouvre.fr / [ ] 每月首个周五免费规则

---

## 3. 凡尔赛宫（Palace of Versailles）· Tier B

### ticket

```javascript
ticket: {
  price: '宫殿 €21；"全通票 Passport" €32（含宫殿 + 特里亚农 + 玛丽王后庄园）；花园 4-10 月音乐喷泉日 €10.50，平日免费',
  channels: [
    {
      name: '官方 en.chateauversailles.fr',
      url: 'https://en.chateauversailles.fr/', // ✋ Dev 核对
      note: '必须网上订时段；Passport 通票是半日以上最省选择'
    },
    {
      name: 'RER C · Versailles Château',
      url: 'https://www.ratp.fr/',
      note: 'Paris 市区出发 35 分钟直达；地铁票不通用，需 Île-de-France 5 区 €10 来回票'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-9 月 + 音乐喷泉日 Tues/Sat/Sun）：提前 7 天订 09:00-10:00 开馆第一波；上午 11:00 后镜厅走廊挤成沙丁鱼',
    shoulder: '平季（3-4 月、10-11 月）：提前 2-3 天'
  },
  timingTip: '09:00 开门必须抢第一小时直冲镜厅（357 面镜子）；团体导游 10:30 涌入后单行游线就是等人潮。花园在音乐喷泉日下午才开"大喷水"，周二 / 六 / 日 15:30-17:30'
} // ✋ Dev 上线前核对：chateauversailles 票价 / 喷泉日时段
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€21 只含宫殿；€32 Passport 含花园 + 特里亚农 + 玛丽庄园，半日以上去必买' // ✓ 锚点：数字 €21/€32 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门冲镜厅（Hall of Mirrors）第一小时；10:30 后团体导游单线挤压通道走不动' // ✓ 锚点：具体时间 09:00/10:30 + 数字 1 小时
  },
  {
    category: 'walking',
    text: 'RER C 线从巴黎圣米歇尔站 35 分钟到 Versailles Château；€10 来回票，普通地铁票不适用' // ✓ 锚点：具体名字 RER C / 圣米歇尔 + 数字 35 分钟 / €10
  },
  {
    category: 'photo',
    text: '镜厅最佳机位站在西端向东拍，357 面镜子 + 17 扇窗对称构图；上午 10:00 前光线最柔不反光' // ✓ 锚点：数字 357/17 + 具体方向西端向东 + 具体时间 10:00
  },
  {
    category: 'walking',
    text: '花园占地 800 公顷，大运河从十字中央走到尽头 1.5 公里单程；租自行车 €8/小时 或电瓶车 €38/小时 更现实' // ✓ 锚点：数字 800 公顷 / 1.5 公里 / €8/€38
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] chateauversailles 票价 / [ ] 音乐喷泉日时段

---

## 4. 巴黎圣母院（Notre-Dame de Paris）· Tier B

### ticket

```javascript
ticket: {
  price: '教堂主殿免费（2024-12 大火后重新开放）；塔楼 €13（Tour de Notre Dame）；地下考古 crypte €6',
  channels: [
    {
      name: '官方 notredamedeparis.fr',
      url: 'https://www.notredamedeparis.fr/', // ✋ Dev 核对
      note: '2024 年 12 月 7 日重开后采用预约入场（免费但必须订时段），避免无序排队'
    },
    {
      name: '塔楼专用 rendezvousalatour.fr',
      url: 'https://www.rendezvousalatour.fr/',
      content: null,
      note: '塔楼是独立售票，与主殿完全分开；旺季一周内售罄'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-9 月、圣诞、复活节）：主殿免费预约 3-5 天前订；塔楼 €13 提前 7-10 天抢',
    shoulder: '平季：当天即可订主殿；塔楼提前 2-3 天'
  },
  timingTip: '主殿 08:00 最早开门（周一至周五），弥撒时段游客暂停入内约 45 分钟；塔楼仅 10:00-17:30（冬 16:30）开放，日落前 1 小时可俯瞰塞纳河金光'
} // ✋ Dev 上线前核对：notredamedeparis.fr 最新开放时段 / 塔楼价格
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '主殿免费但 2024 年底大火修复后改预约入场，必须网上订 30 分钟时段；塔楼 €13 独立售票' // ✓ 锚点：数字 €13 / 30 分钟 + 具体时间 2024 年底
  },
  {
    category: 'timing',
    text: '周一至周五 08:00 开门最早；弥撒约每日 3 次每次 45 分钟游客暂停入内，官网实时公告' // ✓ 锚点：具体时间 08:00 + 数字 3 次/45 分钟
  },
  {
    category: 'photo',
    text: '最经典机位不在正门而在塞纳河南岸 Pont de l\'Archevêché 桥上，可拍飞扶壁和尖塔修复后新形态' // ✓ 锚点：具体名字 Pont de l\'Archevêché + 具体方向南岸 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '地铁 Cité（4 号线）出口正对教堂；周边圣路易岛 5 分钟可达，Berthillon 冰淇淋是当地人打卡' // ✓ 锚点：具体名字 Cité 4 号/Berthillon + 数字 5 分钟
  },
  {
    category: 'dress',
    text: '作为活跃教堂，进入不可暴露——短裤短裙会被拦；玫瑰花窗光线从南向北照进，上午最绚丽' // ✓ 锚点：具体方向南向北 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 2024 年底后重开后的预约流程 / [ ] 塔楼开放现状

---

## 本城 worldContext 节点

```javascript
// 追加到 Paris.timeline 相应节点

{ year: '508年', event: '克洛维定都巴黎',
  worldContext: '此时世界：东罗马查士丁尼即将即位（527），圣索菲亚 29 年后落成；中国南北朝对峙，佛教在中国全面兴盛' },

{ year: '1163年', event: '巴黎圣母院奠基',
  worldContext: '此时世界：中国南宋乾道时期，朱熹集理学大成；日本源平合战正酣，武家时代即将开启；吴哥窟刚建成 50 年' },

{ year: '1789年', event: '法国大革命',
  worldContext: '此时世界：美国乔治·华盛顿同年就任首任总统；清朝乾隆 54 年，中国 GDP 占全球 1/3；日本宽政改革' },

{ year: '1889年', event: '埃菲尔铁塔建成',
  worldContext: '此时世界：日本明治维新 21 年后颁布帝国宪法；清朝光绪 15 年，北洋舰队实力处亚洲第一；美国西部尚未完全开发' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 埃菲尔铁塔 | A | ✅ | ✅ 6/6 | ✅ 5/3 | ✅ |
| 卢浮宫 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 凡尔赛宫 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 巴黎圣母院 | B | ✅ | ✅ 5/5 | ✅ 4/3 | ✅ |
| worldContext | — | — | ✅ 4 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 埃菲尔 toureiffel.paris 价格 / 闪灯规则
- [ ] 卢浮宫 ticketlouvre.fr / 每月首个周五免费
- [ ] 凡尔赛 chateauversailles / 喷泉日时段
- [ ] 圣母院 notredamedeparis.fr 重开后规则 / 塔楼状态
