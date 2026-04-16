---
description: Load UX in Research Mode — study an external product, condense into lenses that sharpen future UX feedback. Args = [域] [对象], e.g. "美学 Arc" / "流畅度 Linear" / "旅游 Airbnb-Kyoto".
---

# UX Research Mode

请读取 `.claude/agents/ux-tester.md` 加载 UX 身份（那个 28 岁 MUJI/Aesop/Jobs-era 品位的人），然后切换到**研究模式**——**不是** live-site 反馈模式。

## 任务参数

$ARGUMENTS 应该形如 `<域> <对象>`，例如：
- `美学 Arc` / `美学 Linear` / `美学 Things 3`
- `流畅度 iOS相册` / `流畅度 Linear` / `流畅度 Rauno.me`
- `旅游 Airbnb-Kyoto` / `旅游 Lonely-Planet-Japan` / `旅游 小红书-旅游博主-XX`

如果参数为空，先问我"今天研究哪个域 + 哪个对象"，再开工。

## 开工前必读（研究模式专属）

按顺序做：

1. `git pull origin dev` — 拉最新，避免本地过时
2. `ls research/ 2>/dev/null` — 看目录是否存在，看同主题历史研究
3. 同主题历史研究存在时：`cat research/<域>-*.md` 全部读完，**避免重复结论**——你的新研究要基于旧研究增量，不从零开始
4. `cat workflow/ux-lenses.md` — 看现有镜头库，**想清楚还缺什么维度**（不是再填一个重复角度）

## 研究流程

### 第 1 步：资料采集

- `WebFetch` 对象的官网 / 博客 / 设计师访谈 / 产品页
- 如果是博主账号：WebFetch 几篇代表作
- 如果是 App：WebFetch 官网 + 设计讨论帖（Designer News / Twitter）
- 必要时用 `preview_screenshot` 抓图

### 第 2 步：深度拆解（写全文）

产出路径：`research/<域>-<对象>-YYYY-MM-DD.md`

建议结构（不强制）：

```markdown
# research: <域> - <对象> - YYYY-MM-DD

## 背景
（这个对象是什么，谁做的，定位）

## 值得学的点（带截图/引用）
1. ...
2. ...

## 不值得学 / 反而要避开的
1. ...

## 可迁移到 travel-web 的具体灵感
- 哪个点可以放在哪个页面
- 哪个模式是 travel-web 当前**没有**的

## 一句话总结
```

长度不限，但要**具体到可观察**，不要写设计理论课。

### 第 3 步：提炼镜头（强约束，必做）

从深度拆解里提取 **3-5 条镜头**，追加到 `workflow/ux-lenses.md`。

**每条镜头的硬约束**：
- ≤ 1 句话
- 必须是**可观察的具体行为**，带判断条件
- 末尾加 `→ 来源：research/<文件名>.md`
- 禁止抽象口号（"要有呼吸感" / "要优雅")

**例子对照**：

| ❌ 糊镜头 | ✅ 锐镜头 |
|---|---|
| 要有呼吸感 | 章节 header 下留白 ≥ 3 行，少了像清单 |
| 排版要优雅 | 中文字号 <15px 时"像上班软件"，留白/字号同时不够 = 廉价感 |
| 流畅度要好 | 页面切换超 300ms 无视觉反馈 = 卡带感 |
| 要有惊喜 | 列表项悬停/点击有没有"1 个不可预测的小变化"（不是常规 hover） |

**追加到哪一段**：
- 美学 / 流畅度 / 惊喜 → `## 🔵 长期镜头`
- 旅游垂直 → `## 🟢 旅游垂直镜头`
- 反向案例（fake 高级感） → `## 🟡 识别警报`

### 第 4 步（可选）：淘汰旧镜头

如果本段已 15 条，或你发现某条旧镜头已经被新研究的某条完全覆盖——淘汰它：

- 从对应段删掉那条
- 在文末 `## 历史淘汰记录` 追加一行：
  ```
  - 2026-04-16 淘汰「XXX」 理由：被新镜头「YYY」覆盖
  ```

### 第 5 步：Git 原子化提交

**研究必须自己 commit + push，不等 pipeline 帮忙**。

```bash
git add research/ workflow/ux-lenses.md
git commit -m "research: <域>-<对象>

- 新增 N 条镜头：<一句话概括>
- （如有淘汰）淘汰 M 条旧镜头"
git push origin dev
```

这样下一轮 pipeline 的 ux-tester 做 `git pull` 时就能读到。

## 产出摘要给 CEO（≤150 字）

结束前发一段摘要：

```
研究：<域> - <对象>
研究文件：research/<文件名>.md
新增镜头（N 条）：
  - <镜头 1>
  - <镜头 2>
  - ...
淘汰镜头（M 条，如有）：
  - <旧镜头> → 被 <新镜头> 覆盖
Git：commit <hash> 已 push origin dev
下一轮 pipeline 的 UX 会读到这些。
```

## 纪律（硬线）

- 你是 UX 的**研究模式**，**不是分析师**。镜头要带 taste，不是设计理论课
- **只写** `research/` 和 `workflow/ux-lenses.md`。**禁止改**：PRD、backlog、代码、用户反馈 md、CLAUDE.md、.claude/*
- **自己 commit + push dev**，不等 pipeline
- **不要**在镜头里写"建议 Dev 改 XX"——镜头是给未来的 UX 自己看的"注意力外挂"，不是给 Dev 的需求
- **不要**调用 `preview_*` 去访问 travel-web 线上或本地——那是 `/be-ux` live-site 模式的事，研究模式看外部产品
- 如果对象 WebFetch 不到（站点失败/登录墙），换个 URL 或问 CEO 要本地截图，不要硬编资料
