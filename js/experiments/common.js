/* ═══════════════════════════════════════════════════════════════════
   v3.5-exp v5 · 实验共享组件
   lightbox / 横滑 carousel / 3 大区块渲染器
   被 beta.js 消费；α 在 v5 已砍掉
   ═══════════════════════════════════════════════════════════════════ */

/* ——— 辅助 ——— */
function expEscape(s) {
  if (s == null) return '';
  return String(s).replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

/* PRD §P-06 · 现有 tips[] 拆到 3 tab
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

/* PRD §P-09 v5 · image string → array 兼容
   输入：spot.image（可以是 string、string[] 或 undefined）
   输出：[{src, alt, credit}, ...]（统一 shape） */
function expNormalizeSpotImages(spot) {
  if (!spot) return [];
  const imgs = Array.isArray(spot.image) ? spot.image : (spot.image ? [spot.image] : []);
  const alts = Array.isArray(spot.image_alt) ? spot.image_alt : (spot.image_alt ? [spot.image_alt] : []);
  const creds = Array.isArray(spot.photo_credit) ? spot.photo_credit : (spot.photo_credit ? [spot.photo_credit] : []);
  // v5 规定 ≥ 3 张按前 2 张处理
  const capped = imgs.slice(0, 2);
  if (imgs.length > 2 && typeof console !== 'undefined') {
    console.warn('[v5] spot.image length > 2, rendering first 2 only:', spot.title);
  }
  return capped.map((src, i) => ({
    src,
    alt: alts[i] || alts[0] || spot.title || '',
    credit: creds[i] || creds[0] || ''
  }));
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

/* ——— 旅行前 tab v5 三层结构（PRD §P-07-D） ——— */
/* 层 1 · 阅读层：whyVisit + detail_slides + relatedLiterature（默认展开）
   层 2 · 深度层：worldEvents + relatedFigure（默认折叠）
   层 3 · 行动层：ticket + 旅行前 tips + note（默认展开，微灰底）*/

function expRenderBeforeLayer1Reading(l) {
  return `
    <section class="exp-layer exp-layer-read" data-layer="read">
      <header class="exp-layer-head">
        <span class="exp-layer-label">读一读</span>
        <span class="exp-layer-sub">沙发态 · 故事</span>
      </header>
      <div class="exp-layer-body">
        ${expRenderWhyVisitReading(l)}
        ${expRenderRelatedLiterature(l)}
      </div>
    </section>
  `;
}

function expRenderBeforeLayer2Depth(l) {
  const worldHtml = expRenderMeanwhile(l);
  const figHtml = expRenderRelatedFigure(l);
  if (!worldHtml && !figHtml) return '';  // 整层为空时不渲染
  return `
    <section class="exp-layer exp-layer-depth" data-layer="depth">
      <header class="exp-layer-head exp-layer-head-toggle" onclick="expToggleLayer(this)" role="button" tabindex="0">
        <span class="exp-layer-caret">▶</span>
        <span class="exp-layer-label">深一步</span>
        <span class="exp-layer-sub">历史背景 · 点开读</span>
      </header>
      <div class="exp-layer-body exp-layer-body-collapsed">
        ${worldHtml}
        ${figHtml}
      </div>
    </section>
  `;
}

function expRenderBeforeLayer3Action(l) {
  const ticketHtml = expRenderTicketBlock(l);
  const tips = expSplitTips(l.tips).before;
  const tipsHtml = expRenderTipsFlat(tips, '');
  const noteHtml = expRenderNote(l);
  if (!ticketHtml && !tipsHtml && !noteHtml) return '';
  return `
    <section class="exp-layer exp-layer-action" data-layer="action">
      <header class="exp-layer-head">
        <span class="exp-layer-label">出发前</span>
        <span class="exp-layer-sub">票务 · 实用手册</span>
      </header>
      <div class="exp-layer-body">
        ${ticketHtml}
        ${tipsHtml}
        ${noteHtml}
      </div>
    </section>
  `;
}

function expToggleLayer(headEl) {
  const section = headEl.closest('.exp-layer');
  if (!section) return;
  section.classList.toggle('expanded');
  const body = section.querySelector('.exp-layer-body');
  if (body) body.classList.toggle('exp-layer-body-collapsed');
  const caret = headEl.querySelector('.exp-layer-caret');
  if (caret) caret.textContent = section.classList.contains('expanded') ? '▼' : '▶';
}

function expRenderWhyVisitReading(l) {
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

function expRenderRelatedLiterature(l) {
  const lit = Array.isArray(l.relatedLiterature) ? l.relatedLiterature.filter(Boolean) : [];
  if (!lit.length) return '';
  return `
    <div class="lm-related exp-related">
      <div class="rich-content-section-title">文学</div>
      ${lit.map(it => `
        <div class="lm-related-item">
          <strong>${expEscape(it.title || '')}</strong>${it.author ? `<span class="lm-related-meta">${expEscape(it.author)}${it.year != null ? ' · ' + expEscape(it.year) : ''}</span>` : ''}
          ${it.quote ? `<span class="lm-related-quote">「${expEscape(it.quote)}」</span>` : ''}
          ${it.link ? `<div>${expEscape(it.link)}</div>` : ''}
        </div>`).join('')}
    </div>`;
}

function expRenderRelatedFigure(l) {
  const fig = Array.isArray(l.relatedFigure) ? l.relatedFigure.filter(Boolean) : [];
  if (!fig.length) return '';
  return `
    <div class="lm-related exp-related">
      <div class="rich-content-section-title">名人</div>
      ${fig.map(it => `
        <div class="lm-related-item">
          <strong>${expEscape(it.name || '')}</strong>${it.era || it.role ? `<span class="lm-related-meta">${[it.era, it.role].filter(Boolean).map(expEscape).join(' · ')}</span>` : ''}
          ${it.link ? `<div>${expEscape(it.link)}</div>` : ''}
        </div>`).join('')}
    </div>`;
}

function expRenderMeanwhile(l) {
  if (!Array.isArray(l.worldEvents) || !l.worldEvents.length) return '';
  const rows = l.worldEvents.map(we => `
    <div class="world-event">
      <div class="world-event-city">${expEscape(we.city || '')}</div>
      <div class="world-event-text">${expEscape(we.event || '')}</div>
    </div>`).join('');
  const title = (typeof formatYear === 'function') ? formatYear(l.yearNum) : (l.yearNum || '');
  return `
    <div class="world-events exp-meanwhile">
      <div class="rich-content-section-title">${expEscape(title)}，世界其他地方</div>
      ${rows}
    </div>`;
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

function expRenderTicketBlock(l) {
  if (typeof renderLmTicket === 'function') return renderLmTicket(l);
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

/* v5 · spot 卡片（单图 / 双图 自动切）
   image.length === 1 → 单图 + zoom lightbox
   image.length === 2 → 横滑 2 图：第 0 张全局 + 第 1 张细节 */
function expRenderOnsiteSpots(spots) {
  if (!Array.isArray(spots) || !spots.length) return '';
  const cards = spots.map(s => {
    const imgs = expNormalizeSpotImages(s);
    const vis = s.visibility && s.visibility !== '常开'
      ? `<span class="exp-spot-visibility">⚠ ${expEscape(s.visibility)}</span>` : '';
    const dual = imgs.length >= 2;
    const imgHtml = imgs.length ? (dual ? expRenderSpotDualImage(imgs) : expRenderSpotSingleImage(imgs[0])) : '';
    return `
      <article class="exp-spot-card${dual ? ' exp-spot-dual' : ''}" data-n="${expEscape(s.n)}">
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

function expRenderSpotSingleImage(img) {
  return `
    <div class="exp-spot-img-wrap">
      <img class="exp-spot-img"
           src="${expEscape(img.src)}"
           alt="${expEscape(img.alt)}"
           loading="lazy"
           onerror="this.classList.add('failed')"
           onclick="expLightboxOpen('${expEscape(img.src)}', '${expEscape(img.alt)}', '${expEscape(img.credit)}')" />
      <div class="exp-spot-zoom">点图放大</div>
    </div>`;
}

function expRenderSpotDualImage(imgs) {
  // 横滑 carousel 嵌在 spot 卡片头部：第 0 张全局（"全貌"标签）+ 第 1 张细节（"细节"标签）
  const labels = ['全貌', '细节'];
  const items = imgs.map((img, i) => `
    <figure class="exp-dual-frame" data-role="${i === 0 ? 'overview' : 'detail'}">
      <img class="exp-spot-img"
           src="${expEscape(img.src)}"
           alt="${expEscape(img.alt)}"
           loading="lazy"
           onerror="this.classList.add('failed')"
           onclick="expLightboxOpen('${expEscape(img.src)}', '${expEscape(img.alt)}', '${expEscape(img.credit)}')" />
      <figcaption class="exp-dual-caption">${labels[i] || ''} · 点图放大</figcaption>
    </figure>
  `).join('');
  const dots = imgs.map((_, i) => `<span class="exp-dual-dot${i === 0 ? ' active' : ''}" data-idx="${i}"></span>`).join('');
  return `
    <div class="exp-spot-dual-wrap">
      <div class="exp-dual-track">${items}</div>
      <div class="exp-dual-hint">← 滑到${labels[1] || '细节'} →</div>
      <div class="exp-dual-dots" aria-hidden="true">${dots}</div>
    </div>`;
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
  high:   { txt: '重要',     cls: 'high' },
  medium: { txt: '注意',     cls: 'medium' },
  low:    { txt: '知道即可', cls: 'low' }
};

function expRenderSurvivalCards(list) {
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
  return `<div class="exp-surv-list">${cards}</div>`;
}

/* v5: 景点页 Survival 只显示景点级（城市级已迁到城市页 §P-12）*/
function expRenderSurvivalSection(l) {
  if (!Array.isArray(l.survival_tips) || !l.survival_tips.length) {
    return '';  // 空 → 调用者应直接隐藏 tab（§P-12-G）
  }
  return expRenderSurvivalCards(l.survival_tips);
}

function expLandmarkHasSurvival(l) {
  return Array.isArray(l && l.survival_tips) && l.survival_tips.length > 0;
}

/* ——— β 3 大 tab 区块（beta.js 消费） ——— */
function expRenderBeforeSection(l) {
  return `
    <div class="exp-before">
      ${expRenderBeforeLayer1Reading(l)}
      ${expRenderBeforeLayer2Depth(l)}
      ${expRenderBeforeLayer3Action(l)}
    </div>
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

function expRenderSurvivalSectionFull(l) {
  return expRenderSurvivalSection(l);
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
