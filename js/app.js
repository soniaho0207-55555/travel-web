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
  arrowRight: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="13,6 19,12 13,18"/>',
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
let heroScrollListener = null;
const imgCache = {};
let _savedScroll = 0;

/* ═══════════════════════════════════════
   ROUTER
   ═══════════════════════════════════════ */
function navTo(hash) {
  const cur = location.hash || '#/';
  if ((cur === '#/' || cur === '#' || cur === '') && hash !== '#/' && hash !== '#') {
    homeScrollPos = window.scrollY;
  }
  // J-06: save city detail scroll when entering landmark detail
  if (cur.startsWith('#/city/') && !cur.includes('/landmark/') && hash.includes('/landmark/')) {
    _savedScroll = window.scrollY;
  }
  history.pushState(null, '', hash);
  handleRoute();
}

window.addEventListener('popstate', handleRoute);

function handleRoute() {
  const hash = location.hash || '#/';
  const app = document.getElementById('app');

  // J-05: page fade transition
  app.classList.add('page-enter');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      app.classList.remove('page-enter');
    });
  });

  const nav = document.querySelector('.bottom-nav');

  if (hash.startsWith('#/list/')) {
    const lid = hash.replace(/^#\/list\//, '').split('/')[0];
    renderListDetail(lid);
    if (nav) nav.style.display = '';
    updateNav(null);
    return;
  }

  if (hash.startsWith('#/city/')) {
    // #/city/:id  OR  #/city/:id/landmark/:index
    const parts = hash.replace(/^#\//, '').split('/'); // ['city', id, 'landmark', idx?]
    const id = parts[1];
    if (parts[2] === 'landmark' && parts[3] !== undefined) {
      renderLandmarkDetail(id, parseInt(parts[3], 10));
    } else {
      renderCityDetail(id);
      // J-06: restore scroll when returning from landmark detail
      if (_savedScroll > 0) {
        const s = _savedScroll;
        _savedScroll = 0;
        requestAnimationFrame(() => window.scrollTo(0, s));
      }
    }
    // H-05a：详情页恢复 bottom-nav（原先隐藏），用户一键可跳发现/搜索
    if (nav) nav.style.display = '';
    updateNav(null); // 详情页无激活 tab（但 nav 可见）
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

function dateHash(d) {
  const s = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  let h = 0;
  for (let i = 0; i < String(s).length; i++) {
    h = ((h << 5) - h + String(s).charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getTodaysCity() {
  return CITIES[dateHash(new Date()) % CITIES.length];
}

function getTodayCity() { return getTodaysCity(); }

/* K-06: Random place button — session-scoped de-dup */
function gotoRandomCity() {
  let visited;
  try { visited = JSON.parse(sessionStorage.getItem('visitedCities') || '[]'); }
  catch { visited = []; }
  let pool = CITIES.filter(c => !visited.includes(c.id));
  if (!pool.length) { visited = []; pool = CITIES.slice(); }
  const pick = pool[Math.floor(Math.random() * pool.length)];
  visited.push(pick.id);
  sessionStorage.setItem('visitedCities', JSON.stringify(visited));
  navTo('#/city/' + pick.id);
}

/* ═══════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════ */
function renderHome() {
  const today = getTodaysCity();
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
        <div class="hero-quote" id="heroQuote">\u201C${today.heroQuote}\u201D</div>
        <button class="hero-cta">探索这座城市 ${icon('arrowRight', 14)}</button>
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
            <div class="theme-card-subtitle">${t.subtitle}</div>
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

  // L-04: Hero 图加载编排 — 图 loaded → 200ms → fade-in quote（300ms ease-out）；3s 超时兜底
  const heroEl = document.getElementById('heroBg');
  let heroImageLoaded = false;
  const startHeroFadeIn = () => {
    if (heroImageLoaded) return;
    heroImageLoaded = true;
    setTimeout(() => {
      const quoteEl = document.getElementById('heroQuote');
      if (quoteEl) quoteEl.classList.add('loaded');
    }, 200);
  };
  const heroTimeout = setTimeout(startHeroFadeIn, 3000);
  const onHeroLoaded = () => {
    clearTimeout(heroTimeout);
    startHeroFadeIn();
  };

  // J-04: heroImage > wikiImage > wiki API
  const heroSrc = today.heroImage || today.wikiImage;
  if (heroSrc && heroEl) {
    heroEl.style.backgroundImage = `url('${heroSrc}')`;
    setTimeout(() => { heroEl.classList.add('loaded'); onHeroLoaded(); }, 50);
  } else {
    loadWikiImage(today.wiki, (url) => {
      const bg = document.getElementById('heroBg');
      if (bg && url) {
        bg.style.backgroundImage = `url('${url}')`;
        setTimeout(() => { bg.classList.add('loaded'); onHeroLoaded(); }, 50);
      }
    });
  }

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
        <button class="detail-back" onclick="navTo('#/')">←</button>
        <div class="detail-hero-bg" id="detailHeroBg" style="background-image: ${c.heroGradient}"></div>
        <div class="detail-hero-content">
          <div class="detail-eyebrow">—— ${c.country} · 历史与遗迹 ——</div>
          <h1 class="detail-title">${c.name}<em>${c.nameEn}</em></h1>
          <div class="detail-meta">
            <div class="detail-stat"><strong>${c.timeline.length}</strong>历史节点</div>
            <div class="detail-stat"><strong>${c.landmarks.length}</strong>重要景点</div>
            <div class="detail-stat"><strong style="font-size:0.68rem;letter-spacing:0.03em">${shortenCoords(c.coords)}</strong>坐标</div>
          </div>
        </div>
      </section>

      <div class="overview">
        <p>${c.overview}</p>
        ${c.overviewFull ? `
          <div class="overview-full" id="overviewFull">${renderParagraphs(c.overviewFull, c.overviewFullImages)}</div>
          <button class="overview-toggle" id="overviewToggle" onclick="toggleOverview()">
            <span class="overview-toggle-text">继续阅读</span>
            ${icon('chevronDown', 12)}
          </button>
        ` : ''}
      </div>

      <div class="section-tabs">
        <button class="section-tab active" data-tab="timeline" onclick="switchDetailTab('timeline')">历史时间轴</button>
        <button class="section-tab" data-tab="landmarks" onclick="switchDetailTab('landmarks')">重要景点</button>
        ${c.practicalInfo ? `<button class="section-tab" data-tab="practical" onclick="switchDetailTab('practical')">实用信息</button>` : ''}
      </div>

      <div class="panel active" data-panel="timeline">
        <div class="timeline-wrap">
          <div class="timeline">
            ${c.timeline.map((t, i) => `
              <div class="timeline-item" style="transition-delay:${i * 0.06}s">
                <div class="timeline-year">${t.year}</div>
                <div class="timeline-event">${t.event}</div>
                <div class="timeline-desc">${t.desc}</div>
                ${t.detail ? `
                  <button class="timeline-detail-btn" onclick="toggleTimelineDetail(this)">展开阅读 →</button>
                  <div class="timeline-detail">
                    <div class="timeline-detail-section"><div class="rich-content-section-title">背景</div>${renderParagraphs(t.detail.context, t.detail.contextImages)}</div>
                    <div class="timeline-detail-section"><div class="rich-content-section-title">人物</div>${renderParagraphs(t.detail.figures, t.detail.figuresImages)}</div>
                    <div class="timeline-detail-section"><div class="rich-content-section-title">此时全球</div>${renderParagraphs(t.detail.parallel, t.detail.parallelImages)}</div>
                  </div>
                ` : ''}
                ${t.worldContext ? `<div class="timeline-world-context">${renderWorldContext(t.worldContext)}</div>` : ''}
                ${t.epochTail ? renderEpochTail(t.epochTail) : ''}
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

      ${c.practicalInfo ? `
      <div class="panel" data-panel="practical">
        ${renderPracticalPanel(c.practicalInfo)}
      </div>
      ` : ''}

      <footer class="footer">
        <p>© 2026 环球史迹 · Global Chronicles</p>
      </footer>
    </div>
  `;

  window.scrollTo(0, 0);

  // J-04: heroImage > wikiImage > wiki API
  const cityHeroSrc = c.heroImage || c.wikiImage;
  if (cityHeroSrc) {
    const bg = document.getElementById('detailHeroBg');
    if (bg) bg.style.backgroundImage = `url('${cityHeroSrc}')`;
  } else {
    loadWikiImage(c.wiki, (url) => {
      const bg = document.getElementById('detailHeroBg');
      if (bg && url) {
        bg.style.backgroundImage = `url('${url}')`;
      }
    });
  }

  // Load landmark images
  loadLandmarkImages(c.landmarks);

  setTimeout(() => setupScrollAnimations(), 100);

  // Update nav
  updateNav(null);
}

/* K-05: practical info panel — 4 folded cards, first (transport) open by default */
function renderPracticalPanel(p) {
  if (!p) return '';
  const cards = [
    { key: 'transport',  label: '交通',     iconName: 'compass' },
    { key: 'currency',   label: '货币与支付', iconName: 'ticket' },
    { key: 'bestSeason', label: '最佳季节',  iconName: 'clock' },
    { key: 'visaTips',   label: '签证建议',  iconName: 'info' },
  ].filter(c => p[c.key]);

  return `
    <div class="practical-panel">
      ${cards.map((c, i) => `
        <div class="practical-card ${i === 0 ? 'open' : ''}">
          <div class="practical-card-header" onclick="togglePracticalCard(this)">
            <span class="practical-icon">${icon(c.iconName, 18)}</span>
            <span class="practical-card-label">${c.label}</span>
            <span class="practical-card-caret">${icon('chevronDown', 14)}</span>
          </div>
          <div class="practical-card-body">${p[c.key]}</div>
        </div>
      `).join('')}
    </div>
  `;
}

function togglePracticalCard(headerEl) {
  const card = headerEl.parentElement;
  if (card) card.classList.toggle('open');
}

function renderNotFound(id) {
  const recommended = CITIES.slice(0, 3);
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="not-found-page">
      <button class="detail-back" onclick="navTo('#/')">←</button>
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

  // v3.5-exp: ?exp=alpha / ?exp=beta 激活实验渲染（仅对有 onsite_spots 的景点生效；默认 URL 零感知）
  const expParam = (() => { try { return new URLSearchParams(location.search).get('exp'); } catch (_) { return null; } })();
  if (expParam && Array.isArray(l.onsite_spots) && l.onsite_spots.length) {
    if (expParam === 'alpha' && typeof renderExperimentAlpha === 'function') return renderExperimentAlpha(c, l, cityId, index);
    if (expParam === 'beta'  && typeof renderExperimentBeta  === 'function') return renderExperimentBeta(c, l, cityId, index);
  }

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

  // J-04: heroImage > wikiImage > wiki API > gradient fallback
  const bg = document.getElementById('lmHero');
  const lmHeroSrc = l.heroImage || l.wikiImage;
  if (lmHeroSrc && bg) {
    bg.style.backgroundImage = `url('${lmHeroSrc}')`;
    bg.classList.add('loaded');
  } else if (l.wiki) {
    loadWikiImage(l.wiki, (url) => {
      const bgEl = document.getElementById('lmHero');
      if (bgEl && url) {
        bgEl.style.backgroundImage = `url('${url}')`;
        bgEl.classList.add('loaded');
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
      <div class="rich-content-section-title">${formatYear(l.yearNum)}，世界其他地方</div>
      ${l.worldEvents.map(we => `
        <div class="world-event">
          <div class="world-event-city">${we.city}</div>
          <div class="world-event-text">${we.event}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const noteBlock = l.note ? `
    <div class="lm-note">${icon('info', 14)}<span>${l.note}</span></div>
  ` : '';

  const whyBlock = l.whyVisit ? `
    <div class="lm-why">${renderWhyVisit(l.whyVisit)}</div>
  ` : '';

  const relatedBlock = renderRelatedBlock(l);

  return `
    <div class="lm-section">
      ${whyBlock}
      ${relatedBlock}
      <p class="landmark-desc">${l.desc}</p>
      ${noteBlock}
      ${worldEventsBlock}
    </div>
  `;
}

/* K-02: render relatedLiterature / relatedFigure — after whyVisit, before desc.
   Empty field → block not rendered. */
function renderRelatedBlock(l) {
  const lit = Array.isArray(l.relatedLiterature) ? l.relatedLiterature.filter(Boolean) : [];
  const fig = Array.isArray(l.relatedFigure)     ? l.relatedFigure.filter(Boolean)     : [];
  if (!lit.length && !fig.length) return '';

  const litHtml = lit.length ? `
    <div class="lm-related">
      <div class="rich-content-section-title">文学</div>
      ${lit.map(it => `
        <div class="lm-related-item">
          <strong>${it.title || ''}</strong>${it.author ? `<span class="lm-related-meta">${it.author}${it.year != null ? ' · ' + it.year : ''}</span>` : ''}
          ${it.quote ? `<span class="lm-related-quote">「${it.quote}」</span>` : ''}
          ${it.link ? `<div>${it.link}</div>` : ''}
        </div>
      `).join('')}
    </div>` : '';

  const figHtml = fig.length ? `
    <div class="lm-related">
      <div class="rich-content-section-title">名人</div>
      ${fig.map(it => `
        <div class="lm-related-item">
          <strong>${it.name || ''}</strong>${it.era || it.role ? `<span class="lm-related-meta">${[it.era, it.role].filter(Boolean).join(' · ')}</span>` : ''}
          ${it.link ? `<div>${it.link}</div>` : ''}
        </div>
      `).join('')}
    </div>` : '';

  return litHtml + figHtml;
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
          <section class="tips-group" data-tipcat="${key}">
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

/* v2.7 I-05: 坐标缩写 — "39°54'N 116°23'E" → "39.9°N 116.4°E" */
function shortenCoords(coords) {
  if (!coords) return '';
  return coords.replace(/(\d+)°(\d+)'([NSEW])/g, (_, deg, min, dir) => {
    const decimal = (parseInt(deg) + parseInt(min) / 60).toFixed(1);
    return decimal + '°' + dir;
  });
}

/* L-01: timeline epochTail — 今天 · 左金线 + 标签（PM 负责去前缀） */
function renderEpochTail(tail) {
  if (!tail) return '';
  const body = String(tail).trim();
  return `<div class="timeline-now"><span class="timeline-now-marker"></span><span class="timeline-now-label">今天</span><span class="timeline-now-text">${body}</span></div>`;
}

/* L-A #2/#3: renderParagraphs — split \n\n → <p>; insert images every ~200 chars */
function renderParagraphs(text, images) {
  if (!text) return '';
  const paras = String(text).split('\n\n').map(p => p.trim()).filter(Boolean);
  const imgs = Array.isArray(images) ? images : [];
  if (!imgs.length) {
    return paras.map(p => `<p class="rich-content-p">${p}</p>`).join('');
  }
  const out = [];
  let charsSinceImg = 0;
  let imgIdx = 0;
  for (const p of paras) {
    out.push(`<p class="rich-content-p">${p}</p>`);
    charsSinceImg += p.length;
    if (charsSinceImg >= 200 && imgIdx < imgs.length) {
      const img = imgs[imgIdx++];
      out.push(`<figure class="rich-content-figure"><img src="${img.src}" alt="${img.alt || ''}" loading="lazy" />${img.caption ? `<figcaption>${img.caption}</figcaption>` : ''}</figure>`);
      charsSinceImg = 0;
    }
  }
  return out.join('');
}

/* L-06: worldContext 多行 — 删 emoji，地域标签统一为 small-caps 金字 */
function renderWorldContext(wc) {
  if (!wc) return '';
  const rows = wc.includes('\n') ? wc.split('\n') : [wc];
  return rows.map(raw => {
    const row = stripLeadEmoji(raw);
    const m = row.match(/^(.+?)(?:\s+·\s+|[：:]\s*)(.*)$/);
    if (m) {
      return `<div class="mw-row"><div class="timeline-world-region">${m[1].trim()}</div><div class="mw-row-text">${m[2]}</div></div>`;
    }
    return `<div class="mw-row">${row}</div>`;
  }).join('');
}

/* v3.3 N-01/N-02: whyVisit 四段式 object — {what, whyUnique, crossCivilization, detail}
   Legacy string fallback → renders under "是什么" chip + triggers red banner. */
function normalizeWhyVisit(w) {
  if (typeof w === 'string') {
    return { what: w, whyUnique: '', crossCivilization: '', detail: '', _legacy: true };
  }
  return w || null;
}

const WHY_SECTIONS = [
  { key: 'what',              label: '是什么' },
  { key: 'whyUnique',         label: '为什么独特' },
  { key: 'crossCivilization', label: '跨文明' },
  { key: 'detail',            label: '现场细节' }
];

function renderWhyVisit(raw) {
  const w = normalizeWhyVisit(raw);
  if (!w) return '';
  const legacyBanner = w._legacy ? `<div class="why-legacy-banner">⚠️ 内容过渡中 · 四段式回灌待完成</div>` : '';

  const sections = WHY_SECTIONS.map(({ key, label }) => {
    const value = typeof w[key] === 'string' ? w[key].trim() : '';
    if (!value) return '';
    const paras = value.split(/\n\n+/).filter(p => p.trim());
    const pHtml = paras.map(p => `<p>${escapeHtml(p)}</p>`).join('');
    return `<div class="why-section"><div class="rich-content-section-title">${label}</div>${pHtml}</div>`;
  }).filter(Boolean);

  if (!sections.length) return legacyBanner;

  const first = sections[0];
  const rest = sections.slice(1).join('');
  if (!rest) return legacyBanner + first;

  const foldId = 'whyFold-' + Math.random().toString(36).slice(2, 8);
  return legacyBanner + first +
    `<div class="why-fold" id="${foldId}">${rest}</div>` +
    `<button class="why-fold-btn" onclick="toggleWhyFold('${foldId}', this)">展开阅读 →</button>`;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function toggleWhyFold(id, btn) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  btn.textContent = isOpen ? '收起 ←' : '展开阅读 →';
}

/* v2.7 I-03: timeline detail expand/collapse */
function toggleTimelineDetail(btn) {
  const panel = btn.nextElementSibling;
  if (!panel) return;
  const isOpen = panel.classList.toggle('open');
  btn.textContent = isOpen ? '收起 ←' : '展开阅读 →';
}

/* v2.4 F-08: landmark card hook fallback — 优先 hookShort，否则 desc 截首句 */
/* v2.7 I-06: warn if hookShort missing (defensive, should be 53/53) */
function getLandmarkHook(l) {
  if (l.hookShort) return l.hookShort;
  if (l.name) console.warn('[hookShort missing]', l.name);
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
  // H-13: 无深链（url 为 null）时若有 searchHint 渲染为"官方XX（需在首页搜索"景点名"）"米色 70% opacity，不可点击
  const channelsBlock = hasChannels ? `
    <div class="ticket-section ticket-channels">
      <div class="ticket-section-title">购票渠道</div>
      ${channels.map(ch => {
        if (ch.url) {
          return `<a class="ticket-channel" href="${ch.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
             ${icon('externalLink', 12)}
             <span class="ticket-channel-name">${ch.name}</span>
             ${ch.note ? `<span class="ticket-channel-note">${ch.note}</span>` : ''}
           </a>`;
        }
        // 无深链分支
        if (ch.searchHint) {
          return `<div class="ticket-channel ticket-channel-hint">
             <span class="ticket-channel-name">${ch.name}</span>
             <span class="ticket-channel-search-hint">${ch.searchHint}</span>
           </div>`;
        }
        return `<div class="ticket-channel ticket-channel-plain">
             <span class="ticket-channel-name">${ch.name}</span>
             ${ch.note ? `<span class="ticket-channel-note">${ch.note}</span>` : ''}
           </div>`;
      }).join('')}
    </div>` : '';

  // bookingWindow: object (A/B tier: peak/shoulder/offpeak) OR string (C tier: single sentence)
  let bwBlock = '';
  if (typeof bookingWindow === 'string' && bookingWindow.trim()) {
    bwBlock = `
    <div class="ticket-section ticket-booking">
      <div class="booking-section-title">预约提前</div><span class="booking-subtitle">提前多久预约？不同季节不同策略</span>
      <div class="ticket-booking-single">${bookingWindow}</div>
    </div>`;
  } else if (bookingWindow && typeof bookingWindow === 'object') {
    const bw = bookingWindow;
    const hasBW = bw.peak || bw.shoulder || bw.offpeak;
    if (hasBW) {
      bwBlock = `
    <div class="ticket-section ticket-booking">
      <div class="booking-section-title">预约提前</div><span class="booking-subtitle">提前多久预约？不同季节不同策略</span>
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
   K-04 · CURATED LISTS (编辑精选)
   ═══════════════════════════════════════ */
function renderCuratedListsBlock() {
  if (typeof CURATED_LISTS === 'undefined' || !CURATED_LISTS.length) return '';
  return `
    <div class="sec-header" style="padding-left:0">编辑精选</div>
    <div class="curated-list-scroll">
      ${CURATED_LISTS.map(list => {
        const lead = (list.items && list.items[0] && list.items[0].line) ? list.items[0].line : '';
        return `
          <div class="curated-list-card" onclick="navTo('#/list/${list.id}')">
            <div class="curated-list-card-title">${list.title}</div>
            <div class="curated-list-card-subtitle">${list.subtitle || ''}</div>
            ${lead ? `<div class="curated-list-card-lead">${lead}</div>` : ''}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function renderListDetail(id) {
  const app = document.getElementById('app');
  const list = (typeof CURATED_LISTS !== 'undefined') ? CURATED_LISTS.find(l => l.id === id) : null;
  if (!list) {
    app.innerHTML = `
      <div class="not-found-page">
        <button class="detail-back" onclick="navTo('#/search')">←</button>
        <div class="not-found-icon">${icon('compass', 48)}</div>
        <h2 class="not-found-title">未找到该精选</h2>
      </div>
    `;
    window.scrollTo(0, 0);
    return;
  }

  app.innerHTML = `
    <div class="list-detail-page">
      <button class="list-detail-back" onclick="navTo('#/search')">←</button>
      <h1 class="list-detail-title">${list.title}</h1>
      <div class="list-detail-subtitle">${list.subtitle || ''}</div>
      <div class="list-detail-items">
        ${(list.items || []).map(it => {
          let target = '';
          let name = '';
          if (it.type === 'city') {
            const c = CITIES.find(x => x.id === it.id);
            name = c ? `${c.name} · ${c.nameEn}` : it.id;
            target = `#/city/${it.id}`;
          } else if (it.type === 'landmark') {
            const c = CITIES.find(x => x.id === it.cityId);
            const idx = c ? c.landmarks.findIndex(l => l.name === it.landmarkName) : -1;
            name = it.landmarkName + (c ? ` · ${c.name}` : '');
            target = (c && idx >= 0) ? `#/city/${it.cityId}/landmark/${idx}` : `#/city/${it.cityId || ''}`;
          }
          return `
            <div class="list-detail-item" onclick="navTo('${target}')">
              <div class="list-detail-item-name">${name}</div>
              <div class="list-detail-item-line">${it.line || ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  window.scrollTo(0, 0);
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
        <button class="random-place-btn" onclick="gotoRandomCity()">给我一座没去过的城 →</button>
      </div>
      <div class="search-content" id="searchContent">
        <div id="searchResults" style="display:none"></div>

        <div id="searchDefault">
          ${renderCuratedListsBlock()}

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
  // H-03/H-09: 直链优先
  applyThemeDirectImages();
  const titles = THEMES.filter(t => !t.coverUrl).map(t => t.cover).filter(t => t && !imgCache[t]);
  const apply = () => {
    THEMES.forEach(t => {
      if (t.coverUrl) return; // 已应用
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

  const resultsHtml = matched.map(c => `
    <div class="search-result" onclick="navTo('#/city/${c.id}')">
      <div class="search-result-thumb" style="background-image: ${c.heroGradient}" data-city-img="${c.id}"></div>
      <div class="search-result-info">
        <div class="search-result-name">${c.name}<span>${c.nameEn}</span></div>
        <div class="search-result-sub">${c.country} · ${CONTINENT_MAP[c.continent]}</div>
      </div>
    </div>
  `).join('');

  // G-12: 结果 ≤ 2 时补"从 X 联想" — 同主题邻居城市
  let extendHtml = '';
  if (matched.length <= 2 && matched.length > 0) {
    const matchedIds = new Set(matched.map(c => c.id));
    const themeSet = new Set();
    matched.forEach(c => (c.themes || []).forEach(t => themeSet.add(t)));
    const neighbors = CITIES.filter(c =>
      !matchedIds.has(c.id) &&
      (c.themes || []).some(t => themeSet.has(t))
    ).slice(0, 3);

    if (neighbors.length) {
      extendHtml = `
        <div class="search-extend">
          <div class="search-extend-title">从 ${document.getElementById('searchInput').value.trim()} 联想</div>
          <div class="search-extend-list">
            ${neighbors.map(c => `
              <div class="search-result" onclick="navTo('#/city/${c.id}')">
                <div class="search-result-thumb" style="background-image: ${c.heroGradient}" data-city-img="${c.id}"></div>
                <div class="search-result-info">
                  <div class="search-result-name">${c.name}<span>${c.nameEn}</span></div>
                  <div class="search-result-sub">${c.country} · ${CONTINENT_MAP[c.continent]}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  }

  resultsEl.innerHTML = resultsHtml + extendHtml;

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
  // J-04: heroImage/wikiImage 直链图应用（同步），剩余走 wiki API
  applyCityDirectImages();
  const titles = CITIES.filter(c => !c.heroImage && !c.wikiImage).map(c => c.wiki).filter(t => t && !imgCache[t]);
  if (!titles.length) { applyCachedImages(); return; }
  batchLoadWiki(titles, () => applyCachedImages());
}

function loadThemeImages() {
  // H-03/H-09: 先应用 coverUrl 直链
  applyThemeDirectImages();
  const titles = THEMES.filter(t => !t.coverUrl).map(t => t.cover).filter(t => t && !imgCache[t]);
  if (!titles.length) { applyThemeImages(); return; }
  batchLoadWiki(titles, () => applyThemeImages());
}

function loadLandmarkImages(landmarks) {
  // J-04: heroImage > wikiImage 直链 > wiki API
  landmarks.forEach((l, i) => {
    const src = l.heroImage || l.wikiImage;
    if (src) {
      const banner = document.getElementById(`banner-${i}`);
      if (banner) banner.style.backgroundImage = `url('${src}')`;
    }
  });

  const wikiLandmarks = landmarks.filter(l => l.wiki && !l.heroImage && !l.wikiImage);
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

/* J-04: heroImage > wikiImage 直链到列表卡（不走 API） */
function applyCityDirectImages() {
  CITIES.forEach(c => {
    const src = c.heroImage || c.wikiImage;
    if (!src) return;
    document.querySelectorAll(`[data-city-img="${c.id}"]`).forEach(el => {
      el.style.backgroundImage = `url('${src}')`;
    });
  });
}

/* H-03/H-09: 应用 THEMES.coverUrl 直链到主题卡（不走 API） */
function applyThemeDirectImages() {
  THEMES.forEach(t => {
    if (!t.coverUrl) return;
    document.querySelectorAll(`[data-theme-img="${t.id}"],[data-theme-cover="${t.id}"]`).forEach(el => {
      el.style.backgroundImage = `url('${t.coverUrl}')`;
    });
  });
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
    // J-04: heroImage > wikiImage > wiki API cache
    const src = c.heroImage || c.wikiImage;
    if (src) {
      document.querySelectorAll(`[data-city-img="${c.id}"]`).forEach(el => {
        el.style.backgroundImage = `url('${src}')`;
      });
      return;
    }
    if (imgCache[c.wiki]) {
      document.querySelectorAll(`[data-city-img="${c.id}"]`).forEach(el => {
        el.style.backgroundImage = `url('${imgCache[c.wiki]}')`;
      });
    }
  });
}

function applyThemeImages() {
  THEMES.forEach(t => {
    // H-03: coverUrl 直链优先
    if (t.coverUrl) {
      document.querySelectorAll(`[data-theme-img="${t.id}"]`).forEach(el => {
        el.style.backgroundImage = `url('${t.coverUrl}')`;
      });
      return;
    }
    if (imgCache[t.cover]) {
      document.querySelectorAll(`[data-theme-img="${t.id}"]`).forEach(el => {
        el.style.backgroundImage = `url('${imgCache[t.cover]}')`;
      });
    }
  });
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
