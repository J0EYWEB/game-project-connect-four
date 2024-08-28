import './style.css'

const allCells = document.querySelectorAll<HTMLDivElement>('.game-board__cell');



if (!allCells){
    throw new Error("Some element was not found");
};

const handleClickCells = (event: Event) => {
    const cell = event.currentTarget as HTMLDivElement;
    cell.style.backgroundColor = 'red';
};

allCells.forEach((cell) => {
    cell.addEventListener('click', handleClickCells);
});