'use strict';

function slidesPlugin(activeSlide = getRandomIntInclusive(0, document.querySelectorAll('.slide').length - 1)) {
    const slides = document.querySelectorAll('.slide');

    slides[activeSlide].classList.add('active');
    
    for (const slide of slides) {
        slide.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
    
            clearActiveClasses();
            slide.classList.add('active');
        });
    }
    
    function clearActiveClasses() {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
    }
}
// генерируем случайно число в зависимости от кол-ва слайдов
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

slidesPlugin();