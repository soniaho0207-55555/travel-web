# research: 旅游 - Airbnb-Kyoto - 2026-04-17

## 背景

Airbnb 是全球最大的住宿 / 体验平台，2022 年以 Categories 改版重新定义了旅游发现模式——从"先输入目的地"变成"先选一种旅行心情"。京都是 Airbnb 上 Experiences（体验）最活跃的城市之一，也是传统 machiya 住宿的标杆市场。

上一次旅游垂直研究是 Cereal Magazine（印刷编辑克制 / 第一人称 / 选图）。Cereal 回答的是**"内容该长什么样"**——但 travel-web 还有一个更前端的问题：**"用户怎么找到内容"**。这就是 Airbnb 能补的维度。

定位关键词：`categories as discovery`、`flexible search`、`photo as trust infrastructure`、`sparse color`。和 Cereal 的 `editorial restraint`、`first-person writing` 形成互补。

资料来源：
- Blake Crosley - Airbnb: Trust at Scale Through Design: <https://blakecrosley.com/guides/design/airbnb>
- Google Design - Airbnb invites you in: <https://design.google/library/airbnb-invites-you-in>
- Medium (Mahinoor) - Airbnb Categories 重设计: <https://medium.com/design-bootcamp/project-airbnb-475b2a1e42d2>
- Medium (Yash Agarwal) - 6 Airbnb UX 案例: <https://medium.com/@yashxagarwal/6-ux-examples-airbnb-got-just-right-83b0f4cb8eb8>
- Medium (Barely Thinking) - Airbnb Search Deep Dive: <https://medium.com/@Barely-thinking/airbnbs-search-and-browse-functionality-a-deep-dive-40310a6fcd74>
- Matador Network - Kyoto Airbnbs: <https://matadornetwork.com/read/airbnb-kyoto/>
- Rental Scale-Up - How Categories Work: <https://www.rentalscaleup.com/how-do-airbnb-categories-work/>

---

## 值得学的点

### 1. 分类作为发现——从"先选城市"到"先选心情"

2022 年 Chesky 的核心洞察：「You have to actually think of a place to go」——传统搜索要求用户先知道去哪，但大多数旅行者其实不知道。

**Categories 的做法**：
- 56 个分类（Amazing views / Design / Treehouses / Historical homes / Countryside...）
- 用户可以先选"我想住什么样的地方"→ 再（可选）添加地点
- 分类列表是**动态**的——输入目的地后，分类和排序会变化
- ML 算法 + 人工 curation 双重筛选——算法选候选，人工 review 照片

**对 travel-web 的启发**：
travel-web 首页大概率是"选一个城市名"开始——这要求用户已有目的地。但历史旅行者（和非专家旅行者）经常的真实状态是"我想看点古老的东西"/ "我想去有好光的地方"/ "我想安静"。

如果首页有一排主题入口（神殿 / 美食 / 自然 / 古城墙 / 博物馆）——不需要先选城市——用户可以从心情出发，发现原本不会搜索的城市。这是 Airbnb Categories 的核心贡献：**把"搜索"变成"发现"**。

### 2. 照片排序是隐形叙事

Matador Network 拆解京都 Airbnb 时观察到：照片不是随机排列，是有叙事顺序的。

**Airbnb listing 的图片排序逻辑**：
- Hero image（50% 画面面积）= 最具代表性的一张
- Grid 4 张 = 外观 → 室内全景 → 细节 → 景色
- Wide-angle 优先——减少"比想象中小"的心理落差

Google Design 也确认：「photographs animating and enlarging on tap to anchor each listing」——照片不是"配图"，是"锚点"。

**对 travel-web 的启发**：
城市详情页如果有 5 张图，它们的顺序是**随机排的**还是**有叙事顺序**（全城鸟瞰 → 标志建筑 → 街巷细节 → 人的瞬间 → 某个安静角落）？

无序 = Pinterest 碎片堆叠；有序 = 一个镜头从远到近的推移，用户在"走进"这座城市。

### 3. 色彩稀缺策略（Sparse Color）

6 Airbnb UX 案例文章直接说：「By using bright or contrasting colors sparingly, they can draw attention to key moments」。

**Airbnb 的色彩纪律**：
- 主 UI = 中性灰 + 白 + 黑字
- 亮色 **只** 出现在 1 处：Guest Favourite 标签（绿色圆角徽章）
- 不同分类 icon 是黑色线条（不是彩色 icon）
- 价格 = 黑色常规字重（不是红色加粗）

**反例**（中国 OTA 已在 🟡 警报覆盖）：携程 / 马蜂窝的卡片上红 + 橙 + 绿 + 金同时出现。

**对 travel-web 的启发**：
审视整个首页和详情页——亮色（非黑灰白）出现几处？如果 ≥3 处不同颜色的高亮元素在争夺注意力 = 视觉噪音。Airbnb 示范：**仅 1 处亮色 = 焦点；≥3 处 = 分散**。

### 4. 评分克制 + 多维度

两个反直觉的选择：

**① 评论不够不显示评分**：< 3 条评价 = 不显示平均分。原因：1 条评价 5 分 = 虚假满分。「Airbnb deliberately avoids showing an average rating for listings that have fewer than three reviews」。

**② 多维而非单数字**：不只给一个 4.87，而是拆成 6 维（清洁度 / 准确性 / 沟通 / 位置 / 价值 / 入住）。「Multi-dimensional ratings provide actionable signals, not emotions」。

**视觉呈现**：★ 4.87 · 234 reviews = **正文字号（15px），不加粗，不红色**。和标题、价格同层信息，不是独立 banner。

**对 travel-web 的启发**：
如果未来有推荐度 / 评分，要问：
- 是不是"所有城市都有评分"？如果数据不足还硬显 = 虚假权威
- 是单一数字 vs 多维（历史深度 / 视觉美感 / 实用性）？
- 字号和标题等大 vs 配角位？等大 = 注意力和标题打架

### 5. 行为感知式 CTA

传统做法：按钮永远在那里，等你点。
Airbnb 做法：**你滑下去了才弹 CTA**（"Airbnb your home"页），而且是滑下后又滑回来 = 说明你在犹豫 = 这时推一把最有效。

Icons 分类里更细：wishlist 按钮 **换成** share 按钮——因为用户看到一个法国城堡想的不是"收藏"，是"发给朋友看"。「This behavior-based nudge subtly encourages users without being intrusive」。

**对 travel-web 的启发**：
城市详情页底部的 CTA（如果有的话）是"一直在那里"还是"你看完一段后才出现"？后者更不打扰。

另外：share > save 的判断——travel-web 是内容站，用户看到好的城市详情更可能想分享而不是收藏。

---

## 不值得学 / 反而要避开的

### 1. Airbnb 是交易平台，travel-web 不是

Airbnb 所有设计最终指向"预订"——照片、评分、价格透明都为了降低预订摩擦。travel-web 没有预订，也不该模仿这种"所有路径指向一个 CTA"的漏斗逻辑。

要学的是**发现架构和视觉纪律**，不是**转化漏斗**。

### 2. ML + 人工 curation 的成本

Airbnb 56 个分类背后是百人 curation team + ML pipeline。travel-web 是个人项目。

可偷的是**"分类"的概念**（手动维护 5-7 个主题入口，不需要 ML），不是**"自动分类"的系统**。

### 3. 京都 Matador 文章暴露的问题：叙事缺失

Matador Network 描述京都 Airbnb 时用的是**列表式**——"X 房源 + 描述 + 价格 + 预订按钮"。没有个人叙事、没有在地人声音、没有"为什么是这几家"的编辑视角。

这正是 Cereal 做得好而 Airbnb 内容页做得不够的地方：**Airbnb 的"发现"很强，但"到达后的内容深度"偏弱**——它的信任靠系统（评分 + 照片标准化），不靠叙事。

travel-web 的机会在中间：**用 Airbnb 的发现架构 + Cereal 的内容深度**。

---

## 可迁移到 travel-web 的具体灵感

### Cereal vs Airbnb 对照表——两者互补

| 维度 | Cereal 教的 | Airbnb 教的 |
|------|-----------|-----------|
| 入口 | 编辑精选（策展人决定看什么） | 分类浏览（用户从心情出发） |
| 信任 | 作者身份 + "我们去过" | 评分 + 照片标准 + 多维数据 |
| 图片 | 局部切片 + 摄影师签名风格 | 排序叙事 + wide-angle 降落差 |
| 色彩 | 克制 = 灰 + serif + 负空间 | 克制 = 中性灰 + 亮色仅 1 处 |
| 内容 | 第一人称散文 + 在地人声音 | 设施描述 + 多维评分 |
| 弱项 | 发现靠编辑推（用户无法自主探索） | 内容深度弱（列表化 + 无叙事） |

### travel-web 能做的 4 件新事

1. **主题入口**：首页加 5-7 个主题 tab / 横滑条（古城 / 自然 / 美食 / 神殿 / 博物馆），不需要先选城市
2. **图片排序意识**：每个城市详情 5 张图，按"远景 → 建筑 → 细节 → 人 → 安静角落"排列
3. **色彩审计**：全站亮色只保留 1 处（主 CTA / 关键标签），其余一律中性
4. **信任信号位置**：如果有推荐度 / 标签，放在标题旁配角位（小字灰色），不放视觉主位

---

## 一句话总结

**Airbnb 的核心贡献是把"搜索"变成"发现"**——用分类替代搜索框，用图片排序替代随机堆叠，用色彩稀缺替代彩虹高亮。Cereal 教了"内容怎么写"，Airbnb 教了"内容怎么被找到"。travel-web 的最优姿势是两者的杂交：**Cereal 的内容深度 + Airbnb 的发现架构**。
