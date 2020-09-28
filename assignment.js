/**  
Orientation - JS assignment 1
Solution by: [Ekaterina Volkova!!]
*/
//Values declaration
let amountOfWins = 0;
let amountOfHead = 0;
let amountOfReverse = 0;
let history =[];
let resultParagraph  = document.querySelector('#result');
let numberOfWins  = document.querySelector('#win-count');
let numberOfHeads  = document.querySelector('#head-count');
let numberOfReverse = document.querySelector('#reverse-count');
let resultHistory = document.querySelector('#result-history');
let coinImage = document.querySelector('#coin-image');

numberOfWins.textContent=0;
numberOfHeads.textContent=0;
numberOfReverse.textContent=0;
resultHistory.textContent ='No Results';

// 1.	record user’s choice in the beginning (head or reverse)
// 2.	simulate tossing the coin by using random value generation
// 3.	show the result of the coin flip to user
// 4.	show amount of wins to the user
const throwbutton = document.querySelector('#throw-button');
throwbutton.addEventListener('click', checkuserChoice);
userChoice ='';
let computerChoice = 0;


function checkuserChoice (numberOfThrows){
  userChoice = document.querySelector('input[name="user-choice"]:checked').value;
  console.log('user choice', userChoice);
  computerChoice =Math.round(Math.random());

  if (computerChoice == 0){
    

    computerChoice = 'head';
    console.log('computerChoice '+ computerChoice);
    if(userChoice ==='head'){
      coinImage.src ='reverse.png';
      console.log('you win');
      resultParagraph.innerText ='Win';
      amountOfWins++;

      numberOfWins.textContent=amountOfWins;
      console.log('amountOfWins ' + amountOfWins);
      resultParagraph.textContent = 'Congratulations! You won!';
      amountOfHead++;
      numberOfHeads.textContent=amountOfHead;
      
      console.log('amountOfHead '+ amountOfHead);
      history.push('win ');
      resultHistory.textContent =history;
      
    } else {
      coinImage.src ='head.png';
      console.log('you loose');
      resultParagraph.innerText ='Loose. Try again';
      amountOfReverse++;
      console.log('amountOfReverse '+ (amountOfReverse));
      numberOfReverse.textContent=amountOfReverse;
      history.push('loose ');
      resultHistory.textContent =history;
      
    }

  } else if(computerChoice == 1 ){
    computerChoice = 'reverse';
    coinImage.src ='head.png';
    
    console.log('computerChoice '+ computerChoice);
    if(userChoice === 'reverse' ) {
      coinImage.src ='head.png';
      console.log('you win');
      resultParagraph.innerText ='Win';
      amountOfWins++;
      amountOfReverse++;
      numberOfWins.textContent=amountOfWins;
      numberOfReverse.textContent=amountOfReverse;
      
      console.log('amountOfWins ' + amountOfWins);
    
      console.log('amountOfReverse '+ (amountOfReverse));
      history.push('win ');
      resultHistory.textContent =history;
      

    } else {
      coinImage.src ='reverse.png';
      console.log('you loose');
      resultParagraph.innerText ='Loose. Try again';
      amountOfHead++;
      numberOfHeads.textContent=amountOfHead;
      console.log('amountOfHead '+ amountOfHead);
      history.push('loose ');
      resultHistory.textContent =history;
      
    }

  }

  return userChoice;
};
