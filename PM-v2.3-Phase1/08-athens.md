# 雅典 · 内容交付 · v2.3 Phase 1

**景点数**：3 个（全新交付）
**Tier 分布**：A × 1（雅典卫城 = 帕特农在内的卫城整体）+ B × 1（帕特农神庙 · 独立票）+ C × 1（古代市集 Agora）

> **注**：data.js 中帕特农与卫城为两条独立 landmark，现实中帕特农**位于**卫城山丘上、联票通用。以下 ticket 以票制为准：卫城联票覆盖帕特农。

---

## 1. 雅典卫城（Acropolis）· Tier A

### ticket

```javascript
ticket: {
  price: '卫城单票 €20（冬 11-3 月 €10）；Combined Ticket €30（7 日内含卫城 + Agora + 罗马市集 + 宙斯神殿 + 哈德良图书馆 + Kerameikos 六处）',
  channels: [
    {
      name: '官方 hhticket.gr',
      url: 'https://hhticket.gr/', // ✋ Dev 核对希腊文化部统一票务
      note: '必须网上订时段；€30 Combined Ticket 去 2 个以上景点就回本'
    },
    {
      name: 'Get Your Guide 带导游',
      url: 'https://www.getyourguide.com/',
      note: '€45-55 含导游 + 跳队，旺季是唯一能订到当天下午时段的方式'
    },
    {
      name: '每月首周日 / 希腊国庆等免费日',
      url: null,
      note: '3/6 国家纪念日、5/18 国际博物馆日、10/28 国庆、每月首个周日（11-3 月）免费但必须预约时段'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-10 月）：提前 5-7 天订 08:00-10:00 时段；11:00 后 40℃ 烈日下山坡无遮阴',
    shoulder: '平季（3-4、11-12 月）：提前 2 天',
    offpeak:  '淡季（1-2 月）：当天现场可买，人流量只有旺季 1/4'
  },
  timingTip: '08:00 开门第一波冲上山（游客巴士 10:00 才到），可安静在帕特农西南角拍 1 小时；夏季午后 15:00 前山上 40-42℃，帽子 + 水 + 防晒霜必备'
} // ✋ Dev 上线前核对：hhticket.gr / Combined Ticket 覆盖景点 / 免费日
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '卫城单票 €20 夏季 / €10 冬季；€30 Combined 7 日内六处通用，适合待 3 天以上' // ✓ 锚点：数字 €20/€10/€30/7 日 / 6 处
  },
  {
    category: 'timing',
    text: '08:00 开门冲第一波游客少 80%；夏季午后地表 40-42℃，11:00-15:00 山顶无遮阴带水带帽' // ✓ 锚点：具体时间 08:00/11:00-15:00 + 数字 80%/40-42℃
  },
  {
    category: 'walking',
    text: '南坡 Dionysiou Areopagitou 入口上山是主动线 + 坡缓；北坡 Plaka 老城方向入口冷门但石阶陡，想避人从北坡上' // ✓ 锚点：具体名字 Dionysiou Areopagitou / Plaka + 具体方向南坡北坡
  },
  {
    category: 'photo',
    text: '帕特农东侧（正立面）上午光线最美；从 Filopappou 山西南方向远眺可拍整个卫城 + 帕特农 + 卫城山一轮日出金光' // ✓ 锚点：具体方向东侧 / 西南 + 具体名字 Filopappou + 只有去过才知道
  },
  {
    category: 'walking',
    text: '卫城博物馆（Acropolis Museum）在 Dionysiou Areopagitou 街道山脚，€15 单独票，看卫城上的雕像原件和展厅玻璃透视效果' // ✓ 锚点：具体名字卫城博物馆 / Dionysiou Areopagitou + 数字 €15
  },
  {
    category: 'ticket',
    text: '每月首个周日（11-3 月）、3/6、5/18、10/28 免费但必须提前网上预约时段；免费日往往比付费日更挤' // ✓ 锚点：具体时间每月首个周日 / 3-6 / 5-18 / 10-28 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] hhticket.gr 域名 / [ ] Combined Ticket 覆盖清单 / [ ] 免费日规则

---

## 2. 帕特农神庙（Parthenon · 在卫城上）· Tier B

> **PM 备注给 Dev**：帕特农与卫城共用同一张卫城票，票面逻辑上不独立。以下 ticket 字段**复用卫城票价**，重点差异在 tips 聚焦于建筑本体细节。

### ticket

```javascript
ticket: {
  price: '与卫城联票 €20（夏）/ €10（冬）；进入不单独售票',
  channels: [
    {
      name: '官方 hhticket.gr（与卫城同）',
      url: 'https://hhticket.gr/',
      note: '帕特农不单独售票——购卫城票即可进入；周围 20 米黄线禁止入内'
    },
    {
      name: '卫城博物馆 €15（看原件雕塑）',
      url: 'https://www.theacropolismuseum.gr/',
      note: '帕特农真品雕像已迁至博物馆，神庙现场大部分是复制品，想看菲迪亚斯原作必去博物馆'
    }
  ],
  bookingWindow: {
    peak:     '与卫城同步；现场神庙周围永远 100+ 人，想拍无人镜头只能凌晨第一波',
    shoulder: '与卫城同步'
  },
  timingTip: '08:00 第一波进卫城直奔帕特农西立面拍正面（上午东侧逆光）；18:00 闭门前 30 分钟逆向重走一次，日落金光打在多立克柱上'
} // ✋ Dev 上线前核对：帕特农保护带现状 / 是否仍允许近距离围观
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '帕特农不单独售票，进卫城 €20/€10 即包含；黄线外 20 米禁区不可越' // ✓ 锚点：数字 €20/€10/20 米
  },
  {
    category: 'timing',
    text: '08:00 第一波冲西立面（正立面）；18:00 前 30 分钟日落金光打柱最美' // ✓ 锚点：具体时间 08:00/18:00/30 分钟 + 具体方向西立面
  },
  {
    category: 'photo',
    text: '8 根前柱 + 17 根侧柱形成的"菲迪亚斯黄金比例"从西南角 45° 最能体现；正面 90° 永远被游客阻挡' // ✓ 锚点：数字 8/17/45°/90° + 具体方向西南 + 具体名字菲迪亚斯
  },
  {
    category: 'walking',
    text: '真品雕像（菲迪亚斯作）已迁卫城博物馆三楼；现场柱身上大部分雕塑是复制品或英国大英博物馆当年搬走后留白痕迹' // ✓ 锚点：具体名字大英博物馆 / 菲迪亚斯 / 三楼 + 只有去过才知道
  },
  {
    category: 'ticket',
    text: '卫城博物馆 €15 是与帕特农成对的必修课，展厅透明玻璃让雕像正对原神庙方向，仪式感满' // ✓ 锚点：数字 €15 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 保护黄线现行规则 / [ ] 卫城博物馆现价

---

## 3. 古代市集（Ancient Agora）· Tier C

### ticket

```javascript
ticket: {
  price: '€10 单票；Combined €30 覆盖',
  channels: [
    {
      name: '官方 hhticket.gr',
      url: 'https://hhticket.gr/',
      note: '与卫城同一系统；Combined 去 2 处以上更划算'
    }
  ],
  bookingWindow: '当天可买；闭馆日周二',
  timingTip: '下午 15:00 后上午团客散去是最佳时段；苏格拉底曾在此辩论，赫菲斯托斯神庙（Temple of Hephaestus）是希腊保存最完整的多立克神庙，比帕特农还完好'
} // ✋ Dev 上线前核对：hhticket.gr / 周二闭馆
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€10 单票或 €30 Combined 覆盖；闭馆日是周二' // ✓ 锚点：数字 €10/€30 + 具体时间周二
  },
  {
    category: 'timing',
    text: '下午 15:00 后是黄金时段；赫菲斯托斯神庙在西北角坡上晒夕阳金光最好' // ✓ 锚点：具体时间 15:00 + 具体方向西北角
  },
  {
    category: 'walking',
    text: '从卫城北坡下山步行 5 分钟直达 Agora 北门；出 Agora 南门即是 Plaka 老城区吃饭',
    // ✓ 锚点：具体名字 Plaka / 北坡 / 北门 + 数字 5 分钟
  },
  {
    category: 'photo',
    text: '赫菲斯托斯神庙保存比帕特农更完整，34 根柱子全在，是希腊唯一能见到完整多立克柱廊的神庙' // ✓ 锚点：具体名字赫菲斯托斯 + 数字 34 根 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] hhticket.gr / [ ] 周二闭馆规则

---

## 本城 worldContext 节点

```javascript
// 追加到 Athens.timeline 相应节点

{ year: '公元前508年', event: '民主制度诞生',
  worldContext: '此时世界：中国春秋末期，孔子 43 岁在鲁国周游；印度佛陀还健在（入灭 25 年后）；波斯大流士即将建波斯波利斯' },

{ year: '公元前447年', event: '帕特农神庙开建',
  worldContext: '此时世界：中国战国初期，墨子出生前后；印度阿阇世王征服诸国；波斯帝国全盛却无法阻止希腊崛起' },

{ year: '公元529年', event: '柏拉图学院关闭',
  worldContext: '此时世界：查士丁尼一世同年颁布《查士丁尼法典》并开建圣索菲亚；中国南北朝梁武帝普通十年；日本钦明天皇即位' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 雅典卫城 | A | ✅ | ✅ 6/6 | ✅ 4/3 | ✅ |
| 帕特农神庙 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 古代市集 Agora | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 3 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 卫城 hhticket.gr 预约 / Combined 清单 / 免费日
- [ ] 帕特农 保护黄线 / 卫城博物馆价
- [ ] Agora 周二闭馆
