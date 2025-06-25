
let xMoves = true;

function drawBoard(selector, size = 3) {
   const board = document.querySelector(selector);
   for (let i = 0; i < size; i++) {
    document.createElement('tr')
      const row = document.createElement('tr');
      for (let j = 0; j < size; j++) {
         const cell = document.createElement('td');
         
         cell.dataset.row = i;
         cell.dataset.col = j;
         cell.dataset.activ =  'da';
         row.appendChild(cell);
      }
      board.appendChild(row);

   }

}

function registerEvents() {
    const cells = document.querySelectorAll('td'); //TODO make it depend on #game
    for ( let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', function(event) 
        {
            const cell = event.target;
            if (cell.dataset.activ != 'da') return;
            console.log(cell.dataset);

            cell.innerText = xMoves ? 'X' : 'O';
            xMoves = !xMoves;
            cell.dataset.activ = false; // Disable further clicks on this cell
            someoneWon();
        
            
            
            });
        }
    }
    function someoneWon(){
      
        const cells = document.querySelectorAll('td'); //TODO make it depend on #game
        console.log(cells);

          // TODO : check lines
          for (let i = 0; i < size; i++) {
          const firstCell = i * 3;
          const secondCell = i * 3 + 1;
          const thirdCell = i * 3 + 2;
          if (cells[firstCell].innerText === '' || cells[secondCell].innerText === '' || cells[secondCell].innerText === '' cells[thirdCell].innerText === '') {
            continue;
        }

          if (cells[firstCell].innerText === cells[secondCell].innerText && cells[secondCell].innerText == cells[thirdCell].innerText {
                console.log(`linia ${i} e castigatoare`)
                return true;
            }
          

        }
            
            
    }
        //TODO: check columns
        // TODO: check diagonals
    
