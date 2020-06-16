import React from "react";
import { HashRouter } from "react-router-dom";
import routes from "./router/index";
import rendenRoutes from "./router/renderRoutes";
import Header from "./components/HeaderFrame/";
import FreeScrollBar from "react-free-scrollbar";
import NavWarp from "./components/NavWarp";
import BottomPlayer from "./components/BottomPlay";
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
