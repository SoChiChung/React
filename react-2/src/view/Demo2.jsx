/*
 * @Author: SoChichung
 * @Date: 2022-08-03 18:26:21
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-06 09:39:55
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";
import { data } from "../data/data";

let myobj = data.myobj;
console.log(Reflect.ownKeys(myobj));
export default class demo2 extends React.Component {
  state = {
    mylist: data.list,
  };
  render() {
    return (
      <div>
        <ul>
          {data.list.map((item) => {
            let { id, string } = item;
            return <li key={id}>{string}</li>;
          })}
          <li></li>
        </ul>
        <p>对象</p>
        <ul>
          {Reflect.ownKeys(data.myobj).map((key, index) => {
            return <li key={index}>
              {myobj[key]}
            </li>;
          })}
        </ul>
      </div>
    );
  }
}
