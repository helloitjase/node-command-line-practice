var prompt = require('prompt');

function ticTacToe() {
  let board = [[1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9]];
  let player = true;
  let win = false;
  function checkWins() {
   function checkRows() {
     for (let i = 0; i < board.length; i++) {
       let x = 0;
       let o = 0;
       for (let j = 0; j < board[i].length; j++) {
         if (board[i][j] === 'x') {
           x++;
         }
         if (board[i][j] === 'o') {
           o++;
         }
       }
       if (x === 3) {
         console.log('x wins');
         console.log(board.join('\n'));
         win = true;
         return;
       }
       if (o === 3) {
         console.log('o wins');
         console.log(board.join('\n'));
         win = true;
         return;
       }
     }
    }  
    function checkColumns() {
      for (let i = 0; i < board.length; i++) {
        let x = 0; 
        let o = 0;
        for (let j = 0; j < board[i].length; j++) {
          if (board[j][i] === 'x') {
            x++;
          }
          if (board[j][i] === 'o') {
            o++;
          }
        }
        if (x === 3) {
          console.log('x wins');
          console.log(board.join('\n'));
          win = true;
          return;
        }
        if (o === 3) {
          console.log('o wins');
          console.log(board.join('\n'));
          win = true;
          return;
        }
      }
    }
    function checkDiags() {
      let x = 0;
      let o = 0;
      for (let i = 0; i < board.length; i++) {
        if (board[i][i] === 'x') {
          x++;
        }
        if (board[i][i] === 'o') {
          o++;
        }
      }
      if (x === 3) {
        console.log('x wins');
        console.log(board.join('\n'));
        win = true;
        return;
      }
      if (o === 3) {
        console.log('o wins');
        console.log(board.join('\n'));
        win = true;
        return;
      }
      x = 0;
      o = 0;
      let diag = 0;
      for (let i = board.length - 1; i >= 0; i--) {
        if (board[diag][i] === 'x') {
          x++;
        }
        if (board[diag][i] === 'o') {
          o++;
        }
        diag++
      }
      if (x === 3) {
        console.log('x wins');
        console.log(board.join('\n'));
        win = true;
        return;
      }
      if (o === 3) {
        console.log('o wins');
        console.log(board.join('\n'));
        win = true;
        return;
      }
    }
    checkColumns();
    checkRows();
    checkDiags();
  }
  
  function getMove() {
    console.log(board.join('\n'));
    let currPlayer = player ? 'Player 1': 'Player 2';
    prompt.get([{name: 'move', message: `${currPlayer} pick`}], (err, res) => {

      let places = Number(res.move);
      if (places < 0 || places > 10 || isNaN(places)) {
        console.log('Not a valid place, please pick again');
        getMove();
      }  else {
        if (places === 1 && typeof board[0][0] !== 'string') {
          board[0][0] = player ? 'x' : 'o';
        } else if (places === 2 && typeof board[0][1] !== 'string') {
          board[0][1] = player ? 'x' : 'o';
        } else if (places === 3 && typeof board[0][2] !== 'string') {
          board[0][2] = player ? 'x' : 'o';
        } else if (places === 4 && typeof board[1][0] !== 'string') {
          board[1][0] = player ? 'x' : 'o';
        } else if (places === 5 && typeof board[1][1] !== 'string') {
          board[1][1] = player ? 'x' : 'o';
        } else if (places === 6 && typeof board[1][2] !== 'string') {
          board[1][2] = player ? 'x' : 'o';
        } else if (places === 7 && typeof board[2][0] !== 'string') {
          board[2][0] = player ? 'x' : 'o';
        } else if (places === 8 && typeof board[2][1] !== 'string') {
          board[2][1] = player ? 'x' : 'o';
        } else if (places === 9 && typeof board[2][2] !== 'string') {
          board[2][2] = player ? 'x' : 'o';
        } else {
          console.log('Not a valid place, please pick again');
          getMove();
          return;
        }
        checkWins();
        if (win === true) {
          return;
        }
        player = !player;
        getMove();
      }
    })

  }
  getMove();
  
  
}

prompt.start();
ticTacToe();