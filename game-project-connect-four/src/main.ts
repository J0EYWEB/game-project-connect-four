import './style.css'
//Query Selectors
const gameBoard = document.querySelector<HTMLDivElement>('.game-board');
const allCells = document.querySelectorAll<HTMLDivElement>('.game-board__cell');
const playerTurn = document.querySelector<HTMLSpanElement>('.player-turn');

//Variables
let count: number = 0;

if (!allCells || !playerTurn || !gameBoard){
    throw new Error("Some query selector is null / not found");
};


//Loops through all cells and places a disc where clicked - can only click above another counter or bottom of board.
for(let i: number = 0; i < allCells.length; i++ ){
    allCells[i].addEventListener('click', () =>{ 
        if(allCells[i].classList.contains('filled')){
            alert('Cell has already been filled, please pick another one!');
        } else {
            if(i + 7 > 41 || allCells[i + 7].classList.contains('filled')){
                if(count % 2 === 0) {
                    // allCells[i].style.backgroundColor = 'red';
                    allCells[i].classList.add('filled', 'player-one-counter');
                    count += 1;
                    playerTurn.innerHTML = ' Player Two'
                    gameBoard.classList.add('player-two-shadow');
                    gameBoard.classList.remove('player-one-shadow')
                    

                } else if(count % 2 === 1){
                    // allCells[i].style.backgroundColor = 'yellow';
                    allCells[i].classList.add('filled', 'player-two-counter')
                    count +=1;
                    playerTurn.innerHTML = ' Player One'
                    gameBoard.classList.add('player-one-shadow');
                    gameBoard.classList.remove('player-two-shadow')
                    
                } 
            }
        }
        

    });
    
}