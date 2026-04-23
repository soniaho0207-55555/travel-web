#!/usr/bin/env python3
"""
v3.5-exp 伊斯坦布尔 25 图 manifest v2
修正：
1. 人脸问题：6 张换源图 + 4 张裁切避 bbox
2. maps：替换 map-hagia 源图为纯平面图 Grundriss；精调 3 张 maps 红圈坐标
3. bluemosque-3-ostrich：加红圈+文字指向吊灯
4. 9 spots 文字条简化为 "① title" 短格式
"""
import json, os

RAW = "assets/landmarks-exp-v3.5/raw"
SPOTS_DIR = "assets/landmarks-exp-v3.5/onsite-spots"
SLIDES_DIR = "assets/landmarks-exp-v3.5/slides"
MAPS_DIR = "assets/landmarks-exp-v3.5/maps"

items = []

# ──────────────────────────────────────────────────────────────
# 9 × onsite_spots：短文字条 "① title"
# ──────────────────────────────────────────────────────────────

# 圣索菲亚
items.append({
    "src": f"{RAW}/hagia-wishstone-v2.jpg",
    "dst": f"{SPOTS_DIR}/hagia-1-wishstone.jpg",
    "crop_pct": [12, 10, 65, 85],  # 更紧裁：(12,10,65,85) 彻底去小女孩任何部分，只保留金色凹洞盘+柱面
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 90, "text": "① 许愿柱", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})
items.append({
    "src": f"{RAW}/hagia-dandolo.jpg",  # 纯石板刻字，Haar 误报，无真人
    "dst": f"{SPOTS_DIR}/hagia-2-dandolo.jpg",
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 92, "text": "② Dandolo 墓碑", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})
items.append({
    "src": f"{RAW}/hagia-calligraphy.jpg",
    "dst": f"{SPOTS_DIR}/hagia-3-calligraphy.jpg",
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 92, "text": "③ 书法圆盘", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})

# 蓝色清真寺
items.append({
    "src": f"{RAW}/bluemosque-exterior.jpg",
    "dst": f"{SPOTS_DIR}/bluemosque-1-minarets.jpg",
    "crop_pct": [0, 0, 100, 85],  # 裁下 15% 避开可能有的远景小脸
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 92, "text": "① 6 根宣礼塔", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})
items.append({
    "src": f"{RAW}/bluemosque-tiles.jpg",
    "dst": f"{SPOTS_DIR}/bluemosque-2-tiles.jpg",
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 92, "text": "② 蓝瓷砖", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})
items.append({
    "src": f"{RAW}/bluemosque-interior.jpg",
    "dst": f"{SPOTS_DIR}/bluemosque-3-ostrich.jpg",
    "crop_pct": [0, 0, 100, 75],
    "resize": [1200, None],
    # v3 P0-3：UX + Demand 双命中 overlay 过重；删箭头+'鸵鸟蛋位置'文字，保留红圈（指吊灯上方）+ 底部文字条
    "overlays": [
        {"type": "circle", "cx_pct": 52, "cy_pct": 50, "radius_pct": 8, "color": "#B53A1F", "width": 5},
        {"type": "text", "x_pct": 3, "y_pct": 92, "text": "③ 吊灯鸵鸟蛋", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}
    ]
})

# 大巴扎
items.append({
    "src": f"{RAW}/bazaar-alt.jpg",  # 换：Kapali Carsi Sep08 走廊穹顶
    "dst": f"{SPOTS_DIR}/bazaar-1-bedesten.jpg",
    "crop_pct": [0, 0, 100, 50],  # 只留上 50% 拱顶装饰（底部是人群）
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 88, "text": "① İç Bedesten · 1461", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})
items.append({
    "src": f"{RAW}/bazaar-zincirli.jpg",
    "dst": f"{SPOTS_DIR}/bazaar-2-zincirli.jpg",
    "crop_pct": [0, 0, 100, 55],  # 只留上 55% 拱廊庭院（底部是 3 个工人）
    "resize": [1200, None],
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 88, "text": "② Zincirli Han · 1708", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 24}]
})
items.append({
    "src": f"{RAW}/bazaar-gate.jpg",  # Nuruosmaniye 门（只有背影无正脸）
    "dst": f"{SPOTS_DIR}/bazaar-3-kalpakcilar.jpg",
    "crop_pct": [0, 0, 100, 55],  # 只留上 55% 门楣 KAPALIÇARŞI 字样
    "resize": [1200, None],
    # v3 P0-1：三方命中图文不对位，改文字条为 Nuruosmaniye · 进门右转 20 步
    "overlays": [{"type": "text", "x_pct": 3, "y_pct": 88, "text": "③ Nuruosmaniye · 右转 20 步", "color": "#FFFFFF", "bg": "#1A1A1AE6", "size": 22}]
})

# ──────────────────────────────────────────────────────────────
# 13 × slides：纯裁切 + resize
# ──────────────────────────────────────────────────────────────
# A 组（圣索菲亚 5 片）
items.append({"src": f"{RAW}/hagia-seraphim-all.jpg", "dst": f"{SLIDES_DIR}/hagia-A1-seraphim-all.jpg", "resize": [1200, None]})
items.append({"src": f"{RAW}/hagia-panorama.jpg",    "dst": f"{SLIDES_DIR}/hagia-A2-panorama-crop.jpg", "crop_pct": [20, 10, 80, 60], "resize": [1200, None]})
items.append({"src": f"{RAW}/hagia-seraphim-face.jpg", "dst": f"{SLIDES_DIR}/hagia-A3-seraphim-face.jpg", "crop_pct": [10, 10, 90, 70], "resize": [1200, None]})
items.append({"src": f"{RAW}/hagia-viking.jpg",      "dst": f"{SLIDES_DIR}/hagia-A4-viking.jpg",
              "crop_pct": [0, 0, 75, 100], "resize": [1200, None]})  # 裁左 75% 避开右上 80% 30% 的小脸
items.append({"src": f"{RAW}/hagia-panorama.jpg",    "dst": f"{SLIDES_DIR}/hagia-A5-panorama-full.jpg",
              "crop_pct": [50, 35, 100, 100], "resize": [1200, None]})  # v3 UX P0-6：换裁右下区避开与 A2 相同视角

# B 组（蓝清 4 片）
items.append({"src": f"{RAW}/bluemosque-carpet-v2.jpg", "dst": f"{SLIDES_DIR}/bluemosque-B1-carpet.jpg",
              "crop_pct": [0, 0, 93, 100], "resize": [1200, None]})  # 换图 + 裁右 93% 避开右侧一只手
items.append({"src": f"{RAW}/bluemosque-windows.jpg",   "dst": f"{SLIDES_DIR}/bluemosque-B2-windows.jpg", "crop_pct": [20, 10, 80, 60], "resize": [1200, None]})
items.append({"src": f"{RAW}/bluemosque-interior.jpg",  "dst": f"{SLIDES_DIR}/bluemosque-B3-entrance.jpg", "crop_pct": [0, 55, 55, 95], "resize": [1200, None]})  # 左下入口区避开正殿人
items.append({"src": f"{RAW}/bluemosque-interior.jpg",  "dst": f"{SLIDES_DIR}/bluemosque-B4-prayer.jpg", "crop_pct": [20, 5, 95, 60], "resize": [1200, None]})  # 上部穹顶+吊灯上方（无人）

# C 组（大巴扎 4 片）
items.append({"src": f"{RAW}/bazaar-boza-cup.jpg",     "dst": f"{SLIDES_DIR}/bazaar-C1-boza-cup.jpg", "crop_pct": [0, 20, 100, 70], "resize": [1200, None]})
items.append({"src": f"{RAW}/bazaar-boza-store.jpg",   "dst": f"{SLIDES_DIR}/bazaar-C2-boza-store.jpg",
              "crop_pct": [0, 45, 70, 100], "resize": [1200, None]})  # v3 UX P0-5：C2 改用 boza-store 左下货柜区（店员在右上 51/21，裁左下避开）
items.append({"src": f"{RAW}/bazaar-carpet-dye.jpg",   "dst": f"{SLIDES_DIR}/bazaar-C3-dye-yarn.jpg", "crop_pct": [0, 20, 100, 70], "resize": [1200, None]})
items.append({"src": f"{RAW}/bazaar-carpet-dye.jpg",   "dst": f"{SLIDES_DIR}/bazaar-C4-aged-fiber.jpg", "crop_pct": [20, 50, 80, 100], "resize": [1200, None]})

# ──────────────────────────────────────────────────────────────
# 3 × maps：纯平面图 + ① ② ③ 红圈（位置经 Read 视觉确认）
# ──────────────────────────────────────────────────────────────
items.append({
    "src": f"{RAW}/map-hagia-v2.jpg",  # Grundriss 纯平面图（单层 ground floor plan）
    "dst": f"{MAPS_DIR}/map-hagia-annotated.jpg",
    "resize": [1200, None],
    # v3 P0-2：Demand 质疑左右搞反 → 给 ① ② 加 "2F" 副标说明是二楼位置（Grundriss 是一楼平面图但 spots 在二楼），楼层信息比精确方位更有价值
    "overlays": [
        {"type": "outline_circle_number", "cx_pct": 72, "cy_pct": 20, "number": 1, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5, "sub_label": "2F"},
        {"type": "outline_circle_number", "cx_pct": 40, "cy_pct": 75, "number": 2, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5, "sub_label": "2F"},
        {"type": "outline_circle_number", "cx_pct": 45, "cy_pct": 48, "number": 3, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5, "sub_label": "1F"},
    ]
})
items.append({
    "src": f"{RAW}/map-bluemosque.jpg",  # 保留：Grelot 1680 立面+平面
    "dst": f"{MAPS_DIR}/map-bluemosque-annotated.jpg",
    "resize": [1200, None],
    "overlays": [
        # ① 6 塔外景 → 上部立面图（顶部可见 6 根宣礼塔）
        {"type": "outline_circle_number", "cx_pct": 50, "cy_pct": 22, "number": 1, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5},
        # ② 瓷砖天花板 → 底部右侧圆形平面的大穹顶中央 A
        {"type": "outline_circle_number", "cx_pct": 75, "cy_pct": 79, "number": 2, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5},
        # ③ 吊灯鸵鸟蛋 → 主殿上空（和 ② 同位置略偏）
        {"type": "outline_circle_number", "cx_pct": 70, "cy_pct": 73, "number": 3, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5},
    ]
})
items.append({
    "src": f"{RAW}/map-bazaar.jpg",  # 保留：1895 SPRY 平面图
    "dst": f"{MAPS_DIR}/map-bazaar-annotated.jpg",
    "resize": [1200, None],
    "overlays": [
        # ① İç Bedesten → "Jewel or Arms Bezestan" 图左中下
        {"type": "outline_circle_number", "cx_pct": 35, "cy_pct": 60, "number": 1, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5},
        # ② Zincirli Han → "Many small Khans" 东北区
        {"type": "outline_circle_number", "cx_pct": 60, "cy_pct": 35, "number": 2, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5},
        # ③ 金饰街 → "Drapers now Jewellers Khan" 右下 / Kalpakcilar 街 H 门附近
        {"type": "outline_circle_number", "cx_pct": 50, "cy_pct": 72, "number": 3, "color": "#B53A1F", "radius_px": 28, "font_size": 32, "stroke_width": 5},
    ]
})

out = "scripts/manifest-v3.5-exp.json"
with open(out, "w") as f:
    json.dump(items, f, ensure_ascii=False, indent=2)
print(f"Wrote {len(items)} items to {out}")
print(f"  9 spots + 13 slides + 3 maps = {9+13+3}")
