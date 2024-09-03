## Introduction:
I have created a browser game of connect Four using HTML, CSS/SCSS and Typescript. The game incorporates the classical colours of connect four whilst adding a neon styling to the surrounding board and other elements. The game requires two local players to take turns placing the counters. Counters can only be placed at the bottom of the board or ontop of another counter. A winner is found when a player connects four counters either horizontally, vertically or diagonally. When a player wins their score is updated on the scoreboard, this increments with each win. The board can be cleared for a re-match using the 'New Game' button which will keep the current scores displayed. The 'Reset' button will clear the board and the scoreboard to start a fresh game.



## Project plan:
### HTMl:
1. Create DIV for main board container to be a grid item. 
2. Create DIVs for each cell with unique ID's.

### CSS / SCSS:
3. Style game board to resemble connect 4 board (display: grid) - unque styling to be added at later stage.
4. Style individual cells to resemble holes in the board.

### typescript:
5. Create a function so the board cells change colour once clicked.
6. Create conditions that the colour changes after each click. I.e click 1 = red, click 2 = yellow.
7. Create a function which populates an array resembling the board when a unique DIV has changed colour. I.e if a div changes to red, the array is populated with ..[1].. | Yellow would be ..[2]..
8. Create win conditions so that the game will end when connect 4 happens OR there is a draw.

### EXTENSIONS:
9. Create reset button to clear the board and typescript array.
10. Create score board to track games won and drawn.
11. Introduce a timed mode where each move gets 3 seconds to be played.




