# research: 图片 - 格式 WebP/AVIF fallback - 2026-04-18

## 背景

Plan B P0 第 3 条。B.1（CDN 对比）和 B.2（ORB 拦截机制）已经明确了"迁国内 CDN + 开 WebP"的方向。本研究把**图片格式策略这一层**做深：

1. AVIF / WebP / JPEG 三种格式的实际性能差异
2. 浏览器兼容性（特别是国内微信 WebView / X5 内核这种坑点）
3. `<picture>` 元素的正确 fallback 写法
4. 自动协商（CDN Accept header）vs 手动写 `<picture>` 的取舍
5. LCP（Largest Contentful Paint）相关的首屏图片优化

**产出目的**：让 travel-web 的前端在写图片标签时，知道**每张图该怎么出**，而不是"就写一个 `<img src>` 了事"。

---

## 一手源清单

强源：
1. [MDN — `<picture>` 元素完整文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)（**语法权威**）
2. [web.dev — Serve images in WebP format](https://web.dev/articles/serve-images-webp)（Google 官方最佳实践）
3. [Medium — Why you should use AVIF over JPEG/WebP/PNG/GIF in 2024](https://medium.com/@julienetienne/why-you-should-use-avif-over-jpeg-webp-png-and-gif-in-2024-5603ac9d8781)（带实测数据）

中源：
4. [freeimages blog — WebP vs JPEG vs AVIF](https://blog.freeimages.com/post/webp-vs-jpeg-vs-avif-best-format-for-web-photos)
5. 微信 X5 内核兼容性讨论（知乎 + SegmentFault + CSDN）

二手：
6. 搜索聚合（Image Optimization 2025、AVIF browser support、fetchpriority 实践）

抓取失败：caniuse.com（enterprise block）× 2 —— 浏览器支持率精确数字没能拿到，用社区数据推断。

**证据强度：中强**

---

## 1. 三种格式的性能对比

### 1.1 压缩率（相对 JPEG 同视觉质量）

| 格式 | 压缩率 vs JPEG | 实测样本 |
|---|---|---|
| **JPEG** | 基线（100%）| — |
| **WebP** | ≈60-70%（省 30-40%）| Web.dev 测试 |
| **AVIF** | **≈10-60%（省 40-90%）** | Alliance for Open Media |
| **HEIC** | ≈12.5%（JPEG 的 1/8）| 火山 ImageX 实测 |

作者实测（Medium）：AVIF 相比同质量 JPEG 节省 **≈60% 文件大小**。

### 1.2 视觉质量

AVIF / WebP 在**有损压缩**下，同 file size 的视觉质量优于 JPEG。但有几个坑：

- **纯矢量 / 非写实动画**：AVIF 没优势，WebP 或 JPEG 更好
- **极低压缩率（高质量）**：三种格式差距缩小
- **有透明通道的图**：WebP / AVIF 都比 PNG 省

### 1.3 编码时间代价

AVIF 编码**比 JPEG 慢 10-20 倍**。但对 travel-web 不是问题——图片是**预先编码上传**，不是实时生成，编码时间不影响用户。

### Taste 提取

> **照片类内容**（travel-web 的主场景）→ 优先 AVIF → fallback WebP → 最后 JPEG。**节省 40-60% 流量 = 首屏更快 = LCP 更好 = 用户留存更高**，这不是锦上添花，是 CDN 迁移的主要受益之一。

---

## 2. 浏览器兼容性（2026 年当前状态）

### 2.1 全球主流浏览器

| 格式 | Chrome | Safari | Firefox | Edge | 全球支持率（推断）|
|---|---|---|---|---|---|
| **WebP** | 32+ (2014) | **14+ (2020)** | 65+ | 18+ | **≈99%** |
| **AVIF** | 85+ (2020) | **16+ (2022)** | 93+ | 121+ | **≈92-95%** |
| **JPEG** | 永远支持 | 永远支持 | 永远支持 | 永远支持 | 100% |

**关键节点**：
- WebP 从 Safari 14（2020 秋）支持后，基本全兼容——2026 年可当做 baseline
- AVIF 从 Safari 16（2022 秋）支持，2024 年后全球 >90%——可作为**主格式**，用 WebP fallback

### 2.2 中国特殊情况 · 微信内置浏览器（大坑）

微信 Android 不用系统 Chrome WebView，**用腾讯自研的 X5 内核**（后改名 XWEB）。从社区信号（知乎 / SegmentFault）：

- **X5 内核 基于 Chromium** 但版本滞后，CSS3 / 新特性经常不支持
- **WebP 在 X5 是支持的**（Chromium 基因 + 腾讯需要大量省流量）
- **AVIF 在 X5 的支持情况不明确**——**不能假设支持**，必须 fallback 兜底
- iOS 微信：用系统 Safari WebView，苹果管——WebP/AVIF 跟随 Safari 版本

### 2.3 国内第三方浏览器

QQ 浏览器（X5 同源）、UC 浏览器（老版用 U3 内核，新版 Blink）、百度浏览器——**支持性碎片化**。

**实用结论**：**永远不要只给一种格式**。`<picture>` 的 fallback 在国内环境下不是 nice-to-have，是必须。

### Taste 提取

> 微信内置浏览器是中国 H5 场景的 IE6——看起来是 Chromium 却不完全是 Chromium。假设它支持新格式 = 在微信里图片挂掉 = 50% 用户流失。travel-web **必须在微信里实测**，不是在 Chrome DevTools 里模拟。

---

## 3. `<picture>` 元素完整语法（权威模式）

来自 MDN：

```html
<picture>
  <!-- 主格式：AVIF（最新，文件最小） -->
  <source
    srcset="hero-small.avif 480w,
            hero-medium.avif 800w,
            hero-large.avif 1200w"
    sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
    type="image/avif" />
  
  <!-- 备选：WebP（兼容性广） -->
  <source
    srcset="hero-small.webp 480w,
            hero-medium.webp 800w,
            hero-large.webp 1200w"
    sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
    type="image/webp" />
  
  <!-- 兜底：JPEG -->
  <img
    src="hero-large.jpg"
    alt="京都"
    width="1200"
    height="800"
    loading="lazy" />
</picture>
```

### 3.1 关键规则

- **浏览器从上到下匹配 `<source>`**，选第一个能用的
- `<img>` **必须放最后**，作为兜底（没有它就没有兜底）
- `type="image/*"` 必须匹配 MIME 类型
- `alt` / `width` / `height` 必须放在 `<img>` 上（不在 `<picture>` 上）
- `loading="lazy"` 对非首屏图用（首屏图不能 lazy，见 §5）

### 3.2 `sizes` 属性的作用（常被误解）

`sizes` 告诉浏览器**该图在页面上会占多宽**，浏览器再据此选 srcset 里合适的版本：

```
sizes="(max-width: 600px) 480px, (max-width: 1024px) 800px, 1200px"
       ^                       ^                        ^
       小屏显示 480px          中屏显示 800px          大屏显示 1200px
```

**常见错误**：`sizes="100vw"` —— 所有屏都用视口宽度选图。对全屏图对，对卡片图会浪费流量。

### Taste 提取

> `<picture>` 不是"装逼写法"，是前端基本功。没写 `<picture>` = 默认给所有人 JPEG 原图 = 国内慢网络下首屏 2s+ = 用户流失。写了 `<picture>` = 一张 800KB 的原图，在 AVIF 下变 200KB，首屏 500ms——品质天壤之别。

---

## 4. 自动协商 vs 手动 `<picture>` — 选哪个

### 4.1 自动协商（CDN Accept header）

CDN（火山 ImageX / Cloudflare Images）读浏览器发的 `Accept` header：

```
Accept: image/avif,image/webp,image/apng,image/*,*/*;q=0.8
         ↑         ↑
         最优先     次优先
```

CDN 按浏览器能力返回最合适的格式。前端只写 `<img src="kyoto.jpg">` 一行。

**优点**：
- 前端代码极简
- 新格式上线时自动生效（不用改 HTML）
- CDN 内置缓存 Vary-by-Accept

**缺点**：
- 锁定在特定 CDN
- URL 不能被缓存代理友好处理（因为同一 URL 不同 Accept 返回不同内容）

### 4.2 手动 `<picture>`

前端自己写三级 `<source>`。

**优点**：
- CDN-无关（换 CDN 不用改前端）
- URL 稳定（每个格式不同 URL）
- 可以细粒度控制
- SEO 友好（crawler 能看到多版本）

**缺点**：
- HTML 变长
- 每种格式都要预生成（CDN 要么能转换要么就得上传三份）
- 新格式上线要改代码

### 4.3 travel-web 建议

| 场景 | 推荐 |
|---|---|
| MVP 阶段 + 用火山 ImageX | 自动协商（少写 5 倍代码）|
| 成熟期 + 多 CDN 备份 | 手动 `<picture>`（抽换 CDN 成本低）|
| 超高流量站 | 混合——CDN 主力做自动协商，重要 hero 用 `<picture>` 加 preload |

---

## 5. LCP 与首屏图片优化

LCP (Largest Contentful Paint) 是 Google Core Web Vitals 的核心指标——**首屏最大内容元素显示的时间**。旅游站的 hero 图 99% 是 LCP 元素。

### 5.1 `fetchpriority="high"`

给首屏 hero 图加：

```html
<img
  src="hero.jpg"
  fetchpriority="high"
  alt="..."
  width="1200"
  height="800" />
```

浏览器会**优先加载**这张图，不跟其他资源排队。2022 年后 Chrome 101+ 支持。

### 5.2 `<link rel="preload">` （可选加强）

```html
<link rel="preload" as="image"
      href="hero-large.avif"
      imagesrcset="hero-small.avif 480w, hero-medium.avif 800w, hero-large.avif 1200w"
      imagesizes="100vw"
      type="image/avif" />
```

在 HTML `<head>` 里预告"我需要这张图"，浏览器解析到 `<body>` 里的 `<img>` 之前就开始下载。

### 5.3 禁止首屏图 lazy load

**错误**：

```html
<img src="hero.jpg" loading="lazy" />  <!-- 首屏图不能 lazy！ -->
```

`loading="lazy"` 会让浏览器等到接近视口才加载——但首屏图**必然在视口内**，这个属性反而拖慢 LCP。

### 5.4 aspect-ratio 防 CLS

已在 B.2 的"图片加载韧性"镜头里覆盖。简要复述：

```css
img { aspect-ratio: 16 / 9; width: 100%; height: auto; }
```

避免图加载完布局跳动（CLS, Cumulative Layout Shift）。

### Taste 提取

> **LCP < 2.5s 是 Google 给的"Good"线，2.5-4s 是"Needs Improvement"**。travel-web 如果每座城市的 hero 图还在 4s+，Lighthouse 会报红 —— 这不是技术问题，是产品感受问题（用户打开一座城市要等 4 秒，直觉"这个站不行"）。

---

## 6. 完整策略落到 travel-web

假设选腾讯 COS + 前端手写 `<picture>`（最通用路径）：

### 6.1 上传预处理（一次性）

每张源图预处理成多格式多尺寸：

```
kyoto-hero.jpg         (原始备份)
kyoto-hero-480.avif    (480 宽, AVIF)
kyoto-hero-480.webp    (480 宽, WebP)
kyoto-hero-480.jpg     (480 宽, JPEG 兜底)
kyoto-hero-800.avif
kyoto-hero-800.webp
kyoto-hero-800.jpg
kyoto-hero-1200.avif
kyoto-hero-1200.webp
kyoto-hero-1200.jpg
```

共 9 份。可以用 CDN 自动生成（阿里 / 腾讯 / 七牛都支持 `?x-oss-process=image/format,webp`）。

### 6.2 HTML（首屏 Hero）

```html
<picture>
  <source type="image/avif" srcset="..." sizes="100vw" />
  <source type="image/webp" srcset="..." sizes="100vw" />
  <img
    src="kyoto-hero-1200.jpg"
    alt="京都"
    width="1200" height="800"
    fetchpriority="high"
    style="aspect-ratio:3/2; width:100%; height:auto;" />
</picture>
```

### 6.3 HTML（非首屏 · 卡片 / 详情内图）

```html
<picture>
  <source type="image/avif" srcset="..." sizes="(max-width:600px) 400px, 800px" />
  <source type="image/webp" srcset="..." sizes="(max-width:600px) 400px, 800px" />
  <img
    src="landmark-800.jpg"
    alt="金阁寺"
    width="800" height="600"
    loading="lazy"
    onerror="this.src='/fallback.jpg'"
    style="aspect-ratio:4/3;" />
</picture>
```

### 6.4 如果用火山 ImageX

所有 `<picture>` 塌缩成一行：

```html
<img
  src="https://img.travelweb.com/kyoto-hero?w=1200"
  alt="京都"
  width="1200" height="800"
  fetchpriority="high"
  style="aspect-ratio:3/2;" />
```

火山按 Accept 自动返回 AVIF/WebP/JPEG。

---

## 7. 对 travel-web 的 taste 启示

| 场景 | 正确做法 | 失分做法 |
|---|---|---|
| 首屏 Hero 图 | `fetchpriority="high"` + preload + 无 lazy | 用 lazy load / 等加载完才开始动画 |
| 非首屏卡片图 | `loading="lazy"` + aspect-ratio + onerror | 直接 `<img src>`，加载时 layout 抖 |
| 格式策略 | AVIF → WebP → JPEG 三级，自动或手动 | 只给 JPEG |
| 微信内测 | 必须在微信里 debug | 在 Chrome DevTools 模拟就完事 |
| LCP 追踪 | Lighthouse 定期跑，盯 < 2.5s | 上线就不管 |

---

## 8. 本次研究可直接产出的镜头（2 条）

**放入 🔵 段**：

1. **LCP 图片优先级**：首屏 Hero 图有 `fetchpriority="high"` + preload 吗？非首屏图才用 `loading="lazy"`？弄反 = LCP 飙到 4s+ = 用户进站 4 秒还看不到图
2. **微信 WebView 实测**：图片功能是否在真实微信里测过（而非 Chrome DevTools 模拟）？X5 内核和 Chrome 有差距，AVIF 可能挂，必须用真机+真微信测

---

## 9. 局限与警示

- **caniuse 没抓到**：AVIF/WebP 的精确浏览器版本号数据依赖社区信号而非官方。但结论大方向正确（WebP ≈99% 支持 / AVIF >90% 支持，兜底 JPEG 保底）。
- **X5 内核 AVIF 支持不确定**：需要真实测试验证。保守做法：假设不支持，fallback 到 WebP。
- **编码成本未量化**：AVIF 编码慢 10-20x，但对预生成图片场景不是问题。如果是用户上传 + 实时转码的站，要重新权衡。
- **本研究未触及 SVG / GIF / APNG**：旅游站主要是照片类，矢量图用 SVG 是另一个话题，动图用 WebP/AVIF 动画或 APNG 也是另外的决策。
- **fetchpriority 浏览器支持**：Chrome 101+，Safari 17+，老 iOS 不支持 —— 但不支持时退化为无特殊优先级，不会破坏功能。

---

## 参考来源

强一手源：
- [MDN — `<picture>` 元素文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [Web.dev — Serve images in WebP format](https://web.dev/articles/serve-images-webp)
- [Medium — AVIF over legacy formats in 2024](https://medium.com/@julienetienne/why-you-should-use-avif-over-jpeg-webp-png-and-gif-in-2024-5603ac9d8781)

中源 / 二手：
- [freeimages — WebP vs JPEG vs AVIF](https://blog.freeimages.com/post/webp-vs-jpeg-vs-avif-best-format-for-web-photos)
- [腾讯浏览服务 X5 官网](https://x5.tencent.com/)
- [知乎 — 微信内置浏览器 x5 内核的坑](https://www.zhihu.com/question/30465777)
- 搜索聚合（Image Optimization 2025 / responsive srcset / fetchpriority）
