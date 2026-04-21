# Backlog — 环球史迹 Travel-Web

> Source of truth for all task assignments. Every role MUST read this before starting work.
> Only PMO updates task status. Other roles add findings to their designated sections.

---

## Active Sprint — 2026-04-15（v2.3 内容深度 · Phase 1）

> **v2.2 已全量上线**（气质 7 → 8.5，1526 UAT 报告全 PASS），详见下方 Done 区。本期聚焦内容深度。
>
> **v2.3 反馈来源**：用户反馈-2026-04-15-1551-内容深度补充.md，已归档 PRD 附录 E。用户明确要求**分两期**：
> - **Phase 1（本期 v2.3）**：E-01 + E-02（景点卡内容密度，一组同发，一周见效）
> - **Phase 2（下期 v2.4）**：E-03 + E-04（叙事结构重构，单独迭代）

### P0 — v2.3 内容密度红线（一组同发）

> **✅ PM 内容交付完成**（2026-04-15）：`PM-v2.3-Phase1/` 16 个文件（15 城 + INDEX），52/52 景点覆盖，48 条 worldContext。Dev-H5 现在数据齐全，可开工。
>
> **Dev-H5 开工顺序**：
> 1. **先读** `PM-v2.3-Phase1/00-INDEX.md` 的"四·补 Dev 合入前需澄清的 3 项"——决定马丘比丘主遗址的技术方案（推荐：A 方案 data.js 新增一条 main landmark）
> 2. Athens / Mexico City 粘贴时**按 name 匹配而非文件顺序**（PM 按 Tier 排，data.js 按原序）
> 3. 按 INDEX 第四节 VERIFY 清单核对 ~60 个 `✋` 标记字段（URL 根域名 / 现行票价 / 时段政策）
> 4. E-01（schema + ticket 渲染）+ E-02（tips + 7 SVG 图标）+ data 合并建议一组同发
> 5. 完成后标 [DONE:Dev-H5]，QA 在 dev 分支验收

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| E-01 | 景点门票 4 件套：`ticket` 从 string 改 object（price / channels[] / bookingWindow / timingTip）+ 粘合 47 景点 PM 内容进 `js/data.js` | [DONE:Dev-H5] | feature/v2.3-content-depth | PRD 附录 E · E-01 + 4.2.3·a；52/52 景点完成；renderTicket 已适配 bookingWindow 字符串 + null-url channel；**QA 第 2 轮重测**：landmark-body max-height 1200→3000px（transition 0.4→0.6s）修复 Android FAIL，故宫 1655px / Colosseum 1272px 展开后 tips 尾部 + tags 视觉确认完整可见 |
| E-02 | 景点 Tips 数组：新增 `tips[]` 含 7 种 category + 7 个新 SVG 图标 + PRD 写入"禁止常识 tip" + 粘合 49 景点 tips[] | [DONE:Dev-H5] | feature/v2.3-content-depth | PRD 附录 E · E-02 + 9.5.1；**53/53 景点有 tips**（PM 补丁 `15-machu-picchu.md §0` 已合入 6 条主遗址 tips）；TIP_CATEGORY_ICON 加 walking/cold 别名映射 route/season |
| E-03 | worldContext 48 条补入 15 城 `timeline[].worldContext`（v2.1 遗留） | [DONE:Dev-H5] | feature/v2.3-content-depth | **PM 补丁全部落位**：cairo 1250年/马穆鲁克作为整条 timeline entry 新增（位于 969 与 1517 之间），worldContext 附带；`.timeline-world-context` 已按 PRD 9.5.2 渲染（#C9B896 · 13px · 1.6） |

### P2 — v2.2 UAT 新发现（1526 反馈 · Polish）

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| N-1 | CTA "探索这座城市 →" 按钮加 pressed 态或细金线分隔，让按钮"落地" | [ASSIGNED:Dev-H5] | TODO | 1526 反馈 N-1；hover 金色边框变实心/字反白 |
| N-5 | 衬线大标题长英文词（Istanbul 等）换行后与中文间距节奏调整 | [ASSIGNED:Dev-H5] | TODO | 1526 反馈 N-5；低优先级 |

> **N-2（Hero cursor affordance）**：用户自己标"强迫症，CTA 已足够"，不列任务。
> **N-3（SVG 比内容用心）**：与 T-5 / E-01 绑定，E-01 上线后自动消失。
> **N-4（"世界其他地方"升格）**：与 Phase 2 E-04 冲突——1526 建议"升格为景点卡独立单元"，25 分钟后 1551 更新为"撤出景点卡迁移时间轴"，**以 1551 为准**（用户自我进化），N-4 不独立成任务。

---

## Done — v2.2 已上线（2026-04-15 · 1526 UAT 全部 PASS）

> 1526 反馈是 v2.2 的验收报告，气质评分从 7 → 8.5，D-01/D-02/D-05/D-06/D-07 全部验证通过。

| # | Task | Status | UAT Notes |
|---|------|--------|-----------|
| D-01 | 全站 emoji → 金色 monoline SVG | DONE | 整页 0 emoji、43 个 SVG。门票甚至画了撕票口虚线 |
| D-02 | 正文字体升级（16px / Regular / 1.75 / 米色不透明） | DONE | WCAG AAA 级对比度，衬线中文终于不喘 |
| D-05 | 海洋文明主题封面换图 | DONE | 已换 |
| D-06 | Hero blur 20→10px + 图片切换 300ms 淡入 | DONE | 胶卷显影感出来了 |
| D-07 | 上滑发现更多 → 呼吸箭头 | DONE | Dev 选择**直接删除文案**，比 PRD 要求更极致，"相信 UI 自己会说话" |
| ~~D-03~~ | ~~ticketUrl/advanceBooking/bestTime~~ | SUPERSEDED | 被 v2.3 E-01 覆盖 |
| ~~D-04~~ | ~~overviewFull + 继续阅读~~ | DEFERRED | 合并到 Phase 2 E-03 |

**1526 反馈验证的其他项**：
- T-7 搜索框 SVG 放大镜（D-01 顺带做掉）✅
- T-10 中文行距（D-02 连带解决）✅
- T-9 海洋文明封面（D-05 上一轮已修）✅

---

### Phase 2 预告（v2.4，不在本期 sprint）

| # | Task | Status | Notes |
|---|------|--------|-------|
| E-03 | 历史概述"继续阅读"展开 + `overviewLong` 字段（合并废弃的 D-04） | DEFERRED | PRD 附录 E · E-03 |
| E-04 | 景点 `worldEvents[]` 迁移至 `timeline[].sameTime[]` | DEFERRED | PRD 附录 E · E-04 |

---

## v2.6.2 跟单（v2.6.1 QA 验收遗留项，不阻塞合 main）

> 来源：v2.6.1-05 最终验收（[workflow/v2.6.1-05-final-acceptance.md](v2.6.1-05-final-acceptance.md)）
> 12 条反爬深链 preview 复验，10 条 PASS，2 条真 404。因均有兄弟渠道托底（不阻塞用户完成购票），降级为 v2.6.2 跟单。

| # | 景点 | 平台 | 死链 | 建议处理 | 状态 |
|---|------|------|------|---------|------|
| v2.6.2-01 | 兵马俑 | 携程 | `trip.com/ticket/dest/t4-100005.html` 真 404 | 换 albatrip 官方外链 / 或 Trip.com 新深链（QA 已验 albatrip 托底 OK） | TODO |
| v2.6.2-02 | 红堡 | Delhi Tourism | `delhitourism.gov.in/red_fort.jsp` 真 404 | 改 searchHint / 或换 Incredible India 新深链（ASI eTicket 已托底 OK） | TODO |

---

## v2.7 候选池（CEO 2026-04-16 追加反馈，v2.6.1 之后 PM 起 PRD）

> 这些是 CEO 在 v2.6 上线后 + v2.6.1 hotfix 派单**之后**追加的反馈，不进 hotfix（hotfix 是补 v2.6 欠账），**走正常 /pipeline 流程**。
> PM 接到后在 v2.7 Sprint PRD 里展开需求，Dev 照做。
>
> **硬规则（CEO 2026-04-16）**：v2.7 起 PM 必须**全量交付**本期承诺的内容（whyVisit/hookShort/tickets-fix 等目录实体），才能进 Dev 阶段——由 `.claude/commands/pipeline.md` 的 Step 2.4 闸门自动校验。

| # | 反馈原文 | 性质 | PM 展开建议 | 分流确认 |
|---|---------|------|-----------|---------|
| v2.7-01 | "所有图片请确保美感很好，京都这么好的城市，城市图片这么难看" | Content + 策展 | H-02 升规格：图片不只"能访问 + thumbnail 存在"，需按**主编视角**人工策展——每城 Hero 至少 3 候选图（构图/色彩/情绪三选一），明确拒绝 Wikipedia 默认首图兜底；涉及 15 城 hero + 53 景点 card image 重审 | ✅ CEO 已分流 |
| v2.7-02 | "景点：购票渠道是购票渠道，交通是交通，并不一样" | IA 拆分 | 景点详情页 `门票` Tab 拆两段：**购票渠道 §**（官方/聚合平台深链）+ **交通指引 §**（地铁/巴士线路 + 步行距离）。当前清水寺截图：206 巴士被塞进购票渠道卡片就是这个 bug。`js/data.js` 需新增 `transport[]` 字段，渲染层拆两卡 | ✅ CEO 已分流 |
| v2.7-03 | "城市的历史时间轴太短了，要同时兼顾历史/非历史爱好者，可以做每个时间段的详情（点击展开）" | 交互 + 内容分层 | 时间轴从"单行节点"升级为"折叠段落"：默认显示 **时间 + 标题**（非历史党友好），点击展开 **100-200 字故事化详述**（历史党友好）。PM 需补 `timeline[].detail` 字段全量 ×15 城，参考 MacGregor/马伯庸腔调 | ✅ CEO 已分流 |

> **#6 CEO 跳号**：原编号 #1-#5 #7，#6 缺失；PMO 向 CEO 确认是打字漏了还是故意留白——**未确认前不占坑**。

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
| 7 | Review: 时间轴是否需要加"世界其他地方"模块？确认后写入 PRD | DONE | PRD v2.1 已加入 `timeline[].worldContext`；Phase 2 (v2.4) 将升级为 `sameTime[]` |
| — | v2.3: 研究 + 撰写首批 5 景点的 `ticket.channels/bookingWindow/timingTip`（斗兽场/故宫/圣索菲亚/金字塔/马丘比丘） | **DONE** | 交付：`PM首批内容-v2.3-Phase1-数据样本.md` |
| — | v2.3: 撰写首批 3 景点 × 6 条 tips 样本（斗兽场/故宫/圣索菲亚，共 18 条） | **DONE** | 同上文件；每条锚点命中自检已附 |
| — | v2.3: **一次性交付**剩余 47 景点 × ticket + 49 × tips + 48 × worldContext（替代 W+1/W+2/W+3 分批） | **DONE** | 交付目录 `PM-v2.3-Phase1/`（16 个文件）；**15/15 城全量交付**；52/52 景点红绿灯全绿；Dev 可合 `js/data.js` |
| — | v2.3: 选定海洋文明主题封面词条（推荐 `Carthage` 或 `Venice`） | TODO | 见 PRD 附录 D · D-05 |
| — | Phase 2 (v2.4): 撰写 15 座城市 `overviewLong` 长版散文（300-500 字/城） | DEFERRED | 待 E-01/E-02 上线 UX 验收通过后启动 |
| — | Phase 2 (v2.4): 撰写 `timeline[].sameTime[]` 数据（每城 2-3 关键节点 × 2-3 条） | DEFERRED | |
| — | Review: 当前 15 座城市是否足够？是否需要扩充？在 PRD 中补充城市优先级 | TODO | |
| — | Review: PRD 中的量化指标（首屏停留 >15s、人均浏览 >3 城）是否需要调整 | TODO | |

## PRD Changes Log

> PM: Every time you update PRD, record what changed here so Dev knows.

### 2026-04-20 · v3.4 内容校准 + CSS 扩展（[DONE:Dev-H5 v3.4]）

**来源**：CEO 2026-04-20 直派（v3.4 任务单 5 项：4 项 data 校准 + 1 项 CSS 新 class）

**状态**：[DONE:Dev-H5 v3.4] 全部落地；PRD §附录 O 已交付后第二轮完工——B-01/B-02 解除

**轮次**：
- 第一轮 commit `ebc8707`（2026-04-20 17:13）：O-02 Angkor wikiImage / O-03 两条 era 硬改（3/5 DONE），O-01 + O-04 因 PRD §附录 O 未交付 BLOCKED
- 第二轮 commit `<pending>`（2026-04-20 本轮）：PRD §附录 O 已交付 → O-01 粘入 + O-04 CSS 三 class 落地（5/5 DONE）

**注**：原 B-01 / B-02 两条 blockers 已由 PM 在 PRD §附录 O-01 / §附录 O-04 交付后解除；见本节末尾"解除记录"。

| # | 任务 | 状态 | 说明 |
|---|---|---|---|
| 1 | 墨西哥城大教堂 ticket + tips[] 插入（照抄 PRD §O-01） | ✅ [DONE:Dev-H5] | data.js 大教堂条目 `hours` 后 `tags` 前插入 ticket{price/channels/bookingWindow/timingTip} + tips[] 6 条（what/what/where/combo/avoid/avoid），照抄 PRD §附录 O-01 代码块 |
| 2 | 吴哥窟 wikiImage 换图 | ✅ [DONE:Dev-H5] | 第一轮已落：`6/6c/Angkor_Wat_from_north_pond.JPG`（2447×1688，1920px thumb 741KB，5塔轮廓+荷塘倒影 postcard view）。PRD §O-02 三候选 Commons 均 404（File:Angkor_Wat_temple.jpg / _from_the_northwest.jpg / _Camboya...DD_032.jpg 三件均 imagerepository 空），使用 north_pond 作为等效替代（符合 PRD 定性"5塔+水面倒影"） |
| 3 | 伏见稻荷 era: 奈良·711年 → 奈良时代·711年 | ✅ [DONE:Dev-H5] | data.js:662 |
| 4 | 清水寺 era: 平安·778年 → 奈良末·778年 | ✅ [DONE:Dev-H5] | data.js:812 |
| 5 | css/styles.css 新增 `.expanded-section` / `.expanded-section-label` / `.expanded-section-body` 3 class | ✅ [DONE:Dev-H5] | 追加到 styles.css 末尾，照抄 PRD §O-04 代码块；`--gold-muted` 走 fallback `#C9B896`（与现有 `color: var(--gold-muted, #C9B896)` 用法一致）。本轮不动 timeline renderer（CEO 指示"本轮不动渲染逻辑，只加 CSS 给未来用"；现行 `timeline-detail-section` / `rich-content-section-title` v3.3-hotfix UX 8.5/10 已验证，未重命名） |

**Dev-H5 第二轮摘要**（2026-04-20 本轮，5/5 DONE）：
- 改动：`js/data.js`（O-01 大教堂 ticket/tips 插入）+ `css/styles.css`（O-04 三 class 追加）
- 自测：`node --check` 两 JS 文件通过；本地 node server on :8091 服务 dev worktree，curl `/js/data.js` + `/css/styles.css` + `/index-h5.html` 全部 HTTP 200；关键字段 grep 命中（`教堂主厅免费；塔楼登顶` × 1 / `expanded-section` × 3 / `奈良时代·711年` / `奈良末·778年`）
- 未跑项：浏览器 DOM-level 交互回归（preview MCP 工具无法 attach 到 dev worktree ad-hoc server；本次改动都是静态内容，无渲染逻辑变更——DOM 回归留给 QA iPhone/Android 真机跑）
- Blockers：空（原 B-01 / B-02 已解除，见下）

**Blockers 解除记录**：

### [B-01] 解除 ✅
- 原因：PM 本轮已在 PRD §附录 O-01（PRD 第 6170 行起）交付权威文案，含 ticket 对象（price / channels ×2 / bookingWindow / timingTip）+ tips[] 6 条（what/what/where/combo/avoid/avoid）
- Dev 处置：照抄到 data.js 大教堂条目，位于 `hours: '08:00—20:00'` 与 `tags: [...]` 之间

### [B-02] 解除 ✅
- 原因：PM 本轮已在 PRD §附录 O-04（PRD 第 6342-6366 行）交付 CSS 代码块，含 3 class 的完整规格（`border-left: 2px solid var(--gold)` / `padding-left: 12px` / `letter-spacing: 0.08em` / `text-transform: uppercase` / `font-size: 11px / 15px` / `line-height: 1.75` / `color: var(--gold-muted)`）
- Dev 处置：追加到 `css/styles.css` 文件末尾（紧跟 `.practical-card.open .practical-card-body` 之后）；CEO 指示"本轮不动渲染逻辑，只加 CSS 给未来用"，timeline renderer 保持现行 `timeline-detail-section` / `rich-content-section-title`（v3.3-hotfix 8.5/10 已验证，不触碰）
- 未来使用：下一轮 timeline detail 改写或新增 >150 字主动展开段时，按 §O-04 三轴 SOP 换用新 class

---

### 2026-04-19 · v3.3 P00000 塌方急救（附录 N · 5 条）

**来源**：`用户反馈-2026-04-18-2354.md`（UX v3.1 上线回访 6.5/10）+ `workflow/ux-live-site-diagnostic-2026-04-18.md` P00000 板块 + CEO 2026-04-19 直派 4 问。

**PRD 改动**：
- **新增附录 N**（`PRD-travel-h5-v2.md` 第 5819 行开始）：5 条权威决策
  - N-01 · P0 · landmark 四段式强制结构（是什么 / 为什么独特 / 跨文明 / 现场细节）
  - N-02 · P0 · `whyVisit` 字段从 `string` 升级为 `{what, whyUnique, crossCivilization, detail}` 对象 + 过渡期 legacy fallback + 红色 banner
  - N-03 · P0 · 正文 design token 冻结：`-apple-system/PingFang SC/Noto Sans SC` 栈 / 15px / 1.75 / weight 400 / letter-spacing 0（标题仍 serif 栈）
  - N-04 · P1 · Render-Schema Sweep 条款写入 CLAUDE.md（PMO 落地）
  - N-05.a · P1 · epochTail 撞词清洗（N-04 规则的首个正式 sweep）
  - N-05.b · P1 · Hero badge 对比度（L-05 复发 · alpha 0.35→0.45 + backdrop-filter）
- **修订 §9.5.2 排版与字体表格**：正文行由 16px 改为 15px，字体栈由 serif 改为 sans-serif（以 N-03 为权威锚）
- **新增变更日志 v3.3 条目**（工时估算 / QA 红线 / 推迟项 / 纪律声明）

**CEO 4 问答复（Q1/Q2 是 P00000 阻塞项）**：
- Q1【内容架构】四段式强制？ → **是**（N-01）
- Q2【字段 schema】whyVisit 结构化？ → **是**（N-02）
- Q3【字体/字号 token】进 PRD？ → **是**（N-03）
- Q4【流程】渲染结构变更 → PM sweep 写进 CLAUDE.md？ → **是**（N-04，PMO 落地）

**给 PMO 的派单清单**（建议 ticket 拆分）：

| Ticket | 分配 | 说明 | 阻塞 v3.3 release |
|---|---|---|---|
| v3.3-Dev-H5-01 · 渲染改造（N-01 schema + N-02 renderer + legacy fallback + 红 banner） | Dev-H5 | 约 6h | ✅ |
| v3.3-Dev-H5-02 · 正文 token（N-03 CSS 全量替换） | Dev-H5 | 约 2h | ✅ |
| v3.3-Dev-H5-03 · N-05.a epochTail sweep 执行（按 §N-05.a 清洗表） | Dev-H5 | 约 1h | ✅ |
| v3.3-Dev-H5-04 · N-05.b Hero badge 对比度 spec 落地 | Dev-H5 | 约 0.5h | ✅ |
| v3.3-PMO-01 · 把 §N-04 条款追加进 CLAUDE.md | PMO | 约 0.5h | ✅（v3.3 release 前） |
| ~~v3.3-PM-01 · 批次 1（5 景点）~~ → **已并入 v3.3-PM-01-全量**（一次性交付，不分批） | PM | — | — |
| ~~v3.3-PM-02..N · 批次 2-N 滚动交付~~ → **已并入 v3.3-PM-01-全量**（CEO 2026-04-19 决策：不分批，一次性交付） | PM | — | — |
| **v3.3-PM-01-全量 · 🟢 DONE 2026-04-19 · 全站 54 景点四段式 whyVisit 一次性交付** · 交付文件：`PM-N02-whyVisit-四段式-全量-2026-04-19.md`（955 行）· 内容：54 景点 × 4 段 = 216 段四段式文本（批次 1 SOP 5 景点 + 其余 49 景点一致结构，金阁寺按 §N-02 以现有字段为底改写）· 自检：Python 字数脚本 54 景点 × 4 段全部 ≤ cap（§1 ≤120 / §2 ≤150 / §3 ≤200 / §4 ≤150）· 0 fail · 附：js/data.js 粘入定位表（54 行号）+ QA G1-G5 验收清单（node assertion + 字数抽查 + 渲染顺序 + banner 消失 + readability） | PM | 约 40h（实测一次性完成） | ✅ |
| v3.3-QA-01 · v3.3 release 前跑 `node` assertion（N-01） + CSS token 验收（N-03） + 对比度抽样（N-05.b） + epochTail 收敛验证（N-05.a） | QA | 约 3h | ✅ |

**v3.3 release 门阀**（基于 2026-04-19 全量交付更新）：
1. Dev-H5 完成 ticket 01-04（04/04 渲染改造 + token + sweep + badge）
2. PM 一次性交付全站 54 景点四段式 whyVisit（✅ 完成 2026-04-19）
3. Dev-H5 把 54 个 whyVisit 字符串替换为结构化对象（按粘入定位表）
4. 粘入完成后页面顶红色 banner 自动消失（因 54/54 已结构化，legacy fallback 不再触发）
5. QA 跑 G1（node assertion：checked 54 · fails 0）+ G2（字数抽查）+ G3（渲染顺序）+ G4（banner 消失）+ G5（readability） → 全 PASS
6. PMO 合并 dev → main

**PM 状态**：v3.3-PM-01-全量 已交付完毕，PM 当前轮空；等 Dev-H5 粘入完成 + QA 反馈后，再介入下一轮内容 sweep。

---



**不涉及 PRD 变更**，仅为 v2.2 上线验收报告归档。

- 气质评分 7 → **8.5**（+1.5）
- D-01/D-02/D-05/D-06/D-07 验证全部 PASS，状态从 TODO 转 DONE
- Dev 在 D-07 上选择了比 PRD 更极致的方案：**直接删除"上滑发现更多"文案**，而非换成呼吸箭头。PM 判定：效果一致，以用户语言"相信 UI 自己会说话"为准，PRD 七（动效）里的"呼吸箭头"规格保留但允许"空即是空"
- 新发现 polish：N-1 CTA 按钮 pressed 态 + N-5 衬线长标题换行，进 P2 polish
- N-4 "世界其他地方升格"方向性建议**被 1551 反馈 C-2 取代**（迁移到时间轴），不独立成任务

---

### 2026-04-15 · PM 首批内容交付（v2.3 Phase 1 数据样本）

**文件**：`PM首批内容-v2.3-Phase1-数据样本.md`（项目根目录）

**交付范围**：
- 5 景点门票 4 件套（斗兽场 / 故宫 / 圣索菲亚 / 吉萨金字塔 / 马丘比丘）
- 3 景点 × 6 条 Tips 样本，共 18 条（斗兽场 / 故宫 / 圣索菲亚），每条附锚点命中自检

**Dev 使用方式**：文件内每条有**可 copy-paste 的 JS 块**，直接粘进 `js/data.js` 对应 `landmarks[]`。无需沟通。

**Dev 核对清单**（上线前做一次）：
- 5 景点购票 URL 的现行有效性（网站偶有改版）
- 票价参考值（各地年度可能微调，以官网为准）
- 吉萨金字塔 `channels[0].url: null` 兜底渲染（只显名称、不带外链箭头）

**其他 47 景点空状态**：文件 §3.3 给出 `ticket: { price, channels: [], bookingWindow: null, timingTip: null }` + `tips: []` 的最小安全结构，Dev 照此填默认值即可（空数组 / null 不渲染对应块）。

**剩余交付节奏**：W+1 / W+2 / W+3 三批，追加至同一文件，纯 content commit 无需 Dev 介入。

**节奏更新（同日下午，见下一条）**：CEO 质疑分批将导致 v2.3 上线首日 47/52 景点呈现与 v2.2 相同的空状态 UI（"白发一版"），改为**一次性全量交付**，本节奏条目作废。

---

### 2026-04-15 · PM 全量交付（v2.3 Phase 1 剩余 47 景点）

**决策背景**：CEO 指示"可以一起 research 完更新 PRD 给 Dev"——拒绝 W+1/W+2/W+3 分批方案，要求一次合并一次上线，避免"schema 升级但 47/52 景点空状态 = 用户看到的界面和 v2.2 完全一样"。

**交付目录**：`PM-v2.3-Phase1/`（16 个文件）
- `00-INDEX.md` — 总目录 + Tier 口径 + 52 行红绿灯汇总 + Dev VERIFY 核对清单
- `01-rome.md` ~ `15-machu-picchu.md` — 15 个城市文件，每城包含 3-4 景点 × (ticket + tips) + worldContext 节点追加

**总量**：
- 新交付 ticket object：**47 个**（加首批 5 = 52 全覆盖）
- 新交付 tips[]：**49 个**（加首批 3 = 52 全覆盖；金字塔 tips 补在 `05-cairo.md`）
- 新交付 worldContext 条目：**48 条**（分布于 15 城 timeline）
- Dev 核对标记：**~60 项**（URL 根域名 / 现行票价 / 时段政策），按 INDEX 第四节逐条核对

**Tier 分级策略**：A（首席，6 条 tips + 3 档 bookingWindow）/ B（次席，5 条 + 2 档）/ C（长尾，4 条 + 单句）。锚点合规性跨 Tier 不降档——每条 tip 必命中至少 1 个锚点（数字 / 具体时间 / 具体方向 / 具体名字 / 只有去过才知道）。

**不在本批（Phase 2 / v2.4 遗留）**：
- `overviewLong`（15 城 × 300-500 字散文）— E-03
- `sameTime[]`（时间轴并置卡片）— E-04

**不改 PRD 正文**：v2.3 附录 E + 4.2.3·a + 9.5.1 已定义完整 schema，本次交付是内容填充，不是规格变更。

**Dev-H5 使用方式**：
1. 读 `PM-v2.3-Phase1/00-INDEX.md` 第四节 VERIFY 清单
2. 逐城市文件把 JS 块 copy-paste 进 `js/data.js` 对应 `landmarks[]`
3. 上线前核对 ~60 个 `✋` 标记字段（PM 写的是结构与口径，非实时分钱价格）
4. 一次合并、一次 QA、一次上线

**Dev-MiniApp**：共用 `js/data.js`，无需额外动作。

---

### 2026-04-15 · v2.3（内容深度 · Phase 1 · 来源用户反馈-2026-04-15-1551-内容深度补充.md）

**核心主题**：App 美学底盘已达 Monocle 档（8.5/10），本版聚焦内容深度把它推到 9+。用户明确要求分两期，本期只做 P0。

**新增章节**：
- 附录 E：v2.3 变更清单（E-01 / E-02 本期，E-03 / E-04 Phase 2 预告）

**重构章节**：
- 4.2.3·a 景点信息模块：**v2.2 扁平字段 `ticketUrl`/`advanceBooking`/`bestTime` 全部作废**，改为 `ticket` 对象（price / channels[] / bookingWindow / timingTip）+ 新增 `tips[]` 数组（含 7 种 category）
- 5.2 数据示例：故宫示例更新为 v2.3 结构
- 9.5.1 图标规范扩充：新增 7 个 tips 分类图标（ticket-dashed / clock-thin / camera-line / footprint-line / shirt-line / snowflake-line / key-line）

**覆盖 v2.2 的字段变更**（Dev 必读）：
- `landmarks[].ticketUrl` / `advanceBooking` / `bestTime` → 废弃，未上线前直接跳过
- `landmarks[].ticket` → 从 string 变 object
- `landmarks[].note` → 弱化为硬性提示，软 tip 迁移到新 `tips[]` 数组

**v2.2 backlog 调整**：
- D-03 被 SUPERSEDED（v2.3 E-01 覆盖）
- D-04 DEFERRED 到 Phase 2（合并到 E-03）
- D-01/D-02/D-05/D-06/D-07 保留进行

**Tips 内容标准**（写入 PRD 4.2.3·a，由 QA 按清单逐条核查）：
- 每条 tip 必须命中至少一项具体锚点：**数字 / 具体时间 / 具体方向 / 具体名字 / 只有去过才知道的细节**
- 未命中的 tip 退回 PM 重写，不计入 ≥4 条合格数（而非 FAIL 整个 PR）
- 反例：「建议网上预约」「请穿舒适鞋」「避开人多时段」(无具体时间)

**Phase 2 预告**（不在本期）：
- E-03：`overviewFull` → `overviewLong` 改名 + 撰写 15 城散文
- E-04：景点 `worldEvents` 迁移至时间轴 `sameTime[]`

---

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
| 2026-04-15 | 用户反馈-2026-04-15-1526.md | Yes — v2.2 UAT 报告（8.5/10 PASS），D-01/D-02/D-05/D-06/D-07 标 DONE；新发现 N-1/N-5 进 P2；N-2/N-3/N-4 不独立成任务 |
| 2026-04-15 | 用户反馈-2026-04-15-1551-内容深度补充.md | Yes — C-1 ~ C-4 归档至 PRD v2.3 附录 E（E-01/E-02 本期，E-03/E-04 推迟 Phase 2） |

---

## PM 备忘

> PM 在 Mode A 消费 demand-pool 时，对跳过的条目记录原因，避免沉默忽视。

### 2026-04-19（v3.4 · UX v3.3-hotfix 回访 8.5/10 · 内容校准 + SOP 升级）

**本轮性质**：v3.3-hotfix 回访 8.5/10，CEO 抓出 4 个 P0（大教堂 ticket/tips 残缺、吴哥窟主殿图过暗、伏见 era 歧义、清水寺朝代硬错）+ UX 提议"姿态×字数×结构"三轴升级。本轮是**校准补丁 + SOP 升级**，非新功能。

**落入 PRD 附录 O（已写入，v3.4）**：
- [UX P0-2 + D2] 墨西哥城大教堂 ticket + tips 补齐 → PRD O-01（PM 权威文案已交付 · Dev 照抄 data.js:2623）
- [UX P0-3] 吴哥窟主殿 Hero 图替换 → PRD O-02（3 候选 · 优先正立面平视）
- [UX P0-4 + 清单外] 伏见/清水 era 硬改 + 54 景点全量 sweep → PRD O-03（2 硬改 + 1 建议 + 48 PASS + 3 ⚠️ 保留）
- [UX P0-1 + 镜头升级] §K-01/N-02 SOP 升级三轴 + §K-03 绿条小标范式 → PRD O-04
- [demand-pool 🔵] 跨文明圈例外城市附录 → PRD O-05（马丘比丘/吴哥/耶路撒冷/伊斯坦布尔）
- [demand-pool 🔵 + D2] 头号 icon 不允许"补齐中"红线 → PRD O-06（CLAUDE.md + §N-04 sweep 扩展）

**Hotfix（2026-04-21 · QA 回归发现）**：
- **v3.4-Dev-H5-05** · O-01 大教堂 `tips[]` category 七选三重打（6 行）· 按 QA 报告 mapping 表（当前 category 值不符 2026-04-20 D2 红线"七选三"硬规 `ticket/timing/photo/route/dress/season/secret`，PM 自造词需改回 canonical） · `[ASSIGNED:Dev-H5]`

**通知 PMO 归档到 demand-pool `✅ 已转化` 段**：
- 🔵 "UX 镜头库单段字数规则升级三轴" → O-04（本轮）
- 🔵 "跨文明圈例外城市兜底" → O-05（本轮）
- 🔵 "头号 icon 占位红线" → O-06（本轮）
- 🟢 B1–B14（v3.0 K-01~K-08 已消费但未同步归档 · 历史债务，PMO 批量归档）

**催办 PMO**：
- B20 CDN 迁国内 Dev-H5 派单未开 —— 本轮 UX 又提到"pill 点击过滤 600ms 黑窗是 CDN 副作用"；PMO 请开 Dev-H5 单，安排 MVP 本地化或 jsDelivr 迁移

**CEO don't fix 区（本轮零触碰）**：
- 除 4 P0 外所有 v3.3-hotfix 保持不动（UX 明确表态"胜仗 A-K 保持"）
- 图片直连 Wikimedia（P1-4）仍推给 PMO，非 PM 判断边界

**~~D2-sweep sprint~~ 已撤单**（2026-04-19 PM 自抽修订）：
- 基线扫 15 城 × landmarks[0-2] = 45 点位，**真实缺口只有 1 个**（墨西哥城大教堂），其余 44 点位 ticket/tips/timingTip 都齐
- O-01 补完 = 45/45 全达标
- 初版写"42 点位 5 周"是我没扫基线就拍数字，**虚高 42 倍**——公开记录避免重犯

**v3.5+ 候选（挂起，本轮不做）**：
- Dev-H5 扩 renderTicket 支持 photography + crowdAdvice 两块 UI（~2h）
- 然后 PM 扫 45 点位补这两字段（依赖 demand-researcher 核拍照/着装硬规）

**流程纪律**：
- O-04 SOP 升级后，ux-lenses.md 同步升级为三轴判断 —— UX 镜头库下轮维护时执行
- O-06 D2 红线是首次对"占位上线"做 QA 级拦截 —— 下一轮 dev→main merge 前 QA 必扫 45 硬点位
- 本轮命名 v3.4 而非 v3.3.1 —— 因为 SOP 升级 + 例外附录 + 流程红线达到"写作规范级升级"门槛，避免版本号通胀的同时承认深度

---

### 2026-04-18（v3.1 UX 复审驱动 · 富内容呈现规范 + 容器清扫）

**本轮性质**：v3.0 上线后 UX 体验 7.0/10，CEO 二轮深度反馈定位致命伤 = 富内容呈现（斜体墙/段落墙/图片荒/chip 三连击），不是细节容器。PRD 附录 L 已落定 L-A（横切硬规）+ L-01 + L-03 + L-04~L-08，共 8 条。

**落入 PRD 附录 L（已 FROZEN）**：
- [UX #5 UX #6 UX #8 UX #12] 富内容呈现规范（4 硬规横切） → PRD L-A（CEO 二轮 review freeze，"硬规未被稀释成建议"）
- [UX #5] epochTail "／现在："斜线清除 → PRD L-01
- [UX #9] 首页 6 主题副标重写（反 count 壳） → PRD L-03（CEO approve 文案，含 imperial 街灯类比 / silk-road 辣椒两处校准）
- [UX #2] Hero 打字机 → 300ms fade-in → PRD L-04
- [UX #3] Hero tagline 半透明 chip 底 → PRD L-05
- [UX #8] MEANWHILE 去 emoji → PRD L-06
- [UX #12] 详情概述卡去金边深绿底 → PRD L-07
- [UX #11] 时间轴年份格式统一 → PRD L-08

**CEO 定性 don't fix 区（PM 零触碰，下游 Dev/QA 也不得顺手改）**：
- [UX #1] Hero 引用句（K-01 认知桥已击中）
- [UX #4] 景点 whyVisit 文案（K-01 SOP 正式版保护）
- [UX #7] 实用信息 Tab（K-05 ticket completeness 已达）
- [UX #10] "给我一座没去过的城"CTA（K-06 micro-copy 已达 Airbnb "I'm flexible" 档）

**推迟到 v3.2**：
- [UX #6 渐进披露方案] relatedLiterature "背景默认展开 / 人物 / 此时全球折叠" → v3.2 候选（先用 L-A 4 硬规解决根本问题，渐进披露是 nice-to-have）

**流程纪律**：
- P0-A（L-A）与 L-03 经 CEO 两轮 review gate freeze —— 四硬规硬词锁定，6 副标事实校准
- L-01 / L-04~L-08 为直落条目，不需 review gate，PM 直接 PRD 落字段

---

### 2026-04-17（v3.0 深耕轮 · 手动模式 · CEO Brief 驱动）

**本轮性质**：停 pipeline，CEO 直接开 PM/Dev session 做大块内容。demand-pool 🟢 条目全部转化，不再 v3.1 顺延。PRD 附录 K 已落定 K-01 ~ K-08（8 条），全部数据内联，不另起 `PM-v3.0-DeepWork/` 目录。

**纳入 PRD（请 PMO 把对应 demand-pool 条目移到"✅ 已转化"段）**：
- [竞品 AO] 每日节奏钩子 → PRD K-06
- [竞品 AO] 命题式 List 策展 → PRD K-04
- [阵地 Craig Mod] whyVisit 反主流叙事 → PRD K-01
- [阵地 Craig Mod] editorial 时代叠加结构 → PRD K-03
- [社区 知乎] whyVisit 认知桥 → PRD K-01
- [社区 知乎] 景点关联文学/名人字段 → PRD K-02
- [竞品 LP] 城市级 practical info 及格线 → PRD K-05
- [阵地 马伯庸] 三明治理论 + 古今连接点 → PRD K-01
- [阵地 马伯庸] editorial 小人物而非帝王 → PRD K-02 relatedFigure 写作 SOP
- [阵地 马伯庸] funFact "大藏在小里" → PRD K-01 SOP §具体锚点已吸收
- [竞品 GAC] 产品象限定位 → PRD §1.1（K-08）
- [阵地 Craig Mod] ticket 不抢戏 → PRD §1.1.1 产品原则第 1 条（K-07）
- [社区 知乎] 仿古商业街红线 → PRD §1.1.1 产品原则第 2 条（K-07）

**单独分流（不在 PM 职责）**：
- [基建 CEO] 大陆用户图片全部不显示（🔴 P0）→ PMO 单独开条转 Dev-H5，PRD K-## 未登记

**推迟到 v3.1+（本轮已满载）**：
- [竞品 AO] 叙事↔目录双向穿针（IA 调整，本轮不动）
- [阵地 Craig Mod] 代表店铺/具名人物卡（依赖编辑力）
- [阵地 Craig Mod] editorial 段落长度 SOP 放开（本轮 K-03 只补尾注）
- [社区 知乎] 城市页步行路线串联结构（依赖 IA 重构）

---

### 2026-04-17（v2.8 Mode A 消费 demand-pool）

**纳入 PRD 的条目**（通知 PMO 移到 demand-pool `已转化` 段）：
- [阵地 Craig Mod] whyVisit "城市级反主流叙事" → 融入 J-02 whyVisit v2 写作参考（不单独开条目）
- [社区 知乎] whyVisit 从标签升级为"认知桥" → 融入 J-02 首句加粗规范（"首句 = 认知桥"）

**记 v2.9 Future 的条目（本轮已满，不阻塞）**：
- [竞品 AO] Place of the Day 每日节奏钩子 → v2.9：本轮 4 个 P0 + 4 个 P1 已满载，此条无依赖但需 IA 设计
- [竞品 AO] 命题式 List 策展 → v2.9：需要设计 List 页面 IA，本轮聚焦修复不开新页面
- [社区 知乎] 景点关联文学/名人字段 → v2.9：低成本高区分度但需新增 data.js 字段 + 编辑 SOP，本轮不开新字段坑
- [阵地 Craig Mod] editorial 时代叠加结构 → v2.9：与 MEANWHILE 协同升级，需内容改写规范，本轮 J-07 先补完格式一致性

**本轮跳过不记 Future 的条目（已有其他安排）**：
- [竞品 AO] 景点卡三动词按钮 → demand-pool 已标 `撤`（依赖用户系统，本期不接）
- [竞品 AO] Gamification 只推供给端 → demand-pool 已标 `写进产品原则段`（非 backlog 条目）
- [竞品 AO] 叙事<->目录双向穿针 → demand-pool 已标 `v2.8 做`，但本轮 v2.8 优先修 CEO P0，此条顺延到 v2.9
- [阵地 Craig Mod] 城市页"代表店铺/具名人物"卡 → demand-pool 已标 `v2.8 做`，但依赖编辑力暂无资源，顺延 v2.9
- [阵地 Craig Mod] editorial 段落长度 SOP 放开 → demand-pool 已标 `v2.8 评估`，本轮不改 SOP（J-02 折叠方案已解决长文问题）
- [阵地 Craig Mod] ticket-info 不抢叙事戏 → demand-pool 已标 `进产品原则段`（非 backlog 条目）
- [社区 知乎] 城市页"步行路线"串联结构 → demand-pool 已标 `v2.8 做`，但需 IA 重构 + 新模块，顺延 v2.9
- [社区 知乎] 品牌红线：避免"数字版仿古商业街" → demand-pool 已标 `进产品原则段`（非 backlog 条目）

---

### 2026-04-18（v3.2 PM 小补刀 · 数据卫生 + schema 盲点）

**本轮性质**：v3.1 上线后 PM 自审发现的两条数据层小补丁，不需要 UX 触发，直接进 PM 队列。

- **[v3.2-PM-01] `js/data.js` 内 FFFD 替换字符（U+FFFD `�`）批量清扫** `[DONE:PM · 2026-04-18]`
  - 命中点：`js/data.js:46`（worldContext "马可·波罗即将���程东方"）、`js/data.js:221`（worldContext "东亚 �� 孔子在山东曲阜"）
  - 根因：早期编辑器/复制粘贴中字节流被截断，前端不报错但渲染出 `�`
  - 修法：PM 通读全部 worldContext / desc / whyVisit 长字段，手工还原原文（建议同时跑一遍 `grep -P '\xef\xbf\xbd' js/data.js` 兜底）
  - 验收：`grep -P '\xef\xbf\xbd' js/data.js` 返回空
  - **PM 产出（权威文本）**：
    - `js/data.js:46` "马可·波罗即将***启程***东方" — ✅ 前轮 L-08.2b 已由 Dev-H5 执行完毕，现态已为正常文本，**无需重做**。
    - `js/data.js:221` "🌏 东亚 ***·*** 孔子在山东曲阜结束政治生涯" — 本轮新发现；2 个 FFFD + 尾随空格（`�� `）还原为中点 + 半角空格（`· `），与站内其他 22 处 `东亚 · ` 格式统一。
  - **全量 FFFD 扫描已完成**：`grep -n "�" js/data.js` 仅返回 line 221 一处（即上一条）。worldContext / desc / whyVisit / detail.* / epochTail / overviewFull 等所有长字段均已通读，无其他 FFFD。
  - **权威修复表详见 PRD 附录 M §M-01**（Dev-H5 工单的单一权威来源）
  - 待 PMO 派 Dev-H5 单（改 1 处字符串，≤5 分钟）

- **[v3.2-PM-02] `era` 字段盲点（schema 一致性）** `[DONE:PM · 2026-04-18]`
  - 现状：PRD 附录 K-02 示例每条 landmark 都有 `era` + `yearNum`，但 `js/data.js` 实际数据并非全部 landmark 都填了 era；时间轴 / 时代标签依赖此字段
  - 根因：早期 SOP 未把 era 列为必填，K-02 之后才规范化；存量数据未回灌
  - 修法：PM 在 PRD 附录正式声明 era/yearNum 为 landmark 必填（schema 段加红线），PMO 据此另起 Dev-H5 数据回灌单（不在本条）
  - 验收：PRD schema 段落更新；PMO 工单已派发
  - **PM 产出**：
    - **PRD 附录 M §M-02 已落字段契约 + PR 合并红线**：`landmark.era` (string 必填) + `landmark.yearNum` (number 必填)；缺省 → PR 阻塞。
    - QA assertion 命令已写进 PRD（Node 一行 check 存量），PMO 可直接交 QA 测试或 Dev 挂 pre-commit。
    - 存量回灌不在 PM 职责——PMO 需另派 Dev-H5 单，让 Dev 扫 `js/data.js` 所有 `landmarks[]` 并补齐缺失字段（建议跑一遍上述 assertion 命令定位）。

- **[v3.2-Dev-H5-01] 装 M-02 pre-commit hook（本地拦截器）** `[DONE:Dev-H5 · 2026-04-18 · merged a3208f3..HEAD]`
  - **背景**：PRD §M-02 已把 `landmark.era` / `yearNum` 列为必填，需要本地兜底防 PM/Dev 后续健忘
  - **临时扩权**（CEO 已批 · 仅本单 · 完成后回默认权限）：允许 Dev-H5 新建 `scripts/check-landmark-schema.js`、新建 `.husky/pre-commit`、修改 `package.json`（+ husky devDep + `prepare` 脚本）、视需要补 `.gitignore`
  - **工作分支**：`dev`（先 `git checkout dev && git pull origin dev`）
  - **不做**：不碰 GitHub Actions / 不改 PRD / CLAUDE.md / workflow/* / 不顺手修那 12 条 era 格式不符（独立工单）/ 不改 `js/data.js` 业务数据
  - **验收**：① 正路径 commit 成功 ② 故意删某 landmark 的 era → commit 被 hook 拦 → 还原后再次成功；两次终端截图贴汇报
  - **完成后**：commit 到 dev，标 [DONE:Dev-H5]，PMO 负责 dev → main

---

## Completed

_(Move tasks here when merged to main and verified)_
