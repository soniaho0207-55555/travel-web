# PM v2.7 · wikiImage 直链补丁（I-10 首批 5 景点）

> **对应 PRD**：I-10 · P1 | Wiki API 超时黑屏修复（首批 5 景点 wikiImage 直链）
> **目标**：给 UX 明确点名 + 黑屏高频的 5 景点加 `wikiImage` 直链，避免 Wiki API `pageimages` 超时 / 限流 / 返 null 导致 Hero 黑屏
> **Dev 操作**：把下面 5 条 `wikiImage` 字段粘贴到 `js/data.js` 对应 `landmarks[]` 节点；粘合前 **HEAD 验证 200 OK**
> **验收**：`grep -c "wikiImage:" js/data.js` 比 v2.6.1 增加 ≥ 5

---

## 一、5 景点清单（按反馈严重度排）

| # | 景点 | wiki 关键词 | 当前问题 | 直链填充 |
|---|---|---|---|---|
| 1 | 吴哥窟主遗址 | Angkor Wat | UX 反馈点名 "Hero 一片黑"、Network 面板显示 `ERR_TIMED_OUT` | ✅ 本文件 § 2.1 |
| 2 | 长城（八达岭段） | Great Wall of China | UX 反馈 Network 超时 | ✅ § 2.2 |
| 3 | 天坛 | Temple of Heaven | UX 反馈 Network 超时 | ✅ § 2.3 |
| 4 | 颐和园 | Summer Palace | UX 反馈 Network 超时 | ✅ § 2.4 |
| 5 | 德里红堡 | Red Fort | v2.6.2 跟单预约链死链，同批高风险；高访问量 API 容易限流 | ✅ § 2.5 |

---

## 二、5 条直链详细说明

### 2.1 · 吴哥窟主遗址 (Angkor Wat) — data.js L1921-1922 附近

**景点信息**：
- data.js 所在：`CITIES[id='angkor'].landmarks[0]`
- 现有 wiki 字段：`'Angkor Wat'`
- 气质：日出五塔倒影入水，柬埔寨国旗原型

**推荐直链**（Wiki Commons 稳定地址，日出构图）：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Angkor_Wat_temple.jpg/1920px-Angkor_Wat_temple.jpg
```
候选备选（如主图 HEAD 失败）：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Angkor_Wat_001.JPG/1920px-Angkor_Wat_001.JPG
https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Angkor_wat_temple.jpg/1920px-Angkor_wat_temple.jpg
```

**气质理由**：日出时五座塔尖在荷花池的倒影——这是柬埔寨国旗灵感来源，视觉符号本身就是识别锚。

**Dev 粘合代码**：
```javascript
// CITIES[id='angkor'].landmarks[0] 内部新增字段
wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Angkor_Wat_temple.jpg/1920px-Angkor_Wat_temple.jpg',
```

---

### 2.2 · 长城（八达岭段） (Great Wall of China) — data.js L76 附近

**景点信息**：
- data.js 所在：`CITIES[id='beijing'].landmarks[1]`
- 现有 wiki 字段：`'Great Wall of China'`
- 气质：山脊线起伏、晴天无人

**推荐直链**：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/The_Great_Wall_of_China_at_Jinshanling.jpg/1920px-The_Great_Wall_of_China_at_Jinshanling.jpg
```

候选备选：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Great_Wall_of_China_July_2006.JPG/1920px-Great_Wall_of_China_July_2006.JPG
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Great_Wall_near_Jinshanling.jpg/1920px-Great_Wall_near_Jinshanling.jpg
```

**气质理由**：金山岭段比八达岭人少、墙体更荒、山脊线更干净——比八达岭正面照更有 MacGregor 那种"时间褪色"感。即使 wiki 关键词是 `Great Wall of China`，图片可以用金山岭视觉，视觉叙事高于严格地理对应。

**Dev 粘合代码**：
```javascript
// CITIES[id='beijing'].landmarks[1] 内部新增字段
wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/The_Great_Wall_of_China_at_Jinshanling.jpg/1920px-The_Great_Wall_of_China_at_Jinshanling.jpg',
```

---

### 2.3 · 天坛 (Temple of Heaven) — data.js L125 附近

**景点信息**：
- data.js 所在：`CITIES[id='beijing'].landmarks[2]`
- 现有 wiki 字段：`'Temple of Heaven'`
- 气质：三层琉璃瓦攒尖顶，蓝色穹顶

**推荐直链**：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/11_Temple_of_Heaven.jpg/1920px-11_Temple_of_Heaven.jpg
```

候选备选：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Temple_of_Heaven-2.jpg/1920px-Temple_of_Heaven-2.jpg
https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Temple_of_Heaven,_Beijing,_China_-001.jpg/1920px-Temple_of_Heaven,_Beijing,_China_-001.jpg
```

**气质理由**：祈年殿正面三层蓝色琉璃瓦攒尖顶——构图经典、辨识度高，是 hookShort "站在天心石低声说话，殿堂像给你戴了一副耳机" 的视觉承接。

**Dev 粘合代码**：
```javascript
// CITIES[id='beijing'].landmarks[2] 内部新增字段
wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/11_Temple_of_Heaven.jpg/1920px-11_Temple_of_Heaven.jpg',
```

---

### 2.4 · 颐和园 (Summer Palace) — data.js L157 附近

**景点信息**：
- data.js 所在：`CITIES[id='beijing'].landmarks[3]`
- 现有 wiki 字段：`'Summer Palace'`
- 气质：万寿山 + 昆明湖 + 佛香阁远景

**推荐直链**：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Summer_Palace_in_Beijing_10.jpg/1920px-Summer_Palace_in_Beijing_10.jpg
```

候选备选：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Summer_palace_-_panoramio.jpg/1920px-Summer_palace_-_panoramio.jpg
https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Longevity_Hill_from_the_Seventeen-Arch_Bridge.jpg/1920px-Longevity_Hill_from_the_Seventeen-Arch_Bridge.jpg
```

**气质理由**：从十七孔桥望万寿山——前景昆明湖水面、中景十七孔桥、远景佛香阁与万寿山——三层景深构图是颐和园最经典的视觉叙事。

**Dev 粘合代码**：
```javascript
// CITIES[id='beijing'].landmarks[3] 内部新增字段
wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Summer_Palace_in_Beijing_10.jpg/1920px-Summer_Palace_in_Beijing_10.jpg',
```

---

### 2.5 · 德里红堡 (Red Fort) — data.js L1621 附近

**景点信息**：
- data.js 所在：`CITIES[id='delhi'].landmarks[0]`
- 现有 wiki 字段：`'Red Fort'`
- 气质：33 米红砂岩墙 + 拉合尔门主门

**推荐直链**：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Delhi-Red_Fort-Lahori_Gate-20080210.jpg/1920px-Delhi-Red_Fort-Lahori_Gate-20080210.jpg
```

候选备选：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Red_Fort_in_Delhi_03-2016_img3.jpg/1920px-Red_Fort_in_Delhi_03-2016_img3.jpg
https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Red_Fort,_New_Delhi,_India.jpg/1920px-Red_Fort,_New_Delhi,_India.jpg
```

**气质理由**：拉合尔门是每年 8 月 15 日印度总理发表独立日讲话的位置，既有历史锚点（沙贾汗 1648）又有当代叙事（尼赫鲁 1947），识别度 > 红堡内部 Diwan-i-Am 照。

**Dev 粘合代码**：
```javascript
// CITIES[id='delhi'].landmarks[0] 内部新增字段
wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Delhi-Red_Fort-Lahori_Gate-20080210.jpg/1920px-Delhi-Red_Fort-Lahori_Gate-20080210.jpg',
```

---

## 三、Dev 统一粘合位置 + 验证步骤

### Dev 操作顺序
1. 对 5 条 URL 分别跑 `curl -I <url>` → 返回 `200 OK` 才可写入；返回 `404` 或 `403` 用该条的候选备选链接再试
2. 若主 URL 与 3 条候选全 404（Commons 文件可能被重命名），**降级**：`wikiImage` 字段不加，让 Wiki API fallback 继续工作；把这条 URL 失败的情况**反馈给 PM 下一轮再挑**
3. 所有 HEAD 通过后，在 `js/data.js` 对应 `landmarks[]` 节点内部**紧跟 `wiki:` 字段**加入 `wikiImage:` 新行（顺序：wiki → wikiImage → gradient）
4. 粘合后跑：`grep -c "wikiImage:" js/data.js` → 比 v2.6.1（0 或 1 或 N）数字增加 ≥ 5

### 避坑
- **不要**改 `wiki:` 字段本身（搜索词不变，仅新增 wikiImage 直链）
- **不要**把 `wikiImage:` 写成 `image:` 或 `img:`（app.js 的 `loadWikiImage()` 优先级逻辑认定字段名是 `wikiImage`）
- **不要**用 `upload.wikimedia.org/commons/` 原图（几 MB，慢）；必须用 `/thumb/.../1920px-` 缩略图版本

---

## 四、Dev `loadWikiImage()` 优先级二次确认

PRD I-10 要求 Dev 在 `loadWikiImage()` 优先级逻辑里**再次确认**：`wikiImage > API`。

建议 Dev 核对 `js/app.js` 对应函数是否为：
```javascript
async function loadWikiImage(wikiKey, landmark) {
  // Priority 1: 直链字段
  if (landmark && landmark.wikiImage) {
    return landmark.wikiImage;
  }
  // Priority 2: Wiki API
  const apiRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&pithumbsize=1920&format=json&titles=${encodeURIComponent(wikiKey)}&origin=*`);
  // ...
}
```
若当前 `loadWikiImage()` 签名不接 `landmark` 参数、只接 `wiki key`，Dev 需要扩展签名把 landmark 对象传入——但**签名变更不在本轮 PM 责任范围**，Dev 按实际架构判断。

---

## 五、Future（v2.8+）

剩余约 48 景点的 wiki API 健康度审计 → 跑 `scripts/audit-wiki-images.js`（H-12 已建）批量扫描：
- 超时（> 5s）
- 限流（429）
- 404
- 返回图宽 < 1200px

筛出"高风险"清单 → PM 批量补 `wikiImage` → v2.8 预计补 30 条 / v2.9 清尾。
