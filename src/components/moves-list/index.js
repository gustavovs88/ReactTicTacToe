import React from "react";
import { useState } from "react";
import * as S from "./styled";

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

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li className={liOrder} key={move}>
        <button onClick={() => jumpTo(move)}>
          {move === stepNumber ? <span>This is move #{move}</span> : desc}
        </button>
      </li>
    );
  });

  const invertMoves = () => {
    setInvertMovesList(!invertMovesList);
  };

  return (
    <S.Wrapper>
      <h1>Game Info</h1>
      <h2>{status}</h2>
      <button onClick={() => invertMoves()} className="invert-button">
        {buttonOrder}
      </button>
      <ul className={olOrder}>{moves}</ul>
    </S.Wrapper>
  );
};

export default MovesList;
