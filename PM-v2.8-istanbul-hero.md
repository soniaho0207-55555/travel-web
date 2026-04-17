# PM v2.8 · J-01 伊斯坦布尔 Hero 候选图

> **对应 PRD**：附录 J · J-01 · P0 | 首页伊斯坦布尔 Hero 换图（CEO-P0-01）
> **反馈原文**：CEO "打开首页就是伊斯坦布尔，但是选的首页图太难看了"
> **核心需求**：图必须是"两洲帝都"气质——穹顶、宣礼塔、金色光线，不是现代天际线

---

## 一、3 候选图

### 候选 1 · 圣索菲亚日落剪影 (**首选**)

- **Wiki Commons 页面**：https://commons.wikimedia.org/wiki/File:Hagia_Sophia_Mars_2013.jpg
- **直链 URL**：https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Hagia_Sophia_Mars_2013.jpg/1920px-Hagia_Sophia_Mars_2013.jpg
- **许可证**：CC BY-SA 3.0（Arild Vagen）
- **分辨率**：原图 4752x3168 px，thumb 1920px 宽边满足要求

**色温/构图分析**：
- 色温偏暖（日落前黄金时段），穹顶与四座宣礼塔剪影清晰
- 构图：中央对称，穹顶占画面上 1/3，前景有公园绿带做层次
- 天空从金黄过渡到淡蓝，不是过曝 HDR

**气质理由**：
- 圣索菲亚是伊斯坦布尔的文明身份证——一千年教堂、五百年清真寺、现在的第三种身份
- 穹顶+宣礼塔的组合一张图讲完拜占庭+奥斯曼两个帝国，与 PRD hook "横跨两洲，拜占庭与奥斯曼的帝国交替" 完全对齐
- Cereal/Kinfolk 级构图：不是旅游明信片、不是 HDR 合成，是自然光下的建筑肖像
- 与景点详情页 Hero（圣索菲亚内饰穹顶）不撞——首页用外观日落，详情页用内饰光影

**避重检查**：
- 列表卡 wikiImage = Bosphorus Bridge 夜景 --> 不撞
- 景点详情页 Hero = wiki API 取圣索菲亚内饰 --> 不撞（外观 vs 内饰）

---

### 候选 2 · 博斯普鲁斯海峡黄昏全景（次选）

- **Wiki Commons 页面**：https://commons.wikimedia.org/wiki/File:Istanbul_panorama_and_skyline.jpg
- **直链 URL**：https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Istanbul_panorama_and_skyline.jpg/1920px-Istanbul_panorama_and_skyline.jpg
- **许可证**：CC BY-SA 4.0（Ben Morlok）
- **分辨率**：原图 6000x2413 px，宽幅全景

**色温/构图分析**：
- 暖色黄昏，海峡水面反射金光
- 全景宽幅：两岸天际线+水面渡轮+远处穹顶群
- "一座城市骑在两片大陆上"的地理叙事

**气质理由**：
- 海峡是伊斯坦布尔独一无二的地理身份——全世界没有第二座城市横跨两大洲
- 黄昏渡轮+两岸灯火是"活着的城市"感，不是博物馆感
- 风险：构图偏"城市天际线"而非"帝国遗迹"，如果 hero 文案是帝国叙事可能略不搭

**避重检查**：
- 列表卡 wikiImage = Bosphorus Bridge 特写夜景 --> 视角完全不同（全景 vs 桥梁特写），可用但需注意区分度

---

### 候选 3 · 蓝色清真寺+圣索菲亚双穹顶天际线（备选）

- **Wiki Commons 页面**：https://commons.wikimedia.org/wiki/File:Istanbul_-_Pair_of_Mosques.jpg
- **直链 URL**：https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Istanbul_-_Pair_of_Mosques.jpg/1920px-Istanbul_-_Pair_of_Mosques.jpg
- **许可证**：CC BY 2.0（Jorge Franganillo）
- **分辨率**：原图 5472x3648 px

**色温/构图分析**：
- 偏中性色温（阴天或晨间），双穹顶清晰可辨
- 构图：两座地标同框，辨识度最高
- 天际线背景可能包含少量现代建筑

**气质理由**：
- 辨识度最高——任何人看一眼就知道是伊斯坦布尔
- 双穹顶对话本身就是"两个帝国同框"的叙事
- 风险：经典明信片构图创意分最低，且阴天色温缺少 Cereal 级的光感

---

## 二、首选标注

**首选：候选 1 · 圣索菲亚日落剪影**

理由排序：
1. 气质最对——"两洲帝都"不是地理标注而是帝国叙事，穹顶剪影是最直接的视觉符号
2. 色温最好——日落金色与 PRD heroGradient（`#1a0a2a → #0d0d1e → #1a2a0a`）的暗色调叠加效果最和谐
3. 与其他图位不撞——列表卡用桥、详情页用内饰、首页用外观日落，三层各得其所
4. CC BY-SA 3.0 允许商用+自托管，署名即可

如果候选 1 在真机实测中穹顶过暗（gradient 叠加后细节消失），退回候选 3 双穹顶天际线作为安全方案。

---

## 三、Dev 落地建议

### data.js 修改

```javascript
// CITIES[istanbul] 新增 heroImage 字段（J-04 自托管优先级最高）
{
  id: 'istanbul',
  // ...existing fields...
  heroImage: 'images/heroes/istanbul-hagia-sophia-sunset.jpg',
  // wiki 和 wikiImage 保留不动，作为其他位置的兜底
}
```

### 自托管路径

```
images/
  heroes/
    istanbul-hagia-sophia-sunset.jpg   ← 候选 1 下载后存放
```

### 图片处理建议

- 从 Commons 下载原图（4752x3168）
- 压缩为 1920px 宽边 JPEG，quality 85%（预估 300-500KB）
- 文件名：`istanbul-hagia-sophia-sunset.jpg`
- 署名：在 `PM-v2.8-image-sources.md` 统一记录（CC BY-SA 3.0 · Arild Vagen）

### 渲染优先级

Dev 在首页 Hero 轮播到伊斯坦布尔时：
1. 优先读 `heroImage`（自托管路径）
2. fallback 到 `wikiImage`（Bosphorus Bridge 夜景——不理想但能显示）
3. 最后 fallback 到 `wiki` API（蓝色清真寺——不可控）

---

## 四、Fallback 策略

| 场景 | 方案 |
|------|------|
| 首选图自托管成功 | heroImage 生效，其他不用管 |
| 首选图加载失败 | 退回 wikiImage（Bosphorus Bridge 夜景），可用但不理想 |
| wikiImage 也失败 | 退回 wiki API（蓝色清真寺），不可控但有图 |
| 全部失败 | heroGradient 纯色兜底（已有） |

---

## 五、验收对照

- [ ] 首页 Hero 轮播到伊斯坦布尔时，显示圣索菲亚穹顶+宣礼塔日落剪影
- [ ] 肉眼可见"两洲帝都"气质（帝国 / 穹顶 / 金色光线）
- [ ] 图片分辨率 >= 1600px，手机屏幕无糊感
- [ ] 与列表卡 wikiImage（Bosphorus Bridge）不撞图
- [ ] QA 真机 iOS + Android 加载成功
