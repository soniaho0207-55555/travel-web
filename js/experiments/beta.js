/* ═══════════════════════════════════════════════════════════════════
   v3.5-exp · β 3 Tab 渲染器
   顶部 3 tab 点切（copy 现有 switchLmTab 模式）：旅行前 / 旅行中 / Survival
   URL：?exp=beta
   ═══════════════════════════════════════════════════════════════════ */

let expBetaTab = 'before';

function switchExpBetaTab(tab) {
  expBetaTab = tab;
  document.querySelectorAll('.exp-beta-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.exptab === tab);
  });
  document.querySelectorAll('.exp-beta-panel').forEach(el => {
    el.classList.toggle('active', el.dataset.exppanel === tab);
  });
  window.scrollTo({ top: 0, behavior: 'instant' in document.documentElement.style ? 'instant' : 'auto' });
}

function renderExperimentBeta(city, landmark, cityId, index) {
  const app = document.getElementById('app');
  const l = landmark;
  const c = city;
  expBetaTab = 'before';

  app.innerHTML = `
    <div class="landmark-detail-page exp-beta" data-exp="beta">
      ${expRenderHero(l, cityId)}

      <div class="exp-expbar">
        <span class="exp-expbar-badge">β · 3 Tab 实验版</span>
        <span class="exp-expbar-switch">
          <a href="?exp=alpha#/city/${expEscape(cityId)}/landmark/${index}">切 α 纯滚动</a>
          <a href="#/city/${expEscape(cityId)}/landmark/${index}">回原版</a>
        </span>
      </div>

      <div class="exp-beta-tabs" role="tablist">
        <button class="exp-beta-tab active" role="tab" data-exptab="before"   onclick="switchExpBetaTab('before')">旅行前</button>
        <button class="exp-beta-tab"        role="tab" data-exptab="onsite"   onclick="switchExpBetaTab('onsite')">旅行中</button>
        <button class="exp-beta-tab"        role="tab" data-exptab="survival" onclick="switchExpBetaTab('survival')">Survival</button>
      </div>

      <div class="exp-beta-panel active" role="tabpanel" data-exppanel="before">
        ${expRenderBeforeSection(l)}
      </div>
      <div class="exp-beta-panel" role="tabpanel" data-exppanel="onsite">
        ${expRenderOnsiteSection(l)}
      </div>
      <div class="exp-beta-panel" role="tabpanel" data-exppanel="survival">
        ${expRenderSurvivalSectionFull(l, c)}
      </div>

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles · v3.5-exp β</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);
  expHydrateHero(l);
  if (typeof updateNav === 'function') updateNav(null);
}
