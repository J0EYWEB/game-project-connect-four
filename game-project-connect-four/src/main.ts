//IMPORTS
import './style.css'
import winningCombinations from './Data/winningCombinationData';



//QUERY SELECTORS
const gameBoard = document.querySelector<HTMLDivElement>('.game-board');
const allCells = document.querySelectorAll<HTMLDivElement>('.game-board__cell');
const playerTurn = document.querySelector<HTMLSpanElement>('.player-turn');
const reset = document.querySelector<HTMLButtonElement>('.reset-button');
const playerOneScore = document.querySelector<HTMLElement>('.player-one-score');
const playerTwoScore = document.querySelector<HTMLElement>('.player-two-score');
const newGame = document.querySelector<HTMLButtonElement>('.new-game-button');
//VARIABLES
let count: number = 0;
let winner: number = 0;
let playerOne:number = 0;
let playerTwo:number = 0;




//NULL CHECK
if (!allCells || !playerTurn || !gameBoard || !reset || !newGame || !playerOneScore || !playerTwoScore){
    throw new Error("Some query selector is null / not found");
};



//FUNCTIONS

//winnerCheck => Checks the winningCombinationsData array against the cells which have had their class' altered
function winnerCheck() {
    for (let i:number = 0; i < winningCombinations.length; i++) {
      const cellOne = allCells[winningCombinations[i][0]]
      const cellTwo = allCells[winningCombinations[i][1]]
      const cellThree = allCells[winningCombinations[i][2]]
      const cellFour = allCells[winningCombinations[i][3]]

      if (cellOne.classList.contains('player-one-counter') &&
        cellTwo.classList.contains('player-one-counter') &&
        cellThree.classList.contains('player-one-counter') &&
        cellFour.classList.contains('player-one-counter'))
        {
        playerOne += 1;
        playerOneScore!.innerText = playerOne.toString();
        winner = 1;
        alert('Player One Wins!');
      }
      if (cellOne.classList.contains('player-two-counter') &&
        cellTwo.classList.contains('player-two-counter') &&
        cellThree.classList.contains('player-two-counter') &&
        cellFour.classList.contains('player-two-counter'))
      {
        playerTwo += 1;
        playerTwoScore!.innerText = playerTwo.toString();
        winner = 1;
        alert('Player Two Wins!');
      }
    }
}

//playerOneCounter contains modifiers when player one has placed a counter
const playerOneCounter = () =>{
    count += 1;
    playerTurn.innerHTML = ' Player Two';
    playerTurn.classList.add('player-turn--colourOne');
    playerTurn.classList.remove('player-turn--colourTwo');
    gameBoard.classList.add('player-two-shadow');
    gameBoard.classList.remove('player-one-shadow');
}

//playerTwoCounter contains modifiers when player Two has placed a counter
const playerTwoCounter = () =>{
    count +=1;
    playerTurn.innerHTML = ' Player One';
    playerTurn.classList.add('player-turn--colourTwo');
    playerTurn.classList.remove('player-turn--colourOne');
    gameBoard.classList.add('player-one-shadow');
    gameBoard.classList.remove('player-two-shadow');
}

// Reset button handler and event listener
const resetButtonClickHandler = () => {
    count = 0;
    winner= 0;
    for (let i:number = 0; i < allCells.length; i++){
        allCells[i].classList.remove('player-one-counter', 'player-two-counter', 'filled');
    };
    gameBoard.classList.remove('player-two-shadow');
    gameBoard.classList.remove('player-one-shadow');
    playerTurn.classList.remove('player-turn--colourOne');
    playerTurn.classList.remove('player-turn--colourTwo');
    playerTurn.innerHTML = ' Player One';
}
reset.addEventListener('click', resetButtonClickHandler);
  
//New game button handler and event listener
const newGameButtonClickHandler = () => {
    resetButtonClickHandler();
    playerOneScore.innerText = '0';
    playerTwoScore.innerText = '0';
    playerOne = 0;
    playerTwo = 0;

}

newGame.addEventListener('click', newGameButtonClickHandler);


//Loops through all cells and places a counter where clicked - can only click above another counter or bottom of board.
for(let i: number = 0; i < allCells.length; i++ ){
    allCells[i].addEventListener('click', () =>{ 
        if(winner !== 0){
            return false;
        }
        if(allCells[i].classList.contains('filled')){
            alert('Cell has already been filled, please pick another one!');
        }
        if(i + 7 > 41 || allCells[i + 7].classList.contains('filled')){
            if(count % 2 === 0) {
                allCells[i].classList.add('filled', 'player-one-counter');
                playerOneCounter();
            } else {
                allCells[i].classList.add('filled', 'player-two-counter')
                playerTwoCounter();
            } 
        }
        winnerCheck();
    });
    
}



