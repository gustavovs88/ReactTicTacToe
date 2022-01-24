import React from "react";
import Board from "../board";
import MovesList from "../moves-list";

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
  return null;
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

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "And the winner is: " + winner[1];
    } else {
      status = "Next Player: " + (this.state.xIsNext ? "X" : "0");
    }
    return (
      <div className="game">
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
      </div>
    );
  }
}

export default Game;
