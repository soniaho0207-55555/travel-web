#!/usr/bin/env python3
"""v5 全局图小样预览 · 8 张 overview + 对应 v4 细节图对比。"""
import os

# v5 全局图（新采 · index 0 = 全局）+ v4 细节图（index 1 = 细节）
PAIRS = [
    {
        "n": 1, "landmark": "圣索菲亚",
        "spot": "许愿柱",
        "overview": "hagia-1-wishstone-overview.jpg",
        "detail": "hagia-1-wishstone.jpg",
        "source": "Gaspare Fossati - Vue générale de la grande nef (1852)",
        "license": "Public Domain (作者 1809-1883)",
        "判据": "位置不明（二楼西北角凹洞，用户要先看全景建立大殿尺度感）",
        "note": "第一轮：轻裁 + 无锚点圈。如需指向'二楼西北角'可第二轮加圈。",
    },
    {
        "n": 2, "landmark": "圣索菲亚",
        "spot": "Dandolo 墓碑",
        "overview": "hagia-2-dandolo-overview.jpg",
        "detail": "hagia-2-dandolo.jpg",
        "source": "Central nave - Hagia Sophia (8291196158) Wikimedia",
        "license": "CC BY-SA 2.0",
        "判据": "位置不明（二楼南廊地板）",
        "note": "从二楼南廊俯视中殿全景。底部游客剪影是'现场活力'元素；OpenCV 检测 2 face (48/58px) = 远景，v5 建议保留。",
    },
    {
        "n": 3, "landmark": "圣索菲亚",
        "spot": "书法圆盘",
        "overview": "hagia-3-calligraphy-overview.jpg",
        "detail": "hagia-3-calligraphy.jpg",
        "source": "Hagia Sophia Interior Panorama (360° 拼接)",
        "license": "CC BY-SA 3.0",
        "判据": "数量级反直觉（8 块 × 7.5m）",
        "note": "panorama 居中裁取主穹顶 + 4 圆盘。和 v4 slides A5 同源，但裁剪位置不同（A5 是四边收窄避人影，此图居中突出圆盘）。",
    },
    {
        "n": 5, "landmark": "蓝色清真寺",
        "spot": "蓝瓷砖",
        "overview": "bluemosque-2-tiles-overview.jpg",
        "detail": "bluemosque-2-tiles.jpg",
        "source": "Domes - Blue Mosque (8395054221)",
        "license": "CC BY-SA 2.0",
        "判据": "数量级反直觉（21043 块 × 54 种图案）",
        "note": "主殿仰视穹顶全貌，4 半穹顶 + 中央主穹顶清楚，可见吊灯索道。",
    },
    {
        "n": 6, "landmark": "蓝色清真寺",
        "spot": "鸵鸟蛋吊灯",
        "overview": "bluemosque-3-ostrich-overview.jpg",
        "detail": "bluemosque-3-ostrich.jpg",
        "source": "Interior of Sultan Ahmed Mosque (Ank Kumar) 06",
        "license": "CC BY-SA 4.0",
        "判据": "位置不明（吊灯哪个节点）",
        "note": "吊灯阵列全貌 + 地毯全景。**蛋位待第二轮标红圈**（原图看不清具体节点，我需要 CEO 指一下或找更近的图）。",
    },
    {
        "n": 7, "landmark": "大巴扎",
        "spot": "İç Bedesten",
        "overview": "bazaar-1-bedesten-overview.jpg",
        "detail": "bazaar-1-bedesten.jpg",
        "source": "SPRY 1895 Plan zoom-in（复用 v4 map 放大 15 顶位）",
        "license": "Public Domain (1895)",
        "判据": "位置不明（集市中央）",
        "note": "v4 maps 图的 zoom-in 版本：放大 SPRY 1895 平面图中 İç Bedesten 的 15 顶位置。**设计有争议**：这张本质是平面图 zoom-in，不是'摄影全局图'——对 '走进空间' 的效果可能不如现代俯拍。**备选**：找现代俯拍 Bedesten 内部。",
    },
    {
        "n": 8, "landmark": "大巴扎",
        "spot": "Zincirli Han",
        "overview": "bazaar-2-zincirli-overview.jpg",
        "detail": "bazaar-2-zincirli.jpg",
        "source": "Zincirli Han (Wikimedia · 冬季俯拍 · 2020s)",
        "license": "CC BY-SA 4.0",
        "判据": "位置不明 + 游客 99% 绕过",
        "note": "冬季无叶树 + 历史褪色氛围顶级。右下角 1 face (66px) 是远景人影。**备选有 zincirli-2025-01（夏季 · 有绿叶 + 黑猫）**，CEO 可二选一。",
    },
    {
        "n": 9, "landmark": "大巴扎",
        "spot": "金饰主干道 (Kalpakcılar)",
        "overview": "bazaar-3-kalpakcilar-overview.jpg",
        "detail": "bazaar-3-kalpakcilar.jpg",
        "source": "Sebah 1880s - Intérieur du Grand Bazar",
        "license": "Public Domain (Pascal Sébah 1823-1886)",
        "判据": "位置不明（街道延伸感）",
        "note": "19 世纪黑白历史照片。OpenCV 检出 6 face 但**均为 1880s 人物 · 去世 > 100 年 · 无现代肖像权**（同 v4 '1680 古画人物装饰'类别）。完美符合 §P-07-E'黑白历史图'硬规。**备选有 Preziosi 水彩画**（更艺术但更广）。",
    },
]

BASE = "assets/landmarks-exp-v3.5/onsite-spots"

cards_html = ""
for p in PAIRS:
    cards_html += f"""
    <div class="pair">
      <div class="pair-head">
        <span class="num">#{p['n']}</span>
        <span class="landmark">{p['landmark']}</span>
        <span class="spot">{p['spot']}</span>
      </div>
      <div class="imgs">
        <div class="img-col">
          <div class="lbl"><strong>[0] 全局图（v5 新采）</strong></div>
          <a href="{BASE}/{p['overview']}" target="_blank">
            <img src="{BASE}/{p['overview']}" loading="lazy" />
          </a>
          <div class="src">{p['source']}<br><small>{p['license']}</small></div>
        </div>
        <div class="img-col">
          <div class="lbl">[1] 细节图（v4 已有）</div>
          <a href="{BASE}/{p['detail']}" target="_blank">
            <img src="{BASE}/{p['detail']}" loading="lazy" />
          </a>
          <div class="src">(v4 既有，本轮不动)</div>
        </div>
      </div>
      <div class="ann">
        <div><strong>双图判据：</strong>{p['判据']}</div>
        <div><strong>PM 注：</strong>{p['note']}</div>
      </div>
    </div>
    """

html = f"""<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="UTF-8">
<title>v3.5-exp v5 · 8 张全局图 CEO 小样预览</title>
<style>
  body {{ font-family: -apple-system, PingFang SC, sans-serif; background: #f5f2ed; margin: 0; padding: 24px; color: #1a1a1a; }}
  h1 {{ font-size: 22px; font-weight: 600; margin: 0 0 8px; }}
  .intro {{ font-size: 13px; color: #444; margin-bottom: 24px; max-width: 1000px; line-height: 1.7; background: #fff; padding: 16px; border-radius: 8px; border-left: 3px solid #B53A1F; }}
  .intro strong {{ color: #B53A1F; }}
  .pair {{ background: #fff; border-radius: 8px; margin-bottom: 20px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.06); }}
  .pair-head {{ display: flex; align-items: baseline; gap: 12px; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #eee; }}
  .pair-head .num {{ font-size: 24px; font-weight: 700; color: #B53A1F; }}
  .pair-head .landmark {{ font-size: 13px; color: #999; }}
  .pair-head .spot {{ font-size: 16px; font-weight: 600; }}
  .imgs {{ display: grid; grid-template-columns: 2fr 1fr; gap: 16px; }}
  .img-col img {{ width: 100%; display: block; border-radius: 4px; }}
  .img-col .lbl {{ font-size: 12px; color: #666; margin-bottom: 6px; }}
  .img-col .lbl strong {{ color: #B53A1F; }}
  .img-col .src {{ font-size: 11px; color: #888; margin-top: 6px; font-family: monospace; line-height: 1.4; }}
  .ann {{ margin-top: 12px; padding: 10px 12px; background: #f9f6f0; border-radius: 6px; font-size: 12px; line-height: 1.6; }}
  .ann > div {{ margin-bottom: 4px; }}
</style></head>
<body>
  <h1>v3.5-exp v5 · 8 张全局图 CEO 小样预览 · 第一轮</h1>
  <div class="intro">
    <strong>PM 本轮做的事</strong>：按 PRD §P-11 v5 重采清单采 8 张全局图（9 spots 中 6 塔不需要）。<br>
    <strong>工具链</strong>：Wikimedia Commons → <code>fetch-wikimedia.sh</code> → <code>annotate.py</code>（裁剪 + resize 1600w + 底部文字条）→ <code>scan-faces.py</code> 合规 → 本 HTML 小样。<br>
    <strong>合规自查</strong>：零真人正脸硬规 —— 3 张 Public Domain 历史画/照（Fossati 1852 / SPRY 1895 / Sebah 1880s）里的人物为艺术/档案元素，**去世 > 100 年无现代肖像权**；现代照片的远景剪影（50-65px）不算清晰正脸。<br>
    <strong>本轮 8/8 有候选</strong>。CEO review 关注：① 视角是否"走进空间"不是明信片；② 双图对比后"细节图的位置是否被全局图建立了"；③ 看到不对劲的我再第二轮修。<br>
    <strong>每张图点击放大看原尺寸</strong>。
  </div>
  {cards_html}
</body></html>"""

with open("preview-v5-overview.html", "w") as f:
    f.write(html)
print(f"Wrote preview-v5-overview.html · {len(PAIRS)} pairs (16 images)")
