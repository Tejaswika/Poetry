import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import LeftRow from "./components/leftRow";
import Heading from "./components/header";
import Main from "./components/main";
import RightRow from "./components/rightRow";
import Player from "./components/Player";

function App() {
  return (
    <div className="row App">
      <div className="left col-1">
        <LeftRow />
      </div>
      <header id="header" className="row col-lg-8 col-12">
        <Heading />
      </header>
      <main id="main-1" class="col-lg-8 col-12">
        <Main />
      </main>
      <div class="right row col-4">
        <RightRow />
      </div>
      <div class="mobilePlayer row col-12">
        <Player />
      </div>
    </div>
  );
}

export default App;
