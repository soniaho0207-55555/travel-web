# 伊斯坦布尔 · 内容交付 · v2.3 Phase 1

**景点数**：4 个（圣索菲亚已首批交付，此处补 3 个）
**Tier 分布**：B × 2（蓝色清真寺 / 托普卡帕宫）+ C × 1（大巴扎）

---

## 1. 蓝色清真寺（Sultan Ahmed Mosque）· Tier B

### ticket

```javascript
ticket: {
  price: '免费进入；鞋套与塑料袋入口免费提供',
  channels: [
    {
      name: '官方说明 sultanahmetcamii.org',
      url: 'https://www.sultanahmetcamii.org/', // ✋ Dev 核对官网域名
      note: '不售票，但礼拜时段（每日 5 次 + 周五主麻）关闭游客入口，须按官网时刻表'
    },
    {
      name: 'GetYourGuide 联游（含圣索菲亚）',
      url: 'https://www.getyourguide.com/',
      note: '€30 左右半日游含导游与两座大建筑对比讲解'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-10 月）：无需订票但选时段——礼拜结束后 15 分钟入场人最少',
    shoulder: '淡季（11-3 月）：任何时段基本无排队'
  },
  timingTip: '周五 12:30-14:00 主麻礼拜严格闭门不对游客开放；想看照进 6 根宣礼塔的光晕选日出后 1 小时（夏季 06:30 / 冬季 08:30）东侧入口拍摄'
} // ✋ Dev 上线前核对：官网是否持续维护 / 礼拜时刻表
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '完全免费，但必须避开每日 5 次礼拜；官网 sultanahmetcamii.org 右上角实时显示下次关闭时间' // ✓ 锚点：具体名字 sultanahmetcamii.org + 数字 5 次
  },
  {
    category: 'dress',
    text: '女性必须遮盖头发与肩膀，入口处免费借头巾；短裤 / 短裙会被拦下，建议围巾随身' // ✓ 锚点：只有去过才知道 + 具体细节（免费借）
  },
  {
    category: 'timing',
    text: '周五 12:30-14:00 主麻全程关闭；其他日子礼拜约 15-20 分钟一次，结束后先等 15 分钟再入场最空' // ✓ 锚点：具体时间 12:30-14:00 + 数字 15 分钟
  },
  {
    category: 'photo',
    text: '从圣索菲亚前的苏丹艾哈迈德广场正面看 6 根宣礼塔最对称，日落后 20 分钟灯光点亮是黄金时刻' // ✓ 锚点：具体名字苏丹艾哈迈德广场 + 数字 6 根 / 20 分钟
  },
  {
    category: 'walking',
    text: '与圣索菲亚隔广场相望步行 3 分钟，建议上午圣索菲亚 + 下午蓝色清真寺，两者光线方向相反' // ✓ 锚点：数字 3 分钟 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 5 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] sultanahmetcamii.org 可用性 / [ ] 周五礼拜时段

---

## 2. 托普卡帕宫（Topkapı Palace）· Tier B

### ticket

```javascript
ticket: {
  price: '主宫 €35；后宫（Harem）加 €14；圣髑展区加 €14；全通票 €55',
  channels: [
    {
      name: '官方 muze.gov.tr',
      url: 'https://muze.gov.tr/', // ✋ Dev 核对托普卡帕子路径
      note: '土耳其文化旅游部统一售票；提前 15 天开放预约'
    },
    {
      name: 'Museum Pass Istanbul',
      url: 'https://muze.gen.tr/',
      note: '€105 五日通票含托普卡帕 + 圣索菲亚 + 考古博物馆，逛三处以上就回本'
    }
  ],
  bookingWindow: {
    peak:     '旺季（4-10 月）：提前 7-10 天，周末与法定节假日常售罄；后宫时段票尤紧',
    shoulder: '淡季（11-3 月、除圣诞周）：提前 2-3 天即可'
  },
  timingTip: '09:00 开园第一小时进主宫，10:30 后团队旅游巴士抵达；后宫必须单独预约时段，进园后立即去 Harem 售票处锁时间——中午之后只剩 15:00 后余票'
} // ✋ Dev 上线前核对：muze.gov.tr 托普卡帕价格 / 后宫时段制度
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€35 主宫 + €14 后宫是必配——后宫才有苏丹私生活精华；只买主宫像去故宫不进内廷' // ✓ 锚点：数字 €35/€14 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开园后前 60 分钟人最少；后宫时段票旺季必须进园立刻抢，11:00 后只能选 15:00 后时段' // ✓ 锚点：具体时间 09:00/11:00/15:00 + 数字 60 分钟
  },
  {
    category: 'walking',
    text: '整个宫殿区 70 万平米分四个庭院，全看需 4-5 小时；想精简走第一 + 第三 + 第四庭院 + 后宫即可' // ✓ 锚点：数字 70 万 / 4-5 小时 + 具体名字第三第四庭院
  },
  {
    category: 'photo',
    text: '第四庭院的 Baghdad Kiosk 凉亭朝北望金角湾与加拉塔塔同框，是整个宫殿最佳观景位' // ✓ 锚点：具体名字 Baghdad Kiosk / 加拉塔塔 + 具体方向朝北
  },
  {
    category: 'ticket',
    text: '闭馆日是周二；旺季一日五票型全要 €55 通票，淡季选主宫 + 后宫 €49 即可' // ✓ 锚点：数字 €55/€49 + 具体时间周二
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] muze.gov.tr 子路径 / [ ] 后宫时段制度现行状态

---

## 3. 大巴扎（Grand Bazaar）· Tier C

### ticket

```javascript
ticket: {
  price: '免费入场；内含 60 条街 4000 间店铺',
  channels: [
    {
      name: '官方 kapalicarsi.com.tr',
      url: 'https://www.kapalicarsi.com.tr/', // ✋ Dev 核对
      note: '无需购票；官网提供 21 个入口地图，Nuruosmaniye 门是最老入口'
    }
  ],
  bookingWindow: '无需预约；周日全天闭馆 / 周一至周六 08:30-19:00',
  timingTip: '周一上午 10:00 商家刚开店精神最足议价空间最大；周六下午 14:00 后当地人扎堆异常拥挤；斋月期间 18:00 后开斋仪式全部店铺停业 40 分钟'
} // ✋ Dev 上线前核对：官网是否维护 / 营业时间
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '完全免费；周日全天关闭，周一至周六 08:30 开门 19:00 关门' // ✓ 锚点：具体时间 08:30/19:00 + 具体时间周日关
  },
  {
    category: 'timing',
    text: '周一上午 10:00-12:00 是议价黄金窗口——商家刚开张急于开单，砍到标价 40-50% 常见' // ✓ 锚点：具体时间周一 10:00-12:00 + 数字 40-50%
  },
  {
    category: 'walking',
    text: 'Nuruosmaniye 东门进入是主干道 Kalpakçılar Caddesi 的起点，金饰店集中；想买地毯直走 150 米右转 Sandal Bedesten' // ✓ 锚点：具体名字 Kalpakçılar / Sandal Bedesten + 数字 150 米
  },
  {
    category: 'walking',
    text: '带现金里拉，大部分小店不刷卡或加 8% 手续费；ATM 在巴扎各入口都有' // ✓ 锚点：数字 8% + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（单句 window）/ ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] kapalicarsi.com.tr 现状 / [ ] 营业时间

---

## 本城 worldContext 节点

```javascript
// 追加到 Istanbul.timeline 相应节点

{ year: '公元前657年', event: '拜占庭城建立',
  worldContext: '此时世界：中国春秋时代孔子出生前 106 年；印度佛陀出生前 100 年；罗马刚结束王政时代' },

{ year: '公元330年', event: '君士坦丁堡建都',
  worldContext: '此时世界：中国西晋刚统一 50 年；玛雅古典期开端；印度笈多王朝即将建立' },

{ year: '1204年', event: '第四次十字军劫掠',
  worldContext: '此时世界：中国南宋偏安，金朝统治北方；成吉思汗正在统一蒙古诸部；玛雅古典期已崩溃' },

{ year: '1453年', event: '奥斯曼攻陷君士坦丁堡',
  worldContext: '此时世界：明朝土木堡之变后 4 年，大明国力从鼎盛转衰；佛罗伦萨美第奇家族掌权；古腾堡印刷术改变欧洲' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 蓝色清真寺 | B | ✅ | ✅ 5/5 | ✅ 5/3 | ✅ |
| 托普卡帕宫 | B | ✅ | ✅ 5/5 | ✅ 4/3 | ✅ |
| 大巴扎 | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 4 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 蓝色清真寺 sultanahmetcamii.org / 周五礼拜时段
- [ ] 托普卡帕宫 muze.gov.tr 子路径 / 后宫时段制度
- [ ] 大巴扎 kapalicarsi.com.tr / 营业时间
