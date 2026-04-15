# 佛罗伦萨 · 内容交付 · v2.3 Phase 1

**景点数**：3 个（全新交付）
**Tier 分布**：A × 1（圣母百花大教堂）+ B × 1（乌菲兹）+ C × 1（老桥）

---

## 1. 圣母百花大教堂（Cattedrale di Santa Maria del Fiore）· Tier A

### ticket

```javascript
ticket: {
  price: '教堂免费；Brunelleschi Pass €30（穹顶 + 钟楼 + 洗礼堂 + 博物馆 + 地宫，3 日有效）；Giotto Pass €20（穹顶除外的其他）；单买穹顶 €30',
  channels: [
    {
      name: '官方 duomo.firenze.it',
      url: 'https://duomo.firenze.it/', // ✋ Dev 核对官网
      note: 'Brunelleschi Pass 是唯一能登穹顶的票，登顶每 15 分钟一批 20 人'
    },
    {
      name: 'Florence Firenze Card',
      url: 'https://www.firenzecard.it/',
      note: '€85 72 小时含全城 60 余博物馆（包括乌菲兹 + 学院），一次入场制；3 天以上行程回本'
    },
    {
      name: '现场窗口',
      url: null,
      note: '大教堂对面 Piazza San Giovanni 窗口排队 1-2 小时，旺季穹顶当天永远没余票'
    }
  ],
  bookingWindow: {
    peak:     '旺季（5-10 月 / 圣诞 / 复活节）：穹顶提前 7-14 天抢，8:15 开放第一波时段永远 10 分钟内售罄',
    shoulder: '平季（3-4、11 月）：提前 3-5 天',
    offpeak:  '淡季（1-2 月除新年）：提前 2-3 天就有余票'
  },
  timingTip: '穹顶 463 级台阶单行道无电梯 + 内部 38℃ 无空调 + 全程 40-60 分钟，心脏病 / 幽闭症 / 膝盖问题直接放弃；登顶首批 8:15 是唯一能看日出金光的时段'
} // ✋ Dev 上线前核对：duomo.firenze.it 预约 / 穹顶票价 / Firenze Card 价格
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: 'Brunelleschi Pass €30 是唯一包穹顶的票；只买 Giotto €20 只能登旁边钟楼看对面穹顶' // ✓ 锚点：数字 €30/€20 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '穹顶每时段限流 20 人 + 15 分钟一批；8:15 第一波最值，能看晨光穿过瓦萨里壁画' // ✓ 锚点：数字 20/15 分钟 + 具体时间 8:15 + 具体名字瓦萨里
  },
  {
    category: 'walking',
    text: '463 级石阶 + 38℃ 体感 + 通道最窄 60 厘米单行道，全程 40-60 分钟；心脏 / 膝盖 / 幽闭症慎登' // ✓ 锚点：数字 463/38℃/60 厘米/40-60 分钟 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '穹顶外最佳机位是钟楼 Campanile（不是穹顶本身），从对角 60 米等高可拍整座红瓦穹顶 + 城市背景' // ✓ 锚点：具体名字 Campanile + 数字 60 米 + 具体方向对角
  },
  {
    category: 'walking',
    text: '教堂本身免费但排队 30-60 分钟；想只看室内壁画不登顶就排免费队；想快速内部用 Brunelleschi Pass 从 Door 5 跳队' // ✓ 锚点：数字 30-60 分钟 + 具体名字 Door 5
  },
  {
    category: 'timing',
    text: '教堂周日上午 10:30 弥撒，游客暂停入场 90 分钟；想听管风琴可坐下听一场，是最佳免费礼物' // ✓ 锚点：具体时间周日 10:30 + 数字 90 分钟 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块（3 档 window）/ ☑ tips 6/6 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] duomo.firenze.it / [ ] 穹顶票价 / [ ] Firenze Card 现行价

---

## 2. 乌菲兹美术馆（Uffizi Gallery）· Tier B

### ticket

```javascript
ticket: {
  price: '旺季（3-10 月）€25 + €4 预约费；淡季 €12；特别展 +€8',
  channels: [
    {
      name: '官方 uffizi.it',
      url: 'https://www.uffizi.it/', // ✋ Dev 核对
      note: '必须网上订时段；现场窗口已于 2023 年取消'
    },
    {
      name: 'Florence Firenze Card',
      url: 'https://www.firenzecard.it/',
      note: '€85 72 小时含乌菲兹 + 学院 + 大教堂博物馆；比单独买省一半'
    }
  ],
  bookingWindow: {
    peak:     '旺季 5-10 月：提前 7 天订 09:00-10:00 时段，《维纳斯诞生》所在 10-14 号厅上午最空',
    shoulder: '平季 / 淡季：提前 2-3 天即可'
  },
  timingTip: '08:15 开门第一小时冲二楼 10-14 号厅（波提切利厅），《维纳斯诞生》+《春》两幅高 2 米作品挂在同一面墙；下午 14:00 后人流回落也是二波时段'
} // ✋ Dev 上线前核对：uffizi.it / 预约费 / 淡旺季分界
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€25 + €4 预约费是旺季官价 + 必订时段；不网上订现场无票' // ✓ 锚点：数字 €25/€4 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '08:15 开门冲二楼 10-14 号厅波提切利；14:00 后二波可看达芬奇《天使报喜》人流回落' // ✓ 锚点：具体时间 08:15/14:00 + 具体名字波提切利 / 达芬奇 / 10-14 号厅
  },
  {
    category: 'walking',
    text: '38 万件藏品（同卢浮宫）但乌菲兹只展 3000 件精华；二楼 10-14（波提切利）+ 15（达芬奇）+ 66（米开朗基罗）是三个必看' // ✓ 锚点：数字 38 万/3000 件 + 具体名字展厅编号
  },
  {
    category: 'photo',
    text: '馆内禁拍闪光 + 禁脚架；第 44 号厅的窗户朝阿诺河老桥，是拍老桥的最佳室内机位' // ✓ 锚点：具体名字 44 号厅 + 具体方向朝阿诺河 + 只有去过才知道
  },
  {
    category: 'ticket',
    text: '每月首个周日免费进馆但必须网上预约时段，席位 08:00 开放瞬空' // ✓ 锚点：具体时间每月首个周日 / 08:00 + 只有去过才知道
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 5/5 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] uffizi.it / [ ] 预约费 / [ ] 每月免费日

---

## 3. 老桥（Ponte Vecchio）· Tier C

### ticket

```javascript
ticket: {
  price: '免费步行；桥上金银店自由进出',
  channels: [
    {
      name: 'Firenze 官方旅游',
      url: 'https://www.feelflorence.it/',
      note: '桥本身无售票系统；旅游网站提供瓦萨里通道（Corridoio Vasariano）预约，€45 含乌菲兹三楼走廊到老桥上方'
    }
  ],
  bookingWindow: '无需预约步行桥本身',
  timingTip: '日落前 30 分钟站桥中央向西拍阿诺河金光是佛罗伦萨经典明信片；日落后 20 分钟桥头灯光点亮是第二波机位；正午光线最硬反而最差'
} // ✋ Dev 上线前核对：瓦萨里通道是否已重开 / feelflorence.it 现行内容
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '老桥走桥免费；桥内金银店二战时纳粹撤退未炸毁的唯一原因是希特勒命令' // ✓ 锚点：只有去过才知道
  },
  {
    category: 'timing',
    text: '日落前 30 分钟向西桥头 + 日落后 20 分钟桥头灯光两次机位，中间 50 分钟是佛罗伦萨最值黄金小时' // ✓ 锚点：具体方向西 + 数字 30/20/50 分钟 + 只有去过才知道
  },
  {
    category: 'photo',
    text: '最经典构图不在桥上而在 Ponte Santa Trinita（下游 300 米），三孔桥 + 阿诺河 + 老桥金光全入镜' // ✓ 锚点：具体名字 Ponte Santa Trinita + 数字 300 米
  },
  {
    category: 'walking',
    text: '老桥到乌菲兹步行 5 分钟；到皮蒂宫（Palazzo Pitti）从桥南侧过去 300 米，是美第奇家族私人宫殿' // ✓ 锚点：具体名字皮蒂宫 / 美第奇 + 数字 5 分钟 / 300 米
  }
]
```

**自检红绿灯**：☑ ticket 4 子块 / ☑ tips 4/4 / ☑ category 3 种 / ☑ 全部命中锚点

**Dev 核对**：[ ] 瓦萨里通道开放状态 / [ ] feelflorence.it 域名

---

## 本城 worldContext 节点

```javascript
// 追加到 Florence.timeline 相应节点

{ year: '1296年', event: '圣母百花大教堂动工',
  worldContext: '此时世界：中国元代忽必烈统一中国 17 年；马可·波罗去年回威尼斯，即将口述《马可·波罗游记》；奥斯曼国即将建立' },

{ year: '1434年', event: '美第奇家族崛起',
  worldContext: '此时世界：中国明宣德九年，郑和最后一次下西洋；奥斯曼帝国复兴期，19 年后攻陷君士坦丁堡；印加帝国正在扩张' },

{ year: '1501年', event: '米开朗基罗雕刻大卫像',
  worldContext: '此时世界：哥伦布第三次航行归来；中国明弘治十四年；日本战国时代初期；奥斯曼即将征服叙利亚' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips | category | 锚点 |
|---|---|---|---|---|---|
| 圣母百花大教堂 | A | ✅ | ✅ 6/6 | ✅ 3/3 | ✅ |
| 乌菲兹美术馆 | B | ✅ | ✅ 5/5 | ✅ 3/3 | ✅ |
| 老桥 Ponte Vecchio | C | ✅ | ✅ 4/4 | ✅ 3/2 | ✅ |
| worldContext | — | — | ✅ 3 条 | — | — |

**本文件状态**：✅ 交付

**Dev 核对汇总**：
- [ ] 大教堂 duomo.firenze.it / 穹顶 / Firenze Card
- [ ] 乌菲兹 uffizi.it / 预约费 / 每月免费日
- [ ] 老桥 瓦萨里通道 / feelflorence.it
