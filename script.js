// Typed.js Animation
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

// ScrollReveal Global Config
ScrollReveal({
  reset: false,
  distance: '60px',
  duration: 1200,
  delay: 200,
  easing: 'ease-in-out',
  viewFactor: 0.2,
});

// ScrollReveal Classes
ScrollReveal().reveal('.reveal-top', { origin: 'top', interval: 100 });
ScrollReveal().reveal('.reveal-left', { origin: 'left', interval: 100 });
ScrollReveal().reveal('.reveal-right', { origin: 'right', interval: 100 });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom', interval: 100 });

// Dark Mode Toggle
const toggleButton = document.getElementById('darkToggle');
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const overlay = document.createElement('div');
  overlay.className = 'transition-overlay';
  document.body.appendChild(overlay);

  setTimeout(() => overlay.classList.add('active'), 10);
  setTimeout(() => {
    overlay.classList.remove('active');
    document.body.removeChild(overlay);
  }, 1000);
});
