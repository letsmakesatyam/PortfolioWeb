// ParticlesJS
particlesJS('particles-js', {
  fps_limit: 60,
  particles: {
    number: { value: 80 },
    color: { value: '#61dafb' },
    shape: { type: 'circle' },
    opacity: { value: 0.2 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#61dafb',
      opacity: 0.15,
      width: 1
    },
    move: { enable: true, speed: 2 }
  }
});

// Typed.js
new Typed('#typed-text', {
  strings: [
    "Hi, I'm Satyam Revgade",
    "Fullstack Developer",
    "Creative Web Designer",
    "Pixel-Perfect Coder",
    "UI/UX Dreamer"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});

// ScrollReveal
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  viewFactor: 0.2
});
ScrollReveal().reveal('.reveal-top', { origin: 'top', interval: 100 });
ScrollReveal().reveal('.reveal-left', { origin: 'left', interval: 100 });
ScrollReveal().reveal('.reveal-right', { origin: 'right', interval: 100 });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom', interval: 100 });

// VanillaTilt
document.querySelectorAll('.project-card').forEach(el =>
  VanillaTilt.init(el, {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  })
);

// Dark Mode + GSAP
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  gsap.to('body', { backgroundColor: isDark ? '#121212' : '#f7f9fc', duration: 0.6 });
  gsap.fromTo(toggle, { rotation: isDark ? 0 : 180 }, { rotation: isDark ? 180 : 0, ease: 'elastic.out(1, 0.5)' });
  toggle.textContent = isDark ? '☀️' : '🌙';
  const overlay = document.createElement('div');
  overlay.className = 'transition-overlay';
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('active'), 10);
  setTimeout(() => { overlay.classList.remove('active'); document.body.removeChild(overlay); }, 1000);
});