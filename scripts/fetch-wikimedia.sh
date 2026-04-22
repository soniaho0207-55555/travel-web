#!/usr/bin/env bash
# Wikimedia Commons 图片下载工具
# 默认走 Special:FilePath 不加 width 参数 → 拿原图（PIL 后期 resize）
# 用法: ./fetch-wikimedia.sh "<filename>" <output_path>
set -euo pipefail

FILENAME="${1:?need filename}"
OUTPUT="${2:?need output path}"

FNAME_ENC=$(python3 -c "
import urllib.parse, sys
fname = sys.argv[1].replace(' ', '_')
print(urllib.parse.quote(fname, safe='.()_-,\''))
" "$FILENAME")

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
URL="https://commons.wikimedia.org/wiki/Special:FilePath/${FNAME_ENC}"

mkdir -p "$(dirname "$OUTPUT")"
curl -sL -m 120 -A "$UA" -H "Referer: https://commons.wikimedia.org/" -o "$OUTPUT" "$URL"

# Validate via PIL (avoids "file" command's JFIF density misread)
python3 - "$OUTPUT" <<'EOF'
import sys, os
from PIL import Image
p = sys.argv[1]
sz = os.path.getsize(p)
try:
    img = Image.open(p)
    print(f"OK: {p} ({sz} bytes, {img.width}x{img.height}, {img.format})")
except Exception as e:
    print(f"FAIL: {p} - {e}")
    with open(p) as f:
        print(f.read(200))
    sys.exit(1)
EOF
