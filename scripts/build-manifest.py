#!/usr/bin/env python3
"""
生成 v3.5-exp 伊斯坦布尔 25 张图的 PIL 处理 manifest。
输出：scripts/manifest-v3.5-exp.json
"""
import json, os

RAW = "assets/landmarks-exp-v3.5/raw"
SPOTS_DIR = "assets/landmarks-exp-v3.5/onsite-spots"
SLIDES_DIR = "assets/landmarks-exp-v3.5/slides"
MAPS_DIR = "assets/landmarks-exp-v3.5/maps"

# 9 条 onsite_spots：底部黑色半透条 + "景点 · 编号 · title"
# 设计：图底 10% 区域压黑色透明层（用合成做不到半透，改用小字叠加）
SPOTS = [
    ("hagia-wishstone", 1, "hagia-1-wishstone", "圣索菲亚 · ① 许愿柱 · 二楼西北角"),
    ("hagia-dandolo", 2, "hagia-2-dandolo", "圣索菲亚 · ② Dandolo 墓碑 · 1204"),
    ("hagia-calligraphy", 3, "hagia-3-calligraphy", "圣索菲亚 · ③ 书法圆盘 · 每块 7.5 米"),
    ("bluemosque-exterior", 1, "bluemosque-1-minarets", "蓝色清真寺 · ① 6 根宣礼塔 · altın vs altı"),
    ("bluemosque-tiles", 2, "bluemosque-2-tiles", "蓝色清真寺 · ② 21,043 块 · 54 种郁金香"),
    ("bluemosque-interior", 3, "bluemosque-3-ostrich", "蓝色清真寺 · ③ 吊灯里的鸵鸟蛋"),
    ("bazaar-corridor", 1, "bazaar-1-bedesten", "大巴扎 · ① İç Bedesten · 1461"),
    ("bazaar-zincirli", 2, "bazaar-2-zincirli", "大巴扎 · ② Zincirli Han 庭院 · 1708"),
    ("bazaar-general", 3, "bazaar-3-kalpakcilar", "大巴扎 · ③ 金饰主干道 · Beyazıt 门"),
]

# 13 张 slides：纯裁切 + resize，不加标注（caption 在 HTML 层）
SLIDES = [
    # A 组（圣索菲亚 5 片）
    ("hagia-seraphim-all", "hagia-A1-seraphim-all", None),
    ("hagia-panorama", "hagia-A2-panorama-crop", (20, 10, 80, 60)),  # 穹顶裁切
    ("hagia-seraphim-face", "hagia-A3-seraphim-face", (10, 10, 90, 70)),  # 面部裁切
    ("hagia-viking", "hagia-A4-viking", None),
    ("hagia-panorama", "hagia-A5-panorama-full", None),
    # B 组（蓝清 4 片）
    ("bluemosque-carpet", "bluemosque-B1-carpet", None),
    ("bluemosque-windows", "bluemosque-B2-windows", (20, 10, 80, 60)),  # 窗户部分
    ("bluemosque-interior", "bluemosque-B3-entrance", (0, 60, 60, 100)),  # 下部入口
    ("bluemosque-interior", "bluemosque-B4-prayer", (30, 30, 100, 100)),  # 正殿
    # C 组（大巴扎 4 片）
    ("bazaar-boza-cup", "bazaar-C1-boza-cup", (0, 20, 100, 70)),
    ("bazaar-boza-store", "bazaar-C2-boza-store", None),
    ("bazaar-carpet-dye", "bazaar-C3-dye-yarn", (0, 20, 100, 70)),
    ("bazaar-carpet-dye", "bazaar-C4-aged-fiber", (20, 50, 80, 100)),
]

# 3 张 maps：底图 + ① ② ③ 红圈
# 圆圈位置（百分比），后续 CEO 看小样反馈再精调
MAPS = [
    # Hagia Sophia Floor Plan（5184x3456 但平面图方向是横的：入口南/narthex 西 / apse 东）
    ("map-hagia", "map-hagia-annotated", [
        # ① 许愿柱 二楼西北角（西南角平面图里）
        {"cx_pct": 28, "cy_pct": 32, "n": 1},
        # ② Dandolo 墓碑 二楼南廊（南边）
        {"cx_pct": 55, "cy_pct": 62, "n": 2},
        # ③ 书法圆盘 中殿上空（正中央）
        {"cx_pct": 50, "cy_pct": 45, "n": 3},
    ]),
    # Blue Mosque 1680 平面图（1004x1500，竖版）
    ("map-bluemosque", "map-bluemosque-annotated", [
        # ① 6 塔外景（四角 + 中央轴线外 2 塔 —— 简化为图顶部）
        {"cx_pct": 50, "cy_pct": 15, "n": 1},
        # ② 蓝瓷砖天花板（正中央）
        {"cx_pct": 50, "cy_pct": 52, "n": 2},
        # ③ 吊灯鸵鸟蛋（主殿上空 —— 和 ② 靠近）
        {"cx_pct": 42, "cy_pct": 45, "n": 3},
    ]),
    # Grand Bazaar 1895 平面图（1469x1775）
    ("map-bazaar", "map-bazaar-annotated", [
        # ① İç Bedesten 集市几何中心
        {"cx_pct": 50, "cy_pct": 50, "n": 1},
        # ② Zincirli Han 东北出口附近
        {"cx_pct": 72, "cy_pct": 30, "n": 2},
        # ③ 金饰街 Beyazıt 门南部
        {"cx_pct": 40, "cy_pct": 75, "n": 3},
    ]),
]

items = []

# 9 spots：底部文字条
for src_base, _n, dst_base, label in SPOTS:
    items.append({
        "src": f"{RAW}/{src_base}.jpg",
        "dst": f"{SPOTS_DIR}/{dst_base}.jpg",
        "resize": [1200, None],
        "overlays": [
            # 黑色文字条（大背景块）
            {
                "type": "text",
                "x_pct": 3, "y_pct": 92,
                "text": label,
                "color": "#FFFFFF",
                "bg": "#1A1A1AE6",  # 90% 不透明黑
                "size": 22
            }
        ]
    })

# 13 slides：纯处理
for src_base, dst_base, crop in SLIDES:
    item = {
        "src": f"{RAW}/{src_base}.jpg",
        "dst": f"{SLIDES_DIR}/{dst_base}.jpg",
        "resize": [1200, None],
    }
    if crop:
        item["crop_pct"] = list(crop)
    items.append(item)

# 3 maps：红圈 + 数字
for src_base, dst_base, circles in MAPS:
    overlays = []
    for c in circles:
        overlays.append({
            "type": "circle_number",
            "cx_pct": c["cx_pct"],
            "cy_pct": c["cy_pct"],
            "radius_px": 32,
            "number": c["n"],
            "color": "#E34B2C",
            "font_size": 38,
        })
    items.append({
        "src": f"{RAW}/{src_base}.jpg",
        "dst": f"{MAPS_DIR}/{dst_base}.jpg",
        "resize": [1200, None],
        "overlays": overlays,
    })

out = "scripts/manifest-v3.5-exp.json"
with open(out, "w") as f:
    json.dump(items, f, ensure_ascii=False, indent=2)
print(f"Wrote {len(items)} items to {out}")
