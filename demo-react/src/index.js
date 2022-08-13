/*
 * @Author: SoChichung
 * @Date: 2022-08-07 22:23:21
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-12 09:55:18
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import Square from "./view/square";
import Board from "./view/board";
import Game from "./view/game";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game></Game>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
