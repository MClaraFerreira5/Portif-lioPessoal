const themeSwitch = document.querySelector('.switch input');
const images = document.querySelectorAll('.toggle-image');

themeSwitch.addEventListener('change', function() {
  images.forEach(img => {
    if (this.checked) {
      img.setAttribute('src', img.getAttribute('data-dark-src'));
    } else {
      img.setAttribute('src', img.getAttribute('src').replace('-dark', '-light')); // Ou volte ao original
    }
  });
});

document.querySelector('.switch input').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    console.log('Switch ligado');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    console.log('Switch desligado');
  }
});