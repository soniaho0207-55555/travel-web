# Pipeline 操作手册（CEO 速查）

这是 `/pipeline` 自动流水线的 CEO 视角操作指南。

---

## 一、日常开工 5 步法

```
1. 打开终端，cd 到 worktree：
   cd ../travel-web-pipeline

2. 在这里开 PMO session（Claude Code）

3. 发 /be-pmo（加载 PMO 身份）

4. 发 /pipeline（启动一轮流水线）

5. 等闸门 → 说 approve → 继续 → 睡觉
```

**关键**：`/pipeline` 只在 PMO session 里跑，而且跑在 worktree 文件夹（不是主文件夹）。

---

## 二、完整链路图

```
Step 0  部署就绪（自动轮询 GitHub Pages）
   ↓
Step 1  UX 测试（taste-driven 28yo 用户体验）
   ↓
⚠️ 闸门 ① 反馈 approve
   ↓
Step 2  PM 改 PRD（读 5 personas + 反馈 → 更新 PRD）
   │
   └─ Step 2.3  UX 评审 PM 摘要（自动，无闸门）
         ├─ approve → 进闸门 ②
         └─ 反对 → Step 2.3b PM 返工 1 次 → 进闸门 ②
   ↓
⚠️ 闸门 ② PRD diff approve（带 UX 评语展示）
   ↓
Step 3  Dev-H5 实现
   │  3a 需求完备性检查（2 分钟）
   │  3b 开发
   │  3c 完成判断
   │     ├─ blockers 空 → 闸门 ③
   │     └─ blockers 非空 → Step 3.5
   │
   └─ Step 3.5 反刍循环（最多 2 轮）
         ├─ Dev 标 low → PM Mode B 补/撤 → Dev Mode C 填坑 → 回 3c
         └─ Dev 标 high → 停下问 CEO：回 Step 2 / 砍掉 / 硬上
   ↓
⚠️ 闸门 ③ Dev-H5 产出 approve（宽松，只首次）
   ↓
Step 4  QA 三端并行（iPhone 硬闸门 / Android / Desktop）
   ↓
Step 4.5 QA FAIL 循环（最多 3 轮，Dev-H5 Mode B）
   ↓
Step 5  merge + push
   │  前 3 轮：⚠️ 手动 push 兜底（本地 merge 完，等你说 push）
   │  第 4 轮起：全自动 push
   ↓
回 Step 0
```

---

## 三、闸门话术速查

### 闸门 ① UX 反馈
| 你说 | PMO 做什么 |
|---|---|
| `approve` | 放行到 PM |
| `加一条：首页字号太小` | 追加到反馈 md 的 "## CEO 补充" 节，再问一次 |
| `drop 第 3 条` | 删掉反馈的第 3 条，再问一次 |
| `stop` / `暂停` | 删锁，结束本轮 |

### 闸门 ② PRD diff（展示 PRD diff + PM 摘要 + **UX 评语**）
| 你说 | PMO 做什么 |
|---|---|
| `approve` | 放行到 Dev-H5 |
| `改 PRD：把 X 改成 Y` | PMO 直接用 Edit 改 PRD，再 diff，再问 |
| `stop` | 删锁，结束 |

**Step 2.3 UX 评审说明**：
- PM 写完 PRD 后，PMO 会**自动**让 UX 用模式 B 评审一次（taste-driven 视角）
- UX `approve` → 直接到闸门 ②
- UX `反对` → PM 进模式 A' 返工 **1 轮**（不叫 UX 第二次，防死循环）→ 进闸门 ②
- 闸门 ② 展示时会带上 UX 评语（approve 原文 / 反对理由 + PM 返工前后对比）
- 这一步是**自动**的，你不用回话——只影响闸门 ② 你看到的内容丰不丰富

### 闸门 ③ Dev-H5 产出（宽松，只首次）
| 你说 | PMO 做什么 |
|---|---|
| `approve` | 放行到 QA |
| `让 Dev-H5 改：X 的 font-size 改 16px` | Dev-H5 进入 Mode B 修 |
| `stop` | 删锁，结束 |

### Step 3.5 high blockers 决策
| 你说 | PMO 做什么 |
|---|---|
| `回Step2` | PM 重跑（输入含 blockers），然后重跑 Step 3 |
| `砍掉` | PM 把 blocker 条目全撤，记 Future，Dev-H5 跳过 |
| `硬上` | 直接进闸门 ③（带缺口合并） |

### Step 3.5 第 2 轮仍失败决策（与上同）

### Step 4.5 QA 3 轮仍 FAIL 决策
| 你说 | PMO 做什么 |
|---|---|
| `force-merge` | 带已知问题合并（你要承担后果） |
| `pause` | 暂停流水线 |
| `retry` | 再给 Dev-H5 一次机会（但循环已在第 4 轮，不建议） |

### Step 5 前 3 轮手动 push 决策
| 你说 | PMO 做什么 |
|---|---|
| `push` | `git push origin main`，上线 |
| `hold` | `git reset --hard origin/main`（撤销本地 merge），暂停 |

---

## 四、分工纪律（避免主 vs worktree 冲突）

### 主文件夹（`/Users/wenjiehu/Documents/AI/claude code VS/`）

你**日常讨论**的地方。在这里你可以：

- ✅ 开 PM / Dev-H5 / QA / User / Explorer session 深聊
- ✅ 改 PRD / backlog / 反馈 md / `.claude/*` 配置
- ❌ **尽量不改业务代码**（js/css/html）——让 pipeline 的 Dev-H5 subagent 独占

### Worktree 文件夹（`../travel-web-pipeline/`）

**PMO session** 跑 `/pipeline` 的地方。在这里：

- ✅ `/pipeline` 自动运行，改代码 / push dev / merge main
- ❌ 你**不要**手动开其他 session（都在主文件夹开）
- ⚠️ worktree 的 `.claude/` **是独立副本**（不是软链，因为 git 会认为软链是"删除"目录）。主文件夹改了 `.claude/*.md` 之后，要同步：
  ```bash
  # 主文件夹：
  git add .claude && git commit -m "chore: update agent X"
  git push origin main
  git push origin main:dev          # 同步到 dev
  # worktree：
  cd ../travel-web-pipeline && git pull origin dev
  ```
  或者用脚本 `workflow/sync-claude.sh`（见下节）

### 文件锁 `.pipeline.lock`

pipeline 在 Step 3-5 期间会写这个文件。任何其他 session（主文件夹的 Dev-H5）开工前会检查：

- 锁存在 → 警告"pipeline 正在跑，改代码可能冲突，要继续吗？"
- 锁不存在 → 正常开工

**你看到警告时的选择**：
- 继续（强制）→ 你自己承担冲突风险
- 等 pipeline 跑完再改

---

## 五、撞了怎么办（Playbook）

### 撞法 1：主文件夹 push dev 失败（pipeline 先 push 了）
```bash
cd "主文件夹"
git pull --rebase origin dev
# 无冲突 → git push
# 有冲突 → 文件里看 <<<<<<< 手动选 → git rebase --continue → push
```
**成本**：3-5 分钟

### 撞法 2：pipeline push 失败（你先 push 了）
PMO 会报错给你。回复：
```
停一下，我刚在主文件夹 push 了 X，你先 pull 再试
```
或者手动去 worktree 拉：
```bash
cd ../travel-web-pipeline
git pull --rebase origin dev
```

### 撞法 3：核灾难（PRD 两边各改一半）
```bash
cd "主文件夹"
git checkout dev
git reset --hard origin/main   # 把 dev 拉回 main 状态（丢今天 dev 改动）
# 重新跑一轮 pipeline
```
**成本**：丢今天 dev 改动，**但 main 安全**

### 撞法 4：main 被乱推
前 3 轮 Step 5 是手动 push，物理上不会发生。3 轮后如果放开自动 push 出问题：
```bash
git reset --hard <问题前的 hash>
git push origin main --force-with-lease
```
**极少发生**，真发生了联系 Explorer 一起处理。

---

## 六、什么时候开别的 session（专家咨询室）

| 场景 | 开哪个 | 命令 |
|---|---|---|
| 想和 PM 深聊战略改版 | PM session | `/be-pm` |
| 想问实现细节 / 技术选型 | Dev-H5 session | `/be-dev-h5` |
| 想讨论已知问题下一版合并 | QA session | `/be-qa` |
| 想单独让 User 再体验 | User session | `/be-ux` |
| 战略问题 / 基建 / 能不能试 XXX | Explorer session | `/be-explorer` |
| 跑 pipeline | PMO session（**在 worktree**） | `/be-pmo` + `/pipeline` |

这些 session 共享同一份文件（主文件夹），改动下次 pipeline 自然读到。不用"同步"。

---

## 七、文件即记忆（谁写什么）

| 文件 | 写 | 读 |
|---|---|---|
| `PRD-travel-h5-v2.md` | PM | Dev-H5 / QA / PMO |
| `用户反馈-*.md` | UX | PM |
| `workflow/backlog.md` | PMO / QA Findings | 所有人 |
| `js/ css/ html` | Dev-H5 | QA |
| `git main / dev` | Dev-H5 push dev / PMO merge main | 所有人 |
| `workflow/pipeline-rounds.log` | PMO（每轮完成追加） | PMO（判断前 3 轮） |
| `.pipeline.lock` | PMO（Step 3 写 / Step 5 删） | Dev-H5 / QA 的 "开工前必读" |

**跨 session 记忆 = 读上面这些文件**，不是依赖聊天历史。

---

## 八、紧急操作

### 停一切
任何闸门回 `stop`，PMO 会删锁 + 暂停。

### 从 pause 恢复
在 PMO session 再发 `/pipeline`，从 Step 0 重新开始（干净闭环）。

### 完全重置（main 被污染，dev 被污染）
```bash
cd "主文件夹"
git checkout main
git reset --hard <上一个稳定 commit>
git push origin main --force-with-lease  # 谨慎

git checkout dev
git reset --hard main
git push origin dev --force-with-lease
```
**只在核灾难下做**。

### 删孤锁
如果 PMO 异常退出没删锁：
```bash
rm .pipeline.lock
```
下一个 `/pipeline` 会正常跑。

---

## 九、升级：从前 3 轮到全自动

跑稳了（大约 3-5 轮都顺利）后，要放开 Step 5 自动 push：

1. 编辑 `.claude/commands/pipeline.md`
2. 把 "前 3 轮模式" 这一节删掉，或改成 `if N <= 0` 永远走稳定模式
3. 或者更简单：你在闸门 Step 5 永远选 `push`，相当于手动批准自动化

---

## 十、UX 研究模式（和 pipeline 并行）

**目的**：让 UX 的眼睛通过研究外部优秀产品（Arc / Linear / Airbnb / Cereal / 小红书博主 …）不断**锐化**，研究结论直接影响**下一轮** pipeline 的 UX 反馈。

### 怎么开

在**主文件夹**（不是 worktree）开一个新 Claude session：

```
/research-ux <域> <对象>

例：
/research-ux 美学 Arc
/research-ux 流畅度 Linear
/research-ux 旅游 Airbnb-Kyoto
```

优先做这 3 个域（其他后续再说）：
- **美学** — Arc / Linear / Things 3 / Bear / Apple 原生
- **流畅度** — iOS 原生 / WWDC / Rauno.me / Vercel
- **旅游垂直** — Airbnb 城市页 / Lonely Planet / Michelin / 小红书头部博主

### 信息流（怎么影响下一轮 pipeline）

```
research session:
  → 读同域历史研究 + 现有 ux-lenses.md
  → WebFetch 对象 + 写 research/<域>-<对象>-日期.md（长文）
  → 提炼 3-5 条镜头追加到 workflow/ux-lenses.md
  → 自 commit + push origin dev
  → 关 session

下一轮 pipeline Step 1（ux-tester subagent）:
  → git pull origin dev
  → cat workflow/ux-lenses.md（必读）
  → 眼睛被"预调节"，live-site 体验时看到的东西更锐
  → 反馈 md 质量提升
```

**关键**：研究成果不是"告诉 UX 产品问题在哪"，而是"让未来的 UX 自己看到"——镜头是**预调节眼力**的，不是**审判标准**。

### 并行跑 pipeline + research 的纪律（防冲突）

| 写什么 | 谁写 | 谁只读 |
|---|---|---|
| `research/*.md` | 只有 `/research-ux` session | 所有人 |
| `workflow/ux-lenses.md` | 只有 `/research-ux` session | pipeline 的 UX subagent、你 |
| `js/ css/ index-h5.html` | 只有 Dev-H5 (pipeline 内或 `/be-dev-h5`) | 所有人 |
| `PRD` | 只有 PM (pipeline 内或 `/be-pm`) | 所有人 |

**硬纪律**：
- Dev-H5 commit 必须 `git add js/ css/ ...`，**严禁 `git add .` / `git add -A`**——避免把 research 的未完成草稿带进代码 commit
- research session 必须**自 commit + push dev**，不等 pipeline
- 同一时段**不要开两个 `/research-ux` session**（写同一个 lens 文件会 merge 冲突）

### CEO 临时"本轮重点"（手动编辑）

你可以在任何时候手动编辑 `workflow/ux-lenses.md` 的 `## 🔴 本轮重点` 段，加 1-3 条"这一轮 pipeline 我特别想 UX 注意的"。格式同其他段：

```
- 城市页第一屏的标题句子，是不是在"勾人"而不是在"介绍"？
```

UX subagent 下一轮会读到。建议每轮 pipeline 跑完后手动清空（或 PMO 帮你清），避免越攒越多。

### 研究到一半被 pipeline push 干扰？

不会。两边写的是**完全不同的文件**：
- Research 写 `research/` + `ux-lenses.md`
- Pipeline 写代码 + PRD + backlog + 反馈 md

唯一的交集是**读**：UX subagent 开工前 `git pull origin dev` → 读到 research 刚 push 的 lens。如果 research 还没 push，UX 就读老 lens，下一轮再吸收——worst case 迟一轮，不会乱。

---

## 十一、日常节奏参考

```
早上：
  cd worktree → /be-pmo → /pipeline
  闸门 ① → 看反馈 → approve
  闸门 ② → 看 PRD diff → approve
  （Dev-H5 干 10 分钟，可能进 Step 3.5）
  闸门 ③ → 看代码 diff → approve
  （QA 5 分钟）
  Step 5 → push → 完成

  然后自动回 Step 0 下一轮
  （可能今天要跑 2-3 轮，看反馈量）

遇到 Step 3.5 high 或 QA 3 轮 FAIL：
  停下决策 → 回 Step 2 / 砍掉 / retry
  这是正常流程，不是 bug

收工：
  任意闸门说 stop → 自动删锁 + 暂停
  关电脑
```

---

*本手册随 pipeline 演进更新。有不清楚的地方开 Explorer session 问。*
