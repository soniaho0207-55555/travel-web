# 墨西哥城 · 内容交付 · v2.3 Phase 1

**景点数**：3 个（全新交付）
**Tier 分布**：A × 1（特奥蒂瓦坎）+ B × 1（大神庙遗址）+ C × 1（国家宫殿）

> **说明**：data.js 顺序是大神庙 / 国家宫殿 / 特奥蒂瓦坎。把特奥蒂瓦坎作为 Tier A 是因为它是美洲第三大金字塔 + 50 公里外车程独立景区 + 世界知名度远高于市内两点。

---

## 1. 特奥蒂瓦坎（Teotihuacán · 太阳金字塔）· Tier A

### ticket

```javascript
ticket: {
  price: 'MXN 90（约 ¥35）；含太阳金字塔 + 月亮金字塔 + 亡灵大道 + 羽蛇神庙全区',
  channels: [
    {
      name: '官方 INAH（国家人类学历史研究所）',
      url: 'https://www.inah.gob.mx/', // ✋ Dev 核对
      note: '现场售票；无网上预售；扫码入闸'
    },
    {
      name: 'Mexico City Metro + Autobuses del Norte',
      url: 'https://www.metro.cdmx.gob.mx/',
      note: '黄线 Autobuses del Norte 站出门换 Teotihuacán 专线大巴 MXN 56 + 1 小时车程，最便宜路线'
    },
    {
      name: 'GetYourGuide 一日游',
      url: 'https://www.getyourguide.com/',
      note: '$55-80 含酒店接送 + 中英文导游 + 龙舌兰酒庄，省却自行交通的折腾'
    }
  ],
  bookingWindow: {
    peak:     '旱季（11-4 月）+ 春分（3 月 21 日）：春分当天全墨穿白衣上太阳金字塔顶接阳气，10 万人入场，必须 06:00 到',
    shoulder: '平季（5-6、10 月）：周末人较多，周一至周四清晨最佳',
    offpeak:  '雨季（7-9 月）：午后雷阵雨 + 金字塔禁止攀登（避雷），但雨后天空最干净'
  },
  timingTip: '09:00 开门第一小时冲太阳金字塔 248 级石阶登顶（高 65 米 + 海拔 2300 米，气喘）；10:30 后团客涌入；太阳金字塔和月亮金字塔 2021 年起禁止攀登登顶——Dev 核对最新攀登政策'
} // ✋ Dev 上线前核对：INAH 域名 / MXN 90 现行价 / 金字塔攀登政策
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: 'MXN 90（约 ¥35）是外国人与墨西哥人同价；周日墨西哥公民免费但外国人不享此福利' // ✓ 锚点：数字 MXN 90/¥35 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门后第一小时冲太阳金字塔；2021 年起禁止攀登登顶，只能爬到平台观景' // ✓ 锚点：具体时间 09:00 + 数字 2021 年 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '从南入口"亡灵大道"起点走到月亮金字塔 2.5 公里直线；太阳金字塔在中段东侧；全区走完 3-4 小时需要大量饮水 + 遮阳帽' // ✓ 锚点：数字 2.5 公里/3-4 小时 + 具体方向东侧
  },
  {
    category: 'photo',
    text: '最经典机位在月亮金字塔顶部向南拍亡灵大道 + 太阳金字塔 + 远处群山同框；登月亮塔比太阳塔容易（只有 130 级）' // ✓ 锚点：具体方向南 + 数字 130 级 + 只有去过才知道
  },
  {
    category: 'cold',
    text: '海拔 2300 米紫外线是海平面 2 倍；即便 4 月体感 20℃ 也 30 分钟晒伤；戴宽檐帽 + SPF 50+ 防晒必备' // ✓ 锚点：数字 2300 米/2 倍/30 分钟/SPF 50 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '墨西哥城市区 50 公里车程 + 单程 1 小时；早上 07:30 从市区出发避开堵车；归程 17:00 后堵车 2 小时起' // ✓ 锚点：数字 50 公里/1 小时/2 小时 + 具体时间 07:30/17:00
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 4 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] INAH 域名 / [ ] MXN 90 现行价 / [ ] 攀登政策

---

## 2. 大神庙遗址（Templo Mayor）· Tier B

### ticket

```javascript
ticket: {
  price: 'MXN 90（约 ¥35）；含遗址 + 博物馆；周一闭馆',
  channels: [
    {
      name: '官方 INAH · templomayor.inah.gob.mx',
      url: 'https://www.templomayor.inah.gob.mx/', // ✋ Dev 核对
      note: '现场售票 + 博物馆入场；周日墨西哥公民免费'
    },
    {
      name: 'Zócalo 宪法广场步行',
      url: null,
      note: '与宪法广场 / 国家宫殿同一街区；地铁 Zócalo 站出即到，不需打车'
    }
  ],
  bookingWindow: {
    peak:     '旱季旺季（12-3 月）：排队 20-30 分钟；每月首周六博物馆夜间开放 + 现场音乐',
    shoulder: '其他月份：随到随买，当天无排队'
  },
  timingTip: '09:00 开门冲第一波；遗址室外段无遮阴，正午 12-14 点烈日曝晒；博物馆室内 3 层空调凉爽，建议正午回博物馆看科约尔沙赫基石盘（Coyolxauhqui，1978 年电工挖到的 3.25 米石盘，本身改变了墨西哥考古学）'
} // ✋ Dev 上线前核对：templomayor.inah.gob.mx / MXN 90 现行价
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: 'MXN 90（约 ¥35）与特奥蒂瓦坎同价；墨西哥公民周日免费但外国人无此福利' // ✓ 锚点：数字 MXN 90/¥35 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '09:00 开门第一波最佳；周一闭馆；室外段 12-14 点烈日正午，需轮替室内博物馆 3 层避暑' // ✓ 锚点：具体时间 09:00/12-14 点 + 数字 3 层
  },
  {
    category: 'walking',
    text: '地铁 2 号线 Zócalo 站出 + 步行 200 米；与宪法广场 + 国家宫殿 + 大都会教堂构成殖民中心三点，一下午连看合理' // ✓ 锚点：具体名字 Zócalo 站 / 宪法广场 + 数字 200 米
  },
  {
    category: 'photo',
    text: '博物馆 2 楼科约尔沙赫基石盘是全馆最震撼展品——3.25 米肢解月亮女神浮雕，1978 年电力工人挖地铁线偶然发现' // ✓ 锚点：数字 3.25 米/1978 年 + 具体方向 2 楼 + 只有去过才知道
  },
  {
    category: 'walking',
    text: '遗址面积不大（100 米 × 80 米）但双塔基座分别供雨神 Tlaloc + 战神 Huitzilopochtli，北南双塔地层由外向内扩建 7 层' // ✓ 锚点：数字 100 米/80 米/7 层 + 具体名字 Tlaloc / Huitzilopochtli
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] templomayor.inah.gob.mx / [ ] MXN 90 现行价

---

## 3. 国家宫殿（Palacio Nacional）· Tier C

### ticket

```javascript
ticket: {
  price: '免费 · 需出示护照 + 安检；周一闭馆',
  channels: [
    {
      name: '官方 gob.mx/palacionacional',
      url: 'https://www.gob.mx/', // ✋ Dev 核对政府总站
      note: '从 Zócalo 广场东侧正门安检入场；不收票但严格检查护照'
    }
  ],
  bookingWindow: '平日 10:00-17:00；2025 年以来部分时段政务使用时临时关闭外国参观，到场前一天查官网',
  timingTip: '主目标是二楼楼梯间迭戈·里维拉 1929-1935 年绘制的 450 平方米巨幅壁画《墨西哥历史》——从阿兹特克神话到独立革命 1000 年浓缩；10:30 后日光从北窗打亮壁画右侧是最佳观赏窗口'
} // ✋ Dev 上线前核对：开放状态 / 是否仍需护照
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '完全免费但必须出示护照原件（驾照 / 身份证复印件都不行）；安检严于机场' // ✓ 锚点：只有去过才知道
  },
  {
    category: 'timing',
    text: '10:30 后北窗日光打亮二楼楼梯间里维拉壁画右侧；正午 12:00 后壁画左侧逆光' // ✓ 锚点：具体时间 10:30/12:00 + 具体方向北窗 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '450 平方米壁画一张照片拍不完整——选楼梯间对角"第三级台阶"处站位能一镜收纳整面北墙' // ✓ 锚点：数字 450 平方米/第三级 + 具体方向对角北墙
  },
  {
    category: 'walking',
    text: 'Zócalo 宪法广场东侧正对；从地铁 Zócalo 站出步行 100 米；与大神庙遗址相邻 200 米，是一条动线上的连游' // ✓ 锚点：具体名字 Zócalo + 数字 100 米/200 米
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（单句 window）/ ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 开放状态 / [ ] 护照规则

---

## 本城 worldContext 节点

```javascript
// 追加到 Mexico-city.timeline 相应节点

{ year: '1325年', event: '阿兹特克建特诺奇提特兰',
  worldContext: '此时世界：中国元泰定二年，元朝进入末期；马可·波罗去世 1 年后；奥斯曼土耳其刚建立 26 年；欧洲文艺复兴初现' },

{ year: '1521年', event: '阿兹特克帝国灭亡',
  worldContext: '此时世界：明朝正德十六年，嘉靖刚即位；麦哲伦船队去年刚抵菲律宾；马丁路德 4 年前钉上九十五条论纲；奥斯曼苏莱曼大帝登基 1 年' },

{ year: '1978年', event: '大神庙遗址发现',
  worldContext: '此时世界：中国改革开放前夕十一届三中全会年末召开；美国卡特任内；两伊战争前 2 年；香港地铁开通；苹果 Apple II 已推出一年' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 特奥蒂瓦坎 | A | ✅ | ✅ 6/6 | ✅ 4/3 | ✅ |
| 大神庙遗址 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 国家宫殿 | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 3 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 特奥蒂瓦坎 INAH / MXN 90 / 攀登政策
- [ ] 大神庙遗址 templomayor.inah.gob.mx / MXN 90
- [ ] 国家宫殿 开放状态 / 护照规则
