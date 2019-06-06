import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import happyVision from "../../images/happyVision.png"
class Intro extends Component {
  render() {
    const vision = (
      <div className="row mt-1 mb-5  ">
        <div className=" col-6 mt-1 ml-3 pl-5 text-left">
         <img src={happyVision}/>
        </div>
        <div className=" col-3 mt-3  ml-auto p-0 ">
          <FontAwesomeIcon icon={faAlignJustify} />
        </div>
      </div>
    );

    const intro = (
      <div className="row">
        <div className="col-12 ">
          <div className=" mt-5">
            <div className="intro-title ml-5" style={{fontSize:3 + "vw"}}>
              WELCOME TO
              <p className=" intro-title-color m-0 p-0" >HAPPY VISION</p>
              THE EYE!
            </div>
            <div className="row intro-body mx-5 mt-5 text-left" style={{fontSize:2 + "vw"}}>
              Happy Vision for Optical Frame, Sunglasses and Accessorize. Happy
              Vision concept is designed and identified by TECNITALIA S.P.A one
              of the leaders Italian company designs and manufacturing optical
              shops.
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div>
        {vision}
        {intro}
      </div>
    );
  }
}

export default Intro;