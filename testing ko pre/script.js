
const cityData = [
  {
    id: 'copenhagen',
    name: 'Copenhagen',
    region: 'Northern Europe',
    flag: '🇩🇰',
    x: 520, y: 130,
    desc: 'The gold standard for cycling cities, with a target to be the first carbon-neutral capital by 2025.',
    metrics: [
      { v: '72%', l: 'Cycling' },
      { v: '64%', l: 'Renewables' },
      { v: '38%', l: 'Green space' },
      { v: '#1',  l: 'Global rank' },
    ],
    tags: ['Cycling', 'Wind energy', 'District heating'],
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    region: 'Western Europe',
    flag: '🇳🇱',
    x: 500, y: 145,
    desc: 'Solar canals, electric boats, and one of the densest green-roof networks in Europe.',
    metrics: [
      { v: '64%', l: 'Renewables' },
      { v: '58%', l: 'Green roofs' },
      { v: '89%', l: 'Recycling' },
      { v: '#3',  l: 'Global rank' },
    ],
    tags: ['Solar', 'Green roofs', 'Water reuse'],
  },
  {
    id: 'singapore',
    name: 'Singapore',
    region: 'Southeast Asia',
    flag: '🇸🇬',
    x: 740, y: 245,
    desc: 'A biophilic city-state blending skyscraper gardens, water recycling, and dense transit.',
    metrics: [
      { v: '47%', l: 'Green cover' },
      { v: '40%', l: 'Water reuse' },
      { v: '#1',  l: 'Asia rank' },
      { v: '82%', l: 'Transit share' },
    ],
    tags: ['Vertical gardens', 'NEWater', 'Smart grid'],
  },
  {
    id: 'seoul',
    name: 'Seoul',
    region: 'East Asia',
    flag: '🇰🇷',
    x: 800, y: 195,
    desc: 'Restored Cheonggyecheon stream, bike superhighways, and a massive urban forest plan.',
    metrics: [
      { v: '55%', l: 'Transit' },
      { v: '33%', l: 'Green space' },
      { v: '70%', l: 'EV buses' },
      { v: '#5',  l: 'Global rank' },
    ],
    tags: ['Stream restore', 'Bike network', 'EV fleet'],
  },
  {
    id: 'melbourne',
    name: 'Melbourne',
    region: 'Oceania',
    flag: '🇦🇺',
    x: 850, y: 375,
    desc: 'Urban forest strategy targeting 40% canopy cover, plus world-leading tram electrification.',
    metrics: [
      { v: '38%', l: 'Canopy' },
      { v: '60%', l: 'Tram fleet' },
      { v: '44%', l: 'Renewables' },
      { v: '#7',  l: 'Global rank' },
    ],
    tags: ['Urban forest', 'Trams', 'Solar farms'],
  },
  {
    id: 'curitiba',
    name: 'Curitiba',
    region: 'South America',
    flag: '🇧🇷',
    x: 320, y: 340,
    desc: 'Pioneer of BRT transit and a globally studied model for participatory urban design.',
    metrics: [
      { v: '85%', l: 'Recycling' },
      { v: '45%', l: 'Green space' },
      { v: '70%', l: 'BRT share' },
      { v: '#12', l: 'Global rank' },
    ],
    tags: ['BRT pioneer', 'Green exchange', 'Parks'],
  },
  {
    id: 'bogota',
    name: 'Bogotá',
    region: 'South America',
    flag: '🇨🇴',
    x: 300, y: 300,
    desc: 'The Ciclovía opens 120km of streets weekly — the world\'s largest car-free event.',
    metrics: [
      { v: '76%', l: 'Green mobility' },
      { v: '62%', l: 'Transit' },
      { v: '30%', l: 'Green space' },
      { v: '#18', l: 'Global rank' },
    ],
    tags: ['Ciclovía', 'BRT', 'Public space'],
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    region: 'North America',
    flag: '🇨🇦',
    x: 155, y: 145,
    desc: 'The Greenest City 2020 Action Plan hit most targets, with a 2030 zero-carbon goal next.',
    metrics: [
      { v: '68%', l: 'Renewables' },
      { v: '50%', l: 'Green transit' },
      { v: '35%', l: 'Green jobs' },
      { v: '#6',  l: 'Global rank' },
    ],
    tags: ['Zero carbon', 'Green jobs', 'Seawall'],
  },
];

const timelineEvents = [
  { year: '2018', title: 'The Copenhagen Declaration', desc: 'Forty cities sign the first shared commitment to measurable urban carbon cuts.' },
  { year: '2019', title: 'Vertical Forest Standard', desc: 'Milan\'s Bosco Verticale inspires a global template adopted by 22 municipalities.' },
  { year: '2020', title: 'The 15-Minute Pivot', desc: 'Paris mainstreams the 15-minute city — rest of Europe follows within 18 months.' },
  { year: '2021', title: 'Solar Canal Pilot', desc: 'Amsterdam converts canal surfaces into floating solar arrays, doubling local output.' },
  { year: '2022', title: 'Bike Superhighway Network', desc: 'Seoul opens 80km of car-free elevated routes connecting seven districts.' },
  { year: '2023', title: 'The 45% Milestone', desc: 'Average CO₂ reduction across partner cities crosses the 45% threshold.' },
  { year: '2024', title: 'Biodiversity Accord', desc: 'Cities commit to net-positive biodiversity in all new public works.' },
  { year: '2025', title: 'The Atlas Launch', desc: 'Green Cities Atlas goes live — the world\'s first open, real-time urban index.' },
];

const scores = [
  { city: 'Copenhagen', overall: 94, indicators: { Energy: 92, Transit: 98, Nature: 88, Waste: 95, Water: 90, Policy: 96 } },
  { city: 'Singapore',  overall: 91, indicators: { Energy: 85, Transit: 93, Nature: 94, Waste: 88, Water: 97, Policy: 89 } },
  { city: 'Amsterdam',  overall: 89, indicators: { Energy: 90, Transit: 94, Nature: 82, Waste: 91, Water: 88, Policy: 87 } },
  { city: 'Seoul',      overall: 86, indicators: { Energy: 82, Transit: 91, Nature: 84, Waste: 86, Water: 85, Policy: 88 } },
  { city: 'Vancouver',  overall: 84, indicators: { Energy: 88, Transit: 80, Nature: 86, Waste: 82, Water: 84, Policy: 83 } },
  { city: 'Melbourne',  overall: 82, indicators: { Energy: 84, Transit: 85, Nature: 80, Waste: 79, Water: 82, Policy: 80 } },
];


function renderHotspots() {
  const g = document.getElementById('hotspots');
  if (!g) return;

  g.innerHTML = cityData
    .map(
      (c) => `
      <g class="hotspot" data-id="${c.id}" transform="translate(${c.x},${c.y})">
        <circle class="halo" r="14" />
        <circle class="dot" r="5" />
        <title>${c.name}</title>
      </g>
    `
    )
    .join('');

  g.querySelectorAll('.hotspot').forEach((el) => {
    el.addEventListener('click', () => selectCity(el.dataset.id));
  });
}


function selectCity(id) {
  const city = cityData.find((c) => c.id === id);
  if (!city) return;

  document.querySelectorAll('.hotspot').forEach((h) => {
    h.classList.toggle('active', h.dataset.id === id);
  });

  const panel = document.getElementById('detailPanel');
  panel.innerHTML = `
    <div class="detail-content">
      <div class="detail-flag">${city.flag}</div>
      <h3 class="detail-city">${city.name}</h3>
      <p class="detail-region">${city.region}</p>
      <p class="detail-desc">${city.desc}</p>

      <div class="detail-metrics">
        ${city.metrics
          .map(
            (m) => `
          <div class="metric-cell">
            <span class="mv">${m.v}</span>
            <span class="ml">${m.l}</span>
          </div>
        `
          )
          .join('')}
      </div>

      <div class="detail-tags">
        ${city.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `;
}


function renderTimeline() {
  const wrap = document.getElementById('timelineScroll');
  if (!wrap) return;

  wrap.innerHTML = timelineEvents
    .map(
      (e, i) => `
      <div class="tl-card reveal">
        <div class="tl-year">${e.year}</div>
        <h3 class="tl-title">${e.title}</h3>
        <p class="tl-desc">${e.desc}</p>
        <span class="tl-num">${String(i + 1).padStart(2, '0')} / ${String(timelineEvents.length).padStart(2, '0')}</span>
      </div>
    `
    )
    .join('');
}


function renderScores() {
  const grid = document.getElementById('scoresGrid');
  if (!grid) return;

  grid.innerHTML = scores
    .map(
      (s) => `
      <div class="score-card reveal">
        <div class="score-head">
          <span class="score-city">${s.city}</span>
          <span class="score-overall">${s.overall}</span>
        </div>
        <div class="score-bars">
          ${Object.entries(s.indicators)
            .map(
              ([k, v]) => `
            <div class="score-row">
              <span class="label">${k}</span>
              <div class="bar-track">
                <div class="bar-fill" data-value="${v}"></div>
              </div>
              <span class="val">${v}</span>
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    `
    )
    .join('');
}

function animateScoreBars() {
  document.querySelectorAll('.bar-fill').forEach((bar) => {
    bar.style.width = bar.dataset.value + '%';
  });
}


function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;

  const run = (el) => {
    const target = +el.dataset.count;
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    };
    requestAnimationFrame(tick);
  };

  if (!('IntersectionObserver' in window)) {
    els.forEach(run);
    return;
  }

  const ob = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          run(e.target);
          ob.unobserve(e.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  els.forEach((el) => ob.observe(el));
}


let revealOb;
function attachReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!els.length) return;

  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('visible'));
    return;
  }

  if (!revealOb) {
    revealOb = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            revealOb.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
  }
  els.forEach((el) => revealOb.observe(el));
}


function initScoreObserver() {
  const grid = document.getElementById('scoresGrid');
  if (!grid) return;

  if (!('IntersectionObserver' in window)) {
    animateScoreBars();
    return;
  }

  const ob = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateScoreBars();
          ob.unobserve(e.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  ob.observe(grid);
}


function initCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;

  let mx = 0, my = 0, x = 0, y = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    glow.style.opacity = '1';
  });

  const loop = () => {
    x += (mx - x) * 0.12;
    y += (my - y) * 0.12;
    glow.style.left = x + 'px';
    glow.style.top = y + 'px';
    requestAnimationFrame(loop);
  };
  loop();

  document.addEventListener('mouseleave', () => (glow.style.opacity = '0'));
}


function initSideNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.side-link');
  if (!sections.length || !links.length) return;

  const onScroll = () => {
    const pos = window.scrollY + 200;
    let current = '';
    sections.forEach((s) => {
      if (pos >= s.offsetTop) current = s.id;
    });
    links.forEach((l) => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}


function initMobileMenu() {
  const btn = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  if (!btn || !sidebar) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  sidebar.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => sidebar.classList.remove('open'));
  });
}


function initTicker() {
  const ticker = document.getElementById('ticker');
  if (!ticker) return;

  const lines = ticker.querySelectorAll('.ticker-line');
  if (lines.length < 2) return;

  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % lines.length;
    lines.forEach((l, i) => {
      l.style.transition = 'transform 0.4s, opacity 0.4s';
      l.style.transform = i === idx ? 'translateY(0)' : 'translateY(-4px)';
      l.style.opacity = i === idx ? '1' : '0.3';
      l.style.position = 'absolute';
    });
  }, 2200);

  // Init state
  lines.forEach((l, i) => {
    l.style.position = 'absolute';
    l.style.opacity = i === 0 ? '1' : '0.3';
  });
}


function initBriefForm() {
  const form = document.getElementById('briefForm');
  const note = document.getElementById('formNote');
  if (!form || !note) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bName').value.trim();
    const email = document.getElementById('bEmail').value.trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !ok) {
      note.textContent = '✗ Please provide a valid name and email.';
      note.className = 'form-note err';
      return;
    }

    note.textContent = `✓ Welcome aboard, ${name}. Confirmation sent.`;
    note.className = 'form-note ok';
    form.reset();
  });
}


function initYear() {
  const el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
}


document.addEventListener('DOMContentLoaded', () => {
  renderHotspots();
  renderTimeline();
  renderScores();

  attachReveal();
  initCounters();
  initScoreObserver();
  initCursorGlow();
  initSideNav();
  initMobileMenu();
  initTicker();
  initBriefForm();
  initYear();
});