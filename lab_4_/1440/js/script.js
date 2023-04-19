window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const height = header.offsetHeight;

    if (window.scrollY >= height) {
      header.classList.add('dark');
    } else {
      header.classList.remove('dark');
    }
  });

