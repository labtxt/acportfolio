const header = document.querySelector('.header');
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const KEY = 'theme';

window.addEventListener('scroll', () => {
  header.style.background =
    window.scrollY > 60
      ? 'rgba(15,15,15,0.95)'
      : 'rgba(15,15,15,0.85)';
});

const saved = localStorage.getItem(KEY) || 'dark';
root.setAttribute('data-theme', saved);
toggle.textContent = saved === 'dark' ? '🌙' : '☀️';

toggle.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  toggle.textContent = next === 'dark' ? '🌙' : '☀️';
  localStorage.setItem(KEY, next);
});


