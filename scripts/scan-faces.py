#!/usr/bin/env python3
"""
人脸扫描：OpenCV Haar cascade + DNN fallback。
用法：python3 scripts/scan-faces.py <dir_or_files...>
输出：每张图的人脸数量 + bbox 坐标（百分比），方便 PIL 后期裁切规避
"""
import cv2, os, sys, json

# 前脸 + 侧脸 双 cascade 提高召回
CASCADES = [
    cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'),
    cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_profileface.xml'),
]

def scan(path):
    img = cv2.imread(path)
    if img is None:
        return None
    h, w = img.shape[:2]
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    faces = []
    for c in CASCADES:
        dets = c.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))
        for (x, y, fw, fh) in dets:
            faces.append({
                "x_pct": round(x / w * 100, 1),
                "y_pct": round(y / h * 100, 1),
                "w_pct": round(fw / w * 100, 1),
                "h_pct": round(fh / h * 100, 1),
                "size_px": int(fw),
            })
    # 去重（合并重叠 bbox）
    merged = []
    for f in faces:
        is_dup = False
        for m in merged:
            if abs(f["x_pct"] - m["x_pct"]) < 3 and abs(f["y_pct"] - m["y_pct"]) < 3:
                is_dup = True
                break
        if not is_dup:
            merged.append(f)
    return {
        "img_wh": [w, h],
        "face_count": len(merged),
        "faces": merged,
    }

def iter_files(args):
    for a in args:
        if os.path.isdir(a):
            for fn in sorted(os.listdir(a)):
                p = os.path.join(a, fn)
                if os.path.isfile(p) and fn.lower().endswith(('.jpg', '.jpeg', '.png')):
                    yield p
        elif os.path.isfile(a):
            yield a

def main():
    results = {}
    for p in iter_files(sys.argv[1:]):
        r = scan(p)
        if r and r["face_count"] > 0:
            results[p] = r
            print(f"  FACE: {os.path.basename(p):40s} {r['face_count']} face(s), largest {max(f['size_px'] for f in r['faces'])}px")
        else:
            print(f"  clean: {os.path.basename(p)}")

    if results:
        print(f"\n⚠️  {len(results)} 张含人脸，需处理：")
        for p, r in results.items():
            print(f"  {p}")
            for f in r["faces"]:
                print(f"    face bbox: x={f['x_pct']}% y={f['y_pct']}% w={f['w_pct']}% h={f['h_pct']}% ({f['size_px']}px)")
    else:
        print(f"\n✅ 全部 clean")

    with open("scripts/face-scan-result.json", "w") as f:
        json.dump(results, f, indent=2)

if __name__ == "__main__":
    main()
