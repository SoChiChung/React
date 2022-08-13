/*
 * @Author: SoChichung
 * @Date: 2022-08-07 22:25:23
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-12 19:00:05
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";
// import Square from "./square";
function Square(props) {
  return (
    <button className="mybtn" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   let isdraw = true;
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     } else if (squares[a] == null || squares[b] == null || squares[b] == null) {
//       isdraw = false;
//     }
//   }
//   if (isdraw) return "draw";
//   return null;
// }
export default class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   squares: Array(9).fill(null),
  //   xisNext: true,
  // };
  // this.handleClick = (i) => {
  //   const squares = this.state.squares.slice();
  //   if (squares[i] || calculateWinner(this.state.squares)) return;
  //   squares[i] = this.state.xisNext ? "X" : "O";
  //   this.setState({
  //     squares,
  //     xisNext: !this.state.xisNext,
  //   });
  // };

  returnSquare(i) {
    return (
      <div>
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        ></Square>
      </div>
    );
  }
  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // console.log(winner);
    // if (winner && winner != "draw") {
    //   status = `Winner is ${winner}`;
    // } else if (winner == "draw") {
    //   status = `Draw!Please smack the reset button!`;
    // } else {
    //   status = `Next player: ${this.state.xisNext ? "X" : "O"}`;
    // }
    return (
      <div>
        <div className="row">
          <div>{this.returnSquare(0)}</div>
          <div>{this.returnSquare(1)}</div>
          <div>{this.returnSquare(2)}</div>
        </div>
        <div className="row">
          <div>{this.returnSquare(3)}</div>
          <div>{this.returnSquare(4)}</div>
          <div>{this.returnSquare(5)}</div>
        </div>
        <div className="row">
          <div>{this.returnSquare(6)}</div>
          <div>{this.returnSquare(7)}</div>
          <div>{this.returnSquare(8)}</div>
        </div>
        <div className="reset-div">
          <button className="reset" onClick={this.props.onReset}>
            reset
          </button>
        </div>
      </div>
    );
  }
}
