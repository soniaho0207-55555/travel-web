# demand research: 阵地 - Craig Mod / Ridgeline 近期 - 2026-04-17

## 输入源

- **来源类型**：阵地（CEO 钦定的英文深度游写作基线）
- **对象**：Craig Mod 个人 newsletter Ridgeline（craigmod.com/ridgeline/）
- **样本量**：5 篇（时间窗 2025-11 至 2026-04，半年）
- **抓取方式**：WebFetch（公开 Substack/个人站，无反爬）
- **样本选择逻辑**：从近 10 期里挑 5 篇与"城市百科 + 景点深度"产品定位最相关的——"城市推荐"(221)、"城市重访"(225)、"小街区深描"(224)、"单店深描"(218)、"徒步路线"(226)。跳过纯反思/个人随笔（222 Eras、220 New Year）。

| # | 期号 | 主题 | URL |
|---|---|---|---|
| 1 | 221 | 给 NYT 的 Nagasaki 推荐（2026 年 52 Places） | https://craigmod.com/ridgeline/221/ |
| 2 | 225 | 重返 Nagasaki（post-NYT media trip） | https://craigmod.com/ridgeline/225/ |
| 3 | 224 | Toyohashi 运河上方的商店（小街区深描） | https://craigmod.com/ridgeline/224/ |
| 4 | 218 | Imoya 天丼店的"无手机"规则（单店深描） | https://craigmod.com/ridgeline/218/ |
| 5 | 226 | 葡萄牙海岸 Camino 步行（7 天 136 公里团队行走） | https://craigmod.com/ridgeline/226/ |

**信噪比评估**：5 篇均为同一作者原创，视角/写法一致性高。Craig Mod 只代表他自己 + 约 4-5 万 Ridgeline 订阅者，不是"英文深度游写作"的平均值。本研究性质 = **基线参照**（"英文深度游的上限长什么样"），不是"民意抽样"。警惕：把 Craig Mod 的个人偏好当行业共识。

---

## 信号扫描

| 信号 | 频次 | 代表引文 | 来源 |
|---|---|---|---|
| **中等城市作为反人潮主张** | 4/5 篇 | "These mid-sized options are more and more critical as cultures becomes more and more homogenous." | 221 |
| 中等城市（同上） | — | "A life in a city like Nagasaki can be a beautiful thing, wholly different from a life in Tokyo." | 221 |
| 中等城市（同上） | — | "Toyohashi, a city between nowhere and somewhere else" | 224 |
| **步行 / 慢节奏作为穿城方式** | 4/5 篇 | "On both of my Tōkaidō walks, one particular bit of Toyohashi has stood out to me" | 224 |
| 步行（同上） | — | 标题直接 "Walk and Talk — The Portuguese Coastal Camino" / "Start With a Walk" | 226 / 223 |
| 步行（同上） | — | "the real life, and much of the other stuff is the interruption" | 226 |
| **小店 / 具名人物作为城市灵魂** | 4/5 篇 | "the crankiest husband and wife you ever met" / "Imoya" | 218 |
| 具名人物（同上） | — | "a blonde-haired dude with pink spectacles...wearing, today, a kind of black fur vest" (Nekoze Shoten 书店老板) | 224 |
| 具名人物（同上） | — | "old husband-wife mochi shop" / "Nothing like this will ever exist again." | 221 |
| 具名人物（同上） | — | 餐厅 Milestone / Fujio / Umegae-mochi Kikusui 直接点名 | 225 |
| **时代叠加的写作密度**（过去→现在→未来同一段） | 3/5 篇 | Toyohashi 战后黑市 (1945) → 1964-67 建设 → 当下衰退/复兴 → 混凝土寿命猜测 | 224 |
| 时代叠加（同上） | — | Imoya 23 年前 → 当代咖啡馆现象 → 爵士喫茶历史 → 未来的手机柜子 | 218 |
| 时代叠加（同上） | — | 原爆历史 → 浦上 vs 中心区分 → 当代年轻人推动城市发展 | 225 |
| **长文容忍度**（深度订阅者愿意读 2000-4000 字） | 5/5 篇 | 5 篇字数范围 2100-4000 | 218/221/224/225/226 |
| **实用信息的主动缺席**（无票价、无开放时间、无季节详表） | 2/5 篇强 | NYT Nagasaki 3500-4000 字全文**零** ticket-info | 221 |
| 实用信息缺席（同上） | — | Camino 全文只给"7 天 136 公里 / 15-22℃"，无住宿价、无报名链接 | 226 |
| 重访叙事 | 1/5 | "The more I visit, the more I love it." / post-NYT media trip | 225 |
| 规则作为体验设计 | 1/5 | 禁言禁手机禁浪费饭粒的"四规" | 218 |
| 中文/非英文"不翻译"术语 | 3/5 篇 | "tendon" / "tōkaidō" / "kakure kirishitan" / "wa-ka-ran" 直接用罗马字不翻译 | 218 / 224 / 225 |

---

## 共性需求（≥2 个独立来源支撑）

### 1. 中等城市需要"为什么是它"的元叙事

4 篇中 Craig Mod 反复强调：长崎、Toyohashi 之所以值得写，不是因为"它好玩"，而是因为"它是大都市之外的文化保护区"——这个**城市的理由**（why-this-city）先于任何景点清单。

- 对应 persona：**History Reader**（要因果不要标签）、**Planner**（要"和东京对比"的差异化选择）
- 我们 app 现状：v2.6.1 的 whyVisit 字段上线，但多数城市填的是"景点级"原因（"罗马有古迹""京都有寺庙"），缺"城市级"的理由（"为什么是这个尺寸的城市值得一去")
- 参考：221 对长崎的定位是"被广岛阴影掩盖的、独立存在的城市"——这是一个**反主流叙事**的锚点

### 2. 具名小店 / 具名人物作为"城市人"的接入点

4 篇中每篇都点名具体的小店 + 常常是具名老板（"Takeuchi-san & Nakagami-san"、"the crankiest husband and wife"、"a blonde-haired dude with pink spectacles"）。这些个体**不是景点**，但构成了 Craig Mod 版本的"城市肌理"。

- 对应 persona：**History Reader**（名字+人物让叙事有血肉）、**Content Farmer**（"老夫妇的餅店" 是可截图金句）、**Armchair**（情绪钩）
- 我们 app 现状：城市页只有"景点卡"，没有"人物/店铺卡"——我们是百科体，Craig Mod 是人类学体
- 不等于要做 UGC——可以是**编辑精选的"城市代表店/人"卡**（Tier 5 Sensory+Insider 段）

### 3. 时代叠加 = 一段话里压三个时代

3 篇中 Craig Mod 把"过去/现在/未来"挤进一个段落（Toyohashi 段从 1945 黑市 → 1964 水上楼 → 现在的衰退/复兴 → 混凝土寿命的猜测）。这个笔法让"地点"变成"时间切片"。

- 对应 persona：**History Reader**（反转钩的结构基础）
- 我们 app 现状：editorial 大多到"建于 X 年" 就停笔——缺"这件事现在还在演"的尾巴
- 参考：224 Toyohashi 的结构模板 = 时代 1 → 时代 2 → 现在 → 对未来的一个未定论式猜测

### 4. 深度订阅者能读 2000-4000 字长文

5 篇全部 ≥ 2000 字，平均 3000 字。这验证：深度旅游读者（History Reader + 硬核 Planner）不畏惧长文，**反而厌恶"段落 ≤ 3 句"的过度分段**。

- 对应 persona：**History Reader**（15-30 分钟 stay-length）
- 我们 app 现状：PRD 对 editorial 长度没有明确 SOP，当前实操偏短
- 参考：Craig Mod 的段落结构 = 长段（200-400 字）承载一个完整论证，而不是把每句话切成独立段

### 5. 实用信息（票价/开放时间）主动缺席 → 品牌纪律信号

221 给 NYT 写的 3500+ 字长文、226 的 Camino 全景记录——**没有一个票价、没有一个营业时间**。这不是疏忽，是 Craig Mod 的**定位主张**：深度写作不靠 ticket-info 卖。

- ⚠️ **这条对我们是反向信号**，需要辩证看：Planner persona 明确说"ticket-info 才是我来的原因"（audience_personas.md Section E）。
- 真正的需求信号不是"删掉 ticket-info"，而是**"ticket-info 不能抢叙事的戏"**——当前 v2.6.1 已经把 ticket-info 放在 Tier 5，方向正确
- 参考价值：Craig Mod 给了一个"上限证明"——**一篇没有 ticket 的文章也能让读者想去**。证明 whyVisit / 故事段是真主角，ticket 是辅料

---

## 单点线索（仅 1 个来源，先挂着）

### 1. 重访叙事（225 独有）

Craig Mod 重访长崎后提出"可持续旅游 = 靠口碑不靠广告"的论点。单一样本，不够下结论——但这个"第一次是惊艳 / 第二次是深化"的双层叙事结构，我们的景点/城市页**只有一层**，值得后续观察。

### 2. 规则作为体验设计（218 独有）

Imoya 的禁言禁手机禁浪费米饭、爵士喫茶的纸条点歌、京都教堂咖啡的 2 小时预约——这些"不合理的规则后来成了你热爱的东西"是一个独立主题。我们 app 不做交易/预约所以不直接相关，但对于**景点的"参观礼仪/当地规矩"** 或许可做一个 Tier 5 段位。

### 3. 不翻译关键术语（3 篇暗合但不是主信号）

`tendon` / `tōkaidō` / `kakure kirishitan` / `wa-ka-ran` 直接使用罗马字不翻译。对英文读者来说，这传达"这是特有概念，不能被英文词替代"的文化尊重。中文网站对应做法可能是"保留日文/葡萄牙文原名而非意译"，但这是 taste 层决策，不是需求信号，归**去 taste 层**。

---

## 噪音 / 已排除

- **"Walk and Talk" 付费团队模式**（226 深入描述）——这是 Craig Mod 的商业模式，不是用户需求信号。不进。
- **Craig Mod 个人的"第二本书"预告**（226 结尾提及）——作者个人出版节奏，与本产品无关。不进。
- **Substack 订阅转化率数据**（Craig Mod 在多篇提及付费订阅）——Substack 的业务模型与我们 app 场景不匹配。不进。
- **幸存者偏差警告**：Craig Mod 的订阅者已经是"愿意读英文长文旅行写作"的自选人群，**不能代表 Armchair / Parent persona**。本研究信号偏 History Reader / Planner 两个深度 persona，需提醒 PM 不要把这里的信号误用到 Armchair / Parent 的场景。

---

## 建议 PM 下一轮关注

- [pool-候选 1] 城市 whyVisit 字段需要"城市级反主流叙事"（"为什么是它"而非"它有什么"）— 3 篇 Craig Mod 强支撑
- [pool-候选 2] 城市页加"代表店铺/人物"卡（Tier 5 Sensory+Insider）— 4 篇强支撑
- [pool-候选 3] editorial 故事段加"时代叠加"结构（过去→现在→未定论未来）— 3 篇强支撑
- [pool-候选 4] editorial 段落长度 SOP 放开 —  History Reader 能读 3000 字长文，不要被"段落 ≤ 3 句"限制 — 5 篇全部支撑
- [pool-候选 5]（品牌原则）ticket-info 不抢叙事戏——当前 Tier 5 的定位是正确的，记入 PRD "产品原则"段 — 2 篇强支撑

---

## 与已有池条目的关系

| 池中已有条目 | 本研究关系 |
|---|---|
| [竞品 AO] 景点卡三动词按钮 | 无关——AO 是 Planner 工具化视角，Craig Mod 是 History Reader 叙事视角 |
| [竞品 AO] 每日节奏钩子 | 无关——Craig Mod 是周更 newsletter 节奏，不直接可搬 |
| [竞品 AO] 命题式 List 策展 | **弱共鸣**——Craig Mod 的"单店深描"可以理解为"N=1 的命题式 list"，但本质不同（AO 聚合 / Craig Mod 单刀深入）。不进池子 |
| [竞品 AO] 叙事↔目录双向穿针 | **共鸣**——Craig Mod 的文中穿插具名地点，等于"读故事→去这"的内嵌路径。AO 已给出更明确的产品形态（"In This Story"模块），本研究**不单独立条**，让池中 AO 条目继续覆盖 |
| [竞品 AO] 品牌原则（gamification / 单一品牌词） | **共鸣**——Craig Mod 对 ticket-info 的"主动缺席"是另一种品牌纪律信号，可作为 PM 写 PRD "产品原则"段时的补充参考，不单独立条 |

---

## 纪律备注

- **CEO 钦定阵地**：Craig Mod 是"英文深度游写作的基线"——不是"平均值"，是"上限锚点"。PM 使用本池条目时应明确："这是 Craig Mod 的做法，我们做不做取决于我们的 persona 权重"。
- **下次扫描窗口**：agent 规定"每月至少扫一次"，建议下一次 2026-05-17 前。关注他是否继续出 Toyohashi 式"小街区深描"——那个笔法最可直接迁移到我们景点页。
