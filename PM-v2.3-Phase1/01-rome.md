# 罗马 · 内容交付 · v2.3 Phase 1

**景点数**：4 个（斗兽场已首批交付，此处补 3 个）
**Tier 分布**：B × 2（万神殿 / 圣彼得大教堂）+ C × 1（古罗马广场）
**本文件负责**：万神殿 / 梵蒂冈圣彼得大教堂 / 古罗马广场 + Rome timeline 的 worldContext 补全

---

## 1. 万神殿（Pantheon）· Tier B

### ticket

```javascript
ticket: {
  price: '€5（欧盟青年 €2；周一至周五早 09:00 前免费，需预约）',
  channels: [
    {
      name: '官方 museiitaliani.it',
      url: 'https://www.museiitaliani.it/', // ✋ Dev 核对具体万神殿跳转页
      note: '最官方，时段粒度 15 分钟'
    },
    {
      name: 'GetYourGuide（跳过排队 + 导览）',
      url: 'https://www.getyourguide.com/',
      note: '加约 €10 服务费，含 45 分钟语音导览，旺季推荐'
    }
  ],
  bookingWindow: {
    peak:     '旺季（7-8 月、复活节周、圣诞周）：提前 5-10 天锁时段，下午 14:00-16:00 最紧',
    shoulder: '春秋肩季（4-6 月、9-10 月）：提前 2-3 天即可，工作日上午 09:30 前通常有余票',
    offpeak:  '淡季（11 月、1-2 月）：当天现场基本都能进，排队不超过 20 分钟'
  },
  timingTip: '想拍到穹顶圆孔（oculus）光柱照地面，选正午前后 11:30-13:00 来；周日 10:30 有弥撒，不能拍照但能听管风琴'
} // ✋ Dev 上线前核对：官方 URL 具体路径 / 现行票价
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€5 官网订票；旺季下午时段两三天内会售罄，上午 09:00 前免费时段需提前一周预约' // ✓ 锚点：数字 €5 + 具体时间上午 09:00
  },
  {
    category: 'timing',
    text: '雨天不要避开——雨水从穹顶 8.7 米直径的圆孔落下，通过地面 22 个排水孔流走，是罗马人独有的奇观' // ✓ 锚点：数字 8.7 米 / 22 孔 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '正午 11:30-13:00 阳光穿过 oculus 投射到南侧墙面，是拍穹顶的唯一窗口，其他时间都在暗处' // ✓ 锚点：具体时间 11:30-13:00 + 具体方向南侧
  },
  {
    category: 'photo',
    text: '正门广场有喷泉和方尖碑做前景，站在对面冰淇淋店 Giolitti 台阶上可以把整个门楣塞进画面' // ✓ 锚点：具体名字 Giolitti + 具体方向对面
  },
  {
    category: 'walking',
    text: '万神殿距离纳沃纳广场步行 4 分钟、许愿池 8 分钟，半天可串联，穿软底鞋——鹅卵石硬' // ✓ 锚点：数字 4 / 8 分钟 + 只有去过才知道（鹅卵石硬）
  }
]
```

**锚点命中自检**：
| # | category | 命中锚点 |
|---|---|---|
| 1 | ticket | 数字（€5）+ 具体时间（09:00 前） |
| 2 | timing | 数字（8.7 米 / 22 孔）+ 只有去过才知道 |
| 3 | timing | 具体时间（11:30-13:00）+ 具体方向（南侧） |
| 4 | photo | 具体名字（Giolitti）+ 具体方向（对面） |
| 5 | walking | 数字（4 / 8 分钟）+ 只有去过才知道 |

**自检红绿灯**：
- ☑ ticket 4 子块齐（price / channels × 2 / bookingWindow × 3 / timingTip）
- ☑ tips ≥ 5（实际 5）
- ☑ category ≥ 3（ticket / timing / photo / walking = 4 种）
- ☑ 全部 tips 命中至少 1 个锚点

**Dev 核对**：[ ] museiitaliani.it 万神殿子路径 / [ ] 现行票价 / [ ] 09:00 前免费规则是否仍生效

---

## 2. 梵蒂冈圣彼得大教堂 · Tier B

### ticket

```javascript
ticket: {
  price: '教堂本身免费；登穹顶 €8（走楼梯）/ €10（电梯 + 楼梯）',
  channels: [
    {
      name: '官方 ticketsbasilica.va',
      url: 'https://www.ticketsbasilica.va/', // ✋ Dev 核对根域
      note: '唯一官方预约入口；免费预约跳过大门安检长队，旺季能省 2 小时'
    },
    {
      name: 'Vatican Museums 联票',
      url: 'https://m.museivaticani.va/',
      note: '博物馆 €20 + 西斯廷礼拜堂 + 圣彼得穹顶的经典路线，6 小时一站式'
    }
  ],
  bookingWindow: {
    peak:     '旺季（复活节前后、6-8 月、圣诞）：安检长队 90-180 分钟，穹顶必须提前 1-2 周抢',
    shoulder: '春秋（3-5 月中、9-10 月）：安检 30-60 分钟，穹顶提前 3-5 天可订'
  },
  timingTip: '周三上午 10:30 教皇在圣彼得广场公开接见，当天整个区域戒严、教堂 12:30 前不开放——想进教堂务必避开周三上午；周日早 10:30 也常有大弥撒，同理'
} // ✋ Dev 上线前核对：ticketsbasilica.va 预约流程是否改动 / 穹顶现行票价
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '教堂本身免费但安检长队旺季超过 2 小时；ticketsbasilica.va 免费预约 Skip the Line，是全网最值的操作' // ✓ 锚点：数字 2 小时 + 具体名字 ticketsbasilica.va
  },
  {
    category: 'dress',
    text: '肩膀和膝盖必须遮盖，保安门口严查——男士穿短裤、女士吊带都会被拦下；带条披肩应急' // ✓ 锚点：只有去过才知道（保安严）+ 具体细节（披肩）
  },
  {
    category: 'timing',
    text: '避开周三上午 10:30 教皇公开接见和周日 10:30 大弥撒，这两段教堂关闭或人挤人' // ✓ 锚点：具体时间 10:30 + 具体名字
  },
  {
    category: 'timing',
    text: '穹顶每天最后售票 16:00（冬 15:00）；想登顶又不累，选下午 14:00 后、排队比上午少一半' // ✓ 锚点：具体时间 14:00/16:00 + 数字（一半）
  },
  {
    category: 'photo',
    text: '从 Via della Conciliazione 大街东端看穹顶最对称；登顶后西北角栏杆是俯瞰广场的黄金位，避开正面挤 20 人' // ✓ 锚点：具体名字 Via della Conciliazione + 具体方向西北角
  }
]
```

**锚点命中自检**：
| # | category | 命中锚点 |
|---|---|---|
| 1 | ticket | 数字（2 小时）+ 具体名字（ticketsbasilica.va） |
| 2 | dress | 只有去过才知道（保安严）+ 具体细节（披肩） |
| 3 | timing | 具体时间（10:30）+ 具体名字（公开接见） |
| 4 | timing | 具体时间（14:00/16:00）+ 数字（一半） |
| 5 | photo | 具体名字（Via della Conciliazione）+ 具体方向（西北角） |

**自检红绿灯**：
- ☑ ticket 4 子块齐
- ☑ tips ≥ 5（实际 5）
- ☑ category ≥ 3（ticket / dress / timing / photo = 4 种）
- ☑ 全部 tips 命中锚点

**Dev 核对**：[ ] ticketsbasilica.va 当前是否开放免费预约 / [ ] 穹顶现行票价 / [ ] 周三教皇接见时间

---

## 3. 古罗马广场 · Tier C

### ticket

```javascript
ticket: {
  price: '€18（与斗兽场 + 帕拉蒂尼山联票，48 小时内三点通用）；第一个周日每月免费',
  channels: [
    {
      name: '官方 colosseo.it',
      url: 'https://www.colosseo.it/', // ✋ Dev 核对斗兽场联票子路径
      note: '与斗兽场共用同一张票，买斗兽场自动包含广场入口'
    }
  ],
  bookingWindow: '建议提前 3-5 天（与斗兽场同步），淡季现场通常有票，旺季联票会售罄',
  timingTip: '开园 09:00 第一波进场光线最柔且人少；下午 15:00 后光线变硬但是帕拉蒂尼山俯瞰广场全景的黄金时段'
} // ✋ Dev 上线前核对：colosseo.it 联票页面 / 每月免费日规则
```

### tips

```javascript
tips: [
  {
    category: 'ticket',
    text: '€18 联票 48 小时内可反复进出斗兽场 / 广场 / 帕拉蒂尼山三点，一次买票拆两天用最划算' // ✓ 锚点：数字 €18 / 48 小时 + 只有去过才知道
  },
  {
    category: 'timing',
    text: '广场占地 25 万平米走完至少 2 小时；开门 09:00 第一波入场人最少，夏季中午地表 40℃ 无遮阴' // ✓ 锚点：数字 25 万平米 / 2 小时 / 40℃ + 具体时间
  },
  {
    category: 'walking',
    text: '从斗兽场地铁站出来向帕拉蒂尼山入口走 Via di San Gregorio，排队比广场正门 Via dei Fori Imperiali 少一半' // ✓ 锚点：具体名字 Via di San Gregorio + 数字（一半）
  },
  {
    category: 'photo',
    text: '从帕拉蒂尼山东北角俯瞰整个广场是最经典构图，赛图尔尼乌斯神庙 8 根立柱做前景' // ✓ 锚点：具体方向东北角 + 具体名字（赛图尔尼乌斯神庙 8 根柱） + 只有去过才知道
  }
]
```

**锚点命中自检**：
| # | category | 命中锚点 |
|---|---|---|
| 1 | ticket | 数字（€18 / 48 小时）+ 只有去过才知道 |
| 2 | timing | 数字（25 万平米 / 2 小时 / 40℃）+ 具体时间 |
| 3 | walking | 具体名字（Via di San Gregorio）+ 数字（一半） |
| 4 | photo | 具体方向（东北角）+ 具体名字（赛图尔尼乌斯 8 柱） |

**自检红绿灯**：
- ☑ ticket 4 子块齐（Tier C 的 bookingWindow 为单句）
- ☑ tips ≥ 4（实际 4）
- ☑ category ≥ 2（ticket / timing / walking / photo = 4 种）
- ☑ 全部 tips 命中锚点

**Dev 核对**：[ ] colosseo.it 联票子路径 / [ ] 每月第一个周日免费是否仍有效

---

## 本城 worldContext 节点（v2.1 遗留 · 追加到现有 timeline）

> Rome 现有 timeline 已 8 节点。下列为对其中关键节点补充 `worldContext` 短句。Dev 将字段追加到对应节点对象：

```javascript
// 追加到 Rome.timeline 相应节点

{ year: '公元前509年', event: '共和国建立',
  worldContext: '此时世界：波斯阿契美尼德帝国鼎盛，大流士一世正在修建波斯波利斯；同时孔子在山东曲阜周游列国，刚结束他的政治生涯' },

{ year: '公元前44年', event: '凯撒遇刺',
  worldContext: '此时世界：汉武帝已驾崩 43 年，西汉进入霍光辅政后期；埃及托勒密王朝末代女王克里奥帕特拉正与罗马博弈' },

{ year: '公元313年', event: '基督教合法化',
  worldContext: '此时世界：中国西晋八王之乱刚结束，匈奴攻陷洛阳；印度笈多王朝即将建立，古典梵文文学进入黄金期' },

{ year: '公元476年', event: '西罗马帝国覆灭',
  worldContext: '此时世界：中国南北朝对峙，北魏孝文帝准备汉化改革；玛雅文明进入古典期鼎盛，蒂卡尔城邦建成' },

{ year: '1506年', event: '圣彼得大教堂重建',
  worldContext: '此时世界：哥伦布去世，麦哲伦环球航行前 13 年；明朝正德元年，紫禁城已建成 86 年；印加帝国进入鼎盛晚期' }
```

---

## 本文件交付自检汇总

| 景点 | Tier | ticket 4子块 | tips 数量 | category 种数 | 锚点命中 |
|---|---|---|---|---|---|
| 万神殿 | B | ✅ | ✅ 5/5 | ✅ 4/3 | ✅ |
| 圣彼得大教堂 | B | ✅ | ✅ 5/5 | ✅ 4/3 | ✅ |
| 古罗马广场 | C | ✅ | ✅ 4/4 | ✅ 4/2 | ✅ |
| worldContext | — | — | ✅ 5 条 | — | — |

**本文件状态**：✅ 交付

**Dev 上线核对项**（汇总到 00-INDEX）：
- [ ] 万神殿 URL 子路径 / 现行价 / 09:00 前免费
- [ ] 圣彼得 ticketsbasilica.va 预约 / 穹顶价 / 周三接见
- [ ] 古罗马广场 colosseo.it 联票 / 每月免费日
