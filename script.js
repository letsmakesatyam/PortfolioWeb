// ========== Typed.js Animation ==========
const typed = new Typed('#typed-text', {
  strings: [
    "Hi, I'm John Doe",
    "Frontend Developer",
    "Creative Web Designer",
    "Pixel-Perfect Coder",
    "UI/UX Dreamer"
  ],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  showCursor: true,
  cursorChar: '|',
});

// ========== ScrollReveal Animation ==========
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
});

ScrollReveal().reveal('.hero-section h1, .hero-section p, .cta-button', {
  origin: 'top',
  interval: 200
});
ScrollReveal().reveal('.about-section', { origin: 'left' });
ScrollReveal().reveal('.skills-container .skill', {
  origin: 'bottom',
  interval: 100
});
ScrollReveal().reveal('.projects-container .project-card', {
  origin: 'bottom',
  interval: 150
});
ScrollReveal().reveal('form', { origin: 'right' });

// ========== Dark Mode Toggle ==========
const toggleButton = document.getElementById('darkToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Add mind-blowing transition overlay
  const overlay = document.createElement('div');
  overlay.className = 'transition-overlay';
  document.body.appendChild(overlay);

  setTimeout(() => {
    overlay.classList.add('active');
  }, 10);

  setTimeout(() => {
    overlay.classList.remove('active');
    document.body.removeChild(overlay);
  }, 1000);
});
