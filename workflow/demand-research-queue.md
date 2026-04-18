# Demand 研究队列

> **谁维护**：CEO 调优先级 / Explorer 建议新对象
> **谁消费**：`/research-demand-auto` 命令自动从顶部 pending 逐个跑
> **操作**：调优先级 → 拖行顺序 · 加新的 → 底部追加 · 跳过 → status 改 skip
> **产出去向**：`workflow/demand-pool.md` → pipeline Step 2 PM Mode A 必读 → 更全面的 PRD
> **社区类**：agent 会自搜 URL + 返回候选列表等 CEO 筛选（30 秒），不需要你提前找帖子

---

## 队列

| # | 域 | 对象 | status | 完成日期 | commit | 备注 |
|---|---|---|---|---|---|---|
| 1 | 社区 | 小红书-历史名城 | skip | | | 补知乎的样本偏差，小红书/B 站视角。xiaohongshu.com 被 Chrome MCP 硬编码拦截，需 CEO 手动贴原文 |
| 2 | 竞品 | Lonely-Planet-城市页 | done | 2026-04-17 | pending | 传统指南字段结构，和 AO 互补 |
| 3 | 阵地 | 马伯庸-近 10 篇 | done | 2026-04-17 | pending | 中文历史叙事腔调基线 |
| 4 | 竞品 | Google-Arts-Culture | done | 2026-04-17 | pending | 文化遗产数字化标杆 |
| 5 | 社区 | Substack-英文深度旅行写作评论区 | done | 2026-04-17 | pending | 英文圈需求，与知乎中文圈交叉对比。原 Reddit 改 Substack（Reddit 全路径封死） |
| 6 | 竞品 | Culture-Trip | done | 2026-04-18 | pending | 反面教材：编辑内容滑向 SEO 堆砌 |
| 7 | 社区 | B 站-历史 UP 主评论区 | done | 2026-04-18 | (0 新条) | 视频受众的文字需求信号源。评论区原文未拿到（lazy load + Chrome MCP 拒），降级用元数据+二手；6 重交叉验证已有方向 |
| 8 | App | 马蜂窝+携程-差评 | done | 2026-04-18 | pending | 功能层痛点，v2.8+ 消费 |

---

## 已完成

| 域 | 对象 | 完成日期 | 池条目数 | CEO 档位 |
|---|---|---|---|---|
| 竞品 | Atlas Obscura | 2026-04-17 | 6 条 | 已标 |
| 阵地 | Craig Mod Ridgeline | 2026-04-17 | 5 条 | 已标 |
| 社区 | 知乎-历史旅行者痛点 | 2026-04-17 | 4 条 | 已标 |
| 竞品 | Lonely-Planet-城市页 | 2026-04-17 | 3 条 | 已标 |
| 阵地 | 马伯庸-近 10 篇 | 2026-04-17 | 3 条 | 已标 |
| 竞品 | Google-Arts-Culture | 2026-04-17 | 1 条 | 已标 |
| 社区 | Substack-英文深度旅行写作评论区 | 2026-04-17 | 1 条 | 已标（原 Reddit 改 Substack） |
| 竞品 | Culture-Trip | 2026-04-18 | 1 条 | 已标（反面教材 4 教训） |
| 社区 | B 站-历史 UP 主 | 2026-04-18 | 0 新条 | — | 6 重交叉验证已有方向；建议 PM 把 [Craig Mod 段落长度] 提档 🟠→🟢，[马伯庸 三明治理论] 批 🟢 |
| App | 马蜂窝+携程-差评 | 2026-04-18 | 1 条 | 已标 | 反面教材 + 移动端长内容必须配视觉锚点（最强新维度） |
