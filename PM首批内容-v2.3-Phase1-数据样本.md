# PM 首批内容交付 · v2.3 Phase 1

**交付物**：5 景点门票 4 件套（E-01） + 3 景点 Tips 样本（E-02）
**来源**：PM 基于 马蜂窝 / Tripadvisor / Reddit r/travel / 小红书 通识整理
**日期**：2026-04-15
**接收方**：Dev-H5 合并进 `js/data.js`；Dev 上线前需**核对两项**：
1. **购票 URL** 现行有效性（网站偶有改版）—— 标记 `[Dev 核对]`
2. **现行票价** 年度调整 —— 标记为「PM 参考值」，以官网为准

**说明**：剩余 45 景点的内容，PM 按「洲 → 城市」优先级逐批补，每周一批，无需 Dev 介入（纯 content commit 即可）。

---

## 一、门票 4 件套 × 5 景点（E-01）

### 1.1 罗马 · 斗兽场 Colosseum

```javascript
ticket: {
  price: '€18（Colosseo + Foro Romano + Palatino 联票，48h 内有效）',
  channels: [
    { name: '官方 CoopCulture',  url: 'https://ecm.coopculture.it/',                  note: '最便宜；系统偶尔崩，提前 15 天开售' },
    { name: 'Klook',              url: 'https://www.klook.com/activity/1242-colosseum-tour-rome/', note: '中文界面，可退改，含中文导览' },
    { name: 'Tiqets',             url: 'https://www.tiqets.com/en/rome-attractions-c66352/tickets-for-colosseum/', note: '快速预约，移动票' }
  ],
  bookingWindow: {
    peak:     '旺季 6-8 月 / 十一黄金周：2-4 周',
    shoulder: '春秋肩季（4-5 月 / 9-10 月）：3-7 天',
    offpeak:  '淡季 12-2 月：1-3 天或当日'
  },
  timingTip: '开门前 8:30 到队伍最短，或落日前 16:30 后光线最美；避开 11-14 团客高峰'
}
```

**Dev 核对清单**：
- [ ] CoopCulture URL（近年有几次改版）
- [ ] 联票有效期 24h vs 48h（用户反馈写 48h，Tripadvisor 近年改为 24h，以官网为准）
- [ ] 票价 €18（2024 年已有上涨传闻）

---

### 1.2 北京 · 故宫 The Forbidden City

```javascript
ticket: {
  price: '旺季 ¥60（4-10 月）/ 淡季 ¥40（11 月-次年 3 月）；珍宝馆 +¥10，钟表馆 +¥10',
  channels: [
    { name: '官方故宫博物院', url: 'https://gugong.228.com.cn/', note: '唯一官方渠道，需实名制预约' }
  ],
  bookingWindow: {
    peak:     '旺季 7-8 月 / 十一 / 春节：提前 7 天 8:00 准时抢',
    shoulder: '春秋肩季：提前 3-5 天',
    offpeak:  '淡季 12-2 月：1-2 天即可'
  },
  timingTip: '周二-周五 8:30 开门即入场，1 小时内可拍到无人太和殿广场；周一闭馆（法定节假日除外）'
}
```

**Dev 核对清单**：
- [ ] 票价（近两年未变，但 2026 年值班可能调整）
- [ ] 官网 URL（长年稳定，基本无需担心）
- [ ] 故宫不再接受第三方购票平台，**channels 只有 1 个是对的**，别误加第三方

---

### 1.3 伊斯坦布尔 · 圣索菲亚大教堂 Hagia Sophia

```javascript
ticket: {
  price: '游客上层 €25（2024 年起实施），下层礼拜区对穆斯林免费',
  channels: [
    { name: '官方 muze.gov.tr', url: 'https://muze.gov.tr/', note: '土耳其文化部统一售票平台，英文界面' },
    { name: 'GetYourGuide',    url: 'https://www.getyourguide.com/hagia-sophia-l2728/', note: '英文可选，含语音导览' },
    { name: 'Tiqets',           url: 'https://www.tiqets.com/en/istanbul-attractions-c66346/tickets-for-hagia-sophia/', note: '快速预约，可跳现场排队' }
  ],
  bookingWindow: {
    peak:     '旺季 6-9 月：3-7 天（2024 改收费后排队反而减少）',
    shoulder: '4-5 月 / 10 月：1-3 天',
    offpeak:  '淡季 11-3 月：当日现场购票可'
  },
  timingTip: '每日 5 次伊斯兰祷告期间游客通道关闭，避开正午 13:00 左右的 Zuhr 祷告；女性需覆肩盖膝戴头巾，门口可免费借'
}
```

**Dev 核对清单**：
- [ ] URL：muze.gov.tr 现行购票接口链接可能分层，Dev 定位到具体 Hagia Sophia 页
- [ ] 2024 年上层游客收费政策是**新政**，现行价格可能已再次调整
- [ ] 祷告时间每日浮动，不用写死具体时段

---

### 1.4 开罗 · 吉萨金字塔 Giza Pyramids

```javascript
ticket: {
  price: '吉萨高原总票 540 EGP ≈ ¥130；胡夫金字塔内部 900 EGP；哈夫拉 / 门卡乌拉内部 200 EGP',
  channels: [
    { name: '现场售票', url: null, note: '主入口 Sphinx Gate 售票处，仅接受现金或埃及本地卡' },
    { name: 'GetYourGuide', url: 'https://www.getyourguide.com/giza-l2727/', note: '含接送 + 英文导游的套餐' }
  ],
  bookingWindow: {
    peak:     '旺季 10-3 月（凉季）：现场直接买，无需提前；高端导游套餐需 3-7 天',
    shoulder: '4-5 月 / 9 月：当日现场',
    offpeak:  '盛夏 6-8 月：基本无人，随到随买'
  },
  timingTip: '7:00 开门前到 Sphinx Gate，9 点前完成参观避开正午 40℃+ 高温；骆驼/马夫开价要减到 1/3，一口价 200 EGP/小时即可'
}
```

**Dev 核对清单**：
- [ ] 埃及近年通胀严重，票价每 6 个月上调一次，540 EGP 是 2024 年中价
- [ ] 官方无线上购票平台，`channels[0].url` 为 null 是对的（Dev 处理空 URL 的兜底渲染：显示渠道名但不带外链箭头）
- [ ] 金字塔内部每日限流（胡夫 150 人 × 2 场），可在文案补充

---

### 1.5 马丘比丘 Machu Picchu

```javascript
ticket: {
  price: '外籍成人环线 1（经典）S/152 ≈ ¥300；环线 2 S/152；加购 Huayna Picchu 山 S/200',
  channels: [
    { name: '官方秘鲁文化部',  url: 'https://www.machupicchu.gob.pe/',   note: '唯一官方售票，英西双语，信用卡可付' },
    { name: 'Ticket Machu Picchu', url: 'https://www.ticketmachupicchu.com/', note: '官方授权代理，服务费 ~$5，界面更友好' }
  ],
  bookingWindow: {
    peak:     '旺季 6-8 月 / 圣诞-新年：至少提前 1-2 个月（Huayna Picchu 加购 3 个月）',
    shoulder: '4-5 月 / 9-10 月：2-4 周',
    offpeak:  '雨季 1-3 月：1-2 周（2 月官方关闭维护，无票）'
  },
  timingTip: '选 6:00 首批入场（雾气缭绕的神性视角）或 14:00 后（团客离场、光线金色）；2 月雨季封闭，1 月 / 3 月泥泞需防水鞋'
}
```

**Dev 核对清单**：
- [ ] 票价以秘鲁 Sol 计，PM 按 2024 汇率折算，Dev 以现行实际为准
- [ ] 2024 年起强制按**环线**（Circuit 1-5）分区售票，传统"全园通票"不再存在，文案已适配
- [ ] 2 月官方维护封闭——每年时间略有浮动，Dev 可选是否纳入 UI

---

## 二、Tips 样本 × 3 景点（E-02）

> **Tips 内容标准**（PRD 4.2.3·a）：每条必须命中至少一项具体锚点（数字 / 具体时间 / 具体方向 / 具体名字 / 只有去过才知道的细节）。
> **PM 自检**：下面每条 tip 右侧标注命中的锚点类型。

### 2.1 斗兽场 Tips（6 条）

```javascript
tips: [
  { category: 'ticket', text: '联票 48h 有效含古罗马广场 + 帕拉蒂尼山，分两天玩省 €16 票钱' },
  { category: 'timing', text: '开门前 8:30 到排队 <15 分钟；落日前 16:30 后入场光线最美' },
  { category: 'photo',  text: '从康斯坦丁凯旋门方向拍西立面，16:30 后夕阳正打在断面上' },
  { category: 'route',  text: '出斗兽场走地铁 B 线 Colosseo 站一站到 Circo Massimo，再步行 8 分钟到真理之口' },
  { category: 'season', text: '12-2 月淡季无排队、票价不变；下午 4 点就天黑，要抓紧上午时间' },
  { category: 'secret', text: '加购 Arena Floor + Underground（+€9）能走角斗士通道，90% 游客不知道这个入口' }
]
```

**锚点命中自检**：
| 条 | 锚点 |
|---|---|
| 1 | 数字（48h / €16）✓ |
| 2 | 具体时间（8:30 / 16:30）+ 数字（<15 分钟）✓ |
| 3 | 具体方向（康斯坦丁凯旋门方向 / 西立面）+ 具体时间（16:30）✓ |
| 4 | 具体名字（B 线 Colosseo 站 / Circo Massimo）+ 具体方向 ✓ |
| 5 | 具体时间（12-2 月 / 下午 4 点）+ 数字 ✓ |
| 6 | 具体名字（Arena Floor / Underground）+ 去过才知道 ✓ |

---

### 2.2 故宫 Tips（6 条）

```javascript
tips: [
  { category: 'ticket', text: '全票含绝大部分宫殿，钟表馆 / 珍宝馆各加 ¥10，不看省 ¥20' },
  { category: 'timing', text: '周二-周五 8:30 开门前 10 分钟到午门，1 小时内可拍到空无一人的太和殿广场' },
  { category: 'photo',  text: '从神武门出穿过护城河、再向南 100 米回望，能把景山白塔框进紫禁城屋脊线' },
  { category: 'route',  text: '中轴线走完后往东走东六宫比西六宫人少 40%，延禧宫里就是珍宝馆' },
  { category: 'season', text: '12 月初雪后太和殿是封神机位，但门票需提前 7 天 8:00 准时抢' },
  { category: 'secret', text: '珍宝馆往深处走有珍妃井旁的皇家澡堂遗址，90% 游客看完大殿就走错过了' }
]
```

**锚点命中自检**：
| 条 | 锚点 |
|---|---|
| 1 | 数字（¥10 / ¥20）✓ |
| 2 | 具体时间（周二-五 / 8:30 / 1 小时）+ 具体名字（午门 / 太和殿）✓ |
| 3 | 具体方向（神武门 / 南 100 米）+ 具体名字（景山白塔）✓ |
| 4 | 具体名字（东六宫 / 西六宫 / 延禧宫）+ 数字（40%）✓ |
| 5 | 具体时间（12 月 / 7 天 / 8:00）✓ |
| 6 | 具体名字（珍妃井 / 皇家澡堂）+ 去过才知道 ✓ |

---

### 2.3 圣索菲亚 Tips（6 条）

```javascript
tips: [
  { category: 'ticket', text: '2024 年起游客上层 €25，下层礼拜区对穆斯林免费；上层入口在建筑北侧独立门' },
  { category: 'timing', text: '每日 5 次祷告期间游客通道关闭，避开正午 13:00 左右的 Zuhr 和日落时的 Maghrib' },
  { category: 'dress',  text: '女性需覆肩盖膝戴头巾，门口可免费借；男性避免短裤，违规被劝退' },
  { category: 'photo',  text: '上层廊台北侧的《圣母与幼儿基督》马赛克最清晰，13:30 后西射阳光角度最佳' },
  { category: 'route',  text: '出圣索菲亚穿 Sultanahmet Square 广场 3 分钟到蓝色清真寺，两馆连看最省时' },
  { category: 'secret', text: '二楼楼梯口大理石栏杆上刻着 Halvdan 的北欧海盗涂鸦（9 世纪），在西南角人容易错过' }
]
```

**锚点命中自检**：
| 条 | 锚点 |
|---|---|
| 1 | 数字（€25 / 2024）+ 具体方向（北侧独立门）✓ |
| 2 | 具体时间（13:00 / 日落）+ 具体名字（Zuhr / Maghrib）✓ |
| 3 | 具体要求 + 去过才知道（免费借 / 违规劝退）✓ |
| 4 | 具体方向（上层廊台北侧）+ 具体名字 + 具体时间 ✓ |
| 5 | 具体名字（Sultanahmet Square / 蓝色清真寺）+ 具体时间（3 分钟）✓ |
| 6 | 具体名字（Halvdan / 9 世纪）+ 去过才知道 ✓ |

---

## 三、Dev 集成指引

### 3.1 粘贴位置

`js/data.js` → 对应城市 → `landmarks[]` → 对应景点 object。

**注意**：v2.2 曾定义的 `ticketUrl` / `advanceBooking` / `bestTime` 扁平字段**全部不要写**（已 SUPERSEDED）；原 `ticket: 'string'` 替换为上面的 object 结构。

### 3.2 原 `note` 字段处理

保留作为**硬性提示**（闭馆日、限流、安全警告），不承载软 tip。示例：

```javascript
note: '每日限流 3000 人（全国节假日 8000），周一闭馆（法定假日除外）'
```

上面 3 个景点的 `note` 建议保留原文不动；其他 47 景点 `note` 字段 Dev 无需改动。

### 3.3 空状态兜底（对其他 47 景点）

```javascript
// 其他景点保留最小安全结构
ticket: {
  price: '¥xx',         // 原有单行票价迁移到这里
  channels: [],         // 空数组不渲染"购票渠道"块
  bookingWindow: null,  // null / 缺失不渲染"预约提前"块
  timingTip: null       // null / 缺失不渲染"时段建议"块
},
tips: []                // 空数组不渲染 Tips 模块
```

### 3.4 外链图标处理

门票渠道的 `url` 可能为 `null`（如吉萨金字塔的现场售票），UI 渲染规则：

- `url` 有效：显示渠道名 + 右侧外链箭头 ↗，点击 `target="_blank" rel="noopener"` 跳转
- `url` 为 `null`：只显示渠道名 + `note`，不带外链箭头（避免用户点击无效链接）

---

## 四、PM 后续交付节奏

| 周次 | 补齐范围 | 状态 |
|------|----------|------|
| 本周 | 首批 5 景点门票 + 3 景点 Tips | ✅ 本文件 |
| W+1 | 亚洲剩余（京都/西安/德里/耶路撒冷/吴哥窟）+ 欧洲剩余（伊斯坦布尔其他景点/巴黎/雅典/佛罗伦萨） | TODO |
| W+2 | 非洲（马拉喀什）+ 美洲（墨西哥城）+ 补全所有城市 Tips 到 ≥4 条 | TODO |
| W+3 | 二审所有票价 URL 现行有效性 + 内容 polish | TODO |

PM 每批交付形式：**追加到本文件 + backlog.md PRD Changes Log 记条目**，Dev 直接 copy-paste 进 `data.js`，无需沟通。

---

*—— PM · 2026-04-15 · v2.3 Phase 1 首批内容*
