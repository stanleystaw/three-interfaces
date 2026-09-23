/* Gallery: 45 images (10 generated + 35 found on Pinterest/Dribbble/Behance) + filters + lightbox */
(function () {
  var CATS = { dark: 'Dark', saas: 'SaaS Purple', d3: '3D Character' };

  /* --- 10 generated shots (dark portfolio style) --- */
  var GEN = [
    'Architecture Atelier', 'Shadows Photo', 'Fintech Money UI', 'In Motion Reel', 'Studio Nine Agency',
    'Type Foundry', 'Brand Lab Chrome', 'Crimson Cut Edit', 'Clay Lab 3D', 'User First Research'
  ];

  /* --- 35 found shots: [file, cat, title, source] --- */
  var FOUND = [
    ['f01','dark','Noir & Ember','https://pinterest.com/ideas/dark-mode-website/925351782942'],
    ['f02','dark','Xanchés Designer','https://dribbble.com/search/dark-landing-page'],
    ['f03','dark','Digital Experiences','https://dribbble.com/tags/dark-portfolio'],
    ['f04','dark','Meron Studio','https://dribbble.com/tags/dark-portfolio'],
    ['f05','dark','Analog Portrait Dark','https://dribbble.com/tags/dark-portfolio'],
    ['f06','saas','Brand Launch Site','https://www.behance.net/search/projects/dark%20mode%20ui%20landing%20page'],
    ['f07','saas','24/7 Support','https://muz.li/inspiration/dark-mode/'],
    ['f08','saas','Aurora UI Screens','https://behance.net/search/projects/?search=dark+theme'],
    ['f09','saas','Playful Dashboard','https://dribbble.com/tags/purple%20design'],
    ['f10','saas','Nebula Analytics','https://www.pinterest.com/ideas/saas-landing-pages/933013474046/'],
    ['f11','saas','Boost AI Rankings','https://www.pinterest.com/ideas/purple-landing-page/905964885437/'],
    ['f12','saas','Streamline Support','https://www.behance.net/gallery/180507383/Saas-Landing-Page-Dark-Mode'],
    ['f13','saas','Dark Desk Mockup','https://www.behance.net/gallery/180507383/Saas-Landing-Page-Dark-Mode'],
    ['f14','saas','Emerald SaaS','https://pinterest.com/ideas/saas-website-design-landing-pages/936849610074'],
    ['f15','saas','VR Vision','https://dribbble.com/search/violet-design'],
    ['f16','saas','Squarix Automation','https://dribbble.com/search/web-design-ui-ux-modern-violet'],
    ['f17','saas','SaaS Platform','https://dribbble.com/tags/saas-landing-page-design'],
    ['f18','saas','AI Data Integrations','https://dribbble.com/tags/purple-landing-page'],
    ['f19','saas','Customize Fast','https://www.pinterest.com/ideas/saas-landing-pages/933013474046/'],
    ['f20','saas','All-in-One Productivity','https://www.pinterest.com/ideas/saas-landing-pages/933013474046/'],
    ['f21','d3','Zylo 3D Studio','https://dribbble.com/search/3d-artist-portfolio'],
    ['f22','d3','3D Artist Portfolio','https://www.behance.net/search/projects/portfolio%20website%20design'],
    ['f23','d3','Shapes Showreel','https://www.behance.net/search/projects/landing%20page%203d'],
    ['f24','d3','Just Clouds','https://dribbble.com/tags/purple'],
    ['f25','d3','Client vs Designer','https://dribbble.com/tags/3d_character'],
    ['f26','d3','Botani Web','https://dribbble.com/tags/purple_web'],
    ['f27','d3','Soft Head Study','https://pinterest.com/mathewodhiamboo/3d-character'],
    ['f28','d3','Avatar Expressions','https://www.pinterest.com/ideas/3d-character-design/953434736653/'],
    ['f29','d3','World Character','https://pinterest.com/mathewodhiamboo/3d-character'],
    ['f30','d3','Street Crew 3D','https://pinterest.com/roytankuofeng/3d-character'],
    ['f31','d3','Wavessly Agency','https://dribbble.com/search/3d-portfolio-website'],
    ['f32','d3','FREY Agency','https://dribbble.com/search/3d-portfolio-website'],
    ['f33','d3','ThreeDee Avatars','https://dribbble.com/tags/3d-avatars'],
    ['f34','d3',"Portfoli'o Daniel",'https://dribbble.com/search/3d-portfolio-website'],
    ['f35','d3','Stand Out Portfolio','https://dribbble.com/search/3d-portfolio-website']
  ];

  var items = [];
  var i;
  for (i = 0; i < 10; i++) {
    items.push({ file: 'g' + pad(i + 1), cat: 'dark', title: GEN[i], src: '' });
  }
  FOUND.forEach(function (r) {
    items.push({ file: r[0], cat: r[1], title: r[2], src: r[3] });
  });

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
      card.querySelector('.cap i').textContent = 'indispo.';
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
      if (cat === 'iface') {
        document.getElementById('interfaces').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      document.querySelectorAll('.card').forEach(function (c) {
        c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
      });
      if (cat === 'all') window.scrollTo({ top: document.getElementById('images').offsetTop - 80, behavior: 'smooth' });
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
    lbCap.innerHTML = pad(idx + 1) + ' / 45 — ' + it.title + ' · ' + CATS[it.cat] +
      (it.src ? ' · <a href="' + it.src + '" target="_blank" rel="noopener">source ↗</a>' : ' · image générée');
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
    if (e.key === 'Escape') { e.stopPropagation(); close(); }
    else if (e.key === 'ArrowLeft') { e.stopPropagation(); step(-1); }
    else if (e.key === 'ArrowRight') { e.stopPropagation(); step(1); }
  }, true);
})();
