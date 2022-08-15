// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
scopeTest();

function scopeTest() {
  let test = 'blah';
  console.log(test);
  nested();
  function nested() {
    test = '2';
    console.log(test);
    nested2();
    function nested2() {
      test = '3';
      console.log(test);
    }
  }
  console.log(test);
}

console.log(test);
