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

## Dev Server
- Config: `.claude/launch.json`, name: `travel-h5`, port: 8090
- Serves all static files (html, css, js) with correct MIME types
