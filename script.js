'use strict';

// Score
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Secret number generation
let number = Math.trunc(Math.random() * 20) + 1;

// Check button Handler
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //WHen there is no imput
  if (!guess) {
    displayMessage('No number!');

    //when guess right
  } else if (guess === number) {
    document.querySelector('.number').textContent = number;
    displayMessage('Corrrect Number!');
    //adding winning inline styles
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When player guess wrong
  } else if (guess !== number) {
    if (score > 1) {
      displayMessage(guess > number ? 'Too High!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost');
      document.querySelector('.score').textContent = 0;
    }
  }

  //Reseting the game
  document.querySelector('.again').addEventListener('click', function () {
    // variables
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;

    //  DOM
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
  });
});
