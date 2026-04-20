# research: 旅游 - Lonely-Planet-排版 - 2026-04-17

## 背景

Lonely Planet 是全球最大的旅行指南出版商，2023 年对经典 "bluespine" 指南书做了重大改版（4 段式结构 + 更本地化内容），2024 年持续优化。线上平台用 Inter 字体 + Tailwind CSS + 灵活栅格系统。研究目标：拆解 LP **长文排版的节奏控制**——travel-web v2.7 放开了段落长度限制，需要"长而不累"的排版参照。

注意：本研究聚焦**排版 taste**（字体/行距/段落节奏/图文交替/留白），不涉及内容策展（那是 Cereal 研究的领域）。

---

## 1. 排版系统基础

### 字体

- **主字体**：Inter（无衬线），fallback 到 SF Pro → Segoe UI → Roboto → 系统无衬线
- **字重范围**：300–700，但正文只用 400（regular）和 600（semibold）
- **字号阶梯**：0.75rem → 3.75rem（约 12px → 60px），响应式缩放

### 行距 / 行长

- 行业最佳实践（LP 符合）：行距 1.5–1.8 × 字号
- 行长目标：桌面 45–75 字符/行，移动端 30–50 字符/行
- LP 用 `ch` 单位或 max-width 限制内容区宽度，避免宽屏下一行拉满

### Taste 提取

> Inter 是"隐身字体"——不带性格，让内容说话。对旅游内容网站是安全选择：不抢照片的注意力。但如果想要编辑感/杂志感，可能需要在标题层加一个有性格的衬线体（Cereal 用衬线标题 + 无衬线正文的经典对比）。

---

## 2. 段落节奏——"3-2-1 呼吸法"

分析 LP 文章（listicle 格式如"15 best things to do in Kyoto"）的段落结构，提炼出一个隐含节奏：

### 每个景点条目的结构

```
[H2/H3] 景点名
[1 段] 120–180 字介绍（为什么值得去 + 一个感官细节）
[图片] 全宽或 3/4 宽，aspect-ratio 控制
[1 段] 60–100 字实用信息（开放时间/票价/到达方式）
[分隔] 间距或视觉分割线
```

### 节奏规律

- **文字块不超过 3 段连续出现**——每 2-3 段必有图片打断
- **单段不超过 5-6 行**（移动端约 120-150 字）——超过这个长度眼睛开始滑
- **H2/H3 之间的距离**：约 300-400 字（包含图片空间）——heading 是"路标"，太远读者迷路，太近感觉碎片化

### Taste 提取

> 长文的敌人不是长度，是**单调**。LP 的解药是"文字-图片-文字-图片"的交替节奏，像呼吸一样有收有放。如果连续 3 段纯文字没有任何视觉打断 = 论文感。

---

## 3. 图片节奏与处理

### 图片频率

LP 文章中图片出现频率约：**每 200-300 字一张**。这个频率在移动端意味着大约每 1.5-2 屏滚动就有一张图。

### 图片处理

- **容器比例**：3:4（竖图/手机适配）、4:3（横图/桌面）、16:9（宽景/hero）
- **object-fit: cover**：图片永远填满容器，不留黑边
- **hover 效果**：桌面端卡片图 hover 时 scale(1.05)，微妙缩放暗示可交互
- **aspect-ratio 占位**：加载前用 CSS `aspect-ratio` 撑开空间，杜绝 layout shift

### Taste 提取

> 图片不是"插图"——它是**排版节奏的一部分**。没有图片的段落等于"只有吸气没有吐气"。但图片也不能太密——连续 2 张图中间没有文字 = 画册而非文章。

---

## 4. 留白策略

### LP 的留白层级

| 层级 | 元素 | 间距 | 感受 |
|---|---|---|---|
| L1 | 段内行距 | 1.5–1.8em | 行与行之间呼吸 |
| L2 | 段间距 | 1.5–2em（约 24-32px） | 段落分隔但不断裂 |
| L3 | 章节间距 | 3–4em（约 48-64px） | 明确的"翻页"感 |
| L4 | 图片上下留白 | 2–3em | 图片需要独立呼吸 |
| L5 | 页面左右 margin | 4vw（桌面）/ 6vw（移动） | 内容不贴边 = 杂志感 |

### 关键：间距的一致性比绝对值重要

LP 用 0.25rem 为基础单位的间距阶梯（0.25 → 6rem），所有间距都是这个基础的整数倍。这种**韵律感**比具体是 16px 还是 20px 更重要。

### Taste 提取

> 留白不是"空"——它是排版的标点符号。段间距是逗号，章节间距是句号，图片上下留白是破折号。如果所有间距一样大 = 排版没有标点，像一口气念完的长句。

---

## 5. 卡片设计（列表/目录页）

LP 目录页用卡片系统展示目的地/文章：

### 卡片结构

```
[图片] aspect-ratio 3:4 或 4:3
[标题] semibold，1-2 行
[摘要] regular + 灰色，2-3 行 max
[meta] 小字，作者/日期
```

### 交互

- Hover：图片 scale(1.05) + 标题变紫色（#8b5cf6）+ 卡片微升（translateY）+ 阴影加深
- 这个多层 hover 效果让卡片感觉"被拿起来了"

### 栅格

- 桌面：2-5 列栅格，根据内容类型变化
- 平板：2 列
- 手机：1 列全宽

### Taste 提取

> 卡片 hover 的精髓不是单属性变化（只变色 or 只加阴影），而是**多属性协同**（缩放+颜色+位移+阴影）= 物理感。和 Apple Music 的复合动画原则一致。

---

## 6. 移动端排版特殊考量

LP 是 mobile-first 设计：

- **栅格**：移动端从 24 列 → 8 列，gutter 从 4vw → 6vw
- **图片**：移动端全宽 bleed（图片突破内容区 padding，延伸到屏幕边缘）——这是杂志排版的经典手法，让图片在小屏上有"冲击力"
- **导航**：移动端隐藏复杂导航，只保留核心路径
- **hover → touch**：桌面 hover 效果在移动端替换为 active state

### Taste 提取

> 移动端图片全宽 bleed 是"小屏杂志感"的关键一招——内容区有 padding 保护文字，但图片突破 padding 延伸到边缘，创造了**文字的呼吸 vs 图片的冲击**之间的反差。

---

## 7. Bluespine 2023 改版启示

LP 纸质指南书的改版方向：

- **4 段式结构**：从传统百科全书式改为 4 大板块（具体名称未公开），简化导航
- **更本地化**：从"全覆盖"转向"当地人推荐"
- **视觉升级**：更大胆的色彩、更现代的排版、更多图片空间

### 对 travel-web 的启示

> 纸质指南的改版方向和 Cereal 研究的结论不谋而合——从"百科全覆盖"转向"策展式精选"。LP 作为行业最大体量的玩家做这个转向，说明这不是小众品味，是行业趋势。

---

## 8. 对 travel-web v2.7 排版的具体参照

| LP 模式 | travel-web 对标场景 | 应该看到什么 |
|---|---|---|
| 每 200-300 字一张图 | 城市详情页长文 | 段落间有图片节奏，不是纯文字墙 |
| 单段 ≤5-6 行 | 景点介绍段落 | 移动端每段控制在 120-150 字内 |
| 图片全宽 bleed（移动端） | 详情页图片 | 图片突破内容 padding 到屏幕边缘 |
| 间距阶梯（0.25rem 基础） | 全站 spacing | 所有间距是同一基础单位的整数倍 |
| 章节间距 3-4em | 城市页板块分隔 | 板块之间有明确的"翻页"留白 |
| 卡片多属性 hover | 城市/景点卡片 | hover = 缩放+颜色+位移+阴影协同 |

---

## 9. 局限与警示

- **Inter 字体的中文渲染**：Inter 是西文字体，中文会 fallback 到系统字体（苹方/思源黑体）。如果中英混排，需要确保 fallback 字体的 x-height / weight 与 Inter 视觉匹配，否则中英文会"两张皮"
- **listicle 格式的天花板**：LP 大量使用"N best things to do in X"格式，这种格式排版清晰但**没有叙事弧度**——每个条目是平行的，没有推进感。travel-web 如果想做更深度的城市叙事，需要在 listicle 基础上加入连接段落（narrative bridges）
- **图片质量依赖**：LP 的排版节奏高度依赖高质量图片。如果图片质量不够，高频图文交替反而暴露图片的廉价感——quality gate 很重要

---

## 参考来源

- [Lonely Planet Japan destination page](https://www.lonelyplanet.com/japan)
- [Lapa Ninja - Lonely Planet website design](https://www.lapa.ninja/post/lonely-planet/)
- [Dustin Johnson - Lonely Planet digital design](https://www.dustinjdesign.com/work/lonelyplanet)
- [LP Trade - Guidebooks Glow Up](https://trade.lonelyplanet.com/pages/lonely-planets-guidebooks-get-a-glow-up)
- [CSS-Tricks - Designing for Long-Form Articles](https://css-tricks.com/designing-for-long-form-articles/)
- [Smashing Magazine - Long-Form Reading Experiences](https://www.smashingmagazine.com/2012/03/designing-engaging-enjoyable-long-form-reading-experiences/)
- [UXPin - Optimal Line Length](https://www.uxpin.com/studio/blog/optimal-line-length-for-readability/)
