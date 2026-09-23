/* Navigation: "/" cycles through the 3 interfaces — Escape returns to the gallery. */
(function () {
  var INTERFACES = ['designer.html', 'saas.html', 'navia.html'];

  function pageName() {
    var p = location.pathname.split('/').pop();
    return p || 'index.html';
  }

  function nextHref() {
    var name = pageName();
    var i = INTERFACES.indexOf(name);
    if (i < 0) return INTERFACES[0];           /* gallery / unknown → first interface */
    return INTERFACES[(i + 1) % INTERFACES.length];
  }

  function isTyping(el) {
    if (!el) return false;
    var tag = (el.tagName || '').toLowerCase();
    return tag === 'input' || tag === 'textarea' || tag === 'select' || !!el.isContentEditable;
  }

  window.addEventListener('keydown', function (e) {
    if (isTyping(e.target)) return;
    if (e.ctrlKey || e.altKey || e.metaKey) return;

    /* "/" → next interface */
    if (e.key === '/') {
      e.preventDefault();
      e.stopPropagation();
      location.href = nextHref();
      return;
    }

    /* Escape → back to the gallery */
    if (e.key === 'Escape' && pageName() !== 'index.html') {
      e.preventDefault();
      location.href = 'index.html';
    }
  }, true);
})();
