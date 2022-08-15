// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = fizzbuzz();

function fizzbuzz() {
  let result = '';

  for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
      result += 'FizzBuzz';
    } else if (i % 5 == 0) {
      result += 'Buzz';
    } else if (i % 3 == 0) {
      result += 'Fizz';
    } else {
      result += i.toString();
    }
    result += '<br/>';
  }
  return result;
}
