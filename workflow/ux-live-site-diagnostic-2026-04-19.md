# UX 上线回访诊断清单 · 2026-04-19（v3.3 版）

**来源**：research-ux agent 基于 v3.3 线上现场勘查（2026-04-19）+ UX 2026-04-18 反馈 + 6 目标框架 + 39 条镜头
**读者**：UX（下次上线体验必读）+ PMO（P0 条目进 backlog）
**目的**：本轮 Dev-H5 对 CEO P00000 做了激进重构——景点长文被删，改为 kicker 式金句。UX 要验证 technical 修复 + 补"内容深度损失"这个主观判断
**前版归档**：workflow/ux-live-site-diagnostic-2026-04-18.md（P00000 那版）归档留底

---

# 🎉 Dev 本轮大胜仗一览（已修，UX 确认即可）

这些是 research-ux 现场实测确认已修的，UX 不用深测，直接截图记录"✅ 已修"即可：

| # | 项 | 证据 |
|---|---|---|
| A | body 字体栈换 sans | body: `-apple-system, "PingFang SC", "Noto Sans SC"...` |
| B | body 字号降到 15px | body `font-size: 15px`（上轮 17px）|
| C | body 字距归零 | body `letter-spacing: normal`（上轮 0.51px）|
| D | 行距保持 1.75 | body `line-height: 26.25px`（1.75）|
| E | **景点长文 297 字塌方彻底拆除** | 拴日石卡片从 520px/64% viewport → 134px/16% viewport，字数 297→85 |
| F | 景点卡片四件套结构 | 图 + 标题（Playfair serif） + era meta（Courier Prime） + hook（sans 14px） |
| G | MEANWHILE emoji 三连已修（UX 上轮确认）| 小 caps + 地域小标签 |
| H | "/现在："斜线已修（UX 上轮确认）| 前缀改为"今天" |
| I | 首页多轴入口完整 | 主题探索 + 主题 pill + 大洲筛选 3 层并列 |
| J | 首页文案 Cereal 级金句 | "王朝换了十几个，城墙的砖还是最早那一层" 等 6 条 |
| K | 深色底 + noise SVG 叠层 | `filter='url(#noise)' opacity='0.04'` 纸质感处理 |

**CEO 可以直接欣赏这份成绩单——这是 travel-web 设计迭代史上最大一跃**。

---

# 🚨 P0 · UX 必须给主观判断的头号问题

## P0-1 · 景点长文被删了——是 taste 升级还是内容阉割？

**背景**：上轮 UX 反馈的"拴日石 297 字大墙"，Dev 采取**最激进方案**——不是分段，是**直接删掉景点长文**，只保留 1 句 kicker 金句。

**现场证据**（research-ux 实测）：

| 景点 | kicker（现存） |
|---|---|
| 马丘比丘遗址 | "石缝之间插不进一张纸——不用任何砂浆。" |
| 拴日石（Intihuatana）| "盖丘亚语意为'拴住太阳的地方'——春分正午不投阴影。" |
| 华纳比丘 | "印加石阶坡度 70 度、两侧悬崖——550 年前就在走。" |

**上轮景点长文里有什么（被删除的内容）**：
- 印加祭司每天清晨爬上去观察日出方向
- 同期明代天文学中衰期、郭守敬《授时历》、伽利略对比
- 2000 年一台拍广告的起重机砸坏石柱顶部
- 盘旋的石阶宽 30 厘米、坡度 70 度
- ……

**UX 要回答的问题**：
1. **只读 kicker 一句话 vs 读 297 字大墙——哪种感受更"像 travel-web"**？
2. **那些 micro-story 是被删了，还是迁到了别处**（历史时间轴 tab？）？点开"历史时间轴"tab 找一下
3. 如果 micro-story 真的消失了——**这是 taste 优化还是文化深度流失**？
4. 建议方向：
   - 方向 A：确认删除是对的（kicker 更克制，符合 Cereal taste）
   - 方向 B：kicker 保留 + 景点点击可展开看 micro-story（折叠）
   - 方向 C：micro-story 应迁到历史时间轴 / 背景区

**UX 展示要求**：
- 3 个景点的新卡片截图
- 找得到 micro-story 的截图证据（如果找到了）
- 一段 100-200 字的主观判断

**严重程度**：P0 —— 只有用户视角能判断

---

# 🔧 P1 · research-ux 技术测出，UX 只需确认

## P1-1 · intro 段（马丘比丘第一段介绍）字距未归零、字号未降

**研究发现**（research-ux 实测）：

```
body 整体：font-size 15px / letter-spacing normal
intro <p>：font-size 17px / letter-spacing 0.51px
```

Dev 修了 body 默认，但**漏改了 `.detail-intro p` 或类似的类**——intro 段保留了旧值。

**UX 展示要求**：
- 打开马丘比丘详情页，对比上方 intro 段和下方时间轴说明段的字号/字距差异
- 截图 inspect 数据

**修复路径**（给 Dev）：让 intro `<p>` 继承 body 或显式覆盖：
```css
.detail-intro p,
.intro-card p {
  font-size: 15px;        /* 下调到与 body 一致 */
  letter-spacing: 0;      /* 强制归零 */
  line-height: 1.75;      /* 统一 */
}
```

## P1-2 · 首页引言嵌套引号 bug

**研究发现**：首页 Hero（墨西哥城）引言最后多了一个引号：

```
正常：1519年，科尔特斯看到特诺奇提特兰时说："我们不知道这是真实的还是梦境"
现在："1519年，科尔特斯看到特诺奇提特兰时说："我们不知道这是真实的还是梦境""
                                                                              ↑ 多余
```

**UX 展示要求**：首页 Hero 截图 + 用红圈标出多余引号

**修复路径**（给 PM）：检查 `js/data.js` 的 `heroQuote` 字段，删多余引号

## P1-3 · 京都伏见稻荷 Hero 图仍被 ORB 拦截

**研究发现**（research-ux Network tab 实测）：

```
GET https://commons.wikimedia.org/w/index.php?title=Special:Redirect/file/
    Fushimi_Inari-taisha_Torii_2018.jpg&width=1600
[FAILED: net::ERR_BLOCKED_BY_ORB]  × 3 次重试每次 reload
```

**原因**：Wikimedia 的 `Special:Redirect` 路径返回 HTML 重定向，被 ORB 拦截。对比之下 `upload.wikimedia.org/.../thumb/.../960px-xxx.jpg` 直接 URL 正常。

**修复路径**（给 Dev）：`js/data.js` 的京都图片 URL 应换成直接 `upload.wikimedia.org/.../thumb/...` 格式，不用 `Special:Redirect`

**UX 展示要求**：点入京都详情，打开 Network tab filter failed，截图证据

## P1-4 · 所有图片仍直连 Wikimedia（CDN 未迁）

**研究发现**：所有城市/景点图片走 `upload.wikimedia.org/wikipedia/commons/thumb/...`

这是 B.1 研究提的 P0 债，**至今未还**：
- 无自定义域名 `img.travelweb.com`
- 无 AVIF / WebP fallback（直接 .jpg）
- 无占位图 / aspect-ratio
- 国内访问速度依赖 Wikimedia 全球 CDN（不稳定）

**UX 展示要求**：
- 在 DevTools Network tab throttle 到 Slow 3G，reload 首页
- 录屏展示"图片一张一张空白 → 砰砰冒出来"的 layout shift 情况
- 截图 Network 面板，用 host 列排序展示所有图片都在 wikimedia

**修复路径**（给 PMO）：这个是产品级决策——是否立即启动 CDN 迁移 Plan（按 B.1-B.4 研究结论）

---

# 🔍 P2 · UX 直觉扫描（没具体问题，看感觉）

## P2-1 · 景点卡片是否应该可点击

research-ux 实测发现景点卡片 DOM 是 `<div>` 没有 href——无法深度点击。

**UX 判断**：
- 这是设计决定（卡片级就是终点）还是路由遗漏？
- 如果是前者，卡片要不要去掉 hover 态/指针光标（避免"可点但没反应"）？
- 如果是后者，点进去应该看到什么？

## P2-2 · 整体气质评分

像上轮一样给个 X/10 + 3 句话。这次 v3.3 相比 v3.0 进步巨大，UX 的评分应该能反映出来。

---

# 📸 UX 取证的推荐路径

建议 UX 按这个顺序体验取证：

```
1. 首页 → 3 秒直觉（纯感受，不看清单）
2. 滑一屏 → 看主题探索 6 主题卡（6 条金句读不读得出来）
3. 点 1 个主题 pill 过滤（如"帝都传奇"）
4. 点 1 个城市卡（北京 / 马丘比丘 / 京都——包含 P1-3 ORB 测试目标）
5. 详情页 → intro 段（P1-1 测量）
6. 切 "历史时间轴" tab → 看 MEANWHILE 模块 → P00000 已修确认
7. 切 "重要景点" tab → 判断 P0-1 的主观问题
8. 切 "实用信息" tab → 补充观察
9. 返回首页 → 测试 scroll 位置保留
10. 打开 Network filter failed → P1-3 / P1-4 取证
```

---

# 📝 反馈文件建议结构

```
# 用户反馈 - 2026-04-XX HH:MM

## Part 1 · 自由体验（保留直觉）
[3-5 条"我觉得这里怪/好"的瞬间观察]
  
## Part 2 · Dev 胜仗确认（逐条"✅ 已修" + 1 张截图）
...（对照上面 §1 清单逐条打勾）

## Part 3 · P0 深度判断 · 景点内容深度损失
[这是本轮最重要的产出——200-400 字的 taste 判断]

## Part 4 · P1/P2 诊断回收
...

## Part 5 · 清单外新发现
...

## 整体气质评分 X/10
[3 句话解释]
```

---

# 🎯 给 UX 的纪律提醒

- **保留直觉**：本轮 Dev 改得好，但不要因此"柔软"——找问题的眼睛不能钝
- **重点在 P0-1**：内容深度是否损失，这是只有用户视角能答的
- **技术测量交给 research-ux**：P1 的字距/字号/ORB 不用你再 inspect，直接写"证实"即可
- **不要改镜头库 / 诊断清单 / 研究文件**（仍是 research-ux 的产出）
- **对主观判断不客套**：如果 Dev 删 297 字是对的就说对，是错的就说错，Jobs 要的是真话

---

# 后续流程

UX 反馈后：
- P0-1 的主观判断 → 如果 UX 说"内容被阉割" → PM 和 Dev 讨论"kicker + 可展开详情"方案
- P1-1 / P1-2 → 直接进 backlog（简单修）
- P1-3 / P1-4 → PMO 决策是否启动 CDN 迁移大工程
- P2 → 下一轮诊断观察

本诊断清单在 UX 反馈回收后归档，下次 v3.4 上线再做新版本。

---

**作者**：research-ux agent
**版本基准**：commit hash 待测（读 git log 确认 v3.3 对应哪个 commit）
**生命周期**：UX 反馈后归档为 `ux-live-site-diagnostic-2026-04-19-DONE.md`
