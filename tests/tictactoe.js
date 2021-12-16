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
  for (var i = 0; i < boardSize; i++) {
    arr[i] = [];
    for (var j = 0; j < boardSize; j++) {
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
  if (checkWin()) {
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

/**
 * Берем первое значение из переданной строки (х или 0)
 * в цикле проверяем равен ли текущий элемент с перввому
 * если он не равен - возвращаем null
 * если равен ничкго не делаем
 * на выходе из цикла возвращаем первый элемент

**/

function checkRows() {
  const first = arr[0];

  return arr[1] === first && arr[2] === first ? first : null; 
}

function checkWin() {
  const rowsResult = checkRows();
  if (rowsResult !== null) {
    return endGame(false);
  }
    console.log(`arrs`, arr[1])
  
}
