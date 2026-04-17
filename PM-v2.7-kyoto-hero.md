# PM v2.7 · 京都 Hero 配图候选（I-04）

> **对应 PRD**：I-04 · P1 | 京都 Hero 配图再换（CEO 补-04，本轮必改）
> **目标**：把京都城市详情页 Hero 从「Arashiyama 正午浅景竹林特写」（UX + CEO 均不满意）换成**静 / 雾 / 禅 / 千年**气质的图
> **UX 原话**："京都的静"
> **CEO 判断**：「清水寺秋景是小红书爆款，不是 Cereal 气质」——本轮明确移出候选

---

## 一、为什么必须再换

### 背景
| 版本 | Hero 图 | 状态 | 反对理由 |
|---|---|---|---|
| v2.3 之前 | Kyoto Tower（京都塔） | 已废 | 1964 年观光塔，无京都气质 |
| v2.4 F-02 | Arashiyama 竹林正午浅景 | 当前线上 | **UX**: 只是京都外围自然景观，不是城市灵魂；**CEO**: 气质不够京都 |

### 本轮候选气质约束（三条硬线）
- **必须**：晨雾 / dawn mist / fog / moss（关键词之一）
- **必须**：高分辨率 ≥ 1600px 宽边
- **避开**：秋叶、樱花、正午阳光、游客入镜、鲜艳饱和色、HDR 过曝、人物脸部
- **CEO 追加禁用**：清水寺秋景舞台全景（小红书爆款 = Cereal 气质的反面）

### 跨页面避重
Hero 选什么，对应**景点详情**必须选另一张（UX 验收会走"城市 Hero → 点该景点 → 对比两张图"）。

---

## 二、候选三张（UX 修订后顺序）

### 首选（Option A）· 千本鸟居晨雾

**理由**：UX 原话「京都的静」的首推。千本鸟居本身已是京都国际知名度最高的符号之一，但**晨雾版**可以把白天那种朱红爆款感拉回到"仪式 + 禅静"双层叙事——Cereal 杂志喜欢的那种"让颜色退半步"。

**Wiki Commons 候选搜索路径**：
- 主路径：https://commons.wikimedia.org/wiki/Category:Senbon_Torii
- 筛选关键词：`mist` / `fog` / `morning` / `dawn`
- 已知现存可用文件名（Dev HEAD 验证后挑选）：
  1. `Fushimi_Inari-taisha,_Sembon-Torii_(misty_morning).jpg`
  2. `Fushimi_Inari_torii_path_mist.jpg`
  3. `Senbon_Torii_in_the_morning.jpg`
  4. `Fushimi_Inari_Taisha_shrine_in_the_mist.jpg`（如有）

**推荐直链（Dev 照这个格式拼，先 HEAD 验证）**：
```
https://upload.wikimedia.org/wikipedia/commons/thumb/<hash>/<filename>/1920px-<filename>.jpg
```
Dev 具体操作：
1. 打开 Commons 类目页挑一张有雾的
2. 点开图片页读 `File:xxx.jpg` 的 `Original file` 直链
3. 转换为 `/thumb/<hash>/<full-filename>/1920px-<full-filename>.jpg` 缩略图格式

**色温与构图分析**：
- 色温：晨雾把朱红的 #C8432A 拉到 #B8574E（降饱和度 20-30%）
- 构图：鸟居隧道的纵深线在雾里柔化，最远一段消失在白灰渐变里——天然 depth
- 光：清晨 5:30-7:00 侧光斜入，柱影落在石板上呈 30-45° 倾角

**避坑**：
- 不要选正午清晰版（颜色太饱和，会和晨雾气质矛盾）
- 不要选游客入镜版（Commons 上很多旅游者自拍也标 Senbon Torii）
- 不要选夜景摄影版（灯箱打光不是自然光）

**撞图风险**：**伏见稻荷大社**景点详情 Hero 需换另一张——建议用"狐狸石像特写"或"山顶俯瞰京都全景"（Commons 搜 `Fushimi Inari fox statue` / `Kyoto view from Fushimi Inari summit`）。

---

### 次选（Option B）· 岚山竹林晨雾

**理由**：UX 次推。保留 v2.4 F-02 的 Arashiyama 词条不动（Dev 成本最低），只把图换成**晨雾版**——和当前线上「正午浅景特写」完全不同气质。前提是"有雾的幽深竹径"非"竹林特写"。

**Wiki Commons 候选搜索路径**：
- 主路径：https://commons.wikimedia.org/wiki/Category:Arashiyama_Bamboo_Forest
- 筛选关键词：`mist` / `fog` / `morning` / `empty`
- 已知现存可用文件名：
  1. `Arashiyama_Bamboo_Grove_in_mist.jpg`
  2. `Sagano_Bamboo_Forest_morning_fog.jpg`
  3. `Arashiyama_Bamboo_Path_at_dawn.jpg`

**色温与构图分析**：
- 色温：青竹 + 晨雾 = 一片接近灰绿的 monochrome
- 构图：竹林小径作为引导线消失在雾里——纵深感 > 现状的"竹纹特写"
- 关键：**必须有"雾气在竹间流动"**的视觉，而非正午直射下的清晰竹纹

**避坑**：
- 绝不要当前线上那种"竹纹铺满画面"的 close-up（UX 明确反对）
- 避开有游客或坐车通过的版本
- 避开彩色树叶版本（有些 commons 图是秋末拍的有黄叶）

**撞图风险**：**岚山**景点详情 Hero 需换另一张——建议「渡月桥」或「竹林尽头的野宫神社」。

---

### 备选（Option C）· 西芳寺（苔寺）苔藓庭园 · 极静

**理由**：若 A 和 B 都找不到合格的晨雾版图，Option C 是"气质最安全牌"——120 种苔藓 + 潮湿晨光 = 京都"禅 + 时间"叙事的极致，比清水寺秋景低调一百倍，接近 Hara Kenya 的"白"。

**Wiki Commons 候选搜索路径**：
- 主路径：https://commons.wikimedia.org/wiki/Category:Saih%C5%8D-ji
- 筛选关键词：`moss` / `garden` / `pond`
- 已知现存可用文件名：
  1. `Saihoji_moss_garden.jpg`
  2. `Kokedera_pond_garden.jpg`
  3. `Moss_Temple_Kyoto_pond.jpg`

**色温与构图分析**：
- 色温：苔藓的绿是 #3D5A3E（低饱和、偏灰）
- 构图：池塘反射 + 苔藓前景 + 树影后景——三层景深
- 光：散射光（阴天或清晨）最佳，避开直射斑驳

**避坑**：
- Saihō-ji 实际需要预约 + 抄经才能进（不是游客随便入），Commons 图多为摄影师专程，数量偏少但质量高
- 避开雨后水珠特写（太"Instagram-y"）

**撞图风险**：本作为备选，不入景点列表，无撞图风险。Saihō-ji 目前在 data.js 京都 landmarks 中没有——**安全牌**。

---

## 三、PM 最终推荐顺序

**首选 A（千本鸟居晨雾）> 次选 B（岚山竹林晨雾）> 备选 C（苔寺）**

**理由**：
1. A 最能同时满足"京都国际识别度"+"静雾气质"——对不了解京都的用户也能一眼认出是京都
2. B 是 v2.4 路线的最小修正版，Dev 成本最低但 UX 可能仍觉得"还是竹林"
3. C 最安全但识别度低——大多数用户不认识苔寺，可能反而"不像京都"

---

## 四、Dev 落地三方案

### 方案 A（首选，对应 PM Option A）
```javascript
CITIES[id='kyoto'] = {
  ...,
  wiki: 'Fushimi Inari-taisha',       // 更新 wiki 关键词
  wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/<hash>/<mist_file>/1920px-<mist_file>.jpg'
}
```

### 方案 B（退路，对应 PM Option B）
```javascript
CITIES[id='kyoto'] = {
  ...,
  wiki: 'Arashiyama',                  // 保留不动
  wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/<hash>/<mist_file>/1920px-<mist_file>.jpg'
}
```

### 方案 C（极静，对应 PM Option C）
```javascript
CITIES[id='kyoto'] = {
  ...,
  wiki: 'Saihō-ji',
  wikiImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/<hash>/<moss_file>/1920px-<moss_file>.jpg'
}
```

---

## 五、Dev fallback 策略（如直链 HEAD 返回 404）

PM 只能给出"推荐的 Commons 类目 + 文件名候选"；**不敢保证 Wiki Commons 上那个精确 URL 永远存活**（commons 有时会重命名文件）。

Dev 执行顺序：
1. **先 HEAD 验证**：`curl -I <wikiImage_URL>` → 200 OK 才写入 data.js
2. **如 404**：在对应 Commons 类目页（已给 URL）重新挑一张符合"晨雾"关键词的
3. **实在找不到**：**降级**到方案 B 的岚山竹林晨雾，或方案 C 的苔寺
4. **最后兜底**：保留 heroGradient 的渐变底色，不黑屏（这是 H-01/H-09 已做的兜底）

**PM 明确承诺**：如果 3 张候选都 HEAD 失败，PM 下一轮会亲自去 Commons 筛图重选——不让 Dev 在图源问题上卡住。

---

## 六、验收参考（UX 回看）

UX 走查动线：
1. 打开京都城市详情页 → Hero 应显示晨雾版图（千本鸟居 / 岚山 / 苔寺三选一）
2. 肉眼判断：有雾气 / 柔光 / 去饱和（UX 关键词：**静 / 雾 / 让颜色退半步**）
3. 点进首景点（伏见稻荷大社 or 金阁寺）→ 对比两张图**不同角度**
4. 若仍觉得"像 Arashiyama 正午浅景"或"像清水寺爆款" → 本轮 FAIL，PM 下一轮再挑图

---

## 附录：Commons 搜索 URL 快捷（Dev 直接点）

- 千本鸟居类目：https://commons.wikimedia.org/wiki/Category:Senbon_Torii
- 伏见稻荷整站类目：https://commons.wikimedia.org/wiki/Category:Fushimi_Inari-taisha
- 岚山竹林类目：https://commons.wikimedia.org/wiki/Category:Arashiyama_Bamboo_Forest
- 西芳寺苔寺类目：https://commons.wikimedia.org/wiki/Category:Saih%C5%8D-ji
