/* Fahrschule Oguzhan – main.js v3 */

const navbar    = document.getElementById('navbar');
const navLinks  = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');
const overlay   = document.getElementById('navOverlay');

/* ── Navbar scroll ── */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile menu ── */
function openMenu() {
  navLinks.classList.add('open');
  overlay.classList.add('active');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  navLinks.classList.remove('open');
  overlay.classList.remove('active');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

hamburger.addEventListener('click', () =>
  navLinks.classList.contains('open') ? closeMenu() : openMenu()
);

/* ── Active nav on scroll ── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting)
      navAnchors.forEach(a =>
        a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`)
      );
  });
}, { rootMargin: '-40% 0px -55% 0px' }).observe
  && sections.forEach(s =>
      new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting)
            navAnchors.forEach(a =>
              a.classList.toggle('active', a.getAttribute('href') === `#${e.target.id}`)
            );
        });
      }, { rootMargin: '-40% 0px -55% 0px' }).observe(s)
    );

/* ── Scroll reveal (desktop only) ── */
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });

['.angebot-card','.ablauf-step','.stimme','.preise-wrap','.about-grid']
  .forEach(sel =>
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = `${Math.min(i * 0.07, 0.35)}s`;
      revealObs.observe(el);
    })
  );

/* ── Contact form ── */
const form = document.getElementById('contactForm');
const succ = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Wird gesendet …';
    btn.disabled = true;
    setTimeout(() => { form.style.display = 'none'; succ.style.display = 'block'; }, 900);
  });
}
