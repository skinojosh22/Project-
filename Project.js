const buttonCheck = document.querySelector('.js-button');
function checkButton(){
      
     if (buttonCheck.innerText === 'Subscribe'){
       buttonCheck.innerHTML = 'Subscribed';
       buttonCheck.style.backgroundColor = 'lightgray';
       
     } else{
       buttonCheck.innerHTML = 'Subscribe';
       buttonCheck.style.backgroundColor = 'red';
     }
      
    }
    
    
    function inputValue() {
      const inputElement = document.querySelector('.input-value');
      
      let cost = Number(inputElement.value);
      if (cost < 40) {
        cost += 10;
      }
      
      document.querySelector('.para-value').innerHTML = `$${cost}`;
    }
    function enterKey(event) {
      if (event.key === 'Enter') {
        inputValue();
      }
    }