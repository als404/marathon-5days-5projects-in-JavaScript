'use strict';

const startBtn = document.querySelector('#start'),
      screens = document.querySelectorAll('.screen'),
      timeList = document.querySelector('#time-list'),
      timeLeft = document.querySelector('#time'),
      board = document.querySelector('#board'),
      colors = [
        ['#ed0984', '#ff8530', '#d4ed3d'],
        ['#e70f5e', '#b35ac3', '#148ae3'],
        ['#588bb0', '#00d4b6', '#fcf837'],
        ['#108cc5', '#00c4cd', '#4dee74'],
        ['#ffda75', '#ffcb3d', '#ffbb00'],
        ['#d8ffa8', '#cdff8f', '#bfff70'],
        ['#fdfcfc', '#a27dd8', '#ab83d2'],
        ['#e9f58f', '#f5984d', '#f57a7a'],
        ['#3561e8', '#4a7ef2', '#558df6'],
        ['#e2ef54', '#ff5c66', '#6248d5'],
        ['#dd43b2', '#e77189', '#d29e8f'],
        ['#d86a65', '#935c95', '#1e5a84'],
        ['#a996da', '#ff867a', '#9bd029'],
        ['#f7576a', '#f0817d', '#e5a398'],
        ['#892afe', '#ff2366', '#f3c735'],
        ['#f7c316', '#ff916c', '#f882b0'],
        ['#087f71', '#52b25c', '#d3d704'],
        ['#f4492f', '#f367a5', '#bc9de0'],
        ['#ffcd42', '#f97d64', '#9f2ef4'],
        ['#b0dafc', '#8da2ff', '#bf46d2']
      ];

let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target.classList.contains('time-btn')) {
        time = parseInt(target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('circle')) {
        score++;
        target.remove();
        createRandomCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTimeout(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        seTime(current);
    }
}

function seTime(value) {
    timeLeft.innerHTML = `00:${value}`;
}

function finishGame() {
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;
    timeLeft.parentNode.classList.add('hide');
}

function createRandomCircle() {
    const circle = document.createElement('div'),
          size = getRandomNumber(10, 45),
          {width, height} = board.getBoundingClientRect(),
          x = getRandomNumber(0, width - size),
          y = getRandomNumber(0, height - size),
          colorRange = getRandomNumber(0, colors.length - 1);
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.background = `linear-gradient(90deg, ${colors[colorRange][0]} 0%, ${colors[colorRange][1]} 47%, ${colors[colorRange][2]} 100%)`;
    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function winTheGame() {
    function kill() {
        const circle = document.querySelector('.circle');
        if (circle) {
            circle.click();
        }
    }
    setInterval(kill, 75);
}