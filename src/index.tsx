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
import reducers from "./redux/reducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
