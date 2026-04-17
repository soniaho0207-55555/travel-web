---
description: 自动消费 UX 研究队列 — 从 workflow/ux-research-queue.md 顶部 pending 逐个跑，做完自动下一个，直到队列清空或 CEO 说 stop。
---

# UX Research Auto-Queue

请读取 `.claude/agents/ux-tester.md` 加载 UX 身份，然后进入**队列自动消费模式**。

## 核心循环

你的工作就是一个 loop，**不断从队列取任务、做研究、更新状态**，直到队列空或 CEO 叫停。

```
while true:
  1. 读 workflow/ux-research-queue.md
  2. 在"队列"表格里找第一行 status=pending
  3. 没有 pending → 告诉 CEO "🏁 UX 研究队列已清空"，结束

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

  ── 研究执行（全自动，不打扰 CEO）──
  6. 用 Edit 工具把该行 status 改为 in_progress
  7. 执行完整的 /research-ux 流程（见下）
  8. 做完 → 用 Edit 工具把该行 status 改为 done，填完成日期 + commit hash
  9. 把该条目信息追加到队列文件"已完成"段

  ── ⚠️ 闸门 B · 交付后 ──
  10. 展示摘要给 CEO（格式见下），末尾加：
      "回复 继续 / 改一下 / stop"
  11. 等 CEO 回复：
      - 继续 → 回到 step 1
      - 改一下：<具体内容> → 按 CEO 要求修改镜头/长文，重新 commit+push，再问一次
      - stop → 结束
```

## 每个研究任务的完整流程（复用 /research-ux 的所有步骤）

### 开工前必读
1. `git pull origin dev`
2. `ls research/ 2>/dev/null` — 看同域历史研究，避免重复结论
3. 同主题历史存在时：读完，基于旧研究增量
4. `cat workflow/ux-lenses.md` — 看现有镜头库，想清楚还缺什么维度

### 研究步骤
1. **资料采集**：`WebFetch` 对象官网 / 博客 / 设计师访谈
2. **深度拆解**：写 `research/<域>-<对象>-YYYY-MM-DD.md`
3. **提炼镜头**（强约束）：从拆解里提 3-5 条追加到 `workflow/ux-lenses.md`
   - 每条 ≤1 句话，必须可观察、带判断条件
   - 追加到对应段（美学/流畅度 → 🔵 / 旅游 → 🟢 / 反向案例 → 🟡）
4. **淘汰**（如段内 ≥15 条）：淘汰最旧的，记到"历史淘汰记录"
5. **Git 原子化提交**：
   ```bash
   git add research/ workflow/ux-lenses.md workflow/ux-research-queue.md
   git commit -m "research-ux-auto: <域>-<对象>

   - 新增 N 条镜头
   - 队列 status: done"
   git push origin dev
   ```

## 闸门 B 的摘要格式

```
✅ [N/总] <域> - <对象>
研究文件：research/<文件名>.md
新增镜头（N 条）：
  - <镜头 1>
  - ...
镜头库现状：🔵 X/15 · 🟢 X/15 · 🟡 X/15
队列剩余：M 条 pending
Git：commit <hash> 已 push origin dev

回复 继续 / 改一下 / stop
```

## 研究执行中的额外 CEO 介入点

除了闸门 A / B 之外，**只有**这些情况才在研究过程中打断 CEO：

- **WebFetch 连续失败**：告诉 CEO "XX 对象抓取失败，要跳过（skip）还是换个 URL？"
- **镜头段满 15 条需淘汰**：列出段内 15 条，问 CEO "淘汰哪几条？或我按最旧优先自动淘汰？"
  - CEO 30 秒没回 → 按最旧优先自动淘汰，继续

研究过程中 CEO 任何时候说 `stop` → 做完当前任务后停，不丢弃进行中的工作。

## 纪律（硬线）

- 你是 UX 的**研究模式**，不是分析师。镜头要带 taste
- **只写** `research/`、`workflow/ux-lenses.md`、`workflow/ux-research-queue.md`
- **禁止改**：PRD、backlog、代码、用户反馈 md、CLAUDE.md、.claude/agents/*、demand-pool
- 自己 commit + push dev，不等 pipeline
- 不要在镜头里写"建议 Dev 改 XX"
- 不要访问 travel-web 线上或本地（那是 live-site 模式的事）
- **不抢 demand-researcher 的活**：旅行+历史垂类只看 **taste 层**（排版/节奏/字体/留白/惊喜）
