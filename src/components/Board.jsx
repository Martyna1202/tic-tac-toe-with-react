import React from "react";
import Square from "./Square";

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, i) => {
        return (
          <Square
            key={i}
            className=""
            value={square}
            onClick={() => onClick(i)}
          />
        );
      })}
    </div>
  );
}

export default Board;
