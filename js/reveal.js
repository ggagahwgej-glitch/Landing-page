/* ============================================================
   ELITE ACADEMY — reveal.js
   Subtle scroll-triggered reveal animations
   ============================================================ */
(function () {
  'use strict';

  var elements = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));

  function init() {
    /* Apply stagger delays */
    elements.forEach(function (el) {
      var delay = el.getAttribute('data-reveal-delay');
      if (delay) {
        el.style.setProperty('--reveal-delay', delay + 'ms');
      }
    });

    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach(function (el) {
        el.classList.add('in');
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  window.EliteAcademy = window.EliteAcademy || {};
  EliteAcademy.reveal = { init: init };
})();
