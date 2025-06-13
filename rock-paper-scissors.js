let score = JSON.parse( localStorage.getItem('stores')) || {
  wins: 0,
  losses: 0, 
  ties: 0
};
showScore();

function showScore(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function functionGame() {
const randomNumber = Math.random();
  let computerName ='';
   if (randomNumber >=0 && randomNumber<1/3){
   computerName = 'rock';
   } else if (randomNumber >=1/3 && randomNumber <2/3){
   computerName = 'paper';
   } else if (randomNumber >=2/3 && randomNumber < 1){
   computerName = 'scissors';
   };
   
   return computerName;
}



document.querySelector('.js-rock-button').addEventListener('click', () =>{
  playGame('rock');
});
document.querySelector('.js-paper-button').addEventListener('click', () =>{
  playGame('paper');
});
document.querySelector('.js-scissors-button').addEventListener('click', () =>{
  playGame('scissors');
});
document.querySelector('.js-reset-button').addEventListener('click', () =>{
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('stores');
  showScore();
  clearInterval(intervalId);
  autoPlayButton.innerHTML = 'Autoplay'
});



const autoPlayButton = document.querySelector('.js-Autoplay-button');
autoPlayButton.addEventListener('click', () =>{
  autoPlay();
});
let isAutoPlaying = false;
let intervalId;
function autoPlay() {
if (!isAutoPlaying) {
  intervalId = setInterval(() =>{
    const playermoves = functionGame();
    playGame(playermoves)
    isAutoPlaying = true;
  autoPlayButton.innerHTML = 'Stop playing';
  }, 1000)
} else {
  clearInterval(intervalId);
  isAutoPlaying = false;
  autoPlayButton.innerHTML = 'Autoplay';
}
}



function playGame(playermove) {
  const computerName = functionGame();
  let result = '';
  if (playermove === 'rock') {
      
   if(computerName === 'rock'){
   result = 'Tie.'
   } else if (computerName === 'paper'){
   result = 'You lose.';
   } else if (computerName === 'scissors'){
   result = 'You win.'
   }
   
  } else if (playermove === 'paper') {
    if(computerName === 'rock'){
   result = 'You win.'
   } else if (computerName === 'paper'){
   result = 'Tie.';
   } else if (computerName === 'scissors'){
   result = 'You lose.'
   }
  } else if (playermove === 'scissors') {
    if(computerName === 'rock'){
   result = 'You lose.'
   } else if (computerName === 'paper'){
   result = 'You win.';
   } else if (computerName === 'scissors'){
   result = 'Tie.'
   }
  }
  if (result === 'You win.') {
    score.wins += 1
  } else if (result === 'You lose.') {
    score.losses +=1
  } else if (result === 'Tie.') {
    score.ties +=1
  }
  
  localStorage.setItem('stores', JSON.stringify(score));
  
  showScore();
  
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img src="/image/${playermove}-emoji.png">
    <img src="/image/${computerName}-emoji.png"> Computer`;
};
     
