# 马拉喀什 · 内容交付 · v2.3 Phase 1

**景点数**：3 个（全新交付）
**Tier 分布**：A × 1（杰玛广场）+ B × 1（库图比亚清真寺）+ C × 1（巴希亚宫）

> **说明**：data.js 顺序是广场 / 清真寺 / 巴希亚宫。把广场作为 Tier A 因为它是非物质文化遗产 + 马拉喀什最有辨识度的"城市体验"。

---

## 1. 德吉玛·艾尔法纳广场（Jemaa el-Fnaa）· Tier A

### ticket

```javascript
ticket: {
  price: '完全免费；夜市摊位消费另计',
  channels: [
    {
      name: 'UNESCO 非遗介绍页',
      url: 'https://ich.unesco.org/', // ✋ Dev 核对 UNESCO Jemaa el-Fnaa 子页
      note: '广场 2001 年列为"人类口头和非物质文化遗产"；说书人 / 耍蛇人 / 炭烤摊延续 1000 年'
    },
    {
      name: '官方 visitmorocco.com',
      url: 'https://www.visitmorocco.com/',
      note: '摩洛哥旅游局官方 + 提供斋月期间特殊规则'
    }
  ],
  bookingWindow: {
    peak:     '旺季（3-5 月 / 9-11 月 / 圣诞假期）：夜市 20:00-23:00 人山人海，想坐屋顶咖啡馆需提前订',
    shoulder: '夏季（6-8 月）：白天 45℃+ 广场空荡，夜晚才复活',
    offpeak:  '斋月期间：白天摊位全关闭；日落 Iftar 时刻后整个广场瞬间爆满，体验独特'
  },
  timingTip: '白天是普通市集 + 耍蛇人 + 说书人（要给 MAD 20 小费）；真正精华在日落后 20 分钟——100 余个炭烤摊 / 蜗牛汤 / 手鼓乐队 / 占星师同时开张，是马拉喀什的魔幻时刻'
} // ✋ Dev 上线前核对：UNESCO 页 / 斋月时段
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '广场完全免费；但被耍蛇人 / 猴子表演 / 纹身师主动拍照后会索要 MAD 20-50 小费，拒绝很难收场' // ✓ 锚点：数字 MAD 20-50 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落后 20 分钟广场从空荡切换为 100 余摊位同时开张，是"城市切换开关"最震撼时刻' // ✓ 锚点：具体时间日落 + 20 分钟 + 数字 100 余
  },
  {
    category: 'photo',
    text: '最佳俯瞰机位是广场西侧 Café Glacier（屋顶餐厅），MAD 30 茶水费坐一下午 + 拍到整个广场 + 库图比亚宣礼塔同框' // ✓ 锚点：具体名字 Café Glacier + 具体方向西侧 + 数字 MAD 30
  },
  {
    category: 'walking',
    text: '广场是老城 Medina 的绝对心脏——向北进 souk（市集）迷宫、向西 300 米到库图比亚、向南 500 米到巴希亚宫，是马拉喀什一日游的起点' // ✓ 锚点：具体方向北西南 + 数字 300 米/500 米 + 具体名字 Medina
  },
  {
    category: 'ticket',
    text: '夜市炭烤摊固定价（Tajine MAD 60 / 羊排 MAD 80 / 鲜榨橙汁 MAD 10-15），但必须先看明码标价的菜单，口头报价常被翻倍' // ✓ 锚点：数字 MAD 60/80/10-15 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '夏季白天 45℃+ 傍晚降至 28-32℃ 体感最好；冬季 12-2 月夜间 8-12℃ 广场凉风需外套' // ✓ 锚点：数字 45℃/28-32℃/8-12℃ + 具体时间夏季冬季
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 5 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] UNESCO 页 / [ ] 斋月时段 / [ ] Café Glacier 现状

---

## 2. 库图比亚清真寺（Koutoubia Mosque）· Tier B

### ticket

```javascript
ticket: {
  price: '免费 · 非穆斯林不可进入内部（摩洛哥全国清真寺均如此）；仅可外观 + 花园',
  channels: [
    {
      name: '花园区域全天开放',
      url: null,
      note: '宣礼塔高 77 米 + 花园玫瑰与橘子树 + 落日金光打塔身'
    },
    {
      name: 'visitmorocco.com 官方介绍',
      url: 'https://www.visitmorocco.com/',
      note: '提供历史背景 + 塔身砂岩不同颜色条纹的建造时期信息'
    }
  ],
  bookingWindow: {
    peak:     '旺季：日落前 30 分钟最多摄影师聚集；花园灯光 20:00 点亮',
    shoulder: '平季：任何时段可去，花园常空'
  },
  timingTip: '日落前 30 分钟塔身金光 + 日落后 30 分钟花园绿灯打亮塔是两个摄影窗口；白天的塔身普通，夜间的塔反而更"马拉喀什"'
} // ✋ Dev 上线前核对：花园开放时间 / 是否仍可免费进入
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '完全免费但非穆斯林不可进内部；花园可自由散步 + 拍照' // ✓ 锚点：只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 30 分钟金光 + 日落后 30 分钟绿灯点亮，白天的塔反而普通' // ✓ 锚点：具体时间日落前后 30 分钟 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '花园南侧 100 米斜角拍塔最能体现 77 米高度 + 四个塔顶小球的层级；正对塔正北角度塔身扁平' // ✓ 锚点：具体方向南侧 100 米/正北 + 数字 77 米 / 100 米 / 4 个
  },
  {
    category: 'walking',
    text: '广场西 300 米步行 5 分钟；花园内绕塔一圈 500 米 + 橘子树沿路 + 旁边王宫花园相通' // ✓ 锚点：具体方向西 + 数字 300 米/500 米/5 分钟
  },
  {
    category: 'dress',
    text: '花园内虽然免费但宗教场所氛围，穿长裤 / 过膝裙更得体；情侣避免高调亲密行为' // ✓ 锚点：只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 花园开放时间

---

## 3. 巴希亚宫（Bahia Palace）· Tier C

### ticket

```javascript
ticket: {
  price: 'MAD 70（约 ¥50）；每日 09:00-17:00 开放',
  channels: [
    {
      name: '现场窗口',
      url: 'https://www.visitmorocco.com/',
      note: '无网上预售系统；现场排队 10-20 分钟；人少时随到随买'
    }
  ],
  bookingWindow: '全年当天买票；斋月时段缩短至 10:00-16:00',
  timingTip: '09:00 开门第一小时人最少可独占每一间房拍照；150 间房全看完需 1.5 小时；中庭的雪松木雕顶棚 + 马赛克瓷砖 + 橘子树庭院是马拉喀什皇家工艺巅峰'
} // ✋ Dev 上线前核对：MAD 70 现行价 / 斋月时段
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: 'MAD 70（约 ¥50）；无网上预售，现场排队 10-20 分钟' // ✓ 锚点：数字 MAD 70/¥50/10-20 分钟
  },
  {
    category: 'timing',
    text: '09:00 开门第一小时人最少；150 间房全看需 1.5 小时；正午后旅游团涌入中庭无法拍空镜' // ✓ 锚点：具体时间 09:00 + 数字 150/1.5 小时
  },
  {
    category: 'walking',
    text: '广场向南 500 米 Medina 内；路线标识极少容易迷路，跟 Google Maps 步行导航走 "Rue Riad Zitoun el Jdid"' // ✓ 锚点：具体名字 Rue Riad Zitoun el Jdid + 数字 500 米 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '主接见厅（Grand Riad）雪松木雕顶棚 + 地面马赛克是全馆最美空间；站在东南角望向西北窗光最柔和' // ✓ 锚点：具体名字 Grand Riad + 具体方向东南望西北
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（单句 window）/ ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] MAD 70 现行价 / [ ] 斋月时段

---

## 本城 worldContext 节点

```javascript
// 追加到 Marrakesh.timeline 相应节点

{ year: '1062年', event: '穆拉比特王朝建城',
  worldContext: '此时世界：中国北宋嘉祐七年，王安石即将变法；诺曼征服英格兰前 4 年；塞尔柱帝国鼎盛' },

{ year: '1147年', event: '穆瓦希德王朝',
  worldContext: '此时世界：中国南宋绍兴十七年；第二次十字军东征刚结束；吴哥窟建成前后；日本平安时代末期' },

{ year: '1557年', event: '萨阿德王朝复兴',
  worldContext: '此时世界：明朝嘉靖三十六年；奥斯曼苏莱曼大帝末期；英国玛丽一世统治；哥白尼《天体运行论》已出版 14 年' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 杰玛广场 | A | ✅ | ✅ 6/6 | ✅ 5/3 | ✅ |
| 库图比亚清真寺 | B | ✅ | ✅ 5/5 | ✅ 4/3 | ✅ |
| 巴希亚宫 | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 3 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 杰玛广场 UNESCO / 斋月 / Café Glacier
- [ ] 库图比亚 花园时间
- [ ] 巴希亚宫 MAD 70 / 斋月
