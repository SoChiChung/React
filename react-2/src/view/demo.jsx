/*
 * @Author: SoChichung
 * @Date: 2022-08-01 16:17:58
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-01 16:29:47
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";

export default class Demo extends React.Component {
  state = {
    msg: "rng",
    text: "breathe",
  };
  change = (ev) => {
    this.setState({
      text: ev.target.value,
    });
  };
  render() {
    let { msg, text } = this.state;
    return (
      <div className="box">
        {msg}
        <br />
        <input type="text" value={text} onChange={this.change} />
        {text}
      </div>
    );
  }
}
