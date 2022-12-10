import { useContext, useState } from "react";
import { calculateWinner } from "../helpers";
import { PlayContext } from "../useContext/useContext";
import Board from "./Board";

function Game() {
  const { board, xIsNext, winner, handleClick, renderMoves } =
    useContext(PlayContext);

  return (
    <div>
      <Board squares={board} onClick={handleClick} />
      <div className="game-div">
        <p>
          {winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? "X" : "O"}`}
        </p>
        <button onClick={() => renderMoves()}>Start Game</button>
      </div>
    </div>
  );
}

export default Game;
