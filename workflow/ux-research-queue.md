# UX 研究队列

> **谁维护**：CEO 调优先级 / Explorer 建议新对象
> **谁消费**：`/research-ux-auto` 命令自动从顶部 pending 逐个跑
> **操作**：调优先级 → 拖行顺序 · 加新的 → 底部追加 · 跳过 → status 改 skip
> **产出去向**：`workflow/ux-lenses.md` → pipeline Step 1 UX subagent 必读 → 更锐的反馈

---

## 队列

| # | 域 | 对象 | status | 完成日期 | commit | 备注 |
|---|---|---|---|---|---|---|
| 1 | 旅游 | Airbnb-Kyoto | done | 2026-04-17 | (prior session) | 城市详情页 taste 标杆，UX 多次对标 |
| 2 | 美学 | Things-3 | done | 2026-04-17 | 8185a64 | 极简信息层级，景点卡/时间轴参照 |
| 3 | 流畅度 | Apple-Music | done | 2026-04-17 | 6293a8d | 页面切换动效，UX 吐槽"卡带感"的解药 |
| 4 | 旅游 | Lonely-Planet-排版 | done | 2026-04-17 | 4fd77fd | 长文排版节奏，v2.7 放开段落长度需要参照 |
| 5 | 美学 | Bear | done | 2026-04-17 | 7f492ab | 中文 Markdown 渲染 + 留白，内容密度参照 |
| 6 | 惊喜 | Stripe-官网 | done | 2026-04-17 | 5bf0c22 | 微交互惊喜，🔵 段淘汰旧条目的替换源 |
| 7 | 反向案例 | 小红书-旅游广告 | done | 2026-04-18 | 8b98bb3 | 🟡 识别警报补充，"假高级"方向 |
| 8 | 旅游 | Google-Arts-Culture | done | 2026-04-18 | 58ed48e | 博物馆/文化遗产叙事，"历史"定位最近 |
| 9 | 图片 | 国内-CDN-对比 | done | 2026-04-18 | 2d93d34 | Plan B P0 · 图片大陆可用空白补齐（七牛/又拍/OSS/COS/火山） |
| 10 | 图片 | 墙外源-ORB-拦截机制 | done | 2026-04-18 | cb1824f | Plan B P0 · 为何 Google Photos/Unsplash 被拦，何时拦 |
| 11 | 图片 | 格式-WebP-AVIF-fallback | done | 2026-04-18 | 669af5a | Plan B P0 · 国内浏览器支持率 + `<picture>` 策略 |
| 12 | 图片 | 渐进加载美学对比 | done | 2026-04-19 | (pending) | Plan B P0 · blur-up / LQIP / dominant color 哪种最 taste |
| 13 | 配色 | 氛围色自适应规则 | pending | | | Plan B P1 · Apple Music + GAC + Material You 的可落地 CSS 规则 |
| 14 | 流畅度 | iOS-26-Liquid-Glass | pending | | | Plan B P1 · 硬件 OS 过渡范式，H5 能借鉴什么 |
| 15 | 架构 | 多轴入口移动端案例 | pending | | | Plan B P1 · Spotify/NYT Cooking/Apple Arcade 首页入口并列 |
| 16 | 内容 | AI 年代的人类编辑信号 | pending | | | Plan B P2 · 什么样细节一眼看出"人写而非 AI" |
| 17 | 排版 | 移动端长内容自持极限 | pending | | | Plan B P2 · Medium/Substack 移动端 typography 承压 |

---

## 已完成

| 域 | 对象 | 完成日期 | 镜头数 |
|---|---|---|---|
| 流畅度 | Linear | 2026-04-16 | 5 条 → 🔵 |
| 产品动线 | app 流畅度 | 2026-04-16 | 5 条 → 🔵 |
| 产品动线 | H5 装 native | 2026-04-16 | 5 条 → 🔵 |
| 旅游 | Cereal Magazine | 2026-04-16 | 5 条 → 🟢 |
| 反向案例 | OTA 廉价感 | 2026-04-16 | 5 条 → 🟡 |
| 旅游 | Airbnb-Kyoto | 2026-04-17 | 4 条 → 🟢（prior session）|
| 美学 | Things-3 | 2026-04-17 | 4 条 → 🔵 |
| 流畅度 | Apple-Music | 2026-04-17 | 3 条 → 🔵 |
| 旅游 | Lonely-Planet-排版 | 2026-04-17 | 4 条 → 🟢 |
| 美学 | Bear | 2026-04-17 | 2 条 → 🔵 + 1 条 → 🟢 |
| 惊喜 | Stripe-官网 | 2026-04-17 | 3 条 → 🔵（替换 3 条） |
| 反向案例 | 小红书-旅游广告 | 2026-04-18 | 4 条 → 🟡 |
| 旅游 | Google-Arts-Culture | 2026-04-18 | 4 条 → 🟢（替换 3 条） |
| 图片 | 国内-CDN-对比 | 2026-04-18 | 3 条 → 🔵（替换 3 条） |
| 图片 | 墙外源-ORB-拦截机制 | 2026-04-18 | 2 条 → 🔵（1 退 + 1 合并）|
| 图片 | 格式-WebP-AVIF-fallback | 2026-04-18 | 2 条 → 🔵（替换 2 条）|
| 图片 | 渐进加载美学对比 | 2026-04-19 | 1 条 → 🔵（替换 1 条）|
