window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var height = header.offsetHeight;
    
    if (window.pageYOffset >= height) {
      header.classList.add('dark');
    } else {
      header.classList.remove('dark');
    }
  });

