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
  document.querySelector('.js-moves').innerHTML = `You <img src="${playermove}-emoji.png">
    <img src="${computerName}-emoji.png"> Computer`;
  
  
};
