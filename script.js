/* stilllife — script.js */
(function () {
  'use strict';

  /* ---------- Scroll fade-in ---------- */
  var els = document.querySelectorAll('.sl-fade');

  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });

    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Hero — show immediately with stagger ---------- */
  document.querySelectorAll('.sl-hero .sl-fade').forEach(function (el, i) {
    setTimeout(function () { el.classList.add('is-visible'); }, 100 + i * 120);
  });

  /* ---------- Smooth scroll ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset - 60, behavior: 'smooth' });
    });
  });

  /* ---------- Header shadow on scroll ---------- */
  var hdr = document.querySelector('.sl-header');
  window.addEventListener('scroll', function () {
    hdr.style.borderBottomColor = window.scrollY > 4 ? '#2a2420' : 'var(--sl-rule)';
  }, { passive: true });

})();
