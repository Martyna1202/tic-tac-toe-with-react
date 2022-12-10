export function calculateWinner(squares) {
  //  ARRAY WITH ALL WINNING COMBINATIONS
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    //  DESTRUCTURE THE LINES ARRAY FOR EACH LOOP
    const [a, b, c] = lines[i];

    //  1. CHECK IF WE HAVE "X" OR "O" ON THE FIRST POSITION
    //  2. CHECK IF ALL CHARACTERS IN A ROW ARE THE SAME, XXX OR OOO
    //  3. IF THE ROW IS COMPLETE, RETURN THE WINNER
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
    //  IF ANY SQUARE IS DIFFERENT, THAN THE ONE BEFORE IN A ROW,
    //  GO TO NEXT RETURN AND RETURN NULL
  }
  return null;
}

//  TEST ARRAY
// const squares = [null, null, null, "X", "X", "X", null, null, null];

// console.log(calculateWinner(squares));
