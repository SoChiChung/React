/*
 * @Author: SoChichung
 * @Date: 2022-08-01 15:17:31
 * @LastEditors: SoChichung
 * @LastEditTime: 2022-08-05 23:18:46
 * @Description:
 *
 * Copyright (c) 2022 by SoChichung ddeadwings@gmail.com, All Rights Reserved.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Demo from "./view/demo";
import Demo2 from "./view/Demo2";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Demo2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
