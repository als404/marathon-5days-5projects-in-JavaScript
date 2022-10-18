'use strict';

const cols = document.querySelectorAll('.col');

// function generateRandomColor() {
//     const hexCodes = '0123456789ABCDEF';
//     let color = '';

//     for (let i = 0; i < 6; i++) {
//         color += hexCodes[Math.floor(Math.random() * hexCodes.length)];
//     }

//     return `#${color}`;
// }

document.addEventListener('keydown', (e) => { 
    e.preventDefault();
    if (e.code.toLowerCase() === 'space') {
        setRandomColors();
    }
});

document.addEventListener('click', (e) => {
    const type = e.target.dataset.type;

    if (type === 'lock') {
        const node = e.target.tagName.toLowerCase() === 'i' ? e.target : e.target.children[0];

        node.classList.toggle('fa-lock-open');
        node.classList.toggle('fa-lock');
    } else if (type === 'copy') {
        copyToClipboard(e.target.textContent);
    }
});

// копируем цвет в буфер обмена
function copyToClipboard(text) {
    return navigator.clipboard.writeText(text);
}

function setRandomColors(isInitial) {
    const colors = isInitial ? getColorsFromHash() : [];

    cols.forEach((col, i) => {
        const isLocked = col.querySelector('i').classList.contains('fa-lock'),
              text = col.querySelector('h2'),
              btn = col.querySelector('button');

        if (isLocked) {
            colors.push(text.textContent);
            return;
        }

        const color = isInitial ? colors[i] ? colors[i] : chroma.random() : chroma.random();

        if (!isInitial) {
            colors.push(color);
        }

        col.style.backgroundColor = color;
        text.textContent = color;

        setTextColor(text, color);
        setTextColor(btn, color);

        updateColorsHash(colors);
    });
}

function setTextColor(text, color) {
    const luminance = chroma(color).luminance();
    text.style.color = luminance > 0.5 ? 'black' : 'white';
}

// сохраняем в хэш цвета
function updateColorsHash(colors = []) {
    document.location.hash = colors.map(col => col.toString().substring(1)).join('-');
}

// проверяем при загрузке станицы хэш страницы
function getColorsFromHash() {
    const hash = document.location.hash;
    if (hash.length > 1) {
        return hash.substring(1).split('-').map(color => '#' + color);
    }
    return [];
}

setRandomColors(true);