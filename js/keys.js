/* Navigation: "/" cycles through ALL 48 interfaces — Escape returns to the gallery. */
(function () {
  var ORDER = [
    'designer.html', 'saas.html', 'navia.html',
    'p01.html','p02.html','p03.html','p04.html','p05.html','p06.html','p07.html','p08.html','p09.html','p10.html',
    'p11.html','p12.html','p13.html','p14.html','p15.html','p16.html','p17.html','p18.html','p19.html','p20.html',
    'p21.html','p22.html','p23.html','p24.html','p25.html','p26.html','p27.html','p28.html','p29.html','p30.html',
    'p31.html','p32.html','p33.html','p34.html','p35.html','p36.html','p37.html','p38.html','p39.html','p40.html',
    'p41.html','p42.html','p43.html','p44.html','p45.html'
  ];

  function pageName() {
    return location.pathname.split('/').pop() || 'index.html';
  }

  function nextHref() {
    var i = ORDER.indexOf(pageName());
    if (i < 0) return ORDER[0];                 /* gallery → first interface */
    return ORDER[(i + 1) % ORDER.length];       /* cycle through 48 */
  }

  function isTyping(el) {
    if (!el) return false;
    var tag = (el.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || !!el.isContentEditable;
  }

  window.addEventListener('keydown', function (e) {
    if (isTyping(e.target)) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    if (e.key === '/') {
      e.preventDefault();
      e.stopPropagation();
      location.href = nextHref();
      return;
    }

    if (e.key === 'Escape' && pageName() !== 'index.html') {
      e.preventDefault();
      location.href = 'index.html';
    }
  }, true);
})();
