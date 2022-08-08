/*
 * @Author: SoChichung
 * @Date: 2022-08-07 22:30:45
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-07 22:53:36
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */

import React from "react";
export default class Square extends React.Component {
  render() {
    return <button className="mybtn">{this.props.value}</button>;
  }
}
