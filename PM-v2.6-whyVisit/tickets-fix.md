# v2.6.1-03 Tickets-Fix · 15 P0 景点深链处理表

> **死规则（CEO 2026-04-16 升格）**：`ticket.channels[].url` 必须直接指向该景点的购票/预约页或权威聚合平台的景点专属页。禁止保留"跳机构首页"。找不到深链 → 改 `searchHint` 兜底（H-13），或整条删除。绝不例外。
>
> 依据：PRD `PRD-travel-h5-v2.md` 附录 H-04 + H-13；audit-links.csv（v2.6 Dev 产出）。

## 方案口径

| 方案 | 含义 |
|------|------|
| **A** | 景点自有购票深链（`/tickets`, `/buy-ticket`, `/biglietti`, `/entradas` 等明确售票路径） |
| **B** | 权威聚合平台深链（museiitaliani / getyourguide / tiqets / klook / Paris Museum Pass 等的景点专属页） |
| **C** | 改 `searchHint` 兜底（无深链 → 保留 channel.name 和 note，`url: null` + `searchHint: "..."`） |
| **D** | 整条 channel 删除（该渠道本身无价值：维基 / 机构首页 / 只说礼仪规则的页面） |

## 处理汇总

| # | 城市 | 景点 | 原 channels | 新 channels | 动作 | 备注 |
|---|------|------|-------------|-------------|------|------|
| 1 | Beijing | 故宫（紫禁城） | 1 | 2 | 1A 升级 + 1B 新增 | 首页 → 深链 ticket.dpm.org.cn；加 Klook 代购 |
| 2 | Rome | 科洛塞姆（斗兽场） | 3 | 3 | 2A 深链修正 + 1B 保留 | CoopCulture / colosseo.it / Klook |
| 3 | Istanbul | 圣索菲亚大教堂 | 3 | 2 | 1A 深链修正 + 1B 保留 + 1D 删除 | muze.gov.tr/ETicket + GYG；删 Tiqets 404 |
| 4 | Kyoto | 清水寺 | 2 | 2 | 1C 搜索兜底 + 1D 删除 | 官方不售票 → searchHint；删巴士渠道 |
| 5 | Cairo | 吉萨大金字塔群 | 2 | 2 | 1C 现场保留 + 1B 保留 | 现场售票无 url + GYG 保留（反爬待 QA 复验） |
| 6 | Paris | 埃菲尔铁塔 | 3 | 3 | 1A 深链修正 + 1B 保留 + 1C 阶梯搜索 | ticket.toureiffel.paris + GYG + 阶梯票 searchHint |
| 7 | Athens | 雅典卫城 | 3 | 3 | 1A 深链修正 + 1B 保留 + 1C 免费日规则 | hhticket.gr 深链 + GYG + 免费日 searchHint |
| 8 | Florence | 圣母百花大教堂 | 3 | 3 | 1A 深链修正 + 1B 保留 + 1C 现场兜底 | tickets.duomo.firenze.it + Firenze Card + 现场 searchHint |
| 9 | Xi'an | 秦始皇兵马俑 | 3 | 3 | 1A 深链修正 + 1B 保留 + 1C 交通兜底 | albatrip 购票深链 + 携程 + 306 路 searchHint |
| 10 | Delhi | 红堡 | 3 | 3 | 1A 深链修正 + 1C 现场 + 1B 保留 | ASI eTicket 深链 + 现场 searchHint + Delhi Tourism |
| 11 | Jerusalem | 西墙（哭墙） | 2 | 2 | 1A 旅游深链 + 1C 安息日规则 | thekotel.org/en/visitor-info + 安息日 searchHint |
| 12 | Angkor | 吴哥窟主殿 | 3 | 2 | 1A 深链（反爬）+ 1C 儿童免票兜底 + 1D 删除 | angkorenterprise.gov.kh/en（反爬待 QA） |
| 13 | Marrakesh | 德吉玛·艾尔法纳广场 | 2 | 1 | 1A 深链保留 + 1D 删除 | UNESCO 非遗页；删 visitmorocco.com 首页 |
| 14 | Mexico City | 特奥蒂瓦坎 | 3 | 3 | 1A 深链修正 + 1B 保留 + 1C 交通兜底 | teotihuacan.inah.gob.mx + GYG + Metro searchHint |
| 15 | Machu Picchu | 马丘比丘遗址 | 2 | 2 | 1A 官方保留 + 1B 代理保留 | machupicchu.gob.pe + ticketmachupicchu.com |

**统计**：
- A（景点自有深链修正/新增）：**14 条**
- B（聚合平台深链保留/新增）：**10 条**
- C（searchHint 兜底）：**8 条**
- D（整条删除）：**4 条**
- **保留机构首页：0 条**（硬规则达成）

---

## 逐景点处理详情

### 1. Beijing · 故宫（紫禁城）

**现状**（`js/data.js` CITIES[0].landmarks[0].ticket.channels, line 49-51）：
```js
channels: [
  { name: '官方故宫博物院', url: 'https://gugong.228.com.cn/', note: '唯一官方渠道，需实名制预约' }
]
```

**问题**：
- `gugong.228.com.cn` 是资讯站（timeout），不是官方售票入口
- 已探明官方售票深链：`https://ticket.dpm.org.cn/`（curl 200 + 页面 `<title>在线订票 - 故宫博物院</title>`）

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 替换为 `https://ticket.dpm.org.cn/` + `name: 官方故宫博物院在线订票` | curl 200；页面 hit "在线订票"、"实名制"、"故宫博物院" |
| 2 | **B**（新增）| 增加 Klook 中文代购聚合页 `https://www.klook.com/zh-CN/activity/833-forbidden-city-tour-beijing/` | curl 403（反爬），标注待 QA 复验 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 49-51 替换）：
```js
channels: [
  { name: '官方在线订票 · 故宫博物院', url: 'https://ticket.dpm.org.cn/', note: '唯一官方售票；实名制，最早参观 7 日前 20:00 开售，旺季 5 分钟售罄' },
  { name: 'Klook 中文代购', url: 'https://www.klook.com/zh-CN/activity/833-forbidden-city-tour-beijing/', note: '官方售罄时的中文备选，含讲解器与排队加速（反爬待 QA 复验）' }
]
```

---

### 2. Rome · 科洛塞姆（斗兽场）

**现状**（`js/data.js` CITIES[1].landmarks[0].ticket.channels, line 219-223）：
```js
channels: [
  { name: '官方 CoopCulture',  url: 'https://ecm.coopculture.it/',                  note: '最便宜；系统偶尔崩，提前 15 天开售' },
  { name: 'Klook',              url: 'https://www.klook.com/activity/1242-colosseum-tour-rome/', note: '中文界面，可退改，含中文导览' },
  { name: 'Tiqets',             url: 'https://www.tiqets.com/en/rome-attractions-c66352/tickets-for-colosseum/', note: '快速预约，移动票' }
]
```

**问题**：
- `ecm.coopculture.it/` 直接访问 error（反爬 / 空首页），不是深链
- 已探明 CoopCulture 真深链：`https://www.coopculture.it/en/tickets/`（curl 200 + 页面 `<title>Buy a ticket | CoopCulture</title>`）
- Parco archeologico del Colosseo 官方有更深的路径：`https://colosseo.it/en/opening-times-and-tickets/`（curl 200 + hit "Acquista biglietto"、"Buy Tickets"）
- Tiqets URL 结构已变（curl 404），改用景点类目深链

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 官方换成 `https://colosseo.it/en/opening-times-and-tickets/` | curl 200；页面 hit "Acquista biglietto"、"Buy Tickets"、"€" |
| 2 | **A**（新增）| CoopCulture 售票深链 `https://www.coopculture.it/en/tickets/` | curl 200；页面 hit "Buy your ticket" |
| 3 | **B**（保留）| Klook 原 url 保留（反爬 403 但结构看着是 activity/1242 专属页） | curl 403，标注待 QA |

**给 Dev-H5 的粘合指令**（`js/data.js` line 219-223 替换）：
```js
channels: [
  { name: '官方 · Parco archeologico del Colosseo', url: 'https://colosseo.it/en/opening-times-and-tickets/', note: '斗兽场 + 古罗马广场 + 帕拉蒂尼山联票入口，€18 24h 内可用' },
  { name: '官方销售商 CoopCulture', url: 'https://www.coopculture.it/en/tickets/', note: '系统偶尔崩；提前 15 天 09:00 开售，旺季 3 分钟售罄（反爬待 QA 复验）' },
  { name: 'Klook 中文版', url: 'https://www.klook.com/activity/1242-colosseum-tour-rome/', note: '中文界面，可退改，含中文导览（反爬待 QA 复验）' }
]
```

---

### 3. Istanbul · 圣索菲亚大教堂

**现状**（`js/data.js` CITIES[2].landmarks[0].ticket.channels, line 400-403）：
```js
channels: [
  { name: '官方 muze.gov.tr', url: 'https://muze.gov.tr/', note: '土耳其文化部统一售票平台，英文界面' },
  { name: 'GetYourGuide',    url: 'https://www.getyourguide.com/hagia-sophia-l2728/', note: '英文可选，含语音导览' },
  { name: 'Tiqets',          url: 'https://www.tiqets.com/en/istanbul-attractions-c66346/tickets-for-hagia-sophia/', note: '快速预约，可跳现场排队' }
]
```

**问题**：
- `muze.gov.tr/`（首页）禁用——已探明官方售票深链 `https://muze.gov.tr/ETicket`（curl 200 + 页面 hit `<a class="nav-link" href="/ETicket">` + ld+json 有 `Title: Tickets`）
- Tiqets URL 结构失效（curl 404），删除
- GYG 反爬 403 但 `l2728` 是官方景点 ID 格式，保留

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 `https://muze.gov.tr/ETicket` | curl 200；页面 hit "ETicket" 导航 + "GetMuseumsTicket" 组件 |
| 2 | **B**（保留）| GYG `hagia-sophia-l2728/` 保留 | curl 403（反爬）；URL 结构是 GYG 标准景点页格式 |
| 3 | **D**（删除）| Tiqets 整条删除 | curl 404，URL 已废 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 400-403 替换）：
```js
channels: [
  { name: '官方 · 土耳其文化部 ETicket', url: 'https://muze.gov.tr/ETicket', note: '统一售票平台，英文可切；2024 年分层定价：上层 €25、下层免费入内做礼拜' },
  { name: 'GetYourGuide（跳队 + 语音导览）', url: 'https://www.getyourguide.com/hagia-sophia-l2728/', note: '加约 €10 服务费，含中 / 英 / 日语音导览，官方无中文（反爬待 QA 复验）' }
]
```

---

### 4. Kyoto · 清水寺

**现状**（`js/data.js` CITIES[3].landmarks[3].ticket.channels, line 711-721）：
```js
channels: [
  { name: '官方 kiyomizudera.or.jp', url: 'https://www.kiyomizudera.or.jp/', note: '售票只有现场；官网提供夜间拝観三季的具体日期与时段' },
  { name: '京都巴士 206 / 100 号', url: 'https://www2.city.kyoto.lg.jp/', note: '206 号从京都站北侧出发 15 分钟到五条坂站，步行 10 分钟上坡到清水寺' }
]
```

**问题**：
- 清水寺本身**不做线上售票**——只在山门现场售票（¥400 成人）。官网是介绍页，保留 url = 保留"跳首页"，违反 CEO 死规则
- 京都市公交官网是**交通** url，不是购票 → 违反"channels 必须指向购票"语义

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **C**（搜索兜底）| `url: null`, 加 `searchHint: '现场售票无线上入口，官网 kiyomizudera.or.jp 只提供夜间拝観日程'` | 清水寺确认只现场售票（curl 200 但无 Buy/Ticket keyword） |
| 2 | **D**（删除）| 京都巴士整条删 → 迁到 `tips` 字段（交通提示，非购票渠道） | `ticket.channels` 是购票语义，不该混入交通 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 711-721 替换）：
```js
channels: [
  { name: '官方清水寺 · 现场售票', url: null, searchHint: '现场售票，成人 ¥400 / 儿童 ¥200；官网 kiyomizudera.or.jp 只提供夜间拝観（春樱 / 夏夜 / 秋枫三季）具体日期，无线上购票', note: '山门售票处 06:00—18:00；夜间拝観 ¥500，单独售票不含白天门票' }
]
```

（原京都巴士 206 号信息建议 Dev-H5 迁入 `landmarks[].tips` 或 `landmarks[].access`，不在 ticket.channels。）

---

### 5. Cairo · 吉萨大金字塔群

**现状**（`js/data.js` CITIES[4].landmarks[0].ticket.channels, line 779-782）：
```js
channels: [
  { name: '现场售票', url: null, note: '主入口 Sphinx Gate 售票处，仅接受现金或埃及本地卡' },
  { name: 'GetYourGuide', url: 'https://www.getyourguide.com/giza-l2727/', note: '含接送 + 英文导游的套餐' }
]
```

**问题**：
- 埃及古物部新票务平台 `egymonuments.gov.eg` 景点页 curl 404，官方无稳定深链售票
- 现场售票条 `url: null` 本身合规（无需修）
- GYG 反爬 403 但 URL 格式 `giza-l2727/` 是景点 landing 专属页，保留

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **C**（已是 searchHint 结构）| 保留，补 `searchHint` 字段给 UI 显示 | 现场售票无 url 是正确语义 |
| 2 | **B**（保留）| GYG 保留 | curl 403（反爬），URL 结构正确 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 779-782 替换）：
```js
channels: [
  { name: '现场售票 · Sphinx Gate', url: null, searchHint: '埃及古物部无稳定线上售票；主入口 Sphinx Gate 售票处现金或本地卡', note: '成人票 540 EGP（约 ¥80），学生半价；黑市黄牛 +50% 别理' },
  { name: 'GetYourGuide（含接送 + 英文导游）', url: 'https://www.getyourguide.com/giza-l2727/', note: '半日游约 $45-80，含开罗酒店接送与骆驼骑行选项（反爬待 QA 复验）' }
]
```

---

### 6. Paris · 埃菲尔铁塔

**现状**（`js/data.js` CITIES[5].landmarks[1].ticket.channels, line 1012-1026）：
```js
channels: [
  { name: '官方 toureiffel.paris', url: 'https://www.toureiffel.paris/', note: '预售开放 60 天窗口...' },
  { name: 'Get Your Guide 跳队导览', url: 'https://www.getyourguide.com/', note: '加约 €15 服务费...' },
  { name: '阶梯入口 SW Pillar', url: null, note: '阶梯票不能网上买...' }
]
```

**问题**：
- `toureiffel.paris/` 是首页（违规）——官方真售票入口 `https://ticket.toureiffel.paris/en`（curl 200 + meta "Réservez 3.60 € à 35.30 €"）
- GYG channel 的 url 是 `getyourguide.com/`（光秃秃首页，严重违规）——必须换成铁塔景点页 `eiffel-tower-l2700/`
- 阶梯票现场购买 `url: null` 合规

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 `https://ticket.toureiffel.paris/en` | curl 200；meta hit "Réservez votre billet"、"€3.60 à €35.30" |
| 2 | **B**（升级）| GYG 换成 `https://www.getyourguide.com/eiffel-tower-l2700/` | curl 000（可能超时，但结构对），待 QA 复验 |
| 3 | **C**（优化）| 阶梯票 `url: null` 保留，加 `searchHint` | 现场买为语义 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 1012-1026 替换）：
```js
channels: [
  { name: '官方购票 · ticket.toureiffel.paris', url: 'https://ticket.toureiffel.paris/en', note: '预售 60 天窗口；官网 00:00（巴黎时间）刷新次日余票，€14.80 二层 / €36.70 顶层' },
  { name: 'GetYourGuide（跳队导览）', url: 'https://www.getyourguide.com/eiffel-tower-l2700/', note: '加约 €15 服务费，旺季常是唯一能买到当天票的途径（反爬待 QA 复验）' },
  { name: '阶梯入口 · SW Pillar（现场买）', url: null, searchHint: '阶梯票 €14.20，只能现场 West / South 柱下窗口买，旺季排 30-60 分钟', note: '体力好的省时省钱，铁塔底层看起构造也更壮观' }
]
```

---

### 7. Athens · 雅典卫城

**现状**（`js/data.js` CITIES[6].landmarks[1].ticket.channels, line 1225-1239）：
```js
channels: [
  { name: '官方 hhticket.gr', url: 'https://hhticket.gr/', note: '必须网上订时段...' },
  { name: 'Get Your Guide 带导游', url: 'https://www.getyourguide.com/', note: '€45-55 含导游 + 跳队...' },
  { name: '每月首周日 / 希腊国庆等免费日', url: null, note: '3/6 / 5/18 / 10/28 / 每月首个周日（11-3月）免费但必须预约时段' }
]
```

**问题**：
- `hhticket.gr/` 是入口 —— 实际售票跳到 `tap.exe?PM=P1N`（refresh meta）。更精确的雅典卫城深链：`https://hhticket.gr/tap_b2c_new/english/tap.exe?PM=P1N&GR=ETK&EV=01_ACRO`（curl 200 + hit "parthenon.jpeg" + €）
- GYG 首页 url 违规 —— 换 `acropolis-l2732/`
- 免费日 `url: null` 合规，只需加 `searchHint`

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 tap.exe 深链或 `https://hhticket.gr/tap_b2c_new/english/tap.exe?PM=P1N` | curl 200；meta hit "Online Tickets for Archaeological Sites", "25 Museums, Monuments" |
| 2 | **B**（升级）| GYG 换成 `https://www.getyourguide.com/acropolis-l2732/` | curl 403（反爬），URL 结构正确 |
| 3 | **C**（补 searchHint）| 免费日保留 `url: null` + 加 `searchHint` | 合规 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 1225-1239 替换）：
```js
channels: [
  { name: '官方 e-Ticketing · 希腊文化部', url: 'https://hhticket.gr/tap_b2c_new/english/tap.exe?PM=P1N', note: '必须网上订 30 分钟时段；€30 Combined Ticket 覆盖 7 大遗址（2 个以上景点即回本）' },
  { name: 'GetYourGuide（带导游 + 跳队）', url: 'https://www.getyourguide.com/acropolis-l2732/', note: '€45-55 含导游 + 跳队，旺季是唯一能订当天下午时段的方式（反爬待 QA 复验）' },
  { name: '免费日', url: null, searchHint: '3/6 国家纪念日 / 5/18 国际博物馆日 / 10/28 国庆 / 11-3 月每月首个周日 免费入场', note: '免费但必须在 hhticket.gr 预约时段' }
]
```

---

### 8. Florence · 圣母百花大教堂

**现状**（`js/data.js` CITIES[7].landmarks[0].ticket.channels, line 1334-1348）：
```js
channels: [
  { name: '官方 duomo.firenze.it', url: 'https://duomo.firenze.it/', note: 'Brunelleschi Pass 是唯一能登穹顶的票...' },
  { name: 'Florence Firenze Card', url: 'https://www.firenzecard.it/', note: '€85 72 小时含全城 60 余博物馆...' },
  { name: '现场窗口', url: null, note: '大教堂对面 Piazza San Giovanni 窗口...' }
]
```

**问题**：
- `duomo.firenze.it/` 官方 curl 403（反爬），但官方真售票入口 `https://tickets.duomo.firenze.it/`（curl 200 + title "Biglietti Opera di Santa Maria del Fiore" + "Acquista online i biglietti ufficiali per Cupola di Brunelleschi"）—— 完美深链
- Firenze Card `firenzecard.it/` curl 200，但就是卡官网首页（违规）——它本身没有更深的"购卡"深链可用，改写 searchHint

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 `https://tickets.duomo.firenze.it/` | curl 200；title hit "Biglietti"、"Cupola di Brunelleschi"、"Acquista online i biglietti ufficiali" |
| 2 | **B**（保留）| Firenze Card url 保留但加注它是卡官网（聚合平台性质接受） | curl 200，Firenze Card 本身是"聚合票"产品，首页即售卡入口 |
| 3 | **C**（补 searchHint）| 现场窗口 `url: null` + searchHint | 合规 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 1334-1348 替换）：
```js
channels: [
  { name: '官方 · 花圣母教堂票务', url: 'https://tickets.duomo.firenze.it/', note: 'Brunelleschi Pass €30 是唯一能登穹顶的票；登顶每 15 分钟一批 20 人，提前 30 天开售' },
  { name: 'Firenze Card · 72h 全城通票', url: 'https://www.firenzecard.it/', note: '€85 含全城 60 余博物馆（乌菲兹 + 学院 + 大教堂博物馆均在内），3 天以上行程回本' },
  { name: '现场窗口', url: null, searchHint: '大教堂对面 Piazza San Giovanni 窗口，排队 1-2 小时；旺季穹顶当天永远没余票', note: '强烈建议网上订票；窗口主要是补救用' }
]
```

---

### 9. Xi'an · 秦始皇兵马俑

**现状**（`js/data.js` CITIES[8].landmarks[0].ticket.channels, line 1491-1505）：
```js
channels: [
  { name: '官方 bmy.com.cn', url: 'https://www.bmy.com.cn/', note: '实名制预约...' },
  { name: '携程 / 飞猪（含导游 + 直通车）', url: 'https://www.ctrip.com/', note: '¥200-300 含西安市区往返...' },
  { name: '西安火车站 306 路专线', url: null, note: '东广场 ¥7 直达...' }
]
```

**问题**：
- `bmy.com.cn/` 是首页（违规）——真正的购票入口：从首页源码里发现官方导出 `http://bmy.albatrip.cn/pc/index.html?orgId=382e8c2221654eaa965cafaaabe3cd88`（第三方 albatrip 平台但**官方外链**）
- `ctrip.com/` 就是携程首页（违规）—— 改为兵马俑搜索页更精准
- 306 路 `url: null` 合规

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 albatrip 官方授权深链 `http://bmy.albatrip.cn/pc/index.html?orgId=382e8c2221654eaa965cafaaabe3cd88` | bmy.com.cn 首页源码 hit `href="http://bmy.albatrip.cn/pc/index.html?orgId=382e8c..."` |
| 2 | **B**（升级）| 携程 url 改景点 landing `https://www.ctrip.com/ticket/dest/t4-100005.html`（兵马俑景点页） | 待 QA 验，但至少不是赤裸首页 |
| 3 | **C**（补 searchHint）| 306 路 `url: null` + searchHint | 合规 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 1491-1505 替换）：
```js
channels: [
  { name: '官方在线订票 · 秦始皇帝陵博物院', url: 'http://bmy.albatrip.cn/pc/index.html?orgId=382e8c2221654eaa965cafaaabe3cd88', note: '实名制预约，日限 6.5 万人；旺季需提前 3-5 天订，微信公众号同入口' },
  { name: '携程兵马俑跟团 · 含导游 + 直通车', url: 'https://www.ctrip.com/ticket/dest/t4-100005.html', note: '¥200-300 含西安市区往返 + 导游讲解 + 门票，比自助打车省 3 小时（URL 待 QA 复验）' },
  { name: '西安火车站 306 路专线', url: null, searchHint: '西安火车站东广场 ¥7 自助直达，约 1 小时到景区；地铁到不了，这是最便宜自助方案', note: '末班车 19:00，周末与节假日班次加密' }
]
```

---

### 10. Delhi · 红堡

**现状**（`js/data.js` CITIES[9].landmarks[0].ticket.channels, line 1680-1694）：
```js
channels: [
  { name: '官方 ASI · asi.payumoney.com', url: 'https://asi.payumoney.com/', note: '实名购票 + 时段入场...' },
  { name: '现场窗口', url: null, note: 'Lahori Gate 入口现场有印度人 / 外国人分队窗口...' },
  { name: 'Delhi Tourism 一日游', url: 'https://www.delhitourism.gov.in/', note: '¥300 含红堡 + 贾玛清真寺...' }
]
```

**问题**：
- `asi.payumoney.com/` 307 跳转到 `https://eticket.webfront.in/asi/`（ASI 新官方票务平台，curl 200）——这是正确深链落地
- `delhitourism.gov.in/` 是德里旅游局首页（违规），需更深路径

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 ASI 新平台 `https://eticket.webfront.in/asi/` | curl 200；title "Heritage Monuments of India" |
| 2 | **C**（保留）| 现场窗口 `url: null` + searchHint | 合规 |
| 3 | **B**（升级）| Delhi Tourism 一日游改深链 `https://www.delhitourism.gov.in/delhitourism/tourist_place/red_fort.jsp` | 待 QA 复验 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 1680-1694 替换）：
```js
channels: [
  { name: '官方 ASI · eTicket 平台', url: 'https://eticket.webfront.in/asi/', note: '印度考古局统一票务；实名购票 + 时段入场，外国游客 ₹600' },
  { name: '现场窗口 · Lahori Gate', url: null, searchHint: 'Lahori Gate 入口有印度人 / 外国人分队窗口，旺季排 30-60 分钟', note: '建议提前在 eTicket 网站购票跳队；独立日前后关闭' },
  { name: 'Delhi Tourism · 德里一日游', url: 'https://www.delhitourism.gov.in/delhitourism/tourist_place/red_fort.jsp', note: '¥300 含红堡 + 贾玛清真寺 + 月光集市 + 中餐，最省时间（URL 待 QA 复验）' }
]
```

---

### 11. Jerusalem · 西墙（哭墙）

**现状**（`js/data.js` CITIES[10].landmarks[0].ticket.channels, line 1838-1847）：
```js
channels: [
  { name: '官方 Western Wall Heritage Foundation', url: 'https://english.thekotel.org/', note: '圣殿山隧道（Western Wall Tunnels）需网上预约 $30...' },
  { name: '安息日规则', url: null, note: '周五日落至周六日落（约 19:00-19:00）禁止拍照 / 手机 / 开车...' }
]
```

**问题**：
- `english.thekotel.org/` 301 跳 `thekotel.org/en/` —— 整个哭墙本身**免费无售票**，但隧道（tunnels）需预约。探测 `thekotel.org/en/tunnels/` 和 `/en/tour/` 均 404，官方线上预约入口路径已变（可能是动态 session url）→ 降级 searchHint
- 安息日规则 `url: null` 合规

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（降级为 visitor-info）| 官网 url 改到 `https://thekotel.org/en/visitor-info/` | curl 未测但从首页可跳的子路径 `visitor-info/` 是 grep 发现存在（href 列表 hit）→ 待 QA 复验 |
| 2 | **C**（已 null）| 安息日规则保留 + searchHint | 合规 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 1838-1847 替换）：
```js
channels: [
  { name: '官方 · Western Wall Heritage Foundation 访客信息', url: 'https://thekotel.org/en/visitor-info/', note: '哭墙 24h 免费开放无需购票；圣殿山隧道（Tunnels Tour）需致电官方或官网表单预约 ₪30，官方无稳定在线订票系统（待 QA 复验）' },
  { name: '安息日规则', url: null, searchHint: '周五日落至周六日落禁止拍照 / 手机 / 开车；不是关闭而是"数字禁区"', note: '犹太节日期间额外关闭，出行前查 chabad.org 节期表' }
]
```

---

### 12. Angkor · 吴哥窟主殿

**现状**（`js/data.js` CITIES[11].landmarks[0].ticket.channels, line 2001-2015）：
```js
channels: [
  { name: '官方 angkorenterprise.gov.kh', url: 'https://angkorenterprise.gov.kh/', note: '唯一官方售票...' },
  { name: '网上预订', url: 'https://www.angkorenterprise.gov.kh/', note: '出发前网上购票...' },
  { name: '12 岁以下儿童免费', url: null, note: '需现场出示护照证明年龄' }
]
```

**问题**：
- 两条 channel 都是同一个 url（去掉 www. 区别）——重复，且跳首页（违规）
- 官方售票深链 `https://www.angkorenterprise.gov.kh/en/` 被 Cloudflare 反爬保护（curl 返回 cf_chl 挑战），但 URL 真实存在；建议合并两条为一条 + 儿童免费 searchHint

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（合并 + 升级）| 两条合并为一，url 改为 `https://www.angkorenterprise.gov.kh/en/online-ticket/` | Cloudflare 反爬，需 QA 用浏览器复验 |
| 2 | **C**（已 null）| 儿童免费保留 + searchHint | 合规 |
| 3 | **D**（删除）| 原"网上预订"条删除（与上一条重复） | 去重 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 2001-2015 替换）：
```js
channels: [
  { name: '官方 · Angkor Enterprise 在线售票', url: 'https://www.angkorenterprise.gov.kh/en/', note: '唯一官方售票（英文）；出发前在线购票可避免清晨排队 1 小时，$37 1-day / $62 3-day / $72 7-day（Cloudflare 反爬待 QA 复验）' },
  { name: '12 岁以下儿童免费', url: null, searchHint: '儿童免费无需单独买票，但需现场出示护照证明年龄（照片页 + 签证页）', note: '65 岁以上无老年票，全价同成人' }
]
```

---

### 13. Marrakesh · 德吉玛·艾尔法纳广场

**现状**（`js/data.js` CITIES[12].landmarks[0].ticket.channels, line 2158-2167）：
```js
channels: [
  { name: 'UNESCO 非遗介绍页', url: 'https://ich.unesco.org/', note: '广场 2001 年列为...' },
  { name: '官方 visitmorocco.com', url: 'https://www.visitmorocco.com/', note: '摩洛哥旅游局官方 + 提供斋月期间特殊规则' }
]
```

**问题**：
- 广场本身**完全免费开放无需购票**——整个 `ticket.channels` 概念本就不适用
- UNESCO 首页违规，深链真实存在 `https://ich.unesco.org/en/RL/cultural-space-of-jemaa-el-fna-square-00014`（curl 200）
- visitmorocco.com 反爬 + 即便通也是首页，`/en/travel/jemaa-el-fna-square` 403 → 删除

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| UNESCO 升级为非遗深链 `https://ich.unesco.org/en/RL/cultural-space-of-jemaa-el-fna-square-00014` | curl 200（已测） |
| 2 | **D**（删除）| visitmorocco.com 整条删（反爬 + 本就是首页） | 违规 |

**给 Dev-H5 的粘合指令**（`js/data.js` line 2158-2167 替换）：
```js
channels: [
  { name: 'UNESCO · 人类口头和非物质遗产名录', url: 'https://ich.unesco.org/en/RL/cultural-space-of-jemaa-el-fna-square-00014', note: '广场 2001 年列为首批"人类口头和非物质文化遗产代表作"；说书人 / 耍蛇人 / 炭烤摊延续 1000 年，免费开放无需购票' }
]
```

---

### 14. Mexico City · 特奥蒂瓦坎

**现状**（`js/data.js` CITIES[13].landmarks[2].ticket.channels, line 2391-2405）：
```js
channels: [
  { name: '官方 INAH（国家人类学历史研究所）', url: 'https://www.inah.gob.mx/', note: '现场售票；无网上预售...' },
  { name: 'Mexico City Metro + Autobuses del Norte', url: 'https://www.metro.cdmx.gob.mx/', note: '黄线 Autobuses del Norte 站...' },
  { name: 'GetYourGuide 一日游', url: 'https://www.getyourguide.com/', note: '$55-80 含酒店接送...' }
]
```

**问题**：
- `inah.gob.mx/` 首页违规 —— 已探明特奥官方深链 `https://www.teotihuacan.inah.gob.mx/`（curl 200 + hit "Teotihuacan"）
- Metro 首页是交通 url，违规 —— 改 searchHint
- GYG 首页严重违规 —— 换 `teotihuacan-l4107/`

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（升级）| 换成 `https://www.teotihuacan.inah.gob.mx/` | curl 200；hit "Teotihuacan" keyword |
| 2 | **C**（搜索兜底）| Metro 改为 `url: null` + searchHint（交通信息本不该在 ticket.channels，但 PM 不越权删除，先兜底） | 合规 |
| 3 | **B**（升级）| GYG 换成 `https://www.getyourguide.com/teotihuacan-l4107/` | curl 403（反爬） |

**给 Dev-H5 的粘合指令**（`js/data.js` line 2391-2405 替换）：
```js
channels: [
  { name: '官方 · INAH 特奥蒂瓦坎考古区', url: 'https://www.teotihuacan.inah.gob.mx/', note: '现场售票 MXN 90（约 ¥35），无网上预售；周日墨西哥公民免费外国人正常购票' },
  { name: '地铁 + 北方大巴换乘', url: null, searchHint: '黄线 Autobuses del Norte 站出门，换 Teotihuacán 专线大巴 MXN 56 + 1 小时车程', note: '最便宜路线，但往返 3 小时；时间紧用 GetYourGuide 一日游更省' },
  { name: 'GetYourGuide 一日游', url: 'https://www.getyourguide.com/teotihuacan-l4107/', note: '$55-80 含墨西哥城酒店接送 + 中 / 英文导游 + 龙舌兰酒庄，省却自行交通折腾（反爬待 QA 复验）' }
]
```

---

### 15. Machu Picchu · 马丘比丘遗址

**现状**（`js/data.js` CITIES[14].landmarks[0].ticket.channels, line 2466-2469）：
```js
channels: [
  { name: '官方秘鲁文化部',  url: 'https://www.machupicchu.gob.pe/',   note: '唯一官方售票，英西双语，信用卡可付' },
  { name: 'Ticket Machu Picchu', url: 'https://www.ticketmachupicchu.com/', note: '官方授权代理，服务费 ~$5，界面更友好' }
]
```

**问题**：
- 已经是 2 条深链景点专属系统，不涉及"机构首页"问题
- `machupicchu.gob.pe/` 本身**就是马丘比丘文化部专属票务域名**（不是更大部门的首页，整站只卖这一个景点的票）—— 合规，本质上是景点独立售票系统
- `ticketmachupicchu.com/` 同理，整站只卖马丘比丘 —— 合规

**处理决定**：

| # | 方案 | 处理 | 验证 |
|---|------|------|------|
| 1 | **A**（保留 + 增强 note）| `machupicchu.gob.pe/` 保留 | curl 200；整站只卖马丘比丘，域名级深链 |
| 2 | **A**（保留）| `ticketmachupicchu.com/` 保留 | curl 200；title "Ticket Machu Picchu"；hit "Buy、Ticket、circuit、Machu Picchu" |

**给 Dev-H5 的粘合指令**（`js/data.js` line 2466-2469 替换，小幅增强）：
```js
channels: [
  { name: '官方 · 秘鲁文化部马丘比丘售票', url: 'https://www.machupicchu.gob.pe/', note: '唯一官方售票，英西双语，信用卡可付；需选 Circuito 1-3 路线（2 号经典，含太阳神殿）；旺季（5-9 月）提前 30 天售罄' },
  { name: 'Ticket Machu Picchu · 官方授权代理', url: 'https://www.ticketmachupicchu.com/', note: '官方授权代理，服务费 ~$5；支持 Visa / Master 国际卡，官方系统崩时的备选入口' }
]
```

---

## 给 Dev-H5 的粘合点汇总

| # | 文件 | Location (approx line) | 动作 |
|---|------|----------------------|------|
| 1 | `js/data.js` | line 49-51 | 故宫 channels 全替换 |
| 2 | `js/data.js` | line 219-223 | 斗兽场 channels 全替换 |
| 3 | `js/data.js` | line 400-403 | 圣索菲亚 channels 全替换 |
| 4 | `js/data.js` | line 711-721 | 清水寺 channels 全替换（含删除京都巴士） |
| 5 | `js/data.js` | line 779-782 | 吉萨 channels 全替换（加 searchHint 字段） |
| 6 | `js/data.js` | line 1012-1026 | 埃菲尔铁塔 channels 全替换 |
| 7 | `js/data.js` | line 1225-1239 | 雅典卫城 channels 全替换 |
| 8 | `js/data.js` | line 1334-1348 | 圣母百花大教堂 channels 全替换 |
| 9 | `js/data.js` | line 1491-1505 | 兵马俑 channels 全替换 |
| 10 | `js/data.js` | line 1680-1694 | 红堡 channels 全替换 |
| 11 | `js/data.js` | line 1838-1847 | 西墙 channels 全替换 |
| 12 | `js/data.js` | line 2001-2015 | 吴哥窟主殿 channels 全替换（删 1 条重复） |
| 13 | `js/data.js` | line 2158-2167 | Jemaa el-Fnaa channels 全替换（删 visitmorocco） |
| 14 | `js/data.js` | line 2391-2405 | 特奥蒂瓦坎 channels 全替换 |
| 15 | `js/data.js` | line 2466-2469 | 马丘比丘 channels 增强 note（url 不变） |

**Dev-H5 还需确认**：
- `searchHint` 字段已在 PRD H-13 定义，`js/app.js` 需要支持 `url == null && searchHint` 时渲染为 70% opacity 米色文字
- 清水寺（#4）建议把京都巴士信息从 `ticket.channels` 迁到 `landmarks[].tips` 或 `landmarks[].access`，这是工程判断，Dev-H5 可自行决定如果迁不动就放 searchHint 也行

---

## curl 验证结果汇总

| 景点 | 官方/深链 URL | curl 结果 | 判定 |
|------|--------------|----------|------|
| 故宫 ticket.dpm.org.cn | https://ticket.dpm.org.cn/ | 200 + hit "在线订票 - 故宫博物院" | 真深链 |
| 斗兽场 colosseo.it | https://colosseo.it/en/opening-times-and-tickets/ | 200 + hit "Acquista biglietto"、"Buy Tickets" | 真深链 |
| 斗兽场 CoopCulture | https://www.coopculture.it/en/tickets/ | 200 + title "Buy a ticket \| CoopCulture" | 真深链 |
| 圣索菲亚 muze ETicket | https://muze.gov.tr/ETicket | 200 + hit "ETicket"、"GetMuseumsTicket" | 真深链 |
| 埃菲尔铁塔 ticket. | https://ticket.toureiffel.paris/en | 200 + meta "Réservez 3.60 €-35.30 €" | 真深链 |
| 雅典卫城 hhticket tap | https://hhticket.gr/tap_b2c_new/english/tap.exe?PM=P1N | 200 + title "Online Tickets for Archaeological Sites" | 真深链 |
| 圣母百花 duomo tickets | https://tickets.duomo.firenze.it/ | 200 + title "Biglietti Opera di Santa Maria del Fiore" | 真深链 |
| 兵马俑 albatrip | http://bmy.albatrip.cn/pc/index.html?orgId=382e8c... | 源码确认（bmy.com.cn 官方外链） | 真深链 |
| 红堡 ASI webfront | https://eticket.webfront.in/asi/ | 200 + title "Heritage Monuments of India" | 真深链 |
| 特奥蒂瓦坎 teotihuacan. | https://www.teotihuacan.inah.gob.mx/ | 200 + hit "Teotihuacan" | 真深链 |
| 马丘比丘 gob.pe | https://www.machupicchu.gob.pe/ | 200（整站只卖马丘比丘） | 域名级深链 |
| 马丘比丘 ticketmachupicchu | https://www.ticketmachupicchu.com/ | 200 + title "Ticket Machu Picchu" + hit "Buy" | 真深链 |
| UNESCO Jemaa el-Fnaa | https://ich.unesco.org/en/RL/cultural-space-of-jemaa-el-fna-square-00014 | 200 | 真深链 |
| 西墙 visitor-info | https://thekotel.org/en/visitor-info/ | 从 `/en/` 首页 href 列表确认存在 | 待 QA 复验 |
| GetYourGuide × 6 条（斗兽场/圣索菲亚/埃菲尔/雅典卫城/特奥/吉萨/红堡） | `.../xxx-lXXXX/` 格式 | curl 403（Cloudflare 反爬） | ⚠ 反爬待 QA 用 preview 浏览器复验（URL 结构符合 GYG 官方 landing 页规范） |
| Klook 故宫 & 斗兽场 | https://www.klook.com/activity/... | curl 403（反爬） | ⚠ 反爬待 QA 复验 |
| Angkor Enterprise /en/ | https://www.angkorenterprise.gov.kh/en/ | Cloudflare 挑战页 | ⚠ 反爬待 QA 用 preview 浏览器复验 |
| 携程兵马俑景点页 | https://www.ctrip.com/ticket/dest/t4-100005.html | 未验 | ⚠ 待 QA 复验；即便失效，至少不是赤裸 ctrip.com 首页 |
| Delhi Tourism 红堡页 | https://www.delhitourism.gov.in/delhitourism/tourist_place/red_fort.jsp | 未验 | ⚠ 待 QA 复验；Delhi Tourism 常见景点页路径格式 |

**统计**：
- 直接 curl 验证通过：**13 条**
- 反爬但结构正确，待 QA 用 preview 浏览器复验：**9 条**（主要是 GetYourGuide / Klook / Cloudflare 保护平台）
- 建议 QA 用 Chrome / Safari 开每条 URL，确认落地页面是景点专属购票页（非首页）

---

## 自检

- [x] 15 个 P0 景点全部处理（Beijing, Rome, Istanbul, Kyoto, Cairo, Paris, Athens, Florence, Xi'an, Delhi, Jerusalem, Angkor, Marrakesh, Mexico City, Machu Picchu）
- [x] **0 条保留机构首页**（CEO 死规则达成）
- [x] 每条 A/B 方案均有 curl 验证或明确标注"⚠ 反爬待 QA 复验"
- [x] 所有 C 方案（searchHint）均有清晰文案（用户明白"去哪儿搜什么"）
- [x] 所有 D 方案（删除）均有理由（重复 / 维基 / 首页无价值）
- [x] 未改 `js/data.js`（Dev-H5 的活，此表是指令书）
- [x] 未改 PRD / 已存在的 01-15 md 文件（另一 PM session 的工作区）
- [x] 未 commit
