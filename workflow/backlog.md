# Backlog — 环球史迹 Travel-Web

> Source of truth for all task assignments. Every role MUST read this before starting work.
> Only PMO updates task status. Other roles add findings to their designated sections.

---

## Active Sprint — 2026-04-15（v2.2 气质升级）

> **第二轮用户反馈**（用户反馈-2026-04-14-2349.md）已归档为 PRD 附录 D。以下 D-01 ~ D-07 是本轮 Dev 核心任务。
> **红线**：D-01/D-02/D-03 必须作为一组同时发布，任何一项不达标整体气质无法升档。

### P0 — Must Fix（气质红线 · 一组发）

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| D-01 | 全站 emoji 替换为金色 monoline SVG（主题卡 / tab bar / 景点元数据 / 同年世界 / 搜索框 / 去除国旗 emoji） | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-01，图标规格见 9.5.1 |
| D-02 | 正文字体策略升级（字号 16px / Regular / 行距 1.75 / 米色不透明） | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-02，规格见 9.5.2 |
| D-03 | 景点门票信息模块重构（加 ticketUrl / advanceBooking / bestTime） | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-03，规格见 4.2.3·a |

### P1 — Should Fix

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| D-04 | 城市概述加"继续阅读 →"展开长版（overviewFull 字段） | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-04 |
| D-05 | 海洋文明主题封面换图（当前错误为 Colosseum） | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-05，PM 推荐 Carthage 或 Venice |

### P2 — Polish

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| D-06 | Hero 虚化从 20px 降到 10px + 图片切换 300ms 淡入 | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-06 |
| D-07 | "上滑发现更多"文案换成 SVG 呼吸下箭头 | [ASSIGNED:Dev-H5] | TODO | PRD 附录 D · D-07 |

---

## Previous Sprint — 2026-04-14（已合并 dev → main，QA 全 PASS）

### P0 — Must Fix

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| 1 | Fix image background-size bug: `style="background:"` overrides CSS `background-size:cover`. Change to `style="background-image:"` or set backgroundSize in JS. Affects city cards, landmark banners, search thumbs. | [ASSIGNED:Dev-H5] | TODO | See 用户反馈 #1 #2 |
| 2 | Fix search empty state: searching non-existent content shows blank page, should show "未找到结果" with recommendations. | [ASSIGNED:Dev-H5] | TODO | See 用户反馈 #11 |

### P1 — Should Fix

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| 3 | Invalid route (e.g. `#/city/cusco`) silently redirects to home. Add "未找到该城市" prompt. | [ASSIGNED:Dev-H5] | TODO | |
| 4 | Search page theme cards missing cover images. Data has `cover` field, wire it up. | [ASSIGNED:Dev-H5] | TODO | |
| 5 | Filter bar needs scroll indicator (fade mask or arrow on right side). | [ASSIGNED:Dev-H5] | TODO | |
| 6 | Hero area: make entire hero section clickable, not just CTA button. | [ASSIGNED:Dev-H5] | TODO | |

### P2 — Nice to Have

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| 7 | Add world events to timeline tab (currently only in landmarks). | [ASSIGNED:PM] | TODO | PM 先确认需求写入 PRD，再交 Dev |
| 8 | Improve back button visibility on light hero backgrounds. | [ASSIGNED:Dev-H5] | TODO | |
| 9 | Detail page bottom nav has no active state. Consider hiding or adding breadcrumb. | [ASSIGNED:Dev-H5] | TODO | |
| 10 | Landmark expand/collapse needs smooth animation. | [ASSIGNED:Dev-H5] | TODO | CSS transition already exists, check if working |

---

## QA Findings

> QA: Add new bugs here. Format: `- [P0/P1/P2] Description (page, steps to reproduce)`

### 2026-04-15（v2.2 第二轮）— D-02 修复回归 feature/v2.2-taste-upgrade @ f877b34

**环境**：feature/v2.2-taste-upgrade HEAD @ commit f877b34，端口 8090，375×812 viewport，强制 reload 取新 CSS

**总体结果**：✅ **D-02 修复通过，全 7 项 PASS**（D-01/D-03/D-07 回归无破坏）。建议合并 dev → main。

#### D-02 复测（Rome 详情页 → 重要景点 → 展开第一景点）

| 元素 | 修前 | 修后 | 期望 | 结论 |
|---|---|---|---|---|
| `.overview p` | 16/28 (1.75) | 16/28 (1.75) | 16px/1.75 | ✅ PASS（无改动）|
| `.landmark-desc` | 16/28 (1.75) | 16/28 (1.75) | 16px/1.75 | ✅ PASS（无改动）|
| `.timeline-desc` | **15/26.25** | **16/28 (1.75)** | 16px/1.75 | ✅ **FIXED** |
| `.info-value` | **14/22.4 (1.60)** | **16/28 (1.75)** | 16px/1.75 | ✅ **FIXED** |

四个 PRD 点名的正文元素全部到达 16px / Regular / line-height 1.75 / `#F5EFE0`。

#### 辅助类元素（Dev 设计取舍 · 接受）

| 元素 | 字号 | 说明 |
|---|---|---|
| `.info-row`（advanceBooking/bestTime 提示行）| 14px / 22.4px (1.60) | 注入字段后实测；Dev 声明为 hint/tip 类辅助信息，与正文形成视觉层次 |
| `.info-note` | 14px / 23.1px (1.65) | 同上，辅助信息层 |

QA 立场：PRD 附录 D · D-02 仅点名 4 个正文元素，未要求所有文本统一 16px。14px 辅助层可作为视觉次序的合理设计取舍，不计为 FAIL。**若 PM 后续要求所有文字一律 16px，再立新条。**

#### 回归验证（D-01 / D-03 / D-07，无破坏）

- **D-01**：3 页（`#/`、`#/city/rome`、`#/search`）`body.innerHTML` emoji 正则扫描全空，SVG 计数 43/18/9（rome 多 2 因为新展开 landmark） ✅
- **D-03**：注入北京故宫 `ticketUrl` + `advanceBooking` + `bestTime` → 展开后 `.info-row=2`（icon-clock 「提前 7 天预约」+ icon-lightbulb 「清晨人少」）+ `.ticket-link`（icon-externalLink，`href=https://example.com/buy`），渲染契约不变 ✅
- **D-07**：`#heroScrollHint` 仍含 `icon-arrowDown` SVG 与 `breathe` 1.2s 无限呼吸；scrollY=200（>100px 阈值）后加 `.faded`、opacity 平滑过渡至 0，`transition: opacity 0.4s` ✅

#### 合并建议

✅ **可合并 dev → main**。所有 7 条气质红线已落地，PMO 可推进 dev branch 合并流程。

#### 遗留（不阻塞合并 · 转 PM 跟进）

- **QA-D-04（仍有效）** `js/data.js` 15 座城市 `overviewFull` 字段全部缺失 → 线上看不到「继续阅读」按钮，D-04 仅有代码无内容。PM 任务清单已挂「首批 3 座（罗马/北京/伊斯坦布尔）overviewFull 长版概述」TODO，建议下个版本前补齐。
- **QA-D-03-data（仍有效）** 48 景点 `ticketUrl` / `advanceBooking` / `bestTime` 字段尚未填充。D-03 渲染契约 OK，但实际景点卡只能展示原有 `ticket` 字段。PM 任务清单已挂「首批 3-5 城样本」TODO。

---

### 2026-04-15 — v2.2 气质升级首次验收 feature/v2.2-taste-upgrade @ 6d24575（PRD 附录 D，D-01 ~ D-07）

**环境**：feature/v2.2-taste-upgrade HEAD @ commit 6d24575，端口 8090，移动端 viewport（375×812 模拟），Chromium headless

**总体结果**：6/7 PASS，1 项 **FAIL（P1）**：D-02 字号规格未全量落地。另有 1 项数据空白需 PM 跟进（D-04 的 `overviewFull` 字段在 15 座城市 `js/data.js` 中全部为 undefined，代码路径已完成但暂无内容可显示）。

| ID | 严重度 | 预期 | 实际 | 结论 |
|----|:-----:|------|------|:----:|
| D-01 | P0 | 全站 emoji 替换为金色 monoline SVG | 首页/罗马详情/搜索页三处 `body.innerHTML` emoji 正则扫描均为空数组；SVG 图标计数 43/16/9；tab bar/主题卡/搜索框/chevron/info-row 等均采用 `svg.icon` + `stroke="currentColor"` 金色描线 | ✅ PASS |
| D-02 | P0 | `.overview p` / `.timeline-desc` / `.landmark-desc` / `.info-value` 全部 16px / Regular / line-height 1.75 / `#F5EFE0` | `.overview p` 16/28 ✓；`.landmark-desc` 16/28 ✓；**`.timeline-desc` 15/26.25**（字号偏差 1px）；**`.info-value` 14/22.4**（字号偏差 2px，行距 1.60 非 1.75） | ❌ **FAIL (P1)** |
| D-03 | P0 | 注入 `ticketUrl` / `advanceBooking` / `bestTime` 后，展开景点卡渲染 3 条信息（clock/lightbulb/外链图标）；无数据时不渲染 | 注入北京故宫 3 字段后：2 条新 `.info-row`（`icon-clock` + `icon-lightbulb`）+ 票价行内追加 `.ticket-link`（`icon-externalLink` 10px，`href` 正确）。同页长城（未注入）展开后 `.info-row=0`、无 `.ticket-link`，空态正确 | ✅ PASS |
| D-04 | P1 | 城市概述末尾「继续阅读 →」展开 `overviewFull`，再次点击收起 | 注入 `overviewFull` 后：`.overview-toggle#overviewToggle` 渲染「继续阅读 + `icon-chevronDown`」；点击后 `.overview-full` 加 `.open`，`max-height 0→1500px`（`transition: max-height 0.4s, margin-top 0.4s`），按钮文案变「收起」，SVG `transform: rotate(180deg)`（`transition: transform 0.3s`）；再点击完整回到初始 | ✅ PASS（⚠️ 见 QA-D-04） |
| D-05 | P0 | 搜索页「海洋文明」主题卡加载 Carthage，不再是 Colosseum | `THEMES[3] = {id:'maritime', cover:'Carthage'}`；搜索页第 4 张卡 `background-image: url(.../Montage_ville_de_Carthage.png)` 成功加载 | ✅ PASS |
| D-06 | P2 | Hero 图 `blur 10px→0px` + `opacity 0→1`，300ms 淡入 | CSS `.home-hero-bg .hero-bg-img { filter: blur(10px); opacity: 0; transition: filter 600ms ease-out, opacity 300ms ease-in, transform 600ms ease-out; transform: scale(1.06); }`，`.loaded` 类 `filter: blur(0); opacity: 1; transform: scale(1)`；页面加载后 `#heroBg.loaded` 生效 | ✅ PASS |
| D-07 | P2 | 上滑文案替换为 SVG 呼吸箭头，滚动>100px 淡出 | `#heroScrollHint` 内 `svg.icon.icon-arrowDown`（24×24 viewBox 0 0 24 24），`.icon` 绑定 `animation: breathe 1.2s infinite`（`@keyframes breathe { 0%/100%: opacity .4, translateY 0; 50%: opacity .8, translateY 3px }`）；`transition: opacity 0.4s`；滚动验证：scrollY=50→无 `.faded`；scrollY=110→加 `.faded`、opacity=0；回到 0→`.faded` 移除 | ✅ PASS |

---

### D-02 FAIL 详单（需要 Dev 复核）

**页面**：任意城市详情页（例：`#/city/rome`）

| 元素 | 期望 | 实际 | 差 |
|---|---|---|---|
| `.timeline-desc` | font-size 16px, line-height 28px (1.75) | **15px**, 26.25px (1.75) | -1px |
| `.info-value` | font-size 16px, line-height 28px (1.75) | **14px**, 22.4px (**1.60**) | -2px + 行距 |

**复现步骤**：打开 `#/city/rome` → 切到「重要景点」tab → 展开任意景点卡 → 开发者工具抓 `.timeline-desc` 与 `.info-value` 的 computed font-size/line-height。

**建议修复**：`css/styles.css` 中 `.timeline-desc { font-size: 16px; line-height: 1.75; }` 与 `.info-value { font-size: 16px; line-height: 1.75; }` 统一。`.overview p` 和 `.landmark-desc` 已到位可作样板。

**其他观察**：四个元素 `opacity=1`、`color=#F5EFE0`。PRD「米色不透明」理解为色 #F5EFE0 + opacity 1（相对塑料感强调不透明），当前实现对齐，无需调整。

---

### 遗留观察项（非阻塞）

- **QA-D-04 [观察]** `overviewFull` 字段在 `js/data.js` 的 15 座城市中**全部为 undefined**。D-04 的 UI 代码路径完整（toggle 按钮、`.open` 动画、SVG 旋转），但实际线上任何城市都不会出现「继续阅读」按钮。PM 任务清单中已挂「撰写 15 座城市 `overviewFull` 长版概述（首批 3 座：罗马/北京/伊斯坦布尔）」为 TODO，需 PM 补内容后方能上线体验。
- **QA-D-02 [Dev 声明与实际不一致]** Dev 自验报告声称 4 个元素均达 16px/1.75/70% 不透明，但实测 `.timeline-desc=15px`、`.info-value=14/1.60`、且所有元素 opacity=1（非 70%）。若「米色不透明」被 Dev 解读为 opacity:1 则 opacity 项合规；字号项确有偏差。建议 Dev 修复字号后再重申声明。
- **QA-D-01-note [说明性]** Dev 自验报告中提到「国旗 replaced with gold monoline SVG」，实际代码路径是**移除国旗 emoji**（与 PRD 附录 D · D-01 条目「去除国旗 emoji」一致）。搜索页 `#/search` 及详情页 eyebrow 已无任何国旗，属按 PRD 执行，非 bug；仅 Dev 文字描述有歧义。

---

### 合并建议

当前 feature/v2.2-taste-upgrade 6/7 通过，**不建议直接合并 dev**：

1. **Blocker**：D-02 字号偏差（`.timeline-desc 15→16`、`.info-value 14→16`、行距 1.6→1.75）。这是本轮「气质红线一组发」的三条红线之一，一条未达标整体气质无法升档。PRD 附录 D 红线声明引自 backlog 第 11 行：「D-01/D-02/D-03 必须作为一组同时发布，任何一项不达标整体气质无法升档」。
2. **Non-blocker**：D-04 `overviewFull` 数据空白不阻塞（代码已到位），但合并后线上看不到「继续阅读」按钮，属半成品观感，建议 PM 至少同步首批 3 座城市文案一起出。

打回 Dev-H5 修字号后重测 D-02，通过即可合并。

---

### 2026-04-14 — 回归测试 commit 47c9993（PRD 附录 C，C-01 ~ C-10）

**环境**：dev 分支 HEAD（包含 commit 47c9993 + 未提交改动），端口 8090，移动端 viewport（375×812 模拟）

**总体结果**：10/10 全部 PASS。无回归问题。发现 1 个 P2 语义偏差和 2 个观察项。

| ID | 严重度 | 预期 | 实际 | 结论 |
|----|:-----:|------|------|:----:|
| C-01 | P0 | 城市卡/景点 banner/搜索缩略图使用 `background-size: cover` | 抽查 3 类元素均 `bgSize=cover`，inline 样式由 `background:` 改为 `background-image:` | ✅ PASS |
| C-02 | P0 | 太阳神殿不显示 Coricancha | wiki 改为 `Ollantaytambo`，显示印加圣谷太阳神殿（`960px-Ollantaytambo_-_Heiliges_Tal.jpg`），与封面不重复 | ✅ PASS（⚠️ 见 QA-01） |
| C-03 | P1 | `#/city/notexist` 显示提示页 + 3 推荐城市 | 显示「未找到该城市」+「`notexist`不在当前收录范围内」+ 北京/罗马/伊斯坦布尔 3 张可点击卡 | ✅ PASS |
| C-04 | P1 | 6 个主题卡加载 Wikipedia 封面图 | 6/6 全部加载（紫禁城/金字塔/大巴扎/斗兽场/圣索菲亚/圣母百花），`bgSize=cover` | ✅ PASS |
| C-05 | P1 | 筛选栏右侧渐隐，滚到末尾隐藏 | 初始 `opacity=1`，`scrollLeft=scrollWidth-clientWidth` 后 `opacity=0`、`.hidden` class 生效 | ✅ PASS |
| C-06 | P1 | Hero 区整体可点击进入城市详情 | `.hero-content` 带 `onclick="navTo('#/city/machu-picchu')"`，点击跳转成功。hero-content 覆盖标题+副标+描述+CTA 主视觉区 | ✅ PASS（⚠️ 见 QA-02） |
| C-07 | P2 | 返回按钮在浅色 hero 清晰可见 | `.detail-back`: `bg=rgba(0,0,0,0.55)` + `box-shadow: rgba(0,0,0,0.4) 0 2px 8px`。开罗（日落沙漠）和雅典（白色大理石）两处截图验证清晰可见 | ✅ PASS |
| C-08 | P2 | 详情页底部导航处理得当 | 方案 A：详情页 `.bottom-nav { display: none }`，首页恢复 `display: flex`，路由切换正确 | ✅ PASS |
| C-09 | P2 | 景点卡展开/收起有 400ms 过渡 | `.landmark-body { max-height:0; transition: max-height 0.4s ease }`，`.open` 时 `max-height:1200px`。展开+收起均有动画 | ✅ PASS |
| C-10 | P2 | 搜索无结果显示引导 | 搜索「xyznonexistent」显示「未找到相关内容」+ 3 热门城市（北京/罗马/伊斯坦布尔）+ 3 热门主题（帝都传奇/古代奇迹/丝绸之路），全部可点击 | ✅ PASS |

---

### 遗留观察项（非阻塞）

- **QA-01 [P2]** C-02 太阳神殿使用 `Ollantaytambo` 词条（印加圣谷另一遗址，距马丘比丘 ~30km），仍非马丘比丘遗址内的 Torreon 太阳神殿（严格意义）。验收标准第 1 条「马丘比丘遗址内的建筑」未严格满足。PRD 允许 `Torreon (Machu Picchu)` 作为优先候选；若该词条无图，当前选择可接受，但建议标注「同为印加太阳崇拜遗址」以免误导用户。
- **QA-02 [P3]** C-06 Hero 点击区为 `.hero-content`，约覆盖 hero 视觉区 50.8%（顶部 131px 导航条 + 两侧 24px 边距不响应）。主视觉内容（城市名/钩子/CTA）已全部在点击区内，体验上符合 PRD 要求「城市名、背景图、钩子文案区域」。无需处理。
- **QA-03 [P3]** C-04 主题「海洋文明」封面加载的是斗兽场（`Colosseum`），`js/data.js` 中 THEMES 的 `cover` 字段配置与主题语义略有偏差（海洋文明应为帆船/港口/航海相关）。不在本次 commit 改动范围内，属既有数据问题，供 PM 后续评审。

### 回归测试

- 15 个城市首页封面加载：未在本轮做全量回归（上一轮已覆盖），抽查北京/罗马/开罗/雅典/马丘比丘 5 城详情页渲染正常
- 路由切换：首页 ↔ 详情页 ↔ 搜索页 ↔ 无效路由页 均正常
- 底部导航切换：发现 ↔ 搜索 正常，详情页隐藏

**建议**：10 项全部达到验收标准，可合并 dev → main 发布。遗留观察项 QA-01/02/03 可作为下一轮 backlog 候选项。

---

## PM Tasks

> PM: Your pending tasks. Update PRD first, then note changes here so Dev stays in sync.

| # | Task | Status | Notes |
|---|------|--------|-------|
| 7 | Review: 时间轴是否需要加"世界其他地方"模块？确认后写入 PRD | DONE | PRD v2.1 已加入 `timeline[].worldContext` 字段（4.2.4） |
| — | v2.2: 撰写 15 座城市 `overviewFull` 长版概述（首批 3 座：罗马/北京/伊斯坦布尔） | TODO | PRD 4.2.2 已定义字段 |
| — | v2.2: 收集 48 景点的 `ticketUrl` / `advanceBooking` / `bestTime`（首批 3-5 城样本） | TODO | PRD 4.2.3·a 已定义字段 |
| — | v2.2: 选定海洋文明主题封面词条（推荐 `Carthage` 或 `Venice`） | TODO | 见 PRD 附录 D · D-05 |
| — | Review: 当前 15 座城市是否足够？是否需要扩充？在 PRD 中补充城市优先级 | TODO | |
| — | Review: PRD 中的量化指标（首屏停留 >15s、人均浏览 >3 城）是否需要调整 | TODO | |

## PRD Changes Log

> PM: Every time you update PRD, record what changed here so Dev knows.

### 2026-04-15 · v2.2（气质升级 · 来源用户反馈-2026-04-14-2349.md）

**核心主题**：去塑料化——全站 emoji 替换为金色 monoline SVG、正文字体升级、景点门票信息重构。

**新增章节**：
- 九·五 视觉设计规范（9.5.1 图标规范、9.5.2 字体规范、9.5.3 主题封面修正）
- 附录 D：v2.2 变更清单（DEV 需求集中档，D-01 ~ D-07）

**修订章节**：
- 三（信息架构）· tab bar 图标说明
- 4.1.1 Hero：blur 20px → 10px，上滑文案 → SVG 呼吸箭头
- 4.1.2 主题卡：6 个 emoji → SVG（crown/pillar/camel/anchor/dome/palette）
- 4.2.1 详情页 eyebrow：去除国旗 emoji
- 4.2.2 概述条：新增"继续阅读 →"展开 + `overviewFull` 字段
- 4.2.3·a 【新】景点信息模块重构：新增 `ticketUrl` / `advanceBooking` / `bestTime` 字段
- 4.2.5 同年世界：去除城市行 flag emoji
- 4.3.1 搜索框：左侧 SVG 图标 + focus 金色底线
- 七（动效）：Hero blur 10px，图片 300ms 淡入
- 十二（验收）：新增"气质验收（taste 红线）"分组

**影响数据结构**（`js/data.js`）：
- `cities[].overviewFull` 可选新增
- `cities[].landmarks[].ticketUrl` / `advanceBooking` / `bestTime` 可选新增
- `THEMES.maritime.cover` 需替换（当前错误配置为 `Colosseum`）

**交给 Dev 的任务**：附录 D · D-01 ~ D-07（7 条，分三批）

---

## UX Feedback Log

| Date | File | Triaged? |
|------|------|----------|
| 2026-04-14 | 用户反馈-2026-04-14-1429.md | Yes — items #1-#11 added to backlog |
| 2026-04-14 | 用户反馈-2026-04-14-2349.md | Yes — T-1 ~ T-12 归档至 PRD v2.2 附录 D（D-01 ~ D-07） |

---

## Completed

_(Move tasks here when merged to main and verified)_
