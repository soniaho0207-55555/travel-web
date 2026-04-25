# 文献阅读队列 · taste research mode 长期能力建设

> 建库需要 lens 输入 · lens 需要深度文献输入 · 这份清单是 taste research mode 的**长期阅读队列**。
> 服务于产品双张力定位：**高级感（历史爱好者）+ 易读性（旅行体验）**。
> 启动：2026-04-26 · CEO 授权

---

## 立场

之前 research 大多是 WebFetch 网页快采 + 现有研究印记 —— 输入浅。要让 lens 库丰富到能撑起"杂志 + 手册"杂交体（Cereal Travel × LP Pocket × Monocle × Wallpaper），必须升级到**深度文献阅读**。

按 双张力（@taste 高级感 / @usability 易读性 / @both 双兼顾）分线 · 每读完 1 章/篇 → 写 `research/书-<标题>-<日期>.md` 长读笔记 + 提炼 1-2 条 lens 入库。

---

## 节奏

- 1 个 `/research-ux` session **读 1-2 章**或 **1 篇论文**（不强求一次读完整本）
- 2-4 周读完 1 本厚书
- 优先级 **P0 / P1 / P2** 标注 · CEO 可调整
- 状态：**待读** / **读中** / **已读**（加 commit hash + 衍生 lens）

---

## 高级感线（@taste）

| P | 状态 | 标题 | 作者 / 出版 | 预计 lens 产出 |
|---|---|---|---|---|
| **P0** | 待读 | Detail in Typography | Jost Hochuli · Hyphen Press 2008 | 字距韵律 / 字符级 hinting / 半像素之外的精度 |
| **P0** | 待读 | Cereal 主编 Rosa Park 访谈合集 | (Apartamento / It's Nice That / Eye on Design 历年) | 编辑克制 · "为什么不用感叹号" · 标点纪律 |
| P1 | 待读 | The Form of the Book | Jan Tschichold · Hartley & Marks 1991 | 双页对开 / 留白阶梯 / 装订与节奏 |
| P1 | 待读 | Ridgeline newsletter 长文合集 | Craig Mod · 50+ 篇 · craigmod.com | 散步式叙事 / 具名人物钩 / 反主流叙事 |
| P2 | 待读 | 历史中的大与小 | 马伯庸 · 2025 | 中文"大藏在小里"叙事范式（demand-research 已部分覆盖） |
| P2 | 待读 | The Art of Travel | Alain de Botton · 2002 | 旅行写作的哲学密度 / 期待 vs 现场的张力 |

---

## 易读性线（@usability）

| P | 状态 | 标题 | 作者 / 出版 | 预计 lens 产出 |
|---|---|---|---|---|
| **P0** | 待读 | On Travel Writing | Don George · Lonely Planet 2017 | LP 官方旅行写作教科书 / 实用条目编辑公式 |
| **P0** | 待读 | Mobile Reading Patterns 论文集 | Nielsen Norman Group | F-pattern / Z-pattern / 移动端弃读阈值实证 |
| P1 | 待读 | Lonely Planet Pocket 系列内部编辑手册 | LP（如能找到 Trade 版） | 7 寸开本 200+ 条目的克制纪律 |
| P1 | 待读 | Apple HIG · iOS Reading & Typography 章节 | Apple Developer | 触控目标 / 字号下限 / 颜色对比度硬规 |
| P1 | 待读 | Material 3 Design · Typography & Color | Google | 移动端可读基线 |
| P2 | 待读 | 微信小程序设计指南 · 移动端 CJK 规范 | 微信公众平台 | 国内场景特殊约束 / WebView 兼容 |

---

## 双张力线（@both · 重点 · 服务双兼顾命题）

| P | 状态 | 标题 | 作者 / 出版 | 预计 lens 产出 |
|---|---|---|---|---|
| **P0** | 待读 | Wallpaper City Guide 系列编辑访谈 | Phaidon · 历年访谈 | 黑底纯设计感 + 城市索引 三合一典范 / 杂志手册杂交体 |
| **P0** | 待读 | Monocle 主编 Tyler Brûlé 访谈合集 | Monocle / FT / 历年 | "informed but informal" 实操 / 克制信息密度 + 编辑温度 |
| P1 | 待读 | Kinfolk Travel 历年合订 | Kinfolk · 2018-2025 | 杂志高级感 + 旅行实用度 |
| P1 | 待读 | The Gentlewoman / Fantastic Man 旅行专题 | Penguin Books | 编辑深度 + 短条目易读 |

---

## 读后产出格式（提示自己）

每读完一章 / 一篇 / 一组访谈，新建：
```
research/书-<作者>-<标题缩写>-<章节>-<日期>.md
```

文件结构：
```markdown
# reading: <作者> 《<标题>》<章节> · <日期>

## 一句话总结
（这一章/篇核心说什么）

## 关键引文（verbatim）
（≥3 条原文 + 页码 / 章节）

## 提炼的 lens 候选
（1-2 条 · 格式对齐 ux-lenses.md · 末尾 [@taste/@usability/@both]）

## 与现有 lens 的关系
（覆盖 / 深化 / 替换 / 互补）

## 与 travel-web 双张力的关联
（这一章对"高级感 + 易读性"哪一边贡献？怎么贡献？）
```

---

## 历史读书记录

读完一本（或一章/一篇产出 lens 的）追加一行 · 方便追溯：

```
- YYYY-MM-DD · <作者>《<标题》》<章节> · 衍生 lens：<lens 名> · commit <hash>
```

（空 · 等第一本读起）

---

## CEO 可调整

- 增加 / 删除 / 调整优先级 · 任意
- 增加非英文文献（日文 / 法文翻译版）· 任意
- 加入 podcast / 视频访谈 · 任意（标注媒介）

我（taste research mode）按 P0 → P1 → P2 顺序消费 · 每个 session 1-2 章。
