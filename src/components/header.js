import React, { Component } from "react";
import ImgOne from "./img/Kumar-vishvas_5e47a2af768b0.jpg";
import ImgTwo from "./img/maxresdefault (5).jpg";
import ImgThree from "./img/1534701274article_img.jpg";
import ImgFour from "./img/1895301.webp";
import ImgFive from "./img/love-poem.jpg";

class Heading extends Component {
  render() {
    return (
      <div className="row col-lg-12 col-12 heading">
        <div className="col-lg-4 col-6 head">
          <div className="search-container">
            <form>
              <i className="fa fa-search searchIcon"></i>
              <input type="text" placeholder="Search...." name="search" />
            </form>
          </div>
          <p className="headingLabel">"Poetry is emotion put into measure."</p>
        </div>
        <div className="col-8 headingImg">
          <img
            src={ImgOne}
            className="img"
            width="20%"
            height="30%"
            style={{ position: "absolute", top: "50%", left: "-10%" }}
          />
          <img
            src={ImgTwo}
            className="img"
            width="20%"
            height="80%"
            style={{ position: "absolute", left: "12%" }}
          />
          <img
            src={ImgThree}
            className="img"
            width="30%"
            height="40%"
            style={{ position: "absolute", left: "35%" }}
          />
          <img
            src={ImgFour}
            className="img"
            width="20%"
            height="35%"
            style={{ position: "absolute", left: "70%" }}
          />
          <img
            src={ImgFive}
            className="img"
            width="40%"
            height="30%"
            style={{ position: "absolute", left: "40%", top: "50%" }}
          />
        </div>
        <img
          src={ImgTwo}
          className="imgMobile"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
        />
      </div>
    );
  }
}
export default Heading;
