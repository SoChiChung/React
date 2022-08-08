import React from "react";
import Square from "./square";

export default class Board extends React.Component {
  returnSquare(i) {
    return <Square value={i}></Square>;
  }

  render() {
    const status = "Next player: X";
    return (
      <div>
        <div className="status">{status}</div>
        <div className="row">
          <div>{this.returnSquare(0)}</div>
          <div>{this.returnSquare(1)}</div>
          <div>{this.returnSquare(0)}</div>
        </div>
        <div className="row">
          <div>{this.returnSquare(0)}</div>
          <div>{this.returnSquare(1)}</div>
          <div>{this.returnSquare(0)}</div>
        </div>
        <div className="row">
          <div>{this.returnSquare(0)}</div>
          <div>{this.returnSquare(1)}</div>
          <div>{this.returnSquare(0)}</div>
        </div>
      </div>
    );
  }
}
