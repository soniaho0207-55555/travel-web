# demand research: 竞品 - Lonely Planet 城市页 - 2026-04-17

## 输入源

- **来源类型**：竞品对标
- **对象**：Lonely Planet（LP）城市指南——纸质书 + 网站 + App 三端
- **样本**：LP trade 官网新版指南介绍 / WorldLocals 六品牌对比文 / Pratt IxD LP App 设计评论 / WebSearch 综合（LP 城市指南章节结构、消费者研究） / 已有 AO 研究交叉对比
- **抓取方式**：WebFetch（LP 主站客户端渲染无法抓正文；Chrome MCP 域名拦截）+ WebSearch 间接
- **抓取局限**：LP 主站 (`lonelyplanet.com`) 全部客户端渲染，WebFetch 只拿到框架代码（JS + nav + metadata），无法获取任何正文内容。Chrome MCP 也拦截该域名。本研究基于**第三方分析文章 + LP 官方 trade 页 + LP App 评论 + WebSearch 摘要**，未直接抓到 LP 城市页正文。

---

## LP 城市指南字段结构（综合多源还原）

### 纸质书（2023 新版 bluespine）

| 章节 | 内容 | 对应我们 app 的字段 |
|---|---|---|
| **QuickStart** | 城市亮点、当地生活、分区概览、日程规划器、"Need to Know" | overviewShort + bestTimeToVisit |
| **Explore (分区)** | 按城区/邻里逐个展开，每区含景点+餐厅+住宿+酒吧+购物 | 我们没有"分区"概念 |
| **Top Experiences** | 编辑精选 must-see 列表（含简短 editorial 段） | highlights / whyVisit |
| **Best Of** | 最佳步行路线、最佳娱乐、最佳博物馆、最佳公园等分类 | 我们没有分类列表 |
| **Survival Guide** | 签证、交通、货币、紧急电话、到达方式、市内交通 | practicalInfo |
| **Background & History** | 城市历史概述、文化背景、"帮旅行者理解所见之物的语境" | overviewLong / whyVisit |
| **Books/Films/Music** | 关联文化作品推荐 | 我们没有 — 与知乎"文学/名人"需求信号共鸣 |

### 网站 (`lonelyplanet.com/destinations/...`)

| 模块 | 内容 | 备注 |
|---|---|---|
| Hero | 城市大图 + 标题 | 客户端渲染，WebFetch 不可见 |
| Related Guides | "Best things to do" / "Best time to visit" / "Getting around" / "Best neighborhoods" / "Top free things" / "Day trips" 等文章链接（罗马页有 10 个） | 每个 Guide 是独立文章页 |
| Articles / Stories | 编辑长文（24 hours in X / Things to know before X） | 也是客户端渲染 |

**关键发现**：LP 网站不是一个"城市百科页"，而是**一个文章入口集合页**——主页只是卡片链接，真正的内容分散在各篇文章里。这和 AO 的"一个城市 = 一个聚合页 + 多个 place 卡"模式完全不同。

### App (iOS/Android)

| 模块 | 字段 |
|---|---|
| 首页 | 搜索 + 已保存城市 + 可用城市列表 |
| 城市指南 | 地图（半屏）+ 分类按钮（All / See / Eat / Sleep / Shop / Drink / Play） |
| 景点卡 | 分类色标图标 + 名称 + 简介 + 地图定位 |

**Pratt IxD 评论的 UX 问题**：
- 图标无文字标注 → 用户不知道按钮代表什么
- 地图选点后列表滚动到顶部但无视觉高亮 → 低可发现性
- 依赖用户已有 LP 纸质书经验 → 新用户上手差

---

## 信号扫描

| 信号 | 频次 | 代表引文 | 来源 |
|---|---|---|---|
| **LP 的核心强项 = practical info 完整度**（签证/交通/货币/到达方式） | 3 源 | "logistics, from which border crossings are reliable" + "cheap eats, local buses" | WorldLocals |
| **LP 的核心弱项 = 历史文化深度不足** | 2 源 | Rick Steves 在 "storytelling, historical context" 上胜出 LP；Rough Guides 在 "longer chapters and thoughtful essays" 上胜出 LP | WorldLocals |
| **LP 2023 消费者研究 = 旅行者要 local content + off-the-beaten-track** | 1 源（官方） | "today's travelers are seeking more local content, fresh takes on ways to experience popular hotspots and off-the-beaten track recommendations" | LP trade |
| **LP 网站 = 文章入口集合页而非城市百科** | 直接观察 | 罗马页 Related Guides = 10 篇文章链接（Best things / Best time / Getting around / Neighborhoods / Free things / Day trips），无一体化城市概览 | WebFetch metadata |
| **LP 分类体系 = 功能导向（See/Eat/Sleep/Shop/Drink/Play）** | 2 源 | App 用这 6 类标签；纸质书 Explore 章也按分区+功能分类 | Pratt IxD + WebSearch |
| **LP 有 Background & History 章但用户评价偏低** | 2 源 | WorldLocals 只字未提 LP 的历史段是强项；Rick Steves 和 Rough Guides 的历史/文化段被明确褒奖 | WorldLocals |
| **LP 有 Books/Films/Music 推荐** | 1 源 | "how to learn more about the culture through books, films, music and food recommendations" | WebSearch |
| **LP App 的 IA 问题 = 图标无标注 + 低可发现性** | 1 源 | "icons are designed obscurely that without any signifier of text, it is very hard to understand what each icon represents" | Pratt IxD |
| **LP 信息过时是常见抱怨** | 1 源 | "depending on the region...some books may go a few years without refresh" | WorldLocals |

---

## 共性需求（≥2 个独立来源支撑）

### 1. Practical info 完整度是传统指南的"标配底线"

LP 的核心竞争力 = 签证/交通/货币/到达方式/本地交通/预算分级（budget/midrange/top end）。3 个来源（WorldLocals + WebSearch + LP trade）确认。Rick Steves / Rough Guides / DK / Fodor's 也都有类似模块。

- 对应 persona：**Planner**（"能直接抄进行程的结构化信息"）
- 我们 app 现状：v2.6.1 有 ticket-info（门票/开放时间），但缺**城市级 practical info**（交通/到达/货币/签证/最佳季节）
- 信号：这不是差异化点（所有竞品都有），但是**及格线**——没有会被 Planner 直接判死

### 2. 历史/文化深度 = LP 的短板，Rick Steves / Rough Guides 的强项

2 源明确指出 LP 在故事性和文化深度上不如 Rick Steves（"storytelling, historical context"）和 Rough Guides（"longer chapters and thoughtful essays"）。LP 自己 2023 消费者研究也承认旅行者要"fresh takes"而非传统罗列。

- 对应 persona：**History Reader**（核心 JTBD = "教我因果链"）
- 我们 app 的机会：**我们的 editorial / whyVisit 已经走 Craig Mod 路线（叙事深度 > 信息罗列），在历史文化深度上超过 LP 是完全可能的**。LP 的弱项 = 我们的差异化空间
- 与已有池条目关系：Craig Mod "whyVisit 反主流叙事" + 知乎 "认知桥" 两条都指向同一方向——这个方向恰好是 LP 最弱的地方

### 3. "分区/邻里"导航 = LP 独有的 IA 模式

LP 的 Explore 章按城市分区展开（如罗马的 Trastevere / Centro Storico / Vatican），每个分区内含景点+餐厅+住宿。App 也以地图+分区为核心导航。2 源确认（纸质书结构 + App IA）。

- 对应 persona：**Planner**（"在一个区域内把所有事安排好"）
- 我们 app 现状：城市页只有"景点列表"，没有分区概念
- 与知乎"步行路线串联"需求的关系：分区导航 = 地理组织方式，步行路线 = 时间组织方式。两者互补不矛盾

### 4. 功能分类标签（See/Eat/Sleep/Shop/Drink/Play）= 旅行指南的通用分类法

LP App 和纸质书都用这套分类。DK Eyewitness 也有类似分类（配色标图标）。2 源确认。

- 对应 persona：**Planner**（按需求快速筛）
- 我们 app 现状：景点没有功能分类标签
- 这是一个**功能性需求**而非内容需求，优先级取决于景点数量——我们现在每城 5-8 个景点，分类意义不大；当每城 20+ 景点时才有分类必要

---

## 单点线索（仅 1 个来源，先挂着）

### 1. Books/Films/Music 推荐模块

LP 有"通过书籍/电影/音乐了解当地文化"的推荐。与知乎"文学/名人/诗作"需求信号方向一致，但 LP 是"消费推荐"（你该看什么书），我们的方向是"景点关联"（这个景点和哪首诗/哪个人绑定）。不同实现，同一底层需求。

### 2. LP 信息过时问题

"depending on the region...some books may go a few years without refresh" —— 纸质书天然有这个问题。我们 app 作为数字产品，可以标注"数据截至 YYYY-MM"做差异化。

### 3. LP 2023 消费者研究结论

"travelers seek local content, fresh takes, off-the-beaten-track" —— 这是 LP 自己的调研结论，与我们之前多个信号共鸣（AO 命题式 list / Craig Mod 小街区深描 / 知乎 City Walk 反网红）。单一来源但可信度高（LP 自己的消费者研究）。

---

## 噪音 / 已排除

- **LP App 的 UX 交互问题**（图标无标注/低可发现性）—— 这是 App 设计问题不是内容需求信号。不进。
- **LP 的商业模式变化**（2020 被 Red Ventures 收购后的策略调整）—— 与我们产品无关。不进。
- **LP 纸质书 vs 数字化的讨论** —— 媒介问题不是内容结构问题。不进。

---

## 与已有池条目 + 竞品 AO 研究的交叉对比

| 维度 | Atlas Obscura | Lonely Planet | 我们 app（现状） | 建议方向 |
|---|---|---|---|---|
| **内容定位** | 奇怪/隐秘/非主流 | 全覆盖/实用/预算 | 历史名城深度 | 保持深度路线 |
| **城市页 IA** | 城市 = 聚合页（places + stories + lists） | 城市 = 文章入口集合 | 城市 = 景点列表 | 向 AO 学聚合 |
| **景点字段** | 名称/简介/GPS/编辑者/3 按钮 | 分类标签/简介/地图/价格分级 | 名称/whyVisit/ticket-info/editorial | 补分区+关联文学 |
| **历史深度** | 中（奇趣角度，非学术） | 低（Background章存在但弱） | 中-高（whyVisit v2.6.1） | 拉到高（认知桥） |
| **Practical info** | 几乎没有 | 极完整（Survival Guide） | 低（只有 ticket-info） | 补城市级 practical |
| **文学/文化关联** | 无 | 有（Books/Films/Music 段） | 无 | v2.7 新增字段 |
| **步行路线** | 无 | 有（Best Walks 段） | 无 | v2.8 新增模块 |
| **分区导航** | 无 | 核心 IA（Explore 章按分区） | 无 | 远期考虑 |

---

## 建议 PM 下一轮关注

- [pool-候选 1] 城市级 practical info 及格线（交通/到达/货币/最佳季节/签证提示）— LP 的核心强项，我们完全空白，Planner 及格线
- [pool-候选 2] 我们的差异化 = 历史文化深度（LP 最弱的方向）— LP 消费者研究也确认旅行者要"fresh takes"；Craig Mod + 知乎信号同方向
- [pool-候选 3] 分区/邻里导航概念 — LP 独有 IA 模式，当每城景点 20+ 时考虑

---

## 纪律备注

- **抓取局限**：LP 主站全部客户端渲染 + Chrome MCP 域名拦截，本研究未直接抓到任何 LP 城市页正文。基于第三方分析还原。后续如 CEO 能手动截图 LP 罗马/京都/西安城市页，可补充验证。
- **与 AO 研究的互补**：AO = 内容策展模式（奇趣非主流）；LP = 实用指南模式（全覆盖 practical）。两者分别代表"内容差异化"和"功能及格线"两个维度。我们 app 需要同时从两者学。
