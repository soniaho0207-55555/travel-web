/* ═══════════════════════════════════════════════════════════════════
   v3.5-exp v5 · β 3 Tab 渲染器
   顶部 3 tab（copy switchLmTab 模式）：旅行前 / 旅行中 / Survival
   v5 · 旅行前内部三层分隔（§P-07-D）· Survival 空态隐藏（§P-12-G）
   默认 URL 无参数 = β 形态（§P-01 v5）；α 已砍
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
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function renderExperimentBeta(city, landmark, cityId, index) {
  const app = document.getElementById('app');
  const l = landmark;
  const c = city;  // v6 行动层需 city 读取 bestSeason（§P-13-B / §P-03）
  const showSurvival = expLandmarkHasSurvival(l);  // §P-12-G 空态 tab 隐藏
  expBetaTab = 'before';

  const tabs = [
    { key: 'before',   label: '旅行前' },
    { key: 'onsite',   label: '旅行中' }
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

      <div class="exp-beta-tabs" role="tablist">
        ${tabButtons}
      </div>

      <div class="exp-beta-panel active" role="tabpanel" data-exppanel="before">
        ${expRenderBeforeSection(l, c)}
      </div>
      <div class="exp-beta-panel" role="tabpanel" data-exppanel="onsite">
        ${expRenderOnsiteSection(l)}
      </div>
      ${survivalPanel}

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles · v3.5-exp v5 β</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);
  expHydrateHero(l);
  if (typeof updateNav === 'function') updateNav(null);
}
