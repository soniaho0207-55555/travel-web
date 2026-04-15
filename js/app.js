/* ═══════════════════════════════════════
   ICON LIBRARY (monoline SVG, stroke 1.5)
   ═══════════════════════════════════════ */
const ICON_PATHS = {
  crown: '<path d="M3 17h18l-1.5-9-4.5 4-3-6-3 6-4.5-4z"/><path d="M3 21h18"/>',
  pillar: '<path d="M6 3h12M6 21h12M8 3v18M16 3v18"/><path d="M5 7h14M5 17h14"/>',
  camel: '<path d="M3 19c0-2 1-3 2-4 0-2 1-3 2-3s2 1 2 3c0 0 1-2 2-2s1 2 1 2 1-3 3-3 3 2 3 4c1 1 2 2 2 4"/><path d="M8 12V8M14 10V6"/>',
  anchor: '<circle cx="12" cy="5" r="2"/><line x1="12" y1="7" x2="12" y2="21"/><path d="M5 16a7 7 0 0 0 14 0"/><line x1="4" y1="16" x2="7" y2="16"/><line x1="17" y1="16" x2="20" y2="16"/>',
  dome: '<path d="M4 20h16"/><path d="M5 20V13a7 7 0 0 1 14 0v7"/><line x1="12" y1="4" x2="12" y2="7"/><line x1="10.5" y1="6" x2="13.5" y2="6"/>',
  palette: '<circle cx="7.5" cy="13" r="1"/><circle cx="9.5" cy="7.5" r="1"/><circle cx="14.5" cy="6.5" r="1"/><circle cx="17.5" cy="11" r="1"/><path d="M12 21a9 9 0 1 1 9-9 3 3 0 0 1-3 3h-2a2 2 0 0 0-2 2 2 2 0 0 1-2 2z"/>',
  compass: '<circle cx="12" cy="12" r="9"/><polygon points="16,8 13.5,13.5 8,16 10.5,10.5" fill="currentColor" stroke="none"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15,14"/>',
  ticket: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><line x1="9" y1="7" x2="9" y2="17" stroke-dasharray="1.5 2"/>',
  lightbulb: '<line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/><path d="M8.5 14a5 5 0 1 1 7 0c-1 1-1 2-1 3H9.5c0-1 0-2-1-3z"/>',
  info: '<circle cx="12" cy="12" r="9"/><line x1="12" y1="8" x2="12" y2="8.01"/><polyline points="11,12 12,12 12,17 13,17"/>',
  globe: '<circle cx="12" cy="12" r="9"/><line x1="3" y1="12" x2="21" y2="12"/><path d="M12 3a14 14 0 0 1 0 18"/><path d="M12 3a14 14 0 0 0 0 18"/>',
  externalLink: '<path d="M11 5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><polyline points="14,3 21,3 21,10"/><line x1="10" y1="14" x2="21" y2="3"/>',
  chevronDown: '<polyline points="6,9 12,15 18,9"/>',
  arrowDown: '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="6,13 12,19 18,13"/>',
  // v2.3 Tips category icons (thin / line variants — distinct from meta icons)
  'ticket-dashed': '<path d="M4 8a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 8v2a2 2 0 0 0 0 4v2a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16v-2a2 2 0 0 0 0-4z" stroke-dasharray="2 1.5"/><line x1="10" y1="7" x2="10" y2="17" stroke-dasharray="1.5 2"/>',
  'clock-thin': '<circle cx="12" cy="12" r="8.5" stroke-width="1.2"/><polyline points="12,7.5 12,12 15,13.5" stroke-width="1.2"/>',
  'camera-line': '<path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/>',
  'footprint-line': '<ellipse cx="8" cy="9" rx="2.5" ry="3.5"/><circle cx="6" cy="14" r="0.8"/><circle cx="9.5" cy="14.5" r="0.8"/><ellipse cx="16" cy="13" rx="2.5" ry="3.5"/><circle cx="14" cy="18" r="0.8"/><circle cx="17.5" cy="18.5" r="0.8"/>',
  'shirt-line': '<path d="M8 4l-4 2 1.5 4H8v10h8V10h2.5L20 6l-4-2-2 2a2 2 0 0 1-4 0z"/>',
  'snowflake-line': '<line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="5.5" y1="5.5" x2="18.5" y2="18.5"/><line x1="18.5" y1="5.5" x2="5.5" y2="18.5"/><polyline points="10,5 12,3 14,5"/><polyline points="10,19 12,21 14,19"/><polyline points="5,10 3,12 5,14"/><polyline points="19,10 21,12 19,14"/>',
  'key-line': '<circle cx="8" cy="12" r="3.5"/><line x1="11.5" y1="12" x2="21" y2="12"/><line x1="17" y1="12" x2="17" y2="15"/><line x1="20" y1="12" x2="20" y2="14.5"/>',
};

const TIP_CATEGORY_ICON = {
  ticket: 'ticket-dashed',
  timing: 'clock-thin',
  photo: 'camera-line',
  route: 'footprint-line',
  walking: 'footprint-line',   // PM alias of route
  dress: 'shirt-line',
  season: 'snowflake-line',
  cold: 'snowflake-line',       // PM alias of season
  secret: 'key-line',
};

const THEME_ICONS = {
  imperial: 'crown',
  ancient: 'pillar',
  'silk-road': 'camel',
  maritime: 'anchor',
  religion: 'dome',
  renaissance: 'palette',
};

function icon(name, size = 16, extraClass = '') {
  const path = ICON_PATHS[name];
  if (!path) return '';
  return `<svg class="icon icon-${name}${extraClass ? ' ' + extraClass : ''}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

function themeIcon(themeId, size = 14) {
  const name = THEME_ICONS[themeId];
  return name ? icon(name, size) : '';
}

function stripLeadEmoji(str) {
  if (!str) return '';
  return str.replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F2FF}]+\s*/u, '');
}

/* ═══════════════════════════════════════
   STATE
   ═══════════════════════════════════════ */
let homeScrollPos = 0;
let activeFilter = { type: null, value: null };
let typewriterTimer = null;
let heroScrollListener = null;
const imgCache = {};

/* ═══════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════ */
function navTo(hash) {
  const cur = location.hash || '#/';
  if ((cur === '#/' || cur === '#' || cur === '') && hash !== '#/' && hash !== '#') {
    homeScrollPos = window.scrollY;
  }
  history.pushState(null, '', hash);
  handleRoute();
}

window.addEventListener('popstate', handleRoute);

function handleRoute() {
  if (typewriterTimer) { clearInterval(typewriterTimer); typewriterTimer = null; }
  const hash = location.hash || '#/';
  const app = document.getElementById('app');

  const nav = document.querySelector('.bottom-nav');

  if (hash.startsWith('#/city/')) {
    // #/city/:id  OR  #/city/:id/landmark/:index
    const parts = hash.replace(/^#\//, '').split('/'); // ['city', id, 'landmark', idx?]
    const id = parts[1];
    if (parts[2] === 'landmark' && parts[3] !== undefined) {
      renderLandmarkDetail(id, parseInt(parts[3], 10));
    } else {
      renderCityDetail(id);
    }
    if (nav) nav.style.display = 'none';
  } else if (hash.startsWith('#/search')) {
    renderSearch();
    updateNav('search');
    if (nav) nav.style.display = '';
  } else {
    renderHome();
    updateNav('home');
    if (nav) nav.style.display = '';
  }
}

function updateNav(active) {
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === active);
  });
}

/* ═══════════════════════════════════════
   TODAY CITY
   ═══════════════════════════════════════ */
function dayOfYear() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / 86400000);
}

function getTodayCity() {
  return CITIES[dayOfYear() % CITIES.length];
}

/* ═══════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════ */
function renderHome() {
  const today = getTodayCity();
  const app = document.getElementById('app');

  // Theme counts
  const themeCounts = {};
  THEMES.forEach(t => { themeCounts[t.id] = CITIES.filter(c => c.themes.includes(t.id)).length; });

  app.innerHTML = `
    <!-- HERO -->
    <section class="home-hero">
      <div class="home-hero-bg" style="background-image: ${today.heroGradient}"><div class="hero-bg-img" id="heroBg"></div></div>
      <div class="home-header">
        <div class="home-logo">环球史迹<span>Global Chronicles</span></div>
        <button class="home-search-btn" onclick="navTo('#/search')" aria-label="搜索">${icon('search', 18)}</button>
      </div>
      <div class="hero-content" onclick="navTo('#/city/${today.id}')">
        <div class="hero-badge">${stripLeadEmoji(today.tagline)}</div>
        <div class="hero-city-name">${today.name}</div>
        <div class="hero-city-en">${today.nameEn}</div>
        <div class="hero-quote" id="heroQuote"></div>
        <button class="hero-cta">探索这座城市 →</button>
      </div>
      <div class="hero-scroll-hint" id="heroScrollHint">${icon('arrowDown', 24)}</div>
    </section>

    <!-- THEMES -->
    <div class="sec-header">主题探索</div>
    <div class="theme-scroll">
      ${THEMES.map(t => `
        <div class="theme-card" onclick="setFilter('theme','${t.id}')" data-theme-card="${t.id}">
          <div class="theme-card-img" style="background-image: ${t.gradient}" data-theme-img="${t.id}"></div>
          <div class="theme-card-info">
            <div class="theme-card-name">${themeIcon(t.id, 14)}${t.name}</div>
            <div class="theme-card-count">${themeCounts[t.id]} 座城市</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- FILTER + CITY CARDS -->
    <div class="filter-bar-wrap">
      <div class="filter-bar" id="filterBar">
        <button class="filter-chip ${!activeFilter.type ? 'active' : ''}" onclick="setFilter(null,null)">全部</button>
        ${THEMES.map(t => `<button class="filter-chip ${activeFilter.type==='theme'&&activeFilter.value===t.id?'active':''}" onclick="setFilter('theme','${t.id}')">${themeIcon(t.id, 12)}${t.name}</button>`).join('')}
        <div class="filter-sep"></div>
        ${CONTINENTS.map(c => `<button class="filter-chip ${activeFilter.type==='continent'&&activeFilter.value===c.id?'active':''}" onclick="setFilter('continent','${c.id}')">${c.name}</button>`).join('')}
      </div>
      <div class="filter-bar-fade" id="filterFade"></div>
    </div>

    <div class="city-cards" id="cityCards">
      ${renderCityCards()}
    </div>

    <footer class="footer">
      <p>© 2026 环球史迹 · Global Chronicles</p>
      <p>历史 · 文化 · 遗迹</p>
    </footer>
  `;

  // Load hero image
  loadWikiImage(today.wiki, (url) => {
    const bg = document.getElementById('heroBg');
    if (bg && url) {
      bg.style.backgroundImage = `url('${url}')`;
      setTimeout(() => bg.classList.add('loaded'), 50);
    }
  });

  // Typewriter
  setTimeout(() => {
    typewriter('heroQuote', '\u201C' + today.heroQuote + '\u201D');
  }, 400);

  // Load city card images & theme images
  loadAllCityImages();
  loadThemeImages();

  // Scroll animations
  setTimeout(() => setupScrollAnimations(), 100);

  // Restore scroll
  setTimeout(() => window.scrollTo(0, homeScrollPos), 30);

  // Filter bar fade indicator
  setupFilterFade();

  // Scroll-hint fade on scroll (D-07)
  setupHeroScrollHint();
}

function setupHeroScrollHint() {
  const hint = document.getElementById('heroScrollHint');
  if (!hint) return;
  if (heroScrollListener) window.removeEventListener('scroll', heroScrollListener);
  heroScrollListener = () => {
    hint.classList.toggle('faded', window.scrollY > 100);
  };
  window.addEventListener('scroll', heroScrollListener, { passive: true });
}

function renderCityCards() {
  let filtered = CITIES;
  if (activeFilter.type === 'theme') {
    filtered = CITIES.filter(c => c.themes.includes(activeFilter.value));
  } else if (activeFilter.type === 'continent') {
    filtered = CITIES.filter(c => c.continent === activeFilter.value);
  }

  if (!filtered.length) return '<div class="no-results">没有匹配的城市</div>';

  return filtered.map((c, i) => {
    const themeLabels = c.themes.slice(0, 2).map(tid => {
      const t = THEMES.find(th => th.id === tid);
      return t ? `<span class="city-card-tag">${themeIcon(t.id, 11)}${t.name}</span>` : '';
    }).join('');

    return `
      <div class="city-card" style="transition-delay:${i * 0.08}s" onclick="navTo('#/city/${c.id}')">
        <div class="city-card-img" data-city-img="${c.id}" style="background-image: ${c.heroGradient}"></div>
        <div class="city-card-body">
          <div class="city-card-name">${c.name}<span>${c.nameEn}</span></div>
          <div class="city-card-sub">${c.country} · ${CONTINENT_MAP[c.continent]}</div>
          <div class="city-card-hook">\u201C${c.hook}\u201D</div>
          <div class="city-card-tags">${themeLabels}</div>
        </div>
      </div>
    `;
  }).join('');
}

function setFilter(type, value) {
  if (activeFilter.type === type && activeFilter.value === value) {
    activeFilter = { type: null, value: null };
  } else {
    activeFilter = { type, value };
  }

  // Re-render filter bar + cards
  const filterBar = document.getElementById('filterBar');
  if (filterBar) {
    filterBar.innerHTML = `
      <button class="filter-chip ${!activeFilter.type ? 'active' : ''}" onclick="setFilter(null,null)">全部</button>
      ${THEMES.map(t => `<button class="filter-chip ${activeFilter.type==='theme'&&activeFilter.value===t.id?'active':''}" onclick="setFilter('theme','${t.id}')">${themeIcon(t.id, 12)}${t.name}</button>`).join('')}
      <div class="filter-sep"></div>
      ${CONTINENTS.map(c => `<button class="filter-chip ${activeFilter.type==='continent'&&activeFilter.value===c.id?'active':''}" onclick="setFilter('continent','${c.id}')">${c.name}</button>`).join('')}
    `;
  }

  const cityCards = document.getElementById('cityCards');
  if (cityCards) {
    cityCards.innerHTML = renderCityCards();
    applyCachedImages();
    setTimeout(() => setupScrollAnimations(), 50);
  }

  // Scroll to cards
  const bar = document.getElementById('filterBar');
  if (bar && type) bar.scrollIntoView({ behavior: 'smooth', block: 'start' });

  setupFilterFade();
}

/* ═══════════════════════════════════════
   CITY DETAIL PAGE
   ═══════════════════════════════════════ */
let detailTab = 'timeline';

function renderCityDetail(id) {
  const c = CITIES.find(ci => ci.id === id);
  if (!c) { renderNotFound(id); return; }
  detailTab = 'timeline';

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="detail-page">
      <section class="detail-hero">
        <button class="detail-back" onclick="history.back()">←</button>
        <div class="detail-hero-bg" id="detailHeroBg" style="background-image: ${c.heroGradient}"></div>
        <div class="detail-hero-content">
          <div class="detail-eyebrow">—— ${c.country} · 历史与遗迹 ——</div>
          <h1 class="detail-title">${c.name}<em>${c.nameEn}</em></h1>
          <div class="detail-meta">
            <div class="detail-stat"><strong>${c.timeline.length}</strong>历史节点</div>
            <div class="detail-stat"><strong>${c.landmarks.length}</strong>重要景点</div>
            <div class="detail-stat"><strong style="font-size:0.68rem;letter-spacing:0.03em">${c.coords}</strong>坐标</div>
          </div>
        </div>
      </section>

      <div class="overview">
        <p>${c.overview}</p>
        ${c.overviewFull ? `
          <div class="overview-full" id="overviewFull">${c.overviewFull}</div>
          <button class="overview-toggle" id="overviewToggle" onclick="toggleOverview()">
            <span class="overview-toggle-text">继续阅读</span>
            ${icon('chevronDown', 12)}
          </button>
        ` : ''}
      </div>

      <div class="section-tabs">
        <button class="section-tab active" data-tab="timeline" onclick="switchDetailTab('timeline')">历史时间轴</button>
        <button class="section-tab" data-tab="landmarks" onclick="switchDetailTab('landmarks')">重要景点</button>
      </div>

      <div class="panel active" data-panel="timeline">
        <div class="timeline-wrap">
          <div class="timeline">
            ${c.timeline.map((t, i) => `
              <div class="timeline-item" style="transition-delay:${i * 0.06}s">
                <div class="timeline-year">${t.year}</div>
                <div class="timeline-event">${t.event}</div>
                <div class="timeline-desc">${t.desc}</div>
                ${t.worldContext ? `<div class="timeline-world-context">${t.worldContext}</div>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="panel" data-panel="landmarks">
        <div class="landmarks-wrap">
          ${c.landmarks.map((l, i) => `
            <div class="landmark-card landmark-card-simple" style="transition-delay:${i * 0.08}s" onclick="navTo('#/city/${c.id}/landmark/${i}')">
              <div class="landmark-cover" id="banner-${i}" style="background-image: ${l.gradient}"></div>
              <div class="landmark-card-body">
                <div class="landmark-name">${l.name}</div>
                <div class="landmark-era">${l.era}</div>
                <div class="landmark-hook">${getLandmarkHook(l)}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);

  // Load hero image
  loadWikiImage(c.wiki, (url) => {
    const bg = document.getElementById('detailHeroBg');
    if (bg && url) {
      bg.style.backgroundImage = `url('${url}')`;
    }
  });

  // Load landmark images
  loadLandmarkImages(c.landmarks);

  setTimeout(() => setupScrollAnimations(), 100);

  // Update nav
  updateNav(null);
}

function renderNotFound(id) {
  const recommended = CITIES.slice(0, 3);
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="not-found-page">
      <button class="detail-back" onclick="history.back()">←</button>
      <div class="not-found-icon">${icon('compass', 48)}</div>
      <h2 class="not-found-title">未找到该城市</h2>
      <p class="not-found-desc">「${id}」不在当前收录范围内</p>
      <div class="not-found-recommend">
        <div class="not-found-label">探索这些城市</div>
        ${recommended.map(c => `
          <div class="search-result" onclick="navTo('#/city/${c.id}')">
            <div class="search-result-thumb" style="background-image: ${c.heroGradient}" data-city-img="${c.id}"></div>
            <div class="search-result-info">
              <div class="search-result-name">${c.name}<span>${c.nameEn}</span></div>
              <div class="search-result-sub">${c.country}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
  applyCachedImages();
}

function switchDetailTab(tab) {
  detailTab = tab;
  document.querySelectorAll('.section-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.tab === tab);
  });
  document.querySelectorAll('.panel').forEach(el => {
    el.classList.toggle('active', el.dataset.panel === tab);
  });
  setTimeout(() => setupScrollAnimations(), 60);
  if (tab === 'landmarks') {
    const hash = location.hash;
    const parts = hash.replace(/^#\//, '').split('/');
    const id = parts[1];
    const c = CITIES.find(ci => ci.id === id);
    if (c) loadLandmarkImages(c.landmarks);
  }
}

/* ═══════════════════════════════════════
   LANDMARK DETAIL PAGE (v2.4 F-07/F-09/F-10)
   ═══════════════════════════════════════ */
let lmDetailTab = 'intro';

function renderLandmarkDetail(cityId, index) {
  const c = CITIES.find(ci => ci.id === cityId);
  if (!c) { renderNotFound(cityId); return; }
  const l = c.landmarks[index];
  if (!l) { renderLandmarkNotFound(cityId); return; }

  lmDetailTab = 'intro';
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="landmark-detail-page">
      <button class="detail-back" onclick="navTo('#/city/${cityId}')">←</button>
      <div class="lm-hero" id="lmHero" style="background-image: ${l.gradient}"></div>
      <div class="lm-header">
        <h1 class="lm-name">${l.name}</h1>
        <div class="lm-era">${l.era}</div>
      </div>

      <div class="lm-tabs">
        <button class="lm-tab active" data-lmtab="intro" onclick="switchLmTab('intro')">介绍</button>
        <button class="lm-tab" data-lmtab="ticket" onclick="switchLmTab('ticket')">门票</button>
        <button class="lm-tab" data-lmtab="tips" onclick="switchLmTab('tips')">Tips</button>
      </div>

      <div class="lm-panel active" data-lmpanel="intro">
        ${renderLmIntro(l)}
      </div>
      <div class="lm-panel" data-lmpanel="ticket">
        ${renderLmTicket(l)}
      </div>
      <div class="lm-panel" data-lmpanel="tips">
        ${renderLmTips(l.tips)}
      </div>

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);

  // Load hero image using landmark's wiki
  if (l.wiki) {
    loadWikiImage(l.wiki, (url) => {
      const bg = document.getElementById('lmHero');
      if (bg && url) {
        bg.style.backgroundImage = `url('${url}')`;
        bg.classList.add('loaded');
      }
    });
  }

  updateNav(null);
}

function renderLandmarkNotFound(cityId) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="not-found-page">
      <button class="detail-back" onclick="navTo('#/city/${cityId}')">←</button>
      <div class="not-found-icon">${icon('compass', 48)}</div>
      <h2 class="not-found-title">未找到该景点</h2>
      <p class="not-found-desc">这个景点编号不在当前城市范围内</p>
      <div class="not-found-recommend">
        <button class="hero-cta" onclick="navTo('#/city/${cityId}')">返回城市详情</button>
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
}

function switchLmTab(tab) {
  lmDetailTab = tab;
  document.querySelectorAll('.lm-tab').forEach(el => {
    el.classList.toggle('active', el.dataset.lmtab === tab);
  });
  document.querySelectorAll('.lm-panel').forEach(el => {
    el.classList.toggle('active', el.dataset.lmpanel === tab);
  });
}

function renderLmIntro(l) {
  const worldEventsBlock = (l.worldEvents && l.worldEvents.length) ? `
    <div class="world-events">
      <div class="world-events-title">${icon('globe', 14)} ${formatYear(l.yearNum)}，世界其他地方</div>
      ${l.worldEvents.map(we => `
        <div class="world-event">
          <div class="world-event-city">${we.city}</div>
          <div class="world-event-text">${we.event}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const tagsBlock = (l.tags && l.tags.length) ? `
    <div class="landmark-tags">${l.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
  ` : '';

  const noteBlock = l.note ? `
    <div class="lm-note">${icon('info', 14)}<span>${l.note}</span></div>
  ` : '';

  const whyBlock = l.whyVisit ? `
    <div class="lm-why">${l.whyVisit}</div>
  ` : '';

  return `
    <div class="lm-section">
      ${whyBlock}
      <p class="landmark-desc">${l.desc}</p>
      ${noteBlock}
      ${worldEventsBlock}
      ${tagsBlock}
    </div>
  `;
}

function renderLmTicket(l) {
  const hoursBlock = l.hours ? `
    <div class="lm-hours">
      <span class="ticket-section-title">${icon('clock', 12)} 开放时间</span>
      <div class="lm-hours-value">${l.hours}</div>
    </div>
  ` : '';

  const ticket = l.ticket;
  if (!ticket && !l.hours) {
    return `<div class="lm-section lm-empty">该景点暂无票务信息</div>`;
  }

  const ticketHtml = renderTicket(ticket);

  return `
    <div class="lm-section lm-ticket-section">
      ${hoursBlock}
      <div class="practical-info lm-practical-info">
        ${ticketHtml || ''}
      </div>
    </div>
  `;
}

/* F-10: Tips 分组渲染 */
const TIPS_GROUP_ORDER = ['timing', 'photo', 'route', 'walking', 'ticket', 'dress', 'season', 'cold', 'secret'];
const TIPS_GROUP_LABEL = {
  timing: '时段内行',
  photo: '最佳机位',
  route: '动线串联',
  walking: '动线串联',
  ticket: '票务技巧',
  dress: '着装规矩',
  season: '季节差异',
  cold: '季节差异',
  secret: '隐藏彩蛋',
};
// 合并别名到主键：walking→route, cold→season
const TIPS_GROUP_CANONICAL = {
  walking: 'route',
  cold: 'season',
};
function canonicalCategory(cat) { return TIPS_GROUP_CANONICAL[cat] || cat; }

function renderLmTips(tips) {
  if (!Array.isArray(tips) || tips.length === 0) {
    return `<div class="lm-section lm-empty">该景点 Tips 补齐中</div>`;
  }

  // 按 canonical category 分组（保留 PM 写作顺序）
  const groups = {};           // key → [{text, category}...]
  const groupSeqOrder = [];    // 保留首现顺序做兜底

  tips.forEach(t => {
    const cat = canonicalCategory(t.category || 'secret');
    if (!groups[cat]) {
      groups[cat] = [];
      groupSeqOrder.push(cat);
    }
    groups[cat].push(t);
  });

  const groupKeys = Object.keys(groups);

  // 若只有 1-2 组 → 退化为简单列表（不渲染分组 header）
  if (groupKeys.length <= 2) {
    const flat = groupKeys.reduce((acc, k) => acc.concat(groups[k]), []);
    return `
      <div class="lm-section">
        <ul class="landmark-tips">
          ${flat.map(tip => {
            const iconName = TIP_CATEGORY_ICON[tip.category] || 'info';
            return `<li class="landmark-tip">${icon(iconName, 16)}<span>${tip.text}</span></li>`;
          }).join('')}
        </ul>
      </div>
    `;
  }

  // 按 PRD 语义重要性排序：先按 TIPS_GROUP_ORDER，未列的落到末尾按首现顺序
  const sorted = groupKeys.slice().sort((a, b) => {
    const ia = TIPS_GROUP_ORDER.indexOf(a);
    const ib = TIPS_GROUP_ORDER.indexOf(b);
    if (ia === -1 && ib === -1) return groupSeqOrder.indexOf(a) - groupSeqOrder.indexOf(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });

  return `
    <div class="lm-section lm-tips-grouped">
      ${sorted.map(key => {
        const items = groups[key];
        const label = TIPS_GROUP_LABEL[key] || key;
        const iconKey = items[0] && TIP_CATEGORY_ICON[items[0].category] ? TIP_CATEGORY_ICON[items[0].category] : 'info';
        // 每组最多 3 条；超过折叠到 "更多"
        const visible = items.slice(0, 3);
        const extra = items.slice(3);
        return `
          <section class="tips-group">
            <header class="tips-group-header">
              ${icon(iconKey, 14)}
              <span class="tips-group-label">${label}</span>
            </header>
            <ul class="landmark-tips tips-group-list">
              ${visible.map(tip => `<li class="landmark-tip"><span>${tip.text}</span></li>`).join('')}
              ${extra.length ? `
                <li class="tips-group-more" onclick="this.parentElement.classList.add('expanded'); this.remove();">
                  <span>更多 ${extra.length} 条 ↓</span>
                </li>
                ${extra.map(tip => `<li class="landmark-tip tips-group-extra"><span>${tip.text}</span></li>`).join('')}
              ` : ''}
            </ul>
          </section>
        `;
      }).join('')}
    </div>
  `;
}

/* v2.4 F-08: landmark card hook fallback — 优先 hookShort，否则 desc 截首句 */
function getLandmarkHook(l) {
  if (l.hookShort) return l.hookShort;
  if (!l.desc) return '';
  // 取第一句（句号/感叹号/问号结尾），超过 40 字截断
  const m = l.desc.match(/^[^。！？!?]+[。！？!?]?/);
  let first = m ? m[0] : l.desc;
  if (first.length > 40) first = first.slice(0, 38) + '…';
  return first;
}

function toggleOverview() {
  const full = document.getElementById('overviewFull');
  const btn = document.getElementById('overviewToggle');
  if (!full || !btn) return;
  const isOpen = full.classList.toggle('open');
  btn.classList.toggle('open', isOpen);
  const txt = btn.querySelector('.overview-toggle-text');
  if (txt) txt.textContent = isOpen ? '收起' : '继续阅读';
}

function renderTicket(t) {
  if (!t) return '';
  // Back-compat: legacy string ticket (shouldn't exist after v2.3 migration, but safe)
  if (typeof t === 'string') {
    return `<div class="info-item">
      <span class="info-label">${icon('ticket', 12)}门票</span>
      <span class="info-value ${t.includes('免费') ? 'free' : ''}">${t}</span>
    </div>`;
  }
  const { price, channels, bookingWindow, timingTip } = t;
  const priceBlock = price ? `
    <div class="info-item">
      <span class="info-label">${icon('ticket', 12)}门票</span>
      <span class="info-value ${price.includes('免费') ? 'free' : ''}">${price}</span>
    </div>` : '';

  const hasChannels = Array.isArray(channels) && channels.length > 0;
  const channelsBlock = hasChannels ? `
    <div class="ticket-section ticket-channels">
      <div class="ticket-section-title">购票渠道</div>
      ${channels.map(ch => ch.url
        ? `<a class="ticket-channel" href="${ch.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
             ${icon('externalLink', 12)}
             <span class="ticket-channel-name">${ch.name}</span>
             ${ch.note ? `<span class="ticket-channel-note">${ch.note}</span>` : ''}
           </a>`
        : `<div class="ticket-channel ticket-channel-plain">
             <span class="ticket-channel-name">${ch.name}</span>
             ${ch.note ? `<span class="ticket-channel-note">${ch.note}</span>` : ''}
           </div>`
      ).join('')}
    </div>` : '';

  // bookingWindow: object (A/B tier: peak/shoulder/offpeak) OR string (C tier: single sentence)
  let bwBlock = '';
  if (typeof bookingWindow === 'string' && bookingWindow.trim()) {
    bwBlock = `
    <div class="ticket-section ticket-booking">
      <div class="ticket-section-title">预约提前</div>
      <div class="ticket-booking-single">${bookingWindow}</div>
    </div>`;
  } else if (bookingWindow && typeof bookingWindow === 'object') {
    const bw = bookingWindow;
    const hasBW = bw.peak || bw.shoulder || bw.offpeak;
    if (hasBW) {
      bwBlock = `
    <div class="ticket-section ticket-booking">
      <div class="ticket-section-title">预约提前</div>
      ${bw.peak ? `<div class="ticket-booking-row"><span class="ticket-booking-season">旺季</span><span class="ticket-booking-span">${bw.peak}</span></div>` : ''}
      ${bw.shoulder ? `<div class="ticket-booking-row"><span class="ticket-booking-season">肩季</span><span class="ticket-booking-span">${bw.shoulder}</span></div>` : ''}
      ${bw.offpeak ? `<div class="ticket-booking-row"><span class="ticket-booking-season">淡季</span><span class="ticket-booking-span">${bw.offpeak}</span></div>` : ''}
    </div>`;
    }
  }

  const tipBlock = timingTip ? `
    <div class="ticket-section ticket-timing">
      <div class="ticket-section-title">时段建议</div>
      <div class="ticket-timing-text">${icon('lightbulb', 14)}<span>${timingTip}</span></div>
    </div>` : '';

  return priceBlock + channelsBlock + bwBlock + tipBlock;
}

function renderTips(tips) {
  if (!Array.isArray(tips) || tips.length === 0) return '';
  return `
    <ul class="landmark-tips">
      ${tips.map(tip => {
        const iconName = TIP_CATEGORY_ICON[tip.category] || 'info';
        return `<li class="landmark-tip">${icon(iconName, 16)}<span>${tip.text}</span></li>`;
      }).join('')}
    </ul>`;
}

function formatYear(y) {
  if (y < 0) return `公元前${Math.abs(y)}年`;
  return `${y}年`;
}

/* ═══════════════════════════════════════
   SEARCH PAGE
   ═══════════════════════════════════════ */
function renderSearch() {
  const app = document.getElementById('app');
  const themeCounts = {};
  THEMES.forEach(t => { themeCounts[t.id] = CITIES.filter(c => c.themes.includes(t.id)).length; });

  app.innerHTML = `
    <div class="search-page">
      <div class="search-bar">
        <div class="search-input-wrap">
          ${icon('search', 18, 'search-input-icon')}
          <input class="search-input" id="searchInput" type="text" placeholder="搜索城市、国家或主题..." oninput="onSearch()" autofocus>
        </div>
      </div>
      <div class="search-content" id="searchContent">
        <div id="searchResults" style="display:none"></div>

        <div id="searchDefault">
          <div class="sec-header" style="padding-left:0">按主题探索</div>
          <div class="search-theme-grid">
            ${THEMES.map(t => `
              <div class="search-theme-item" onclick="navTo('#/');setTimeout(()=>setFilter('theme','${t.id}'),100)" data-search-theme="${t.id}">
                <div class="search-theme-bg" style="background-image: ${t.gradient}" data-theme-cover="${t.id}"></div>
                <div class="search-theme-overlay">
                  <div class="search-theme-emoji">${themeIcon(t.id, 22)}</div>
                  <div class="search-theme-name">${t.name}</div>
                  <div class="search-theme-count">${themeCounts[t.id]} 座城市</div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="sec-header" style="padding-left:0;margin-top:16px">按大洲浏览</div>
          ${CONTINENTS.map(cont => {
            const cities = CITIES.filter(c => c.continent === cont.id);
            return `
              <div class="continent-item" id="cont-${cont.id}">
                <div class="continent-hdr" onclick="toggleContinent('${cont.id}')">
                  <span>${cont.name}</span>
                  <span>${cities.length} 座城市 <span class="arrow">›</span></span>
                </div>
                <div class="continent-body">
                  ${cities.map(c => `
                    <div class="continent-city" onclick="navTo('#/city/${c.id}')">
                      <span>${c.name} ${c.nameEn}</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;

  window.scrollTo(0, 0);

  // Load theme cover images for search page
  loadSearchThemeCovers();
}

function loadSearchThemeCovers() {
  const titles = THEMES.map(t => t.cover).filter(t => t && !imgCache[t]);
  const apply = () => {
    THEMES.forEach(t => {
      if (imgCache[t.cover]) {
        document.querySelectorAll(`[data-theme-cover="${t.id}"]`).forEach(el => {
          el.style.backgroundImage = `url('${imgCache[t.cover]}')`;
        });
      }
    });
  };
  if (!titles.length) { apply(); return; }
  batchLoadWiki(titles, apply);
}

function onSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  const defaultEl = document.getElementById('searchDefault');

  if (!q) {
    resultsEl.style.display = 'none';
    defaultEl.style.display = 'block';
    return;
  }

  defaultEl.style.display = 'none';
  resultsEl.style.display = 'block';

  // Match cities
  const matched = CITIES.filter(c => {
    const haystack = [c.name, c.nameEn, c.country, ...c.themes.map(tid => {
      const t = THEMES.find(th => th.id === tid);
      return t ? t.name : '';
    })].join(' ').toLowerCase();
    return haystack.includes(q);
  });

  if (!matched.length) {
    const hotCities = CITIES.slice(0, 3);
    const hotThemes = THEMES.slice(0, 3);
    resultsEl.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${icon('search', 40)}</div>
        <div class="empty-state-text">未找到相关内容</div>
        <div class="empty-state-section">
          <div class="empty-state-label">热门城市</div>
          ${hotCities.map(c => `
            <div class="search-result" onclick="navTo('#/city/${c.id}')">
              <div class="search-result-thumb" style="background-image: ${c.heroGradient}" data-city-img="${c.id}"></div>
              <div class="search-result-info">
                <div class="search-result-name">${c.name}<span>${c.nameEn}</span></div>
                <div class="search-result-sub">${c.country}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="empty-state-section">
          <div class="empty-state-label">热门主题</div>
          <div class="empty-state-themes">
            ${hotThemes.map(t => `<button class="filter-chip" onclick="document.getElementById('searchInput').value='${t.name}';onSearch()">${themeIcon(t.id, 12)}${t.name}</button>`).join('')}
          </div>
        </div>
      </div>
    `;
    applyCachedImages();
    return;
  }

  resultsEl.innerHTML = matched.map(c => `
    <div class="search-result" onclick="navTo('#/city/${c.id}')">
      <div class="search-result-thumb" style="background-image: ${c.heroGradient}" data-city-img="${c.id}"></div>
      <div class="search-result-info">
        <div class="search-result-name">${c.name}<span>${c.nameEn}</span></div>
        <div class="search-result-sub">${c.country} · ${CONTINENT_MAP[c.continent]}</div>
      </div>
    </div>
  `).join('');

  applyCachedImages();
}

function toggleContinent(id) {
  const el = document.getElementById(`cont-${id}`);
  if (el) el.classList.toggle('open');
}

/* ═══════════════════════════════════════
   WIKIPEDIA IMAGE LOADING
   ═══════════════════════════════════════ */
function loadWikiImage(title, cb) {
  if (!title) return;
  if (imgCache[title]) { cb(imgCache[title]); return; }

  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=pageimages&format=json&pithumbsize=800&origin=*&redirects=1`;
  fetch(url).then(r => r.json()).then(data => {
    const pages = data.query?.pages;
    if (!pages) return;
    for (const page of Object.values(pages)) {
      if (page.thumbnail?.source) {
        imgCache[title] = page.thumbnail.source;
        cb(page.thumbnail.source);
        return;
      }
    }
  }).catch(() => {});
}

function loadAllCityImages() {
  const titles = CITIES.map(c => c.wiki).filter(t => t && !imgCache[t]);
  if (!titles.length) { applyCachedImages(); return; }

  batchLoadWiki(titles, () => applyCachedImages());
}

function loadThemeImages() {
  const titles = THEMES.map(t => t.cover).filter(t => t && !imgCache[t]);
  if (!titles.length) { applyThemeImages(); return; }

  batchLoadWiki(titles, () => applyThemeImages());
}

function loadLandmarkImages(landmarks) {
  const wikiLandmarks = landmarks.filter(l => l.wiki);
  if (!wikiLandmarks.length) return;

  const titles = wikiLandmarks.map(l => l.wiki);
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles.map(encodeURIComponent).join('|')}&prop=pageimages&format=json&pithumbsize=800&origin=*&redirects=1`;

  fetch(url).then(r => r.json()).then(data => {
    const q = data.query;
    const titleMap = {};
    titles.forEach(t => { titleMap[t] = t; });
    (q.normalized || []).forEach(n => { titleMap[n.from] = n.to; });
    (q.redirects || []).forEach(r => {
      for (const [k, v] of Object.entries(titleMap)) {
        if (v === r.from) titleMap[k] = r.to;
      }
    });

    const imgMap = {};
    for (const page of Object.values(q.pages)) {
      if (page.thumbnail?.source) imgMap[page.title] = page.thumbnail.source;
    }

    wikiLandmarks.forEach(l => {
      const finalTitle = titleMap[l.wiki];
      const imgUrl = imgMap[finalTitle];
      if (!imgUrl) return;
      const i = landmarks.indexOf(l);
      const banner = document.getElementById(`banner-${i}`);
      if (banner) {
        banner.style.backgroundImage = `url('${imgUrl}')`;
      }
    });
  }).catch(() => {});
}

function batchLoadWiki(titles, cb) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles.map(encodeURIComponent).join('|')}&prop=pageimages&format=json&pithumbsize=800&origin=*&redirects=1`;

  fetch(url).then(r => r.json()).then(data => {
    const q = data.query;
    if (!q) return;

    const titleMap = {};
    titles.forEach(t => { titleMap[t] = t; });
    (q.normalized || []).forEach(n => { titleMap[n.from] = n.to; });
    (q.redirects || []).forEach(r => {
      for (const [k, v] of Object.entries(titleMap)) {
        if (v === r.from) titleMap[k] = r.to;
      }
    });

    for (const page of Object.values(q.pages)) {
      if (page.thumbnail?.source) {
        // Find original title
        for (const [orig, mapped] of Object.entries(titleMap)) {
          if (mapped === page.title) {
            imgCache[orig] = page.thumbnail.source;
          }
        }
      }
    }

    if (cb) cb();
  }).catch(() => { if (cb) cb(); });
}

function applyCachedImages() {
  CITIES.forEach(c => {
    if (imgCache[c.wiki]) {
      document.querySelectorAll(`[data-city-img="${c.id}"]`).forEach(el => {
        el.style.backgroundImage = `url('${imgCache[c.wiki]}')`;
      });
    }
  });
}

function applyThemeImages() {
  THEMES.forEach(t => {
    if (imgCache[t.cover]) {
      document.querySelectorAll(`[data-theme-img="${t.id}"]`).forEach(el => {
        el.style.backgroundImage = `url('${imgCache[t.cover]}')`;
      });
    }
  });
}

/* ═══════════════════════════════════════
   TYPEWRITER
   ═══════════════════════════════════════ */
function typewriter(elId, text) {
  const el = document.getElementById(elId);
  if (!el) return;
  el.innerHTML = '<span class="cursor"></span>';
  let i = 0;
  typewriterTimer = setInterval(() => {
    if (i < text.length) {
      el.innerHTML = text.substring(0, i + 1) + '<span class="cursor"></span>';
      i++;
    } else {
      clearInterval(typewriterTimer);
      typewriterTimer = null;
      setTimeout(() => { if (el) el.innerHTML = text; }, 2000);
    }
  }, 40);
}

/* ═══════════════════════════════════════
   FILTER BAR FADE
   ═══════════════════════════════════════ */
function setupFilterFade() {
  const bar = document.getElementById('filterBar');
  const fade = document.getElementById('filterFade');
  if (!bar || !fade) return;

  const checkScroll = () => {
    const atEnd = bar.scrollLeft + bar.clientWidth >= bar.scrollWidth - 4;
    fade.classList.toggle('hidden', atEnd);
  };
  bar.addEventListener('scroll', checkScroll, { passive: true });
  checkScroll();
}

/* ═══════════════════════════════════════
   SCROLL ANIMATIONS (v2.4 F-12: fix first-node reveal flash)
   ═══════════════════════════════════════ */
function setupScrollAnimations() {
  const targets = document.querySelectorAll('.city-card, .timeline-item, .landmark-card');
  if (!targets.length) return;

  // Double rAF: guarantee browser committed the initial hidden state (opacity:0 + transition-delay)
  // before any .visible class toggles. Without this, first timeline node can paint blank because
  // IntersectionObserver fires before the transition is attached.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' });

      targets.forEach(el => {
        if (el.classList.contains('visible')) return;
        // Items already in viewport on setup: force reveal (don't rely on observer's lazy fire)
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
        if (inView) {
          el.classList.add('visible');
        } else {
          observer.observe(el);
        }
      });
    });
  });
}

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */
handleRoute();
