import React from "react";

function Square({ value, onClick }) {
  return (
    <button className="squareBtn" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
