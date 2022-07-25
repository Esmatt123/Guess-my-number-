'use strict';
/*console.log(document.querySelector('.message').textContent);
console.log(
  (.textContent = 'Correct Number!')
);
document.querySelector('.scorenumber').textContent = 10;
document.querySelector('.scoreo').textContent = 13;
 = 23;*/
let scoreo = Math.trunc(Math.random() * 20) + 1;
let scoreNumber = 20;
document.querySelector('.scorenumber').textContent = scoreNumber;
let scoreSuper = (document.querySelector('.scoresuper').textContent = 0);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScoreNumber = function (message) {
  document.querySelector('.scorenumber').textContent = message;
};

document.querySelector('.checkbutton').addEventListener('click', function () {
  const numberInput = Number(document.querySelector('.numberinput').value);
  if (!numberInput) {
    displayMessage('No Number!');
  } else if (numberInput === scoreo) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.scoreo').textContent = scoreo;
    if (scoreSuper < scoreNumber) {
      scoreSuper = scoreNumber;
      document.querySelector('.scoresuper').textContent = scoreSuper;
    }
  } else if (numberInput !== scoreo) {
    if (scoreNumber > 1) {
      displayMessage(numberInput > scoreo ? 'Too high!' : 'Too low!');
      scoreNumber--;
      displayScoreNumber(scoreNumber);
    } else {
      displayMessage('You lost the game!');
      displayScoreNumber(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  scoreNumber = 20;
  displayScoreNumber(scoreNumber);
  document.querySelector('body').style.backgroundColor = '#050504';
  displayMessage('Start Guessing...');
  document.querySelector('.scoreo').textContent = '?';
  document.querySelector('.numberinput').value = '';
  scoreo = Math.trunc(Math.random() * 20) + 1;
  console.log(scoreo);
});
