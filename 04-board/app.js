'use strict';
const board = document.querySelector('#board'),
      colors = ['#ef3e34', '#fac87c', '#048fa1', '#ac5276', '#ececd4', '#fcd653', '#148cd4', '#6a8913', '#9bb833'],
      SQUARES_NUMBER = 600;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));
    board.append(square);
}

function setColor(element) {
    const color = colors[getRandomColor(0, colors.length - 1)];
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}