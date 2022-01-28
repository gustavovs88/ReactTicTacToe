import React from "react";
import Board from "../board";
import EndGameModal from "../end-game-modal";
import MovesList from "../moves-list";
import * as S from "./styled";

function calculateWinner(squares) {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // return squares[a];
      return [lines[i], squares[a]];
    }
  }
  if (!squares.includes(null)) {
    return "nobody wins";
  }

  return false;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          pos: "initial",
        },
      ],
      stepNumber: 0,
      xIsNext: true,
      moveListInverted: false,
    };
  }
  handleClick(i) {
    const positionArray = [
      "(1,1)",
      "(2,1)",
      "(3,1)",
      "(1,2)",
      "(2,2)",
      "(3,2)",
      "(1,3)",
      "(2,3)",
      "(3,3)",
    ];
    const currentPosition = positionArray[i];
    const pos = currentPosition;

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          pos: pos,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  playAgain() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
          pos: "initial",
        },
      ],

      stepNumber: 0,
      xIsNext: true,
      moveListInverted: false,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status = "Current Player: " + (this.state.xIsNext ? "X" : "0");

    return (
      <S.Game>
        <div className="game-board">
          <Board
            winnerSquares={winner ? winner[0] : false}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <MovesList
          status={status}
          history={this.state.history}
          stepNumber={this.state.stepNumber}
          jumpTo={(move) => this.jumpTo(move)}
        />
        <EndGameModal winner={winner} playAgain={() => this.playAgain()} />
      </S.Game>
    );
  }
}

export default Game;
