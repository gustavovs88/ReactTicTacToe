import React from "react";
import { useState } from "react";

const MovesList = (props) => {
  const { status, history, stepNumber, jumpTo } = props;
  const [invertMovesList, setInvertMovesList] = useState(false);

  let liOrder = "liIncreasing";
  let olOrder = "olIncreasing";
  let buttonOrder = "Descending Order";
  if (invertMovesList) {
    liOrder = "liDescending";
    olOrder = "olDescending";
    buttonOrder = "Ascending Order";
  } else {
    liOrder = "liIncreasing";
    olOrder = "olIncreasing";
    buttonOrder = "Descending Order";
  }

  const historyPositionArray = history.map((item) => {
    return item.pos;
  });
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li className={liOrder} key={move}>
        <button onClick={() => jumpTo(move)}>
          {move === stepNumber ? <strong>{desc}</strong> : desc}
        </button>
        {move === stepNumber ? (
          <p>
            <strong>Position (col,row) : {historyPositionArray[move]}</strong>
          </p>
        ) : (
          <p>Position (col,row) : {historyPositionArray[move]}</p>
        )}
      </li>
    );
  });

  const invertMoves = () => {
    setInvertMovesList(!invertMovesList);
  };

  return (
    <>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={() => invertMoves()}>{buttonOrder}</button>
        <ol className={olOrder}>{moves}</ol>
      </div>
    </>
  );
};

export default MovesList;
