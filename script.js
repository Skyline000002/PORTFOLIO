const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Ouvrir le menu');
  }));
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
