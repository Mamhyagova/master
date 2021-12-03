const ex = "x";
const circle = "circle";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const board = document.getElementById("board");
const whoIsWinner = document.getElementById("winner");
const restartBtn = document.getElementById("newGame");

let circleTurn;


for (let i = 0; i < 9; i++) {
  const square = document.createElement("div");
  square.classList.add("cell");
  square.dataset.squareId = i;
  board.appendChild(square);
}

const cellElements = document.querySelectorAll(".cell");

startGame()

restartBtn.addEventListener("click", startGame());

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.classList.remove(ex)
    cell.classList.remove(circle)
    cell.removeEventListener("click", handleClick)
    cell.addEventListener("click", handleClick, { once: true });
  })
  setBoard()
  whoIsWinner.innerHTML= "";
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = circleTurn ? ex : circle;
  placeMark(cell, currentClass);
  if (checkWin (currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurn();
    setBoard()
  }
}

function endGame(draw) {
  if (draw) {
    whoIsWinner.innerHTML = ` It's a draw`;
  } else {
    whoIsWinner.innerHTML = ` ${circleTurn ? "O" : "X"} is winner!`;
    
  }
}

function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(ex) || cell.classList.contains(circle);
  });
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
}

function swapTurn() {
  circleTurn = !circleTurn;
}

function setBoard() {
  board.classList.remove(ex)
  board.classList.remove(circle)
  if (circleTurn) {
    board.classList.add(circle)
  } else {
    board.classList.add(ex)
  }
}

function checkWin(currentClass) {
  return winningCombinations.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
}
