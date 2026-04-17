---
description: 自动消费 Demand 研究队列 — 从 workflow/demand-research-queue.md 顶部 pending 逐个跑，做完自动下一个，直到队列清空或 CEO 说 stop。
---

# Demand Research Auto-Queue

请读取 `.claude/agents/demand-researcher.md` 加载需求侦察兵身份，然后进入**队列自动消费模式**。

## 核心循环

你的工作就是一个 loop，**不断从队列取任务、做研究、更新状态**，直到队列空或 CEO 叫停。

```
while true:
  1. 读 workflow/demand-research-queue.md
  2. 在"队列"表格里找第一行 status=pending
  3. 没有 pending → 告诉 CEO "🏁 Demand 研究队列已清空"，结束

  ── ⚠️ 闸门 A · 开工前 ──
  4. 展示给 CEO：
     "🔔 下一个研究：<域> - <对象>
      备注：<从队列表格读备注列>
      队列剩余：M 条
      回复 go / skip / stop"
  5. 等 CEO 回复：
     - go → 继续 step 6
     - skip → 把该行 status 改为 skip，回到 step 1
     - stop → 结束

  ── 研究执行（全自动，除社区类 URL 筛选外不打扰 CEO）──
  6. 用 Edit 工具把该行 status 改为 in_progress
  7. 执行完整的 /research-demand 流程（见下）
  8. 做完 → 用 Edit 工具把该行 status 改为 done，填完成日期 + commit hash
  9. 把该条目信息追加到队列文件"已完成"段

  ── ⚠️ 闸门 B · 交付后 ──
  10. 展示摘要给 CEO（格式见下），含新增条目列表 + 战略档位提问
  11. 等 CEO 回复：
      - 继续 + 档位（例："继续。1=🟢 2=🟡 3=🔵"）→ 更新 demand-pool 档位，重新 commit+push，回到 step 1
      - 继续（不给档位）→ 标 [待 CEO 定档] 继续下一个
      - 改一下：<具体内容> → 按 CEO 要求修改条目，重新 commit+push，再问一次
      - stop → 结束
```

## 每个研究任务的完整流程（复用 /research-demand 的所有步骤）

### 开工前必读
1. `git pull origin dev`
2. `ls research/demand-*.md 2>/dev/null` — 看同域历史研究
3. `cat workflow/demand-pool.md 2>/dev/null` — 看现有需求池
4. `cat ~/.claude/projects/-Users-wenjiehu-Documents-AI-claude-code-VS/memory/audience_personas.md` — 5 persona 滤网

### 资料采集（按域分流）

#### 社区类（中文站：侦察兵自搜 + CEO 筛选 + Chrome in MCP）

1. **侦察兵自搜**：用 `WebSearch` 搜 3-5 组关键词，每组取前 3-5 个候选
2. **返回候选列表给 CEO**：5-8 条，每条带 URL + 一句话摘要
3. **CEO 30 秒筛选**：CEO 回复"抓 1/3/5/7"，或"全抓"，或"换一批"
   - CEO 30 秒没回 → 自动选收藏/赞/回答最多的前 5 个，告知 CEO "自动选了 5 条，开始抓取"
4. **Chrome in MCP 抓取**：
   ```
   a. mcp__Claude_in_Chrome__tabs_context_mcp
   b. mcp__Claude_in_Chrome__tabs_create_mcp 建独立 tab
   c. 逐个 URL：navigate → get_page_text → 验证码停问 CEO
   d. 全部读完 → tabs_close_mcp 关 tab
   ```
5. 一天不超 8 帖
6. 长文标注"URL 由侦察兵搜索初筛，CEO 二次确认"

#### 社区类（英文站：优先 WebFetch）
- Reddit / Substack / 播客 → `WebFetch` 直接拿
- 失败 → 降级 Chrome in MCP

#### 竞品类
- `WebFetch` 官网 + 关键页面
- App（马蜂窝/携程）→ Chrome in MCP

#### 阵地类（马伯庸 / Craig Mod）
- 用 `WebSearch` 搜最新 10 篇，返回候选列表给 CEO 筛
- CEO 没回 → 自动取最近 5 篇

#### App 评论类
- `WebSearch` 搜 App Store / Google Play 差评
- `WebFetch` 抓评论页

### 深度拆解
产出 `research/demand-<域>-<对象>-YYYY-MM-DD.md`（模板见 agent 定义）

### 提炼条目
从长文提 3-8 条追加到 `workflow/demand-pool.md` 对应段

### 淘汰
段内 >20 条 → 移旧条目到"已转化"或"历史淘汰"

### Git
```bash
git add research/ workflow/demand-pool.md workflow/demand-research-queue.md
git commit -m "demand-research-auto: <域>-<对象>

- 新增 N 条需求条目
- 队列 status: done"
git push origin dev
```

## 闸门 B 的摘要格式（含战略档位提问）

```
✅ [N/总] <域> - <对象>
研究文件：research/demand-<文件名>.md
样本：N 条帖 / N 个页面
新增池条目（N 条）：
  1. <条目 1>
  2. <条目 2>
  ...
⚠️ 样本局限：<一句话>
demand-pool 现状：🌍 X 条 · 📊 X 条 · 💡 X 条
队列剩余：M 条 pending
Git：commit <hash> 已 push origin dev

请给档位（例：1=🟢 2=🟡 3=🔵），或回复 继续 / 改一下 / stop
```

## 研究执行中的额外 CEO 介入点

除了闸门 A / B 之外，**只有**这些情况才在研究过程中打断 CEO：

- **社区类 URL 筛选**：返回候选列表，等 CEO 选（30 秒超时自动选前 5 条）
- **Chrome in MCP 验证码**：告诉 CEO "请点一下浏览器里的验证码"
- **WebFetch 连续失败**：告诉 CEO "XX 对象抓取失败，要跳过还是换 URL？"
- **demand-pool 某段满 20 条**：问 CEO "淘汰哪几条？或按最旧优先自动淘汰？"
  - CEO 30 秒没回 → 自动淘汰最旧的

研究过程中 CEO 任何时候说 `stop` → 做完当前任务后停，不丢弃进行中的工作。

除此之外，**不要停下来问 CEO 任何事**，自动跑。

## 纪律（硬线）

- 只写 `research/demand-*.md`、`workflow/demand-pool.md`、`workflow/demand-research-queue.md`
- 禁止改 PRD / 代码 / 用户反馈 / ux-lenses / CLAUDE.md / .claude/agents/* / backlog
- 自己 commit + push dev，不等 pipeline
- 条目必须带证据；孤证放"单点线索"不进"共性需求"
- Chrome in MCP 开的 tab 必须用完关掉
- 不访问 travel-web 线上或本地
