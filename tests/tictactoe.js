const X_MARK = "x";
const CIRCLE_MARK = "circle";
const COMBO = [
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
const turnTracker = document.getElementById("turn");

let currentPlayer;

let gameIsOver = false;

for (let i = 0; i < 9; i++) {
  const square = document.createElement("div");
  square.classList.add("cell");
  square.dataset.squareId = i;
  board.appendChild(square);
}

const cellElements = document.querySelectorAll(".cell");

startGame();

restartBtn.addEventListener("click", startGame);

function startGame() {
  gameIsOver = false;
  currentPlayer = true;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_MARK);
    cell.classList.remove(CIRCLE_MARK);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  whoIsWinner.innerHTML = "";
}

function handleClick(e) {
  if (gameIsOver) {
    return;
  }
  const cell = e.target;
  const currentMark = currentPlayer ? X_MARK : CIRCLE_MARK;
  turnTracker.innerHTML = `Now is ${currentPlayer ? "O" : "X"} turn`;
  placeMark(cell, currentMark);
  if (checkWin(currentMark)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurn();
  }
}

function endGame(draw) {
  if (draw) {
    whoIsWinner.innerHTML = ` It's a draw`;
    turnTracker.innerHTML = ``;
    gameIsOver = true;
  } else {
    whoIsWinner.innerHTML = ` ${currentPlayer ? "X" : "O"} is winner!`;
    gameIsOver = true;
    turnTracker.innerHTML = ``;
  }
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return cell.classList.contains(X_MARK) || cell.classList.contains(CIRCLE_MARK);
  });
}

function placeMark(cell, currentMark) {
  cell.classList.add(currentMark);
}

function swapTurn() {
  currentPlayer = !currentPlayer;
}


function checkWin(currentMark) {
  return COMBO.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentMark);
    });
  });
}
