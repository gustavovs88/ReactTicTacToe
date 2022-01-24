import React from "react";
import Square from "../square";
import * as S from "./styled";

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
        <S.Wrapper key={element}>
          {element.map((item) => {
            return this.renderSquare(item);
          })}
        </S.Wrapper>
      );
    });

    return <div>{tableConstruct}</div>;
  }
}

export default Board;
