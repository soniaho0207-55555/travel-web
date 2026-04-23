/* ═══════════════════════════════════════════════════════════════════
   v3.5-exp v7 · β 4 Tab 渲染器（CEO 二次拍板 · 按心智模式重组）
   Tab 1 · 沙发时间（合并阅读 + 深度 · 内部 accordion · 顶部 sticky 锚条）
   Tab 2 · 出发前（独立 · ticket + visitTiming + bestSeason + tips）
   Tab 3 · 旅行中（onsite · 不变）
   Tab 4 · Survival（空态隐藏 · 不变）
   Hero 图下方大号字 hookShort caption（§P-14-D ①）· α v5 已砍
   ═══════════════════════════════════════════════════════════════════ */

let expBetaTab = 'sofa';

function switchExpBetaTab(tab) {
  expBetaTab = tab;
  document.querySelectorAll('.exp-beta-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.exptab === tab);
  });
  document.querySelectorAll('.exp-beta-panel').forEach(el => {
    el.classList.toggle('active', el.dataset.exppanel === tab);
  });
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function renderExperimentBeta(city, landmark, cityId, index) {
  const app = document.getElementById('app');
  const l = landmark;
  const c = city;
  const showSurvival = expLandmarkHasSurvival(l);  // §P-12-G 空态 tab 隐藏
  expBetaTab = 'sofa';

  // v7 · 4 tab（3 基础 + Survival 空态隐藏）
  const tabs = [
    { key: 'sofa',   label: '沙发时间' },
    { key: 'prep',   label: '出发前' },
    { key: 'onsite', label: '旅行中' }
  ];
  if (showSurvival) tabs.push({ key: 'survival', label: 'Survival' });

  const tabButtons = tabs.map((t, i) => `
    <button class="exp-beta-tab${i === 0 ? ' active' : ''}" role="tab" data-exptab="${t.key}" onclick="switchExpBetaTab('${t.key}')">${t.label}</button>
  `).join('');

  const survivalPanel = showSurvival ? `
    <div class="exp-beta-panel" role="tabpanel" data-exppanel="survival">
      <div class="exp-surv-intro">景点专属 · 避坑 / 礼节 / 票务细节</div>
      ${expRenderSurvivalSectionFull(l)}
    </div>
  ` : '';

  app.innerHTML = `
    <div class="landmark-detail-page exp-beta" data-exp="beta">
      ${expRenderHero(l, cityId)}
      ${expRenderHookShortCaption(l)}

      <div class="exp-beta-tabs" role="tablist">
        ${tabButtons}
      </div>

      <div class="exp-beta-panel active" role="tabpanel" data-exppanel="sofa">
        ${expRenderSofaTab(l)}
      </div>
      <div class="exp-beta-panel" role="tabpanel" data-exppanel="prep">
        ${expRenderPrepTab(l, c)}
      </div>
      <div class="exp-beta-panel" role="tabpanel" data-exppanel="onsite">
        ${expRenderOnsiteSection(l)}
      </div>
      ${survivalPanel}

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles · v3.5-exp v7 β</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);
  expHydrateHero(l);
  if (typeof updateNav === 'function') updateNav(null);

  // v7 · sofa 内部 scrollspy · requestAnimationFrame 确保 DOM 就绪再 observe
  if (typeof requestAnimationFrame === 'function') {
    requestAnimationFrame(() => {
      if (typeof expAttachSofaScrollSpy === 'function') expAttachSofaScrollSpy();
    });
  } else {
    setTimeout(() => {
      if (typeof expAttachSofaScrollSpy === 'function') expAttachSofaScrollSpy();
    }, 0);
  }
}
