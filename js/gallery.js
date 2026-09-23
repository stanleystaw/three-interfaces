/* Gallery: 3 original interfaces + 45 new interface pages — filters + links */
(function () {
  var CATS = { dark: 'Dark', saas: 'SaaS Purple', d3: '3D Character' };

  /* 10 generated shots (dark portfolio style) → p01–p10 */
  var GEN = [
    'Architecture Atelier', 'Shadows Photo', 'Fintech Money UI', 'In Motion Reel', 'Studio Nine Agency',
    'Type Foundry', 'Brand Lab Chrome', 'Crimson Cut Edit', 'Clay Lab 3D', 'User First Research'
  ];

  /* 35 found shots → p11–p45 : [file, cat, title] */
  var FOUND = [
    ['f01','dark','Nexus AI — Think Fast'],
    ['f02','dark','Xanchés Designer'],
    ['f03','dark','Vanta Digital Experiences'],
    ['f04','dark','Meron Portfolio'],
    ['f05','dark','Analog & Direction'],
    ['f06','saas','LaunchKit Brand & Web'],
    ['f07','saas','Relay 24/7 Release'],
    ['f08','saas','Aurora Every Screen'],
    ['f09','saas','Playful Analytics'],
    ['f10','saas','Zauriq All-in-One'],
    ['f11','saas','Rankly AI SEO'],
    ['f12','saas','Engage Customer'],
    ['f13','saas','Nocturne Edition'],
    ['f14','saas','Astra Capital'],
    ['f15','saas','VR Vision'],
    ['f16','saas','Squarix Automation'],
    ['f17','saas','Platfy SaaS UX'],
    ['f18','saas','DataOS AI Data'],
    ['f19','saas','Helpos Service Platform'],
    ['f20','saas','Techkit X Analytics'],
    ['f21','d3','Zylo 3D Motion'],
    ['f22','d3','ArcLab 3D Artist'],
    ['f23','d3','Motionly Create'],
    ['f24','d3','Just Clouds'],
    ['f25','d3','Client × Designer'],
    ['f26','d3','Botani Grow'],
    ['f27','d3','Aura Soft Models'],
    ['f28','d3','Moodr Emotions'],
    ['f29','d3','WRLD Characters'],
    ['f30','d3','Koka Autumn'],
    ['f31','d3','Wavessly Agency'],
    ['f32','d3','Frey Creative Depth'],
    ['f33','d3','ThreeDee Avatars'],
    ['f34','d3',"Portfoli'o Daniel"],
    ['f35','d3','Standout Kit']
  ];

  var items = [];
  var i;
  for (i = 0; i < 10; i++) {
    items.push({ file: 'g' + pad(i + 1), cat: 'dark', title: GEN[i], page: 'p' + pad(i + 1) + '.html' });
  }
  FOUND.forEach(function (r, k) {
    items.push({ file: r[0], cat: r[1], title: r[2], page: 'p' + pad(k + 11) + '.html' });
  });

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  var grid = document.getElementById('grid');
  var frag = document.createDocumentFragment();

  items.forEach(function (it, idx) {
    var card = document.createElement('a');
    card.className = 'card';
    card.href = it.page;
    card.dataset.cat = it.cat;
    card.innerHTML =
      '<span class="tag">' + CATS[it.cat] + '</span>' +
      '<img src="assets/gallery/' + it.file + '.jpg" alt="' + it.title + '" loading="lazy">' +
      '<span class="cap"><span>' + pad(idx + 1) + ' · ' + it.title + '</span><i>OUVRIR →</i></span>';
    card.querySelector('img').addEventListener('error', function () {
      card.classList.add('missing');
      card.querySelector('.cap i').textContent = 'indispo.';
      card.removeAttribute('href');
    });
    frag.appendChild(card);
  });
  grid.appendChild(frag);

  /* ---- filters ---- */
  var filters = document.querySelectorAll('.filter');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      filters.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var cat = btn.dataset.cat;
      if (cat === 'iface') {
        e.preventDefault();
        document.getElementById('interfaces').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      document.querySelectorAll('.card').forEach(function (c) {
        c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
      });
    });
  });
})();
