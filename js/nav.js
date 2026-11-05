/* ============================================================
   ELITE ACADEMY — nav.js
   Sticky header state, mobile menu, scrollspy navigation
   ============================================================ */
(function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-link'));
  var mobileLinks = Array.prototype.slice.call(
    document.querySelectorAll('.mobile-link, .mobile-cta')
  );

  function setScrolled(scrolled) {
    header.classList.toggle('is-scrolled', scrolled);
  }

  function openMenu() {
    if (mobileNav) mobileNav.hidden = false;
    header.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    window.setTimeout(function () {
      if (mobileNav && !header.classList.contains('menu-open')) {
        mobileNav.hidden = true;
      }
    }, 460);
  }

  function init() {
    /* Sticky header background on scroll */
    var onScroll = function () {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Mobile hamburger menu */
    if (toggle && header) {
      toggle.addEventListener('click', function () {
        if (header.classList.contains('menu-open')) {
          closeMenu();
        } else {
          openMenu();
        }
      });

      mobileLinks.forEach(function (link) {
        link.addEventListener('click', closeMenu);
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && header.classList.contains('menu-open')) {
          closeMenu();
          toggle.focus();
        }
      });
    }

    /* Scrollspy: highlight active section in the primary nav */
    var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
    if ('IntersectionObserver' in window && navLinks.length) {
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(function (section) {
        spy.observe(section);
      });
    }
  }

  window.EliteAcademy = window.EliteAcademy || {};
  EliteAcademy.nav = { init: init };
})();
