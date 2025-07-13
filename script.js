// Typed.js animation
const typed = new Typed('#typed-text', {
  strings: ["Hi, I'm John Doe", "Frontend Developer", "Creative Coder"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true
});

// ScrollReveal effects
ScrollReveal().reveal('section', {
  delay: 100,
  distance: '60px',
  duration: 800,
  origin: 'bottom'
});

// Dark mode toggle
document.getElementById('darkToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
