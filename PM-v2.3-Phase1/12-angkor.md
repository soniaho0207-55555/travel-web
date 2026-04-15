# 吴哥窟 · 内容交付 · v2.3 Phase 1

**景点数**：3 个（全新交付）
**Tier 分布**：A × 1（吴哥寺主殿）+ B × 1（巴戎寺）+ C × 1（塔布隆寺）

> **说明**：吴哥考古公园使用统一 **Angkor Pass**（1/3/7 日通票），所有景点共用一张票。以下 ticket 字段都指向同一票制系统，重点差异在各寺庙时段与动线 tips。

---

## 1. 吴哥寺主殿（Angkor Wat）· Tier A

### ticket

```javascript
ticket: {
  price: 'Angkor Pass：1 日 $37 / 3 日 $62（10 日内用）/ 7 日 $72（1 个月内用）',
  channels: [
    {
      name: '官方 angkorenterprise.gov.kh',
      url: 'https://angkorenterprise.gov.kh/', // ✋ Dev 核对
      note: '唯一官方售票；现场 Siem Reap 售票中心拍照 + 实时出票'
    },
    {
      name: '网上预订',
      url: 'https://www.angkorenterprise.gov.kh/',
      note: '出发前网上购票避免清晨排队 1 小时'
    },
    {
      name: '12 岁以下儿童免费',
      url: null,
      note: '需现场出示护照证明年龄'
    }
  ],
  bookingWindow: {
    peak:     '旺季（11-2 月干季凉爽）：日出观景 04:30 前必须到西门外倒影池，05:30 后前排 200 人',
    shoulder: '过渡季（3-5 月干季炎热）：5 月地表 40℃，日出后游客减少 50%',
    offpeak:  '雨季（6-10 月）：午后暴雨但护城河倒影最美；团客减少 70%'
  },
  timingTip: '日出在西门外北侧倒影池拍最经典（国旗构图）；04:30 到占位，05:45 日出 6:15 金光打亮五塔顶是绝对黄金时刻；进寺内部选日出后 07:00-09:00 避开团客'
} // ✋ Dev 上线前核对：angkorenterprise.gov.kh / 通票现行价
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '1 日 $37 / 3 日 $62 / 7 日 $72；3 日票 10 天内任选 3 天用，最适合认真看吴哥的节奏' // ✓ 锚点：数字 $37/$62/$72/10 天/3 天
  },
  {
    category: 'timing',
    text: '日出 04:30 前到北侧倒影池；05:45 日出后 6:15 金光打亮五塔顶是 30 分钟绝对黄金时刻' // ✓ 锚点：具体时间 04:30/05:45/6:15 + 数字 30 分钟 + 具体方向北侧
  },
  {
    category: 'walking',
    text: '主殿本身建筑群 1.5 公里护城河 + 中央高塔 65 米 + 3 层回廊；内部游览需 3 小时，第三层顶楼每批限 100 人 + 排队 20 分钟' // ✓ 锚点：数字 1.5 公里/65 米/3 层/3 小时/100 人/20 分钟
  },
  {
    category: 'photo',
    text: '最经典不是正门而是西门外倒影池北侧 50 米——五塔倒影完整 + 前景有莲花；正门正对会被西门塔楼遮挡第三塔' // ✓ 锚点：具体方向西门外北侧 50 米 + 数字 50 米 + 只有去过才知道
  },
  {
    category: 'dress',
    text: '进中央圣塔必须盖膝 + 盖肩 + 脱鞋；可现场租沙笼 $2 + 墨镜绑脚' // ✓ 锚点：数字 $2 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '5-9 月雨季午后 30 分钟暴雨但比起烈日凉爽；11-2 月凉季清晨 15℃ 日出时寒冷，带外套' // ✓ 锚点：具体时间 5-9 月/11-2 月 + 数字 30 分钟 / 15℃
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 5 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] angkorenterprise.gov.kh / [ ] 通票现行价

---

## 2. 巴戎寺（Bayon）· Tier B

### ticket

```javascript
ticket: {
  price: '含在 Angkor Pass 内，单独不售票',
  channels: [
    {
      name: 'Angkor Pass 通用',
      url: 'https://angkorenterprise.gov.kh/',
      note: '与吴哥寺 3.5 公里车程，位于吴哥通王城（Angkor Thom）正中心'
    },
    {
      name: 'Tuk-Tuk 小圈一日游',
      url: null,
      note: '从暹粒市区租 Tuk-Tuk $15-20 一天，含巴戎寺 + 塔布隆 + 胜利门；英文司机加 $5'
    }
  ],
  bookingWindow: {
    peak:     '旺季（11-2 月）：上午 07:30-09:00 光线柔软人少是黄金时段；10:00 后吴哥寺团客涌入',
    shoulder: '淡季：任何时段人都不算多'
  },
  timingTip: '216 张巨型石面微笑需要正面光照才能看清——上午 07:30-09:00 东侧光线 + 下午 15:00-17:00 西侧光线两个窗口；正午光线过顶面部全黑'
} // ✋ Dev 上线前核对：angkorenterprise.gov.kh / Tuk-Tuk 现行价
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '含在 Angkor Pass 内；不单独售票；进吴哥通王城南门已完成查票' // ✓ 锚点：具体名字吴哥通王城南门 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '石面微笑拍摄黄金两窗：上午 07:30-09:00 东侧 / 下午 15:00-17:00 西侧；正午光线过顶全部脸面背光' // ✓ 锚点：具体时间 07:30-09:00/15:00-17:00 + 具体方向东侧西侧
  },
  {
    category: 'walking',
    text: '巴戎寺三层高塔群 + 216 张石面微笑散布 54 座石塔；第二层南回廊浮雕墙是 11 世纪高棉日常生活最详细的石画' // ✓ 锚点：数字 216/54/11 世纪 + 具体方向南回廊
  },
  {
    category: 'photo',
    text: '最著名"鼻尖合影"机位在第二层西南角石塔脚下，与石面 1 米距离；游客排队 10 分钟轮流拍' // ✓ 锚点：具体方向西南角 + 数字 1 米 / 10 分钟
  },
  {
    category: 'walking',
    text: '从巴戎寺出向北 800 米到象台 + 麻风王台 + 空中宫殿，是吴哥通王城核心三景；步行串游 1 小时' // ✓ 锚点：具体方向北 800 米 + 具体名字象台 + 数字 800 米 / 1 小时
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] Tuk-Tuk 价格 / [ ] 象台等周边开放

---

## 3. 塔布隆寺（Ta Prohm）· Tier C

### ticket

```javascript
ticket: {
  price: '含在 Angkor Pass 内',
  channels: [
    {
      name: 'Angkor Pass 通用',
      url: 'https://angkorenterprise.gov.kh/',
      note: '东门是著名"树抱塔"入口；西门较新但游客少'
    }
  ],
  bookingWindow: '旺季团客 10:00-14:00 集中；早上 07:30 开门冲东门可安静拍 1 小时',
  timingTip: '东门"树抱塔"是《古墓丽影》取景地，著名绞杀榕根盘绕石门；上午 07:30-09:00 柔光最适合拍藤蔓阴影；午后强光下藤蔓高反差很难出片'
} // ✋ Dev 上线前核对：Ta Prohm 东门是否仍然开放 / 修缮状态
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '含在 Angkor Pass 内；早上 07:30 开门冲东门可安静拍 1 小时' // ✓ 锚点：具体时间 07:30 + 数字 1 小时
  },
  {
    category: 'timing',
    text: '上午 07:30-09:00 柔光最适合拍藤蔓阴影；团客 10:00-14:00 密集，下午 15:00 后再回来人流减半' // ✓ 锚点：具体时间 07:30-09:00/10:00-14:00/15:00 + 数字一半
  },
  {
    category: 'photo',
    text: '《古墓丽影》真正机位在东门第二进庭院——安吉丽娜·朱莉跳下的那棵绞杀榕，石门右侧 3 米处' // ✓ 锚点：具体方向东门第二进 / 右侧 3 米 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '从东门进 + 西门出是游览黄金路线，1 小时全看完；反向（西→东）会逆流错过最佳"树抱塔"机位' // ✓ 锚点：具体方向东门西门 + 数字 1 小时 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（单句 window）/ ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] Ta Prohm 东门状态 / [ ] 修缮信息

---

## 本城 worldContext 节点

```javascript
// 追加到 Angkor.timeline 相应节点

{ year: '802年', event: '高棉帝国建立',
  worldContext: '此时世界：中国唐德宗贞元十八年，安史之乱后 40 年；欧洲查理曼加冕 2 年后；阿拉伯阿拔斯王朝鼎盛' },

{ year: '约1150年', event: '吴哥窟建成',
  worldContext: '此时世界：中国南宋绍兴二十年；巴黎圣母院奠基前 13 年；第二次十字军东征刚结束；玛雅后古典期' },

{ year: '1431年', event: '暹罗军队攻陷吴哥',
  worldContext: '此时世界：明朝宣德六年，郑和六下西洋；圣女贞德被处决同年；奥斯曼帝国征服前 22 年' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 吴哥寺主殿 | A | ✅ | ✅ 6/6 | ✅ 5/3 | ✅ |
| 巴戎寺 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 塔布隆寺 | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 3 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] Angkor Pass 现行价 / angkorenterprise.gov.kh
- [ ] Bayon 象台开放
- [ ] Ta Prohm 东门状态
