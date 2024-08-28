import './style.css'
//Query Selectors
const allCells = document.querySelectorAll<HTMLDivElement>('.game-board__cell');


//Variables
let count: number = 0;

if (!allCells){
    throw new Error("Some element was not found");
};


//Loops through all cells and places a disc where clicked - can only click above another counter or bottom of board.
for(let i: number = 0; i < allCells.length; i++ ){
    allCells[i].addEventListener('click', () =>{ 
        if(allCells[i].classList.contains('filled')){
            alert('Cell has already been filled, please pick another one!');
        } else {
            if(i + 7 > 41 || allCells[i + 7].classList.contains('filled')){
                if(count % 2 === 0) {
                    allCells[i].style.backgroundColor = 'red';
                    allCells[i].classList.add('filled')
                    count += 1;
                } else if(count % 2 === 1){
                    allCells[i].style.backgroundColor = 'yellow';
                    allCells[i].classList.add('filled')
                    count +=1;
                } 
            }
        }
        

    });
    
}