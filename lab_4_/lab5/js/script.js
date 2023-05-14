// Закрашивать header при скроле
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    const height = header.offsetHeight;

    if (window.scrollY  >= height) {
      header.classList.add('dark');
    } else {
      header.classList.remove('dark');
    }
  });


// Перемещение к определенному div
function scrollToDiv(order_name) {
    const div = document.querySelector(order_name);
    const navBar = document.querySelector('.header-background');
    const topOffset = div.offsetTop - navBar.offsetHeight; // вычитаем высоту навигационной панели из отступа до элемента
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
}



// Услуги
// Получаем ссылки на элементы
const link1 = document.getElementById('text1');
const link2 = document.getElementById('text2');
const link3 = document.getElementById('text3');
const image = document.querySelector('.service-frame-example');
const text = document.querySelector('.service-frame-text');
const header1 = document.querySelector('.service-frame-3d-models');
const header2 = document.querySelector('.service-frame-visualisation');
const header3 = document.querySelector('.service-frame-3d-printing');
const line1 = document.querySelector('.service-frame-3d-models-line');
const line2 = document.querySelector('.service-frame-visualisation-line');
const line3 = document.querySelector('.service-frame-3d-printing-line');

// Добавляем обработчик события click на первую надпись
link1.addEventListener('click', function() {
    // Добавляем классы с новым фоновым изображением и текстом
    image.classList.add('new-image1');
    image.classList.remove('new-image2');
    image.classList.remove('new-image3');

    text.classList.add('new-text1');
    text.classList.remove('new-text2');
    text.classList.remove('new-text3');

    header1.classList.add('clicked-link-color');
    header2.classList.remove('clicked-link-color');
    header3.classList.remove('clicked-link-color');

    line1.classList.add('clicked-link-color');
    line2.classList.remove('clicked-link-color');
    line3.classList.remove('clicked-link-color');
});

// Добавляем обработчик события click на вторую надпись
link2.addEventListener('click', function() {
    // Добавляем классы с новым фоновым изображением и текстом
    image.classList.add('new-image2');
    image.classList.remove('new-image1');
    image.classList.remove('new-image3');

    text.classList.add('new-text2');
    text.classList.remove('new-text1');
    text.classList.remove('new-text3');


    header2.classList.add('clicked-link-color');
    header1.classList.add('default-link-color');
    header1.classList.remove('clicked-link-color');
    header3.classList.remove('clicked-link-color');

    line2.classList.add('clicked-link-color');
    line1.classList.add('default-link-color');
    line1.classList.remove('clicked-link-color');
    line3.classList.remove('clicked-link-color');
});

// Добавляем обработчик события click на третью надпись
link3.addEventListener('click', function() {
    // Добавляем классы с новым фоновым изображением и текстом
    image.classList.add('new-image3');
    image.classList.remove('new-image1');
    image.classList.remove('new-image2');

    text.classList.add('new-text3');
    text.classList.remove('new-text1');
    text.classList.remove('new-text2');

    header3.classList.add('clicked-link-color');
    header1.classList.add('default-link-color');
    header1.classList.remove('clicked-link-color');
    header2.classList.remove('clicked-link-color');

    line3.classList.add('clicked-link-color');
    line1.classList.add('default-link-color');
    line1.classList.remove('clicked-link-color');
    line2.classList.remove('clicked-link-color');
});