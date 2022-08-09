/*
 * @Author: SoChichung
 * @Date: 2022-08-07 22:25:23
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-10 00:27:58
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";
import Square from "./square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }
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
