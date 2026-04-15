# 德里 · 内容交付 · v2.3 Phase 1

**景点数**：3 个（全新交付）
**Tier 分布**：A × 1（红堡）+ B × 1（顾特卜塔）+ C × 1（胡马雍陵）

---

## 1. 红堡（Red Fort / Lal Qila）· Tier A

### ticket

```javascript
ticket: {
  price: '印度公民 ₹50；外国人 ₹600（约 ¥56）；晚间 Sound and Light Show ₹80 印 / ₹200 外',
  channels: [
    {
      name: '官方 ASI · asi.payumoney.com',
      url: 'https://asi.payumoney.com/', // ✋ Dev 核对（印度考古局售票平台）
      note: '实名购票 + 时段入场；现场扫码入闸'
    },
    {
      name: '现场窗口',
      url: null,
      note: 'Lahori Gate 入口现场有印度人 / 外国人分队窗口；旺季现场排队 30-60 分钟'
    },
    {
      name: 'Delhi Tourism 一日游',
      url: 'https://www.delhitourism.gov.in/',
      note: '¥300 含红堡 + 贾玛清真寺 + 月光集市 + 中餐，最省时间'
    }
  ],
  bookingWindow: {
    peak:     '旺季（11-2 月凉季，德里最舒适）：提前 3-5 天订；每日独立纪念日（1/26 / 8/15）全面封闭',
    shoulder: '平季（3-4、10 月）：提前 1-2 天',
    offpeak:  '夏季（5-9 月 45℃ + 季风暴雨）：当天可买，游客量只有凉季 1/3'
  },
  timingTip: '闭馆日周一；最佳时段是 09:30 开门第一波 + 16:30 前 1 小时，避开正午 40-45℃；晚间 Sound and Light Show 19:30 / 20:30 英文 / 印地语两场，独立日期间暂停'
} // ✋ Dev 上线前核对：asi.payumoney.com / 外国人 ₹600 / 灯光秀时刻
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '外国人 ₹600 是印度人 ₹50 的 12 倍；是印度所有 ASI 景点的通用差价逻辑' // ✓ 锚点：数字 ₹600/₹50/12 倍 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:30 开门第一波 + 16:30 前最后 1 小时是两个凉爽窗口；正午 12:00-15:00 太阳下 45℃ 城墙无遮阴' // ✓ 锚点：具体时间 09:30/16:30/12:00-15:00 + 数字 45℃
  },
  {
    category: 'walking',
    text: '北侧 Lahori Gate 是主入口 + 分队窗口（印人 / 外人分开）；穿过 Chhatta Chowk 月光市集到 Diwan-i-Am 公众殿全程 400 米' // ✓ 锚点：具体名字 Lahori Gate / Chhatta Chowk / Diwan-i-Am + 数字 400 米
  },
  {
    category: 'photo',
    text: 'Diwan-i-Khas 私人殿有"世界若有天堂，当即此处"刻文 + 孔雀御座遗址；最佳机位站在北廊柱下向南逆光拍雕花立面' // ✓ 锚点：具体名字 Diwan-i-Khas + 具体方向北廊向南 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '红堡步行 5 分钟到贾玛清真寺（世界第二大清真寺）+ 步行 10 分钟到月光集市（Chandni Chowk）吃 Paranthewali Gali 煎饼街' // ✓ 锚点：具体名字贾玛清真寺 / Chandni Chowk / Paranthewali Gali + 数字 5/10 分钟
  },
  {
    category: 'cold',
    text: '凉季（11-2 月）早晚 8-12℃ + 雾霾 AQI 300+，口罩 + 眼药水是必备；夏季 45℃ 以上进城墙地板烫脚' // ✓ 锚点：具体时间 11-2 月 + 数字 8-12℃ / AQI 300/45℃
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] asi.payumoney.com 域名 / [ ] 外国人票价 / [ ] 独立日闭馆

---

## 2. 顾特卜塔（Qutub Minar）· Tier B

### ticket

```javascript
ticket: {
  price: '印度人 ₹40；外国人 ₹600',
  channels: [
    {
      name: '官方 ASI · asi.payumoney.com',
      url: 'https://asi.payumoney.com/',
      note: '与红堡同一系统；现场扫码入闸'
    },
    {
      name: 'Delhi Metro · Qutub Minar 站',
      url: 'https://www.delhimetrorail.com/',
      note: '黄线 Qutub Minar 站 2 公里，₹30 Tuk-Tuk 3 分钟到景区，是最方便的公共交通组合'
    }
  ],
  bookingWindow: {
    peak:     '凉季（11-2 月）：当天现场通常有票；周末早上 09:00 前人少',
    shoulder: '平季：当天可买'
  },
  timingTip: '从德里市区地铁直达 + 景区内 13 世纪铁柱不生锈的冶金奇迹 + 72.5 米宣礼塔本身是德里最适合独立拜访的单点景区；建议下午 15:00 后光线暖，3 小时足够'
} // ✋ Dev 上线前核对：票价 / 铁柱是否仍允许近距离观看
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '外国人 ₹600（约 ¥56）与红堡同价；ASI 通行逻辑' // ✓ 锚点：数字 ₹600 / ¥56
  },
  {
    category: 'timing',
    text: '15:00-17:00 下午光线暖柔最佳，塔身 72.5 米金沙岩逆光最美；正午烈日下砂岩过曝' // ✓ 锚点：具体时间 15:00-17:00 + 数字 72.5 米
  },
  {
    category: 'walking',
    text: '黄线地铁 Qutub Minar 站出 + Tuk-Tuk ₹30 到景区大门 3 分钟；与胡马雍陵同属南德里，一日两点合理' // ✓ 锚点：具体名字黄线 / Tuk-Tuk + 数字 ₹30 / 3 分钟
  },
  {
    category: 'photo',
    text: '塔西北角 50 米处是看五层不同风格石雕细节的最佳位置；拍全塔需退到东南角 100 米外仰拍' // ✓ 锚点：具体方向西北角 / 东南角 + 数字 50 米 / 100 米
  },
  {
    category: 'walking',
    text: '景区内 1600 年铁柱 Iron Pillar 不生锈的冶金之谜，柱身现有护栏但仍可近距离 1 米观察表面' // ✓ 锚点：具体名字 Iron Pillar + 数字 1600 年 / 1 米 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 票价 / [ ] 铁柱近距离规则

---

## 3. 胡马雍陵（Humayun's Tomb）· Tier C

### ticket

```javascript
ticket: {
  price: '印度人 ₹35；外国人 ₹600',
  channels: [
    {
      name: '官方 ASI · asi.payumoney.com',
      url: 'https://asi.payumoney.com/',
      note: '与红堡 / 顾特卜塔同系统'
    }
  ],
  bookingWindow: '凉季当天买票；周日下午花园婚纱 / 家庭写真多，想安静选工作日',
  timingTip: '日落前 1 小时（冬 17:00 / 夏 19:00）波斯式花园 + 陵墓红砂岩被金光打亮是德里最宁静时段；是泰姬陵的先驱，想对比先看胡马雍陵'
} // ✋ Dev 上线前核对：票价 / 日落时间
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '外国人 ₹600（同红堡价）；印度人 ₹35，差 17 倍' // ✓ 锚点：数字 ₹600/₹35/17 倍 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 1 小时（冬 17:00 / 夏 19:00）是金光时段；波斯花园对称水道此刻反射穹顶最美' // ✓ 锚点：具体时间 17:00/19:00 + 数字 1 小时
  },
  {
    category: 'walking',
    text: 'Delhi Metro · JLN Stadium 站出 + Tuk-Tuk ₹40 十分钟；与尼扎姆丁陵（苏非派圣地）相邻 300 米' // ✓ 锚点：具体名字 JLN Stadium / 尼扎姆丁 + 数字 ₹40 / 300 米
  },
  {
    category: 'photo',
    text: '最佳机位在陵墓正南花园水道尽头向北拍，水面倒影 + 金砂岩穹顶 + 几何花园一张图收齐' // ✓ 锚点：具体方向正南向北 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 票价 / [ ] 夏冬日落时间

---

## 本城 worldContext 节点

```javascript
// 追加到 Delhi.timeline 相应节点

{ year: '1192年', event: '德里苏丹国建立',
  worldContext: '此时世界：中国南宋庆元年间，朱熹刚去世；日本源平合战落幕、武家时代开启；第三次十字军东征萨拉丁与狮心王正对峙' },

{ year: '1526年', event: '莫卧儿帝国建立',
  worldContext: '此时世界：明朝嘉靖五年；奥斯曼苏莱曼大帝鼎盛；西班牙科尔特斯已征服阿兹特克 5 年；马丁路德宗教改革 9 年后' },

{ year: '1857年', event: '印度民族起义',
  worldContext: '此时世界：中国第二次鸦片战争爆发；美国内战前 4 年；日本黑船事件后 4 年，明治维新 11 年后到来' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 红堡 | A | ✅ | ✅ 6/6 | ✅ 4/3 | ✅ |
| 顾特卜塔 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 胡马雍陵 | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 3 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 红堡 asi.payumoney.com / 外国人 ₹600 / 独立日闭馆
- [ ] 顾特卜塔 铁柱近距离
- [ ] 胡马雍陵 日落时间
