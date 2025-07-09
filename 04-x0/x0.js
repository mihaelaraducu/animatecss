let xMoves = true;
let gameOver = false;
const DEBUGGING = true;

function debug(message) {
  if (DEBUGGING == false) return;
  console.log(message);
}

function drawBoard(selector, size = 3) {
  const board = document.querySelector(selector);
  for (let i = 0; i < size; i++) {
    document.createElement("tr");
    const row = document.createElement("tr");
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("td");

      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.dataset.activ = "da";
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function registerEvents() {
  const cells = document.querySelectorAll("td"); //TODO make it depend on #game
  const elemLaMutare = document.getElementById("la_mutare");
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (event) {
      if (gameOver) return;
      const cell = event.target;
      if (cell.dataset.activ != "da") return;
      console.log(cell.dataset);

      cell.innerText = xMoves ? "X" : "O";
      someoneWon();
      xMoves = !xMoves;
      elemLaMutare.innerText = xMoves ? "X" : "O";

      cell.dataset.activ = false; // Disable further clicks on this cell
   
    });
  }
}
function someoneWon() {
    
  const cells = document.querySelectorAll("td"); //TODO make it depend on #game
  //console.log(cells);

  for (let i = 0; i < 3; i++) {
    const firstCell = i * 3;
    const secondCell = i * 3 + 1;
    const thirdCell = i * 3 + 2;

    let lineIsIdetical = checkThreeCells(cells, firstCell, secondCell, thirdCell, 'linie', i);
    if (lineIsIdetical) {
      gameOver = true;
      addGameOverClass();
      return;
    }
  }
  

  //check columns
  for (let j = 0; j < 3; j++) {
    const firstCell = j + 0 * 3;
    const secondCell = j + 1 * 3;
    const thirdCell = j + 2 * 3;

    // col 0: 0,3,6
    // col 1: 1,4,7
    // col 2: 2,5,8

    debug(
      `Verific coloana ${j} cu celulele ${firstCell}, ${secondCell}, ${thirdCell}`
    );
    let colIsIdentical = checkThreeCells(cells, firstCell, secondCell, thirdCell, 'coloana', j);
    if (colIsIdentical) {
      gameOver = true;
      addGameOverClass();
      return;
    }   

    
  }
  // Check main diagonal
  // 0, 4, 8
  let firstCell = 0;
  let secondCell = 4;
  let thirdCell = 8;

  let mainDiagonalIsIdentical = checkThreeCells(cells, firstCell, secondCell, thirdCell, 'diagonala', 'principala');
    if (mainDiagonalIsIdentical) {
        gameOver = true;
        addGameOverClass();
        return;
    }

  //Check secondary diagonal
  // 2, 4, 6
  firstCell = 2;
  secondCell = 4;
  thirdCell = 6;

  let secondaryDiagonalIsIdentical = checkThreeCells(cells, firstCell, secondCell, thirdCell, 'diagonala', 'secundara');
    if (secondaryDiagonalIsIdentical) {
        gameOver = true;
        addGameOverClass();
    }
  
}
function addGameOverClass() {
    const elemGame = document.getElementById("game");
    elemGame.classList.add("over");
}
function checkThreeCells(cells, firstCell, secondCell, thirdCell, directie, indice) {
    if (
      cells[firstCell].innerText === "" ||
      cells[secondCell].innerText === "" ||
      cells[secondCell].innerText === "" ||
      cells[thirdCell].innerText === ""
    ) {
      return false;
    }

    if (
      cells[firstCell].innerText === cells[secondCell].innerText &&
      cells[secondCell].innerText == cells[thirdCell].innerText
    ) {
      debug(`${directie} ${indice} e castigatoare`);
      alert(`${xMoves ? "X" : "0"} won!`);
      return true;
    }
  }

