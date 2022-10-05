'use strict';

const slides = document.querySelectorAll('.slide');

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