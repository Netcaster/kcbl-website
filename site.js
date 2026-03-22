document.querySelectorAll('.hero-copy, .hero-stack, .strip-grid > div, .section, .glass-card').forEach(el => {
  el.classList.add('reveal');
});
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
