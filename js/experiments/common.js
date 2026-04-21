/* ═══════════════════════════════════════════════════════════════════
   v3.5-exp · 实验共享组件（lightbox / carousel / 3 大区块渲染器）
   被 alpha.js（纯滚动）+ beta.js（3 tab）共同消费
   ═══════════════════════════════════════════════════════════════════ */

/* ——— 辅助 ——— */
function expEscape(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

/* PRD §P-06 · 现有 tips[] 拆到 3 tab（本期不迁移数据，渲染层按 category 自动分配）
   - 旅行前：ticket / cold / season / dress / timing（默认）
   - 旅行中：photo / walking / route / secret */
function expSplitTips(tips) {
  const before = [], onsite = [];
  (Array.isArray(tips) ? tips : []).forEach(t => {
    const cat = (t && t.category) || 'secret';
    if (cat === 'photo' || cat === 'walking' || cat === 'route' || cat === 'secret') {
      onsite.push(t);
    } else {
      before.push(t);
    }
  });
  return { before, onsite };
}

/* ——— Lightbox ——— */
function expLightboxInit() {
  if (document.getElementById('expLightbox')) return;
  const lb = document.createElement('div');
  lb.id = 'expLightbox';
  lb.className = 'exp-lightbox';
  lb.setAttribute('aria-hidden', 'true');
  lb.innerHTML = `
    <button class="exp-lightbox-close" type="button" aria-label="关闭">×</button>
    <img class="exp-lightbox-img" alt="" />
    <div class="exp-lightbox-credit"></div>
  `;
  lb.addEventListener('click', (e) => {
    if (e.target === lb || e.target.classList.contains('exp-lightbox-close')) {
      expLightboxClose();
    }
  });
  document.body.appendChild(lb);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') expLightboxClose();
  });
}

function expLightboxOpen(src, alt, credit) {
  expLightboxInit();
  const lb = document.getElementById('expLightbox');
  const img = lb.querySelector('.exp-lightbox-img');
  const c = lb.querySelector('.exp-lightbox-credit');
  img.src = src || '';
  img.alt = alt || '';
  c.textContent = credit || '';
  lb.classList.add('open');
  lb.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function expLightboxClose() {
  const lb = document.getElementById('expLightbox');
  if (!lb) return;
  lb.classList.remove('open');
  lb.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

/* ——— 旅行前 ——— */
/* whyVisit 四段：前 3 段照常 paragraph；第 4 段 detail 若有 detail_slides → 走横滑切片；否则回落 detail 字符串 */
function expRenderWhyVisit(l) {
  const w = (typeof normalizeWhyVisit === 'function') ? normalizeWhyVisit(l.whyVisit) : l.whyVisit;
  if (!w) return '';
  const slides = Array.isArray(w.detail_slides) ? w.detail_slides.filter(Boolean) : [];
  const secs = [
    { key: 'what',              label: '是什么' },
    { key: 'whyUnique',         label: '为什么独特' },
    { key: 'crossCivilization', label: '跨文明' }
  ];
  const html = secs.map(({ key, label }) => {
    const v = typeof w[key] === 'string' ? w[key].trim() : '';
    if (!v) return '';
    const paras = v.split(/\n\n+/).filter(p => p.trim())
      .map(p => `<p>${expEscape(p)}</p>`).join('');
    return `<div class="why-section exp-why-section"><div class="rich-content-section-title">${label}</div>${paras}</div>`;
  }).filter(Boolean).join('');

  let detailHtml = '';
  const detailStr = (typeof w.detail === 'string') ? w.detail.trim() : '';
  if (slides.length) {
    detailHtml = `
      <div class="why-section exp-why-section">
        <div class="rich-content-section-title">现场细节</div>
        ${expRenderCarousel(slides)}
      </div>`;
  } else if (detailStr) {
    detailHtml = `
      <div class="why-section exp-why-section">
        <div class="rich-content-section-title">现场细节</div>
        <p>${expEscape(detailStr)}</p>
      </div>`;
  }
  return `<div class="lm-why exp-why">${html}${detailHtml}</div>`;
}

/* detail_slides 横滑切片 · 全宽 bleed + scroll-snap */
function expRenderCarousel(slides) {
  const items = slides.map((s, i) => `
    <figure class="exp-slide" data-idx="${i}">
      <img class="exp-slide-img"
           src="${expEscape(s.image)}"
           alt="${expEscape(s.image_alt || '')}"
           loading="lazy"
           onerror="this.classList.add('failed')"
           onclick="expLightboxOpen('${expEscape(s.image)}', '${expEscape(s.image_alt || '')}', '${expEscape(s.photo_credit || '')}')" />
      <figcaption class="exp-slide-caption">${expEscape(s.caption || '')}</figcaption>
    </figure>
  `).join('');
  return `
    <div class="exp-carousel" role="region" aria-label="图文切片">
      <div class="exp-carousel-track">${items}</div>
      <div class="exp-carousel-hint">← 横滑看下一片 →</div>
    </div>
  `;
}

function expRenderMeanwhile(l) {
  if (!Array.isArray(l.worldEvents) || !l.worldEvents.length) return '';
  const rows = l.worldEvents.map(we => `
    <div class="world-event">
      <div class="world-event-city">${expEscape(we.city || '')}</div>
      <div class="world-event-text">${expEscape(we.event || '')}</div>
    </div>`).join('');
  return `
    <div class="world-events exp-meanwhile">
      <div class="rich-content-section-title">${expEscape((typeof formatYear === 'function' ? formatYear(l.yearNum) : (l.yearNum || '')))}，世界其他地方</div>
      ${rows}
    </div>`;
}

function expRenderTicketBlock(l) {
  if (typeof renderLmTicket === 'function') return renderLmTicket(l);
  return '';
}

function expRenderRelatedBlock(l) {
  if (typeof renderRelatedBlock === 'function') return renderRelatedBlock(l);
  return '';
}

function expRenderTipsFlat(tips, title) {
  if (!Array.isArray(tips) || !tips.length) return '';
  const items = tips.map(t => {
    const iconName = (typeof TIP_CATEGORY_ICON === 'object' && TIP_CATEGORY_ICON[t.category]) || 'info';
    const ic = (typeof icon === 'function') ? icon(iconName, 14) : '';
    return `<li class="landmark-tip">${ic}<span>${expEscape(t.text || '')}</span></li>`;
  }).join('');
  return `
    <div class="exp-tips-block">
      ${title ? `<div class="rich-content-section-title">${expEscape(title)}</div>` : ''}
      <ul class="landmark-tips">${items}</ul>
    </div>`;
}

function expRenderNote(l) {
  if (!l.note) return '';
  const ic = (typeof icon === 'function') ? icon('info', 14) : '';
  return `<div class="lm-note exp-note">${ic}<span>${expEscape(l.note)}</span></div>`;
}

/* ——— 旅行中 ——— */
function expRenderOnsiteMap(l) {
  if (!l.onsite_map) return '';
  const alt = `${expEscape(l.name)} 平面图（3 个编号对应下方 spots）`;
  return `
    <figure class="exp-onsite-map">
      <img src="${expEscape(l.onsite_map)}"
           alt="${alt}"
           loading="lazy"
           onerror="this.classList.add('failed')"
           onclick="expLightboxOpen('${expEscape(l.onsite_map)}', '${alt}', '')" />
      <figcaption class="exp-onsite-map-caption">点图放大 · 3 处红圈对应下方 spots</figcaption>
    </figure>`;
}

function expRenderOnsiteSpots(spots) {
  if (!Array.isArray(spots) || !spots.length) return '';
  const cards = spots.map(s => {
    const vis = s.visibility && s.visibility !== '常开'
      ? `<span class="exp-spot-visibility">⚠ ${expEscape(s.visibility)}</span>` : '';
    const imgHtml = s.image ? `
      <div class="exp-spot-img-wrap">
        <img class="exp-spot-img"
             src="${expEscape(s.image)}"
             alt="${expEscape(s.image_alt || s.title || '')}"
             loading="lazy"
             onerror="this.classList.add('failed')"
             onclick="expLightboxOpen('${expEscape(s.image)}', '${expEscape(s.image_alt || '')}', '${expEscape(s.photo_credit || '')}')" />
        ${s.zoom !== false ? '<div class="exp-spot-zoom">点图放大</div>' : ''}
      </div>` : '';
    return `
      <article class="exp-spot-card" data-n="${expEscape(s.n)}">
        ${imgHtml}
        <div class="exp-spot-body">
          <div class="exp-spot-head">
            <span class="exp-spot-badge">${expEscape(s.n)}</span>
            <h3 class="exp-spot-title">${expEscape(s.title || '')}</h3>
            ${vis}
          </div>
          ${s.anchor ? `<div class="exp-spot-anchor">📍 ${expEscape(s.anchor)}</div>` : ''}
          <p class="exp-spot-text">${expEscape(s.body || '')}</p>
        </div>
      </article>`;
  }).join('');
  return `<div class="exp-spot-list">${cards}</div>`;
}

/* picks 渲染为无箭头 pill 组（taste P1：保持"选择权"，不渲染递增编号压制） */
function expRenderRouteSuggestions(routes, spots) {
  if (!Array.isArray(routes) || !routes.length) return '';
  const byN = {};
  (spots || []).forEach(s => { byN[s.n] = s; });
  const DURATION_LABEL = { '90min': '90 分钟', '3h': '3 小时', 'half-day': '半日' };
  const rows = routes.map(r => {
    const picks = (Array.isArray(r.picks) ? r.picks : []).map(n => {
      const sp = byN[n];
      return `<span class="exp-route-pill">${expEscape(sp ? sp.title : '#' + n)}</span>`;
    }).join('');
    return `
      <div class="exp-route-row">
        <div class="exp-route-head">
          <span class="exp-route-duration">${expEscape(DURATION_LABEL[r.duration] || r.duration || '')}</span>
          <span class="exp-route-label">${expEscape(r.label || '')}</span>
        </div>
        <div class="exp-route-picks">${picks}</div>
      </div>`;
  }).join('');
  return `
    <div class="exp-routes">
      <div class="rich-content-section-title">动线建议</div>
      ${rows}
    </div>`;
}

/* ——— Survival ——— */
const EXP_KIND_LABEL = {
  scam: '套路',
  logistics: '门径',
  etiquette: '礼数',
  practical: '实操'
};
const EXP_SEVERITY_BADGE = {
  high: { txt: '重要', cls: 'high' },
  medium: { txt: '注意', cls: 'medium' },
  low: { txt: '知道即可', cls: 'low' }
};

function expRenderSurvivalCards(list, levelLabel) {
  if (!Array.isArray(list) || !list.length) return '';
  const cards = list.map(t => {
    const kindLabel = EXP_KIND_LABEL[t.kind] || (t.kind || '').toString();
    const sev = EXP_SEVERITY_BADGE[t.severity];
    const sevBadge = sev ? `<span class="exp-surv-sev exp-surv-sev-${sev.cls}">${sev.txt}</span>` : '';
    return `
      <article class="exp-surv-card exp-surv-kind-${expEscape(t.kind || 'practical')}">
        <header class="exp-surv-head">
          <span class="exp-surv-kind">${expEscape(kindLabel)}</span>
          ${sevBadge}
          <h4 class="exp-surv-title">${expEscape(t.title || '')}</h4>
        </header>
        <p class="exp-surv-body">${expEscape(t.body || '')}</p>
      </article>`;
  }).join('');
  return `
    <section class="exp-surv-group">
      <div class="rich-content-section-title">${expEscape(levelLabel)}</div>
      <div class="exp-surv-list">${cards}</div>
    </section>`;
}

function expRenderSurvivalSection(l, c) {
  const lmHtml = expRenderSurvivalCards(l.survival_tips, '景点级');
  const cityHtml = expRenderSurvivalCards(c && c.survival_tips, `城市级 · ${(c && c.name) || ''}`);
  if (!lmHtml && !cityHtml) {
    return `<div class="lm-section lm-empty">本景点暂无 Survival 条目</div>`;
  }
  return `${lmHtml}${cityHtml}`;
}

/* ——— 3 大区块（共享；alpha/beta 都调这 3 个） ——— */
function expRenderBeforeSection(l) {
  const tips = expSplitTips(l.tips).before;
  return `
    ${expRenderWhyVisit(l)}
    ${expRenderRelatedBlock(l)}
    ${expRenderNote(l)}
    ${expRenderMeanwhile(l)}
    ${expRenderTicketBlock(l)}
    ${expRenderTipsFlat(tips, tips.length ? '旅行前 Tips' : '')}
  `;
}

function expRenderOnsiteSection(l) {
  const tips = expSplitTips(l.tips).onsite;
  return `
    ${expRenderOnsiteMap(l)}
    ${expRenderOnsiteSpots(l.onsite_spots)}
    ${expRenderRouteSuggestions(l.route_suggestions, l.onsite_spots)}
    ${expRenderTipsFlat(tips, tips.length ? '旅行中 Tips' : '')}
  `;
}

function expRenderSurvivalSectionFull(l, c) {
  return expRenderSurvivalSection(l, c);
}

/* ——— 通用：hero + 返回 + header ——— */
function expRenderHero(l, cityId) {
  return `
    <button class="detail-back" onclick="navTo('#/city/${expEscape(cityId)}')">←</button>
    <div class="lm-hero" id="lmHero" style="background-image: ${l.gradient || ''}"></div>
    <div class="lm-header">
      <h1 class="lm-name">${expEscape(l.name)}</h1>
      <div class="lm-era">${expEscape(l.era || '')}</div>
    </div>
  `;
}

function expHydrateHero(l) {
  const bg = document.getElementById('lmHero');
  const src = l.heroImage || l.wikiImage;
  if (src && bg) {
    bg.style.backgroundImage = `url('${src}')`;
    bg.classList.add('loaded');
  } else if (l.wiki && typeof loadWikiImage === 'function') {
    loadWikiImage(l.wiki, (url) => {
      const bgEl = document.getElementById('lmHero');
      if (bgEl && url) {
        bgEl.style.backgroundImage = `url('${url}')`;
        bgEl.classList.add('loaded');
      }
    });
  }
}
