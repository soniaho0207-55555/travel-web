# Demand Pool — 旅行+历史爱好者需求池

> **维护者**：demand-researcher（`/be-demand-researcher` 加载）
> **消费者**：PM（Mode A 开工前必读 → 翻译成 PRD 需求）
> **纪律**：每段上限 20 条，满了淘汰最旧或已转化的；孤证放"单点线索"不进共性段
> **条目模板**：见 `.claude/agents/demand-researcher.md` §产出模板

---

## 🌍 外部需求信号

> 来源：社区讨论（小红书/知乎/豆瓣/B 站/Reddit/马蜂窝）+ 竞品对标（Atlas Obscura / Lonely Planet / 马蜂窝 / Google Arts & Culture）+ 阵地（马伯庸 / Craig Mod）

- [2026-04-17][竞品 AO] 景点卡三动词按钮（Been Here? / Want to Visit? / Add to List）— 一张卡同时服务 Armchair/Planner/Content Farmer 三种意图 — 证据：AO 城市页+place 详情两页共 8+ 张卡，按钮布局一致 [🔴 撤 · 依赖用户系统，本期不接]
  佐证：Tokyo 页 7 张 Attractions 卡每张均有三按钮 (AO Tokyo 页, 2026-04-16)
  PM 可操作性：高
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][竞品 AO] 每日节奏钩子（"Place of the Day" + "Random Place" 双入口）— Armchair 3 分钟逃离场景的内容调度机制 — 证据：AO 首页 hero + 顶部 nav + 首屏按钮 3 处复用 [🟢 v2.7 做 · 无依赖]
  佐证："Get your daily burst of wonder with all-new episodes of The Atlas Obscura Podcast" (AO 首页, 2026-04-16)
  PM 可操作性：高
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][竞品 AO] 命题式 List 策展（非"Top 20 in X" 平铺）— 每个 list 一个奇怪命题角度，Content Farmer 选题即内容 — 证据：AO /lists 109 页 650+ 命题式 lists，6 张示例卡均含俏皮副标题+"Including A, B, C, D"命名 [🟢 v2.7 做 · 符合产品定位]
  佐证："36 Graves of Beloved Animals — Dogs and cats aren't the only creatures honored here." (AO /lists, 2026-04-16)
  PM 可操作性：中
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][竞品 AO] 叙事↔目录双向穿针（article 中嵌入 place 卡 + place 页反向挂 stories）— 从"读故事"滑到"去这"的双向通道 — 证据：AO article 正文嵌"In This Story" + 城市页"Stories About X" [🟡 v2.8 做 · IA 调整]
  佐证：Hansel 文中 "In This Story — Add Quedlinburg Abbey to a New List — Destination Guide Germany 69 Articles 813 Places" (AO article, 2026-04-16)
  PM 可操作性：中
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][竞品 AO] Gamification 只推供给端不推消费端（榜贡献者而非打卡者）— 未来开 UGC/社区时的品牌红线参考 — 证据：AO 城市页"Tokyo Leaderboard"三榜 Places Added/Edited/Visited，重心是贡献榜；place 详情有多人署名+"Edit this listing"显眼 [🔵 写进 PRD "产品原则"段，不进 backlog]
  佐证：Vampire Café 2011 年发布 2026 年仍被 5+ 人持续编辑，"Added By serflac · Edited By Nyssa, Molly McBride Jacobson, atimian, Hermit09..." (AO Vampire Café 页, 2026-04-17)
  PM 可操作性：低（短期无 UGC 落地；长期品牌原则）
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][竞品 AO] 单一品牌词反复锚定（AO 以"wonder"贯穿所有触点）— 品牌人格化的纪律参考 — 证据：AO 首页 5 处"wonder"+ tagline + podcast slogan + newsletter slogan + meta title，单词反复而非同义词轮换 [🔵 品牌决策，CEO 后续拍板]
  佐证：tagline "The Definitive Guide To The World's Hidden Wonders" + meta "Curious and Wondrous Travel Destinations" (AO 首页, 2026-04-16)
  PM 可操作性：低（品牌决策，需 PM+UX+PMO 共议）
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][阵地 Craig Mod] whyVisit 字段需"城市级反主流叙事"（"为什么是它"而非"它有什么"）— Craig Mod 4 篇均把"中等城市作为大都市之外的文化保护区"作为城市的元理由，先于景点清单 [🟢 v2.7 做 · 指向城市级 overviewLong 写作规范，v2.6.1 景点级 whyVisit 写作不中断]
  佐证："These mid-sized options are more and more critical as cultures becomes more and more homogenous." (Ridgeline 221 NYT Nagasaki, 2026-01)
  PM 可操作性：高（直接修订 PRD 中 whyVisit 的写作 SOP）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md
- [2026-04-17][阵地 Craig Mod] 城市页加"代表店铺/具名人物"卡（Tier 5 Sensory+Insider）— 4 篇均把具名小店和具名老板作为"城市肌理"的接入点，构成百科条目之外的"人"维度 [🟡 v2.8 做 · 依赖编辑力，暂无资源]
  佐证：Imoya 店"the crankiest husband and wife you ever met" (Ridgeline 218, 2025-11) ；Toyohashi Nekoze Shoten "Takeuchi-san & Nakagami-san" (Ridgeline 224, 2026-03)
  PM 可操作性：中（新字段 + 编辑选店选人 SOP；非 UGC）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md
- [2026-04-17][阵地 Craig Mod] editorial 故事段加"时代叠加"结构（一段压三个时代：过去→现在→未定论未来）— 让"地点"变"时间切片"，避免景点叙事停在"建于 X 年" [🟢 v2.7 做 · 与现有 MEANWHILE 卡协同升级]
  佐证：Toyohashi 段从 1945 战后黑市 → 1964-67 水上楼建设 → 现在的衰退/复兴 → 混凝土寿命的猜测 (Ridgeline 224, 2026-03)；Imoya 23 年前 → 当代咖啡馆现象 → 未来手机柜子 (Ridgeline 218, 2025-11)
  PM 可操作性：中（PRD 编辑指引："时间线最后一格必须是'现在仍在 X'或'未来可能 Y'"）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md
- [2026-04-17][阵地 Craig Mod] editorial 段落长度 SOP 放开（History Reader 能读 3000 字长文，不应被"段落 ≤ 3 句"限制）— 5 篇 Ridgeline 平均 3000 字，长段（200-400 字）承载完整论证 [🟠 v2.8 评估 · 分层试验，Armchair/Parent 用户禁用长文]
  佐证：5 篇字数范围 2100-4000，全部≥2000；NYT Nagasaki 长达 3500-4000 字 (Ridgeline 221, 2026-01)
  PM 可操作性：中（修 PRD 内容长度 SOP；同时分层——Armchair Tier 3 仍短 / History Reader Tier 4-5 解锁长段）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md
- [2026-04-17][阵地 Craig Mod] ticket-info 不抢叙事戏（PRD "产品原则"段补充参考）— Craig Mod 给 NYT 写 3500+ 字深度长文零 ticket-info，证明"故事段是真主角，ticket 是辅料"是上限可行的 [🔵 进 PRD 产品原则段，不进 backlog]
  佐证：NYT Nagasaki 全文无票价/开放时间 (Ridgeline 221, 2026-01)；Camino 全文只给"7 天 136 公里 / 15-22℃"，无报名链接 (Ridgeline 226, 2026-04)
  PM 可操作性：低（确认现有 Tier 5 折叠定位正确，写入"产品原则"段；非新功能）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md

---

## 📊 数据线索

> 来源：GA / 埋点 / 错误日志 / WikiMedia 图片健康度（`audit-wiki-images.csv`）

_（空）_

---

## 💡 内部脑暴

> 来源：CEO 脑暴 / 朋友吐槽 / 饭局金句 / 家人使用反馈

_（空）_

---

## ✅ 已转化

> PM 翻译成 PRD 条目后，侦察兵或 PMO 把原条目从上面移到这里（档案用）
> 格式：`- [原条目] → PRD vX.Y 附录 X · X-## | 转化日期 YYYY-MM-DD`

_（空）_

---

## 历史淘汰

> 长期未被 PM 触碰 / 被新条目覆盖 / 证据过时的条目移这里
> 格式：`- YYYY-MM-DD 淘汰「XXX」 理由：XXX`

_（空）_
