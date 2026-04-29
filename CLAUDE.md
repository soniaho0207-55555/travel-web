# Travel-Web Project Rules

## Project Structure
```
index-h5.html        # HTML shell (DO NOT bloat, keep minimal)
css/styles.css       # All styles
js/data.js           # City/theme/continent data (THEMES, CONTINENTS, CITIES)
js/app.js            # Router, rendering, utilities
PRD-travel-h5-v2.md  # Product requirements (PM owns)
workflow/backlog.md   # Shared task board (PMO owns)
```

## Role-Based File Permissions

CRITICAL: Each role MUST only modify their allowed files. Violating this will cause merge conflicts and break other roles' work.

| Role | Allowed to MODIFY | Read-only |
|------|-------------------|-----------|
| PM (Review PRD) | `PRD-travel-h5-v2.md` | everything else |
| Dev-H5 (Build H5 page) | `index-h5.html`, `css/styles.css`, `js/app.js`, `js/data.js` | `PRD-travel-h5-v2.md`, `miniprogram/**` |
| Dev-MiniApp (Build WeChat mini program) | `miniprogram/**` | `PRD-travel-h5-v2.md`, H5 code (can read `js/data.js` as data source) |
| QA (Testing) | NOTHING (read + test only) | everything |
| UX (User feedback) | `用户反馈-*.md` (create new files only) | nothing to modify |
| Demand Researcher (外部需求研究) | `research/demand-*.md`, `workflow/demand-pool.md` | everything else |
| **UX TASTE (2026-04-26 起独立 agent)** | `workflow/ux-lenses.md`, `research/<域>-<对象>-*.md`（**非** demand-* 前缀的研究报告）| everything else（含 PRD / 业务代码 / 用户反馈 / demand-pool） |
| **Triage (分诊员，2026-04-26 起)** | `workflow/triage-*.md` (创建); `workflow/demand-pool.md` 仅 ✅ 已转化 + 历史淘汰段; `workflow/ux-lenses.md` 仅 历史淘汰记录 + 🔴 本轮重点段 | everything else (含 PRD / 业务代码 / north-star / parked-decisions) |
| PMO (this conversation) | `workflow/backlog.md`, `CLAUDE.md` | everything |

### Dev 分工红线
- Dev-H5 和 Dev-MiniApp **共享同一份数据** (`js/data.js`)，由 Dev-H5 维护；Dev-MiniApp 只读
- 如果小程序需要新字段：先让 PM 写进 PRD → 通知 Dev-H5 改 `js/data.js` → Dev-MiniApp 消费
- 禁止 fork 数据，禁止互改对方的代码文件

## Branch Rules

- `main` = stable release branch, deployed to GitHub Pages
- `dev` = development branch, Dev works here
- Feature branches = `feature/*`, `fix/*` for isolated work
- NEVER force push to main
- NEVER commit directly to main (except PMO merging approved changes)

## Workflow

All roles follow this cycle:

```
Step 1: PMO 分配
   PMO 在 backlog.md 写任务，标记 [ASSIGNED:Dev-H5] / [ASSIGNED:Dev-MiniApp] / [ASSIGNED:PM]

Step 2: PM 评审需求
   PM 审核 PRD，确认需求合理 → 在 backlog.md ## PRD Changes 记录变更
   如果需求有歧义或缺失，PM 先更新 PRD，再通知 Dev 可以开工

Step 3: Dev 开发（H5 和 MiniApp 可并行）
   Dev-H5 / Dev-MiniApp 读 backlog.md 和 PRD → 在 dev 分支写代码 → 改完标记 [DONE:Dev-H5] / [DONE:Dev-MiniApp]

Step 4: QA 验证
   QA 在 dev 分支测试 → 通过标记 [PASS] / 不通过标记 [FAIL:原因]

Step 5: PMO 合并
   QA 通过后 → PMO 把 dev 合并到 main → push → 线上更新

Step 6: UX 体验
   线上更新后 → UX 在线上体验 → 写 用户反馈-日期.md

Step 7: PMO 归档
   PMO 把 UX 反馈转成新的 backlog 条目 → 回到 Step 1
```

### When does PM get involved?
- New feature: PM MUST review PRD before Dev starts coding
- Bug fix (P0/P1): Dev can start immediately, PM reviews PRD after
- Content changes (new cities/landmarks): PM writes content in PRD, Dev implements

## Communication Protocol

Roles communicate ONLY through files:
- `workflow/backlog.md` — task assignments and status (source of truth)
- Bug reports: QA writes in backlog.md under ## QA Findings
- UX feedback: UX creates `用户反馈-{date}.md` files
- PRD changes: PM updates PRD and notes in backlog.md under ## PRD Changes
- **外部需求信号**：demand-researcher 在 `workflow/demand-pool.md` 沉淀（竞品/社区/阵地/脑暴/数据），PM 下一轮 Mode A 必读；转化后 PRD 变更日志注明"来源：demand-pool 条目 <日期>"

DO NOT assume what other roles are doing. READ backlog.md before starting work.

## 研究消费纪律（硬线，2026-04-19 起 · 2026-04-26 重构）

**研究不能死在池子里**。但前一版"PM 全覆盖 demand-pool"的硬规设计错了——追求"全覆盖"反而失效，研究继续积压。

**2026-04-26 重构**：引入 **Triage 分诊员** 作为研究产出和 PM 落地之间的中介。

### 工作流（新 · 双回路）

```
[慢回路 · 研究产出] · CEO 按需触发，不限速

  /be-demand-researcher（CEO 派）─→ workflow/demand-pool.md
  /be-ux-taste（CEO 派）─────────→ workflow/ux-lenses.md
                                      ↑
        Triage 提醒"研究缺口" ←──────┘（池子缺啥 / 哪个轴空白）

[快回路 · 主迭代] · 每 2-3 天一轮

  CEO 派 /be-triage
       ↓
  Triage 评 3 个池子全量条目（demand-pool + ux-lenses + 最新用户反馈）
  + 输出"研究缺口建议"（提醒慢回路）
       ↓
  workflow/triage-YYYY-MM-DD.md
       ↓
  CEO 30 秒拍板（must-do ≤ 5 条 + 冲突择一 + 是否触发慢回路）
       ↓
  CEO 派 PM → 100% 落地 must-do（漏一条 = PRD 补丁无效）
       ↓
  CEO 派 Dev → 写代码
       ↓
  CEO 派 PMO → 合 main + 反向倒灌（PMO 审计 gate 检查所有 commit）
       ↓
  CEO 派 UX 本人（/be-ux）→ 测线上 → 用户反馈-*.md
       ↓
  下一轮 Triage 自动消费新反馈
```

**关键变化**：
- 3 个池子（不是 2 个）：demand-pool + ux-lenses + **最新用户反馈条目**
- 用户反馈条目按 6 维评分卡同等待遇评分（"证据强度"维度天然 = 3）
- Triage 用 mtime 对比判断反馈是否需读（最新反馈 mtime > 上次 triage = 必读）
- Triage 输出含"研究缺口建议"——主动提醒 CEO 触发慢回路（不强制）

### 角色硬规

| 角色 | 开工必读 | 产出时必须声明 |
|---|---|---|
| **Triage** | demand-pool.md（全量 pending）+ ux-lenses.md（待消化）+ product-north-star.md + 上次 triage report | Triage Report 必须遍历全量条目（漏一条 = 无效） |
| **PM** | **最新一份 Triage Report**（替代旧"读 demand-pool 全部条目"硬规）+ 最新 UX 反馈 + PRD 末尾变更日志 | PRD commit message 必须列消化的 must-do 清单（5/5 全打勾，漏一条 = commit 拒绝） |
| **UX** | `workflow/ux-lenses.md` | 反馈文件末尾列出本次受启发的镜头（至少 3 条）|

### 强制机制（三层叠加）

**1. PM 开工硬规改写**：
- ❌ 旧规：候选清单 B 段覆盖 demand-pool **全部条目**（漏一条即违规）
- ✅ 新规：PM 开工必读最新 Triage Report → must-do 清单 **100% 落地到 PRD**（漏一条 = PRD 补丁无效）
- Triage Report 必须比最新用户反馈新（mtime 对比）→ 否则 PM 不允许开工，必须先 `/be-triage`

**2. PRD commit message 模板硬规**：

PM 提交 PRD 补丁的 commit message 必须包含：

```
docs(prd): vX.Y 补丁

本轮 Triage must-do 消化清单（N/N）：
✓ [demand-pool/lens] <条目名> → PRD §X.Y
✓ ...
```

漏勾一条 = PMO 拒绝 commit。

**3. Triage 闭环回收**：
- 下次 Triage 上工时第一件事 = 审上轮 must-do 完成度
- 全部完成 → 派下一轮
- 漏 1 条 → 给 CEO 标记，由 CEO 决定"补做"还是"放掉"
- 漏 ≥ 2 条 → 警报，PM 流程出问题

### 边界

- **Dev 和 QA 不强制读研究池**——他们读 PRD 就够（PRD 已是 PM 转化后的产物）
- **Triage 不替 CEO 决策**——只整理 + 推荐 + 暴露冲突，CEO 拍板才生效
- **Triage 不写 PRD / 不创造研究**——纯分诊角色，详见 `.claude/agents/triage.md`

违反 = CEO 退回重做。详见 `.claude/agents/triage.md` / `.claude/agents/pm.md` §Step 0 / `.claude/agents/ux-tester.md` §开工前必读。

## 工作模式 · 深耕 vs Pipeline（2026-04-26 起）

travel-web 有两种工作模式，**默认 = 深耕模式**：

| 模式 | 触发 | 节奏 | 核心特征 |
|---|---|---|---|
| **深耕模式（默认）** | CEO 没明说"启动 pipeline" | 慢 + 高品质 | CEO 单点指挥，每步 CEO 拍板，agent 不主动派单 |
| **Pipeline 模式** | CEO 明确说 `/pipeline` 启动 | 快 + 自动循环 | UX → PM → Dev → QA → UX 自动循环，PMO 兜底 orchestration |

### 深耕模式硬规（默认 · 违反 = 越权）

**所有角色（特别是 PMO）在深耕模式下**：
- ❌ 不主动启动其他 agent（`/be-ux` / `/be-ux-taste` / `/be-demand-researcher` / `/be-triage` / `/be-pm` / `/be-dev-h5` 等）
- ❌ 不替 CEO 决策"下一步派谁"
- ✅ 完成本轮任务后，**只汇报状态 + 给 CEO 下一步建议**（用代码块），由 CEO 决定派谁
- ✅ 仅 PMO 在 CEO 明确启动 `/pipeline` 时走自动循环

### 痛点举例（修这条规之前的真实问题，2026-04-26）

PMO 之前每次 commit + push 完会自动尝试启动 UX 测线上——**这是从 pipeline 模式带来的肌肉记忆**。深耕模式下 CEO 不需要这个，反而打断节奏。新规明示：PMO 只汇报，等 CEO 拍板。

### 边界

- 深耕模式 ≠ 单兵作战。各角色仍然按自己的硬规工作（PM 必读 Triage Report / Dev 必读 PRD 等）
- 深耕模式只是禁止"agent 替 CEO 决策派单"

---

## Git 操作分工与越权规范（2026-04-19 起 · 2026-04-26 重构）

### 什么是 commit（给不熟 git 的角色看）
- commit = 一次改动的存档快照。每个 commit 都能单独回滚
- 改了 4 个文件可以打 1 个 commit（粗）或 4 个 commit（细）
- 粗 = 以后想撤任何一段，必须连累其他改动一起撤
- 细 = 可以精准撤一段不影响别段

### 谁来 commit + push（2026-04-26 重构 · 每个角色管自己 commit）

**核心原则**：每个角色对自己产出的文件**自己 commit + push 到自己分支**。PMO 不再做 commit 兜底，只做合 main 审计 gate。

| 角色 | 自己 commit 的文件域 | commit message 前缀 |
|---|---|---|
| **PM** | `PRD-travel-h5-v2.md` | `docs(prd):` |
| **Dev-H5** | `index-h5.html` / `css/styles.css` / `js/app.js` / `js/data.js` | `feat(h5):` / `fix(h5):` |
| **Dev-MiniApp** | `miniprogram/**` | `feat(miniapp):` / `fix(miniapp):` |
| **UX 本人**（`/be-ux`）| `用户反馈-*.md`（新建/改）| `ux(feedback):` |
| **UX TASTE**（`/be-ux-taste`）| `workflow/ux-lenses.md` + `research/<域>-<对象>-*.md` | `research(ux-taste):` |
| **demand-researcher** | `workflow/demand-pool.md` + `research/demand-*.md` | `research(demand):` |
| **Triage** | `workflow/triage-*.md`（新建）+ `demand-pool.md` / `ux-lenses.md` 的归档段 | `triage:` |
| **Explorer** | `workflow/product-north-star.md` / `workflow/parked-decisions.md` / `.claude/**` / `CLAUDE.md`（基础设施改动）| `docs(rules):` / `docs(north-star):` / `feat(infra):` |
| **PMO** | `workflow/backlog.md` / `CLAUDE.md`（规则类）/ `.claude/**` | `docs(rules):` / `chore:` |

### PMO 唯一专属（不可代替）· 不可逆分支级 git 操作

- `dev → main merge`
- `push main`
- 反向倒灌（main → dev，CLAUDE.md §dev 分支同步硬规）
- 回滚 / force push（特殊情况，需 CEO 批准）
- 清理死分支 / worktree 协调
- **合 main 前审计 gate**（详见 `.claude/agents/pmo.md` §核心职责 2）

### 合 main 前审计 gate（PMO 必做 · 2026-04-26 起）

PMO 在合 dev → main 前必扫所有待合并 commit：

1. **文件域合规**：每个 commit 涉及的文件必须在作者域内。越权 = 拒绝合 main
2. **Commit message 格式**：必须有合法 prefix。不规范 = 拒绝合 main
3. **跨域 commit**：一个 commit 装两个域 = 违反 §提交粒度。拒绝合 main，要求拆分

**结果**：质量门控不丢，只是从"commit 时把关"延后到"合 main 时把关"。每个角色对自己 commit 负责。

### 越权规范

**定义**：角色动了**非自己 Allowed to MODIFY 域**的文件 = 越权。

**规则**：
1. 越权必须在当次 session 明确声明："越权改 `<文件>`，理由 `<X>`，CEO 授权 Y/N"
2. 未经 CEO 授权的越权 → PMO 提交前有权要求回滚
3. CEO 授权过的越权 → 通过

### 提交粒度（硬规）

**跨域改动必须拆 commit**。一个 commit 只装同一个域的改动：
- PRD 改动 → 一个 commit（message 前缀 `docs(prd):`）
- CLAUDE.md / backlog 规则类 → 一个 commit（`docs(rules):`）
- demand-pool 归档 → 一个 commit（`docs(demand-pool):`）
- 代码改动 → 一个 commit（`feat(h5):` / `fix(h5):`）

**禁止** 把跨域改动打成一个 commit —— 这是本项目的头号回滚风险来源（场景 1）。

### 越权 / 提交常见灾难（白话）

1. **粗打包牵连**：4 件事拍一张总照片，想撤 1 件只能全撤
2. **强推覆盖**：推被拒了用 `git push -f` 硬覆盖 → 吞掉别人刚推的东西
3. **合并失手**：和别人改了同文件，合并时误删他的或自己的改动
4. **reset --hard**：敲错命令把自己没存档的改动直接擦了，找不回来
5. **垃圾误推**：把 `.DS_Store` / 缓存一起推了，清理要重写历史影响所有人

PMO 每天做 commit，对这 5 条有肌肉记忆；PM / Dev / UX 专注内容，遇到这些容易慌 —— 这是"跨域必须 PMO 提交"的根本理由。

---

## D2 红线 · 头号 icon 景点不允许占位上线（2026-04-19 起，PRD §O-06）

每城 `landmarks[0]` / `[1]` / `[2]`（前 3 位 icon）必须达标：

- `ticket` 对象 **4 必填**（对齐 `js/app.js:990 renderTicket`）：
  - `price` · `channels` · `bookingWindow` · `timingTip`
  - `photography` / `crowdAdvice` / `dressCode` 等字段当前 renderer 不显示，不列硬规（v3.5+ 候选）
- `tips[]` **≥ 4 条**，category 至少覆盖 **3 种不同的 canonical category**（`ticket` / `timing` / `photo` / `route` / `dress` / `season` / `secret` 七选三），由 renderer 决定，不允许 PM 自造
- 禁止字符串："补齐中" / "待更新" / "TBD" —— 任一出现 = FAIL

**QA gate**：dev → main merge 前必扫 15 城 × 3 = 45 硬点位。
**长尾景点**（landmarks[3+]）允许占位或字段缺失。

**QA 扫描对象 = `js/data.js`**（不是 PRD）。PRD 只是规矩，`js/data.js` 才是落地真相。

## 语言风格硬线（2026-04-20 起 · 所有角色）

CEO 不是技术背景。所有角色（PM / Dev / QA / UX / PMO / Explorer / Demand）产出给 CEO 看的文字**必须白话优先**。

**硬规**：
1. 能用白话说的不用术语。比如"renderer 不认这个 category" → "把数据变成网页那段代码不认识这个分类"
2. 必须用术语时，**紧跟一个括号白话例子**。比如 "commit（一次改动的存档快照）"、"dev 分支（草稿箱）"、"merge（把草稿复印到线上）"
3. 列表优于段落，对比表优于列表
4. 数字具体化。不说"很多 tips"，说"63 个 tips"
5. 禁止："根据以上分析..." / "综上所述..." / "复核确认..."这类公文腔

**检测法**：产出完自己读一遍——"如果我是 CEO 看到这段，会不会第一反应是'这啥意思'？" 会，就改。

**惯犯名单**：QA / Dev / Explorer 最容易用术语（职业病）。PM / UX / Demand 相对好。但这条规**对所有人**。

## 交付摘要"下一步建议"硬规（2026-04-21 起·所有角色）

每个角色产出交付摘要时，最后必须包含这段，**缺这段 = 摘要无效**：

---

## 下一步建议

**交给**：<角色名>（/be-xxx） 或 **CEO 收工**

**建议发给 TA 的消息**：
（必须用 ``` 代码块包起来 —— 见下方 "格式硬规 · 代码块"）

**如有分支**：PASS → X / FAIL → Y，每条给一套指令（每条也都用代码块）

---

### 格式硬规 · 代码块（2026-04-22 起 · CEO 远程操控下一键复制）

**所有"发给下一角色的指令文字"必须用 ``` 代码块包起来**，不能用 blockquote（`>`）或普通段落。

**为什么**：CEO 用远程桌面操控时，code block 有"一键复制"按钮（鼠标一点即全选），普通文字要手动拖选——远程环境下拖选卡顿、容易选错边界。

**正确示范**（✅）：

    建议发给 PM 的消息：
    ```
    切 PM：/be-pm

    任务：<具体指令>
    ...
    ```

**错误示范**（❌）：

    建议发给 PM 的消息：
    > 切 PM：/be-pm
    > 任务：<具体指令>
    > ...

**适用范围**：所有"直接复制给下一角色的文字"——派单指令、bash 命令、给 PMO 的回复、给 PM 的回复都算。Markdown 表格、分析说明、一般正文**不**强制用代码块（code block 会破坏表格渲染）。

**检测法**：写完自查——这段文字 CEO 要直接复制发给别的 agent 吗？是 → 代码块。否 → 不用。

---

**边界**（重要）：这条规是"建议"不是"决策"——角色递底稿给 CEO，CEO 是唯一派发者。

**禁止**：
- "看 CEO 决定" = 空话
- "下一步 QA" 不给指令 = 无效
- 替 CEO 拍战略选择（"我们下轮做 X"）= 越权
- 角色之间不允许绕过 CEO 直接联动

**用意**：CEO 看完摘要能直接**一键**复制发下一角色，不用每次追问"那现在给谁发什么"，也不用手动拖选长文字。

## dev 分支同步硬规（2026-04-20 起 · 补丁 2026-04-21）

PMO 每次开工用 dev 前，第一件事：`git fetch origin && git merge origin/main`

**补丁（2026-04-21）**：PMO 每次合完 `dev → main` 后，**立刻做反向倒灌**：
    git checkout dev
    git merge origin/main
    git push origin dev

目的：让 dev 永远和 main 对齐，消除"下次用 dev 要临时追赶"的窗口。不反向倒灌 = 本次合并未完成。

## Dev Server
- Config: `.claude/launch.json`, name: `travel-h5`, port: 8090
- Serves all static files (html, css, js) with correct MIME types
