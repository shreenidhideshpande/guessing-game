'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

//const number = 16;

console.log(number);

let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
//document.querySelector('.message').textContent = "Don't guess anymore";

//document.querySelector('.score').textContent = 40;

const x = function () {
  //console.log(document.querySelector('.guess').value);
  let guess = Number(document.querySelector('.guess').value);
  if (guess === number) {
    document.querySelector('.message').textContent = 'Correct guess';
    document.querySelector('.number').textContent = number;
    score = score + 20;
    document.querySelector('.score').textContent = String(score);
    document.body.style.backgroundColor = '#60b347';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > 20) {
    document.querySelector('.message').textContent = 'Guess between 1 - 20';
  } else {
    document.querySelector('.message').textContent = 'No, keep guessing...';
  }
};

const y = function () {
  number = Math.trunc(Math.random() * 20) + 1;
  console.log(number);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
};

document.querySelector('.check').addEventListener('click', x);

document.querySelector('.again').addEventListener('click', y);
