// Mobile menu toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Close menu on link click (mobile)
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('active'));
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Simple typing cursor effect for "Data Analyst|"
const multipleText = document.querySelector('.multiple-text');
if (multipleText) {
  let showBar = true;
  setInterval(() => {
    showBar = !showBar;
    const base = 'Data Analyst';
    multipleText.textContent = showBar ? `${base}|` : `${base}`;
  }, 600);
}

// Reveal .fade-in on scroll (staggered)
const faders = document.querySelectorAll('.fade-in');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.92;
  faders.forEach((el, idx) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.style.animationDelay = `${Math.min(idx * 0.1, 0.6)}s`;
      el.classList.add('revealed');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);