/* ═══════════════════════════════════════════════════════════════════
   v3.5-exp · α 纯滚动渲染器
   3 section 纵向堆叠：旅行前 → 旅行中 → Survival，整页长滚
   URL：?exp=alpha
   ═══════════════════════════════════════════════════════════════════ */

function renderExperimentAlpha(city, landmark, cityId, index) {
  const app = document.getElementById('app');
  const l = landmark;
  const c = city;

  app.innerHTML = `
    <div class="landmark-detail-page exp-alpha" data-exp="alpha">
      ${expRenderHero(l, cityId)}

      <div class="exp-expbar">
        <span class="exp-expbar-badge">α · 纯滚动实验版</span>
        <span class="exp-expbar-switch">
          <a href="?exp=beta#/city/${expEscape(cityId)}/landmark/${index}">切 β 3 Tab</a>
          <a href="#/city/${expEscape(cityId)}/landmark/${index}">回原版</a>
        </span>
      </div>

      <section class="exp-section exp-section-before" id="exp-sec-before">
        <header class="exp-section-head">
          <span class="exp-section-tag">旅行前</span>
          <span class="exp-section-sub">沙发态 · 决策 + 种草</span>
        </header>
        ${expRenderBeforeSection(l)}
      </section>

      <section class="exp-section exp-section-onsite" id="exp-sec-onsite">
        <header class="exp-section-head">
          <span class="exp-section-tag">旅行中</span>
          <span class="exp-section-sub">站立态 · 现场体会历史</span>
        </header>
        ${expRenderOnsiteSection(l)}
      </section>

      <section class="exp-section exp-section-survival" id="exp-sec-survival">
        <header class="exp-section-head">
          <span class="exp-section-tag">Survival</span>
          <span class="exp-section-sub">实用警告 · 避坑 + 识别套路</span>
        </header>
        ${expRenderSurvivalSectionFull(l, c)}
      </section>

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles · v3.5-exp α</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);
  expHydrateHero(l);
  if (typeof updateNav === 'function') updateNav(null);
}
