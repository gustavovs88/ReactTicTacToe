import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  let squareClass = "square";
  if (props.winner) {
    const [a, b, c] = props.winner;
    if (
      props.squarePosition === a ||
      props.squarePosition === b ||
      props.squarePosition === c
    ) {
      squareClass = "winner-square";
    }
  }
  return (
    <button className={squareClass} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        squarePosition={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winner={this.props.winnerSquares}
      />
    );
  }

  render() {
    const numberOfRows = 3;
    const numberOfColumns = 3;
    let row = [];
    let table = [{}];
    for (var i = 0; i < numberOfRows * numberOfColumns; i++) {
      row.push(i);
    }
    for (var ir = 0; ir < numberOfColumns; ir++) {
      const breakedRow = row.splice(0, numberOfRows);
      table.push(breakedRow);
    }
    table.splice(0, 1);
    const tableConstruct = table.map((element) => {
      return (
        <div className="board-row" key={element}>
          {element.map((item) => {
            return this.renderSquare(item);
          })}
        </div>
      );
    });

    return <div>{tableConstruct}</div>;
  }
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
  invertMoves() {
    this.setState({ moveListInverted: !this.state.moveListInverted });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    let liOrder = "liIncreasing";
    let olOrder = "olIncreasing";
    let buttonOrder = "Descending Order";
    if (this.state.moveListInverted) {
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
          <button onClick={() => this.jumpTo(move)}>
            {move === this.state.stepNumber ? <strong>{desc}</strong> : desc}
          </button>
          {move === this.state.stepNumber ? (
            <p>
              <strong>Position (col,row) : {historyPositionArray[move]}</strong>
            </p>
          ) : (
            <p>Position (col,row) : {historyPositionArray[move]}</p>
          )}
        </li>
      );
    });

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
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.invertMoves()}>{buttonOrder}</button>
          <ol className={olOrder}>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

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
