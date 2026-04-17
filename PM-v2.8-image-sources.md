# PM v2.8 · 自托管图片来源清单

> **对应 PRD**：附录 J · J-04 · P0 | 自托管图片（wiki 直链不可控）
> **核心需求**：从 Wikimedia Commons 下载高质量原图，压缩后存入项目 `images/` 目录，替代 upload.wikimedia.org 直链
> **覆盖范围**：8 张图片（1 张城市 Hero + 7 张景点 Hero）
> **许可证要求**：CC BY / CC BY-SA / Public Domain，署名在本文件统一记录

---

## 一、图片清单

### 1. 伊斯坦布尔城市 Hero（J-01 首选）

| 字段 | 内容 |
|------|------|
| **用途** | 首页 Hero 轮播 · 伊斯坦布尔城市卡 |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1920px-Hagia_Sophia_Mars_2013.jpg |
| **许可证** | CC BY-SA 3.0 |
| **作者** | Arild Vagen |
| **原始分辨率** | 4752 x 3168 px |
| **自托管文件名** | `images/heroes/istanbul-hagia-sophia-sunset.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 300-500KB |
| **data.js 字段** | `heroImage: 'images/heroes/istanbul-hagia-sophia-sunset.jpg'` |
| **避重** | 列表卡 wikiImage = Bosphorus Bridge 夜景（不撞）；详情页 Hero = wiki API 取蓝色清真寺内饰（不撞） |

---

### 2. 长城（八达岭段）景点 Hero

| 字段 | 内容 |
|------|------|
| **用途** | 长城景点详情页 Hero |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:The_Great_Wall_of_China_at_Jinshanling.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/The_Great_Wall_of_China_at_Jinshanling.jpg/1920px-The_Great_Wall_of_China_at_Jinshanling.jpg |
| **许可证** | CC BY-SA 3.0 |
| **作者** | Severin.stalder |
| **原始分辨率** | 6016 x 4016 px |
| **自托管文件名** | `images/landmarks/greatwall-jinshanling.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 400-600KB |
| **data.js 字段** | 已有 `wikiImage` 直链（v2.6），自托管后替换为本地路径 |
| **气质说明** | 金山岭段蜿蜒于山脊，建筑肌理+自然山势兼具；非八达岭拥挤段，更符合"历史旅行者"审美 |

---

### 3. 天坛景点 Hero

| 字段 | 内容 |
|------|------|
| **用途** | 天坛景点详情页 Hero |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:11_Temple_of_Heaven.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/11_Temple_of_Heaven.jpg/1920px-11_Temple_of_Heaven.jpg |
| **许可证** | CC BY 2.0 |
| **作者** | Daniel Case |
| **原始分辨率** | 4608 x 3456 px |
| **自托管文件名** | `images/landmarks/temple-of-heaven.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 300-500KB |
| **data.js 字段** | 已有 `wikiImage` 直链，自托管后替换 |

---

### 4. 颐和园景点 Hero

| 字段 | 内容 |
|------|------|
| **用途** | 颐和园景点详情页 Hero |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:Summer_Palace_in_Beijing_10.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Summer_Palace_in_Beijing_10.jpg/1920px-Summer_Palace_in_Beijing_10.jpg |
| **许可证** | CC BY-SA 3.0 |
| **作者** | kallgan |
| **原始分辨率** | 4288 x 2848 px |
| **自托管文件名** | `images/landmarks/summer-palace-kunming-lake.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 300-500KB |
| **data.js 字段** | 已有 `wikiImage` 直链，自托管后替换 |

---

### 5. 吴哥窟主殿景点 Hero

| 字段 | 内容 |
|------|------|
| **用途** | 吴哥窟主殿景点详情页 Hero |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:Angkor_Wat_temple.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Angkor_Wat_temple.jpg/1920px-Angkor_Wat_temple.jpg |
| **许可证** | CC BY-SA 3.0 |
| **作者** | Bjorn Christian Torrissen |
| **原始分辨率** | 5100 x 3400 px |
| **自托管文件名** | `images/landmarks/angkor-wat-reflection.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 400-600KB |
| **data.js 字段** | 已有 `wikiImage` 直链，自托管后替换 |

---

### 6. 伏见稻荷大社景点 Hero

| 字段 | 内容 |
|------|------|
| **用途** | 伏见稻荷大社景点详情页 Hero + 京都城市列表卡 |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:Fushimi_Inari-taisha%2C_Senbon-torii.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Fushimi_Inari-taisha%2C_Senbon-torii.jpg/1920px-Fushimi_Inari-taisha%2C_Senbon-torii.jpg |
| **许可证** | CC BY-SA 4.0 |
| **作者** | Luca Florio |
| **原始分辨率** | 5184 x 3456 px |
| **自托管文件名** | `images/landmarks/fushimi-inari-senbon-torii.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 400-600KB |
| **data.js 字段** | 京都城市级 `wikiImage` 已是此图直链，自托管后同时覆盖城市卡+景点 Hero |

---

### 7. 红堡景点 Hero

| 字段 | 内容 |
|------|------|
| **用途** | 红堡景点详情页 Hero |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:Delhi-Red_Fort-Lahori_Gate-20080210.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Delhi-Red_Fort-Lahori_Gate-20080210.jpg/1920px-Delhi-Red_Fort-Lahori_Gate-20080210.jpg |
| **许可证** | CC BY-SA 3.0 |
| **作者** | Ramesh Lalwani |
| **原始分辨率** | 4000 x 3000 px |
| **自托管文件名** | `images/landmarks/red-fort-lahori-gate.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 300-500KB |
| **data.js 字段** | 已有 `wikiImage` 直链，自托管后替换 |

---

### 8. 京都城市 Hero（千本�的居晨雾）

| 字段 | 内容 |
|------|------|
| **用途** | 首页 Hero 轮播 · 京都城市卡 |
| **Wiki Commons 页面** | https://commons.wikimedia.org/wiki/File:Fushimi_Inari-taisha_Torii_2018.jpg |
| **直链 URL** | https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Fushimi_Inari-taisha_Torii_2018.jpg/1920px-Fushimi_Inari-taisha_Torii_2018.jpg |
| **许可证** | CC BY-SA 4.0 |
| **作者** | NOLIC~commonswiki |
| **原始分辨率** | 5616 x 3744 px |
| **自托管文件名** | `images/heroes/kyoto-fushimi-inari-torii.jpg` |
| **压缩规格** | 1920px 宽边，JPEG quality 85%，预估 400-600KB |
| **data.js 字段** | `heroImage: 'images/heroes/kyoto-fushimi-inari-torii.jpg'` |
| **气质说明** | 千本鸟居近景角度，朱红柱列纵深感强；与景点 Hero（#6，Senbon-torii 远景）不撞——城市卡用近景体验感，景点详情用远景全貌 |
| **避重** | 城市列表卡 wikiImage = Senbon-torii 远景（不撞，视角不同） |

---

## 二、目录结构

```
images/
  heroes/
    istanbul-hagia-sophia-sunset.jpg     ← #1 伊斯坦布尔城市 Hero
    kyoto-fushimi-inari-torii.jpg        ← #8 京都城市 Hero
  landmarks/
    greatwall-jinshanling.jpg            ← #2 长城
    temple-of-heaven.jpg                 ← #3 天坛
    summer-palace-kunming-lake.jpg       ← #4 颐和园
    angkor-wat-reflection.jpg            ← #5 吴哥窟
    fushimi-inari-senbon-torii.jpg       ← #6 伏见稻荷
    red-fort-lahori-gate.jpg             ← #7 红堡
```

---

## 三、Dev 落地指令

### 3.1 下载 + 压缩

```bash
# 每张图从 Commons 下载原图，ImageMagick 压缩：
magick convert original.jpg -resize 1920x -quality 85 -strip output.jpg
```

### 3.2 data.js 修改

**城市级**：新增 `heroImage` 字段（渲染优先级最高）

```javascript
// istanbul
heroImage: 'images/heroes/istanbul-hagia-sophia-sunset.jpg',

// kyoto
heroImage: 'images/heroes/kyoto-fushimi-inari-torii.jpg',
```

**景点级**：将 `wikiImage` 从 wikimedia 直链替换为本地路径

```javascript
// 长城
wikiImage: 'images/landmarks/greatwall-jinshanling.jpg',

// 天坛
wikiImage: 'images/landmarks/temple-of-heaven.jpg',

// 颐和园
wikiImage: 'images/landmarks/summer-palace-kunming-lake.jpg',

// 吴哥窟主殿
wikiImage: 'images/landmarks/angkor-wat-reflection.jpg',

// 伏见稻荷
wikiImage: 'images/landmarks/fushimi-inari-senbon-torii.jpg',

// 红堡
wikiImage: 'images/landmarks/red-fort-lahori-gate.jpg',
```

### 3.3 渲染优先级（与 J-01 一致）

1. `heroImage`（自托管路径）-- 城市 Hero 轮播专用
2. `wikiImage`（自托管或直链）-- 景点 Hero / 列表卡
3. `wiki` API fallback -- 不可控但有图
4. `heroGradient` -- 纯色兜底

---

## 四、许可证汇总表

| # | 文件名 | 许可证 | 作者 | 署名要求 |
|---|--------|--------|------|----------|
| 1 | istanbul-hagia-sophia-sunset.jpg | CC BY-SA 3.0 | Arild Vagen | 必须署名+相同方式共享 |
| 2 | greatwall-jinshanling.jpg | CC BY-SA 3.0 | Severin.stalder | 必须署名+相同方式共享 |
| 3 | temple-of-heaven.jpg | CC BY 2.0 | Daniel Case | 必须署名 |
| 4 | summer-palace-kunming-lake.jpg | CC BY-SA 3.0 | kallgan | 必须署名+相同方式共享 |
| 5 | angkor-wat-reflection.jpg | CC BY-SA 3.0 | Bjorn Christian Torrissen | 必须署名+相同方式共享 |
| 6 | fushimi-inari-senbon-torii.jpg | CC BY-SA 4.0 | Luca Florio | 必须署名+相同方式共享 |
| 7 | red-fort-lahori-gate.jpg | CC BY-SA 3.0 | Ramesh Lalwani | 必须署名+相同方式共享 |
| 8 | kyoto-fushimi-inari-torii.jpg | CC BY-SA 4.0 | NOLIC~commonswiki | 必须署名+相同方式共享 |

**署名位置**：页面底部 Footer 或"关于"页面统一署名，格式：
```
Photo: [标题] by [作者], via Wikimedia Commons, [许可证]
```

---

## 五、验收对照

- [ ] 8 张图片全部有 Wiki Commons 页面 URL
- [ ] 每张有自托管文件名 + 压缩规格
- [ ] 每张有许可证 + 作者信息
- [ ] data.js 修改指令明确
- [ ] 目录结构可直接创建
- [ ] 城市 Hero（heroImage）与景点 Hero（wikiImage）路径分离
