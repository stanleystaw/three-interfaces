/* site.js — interactions for the 45 recreated sites */
(function () {
  document.documentElement.classList.add('has-js');

  /* ---- scroll reveal ---- */
  var els = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          /* animate counters inside */
          en.target.querySelectorAll('[data-count]').forEach(count);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
    document.querySelectorAll('[data-count]').forEach(count);
  }

  /* ---- number count-up ---- */
  function count(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    var target = parseInt(el.getAttribute('data-count'), 10) || 0;
    var dur = 1200, t0 = null;
    function tick(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---- nav shadow on scroll ---- */
  var bar = document.querySelector('.topbar');
  if (bar) {
    var onScroll = function () {
      if (window.scrollY > 14) bar.style.transform = 'translateY(0)';
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---- skill bars that are NOT inside a reveal ---- */
  document.querySelectorAll('.bar').forEach(function (b) {
    if (!b.closest('[data-reveal]')) b.classList.add('in');
  });
})();
