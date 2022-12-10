import { createContext, useState } from "react";
import { calculateWinner } from "../helpers";

const PlayContext = createContext(null);

const PlayContextProvider = ({ children }) => {
  //  WE HAVE A BOARD WITH 9 EMPTY FIELDS,
  //  SO WE CREATE AN ARRAY WITH 9 ELEMENTS FILLED WITH NULL
  const [board, setBoard] = useState(Array(9).fill(null));

  //  WE START WITH PLAYER X
  const [xIsNext, setXIsNext] = useState(true);

  //  CHECK IF WE HAVE A WINNER
  const winner = calculateWinner(board);

  function handleClick(e) {
    //  SHALLOW COPY OF THE ARRAY / BOARD
    const boardCopy = [...board];

    //  IF PLAYER CLICKS AN OCCUPIED SQUARE OR IF THE GAME IS WON, RETURN
    if (winner || boardCopy[e]) return;

    //  PUT X OR O IN THE CLICKED SQUARE
    boardCopy[e] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext((state) => !state);
  }

  function renderMoves() {
    //  WE RESTART THE GAME, SO WE NEED TO CLEAR ALL FIELDS
    setBoard(Array(9).fill(null));
  }
  const data = {
    board,
    setBoard,
    xIsNext,
    setXIsNext,
    winner,
    handleClick,
    renderMoves,
  };

  return <PlayContext.Provider value={data}>{children}</PlayContext.Provider>;
};

export { PlayContext, PlayContextProvider };
