#!/bin/bash
# sync-claude.sh — 把主文件夹的 .claude/ 更新推到 dev 并让 worktree pull
# 用法：在主文件夹 cd 到项目根，然后 bash workflow/sync-claude.sh "commit message"

set -e

MAIN_DIR="/Users/wenjiehu/Documents/AI/claude code VS"
WORKTREE_DIR="/Users/wenjiehu/Documents/AI/travel-web-pipeline"
MSG="${1:-chore: sync .claude role updates}"

cd "$MAIN_DIR"

if git diff --quiet .claude; then
  echo "ℹ️  .claude/ 没有未提交改动，检查 push..."
else
  echo "📝 commit .claude/ 改动..."
  git add .claude
  git commit -m "$MSG"
fi

echo "⬆️  push main..."
git push origin main

echo "⬆️  同步 main → dev..."
git push origin main:dev

if [ -d "$WORKTREE_DIR" ]; then
  echo "⬇️  worktree pull..."
  cd "$WORKTREE_DIR"
  git pull origin dev
  echo "✅ 同步完成。worktree 现在使用最新 .claude/"
else
  echo "⚠️  worktree 不存在于 $WORKTREE_DIR，跳过 pull"
fi
