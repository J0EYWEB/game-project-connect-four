//IMPORTS
import './style.css'
import winningArrays from './Data/winningCombinationData';



//QUERY SELECTORS
const gameBoard = document.querySelector<HTMLDivElement>('.game-board');
const allCells = document.querySelectorAll<HTMLDivElement>('.game-board__cell');
const playerTurn = document.querySelector<HTMLSpanElement>('.player-turn');

//VARIABLES
let count: number = 0;
let winner: number = 0;


//NULL CHECK
if (!allCells || !playerTurn || !gameBoard){
    throw new Error("Some query selector is null / not found");
};



//FUNCTIONS

//winnerCheck => Checks the winningCombinationsData array against the cells which have had their class' altered
function winnerCheck() {
    for (let i:number = 0; i < winningArrays.length; i++) {
      const cellOne = allCells[winningArrays[i][0]]
      const cellTwo = allCells[winningArrays[i][1]]
      const cellThree = allCells[winningArrays[i][2]]
      const cellFour = allCells[winningArrays[i][3]]

      if (cellOne.classList.contains('player-one-counter') &&
        cellTwo.classList.contains('player-one-counter') &&
        cellThree.classList.contains('player-one-counter') &&
        cellFour.classList.contains('player-one-counter'))
        {
        winner = 1;
        alert('Player One Wins!');
      }
      if (cellOne.classList.contains('player-two-counter') &&
        cellTwo.classList.contains('player-two-counter') &&
        cellThree.classList.contains('player-two-counter') &&
        cellFour.classList.contains('player-two-counter'))
      {
        winner = 1;
        alert('Player Two Wins!');
      }
    }
}

//playerOneCounter contains modifiers when player one has placed a counter
const playerOneCounter = () =>{
    count += 1;
    playerTurn.innerHTML = ' Player Two'
    gameBoard.classList.add('player-two-shadow');
    gameBoard.classList.remove('player-one-shadow')
}

//playerTwoCounter contains modifiers when player Two has placed a counter
const playerTwoCounter = () =>{
    count +=1;
    playerTurn.innerHTML = ' Player One'
    gameBoard.classList.add('player-one-shadow');
    gameBoard.classList.remove('player-two-shadow')
}

  



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



