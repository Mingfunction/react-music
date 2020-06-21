/* ============================================================================= 
#
# Author: Min
# Date: 2020-06-19 10:50:04
# LastEditors: Min
# LastEditTime: 2020-06-19 11:02:59
# Description:
#
============================================================================= */
import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./router/index";
import rendenRoutes from "./router/renderRoutes";
import Header from "./components/headerFrame/";
import FreeScrollBar from "react-free-scrollbar";
import NavWarp from "./components/navWarp";
import BottomPlayer from "./components/bottomPlay";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <HashRouter>
        <Header />
        <NavWarp />
        <div className="container">
          <FreeScrollBar className="example">
            {rendenRoutes({ routes })}
          </FreeScrollBar>
        </div>
        <BottomPlayer />
      </HashRouter>
    </div>
  );
}

export default App;
