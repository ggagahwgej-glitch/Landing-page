/* ============================================================
   ELITE ACADEMY — accordion.js
   Interactive FAQ accordion (single-open, keyboard accessible)
   ============================================================ */
(function () {
  'use strict';

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-faq]'));

  function init() {
    items.forEach(function (item) {
      var button = item.querySelector('.faq-question');
      if (!button) return;

      button.addEventListener('click', function () {
        var isOpen = item.classList.contains('is-open');

        /* Close all other items (single-open accordion) */
        items.forEach(function (other) {
          other.classList.remove('is-open');
          var otherButton = other.querySelector('.faq-question');
          if (otherButton) {
            otherButton.setAttribute('aria-expanded', 'false');
          }
        });

        /* Toggle the clicked item */
        if (!isOpen) {
          item.classList.add('is-open');
          button.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  window.EliteAcademy = window.EliteAcademy || {};
  EliteAcademy.accordion = { init: init };
})();
