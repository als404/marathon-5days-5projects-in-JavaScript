// видео урок 2 https://youtu.be/Jg4o5AC2vUQ
'use strict';

const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.setAttribute('draggable', 'true'); // добавляем возможность перетаскивать объект
item.addEventListener('dragstart', dragstart); // перетаскиваем объект
item.addEventListener('dragend', dragend); // отпускаем объект

for (let placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover); // над зоной куда можно переместить
    placeholder.addEventListener('dragenter', dragenter); //начал перемещение
    placeholder.addEventListener('dragleave', dragleave); // покинул зону
    placeholder.addEventListener('drop', dragdrop); // закончил перемещение
}

// начинаем перетаскивать объект
function dragstart(e) {
    e.target.classList.add('hold');
    // скрываем объект из области из которой мы его перетягиваем
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

// отпускаем объект
function dragend(e) {
    e.target.classList.remove('hold', 'hide');
}

// событие срабатывает куда мы можем поместить данный объект 
function dragover(e) {
    e.preventDefault();
}

//событие срабатывает срабатывает когда мы начинаем перетаскивать
function dragenter(e) {
    e.target.classList.add('hovered');
}

// срабатывыает событие как только мы покидаем зону в котрую можем переместить объект
function dragleave(e) {
    e.target.classList.remove('hovered');
}

// срабатывает событие когда мы заканчиваем перемещение объекта
function dragdrop(e) {
    e.target.classList.remove('hovered');
    e.target.append(item);
}
