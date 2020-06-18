/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-18 22:35:41
# LastEditors: Min
# LastEditTime: 2020-06-19 00:20:14
# Description: file content
#
============================================================================= */
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Provider } from "react-redux";
import reducer from "./redux/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
