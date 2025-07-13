// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {
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

  // ScrollReveal Animations
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

  // VanillaTilt for project cards
  VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
  });

  // Navbar Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileOverlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
    mobileOverlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  document.querySelectorAll('.nav-links a, .nav-links button').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth <= 850) {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Dark Mode + GSAP
  const toggle = document.getElementById('darkToggle');
  toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    gsap.to('body', {
      backgroundColor: isDark ? '#181a20' : '#f7f9fc',
      duration: 0.6
    });

    gsap.fromTo(toggle, {
      rotation: isDark ? 0 : 180
    }, {
      rotation: isDark ? 180 : 0,
      ease: 'elastic.out(1, 0.5)'
    });

    toggle.textContent = isDark ? '☀️' : '🌙';

    // Visual transition overlay
    const overlay = document.createElement('div');
    overlay.className = 'transition-overlay';
    document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('active'), 10);
    setTimeout(() => {
      overlay.classList.remove('active');
      document.body.removeChild(overlay);
    }, 1000);
  });
});
