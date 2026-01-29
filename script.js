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
    console.log(boardData);
  }
}
