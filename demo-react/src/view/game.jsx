/*
 * @Author: SoChichung
 * @Date: 2022-08-08 10:46:38
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-13 00:24:03
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";
import Board from "./board";
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
  let isdraw = true;
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    } else if (squares[a] == null || squares[b] == null || squares[b] == null) {
      isdraw = false;
    }
  }
  if (isdraw) return "draw";
  return null;
}

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xisNext: true,
    };
    this.handleClick = (i) => {
      let history = this.state.history;
      let current = history[history.length - 1];
      const squares = current.squares.slice();
      if (squares[i] || calculateWinner(squares)) return;
      squares[i] = this.state.xisNext ? "X" : "O";

      this.setState({
        history: history.concat([
          {
            squares,
          },
        ]),
        xisNext: !this.state.xisNext,
      });
    };
    this.resetBoard = () => {
      this.setState({
        history: [{ squares: Array(9).fill(null) }],
        xisNext: true,
      });
    };
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    console.log(winner);
    if (winner && winner != "draw") {
      status = `Winner is ${winner}`;
    } else if (winner == "draw") {
      status = `Draw!Please smack the reset button!`;
    } else {
      status = `Next player: ${this.state.xisNext ? "X" : "O"}`;
    }
    return (
      <div>
        <div className="status">{status}</div>
        <Board
          squares={current.squares}
          onClick={(i) => this.handleClick(i)}
          onReset={this.resetBoard}
        ></Board>
        <div className="gamebtndiv">
          <button>上一步</button>
          <button>下一步</button>
        </div>
      </div>
    );
  }
}
