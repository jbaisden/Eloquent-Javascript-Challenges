// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = fizzbuzz();

function fizzbuzz() {
  let board = '';
  let boardLen = 64; //must be divisible by 8
  for (let i = 1; i <= boardLen; i++) {
    if (i % 2 == 0) {
      board += 'x';
      if (i % 8 == 0) {
        board += '<br/>';
      }
    } else {
      board += '#';
    }
  }
  return board;
}
