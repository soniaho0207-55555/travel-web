/* ═══════════════════════════════════════
   STATE
   ═══════════════════════════════════════ */
let homeScrollPos = 0;
let activeFilter = { type: null, value: null };
let typewriterTimer = null;
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

  if (hash.startsWith('#/city/')) {
    const id = hash.split('/').pop();
    renderCityDetail(id);
  } else if (hash.startsWith('#/search')) {
    renderSearch();
    updateNav('search');
  } else {
    renderHome();
    updateNav('home');
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
      <div class="home-hero-bg" id="heroBg" style="background: ${today.heroGradient}"></div>
      <div class="home-header">
        <div class="home-logo">环球史迹<span>Global Chronicles</span></div>
        <button class="home-search-btn" onclick="navTo('#/search')">🔍</button>
      </div>
      <div class="hero-content">
        <div class="hero-badge">${today.tagline}</div>
        <div class="hero-city-name">${today.name}</div>
        <div class="hero-city-en">${today.nameEn}</div>
        <div class="hero-quote" id="heroQuote"></div>
        <button class="hero-cta" onclick="navTo('#/city/${today.id}')">探索这座城市 →</button>
      </div>
      <div class="hero-scroll-hint">──── 上滑发现更多 ────</div>
    </section>

    <!-- THEMES -->
    <div class="sec-header">主题探索</div>
    <div class="theme-scroll">
      ${THEMES.map(t => `
        <div class="theme-card" onclick="setFilter('theme','${t.id}')" data-theme-card="${t.id}">
          <div class="theme-card-img" style="background: ${t.gradient}" data-theme-img="${t.id}"></div>
          <div class="theme-card-info">
            <div class="theme-card-name">${t.emoji} ${t.name}</div>
            <div class="theme-card-count">${themeCounts[t.id]} 座城市</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- FILTER + CITY CARDS -->
    <div class="filter-bar" id="filterBar">
      <button class="filter-chip ${!activeFilter.type ? 'active' : ''}" onclick="setFilter(null,null)">全部</button>
      ${THEMES.map(t => `<button class="filter-chip ${activeFilter.type==='theme'&&activeFilter.value===t.id?'active':''}" onclick="setFilter('theme','${t.id}')">${t.emoji}${t.name}</button>`).join('')}
      <div class="filter-sep"></div>
      ${CONTINENTS.map(c => `<button class="filter-chip ${activeFilter.type==='continent'&&activeFilter.value===c.id?'active':''}" onclick="setFilter('continent','${c.id}')">${c.name}</button>`).join('')}
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
    typewriter('heroQuote', '"' + today.heroQuote + '"');
  }, 400);

  // Load city card images & theme images
  loadAllCityImages();
  loadThemeImages();

  // Scroll animations
  setTimeout(() => setupScrollAnimations(), 100);

  // Restore scroll
  setTimeout(() => window.scrollTo(0, homeScrollPos), 30);
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
      return t ? `<span class="city-card-tag">${t.emoji} ${t.name}</span>` : '';
    }).join('');

    return `
      <div class="city-card" style="transition-delay:${i * 0.08}s" onclick="navTo('#/city/${c.id}')">
        <div class="city-card-img" data-city-img="${c.id}" style="background: ${c.heroGradient}"></div>
        <div class="city-card-body">
          <div class="city-card-name">${c.name}<span>${c.nameEn}</span></div>
          <div class="city-card-sub">${c.countryFlag} ${c.country} · ${CONTINENT_MAP[c.continent]}</div>
          <div class="city-card-hook">"${c.hook}"</div>
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
      ${THEMES.map(t => `<button class="filter-chip ${activeFilter.type==='theme'&&activeFilter.value===t.id?'active':''}" onclick="setFilter('theme','${t.id}')">${t.emoji}${t.name}</button>`).join('')}
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
}

/* ═══════════════════════════════════════
   CITY DETAIL PAGE
   ═══════════════════════════════════════ */
let detailTab = 'timeline';

function renderCityDetail(id) {
  const c = CITIES.find(ci => ci.id === id);
  if (!c) { navTo('#/'); return; }
  detailTab = 'timeline';

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="detail-page">
      <section class="detail-hero">
        <button class="detail-back" onclick="history.back()">←</button>
        <div class="detail-hero-bg" id="detailHeroBg" style="background: ${c.heroGradient}"></div>
        <div class="detail-hero-content">
          <div class="detail-eyebrow">— ${c.countryFlag} ${c.country} · 历史与遗迹 —</div>
          <h1 class="detail-title">${c.name}<em>${c.nameEn}</em></h1>
          <div class="detail-meta">
            <div class="detail-stat"><strong>${c.timeline.length}</strong>历史节点</div>
            <div class="detail-stat"><strong>${c.landmarks.length}</strong>重要景点</div>
            <div class="detail-stat"><strong style="font-size:0.68rem;letter-spacing:0.03em">${c.coords}</strong>坐标</div>
          </div>
        </div>
      </section>

      <div class="overview"><p>${c.overview}</p></div>

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
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <div class="panel" data-panel="landmarks">
        <div class="landmarks-wrap">
          ${c.landmarks.map((l, i) => `
            <div class="landmark-card" id="lm-${i}" style="transition-delay:${i * 0.08}s" onclick="toggleLandmark(${i})">
              <div class="landmark-head">
                <div class="landmark-head-text">
                  <div class="landmark-name">${l.name}</div>
                  <div class="landmark-era">${l.era}</div>
                </div>
                <div class="landmark-toggle">+</div>
              </div>
              <div class="landmark-body" id="lb-${i}">
                <div class="landmark-content">
                  <div class="landmark-banner" id="banner-${i}" style="background: ${l.gradient}">
                    <div class="landmark-banner-name">${l.name}</div>
                    <div class="landmark-banner-era">${l.era}</div>
                  </div>
                  <p class="landmark-desc">${l.desc}</p>
                  ${l.worldEvents && l.worldEvents.length ? `
                    <div class="world-events">
                      <div class="world-events-title">🌍 ${formatYear(l.yearNum)}，世界其他地方</div>
                      ${l.worldEvents.map(we => `
                        <div class="world-event">
                          <div class="world-event-city">${we.flag} ${we.city}</div>
                          <div class="world-event-text">${we.event}</div>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                  <div class="practical-info">
                    <div class="info-item">
                      <span class="info-label">⏱ 开放时间</span>
                      <span class="info-value">${l.hours}</span>
                    </div>
                    <div class="info-item">
                      <span class="info-label">🎟 门票</span>
                      <span class="info-value ${l.ticket.includes('免费') ? 'free' : ''}">${l.ticket}</span>
                    </div>
                    ${l.note ? `<div class="info-note">💡 ${l.note}</div>` : ''}
                  </div>
                  <div class="landmark-tags">${l.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>
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
      bg.style.backgroundSize = 'cover';
      bg.style.backgroundPosition = 'center';
    }
  });

  // Load landmark images
  loadLandmarkImages(c.landmarks);

  setTimeout(() => setupScrollAnimations(), 100);

  // Update nav
  updateNav(null);
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
    const id = hash.split('/').pop();
    const c = CITIES.find(ci => ci.id === id);
    if (c) loadLandmarkImages(c.landmarks);
  }
}

function toggleLandmark(i) {
  const card = document.getElementById(`lm-${i}`);
  const body = document.getElementById(`lb-${i}`);
  if (!card || !body) return;
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  card.classList.toggle('expanded', !isOpen);
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
        <input class="search-input" id="searchInput" type="text" placeholder="搜索城市、国家或主题..." oninput="onSearch()" autofocus>
      </div>
      <div class="search-content" id="searchContent">
        <div id="searchResults" style="display:none"></div>

        <div id="searchDefault">
          <div class="sec-header" style="padding-left:0">按主题探索</div>
          <div class="search-theme-grid">
            ${THEMES.map(t => `
              <div class="search-theme-item" onclick="navTo('#/');setTimeout(()=>setFilter('theme','${t.id}'),100)">
                <div class="search-theme-emoji">${t.emoji}</div>
                <div class="search-theme-name">${t.name}</div>
                <div class="search-theme-count">${themeCounts[t.id]} 座城市</div>
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
                      <span class="continent-city-flag">${c.countryFlag}</span>
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
    resultsEl.innerHTML = '<div class="no-results">没有找到匹配结果</div>';
    return;
  }

  resultsEl.innerHTML = matched.map(c => `
    <div class="search-result" onclick="navTo('#/city/${c.id}')">
      <div class="search-result-thumb" style="background: ${c.heroGradient}" data-city-img="${c.id}"></div>
      <div class="search-result-info">
        <div class="search-result-name">${c.name}<span>${c.nameEn}</span></div>
        <div class="search-result-sub">${c.countryFlag} ${c.country} · ${CONTINENT_MAP[c.continent]}</div>
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
   SCROLL ANIMATIONS
   ═══════════════════════════════════════ */
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.city-card, .timeline-item, .landmark-card').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */
handleRoute();
