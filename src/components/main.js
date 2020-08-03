import React, { Component } from "react";
import Trees from "./img/trees.png";
import If from "./img/if.jpg";
import You from "./img/you.jpg";
import The from "./img/the.jpg";
import Aone from "./img/a1.jpg";
import Atwo from "./img/a2.jpg";
import Athree from "./img/a3.jpg";
import Afour from "./img/a4.jpg";
import Afive from "./img/a5.jpg";
import Poem from "./img/MV5BMWRiZDY5MDQtMDkxMi00N2I1LWIwNzQtM2VmYWFkMGE0YWFkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SY1000_CR0,0,669,1000_AL_.jpg";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="row col-12 navbar">
          <a href="#">ALL</a>
          <a href="#">ROMANTIC</a>
          <a href="#">MOTIVATIONAL</a>
          <a href="#">INSPIRATIONAL</a>
          <a href="#">SAD</a>
          <a href="#">PATRIOTIC</a>
          <a href="#">SOCIAL</a>
        </div>
        <div id="images-container" className="row col-lg-12">
          <div className="row col-12 images">
            <div className=" col-lg-2 col-4  column">
              <img src={Trees} />
            </div>

            <div className=" col-lg-2 col-4  column">
              <img src={If} />
            </div>

            <div className=" col-lg-2 col-4  column">
              <img src={You} />
            </div>

            <div className=" col-lg-2 col-4  column hide">
              <img src={The} />
            </div>

            <div className=" col-lg-2 col-4  column hide">
              <img src={Trees} />
            </div>
            <div className=" col-lg-2 col-4  column hide">
              <img src={You} />
            </div>
          </div>
        </div>

        <div id="popular-artist">
          <div className="text hide">
            <p>CHOOSE YOUR FAVOURITE ARTIST</p>
          </div>

          <div className="artist-container row col-12">
            <div className="single col-lg-2 col-4">
              <img src={Aone} style={{ borderRadius: "50%", height: "100%" }} />
            </div>

            <div className="single col-lg-2 col-4">
              <img src={Atwo} style={{ borderRadius: "50%", height: "100%" }} />
            </div>

            <div className="single col-lg-2 col-4">
              <img
                src={Athree}
                style={{ borderRadius: "50%", height: "100%" }}
              />
            </div>

            <div className="single col-lg-2 hide">
              <img
                src={Athree}
                style={{ borderRadius: "50%", height: "100%" }}
              />
            </div>

            <div className="single col-lg-2 hide">
              <img
                src={Afour}
                style={{ borderRadius: "50%", height: "100%" }}
              />
            </div>

            <div className="single col-lg-2 hide">
              <img
                src={Afive}
                style={{ borderRadius: "50%", height: "100%" }}
              />
            </div>
          </div>
        </div>

        <div className="btm">
          <div className="text hide">
            <p>LATEST POEMS</p>
          </div>
          <div className="row songs">
            <div className="col-3 song">
              <img className="col-3" src={Poem} />
              <p className="col-9 songDis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-3 song">
              <img className="col-3" src={Poem} />
              <p className="col-9 songDis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="col-3 song">
              <img className="col-3" src={Poem} />
              <p className="col-9 songDis">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Main;
