// Import stylesheets

// import { header, fizzbuzzf } from './fizzbuzz/fizzbuzz.js';
import { header, createBoard } from './chessboard/index.js';

// Write Javascript code!
const headerh1 = document.getElementById('header');
headerh1.innerHTML = header();

const appDiv = document.getElementById('app');
appDiv.innerHTML = createBoard();
