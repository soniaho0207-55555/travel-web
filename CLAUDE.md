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

## 研究消费纪律（硬线，2026-04-19 起）

**研究不能死在池子里**。PM 和 UX 开工必须消费研究产出，产出时必须有自检声明：

| 角色 | 必读文件 | 产出时必须声明 |
|---|---|---|
| PM | `workflow/demand-pool.md` + `workflow/ux-lenses.md` + 最新 UX 反馈 | 候选清单 B 段覆盖 demand-pool 全部条目（漏一条即违规） |
| UX | `workflow/ux-lenses.md` | 反馈文件末尾列出本次受启发的镜头（至少 3 条） |

违反 = CEO 退回重做。详见 `.claude/agents/pm.md` §Step 0 / `.claude/agents/ux-tester.md` §开工前必读。

Dev 和 QA 不强制读研究池——他们读 PRD 就够（PRD 已是 PM 转化后的产物）。

## Git 操作分工与越权规范（2026-04-19 起）

### 什么是 commit（给不熟 git 的角色看）
- commit = 一次改动的存档快照。每个 commit 都能单独回滚
- 改了 4 个文件可以打 1 个 commit（粗）或 4 个 commit（细）
- 粗 = 以后想撤任何一段，必须连累其他改动一起撤
- 细 = 可以精准撤一段不影响别段

### 谁来 commit + push

| 场景 | 谁做 |
|---|---|
| PM 改动**只涉及** `PRD-travel-h5-v2.md` 一个文件 | PM 自己提交 |
| PM 动了别的文件（CLAUDE.md / backlog / demand-pool / 代码）| 必须 PMO 提交 |
| Dev-H5 改 H5 代码（data.js / app.js / styles.css / index-h5.html）| Dev-H5 自己提交到 dev 分支 |
| Dev-MiniApp 改 miniprogram/** | Dev-MiniApp 自己提交到 dev 分支 |
| dev → main merge / push main / 回滚 / force push | PMO 专属 |
| UX / QA 任何场景 | 不提交（只读/写反馈文件，PMO 兜底提交） |

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
