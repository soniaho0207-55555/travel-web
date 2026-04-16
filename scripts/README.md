# scripts/ — 运营审计脚本（v2.6 起）

## audit-links

全站购票渠道链接可达性审计（H-04 / H-12）。

```bash
npm run audit:links > audit-links.csv
```

- 输出到 stdout 是 CSV，stderr 是进度 + 汇总
- 覆盖 `js/data.js` 里所有 `landmarks[].ticket.channels[].url`
- 对每条 URL 发 HEAD（失败 GET fallback），3s 超时、3 次重试、跟随 1 层 redirect
- 输出字段：`city, landmark, channel_name, url, status_code, final_url, final_status, note`
- `final_status` 可能值：`ok / redirect-ok / 4xx / 5xx / timeout / error / null-url / malformed / redirect-broken`

**发版前必跑**。交 PM 后由 PM 逐条补深链（参考 `PM-v2.6-ticket-fix.md` 约定）。

## audit-wiki-images

全站 wiki 词条配图健康度监控（H-09）。

```bash
npm run audit:wiki-images > audit-wiki-images.csv
```

- 覆盖 `THEMES[].cover` / `CITIES[].wiki` / `landmarks[].wiki`
- 调 Wikipedia `pageimages` API 对每个词条查 thumbnail
- 输出字段：`entity_type, entity_id, entity_name, wiki_title, api_thumb_url, has_direct_url, direct_url, api_status`
- `api_status`：`ok / wiki-404 / no-thumb / no-query / timeout / error / parse-error`

**ALERTS 段**（stderr）只列 **API 失败且没有 `coverUrl` / `wikiImage` 直链兜底** 的条目——这是 PM 必修项。

## 一次跑两个

```bash
npm run audit:all
```

## 长期节奏

每次发版前 release-checklist 必过这两条审计，确保：
1. audit:links 无 4xx / 5xx 条（timeout 可留但 channel 要有 `searchHint` 或 `note` 兜底）
2. audit:wiki-images 的 ALERTS 段为空（所有 wiki 失败都有直链兜底）
