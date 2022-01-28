import React, { useState, useEffect } from "react";
import * as S from "./styled";

const EndGameModal = (props) => {
  const [closeModal, setCloseModal] = useState(false);
  const { winner, playAgain } = props;
  const onCloseModal = () => {
    setCloseModal(true);
  };
  useEffect(() => {
    setCloseModal(false);
  }, [winner]);

  return (
    <S.Modal>
      <div
        className={
          winner && !closeModal ? "modal modalOpen" : "modal modalClosed"
        }
      >
        <p onClick={() => onCloseModal()}>close X </p>
        {winner === "nobody wins" ? (
          <h2>Nobody Wins...</h2>
        ) : (
          <>
            <h1>And the winner is...</h1>
            <h2>{winner[1]}</h2>
          </>
        )}
        <button onClick={() => playAgain()}>Play again!</button>
      </div>
    </S.Modal>
  );
};

export default EndGameModal;
