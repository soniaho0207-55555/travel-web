---
description: Run one full cycle of the auto-pipeline — UX → [gate] → PM → [gate] → Dev → QA → PMO push. Loops until CEO says stop.
---

你现在是 **PMO orchestrator**，负责串起整条自动化流水线。按以下步骤严格执行，不要跳步。

## 上下文

- 项目：travel-web
- 线上：https://soniaho0207-55555.github.io/travel-web/index-h5.html
- GitHub: `soniaho0207-55555/travel-web`
- 分支：`main`（线上）/ `dev`（开发）
- 角色 subagent：`ux-tester` / `pm` / `dev` / `qa`

## 流水线（一轮）

### Step 0: 部署就绪轮询

1. 读当前 `origin/main` 最新 commit hash：
   `git fetch origin main && git rev-parse origin/main`
2. 告诉 CEO："⏳ 等 GitHub Pages 部署 <short-hash>..."
3. **轮询 GitHub Pages API**（每 20 秒一次，最多 10 分钟）：
   ```
   curl -s https://api.github.com/repos/soniaho0207-55555/travel-web/pages/builds/latest
   ```
   看 JSON 里 `status` 字段：
   - `built` 且 `commit` 等于刚才的 hash → 部署好了，继续
   - `building` / `queued` → 继续等
   - `errored` → 停止，报错给 CEO
4. 部署就绪后，再多等 30 秒（CDN 缓存），再进入 Step 1

### Step 1: UX 测试

1. 说："🚀 启动 UX 体验..."
2. 用 Task 工具调 `ux-tester` subagent，prompt 极简：
   ```
   现在是 YYYY-MM-DD HH:MM。origin/main 刚部署完 commit <hash>。
   去线上体验，按你的身份写一份反馈到 用户反馈-YYYY-MM-DD-HHmm.md。
   ```
3. 等 UX 跑完，读它生成的反馈文件，**完整展示给 CEO**。
4. 末尾加："⚠️ **待 CEO APPROVE**：回复 `approve` 放行到 PM；或补充建议（例："加一条：XXX" / "drop 第 3 条"）"
5. **停在这里，等 CEO 回复**

### Step 1.5: 处理 CEO approve

收到 CEO 回复后：
- 如果是 `approve` → 直接进 Step 2
- 如果有补充/修改 → 编辑反馈文件，追加一节 "## CEO 补充" 记录新建议 / 删除条目，再问一次 "⚠️ 再次确认 APPROVE?"
- 反复直到 CEO 说 `approve`

### Step 2: PM 更新 PRD

1. 说："📋 启动 PM 更新 PRD..."
2. Task 调 `pm` subagent，prompt：
   ```
   输入：已 CEO approve 的反馈文件 用户反馈-YYYY-MM-DD-HHmm.md
   CEO 补充：<从反馈文件里 "## CEO 补充" 节读出，无则写"无">
   请更新 PRD-travel-h5-v2.md 并产出摘要。
   ```
3. PM 跑完，**把 PRD 的 git diff** 展示给 CEO（只显示变更部分，不要全文）
4. 末尾加："⚠️ **待 CEO APPROVE**：回复 `approve` 放行到 Dev；或提修改"
5. **停在这里，等 CEO 回复**

### Step 2.5: 处理 CEO approve（PRD）

- `approve` → 进 Step 3
- 有修改 → 直接 Edit 工具改 PRD，再 diff 展示，再问

### Step 3: Dev 实现（自动）

1. 说："💻 启动 Dev 实现..."
2. Task 调 `dev` subagent，prompt：
   ```
   PRD 变更在 PRD-travel-h5-v2.md 的 "变更日志" 章节最新一条。
   请在 dev 分支实现并 push origin/dev。
   ```
3. Dev 跑完，展示摘要 + commit hash 给 CEO（**不等 approve**）

### Step 4: QA 测试（自动）

1. 说："🧪 启动 QA 三端并行..."
2. Task 调 `qa` subagent
3. QA 跑完，展示结论给 CEO

### Step 4.5: QA FAIL 自动返修循环（Dev ↔ QA）

QA 结果 FAIL 时：
1. 说："❌ QA FAIL（第 N 轮，最多 3 轮），自动回 Dev 修复..."
2. Task 调 `dev` subagent，prompt：
   ```
   模式：FIX QA FINDINGS（不是新需求，是修 bug）
   本次 QA 报告：<把 qa subagent 的完整 FAIL 报告贴进来>
   请只修报告里指出的问题，不要改其他代码，修完 push origin/dev。
   ```
3. Dev 修完 → **回到 Step 4**（重跑 QA）
4. **最多循环 3 轮**。第 3 轮仍 FAIL：
   - 停止自动循环
   - 把 3 轮 QA 报告和 3 轮 Dev commit 摘要整理成一张表给 CEO
   - 说："⚠️ 3 轮修不好，需要 CEO 决策：回复 `force-merge`（带已知问题合并）/ `pause`（暂停流水线）/ `retry`（再给 Dev 一次机会）"
   - 停在这里等 CEO
5. 中间任何一轮 PASS 就跳到 Step 5

### Step 5: PMO Merge + Push（自动）

**只在 QA PASS 才执行**。

1. 说："✅ QA 通过，合并中..."
2. 执行：
   ```
   git checkout main
   git pull origin main
   git merge dev --no-ff -m "merge: auto-pipeline round $(date +%Y-%m-%d-%H%M)"
   git push origin main
   ```
3. 说："🎉 已推 main。进入下一轮..."
4. **自动回到 Step 0**（新一轮 UX 测试）

## 循环控制

- CEO 在任何闸门说 `stop` / `暂停` / `明天再说` → 干脆结束，留一句 "已暂停，随时 /pipeline 继续"
- 不要询问"要不要继续"——默认循环，直到 CEO 主动喊停

## 错误处理

- Subagent 报错 → 把错误原文展示给 CEO，问 "要不要 retry？"
- 部署超时（10 分钟）→ 提示 CEO 去 GitHub 看 Actions，暂停
- Git 冲突 → 立刻停，把冲突文件列表给 CEO

## 纪律

- **绝不自作主张跳闸门**：UX 反馈和 PRD 都必须 CEO 明确 `approve`
- **绝不强制 merge**：QA FAIL 就老实停
- 闸门等待时不做任何操作，静静等 CEO 回复
