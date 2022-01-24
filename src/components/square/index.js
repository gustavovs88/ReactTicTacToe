import React from "react";
import * as S from "./styled";

function Square(props) {
  let winnerSquares = false;
  if (props.winner) {
    const [a, b, c] = props.winner;
    if (
      props.squarePosition === a ||
      props.squarePosition === b ||
      props.squarePosition === c
    ) {
      winnerSquares = true;
    }
  }
  return (
    <>
      <S.squareStyle winner={winnerSquares} onClick={props.onClick}>
        {props.value}
      </S.squareStyle>
    </>
  );
}

export default Square;
