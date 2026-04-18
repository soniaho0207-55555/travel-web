# Demand Pool — 旅行+历史爱好者需求池

> **维护者**：demand-researcher（`/be-demand-researcher` 加载）
> **消费者**：PM（Mode A 开工前必读 → 翻译成 PRD 需求）
> **纪律**：每段上限 20 条，满了淘汰最旧或已转化的；孤证放"单点线索"不进共性段
> **条目模板**：见 `.claude/agents/demand-researcher.md` §产出模板

---

## 🌍 外部需求信号

> 来源：社区讨论（小红书/知乎/豆瓣/B 站/Reddit/马蜂窝）+ 竞品对标（Atlas Obscura / Lonely Planet / 马蜂窝 / Google Arts & Culture）+ 阵地（马伯庸 / Craig Mod）

- [2026-04-17][竞品 AO] 每日节奏钩子（"Place of the Day" + "Random Place" 双入口）— Armchair 3 分钟逃离场景的内容调度机制 — 证据：AO 首页 hero + 顶部 nav + 首屏按钮 3 处复用 [🟢 v2.7 做 · 无依赖]
  佐证："Get your daily burst of wonder with all-new episodes of The Atlas Obscura Podcast" (AO 首页, 2026-04-16)
  PM 可操作性：高
  → 来源：research/demand-竞品-Atlas-Obscura-2026-04-17.md
- [2026-04-17][竞品 AO] 命题式 List 策展（非"Top 20 in X" 平铺）— 每个 list 一个奇怪命题角度，Content Farmer 选题即内容 — 证据：AO /lists 109 页 650+ 命题式 lists，6 张示例卡均含俏皮副标题+"Including A, B, C, D"命名 [🟢 v2.7 做 · 符合产品定位]
  佐证："36 Graves of Beloved Animals — Dogs and cats aren't the only creatures honored here." (AO /lists, 2026-04-16)
  PM 可操作性：中
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
- [2026-04-17][阵地 Craig Mod] editorial 段落长度 SOP 放开（History Reader 能读 3000 字长文，不应被"段落 ≤ 3 句"限制）— 5 篇 Ridgeline 平均 3000 字，长段（200-400 字）承载完整论证 [🟢 v2.7 做 · B 站渤海小吏 3035 万播放/59 分钟铁证中文长内容容忍度，提档自 🟠]
  佐证：5 篇字数范围 2100-4000，全部≥2000；NYT Nagasaki 长达 3500-4000 字 (Ridgeline 221, 2026-01)
  PM 可操作性：中（修 PRD 内容长度 SOP；同时分层——Armchair Tier 3 仍短 / History Reader Tier 4-5 解锁长段）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md
- [2026-04-17][阵地 Craig Mod] ticket-info 不抢叙事戏（PRD "产品原则"段补充参考）— Craig Mod 给 NYT 写 3500+ 字深度长文零 ticket-info，证明"故事段是真主角，ticket 是辅料"是上限可行的 [🔵 进 PRD 产品原则段，不进 backlog]
  佐证：NYT Nagasaki 全文无票价/开放时间 (Ridgeline 221, 2026-01)；Camino 全文只给"7 天 136 公里 / 15-22℃"，无报名链接 (Ridgeline 226, 2026-04)
  PM 可操作性：低（确认现有 Tier 5 折叠定位正确，写入"产品原则"段；非新功能）
  → 来源：research/demand-阵地-Craig-Mod-Ridgeline-2026-04-17.md
- [2026-04-17][社区 知乎] whyVisit/whySpecial 从"标签"升级为"认知桥"（"为什么好"的一句话，不是"建于 X 年"）— 知乎"古建筑意义"帖多答主反映"感官震撼→理解"的桥梁缺失；与 Craig Mod"反主流叙事"条目互为中英验证 [🟢 v2.7 做 · 与 Craig Mod 条目互为中英验证，直接指导 PM 写 whyVisit 规范]
  佐证："支撑重建的，不是滕王，不是唐，而是滕王阁序" (知乎 zhihu.com/question/37929762, 56 赞)；"韩愈和韩湘子是侄孙关系，我还是在这个湘子庙里知道的，当年学这首诗的时候，老师好像没有讲过" (知乎 zhihu.com/question/616593204, 255 赞)
  PM 可操作性：高（强化 PRD whyVisit 写作 SOP：每个景点加 1 句"为什么好"的认知桥）
  → 来源：research/demand-社区-历史旅行者痛点-2026-04-17.md
- [2026-04-17][社区 知乎] 城市页加"步行路线"串联结构（景点 A →步行 N 米→ 景点 B，每段路附 1 句历史）— 知乎西安 City Walk 帖收藏/赞比 4:1（1030 收藏 / 255 赞）验证"实用工具型"需求；与 Craig Mod Ridgeline "步行作为穿城方式" 4/5 篇形成中英双验证 [🟡 v2.8 做 · 收藏/赞比 4:1 说明强需求但依赖 IA 重构]
  佐证：12 站步行路线每站自带 1-2 句历史背景（湘子庙→韩愈诗 / 下马陵→董仲舒 / 书院门→关中书院），"从市井到小资，从汉唐遗迹到明清遗存" (知乎 zhihu.com/question/616593204, 255 赞)
  PM 可操作性：中（新模块：城市级"漫步路线"区块 + 景点间距离/步行时间）
  → 来源：research/demand-社区-历史旅行者痛点-2026-04-17.md
- [2026-04-17][社区 知乎] 景点关联"文学/名人/诗作"字段（"来到湘子庙才知道韩愈和韩湘子是叔侄"）— 知乎古建帖多答主认为古建/古迹意义 = 文化联想 > 建筑本身；City Walk 帖暗含同一信号 [🟢 v2.7 做 · 低成本高区分度，PM 补数据即可]
  佐证："支撑重建的不是滕王不是唐而是滕王阁序" + "白居易的《琵琶行》——自言本是京城女，家在虾蟆陵下住...说的就是这里" (知乎, 分别 56 赞 / 255 赞)
  PM 可操作性：中（新字段 relatedLiterature / relatedFigure + 编辑 SOP；与 Craig Mod"具名人物卡"同方向的中国侧实现）
  → 来源：research/demand-社区-历史旅行者痛点-2026-04-17.md
- [2026-04-17][社区 知乎] 品牌红线：避免"数字版仿古商业街"感（内容只有年代标签没有空间感/人物/故事 = 假古镇感）— 知乎建筑学答主 + 界面新闻均有反仿古商业街论述 [🔵 进 PRD 产品原则段，不进 backlog]
  佐证："打着古镇古街名号的新建的仿古商业街...就算模仿得很相似，那也看着不对味儿" (知乎 zhihu.com/question/37929762, 54 赞)；"63 个城市有'小圣托里尼'，62 有'小京都'" (界面新闻, 2021)
  PM 可操作性：低（品牌红线/内容质量底线，写入 PRD "产品原则"段；与 Craig Mod ticket-info 条目属同类）
  → 来源：research/demand-社区-历史旅行者痛点-2026-04-17.md
- [2026-04-17][竞品 LP] 城市级 practical info 及格线（交通/到达/货币/最佳季节/签证提示）— LP 的核心强项，所有主流旅行指南（Rick Steves/Rough Guides/DK/Fodor's）均有此模块；我们完全空白 [🟢 v2.7 做 · Planner 及格线，所有竞品都有我们空白]
  佐证："logistics, from which border crossings are reliable" + "cheap eats, local buses" (WorldLocals 六品牌对比文, 2024)；LP 纸质书 Survival Guide 章 = 签证/交通/货币/紧急电话/到达方式
  PM 可操作性：高（新增城市级 practicalInfo 字段组：transport / currency / bestSeason / visaTips）
  → 来源：research/demand-竞品-Lonely-Planet-2026-04-17.md
- [2026-04-17][竞品 LP] 我们的差异化 = 历史文化深度（LP 最弱的方向）— Rick Steves 在 "storytelling, historical context" 上胜出 LP；LP 自己 2023 消费者研究承认旅行者要"fresh takes"而非传统罗列；与 Craig Mod + 知乎多条信号同方向 [🔵 进 PRD 产品原则段·确认方向 · 不是新功能]
  佐证："today's travelers are seeking more local content, fresh takes on ways to experience popular hotspots and off-the-beaten track recommendations" (LP trade 官网, 2023)
  PM 可操作性：高（确认 PRD 叙事深度路线正确，whyVisit/editorial 是差异化武器不是可选配置）
  → 来源：research/demand-竞品-Lonely-Planet-2026-04-17.md
- [2026-04-17][阵地 马伯庸] whyVisit 写法 SOP 参考马伯庸"三明治理论"（大事件不变 / 生活细节考据 / 中间层填想象）+ "古今连接点"（把历史翻译成当代读者能代入的情境）— 5 源强支撑；与 Craig Mod + 知乎"认知桥"条目形成中英+用户侧三角验证 [🟢 v2.7 做 · 极高 PM 可操作性 + 6 重交叉验证]
  佐证："当代读者阅读历史小说关注的不是历史本身，而是历史与自己的连接点" (中新网专访, 2024-10)；"不去改变历史，但在细处可以发挥想象" (中新网, 2024-10)
  PM 可操作性：极高（直接产出 whyVisit 写作 SOP 模板）
  → 来源：research/demand-阵地-马伯庸-2026-04-17.md
- [2026-04-17][阵地 马伯庸] editorial 叙事切入 = 小人物而非帝王（"这里和谁有关？不是皇帝"）— 4 源支撑；与 Craig Mod"具名人物卡"+ 知乎"文学/名人/诗作"同方向 [🟢 v2.7 做 · 与 whyVisit 三明治理论 + Substack AI 免疫整合一次性产出 editorial 写作 SOP]
  佐证："99% 的历史都是帝王将相事迹，希望能通过写作让那些被尘封的小人物重新活过来" (CSDN 全景分析)；"只有理解小人物的生活才能反推大时代变迁" (中新网, 2024-10)
  PM 可操作性：高（每个景点 editorial 加 SOP："找到一个和这个地方有关的非帝王人物"）
  → 来源：research/demand-阵地-马伯庸-2026-04-17.md
- [2026-04-17][竞品 GAC] 产品象限定位 = "内容深度接近 GAC/Craig Mod，实用信息达到 LP 及格线"— 3 竞品交叉验证：AO 奇趣但浅 / LP 实用但内容弱 / GAC 策展级深但零实用 → 我们的差异化 = 中间位（叙事深度 + 实用及格线）[🔵 进 PRD 产品定位段 · 不是新功能，是产品定位坐标]
  佐证：GAC 罗马页 = 14 张文物缩略图 + 百科体简介 + 零 practical info；LP = Survival Guide 极完整但 Background 章弱；AO = 奇趣命题但无 ticket-info
  PM 可操作性：高（写入 PRD "产品定位"段作为三竞品象限图；指导后续所有字段优先级决策）
  → 来源：research/demand-竞品-Google-Arts-Culture-2026-04-17.md
- [2026-04-17][社区 Substack] editorial 写作 SOP 加"AI 免疫条款"（必须有可辨识编辑声音/视角，避免百科体机械生成感）— 2024-2025 新涌现信号：AI 生成旅行内容泛滥 → 读者对"有人味"内容溢价；Substack 订阅市场已验证深度内容付费可行；**Culture Trip 配额制人类内容反面验证：批量化必质劣** [🟢 v2.7 做 · 与马伯庸三明治理论 + 小人物切入整合一次性产出 editorial 写作 SOP]
  佐证：AI-generated cookie-cutter itineraries 进 Substack 读者"不想要"列 (Laura McVeigh, 2025)；"人们正在'夺回旅行写作'，回归真实故事" (评论 N.V. Foxes)；"最终是声音、独特思维方式和真实地方体验让读者产生共鸣" (同文)
  PM 可操作性：高（PRD editorial 写作 SOP 加条款："每段必须有可辨识视角，禁止纯事实堆砌"；人工抽检 AI 味测试）
  → 来源：research/demand-社区-Substack-2026-04-17.md
- [2026-04-18][竞品 CT] PRD 反面教材段：Culture Trip 失败 4 教训 — (1) 撰稿人配额制不可用（20+ 篇/月→ Google 搬运 → 关闭景点仍推荐）(2) commerce 不可污染 editorial（联盟链接造成选择偏见）(3) 规模化必带不准（数据库大但准确性可疑）(4) 本地编辑+复制编辑流程不可抛弃（早期对的方式被自己优化掉了）— $1.55 亿融资仍走不通，2024-02 被 U.S. News 收购 [🔵 进 PRD 产品原则·反面教材段 · 不进 backlog]
  佐证："a very disappointing listicle mill" + "writers have quotas of 20+ articles per month" + "articles published about places closed for more than one year and copied almost directly from Google search results" (Glassdoor 撰稿人原话)；"Culture Trip's Final Pivot: Sells to U.S. News After Raising $155 Million" (Skift, 2024-02)
  PM 可操作性：极高（写入 PRD "产品原则·反面教材"段，作为内容生产 SOP 的负面 anchor）
  → 来源：research/demand-竞品-Culture-Trip-2026-04-18.md
- [2026-04-18][App 马蜂窝] editorial 长内容必须配视觉锚点系统（分段标题 / 内嵌图 / 时间线卡 / 地图标注 / 关键金句卡）— 移动端纯文字海死，但 B 站长视频活；差异在视觉锚点。马蜂窝 PC 万字长文移动化失败 vs 渤海小吏 59 分钟视频 3035 万播放 = 同长度内容因载体形式分生死 [🟡 v2.8 做 · 强需求但需要 Dev 改 editorial 模板，比 SOP 重]
  佐证："万字蜂首到了移动端与九宫格图文 PK，就如同博客遇上微博，注定会逐渐没落" (界面新闻, 2023)；"上千字游记找不到一个推荐景点，不适合当作工具类 APP 使用" (用户原话)；与 [Craig Mod 段落长度] 形成精准执行配对——不只是放开段落长度，是放开 + 加视觉锚点
  PM 可操作性：高（PRD editorial 写作 SOP 加"视觉锚点 checklist"——每 N 段必须配图/卡/地图）
  → 来源：research/demand-App-马蜂窝携程差评-2026-04-18.md

---

## 📊 数据线索

> 来源：GA / 埋点 / 错误日志 / WikiMedia 图片健康度（`audit-wiki-images.csv`）

- [2026-04-17][基建 CEO] 大陆用户图片全部不显示 — 图片源依赖 Wikipedia API (`en.wikipedia.org`) + `upload.wikimedia.org`，两者均被墙 — 国内用户（不开 VPN）看到的城市卡/景点卡全部无图 [🔴 P0 · 面向中国市场的基本可用性问题]
  佐证：CEO 手机实测，大陆 4G 网络下所有图片区域为空白/渐变色兜底
  建议方案：MVP 阶段将图片下载到项目 `images/` 目录，跟随 GitHub Pages 部署，零外部依赖；后期图片量大再迁国内 CDN
  PM 可操作性：高（Dev 一次性批量下载 + 替换图片源路径）
  → 来源：CEO 手机实测 + Explorer 代码审查（`js/app.js:1070` Wikipedia API 调用）

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

- 2026-04-17 淘汰「[竞品 AO] 景点卡三动词按钮」 理由：CEO 已标 🔴 撤，依赖用户系统本期不接
- 2026-04-17 淘汰「[竞品 AO] Gamification 只推供给端不推消费端」 理由：短期无 UGC 落地，品牌原则已有 ticket-info 条目覆盖
- 2026-04-17 淘汰「[竞品 AO] 单一品牌词反复锚定」 理由：品牌决策远期，腾位给操作性更高的马伯庸条目
- 2026-04-17 淘汰「[竞品 AO] 叙事↔目录双向穿针」 理由：与知乎"步行路线串联" + Craig Mod"时代叠加"部分重叠；腾位给 Substack AI 免疫条款；🟡 v2.8 IA 调整远期
- 2026-04-18 淘汰「[阵地 马伯庸] funFact 大藏在小里」 理由：证据弱（2 源同书评/介绍）+ 与 AO 命题式 list 概念重叠；马伯庸条目还有 whyVisit 三明治理论 + editorial 小人物 2 条主条目覆盖；腾位给 Culture Trip 反面教材
- 2026-04-18 淘汰「[竞品 LP] 分区/邻里导航概念」 理由：PM 可操作性低（条目自承"远期 IA 重构，当前不急"）；当前每城 5-8 个景点不需要分区导航；腾位给马蜂窝视觉锚点系统
