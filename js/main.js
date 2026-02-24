/* ════════════════════════════════════════════════════════════
   Fahrschule Steiner AG – main.js v2
   ════════════════════════════════════════════════════════════ */

/* ── Navbar scroll ──────────────────────────────────────────── */
const navbar  = document.getElementById('navbar');
const overlay = document.getElementById('navOverlay');
const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById('hamburger');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

/* ── Mobile menu ────────────────────────────────────────────── */
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

hamburger.addEventListener('click', () => {
  navLinks.classList.contains('open') ? closeMenu() : openMenu();
});

/* ── Active nav link on scroll ──────────────────────────────── */
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

/* ── Scroll Reveal ──────────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

[
  '.leistung-card', '.preis-card', '.step',
  '.testi-card', '.faq-item', '.trust-item',
  '.oguzhan-grid', '.kosten-info',
].forEach(sel => {
  document.querySelectorAll(sel).forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${Math.min(i * 0.07, 0.4)}s`;
    revealObserver.observe(el);
  });
});

/* ── Animated counters ──────────────────────────────────────── */
let countersStarted = false;
const trustBar = document.querySelector('.trust-bar');

function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const steps = 50;
  let count = 0;
  const timer = setInterval(() => {
    count++;
    const value = Math.min((target / steps) * count, target);
    el.textContent = (Number.isInteger(target) ? Math.round(value) : value.toFixed(1))
      .toLocaleString('de-CH') + suffix;
    if (count >= steps) { clearInterval(timer); }
  }, duration / steps);
}

if (trustBar) {
  new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !countersStarted) {
      countersStarted = true;
      document.querySelectorAll('.trust-number[data-target]').forEach(animateCounter);
    }
  }, { threshold: 0.5 }).observe(trustBar);
}

/* ── Contact form ───────────────────────────────────────────── */
const form       = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Wird gesendet …';
    btn.disabled = true;
    setTimeout(() => {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    }, 900);
  });
}
