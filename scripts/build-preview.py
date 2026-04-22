#!/usr/bin/env python3
"""生成 CEO 一屏预览 HTML。"""
import os, json

# 分组
SPOTS = sorted(os.listdir("assets/landmarks-exp-v3.5/onsite-spots"))
SLIDES = sorted(os.listdir("assets/landmarks-exp-v3.5/slides"))
MAPS = sorted(os.listdir("assets/landmarks-exp-v3.5/maps"))

SPOT_CAPTIONS = {
    "hagia-1-wishstone": "#1 塞拇指转一圈 · 许愿柱凹洞",
    "hagia-2-dandolo": "#2 踩在毁它的人之上 · Dandolo 刻字",
    "hagia-3-calligraphy": "#3 抬头看 · 8 块书法圆盘 7.5m",
    "bluemosque-1-minarets": "#1 数塔 · 6 根宣礼塔（altın/altı 误听）",
    "bluemosque-2-tiles": "#2 推门抬头 · 21043 块蓝瓷砖压下来",
    "bluemosque-3-ostrich": "#3 仰头找蛋 · 吊灯间鸵鸟蛋（红圈指处）",
    "bazaar-1-bedesten": "#1 找拱顶 · İç Bedesten 1461 最老",
    "bazaar-2-zincirli": "#2 推门进庭院 · Zincirli Han 1708",
    "bazaar-3-kalpakcilar": "#3 进门右转 20 步 · Nuruosmaniye → Kalpakcılar",
}

SLIDE_CAPTIONS = {
    "hagia-A1-seraphim-all": "A1 · 穹顶四角撒拉弗天使 (26 字 caption)",
    "hagia-A2-panorama-crop": "A2 · 灰泥覆盖 450 年 (28 字)",
    "hagia-A3-seraphim-face": "A3 · 2009 西北面揭示 (28 字)",
    "hagia-A4-viking": "A4 · 维京涂鸦 Halfdan 来过 (34 字)",
    "hagia-A5-panorama-full": "A5 · 大厅安静长曝 (14 字)",
    "bluemosque-B1-carpet": "B1 · 脚踩地毯两温度交接 (30 字)",
    "bluemosque-B2-windows": "B2 · 260 扇窗蓝光 (22 字)",
    "bluemosque-B3-entrance": "B3 · 木鞋架入口 (27 字)",
    "bluemosque-B4-prayer": "B4 · 400 年没停过礼拜 (17 字)",
    "bazaar-C1-boza-cup": "C1 · Vefa Bozacısı 粉色泡沫 (30 字)",
    "bazaar-C2-boza-store": "C2 · 1876 年第五代传人 (25 字)",
    "bazaar-C3-dye-yarn": "C3 · 天然染料石榴蓝草胡桃 (27 字)",
    "bazaar-C4-aged-fiber": "C4 · 时间旧化的老纤维 (23 字)",
}

MAP_CAPTIONS = {
    "map-hagia-annotated": "找这 3 处 · ① 许愿柱 2F · ② Dandolo 墓碑 2F · ③ 书法圆盘 1F（v3 描边空心环）",
    "map-bluemosque-annotated": "数 6 塔 + 找穹顶 · ① 立面 6 塔 · ② 蓝瓷砖穹顶 · ③ 吊灯鸵鸟蛋（v3 空心环）",
    "map-bazaar-annotated": "按编号走 · ① İç Bedesten 最老 · ② Zincirli 庭院 · ③ 金饰街（v3 空心环）",
}

def render_section(title, folder, files, captions):
    html = f'<h2 class="sec">{title} · {len(files)} 张</h2><div class="grid">'
    for f in files:
        key = os.path.splitext(f)[0]
        caption = captions.get(key, key)
        html += f'''
        <div class="card">
          <a href="{folder}/{f}" target="_blank">
            <img src="{folder}/{f}" loading="lazy" />
          </a>
          <div class="cap">{caption}</div>
          <div class="meta">{f}</div>
        </div>'''
    html += '</div>'
    return html

html = f"""<!DOCTYPE html>
<html lang="zh-CN"><head>
<meta charset="UTF-8">
<title>v3.5-exp 伊斯坦布尔 25 图 CEO 小样预览</title>
<style>
  body {{ font-family: -apple-system, PingFang SC, sans-serif; background: #f5f2ed; margin: 0; padding: 24px; color: #1a1a1a; }}
  h1 {{ font-size: 22px; font-weight: 600; margin: 0 0 8px; }}
  .intro {{ font-size: 13px; color: #666; margin-bottom: 24px; max-width: 900px; line-height: 1.7; }}
  h2.sec {{ font-size: 18px; margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid #d4c8b3; color: #3d2f1c; }}
  .grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }}
  .card {{ background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.08); }}
  .card img {{ width: 100%; height: 160px; object-fit: cover; display: block; }}
  .card a {{ display: block; }}
  .cap {{ padding: 8px 10px 2px; font-size: 13px; font-weight: 500; line-height: 1.4; }}
  .meta {{ padding: 2px 10px 10px; font-size: 10px; color: #999; font-family: monospace; }}
</style></head>
<body>
  <h1>v3.5-exp 伊斯坦布尔 25 图 · CEO 小样预览 <span style="color:#B53A1F;font-weight:400;font-size:14px">v3 · 三方审图 P0 全修</span></h1>
  <div class="intro">
    <strong>v3 改动</strong>（按 Taste 8.5 / Demand 6.5 / UX 6.8 三方审图 P0 + 建议）：<br>
    ① <strong>bazaar-3 图文对位</strong>（3 方一致 P0）：改 PRD body "从 Beyazıt 门" → "Nuruosmaniye 门进右转 20 步"，图保留（P-04-C #3）<br>
    ② <strong>maps 红圈改描边空心环</strong>（UX P0）：实心盘 → 空心环去 OTA badge DNA；颜色 #E34B2C → #B53A1F 更贴 LP 严肃索引色（taste P2 采纳）<br>
    ③ <strong>bluemosque-3 删 overlay</strong>（Demand+UX P0）：删箭头 + "鸵鸟蛋位置" 文字，保留红圈 + 底部文字条<br>
    ④ <strong>map-hagia 加 2F/1F 副标</strong>（Demand P0）：许愿柱/Dandolo 实际在二楼，平面图是一楼 → 加楼层标消解方位歧义<br>
    ⑤ <strong>hagia-A5 换裁</strong>（UX P0）：从 (18,8,78,92) → (50,35,100,100) 右下区，不再和 A2 撞<br>
    ⑥ <strong>bazaar-C2 换图</strong>（UX P0）：原 boza-cup 顶部货架 → boza-store 左下货柜区，和 C1 杯子互补<br>
    ⑦ <strong>maps caption 动词先行</strong>（UX P0）：HTML 小样每张 map 改"找这 3 处 / 数 6 塔 / 按编号走"<br>
    ⑧ <strong>PRD §P-07 补冷知识钩范式豁免</strong>（taste P2 采纳）<br>
    ⑨ <strong>PRD A4 caption 改"说明牌"角度</strong>（Demand 建议采纳）<br>
    <strong>未采纳</strong>：C3/C4 染料换华人 5 套路（Demand 建议级，Wikimedia 无覆盖现代场景图，保留原 Seljuk 博物馆地毯）<br>
    <strong>点击任一图放大看原尺寸</strong>。
  </div>
  {render_section("① onsite_spots 9 张（带 '景点 · 编号 · 锚点' 文字条）", "assets/landmarks-exp-v3.5/onsite-spots", SPOTS, SPOT_CAPTIONS)}
  {render_section("② slides 13 张（whyVisit detail 图文切片图，caption 由 HTML 独立渲染）", "assets/landmarks-exp-v3.5/slides", SLIDES, SLIDE_CAPTIONS)}
  {render_section("③ maps 3 张（平面图 + ① ② ③ 红圈对应 3 个 spots）", "assets/landmarks-exp-v3.5/maps", MAPS, MAP_CAPTIONS)}
</body></html>"""

with open("preview-v3.5-exp.html", "w") as f:
    f.write(html)
print(f"Wrote preview-v3.5-exp.html")
print(f"Total: {len(SPOTS)} spots + {len(SLIDES)} slides + {len(MAPS)} maps = {len(SPOTS)+len(SLIDES)+len(MAPS)}")
