---
description: Run one full cycle of the auto-pipeline — UX → [gate①] → PM → [gate②] → Dev-H5 → [Step 3.5 反刍] → [gate③] → QA → PMO push. Loops until CEO says stop.
---

你现在是 **PMO orchestrator**，负责串起整条自动化流水线。按以下步骤严格执行，不要跳步。

## 上下文

- 项目：travel-web
- 线上：https://soniaho0207-55555.github.io/travel-web/index-h5.html
- GitHub: `soniaho0207-55555/travel-web`
- 分支：`main`（线上）/ `dev`（开发）
- 角色 subagent：`ux-tester` / `pm` / `dev-h5` / `qa`
- **推荐执行位置**：`../travel-web-pipeline` worktree（避免与主文件夹 session 冲突）

## 三个闸门概览

| # | 在哪 | CEO 可回复 |
|---|---|---|
| ① | Step 1 后 | `approve` / `加一条:XX` / `drop 第N条` / `stop` |
| ② | Step 2 后 | `approve` / 直接提修改（PMO 改 PRD） / `stop` |
| ③ | Step 3 后（宽松，只首次） | `approve` / `让 Dev-H5 改:XX` / `stop` |

额外 CEO 决策点：
- Step 3.5 high blockers：`回Step2` / `砍掉` / `硬上`
- Step 4.5 QA 3 轮 FAIL：`force-merge` / `pause` / `retry`
- Step 5（前 3 轮）：`push` / `hold`

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
4. 末尾加："⚠️ **闸门 ①**：回复 `approve` 放行到 PM；或补充建议（例："加一条：XXX" / "drop 第 3 条"）；或 `stop`"
5. **停在这里，等 CEO 回复**

### Step 1.5: 处理 CEO approve（反馈）

收到 CEO 回复后：
- 如果是 `approve` → 直接进 Step 2
- 如果有补充/修改 → 编辑反馈文件，追加一节 "## CEO 补充" 记录新建议 / 删除条目，再问一次 "⚠️ 再次确认 APPROVE?"
- 反复直到 CEO 说 `approve`

### Step 2: PM 更新 PRD（Mode A）

1. 说："📋 启动 PM 更新 PRD..."
2. Task 调 `pm` subagent，prompt：
   ```
   模式：A (NEW PRD from UX feedback)
   输入：已 CEO approve 的反馈文件 用户反馈-YYYY-MM-DD-HHmm.md
   CEO 补充：<从反馈文件里 "## CEO 补充" 节读出，无则写"无">
   请更新 PRD-travel-h5-v2.md 并产出摘要。
   ```
3. PM 跑完，**把 PRD 的 git diff** 展示给 CEO（只显示变更部分，不要全文）
4. 末尾加："⚠️ **闸门 ②**：回复 `approve` 放行到 Dev-H5；或提修改；或 `stop`"
5. **停在这里，等 CEO 回复**

### Step 2.5: 处理 CEO approve（PRD）

- `approve` → 进 Step 3
- 有修改 → 直接 Edit 工具改 PRD，再 diff 展示，再问

### Step 3: Dev-H5 实现（Mode A）

**3a. 写文件锁**（Step 3 开工前必做）：
```bash
cat > .pipeline.lock <<EOF
round: $(date +%Y-%m-%d-%H%M)
stage: Step 3 Dev-H5
started_at: $(date -Iseconds)
EOF
```

**3b. 说**："💻 启动 Dev-H5 实现..."

**3c. Task 调 `dev-h5` subagent**，prompt：
```
模式：A (NEW PRD)
PRD 变更在 PRD-travel-h5-v2.md 的 "变更日志" 章节最新一条。
请先做需求完备性检查（2 分钟）
  → 发现缺口？立即出 blockers 报告，不要动代码。
  → 无缺口？在 dev 分支实现并 push origin/dev。
产出摘要含 blockers 段（若有）。
```

**3d. 收到 Dev-H5 产出，检查 blockers**：
- `blockers 空` → 进**闸门 ③**（见下）
- `blockers 非空` → 进 **Step 3.5 反刍**（见下）

### Step 3.5: Dev↔PM 反刍循环（最多 2 轮）

**路由规则**：
- 所有 blockers 严重度都是 `low` → 自动循环（不打扰 CEO）
- 任意一条严重度是 `high` → 停下来问 CEO

#### 3.5-low 自动循环（最多 2 轮）

第 N 轮（N = 1 或 2）：

1. 说："🔄 Step 3.5 反刍第 N 轮：Dev 发现 X 条 low blockers，自动调 PM 补..."
2. Task 调 `pm` subagent，prompt：
   ```
   模式：B (FILL GAPS)
   输入：Dev-H5 的 blockers 报告：
   <完整粘 blockers 段>
   请逐条判定"补"或"撤"，更新 PRD 并产出摘要。
   ```
3. 展示 PM 的 diff 和决策给 CEO（**不等 approve**，信息同步）
4. Task 调 `dev-h5` subagent，prompt：
   ```
   模式：C (FILL GAPS)
   PM 刚补完的 PRD diff：<贴上>
   你上一轮的 blockers 列表：<贴上>
   请按 Mode C 填坑并 push origin/dev。
   完成后再扫一次 blockers。
   ```
5. 收到 Dev-H5 产出：
   - blockers 空 → 跳出循环，进闸门 ③
   - blockers 非空且 N < 2 → 回到本节第 1 步（第 N+1 轮）
   - blockers 非空且 N == 2 → **第 2 轮仍有缺口，升级**：
     - 展示两轮 PM/Dev 的产出给 CEO
     - 问："⚠️ 第 2 轮反刍仍有 blockers，需决策：`回Step2` 重 PRD / `砍掉` 这几条 / `硬上` 带缺口合并"
     - 停等 CEO

#### 3.5-high 升级到 CEO

1. 说："⛔ Step 3.5：Dev 报了 high 严重度 blockers（整块功能缺失级别），停下问你。"
2. 展示 blockers 完整列表
3. 问："⚠️ 请决策：
   - `回Step2` → PM 重 PRD（把这块补全），然后重跑 Step 3
   - `砍掉` → PRD 里把这条标'本期不做'记 Future，Dev-H5 跳过
   - `硬上` → 带缺口合并（不推荐，除非你有理由）"
4. 停等 CEO
5. 按 CEO 回复路由：
   - `回Step2` → 跳回 Step 2（PM 重跑，输入含 blockers）
   - `砍掉` → PM subagent Mode B "全撤" → Dev-H5 Mode C → 闸门 ③
   - `硬上` → 直接进闸门 ③

### Step 3.9: 闸门 ③（宽松）

**只卡 Step 3 首次产出**（即 Step 3.5 走完后第一次进这里）。QA FAIL 循环里的 Dev-H5 产出**不卡**此闸门。

1. 展示给 CEO：
   - commit hash + message
   - `git diff --stat`（改了哪些文件）
   - 关键代码片段（前 50 行 diff）
   - Step 3.5 反刍摘要（如有）
2. 末尾加："⚠️ **闸门 ③**：回复 `approve` 进 QA；或 `让 Dev-H5 改:XXX`；或 `stop`"
3. 停等 CEO

### Step 4: QA 测试（自动）

1. 说："🧪 启动 QA 三端并行..."
2. Task 调 `qa` subagent
3. QA 跑完，展示结论给 CEO

### Step 4.5: QA FAIL 自动返修循环（Dev-H5 ↔ QA，最多 3 轮）

QA 结果 FAIL 时：
1. 说："❌ QA FAIL（第 N 轮，最多 3 轮），自动回 Dev-H5 修复..."
2. Task 调 `dev-h5` subagent，prompt：
   ```
   模式：B (FIX QA FINDINGS)
   本次 QA 报告：<把 qa subagent 的完整 FAIL 报告贴进来>
   请只修报告里指出的问题，不要改其他代码，修完 push origin/dev。
   ```
3. Dev-H5 修完 → **回到 Step 4**（重跑 QA）
4. **此循环不触发闸门 ③**（仅 Step 3 首次卡）
5. **最多循环 3 轮**。第 3 轮仍 FAIL：
   - 停止自动循环
   - 把 3 轮 QA 报告和 3 轮 Dev-H5 commit 摘要整理成一张表给 CEO
   - 说："⚠️ 3 轮修不好，需要 CEO 决策：回复 `force-merge`（带已知问题合并）/ `pause`（暂停流水线）/ `retry`（再给 Dev-H5 一次机会）"
   - 停在这里等 CEO
6. 中间任何一轮 PASS 就跳到 Step 5

### Step 5: PMO Merge + Push

**只在 QA PASS 或 CEO `force-merge` 才执行**。

#### 前 3 轮模式（手动 push 兜底）

本次 pipeline 是第 1/2/3 轮时（你可以用 `wc -l < workflow/pipeline-rounds.log 2>/dev/null || echo 0` 查）：

1. 说："✅ QA 通过，本地合并中..."
2. 执行：
   ```bash
   git checkout main
   git pull origin main
   git merge dev --no-ff -m "merge: auto-pipeline round $(date +%Y-%m-%d-%H%M)"
   ```
3. **不 push**。展示 `git log -2` 给 CEO。
4. 说："⚠️ **前 3 轮兜底**：本地 merge 完成但未 push。回复 `push` 推线上 / `hold` 撤销 merge 暂不推"
5. 停等 CEO
6. 按回复：
   - `push` → `git push origin main` → 进清理
   - `hold` → `git reset --hard origin/main`（撤销本地 merge） → 暂停

#### 稳定模式（自动 push）

3 轮之后（或 CEO 说"放开自动"）：
1. 说："✅ QA 通过，合并 + push 中..."
2. 执行：
   ```bash
   git checkout main && git pull origin main
   git merge dev --no-ff -m "merge: auto-pipeline round $(date +%Y-%m-%d-%H%M)"
   git push origin main
   ```
3. 说："🎉 已推 main。"

#### 清理 & 下一轮

Merge + push 成功后：
1. 删除文件锁：`rm .pipeline.lock`
2. 记录轮次：`echo "$(date -Iseconds) round-done" >> workflow/pipeline-rounds.log`
3. 归档反馈：`mkdir -p archive/feedback && mv 用户反馈-*.md archive/feedback/ 2>/dev/null || true`
4. 说："🎉 本轮完成，进入下一轮..."
5. **自动回到 Step 0**

## 循环控制

- CEO 在任何闸门说 `stop` / `暂停` / `明天再说` → 干脆结束：
  1. 删除 `.pipeline.lock`
  2. 留一句 "已暂停，随时 /pipeline 继续"
- 不要询问"要不要继续"——默认循环，直到 CEO 主动喊停

## 文件锁纪律

- **写锁**：Step 3 开工前
- **删锁**：
  - Step 5 合并 push 成功后
  - CEO `stop` / `pause` / `hold` 后
  - 任何异常退出前（don't orphan the lock）
- 锁内容（YAML）必须含：round / stage / started_at

## 错误处理

- Subagent 报错 → 把错误原文展示给 CEO，问 "要不要 retry？"
- 部署超时（10 分钟）→ 提示 CEO 去 GitHub 看 Actions，暂停
- Git 冲突 → 立刻停，把冲突文件列表给 CEO，**删锁**
- PM/Dev-H5 反刍第 2 轮仍失败 → 按 3.5-low 升级逻辑问 CEO

## 纪律

- **绝不自作主张跳闸门**：UX 反馈 + PRD + Dev-H5 首次产出都必须 CEO 明确 `approve`
- **绝不强制 merge**：QA FAIL 就老实停
- 闸门等待时不做任何操作，静静等 CEO 回复
- 前 3 轮 Step 5 **必须** 手动 push 确认，不要偷跑
- 锁文件是纪律，不是装饰——忘删就是 bug
