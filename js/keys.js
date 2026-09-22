/* Navigation between the three interfaces with the "/" key. */
(function () {
  var ORDER = ['index.html', 'saas.html', 'navia.html'];

  function currentName() {
    var p = location.pathname.split('/').pop();
    if (ORDER.indexOf(p) >= 0) return p;
    return 'index.html';
  }

  function nextHref() {
    var i = ORDER.indexOf(currentName());
    if (i < 0) i = 0;
    return ORDER[(i + 1) % ORDER.length];
  }

  function isTyping(el) {
    if (!el) return false;
    var tag = (el.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || !!el.isContentEditable;
  }

  window.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.ctrlKey || e.altKey || e.metaKey) return;
    if (isTyping(e.target)) return;
    e.preventDefault();
    e.stopPropagation();

    var inFrame = window.top !== window.self;
    if (inFrame) {
      try {
        if (window.top.__cycleInterface) window.top.__cycleInterface();
        else location.href = nextHref();
      } catch (err) {
        location.href = nextHref();
      }
    } else if (window.__cycleInterface) {
      window.__cycleInterface();
    } else {
      location.href = nextHref();
    }
  }, true);
})();
