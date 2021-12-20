const X_MARK = "x";
const CIRCLE_MARK = "o";

const board = document.getElementById("board");
const whoIsWinner = document.getElementById("winner");
const restartBtn = document.getElementById("newGame");
const turnTracker = document.getElementById("turn");
const selectMode = document.getElementById("select");
const gameContainer = document.getElementById("gameContainer");

selectMode.addEventListener("change", modeSelector);
const currentMode = selectMode.value;
var boardSize = parseInt(currentMode);
let currentPlayer;
var arr = [];

let gameIsOver = false;
createArea(boardSize);

function createArea(boardSize) {
  for (let i = 0; i < boardSize; i++) {
    arr[i] = [];
    for (let j = 0; j < boardSize; j++) {
      arr[i][j] = null;
      const square = document.createElement("div");
      square.classList.add("cell");
      board.appendChild(square);
      const [x, y] = [i, j];
      square.addEventListener("click", (e) => handleClick(e, x, y));
    }
  }
}

function modeSelector() {
  const currentMode = selectMode.value;
  var boardSize = parseInt(currentMode);
  clearBoard();
  createArea(boardSize);
  startGame();
  if (boardSize === 4) {
    board.classList.add("medWidth");
    gameContainer.classList.add("medWidth");
    board.classList.remove("largeWidth");
    gameContainer.classList.remove("largeWidth");
  } else if (boardSize === 5) {
    board.classList.add("largeWidth");
    gameContainer.classList.add("largeWidth");
  } else {
    board.classList.remove("medWidth", "largeWidth");
    gameContainer.classList.remove("medWidth", "largeWidth");
  }
}

function clearBoard() {
  var allCells = document.getElementsByClassName("cell");

  while (allCells[0]) {
    allCells[0].parentNode.removeChild(allCells[0]);
  }
}

var cellElements = document.querySelectorAll(".cell");

startGame();

restartBtn.addEventListener("click", startGame);

function startGame() {
  var cellElements = document.querySelectorAll(".cell");

  gameIsOver = false;
  currentPlayer = true;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_MARK);
    cell.classList.remove(CIRCLE_MARK);
  });
  whoIsWinner.innerHTML = "";
  turnTracker.innerHTML = "You are the X player";
}

function handleClick(e, i, j) {
  if (gameIsOver) {
    return;
  }
  const cell = e.target;
  const currentMark = currentPlayer ? X_MARK : CIRCLE_MARK;
  if (!cell.classList.contains("x") && !cell.classList.contains("o")) {
    cell.classList.add(currentMark);
    swapTurn();
  } else {
    return false;
  }
  arr[i][j] = currentPlayer ? 1 : 2;
  turnTracker.innerHTML = `Now is ${currentPlayer ? "X" : "O"} turn`;
  if (checkWin(i, j)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  }
}

function endGame(draw) {
  if (draw) {
    whoIsWinner.innerHTML = `It's a draw`;
    turnTracker.innerHTML = ``;
    gameIsOver = true;
  } else {
    whoIsWinner.innerHTML = ` ${currentPlayer ? "O" : "X"} is winner!`;
    gameIsOver = true;
    turnTracker.innerHTML = ``;
  }
}

function isDraw() {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_MARK) || cell.classList.contains(CIRCLE_MARK)
    );
  });
}

function swapTurn() {
  currentPlayer = !currentPlayer;
}

function checkRows(i) {
  let row = arr[i];
  let firstElement = row[0];
  return row.every((square) => firstElement === square);
}

function checkColumns(i) {
  var col = arr.map(function (value, i) {
    return value[i];
  });
  let winner = col[0];
  let hasWinner = true;
  for (let i = 1; i < col.length; i++) {
    hasWinner = hasWinner && winner === col[i];
  }
  return hasWinner;
}

function checkMainDiagonal() {
  let winner = arr[0][0];
  let hasWinner = true;
  for (let i = 1; i < arr.length; i++) {
    hasWinner = hasWinner && winner === arr[i][i];
  }
  return hasWinner;
}

function checkSideDiagonal() {
  let winner = arr[0][arr.length - 1];
  let hasWinner = true;
  for (let i = 1; i < arr.length; i++) {
    hasWinner = hasWinner && winner === arr[i][arr.length - 1 - i];
  }
  return hasWinner;
}

function checkWin(i, j) {
  let rowsResult = checkRows(i);
  let columnResult = checkColumns(i);
  let mainDiagonalResult = checkMainDiagonal();
  let sideDiagonalResult = checkSideDiagonal();
  if (rowsResult === true) {
    return endGame(false);
  } else if (columnResult === true) {
    return endGame(false);
  } else if (mainDiagonalResult === true) {
    return endGame(false);
  } else if (sideDiagonalResult === true) {
    return endGame(false);
  }
}
