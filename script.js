// Create Array to hold board data
let boardData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// Define player variables
let player = 1;

// Pull in cells from DOM
const cellElements = document.querySelectorAll(".cell");

// Add Event Listener
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  });
});

// Create function to place markers
function placeMarker(index) {
  // Determine row and column from index
  let col = index % 3;
  let row = (index - col) / 3;
  // Check if the current cell is empty
  if (boardData[row][col] == 0) {
    boardData[row][col] = player;
    // Change player
    player *= -1;
    // Update the screen with markers
    drawMarkers();
    // Check if anyone has won
    checkResult();
  }
}

//Create  furnction for drawing player markers
function drawMarkers() {
  // Iterate over rows
  for (let row = 0; row < 3; row++) {
    //Iterate over columns
    for (let col = 0; col < 3; col++) {
      //Check if it is player 1's marker
      if (boardData[row][col] == 1)
        // Update cell class to add a cross
        cellElements[row * 3 + col].classList.add("cross");
      else if (boardData[row][col] == -1)
        // Update cell class to add a circle
        cellElements[row * 3 + col].classList.add("circle");
    }
  }
}

// Create function for checking the result of the game
function checkResult() {
  // Check rows and columns
  for (let i = 0; i < 3; i++) {
    let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
    let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
    if (rowSum == 3 || colSum == 3) {
      // Player 1 wins
      console.log("Player 1 wins");
    } else if (rowSum == -3 || colSum == -3) {
      // Player 2 wins
      console.log("Player 2 wins");
    }
  }

  // Check diagonals
  let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
  let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
  if (diagonalSum1 == 3 || diagonalSum2 == 3) {
    // Player 1 wins
    console.log("Player 1 wins");
  } else if (diagonalSum1 == -3 || diagonalSum2 == -3) {
    // Player 2 wins
    console.log("Player 2 wins");
  }

  // Check for a tie
  if (
    boardData[0].indexOf(0) == -1 &&
    boardData[1].indexOf(0) == -1 &&
    boardData[2].indexOf(0) == -1
  ) {
    console.log("Tie");
  }
}
