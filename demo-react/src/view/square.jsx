/*
 * @Author: SoChichung
 * @Date: 2022-08-07 22:30:45
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-08 20:04:00
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */

import React from "react";
export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  clickListenner = (e) => {
    if (e.button == 0) {
      this.setState({ value: "1" });
    }
    if (e.button == 2) {
      this.setState({ value: null });
    }
  };
  render() {
    return (
      <button
        className="mybtn"
        onContextmenu={(event) => {
          event.preventDefault();
        }}
        onMouseDown={this.clickListenner}
      >
        {this.state.value}
      </button>
    );
  }
}
