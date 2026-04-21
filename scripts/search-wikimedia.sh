#!/usr/bin/env bash
# Wikimedia Commons 文件搜索封装
# 用法: ./search-wikimedia.sh "<query>" [limit]
set -euo pipefail

QUERY="${1:?need search query}"
LIMIT="${2:-8}"

UA="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36"
ENCODED=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$QUERY")

curl -s -m 20 -A "$UA" \
  "https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${ENCODED}&srnamespace=6&format=json&srlimit=${LIMIT}" \
  | python3 -c "
import sys, json
d = json.load(sys.stdin)
for x in d.get('query', {}).get('search', []):
    print(x['title'].replace('File:', ''))
"
