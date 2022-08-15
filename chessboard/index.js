// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = createBoard();

function createBoard() {
  let board = '';
  for(let i=1; i <= 64; i++) {
    if(i % 2 == 0) {
      board += 'x';
      if(i % 8 == 0) {
        board += '/n';
      }
    }
    else {
      board += '#';
    }
  }
}


