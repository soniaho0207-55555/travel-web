---
description: 启动一次需求研究任务。Args = [域] [对象]，例如 "社区 小红书-古城旅行" / "竞品 Atlas-Obscura" / "GA 跳出率异常" / "脑暴 CEO-2026-04-15" / "阵地 马伯庸-近10篇"。
---

# Demand Research Mode

请读取 `.claude/agents/demand-researcher.md` 加载需求侦察兵身份，然后切换到**研究模式**。

## 任务参数

$ARGUMENTS 形如 `<域> <对象>`：

- **社区**：`社区 小红书-历史名城` / `社区 知乎-小众目的地` / `社区 Reddit-r/travel` / `社区 豆瓣-人文旅行小组`
- **竞品**：`竞品 Atlas-Obscura` / `竞品 Lonely-Planet-城市页` / `竞品 马蜂窝-深度游` / `竞品 Google-Arts-Culture`
- **阵地**（CEO 钦定的长期锚点）：`阵地 马伯庸-近10篇` / `阵地 Craig-Mod-Ridgeline-2026`
- **GA**：`GA 跳出率异常` / `GA 城市页停留时长` / `GA 搜索词`
- **脑暴**：`脑暴 CEO-YYYY-MM-DD` / `脑暴 朋友-<人名/场景>`
- **App 评论**：`App 马蜂窝-差评` / `App 携程-攻略差评`

参数为空 → 先问 CEO "今天研究哪个域 + 哪个对象"，再开工。

## 开工前必读

按顺序做：

1. `git pull origin dev` — 拉最新，避免本地过时
2. `ls research/demand-*.md 2>/dev/null` — 看同域历史研究，避免重复
3. `cat workflow/demand-pool.md 2>/dev/null` — 看现有需求池，想清楚还缺什么
4. `cat ~/.claude/projects/-Users-wenjiehu-Documents-AI-claude-code-VS/memory/audience_personas.md` — 5 个 JTBD persona 作为扫描滤网
5. 如果是"社区"或"阵地"类且是中文站 → 准备用 Chrome in MCP（见下）

## 研究流程

### 第 1 步：资料采集（按域分流）

#### 社区类（中文站：侦察兵自搜 + CEO 筛选 + Chrome in MCP 抓取）

**默认流程（CEO 没空翻社区时）**：

1. **侦察兵自搜**：用 `WebSearch` 搜 3-5 组关键词（基于研究主题自拟），每组取前 3-5 个候选
   - 小红书关键词示例：`小红书 XX深度游` / `小红书 读完XX再去旅行` / `小红书 历史古迹吐槽`
   - 知乎关键词示例：`知乎 XX深度游怎么做` / `知乎 读完某本书再去某地` / `知乎 历史旅行看不懂`
   - B 站关键词示例：`B站 历史UP主 旅行` / `B站 小约翰可汗 旅行` / `B站 房琪 古迹`
2. **返回候选列表给 CEO**：5-8 条，每条带 URL + 一句话摘要（读标题猜痛点就行）
3. **CEO 30 秒筛选**：CEO 回复"抓 1/3/5/7"（编号），或"全抓"，或"换一批"
4. **Chrome in MCP 抓取**（CEO 确认后才做）：
   ```
   a. 调 mcp__Claude_in_Chrome__tabs_context_mcp 看当前 tab group
   b. 调 mcp__Claude_in_Chrome__tabs_create_mcp 建独立 tab（不打扰 CEO 正在看的）
   c. 对 CEO 勾选的每个 URL：
      - mcp__Claude_in_Chrome__navigate 打开
      - mcp__Claude_in_Chrome__get_page_text 读全文（含评论区）
      - 如果触发验证码 → 停下告诉 CEO "请点一下验证码"
   d. 全部读完 → mcp__Claude_in_Chrome__tabs_close_mcp 关 tab（一个都别留）
   ```
5. 一天不要抓 >8 帖（避免小红书/知乎风控）
6. 长文里诚实标注"URL 由侦察兵搜索初筛，CEO 二次确认"

**CEO 主动给 URL 时**：跳过第 1-3 步，直接从第 4 步开始抓取。两种模式等价。

#### 社区类（英文站：优先 WebFetch）

- Reddit / Substack / 播客 shownotes → `WebFetch` 直接拿
- 抓不到 → 降级用 Chrome in MCP（CEO 登录 Reddit 后）

#### 竞品类

- `WebFetch` 官网 + 关键页面
- App 类（马蜂窝/携程）→ 用 Chrome in MCP 打开网页版

#### GA / 数据类

- CEO 贴截图 → 你解读，不要自己造数据

#### 脑暴 / 阵地类

- 脑暴：CEO 贴原话，你结构化
- 阵地（马伯庸 / Craig Mod）：先问 CEO 今天关注哪几篇，他给 URL 你用 Chrome in MCP 读

### 第 2 步：深度拆解（写长文）

产出：`research/demand-<域>-<对象>-YYYY-MM-DD.md`

**至少 1 个信号要有 ≥2 个独立来源**，否则整份研究归类为"单点线索"（不进池子"共性需求"段）。

模板见 `.claude/agents/demand-researcher.md` §产出模板。

### 第 3 步：提炼条目（必做）

从长文里提 **3-8 条** 追加到 `workflow/demand-pool.md`：

- 社区/竞品/阵地信号 → `## 🌍 外部需求信号`
- 数据信号 → `## 📊 数据线索`
- CEO/朋友脑暴 → `## 💡 内部脑暴`
- 已进 PRD 的旧条目（PM 通知你后） → 移到 `## ✅ 已转化`

### 第 4 步：淘汰

段内 >20 条 或 某条已进 PRD → 移到 `✅ 已转化` 或淘汰，末尾 `## 历史淘汰` 追加一行：
```
- YYYY-MM-DD 淘汰「XXX」 理由：被新条目「YYY」覆盖 / 已进 PRD vX.Y
```

### 第 5 步：Git 原子化提交

```bash
git add research/ workflow/demand-pool.md
git commit -m "demand-research: <域>-<对象>

- 新增 N 条需求条目
- （如有淘汰）归档/淘汰 M 条"
git push origin dev
```

## 产出摘要给 CEO（≤150 字）

```
需求研究：<域> - <对象>
研究文件：research/demand-<文件名>.md
新增池条目（N 条）：
  - <条目 1>
  - ...
PM 下一轮 Mode A 会读到 demand-pool.md。
Git：commit <hash> 已 push origin dev。
```

## 纪律（硬线）

- 只写 `research/demand-*.md` 和 `workflow/demand-pool.md`
- 禁止改 PRD / 代码 / 用户反馈 / ux-lenses / CLAUDE.md / .claude/agents/* / backlog.md
- 自己 commit + push，不等 pipeline
- 条目必须带证据（引文或 url）；孤证放"单点线索"不进池"共性需求"
- 中文社区优先用 Chrome in MCP，抓不到让 CEO 贴原文，不硬编
- Chrome in MCP 开的 tab 必须用完关掉
- 不要用 `preview_*` 访问 travel-web 线上或本地（那是 UX live-site 模式的事）
