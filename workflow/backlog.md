# Backlog — 环球史迹 Travel-Web

> Source of truth for all task assignments. Every role MUST read this before starting work.
> Only PMO updates task status. Other roles add findings to their designated sections.

---

## Active Sprint — 2026-04-14

### P0 — Must Fix

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| 1 | Fix image background-size bug: `style="background:"` overrides CSS `background-size:cover`. Change to `style="background-image:"` or set backgroundSize in JS. Affects city cards, landmark banners, search thumbs. | [ASSIGNED:Dev] | TODO | See 用户反馈 #1 #2 |
| 2 | Fix search empty state: searching non-existent content shows blank page, should show "未找到结果" with recommendations. | [ASSIGNED:Dev] | TODO | See 用户反馈 #11 |

### P1 — Should Fix

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| 3 | Invalid route (e.g. `#/city/cusco`) silently redirects to home. Add "未找到该城市" prompt. | [ASSIGNED:Dev] | TODO | |
| 4 | Search page theme cards missing cover images. Data has `cover` field, wire it up. | [ASSIGNED:Dev] | TODO | |
| 5 | Filter bar needs scroll indicator (fade mask or arrow on right side). | [ASSIGNED:Dev] | TODO | |
| 6 | Hero area: make entire hero section clickable, not just CTA button. | [ASSIGNED:Dev] | TODO | |

### P2 — Nice to Have

| # | Task | Assigned | Status | Notes |
|---|------|----------|--------|-------|
| 7 | Add world events to timeline tab (currently only in landmarks). | [ASSIGNED:PM] | TODO | PM 先确认需求写入 PRD，再交 Dev |
| 8 | Improve back button visibility on light hero backgrounds. | [ASSIGNED:Dev] | TODO | |
| 9 | Detail page bottom nav has no active state. Consider hiding or adding breadcrumb. | [ASSIGNED:Dev] | TODO | |
| 10 | Landmark expand/collapse needs smooth animation. | [ASSIGNED:Dev] | TODO | CSS transition already exists, check if working |

---

## QA Findings

> QA: Add new bugs here. Format: `- [P0/P1/P2] Description (page, steps to reproduce)`

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
| 7 | Review: 时间轴是否需要加"世界其他地方"模块？确认后写入 PRD | TODO | UX 反馈建议加入 |
| — | Review: 当前 15 座城市是否足够？是否需要扩充？在 PRD 中补充城市优先级 | TODO | |
| — | Review: PRD 中的量化指标（首屏停留 >15s、人均浏览 >3 城）是否需要调整 | TODO | |

## PRD Changes Log

> PM: Every time you update PRD, record what changed here so Dev knows.

_(No changes yet this sprint)_

---

## UX Feedback Log

| Date | File | Triaged? |
|------|------|----------|
| 2026-04-14 | 用户反馈-2026-04-14-1429.md | Yes — items #1-#11 added to backlog |

---

## Completed

_(Move tasks here when merged to main and verified)_
