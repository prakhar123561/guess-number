let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.result').textContent = message;
  };

  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
  
    // When there is no input
    if (!guess) {
      displayMessage('⛔️ No number!');
  
      // When player wins
    } else if (guess === secretNumber) {
      displayMessage('🎉 Correct Number!');
      document.querySelector('.random').textContent = secretNumber;
  
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('body').style.color = '#ffff';
  
      if (score > highscore) {
        highscore = score;
        document.querySelector('.Hi_score').textContent = highscore;
      }
  
      // When guess is wrong
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }
  })   
  
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.random').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#fff';
    document.querySelector('body').style.color = '#000';
  });