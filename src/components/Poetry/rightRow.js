import React, { Component } from "react";
import ImgOne from "../../assets/Poetry/maxresdefault (3).jpg";
import ImgTwo from "../../assets/Poetry/MV5BMWRiZDY5MDQtMDkxMi00N2I1LWIwNzQtM2VmYWFkMGE0YWFkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SY1000_CR0,0,669,1000_AL_.jpg";
import ImgThree from "../../assets/Poetry/helly-shah-(storyteller)-1268909-13-06-2019-07-55-02.jpg";
import ImgFour from "../../assets/Poetry/love-poem.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faPause,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

class RightRow extends Component {
  render() {
    return (
      <div className=" col-11 rightRow">
        <img src={ImgOne} className="img" width="95%" height="30%" />
        <div className="range">
          <span>time</span>
          <input type="range" className="scrollBar" />
          <span>time</span>
        </div>
        <div className="playIcon">
          <FontAwesomeIcon icon={faCaretLeft} style={{ margin: "2%" }} />
          <FontAwesomeIcon icon={faPause} style={{ margin: "2%" }} />
          <FontAwesomeIcon icon={faCaretRight} style={{ margin: "2%" }} />
        </div>

        <div className="upNext">
          <p>
            UP NEXT
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </p>
        </div>
        <div className="col-12 moreSong">
          <div className="row songMore">
            <img className="col-3" src={ImgTwo} />
            <p className="col-9 songDis">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="row songMore">
            <img className="col-3" src={ImgThree} />
            <p className="col-9 songDis">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="row songMore">
            <img className="col-3" src={ImgFour} />
            <p className="col-9 songDis">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default RightRow;
