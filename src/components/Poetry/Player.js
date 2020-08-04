import React, { Component } from "react";
import Img from "../../assets/Poetry/maxresdefault (3).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faPause,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

class Player extends Component {
  render() {
    return (
      <div className="row">
        <img src={Img} className="imgHide col-4" width="40%" height="100%" />
        <div className="playIconHide" className="row col-4">
          <FontAwesomeIcon
            icon={faCaretLeft}
            color="white"
            style={{ marginRight: "2%" }}
            size="5x"
          />
          <FontAwesomeIcon
            icon={faPause}
            color="white"
            style={{ marginRight: "2%" }}
            size="5x"
          />
          <FontAwesomeIcon
            icon={faCaretRight}
            color="white"
            style={{ marginRight: "2%" }}
            size="5x"
          />
        </div>
        <p className="songDisHide col-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, vitae?
          Aspernatur, odio ea. Accusamus ad veritatis voluptates eligendi
          repudiandae beatae provident, cum distinctio adipisci facilis mollitia
          explicabo, possimus porro vitae.
        </p>
      </div>
    );
  }
}
export default Player;
