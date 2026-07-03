const loadingScreen = document.getElementById('loadingScreen');
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');
const customCursor = document.getElementById('customCursor');
const cursorTrail = document.getElementById('cursorTrail');
const menuToggle = document.getElementById('menuToggle');

window.addEventListener('load', () => {
  setTimeout(() => {
    loadingScreen.style.display = 'none';
  }, 1000);
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = `${progress}%`;

  backToTop.style.display = scrollTop > 300 ? 'block' : 'none';

  document.querySelectorAll('.reveal').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('active');
    }
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
  cursorTrail.style.left = `${e.clientX}px`;
  cursorTrail.style.top = `${e.clientY}px`;
});

menuToggle.addEventListener('click', () => {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  navLinks.style.flexDirection = 'column';
  navLinks.style.position = 'absolute';
  navLinks.style.top = '70px';
  navLinks.style.right = '5%';
  navLinks.style.background = 'rgba(13, 17, 23, 0.96)';
  navLinks.style.padding = '20px';
  navLinks.style.borderRadius = '14px';
});