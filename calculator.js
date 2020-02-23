const prompt = require('prompt');

const calculator = () => {
  let expression = '';
  let finish = false;
  const numbers = () => {
    let result = prompt.get([
      { name: 'number',
        description: 'Enter number'
      }
    ], (err, result) => {
      if (err) {
        console.log('Not a valid number, please re-enter')
      }
      expression += result.number
      if (!finish) {
        expr();
      } else {
        finish = !finish;
        result = eval(expression);
        console.log(result);
      }
    })
  }
  const expr = () => {
    let result = prompt.get([
      { name: 'exp',
        description: 'Enter expression'
      }
    ], (err, result) => {
      if (err) {
        console.log('Not a valid number, please re-enter')
      }
      if (result.exp !== '*' && result.exp !== '/' && result.exp !== '+' && result.exp !== '-') {
        console.log('This is not a valid expression, please enter one of : *, /, +, -');
        expr();
      } else {
        finish = !finish;
        expression += result.exp
        numbers();
      }

    })
  }

  numbers();
}


calculator();