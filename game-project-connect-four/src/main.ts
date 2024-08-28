import './style.css'

const allCells = document.querySelectorAll<HTMLDivElement>('.game-board__cell');

let count: number = 0;

if (!allCells){
    throw new Error("Some element was not found");
};


for(let i: number | any = 0; i < allCells.length; i++ ){
    allCells[i].addEventListener('click', (cell) =>{
    console.log([i])});
}


// When cell is clicked, 
const handleClickCells = (event: Event) => {
    const cell = event.currentTarget as HTMLDivElement;
    if(cell.classList.contains('filled')){
        alert('Cell has already been filled, please pick another one!');
    } else {
        if(count % 2 === 0) {
            cell.style.backgroundColor = 'red';
            cell.classList.add('filled')
            count += 1;
        } else {
            cell.style.backgroundColor = 'yellow';
            cell.classList.add('filled')
            count +=1;
        }
    }

    
    
};

allCells.forEach((cell) => {
    cell.addEventListener('click', handleClickCells);
});