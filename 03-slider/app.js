'use strict';

const downBtn = document.querySelector('.controls .down-button'),
      upBtn  = document.querySelector('.controls .up-button'),
      sidebar = document.querySelector('.sidebar'),
      mainSlide = document.querySelector('.main-slide'),
      container = document.querySelector('.container'),
      slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp') {
        changeSlide('up');
    } else if (e.code === 'ArrowDown') {
        changeSlide('down');
    }
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;

        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;

        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const heigth = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * heigth}px)`;

    sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`;
}