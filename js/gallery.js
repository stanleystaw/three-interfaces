/* Gallery: 45 images + filters + lightbox */
(function () {
  var CATS = { dark: 'Dark', saas: 'SaaS Purple', d3: '3D Character' };
  var TITLES = {
    dark: ['Architecture Atelier', 'Shadows Photo', 'Fintech Money UI', 'In Motion Reel', 'Studio Nine Agency',
           'Type Foundry', 'Brand Lab Chrome', 'Crimson Cut Edit', 'Clay Lab 3D', 'User First Research',
           'Respawn Games', 'Beat Room Studio', 'Casa Interior', 'Neon AI Founder', 'Ink Illustration'],
    saas: ['Focus Flow Tasks', 'Pulse Analytics', 'Quill AI Writer', 'Volt Payments', 'Blast Email',
           'Orbit CRM', 'Nimbus Hosting', 'Tokenry Design Sys', 'Helply Support', 'Meetly Calls',
           'Pulseform Surveys', 'Coinly Invoicing', 'Gather Community', 'Rankly SEO', 'Automate Workflows'],
    d3: ['Mira Developer', 'Kai Headphones', 'Bolt Robot', 'Luna & Cat', 'Astro Captain',
         'Brew Writer', 'Rex Gamer', 'Nova Data Science', 'Lyra Music', 'Pip Product',
         'Sk8 Designer', 'Lens Photo', 'Zoe Founder', 'Grad Scholar', 'Cyber Nyx']
  };
  var items = [];
  var cat, i, n;

  for (i = 1; i <= 15; i++) items.push({ cat: 'dark', file: 'g' + pad(i), title: TITLES.dark[i - 1] });
  for (i = 16; i <= 30; i++) items.push({ cat: 'saas', file: 'g' + pad(i), title: TITLES.saas[i - 16] });
  for (i = 31; i <= 45; i++) items.push({ cat: 'd3', file: 'g' + pad(i), title: TITLES.d3[i - 31] });

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  var grid = document.getElementById('grid');
  var frag = document.createDocumentFragment();

  items.forEach(function (it, idx) {
    var card = document.createElement('div');
    card.className = 'card';
    card.dataset.cat = it.cat;
    card.dataset.idx = String(idx);
    card.innerHTML =
      '<span class="tag">' + CATS[it.cat] + '</span>' +
      '<img src="assets/gallery/' + it.file + '.jpg" alt="' + it.title + '" loading="lazy">' +
      '<span class="cap"><span>' + pad(idx + 1) + ' · ' + it.title + '</span><i>agrandir ⤢</i></span>';
    var img = card.querySelector('img');
    img.addEventListener('error', function () {
      card.classList.add('missing');
      card.querySelector('.cap i').textContent = 'bientôt';
    });
    card.addEventListener('click', function () { if (!card.classList.contains('missing')) open(idx); });
    frag.appendChild(card);
  });
  grid.appendChild(frag);

  /* ---- filters ---- */
  var filters = document.querySelectorAll('.filter');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.dataset.cat;
      document.querySelectorAll('.card').forEach(function (c) {
        var show = cat === 'all' || cat === 'iface' || c.dataset.cat === cat;
        if (cat === 'iface') {
          document.getElementById('interfaces').scrollIntoView({ behavior: 'smooth' });
          show = true;
        }
        c.classList.toggle('hidden', !show && cat !== 'all');
      });
      if (cat === 'all') document.querySelectorAll('.card').forEach(function (c) { c.classList.remove('hidden'); });
    });
  });

  /* ---- lightbox ---- */
  var lb = document.getElementById('lightbox');
  var lbImg = document.getElementById('lbImg');
  var lbCap = document.getElementById('lbCap');
  var cur = 0;

  function open(idx) {
    cur = idx;
    var it = items[idx];
    lbImg.src = 'assets/gallery/' + it.file + '.jpg';
    lbImg.alt = it.title;
    lbCap.textContent = pad(idx + 1) + ' / 45 — ' + it.title + ' · ' + CATS[it.cat];
    lb.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function close() { lb.hidden = true; document.body.style.overflow = ''; }
  function step(d) { open((cur + d + items.length) % items.length); }

  document.getElementById('lbClose').addEventListener('click', close);
  document.getElementById('lbPrev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
  document.getElementById('lbNext').addEventListener('click', function (e) { e.stopPropagation(); step(1); });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
  window.addEventListener('keydown', function (e) {
    if (lb.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
    else if (e.key === '/') { /* let keys.js navigate away */ close(); }
    e.stopPropagation();
  }, true);
})();
