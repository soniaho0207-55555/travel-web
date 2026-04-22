#!/usr/bin/env python3
"""
PIL 图片后期工具 · v3.5-exp
支持：resize / crop / 红圈 / 箭头 / 数字徽章 / 文字标注
用法：python3 scripts/annotate.py <manifest.json>

Manifest 示例：
[
  {
    "src": "assets/landmarks-exp-v3.5/raw/hagia-wishstone.jpg",
    "dst": "assets/landmarks-exp-v3.5/onsite-spots/hagia-1-wishstone.jpg",
    "resize": [1200, null],
    "overlays": [
      {"type": "circle", "cx_pct": 45, "cy_pct": 55, "radius_pct": 6, "color": "#E34B2C", "width": 4},
      {"type": "text", "x_pct": 48, "y_pct": 58, "text": "凹洞", "color": "#FFFFFF", "bg": "#E34B2C", "size": 28}
    ]
  }
]
"""
import json, sys, os
from PIL import Image, ImageDraw, ImageFont

# macOS 中文字体 fallback
FONT_PATHS = [
    "/System/Library/Fonts/PingFang.ttc",
    "/System/Library/Fonts/STHeiti Medium.ttc",
    "/System/Library/Fonts/Helvetica.ttc",
]

def get_font(size):
    for p in FONT_PATHS:
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

def process(item):
    src = item["src"]
    dst = item["dst"]
    img = Image.open(src).convert("RGB")
    w, h = img.size

    # 可选裁切（百分比或像素）
    if "crop_pct" in item:
        l, t, r, b = item["crop_pct"]
        img = img.crop((int(w*l/100), int(h*t/100), int(w*r/100), int(h*b/100)))
        w, h = img.size

    # resize（保持纵横比；None = auto）
    if "resize" in item:
        tw, th = item["resize"]
        if tw and not th:
            th = int(h * tw / w)
        elif th and not tw:
            tw = int(w * th / h)
        img = img.resize((tw, th), Image.LANCZOS)
        w, h = img.size

    # overlay 绘制（在 resize 之后）
    draw = ImageDraw.Draw(img, "RGBA")
    for ov in item.get("overlays", []):
        t = ov["type"]
        if t == "circle":
            cx = int(w * ov["cx_pct"] / 100)
            cy = int(h * ov["cy_pct"] / 100)
            r = int(min(w, h) * ov["radius_pct"] / 100)
            draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=ov["color"], width=ov.get("width", 4))
        elif t == "circle_number":
            cx = int(w * ov["cx_pct"] / 100)
            cy = int(h * ov["cy_pct"] / 100)
            r = ov.get("radius_px", 32)
            # 实心红圆 + 白数字（legacy）
            draw.ellipse([cx-r, cy-r, cx+r, cy+r], fill=ov.get("color", "#B53A1F"))
            font = get_font(ov.get("font_size", int(r*1.2)))
            txt = str(ov["number"])
            bbox = draw.textbbox((0, 0), txt, font=font)
            tw2, th2 = bbox[2]-bbox[0], bbox[3]-bbox[1]
            draw.text((cx - tw2//2, cy - th2//2 - 2), txt, fill="#FFFFFF", font=font)
        elif t == "outline_circle_number":
            # v3: UX P0-4——描边空心环代替实心盘（OTA badge 去掉）
            cx = int(w * ov["cx_pct"] / 100)
            cy = int(h * ov["cy_pct"] / 100)
            r = ov.get("radius_px", 28)
            stroke = ov.get("stroke_width", 5)
            color = ov.get("color", "#B53A1F")
            # 外层半透明白底圈（提升对比）
            draw.ellipse([cx-r-2, cy-r-2, cx+r+2, cy+r+2], fill="#FFFFFFDD")
            # 描边环
            draw.ellipse([cx-r, cy-r, cx+r, cy+r], outline=color, width=stroke)
            # 数字
            font = get_font(ov.get("font_size", int(r*1.1)))
            txt = str(ov["number"])
            bbox = draw.textbbox((0, 0), txt, font=font)
            tw2, th2 = bbox[2]-bbox[0], bbox[3]-bbox[1]
            draw.text((cx - tw2//2, cy - th2//2 - 2), txt, fill=color, font=font)
            # 可选副标签（如"2F"）在环右边
            if ov.get("sub_label"):
                sub_font = get_font(ov.get("sub_font_size", 18))
                sub = ov["sub_label"]
                sub_bbox = draw.textbbox((0, 0), sub, font=sub_font)
                sub_w = sub_bbox[2] - sub_bbox[0]
                sub_h = sub_bbox[3] - sub_bbox[1]
                pad = 4
                sx = cx + r + 4
                sy = cy - sub_h//2 - 2
                draw.rectangle([sx-pad, sy-pad, sx+sub_w+pad, sy+sub_h+pad], fill="#FFFFFFDD")
                draw.text((sx, sy), sub, fill=color, font=sub_font)
        elif t == "text":
            x = int(w * ov["x_pct"] / 100)
            y = int(h * ov["y_pct"] / 100)
            font = get_font(ov.get("size", 24))
            txt = ov["text"]
            if ov.get("bg"):
                bbox = draw.textbbox((x, y), txt, font=font)
                pad = 6
                draw.rectangle([bbox[0]-pad, bbox[1]-pad, bbox[2]+pad, bbox[3]+pad], fill=ov["bg"])
            draw.text((x, y), txt, fill=ov["color"], font=font)
        elif t == "arrow":
            x1 = int(w * ov["from_x_pct"] / 100)
            y1 = int(h * ov["from_y_pct"] / 100)
            x2 = int(w * ov["to_x_pct"] / 100)
            y2 = int(h * ov["to_y_pct"] / 100)
            draw.line([x1, y1, x2, y2], fill=ov["color"], width=ov.get("width", 5))
            # 箭头头
            import math
            angle = math.atan2(y2-y1, x2-x1)
            head = ov.get("head_size", 18)
            for a in [-0.4, 0.4]:
                hx = x2 - head * math.cos(angle + a)
                hy = y2 - head * math.sin(angle + a)
                draw.line([x2, y2, int(hx), int(hy)], fill=ov["color"], width=ov.get("width", 5))

    os.makedirs(os.path.dirname(dst), exist_ok=True)
    img.save(dst, "JPEG", quality=88, optimize=True)
    print(f"  {dst}  ({w}x{h}, {os.path.getsize(dst)//1024}KB)")

def main():
    manifest_path = sys.argv[1]
    with open(manifest_path) as f:
        items = json.load(f)
    print(f"Processing {len(items)} items from {manifest_path}...")
    for it in items:
        try:
            process(it)
        except Exception as e:
            print(f"  FAIL {it.get('dst', '?')}: {e}")
            raise

if __name__ == "__main__":
    main()
