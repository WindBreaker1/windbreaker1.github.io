// hamburger menu toggle

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.hamburger-menu-btn');
  const nav = document.querySelector('.header');
  const body = document.body;

  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    body.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // optional: close menu when clicking outside
  document.addEventListener('click', function (e) {
    if (!nav.classList.contains('open')) return;
    if (toggle.contains(e.target) || nav.contains(e.target)) return;
    nav.classList.remove('open');
    body.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});