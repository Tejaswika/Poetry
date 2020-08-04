import React from "react";
import "./Poetry.css";
import LeftRow from "../../components/Poetry/leftRow";
import Heading from "../../components/Poetry/header";
import Main from "../../components/Poetry/main";
import RightRow from "../../components/Poetry/rightRow";
import Player from "../../components/Poetry/Player";

function Poetry() {
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

export default Poetry;
