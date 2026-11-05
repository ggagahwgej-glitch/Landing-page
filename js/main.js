/* ============================================================
   ELITE ACADEMY — main.js
   Entry point: initializes all modules once the DOM is ready
   ============================================================ */
(function () {
  'use strict';

  function init() {
    var modules = ['nav', 'reveal', 'accordion', 'form'];
    modules.forEach(function (name) {
      var module = window.EliteAcademy && window.EliteAcademy[name];
      if (module && typeof module.init === 'function') {
        module.init();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
