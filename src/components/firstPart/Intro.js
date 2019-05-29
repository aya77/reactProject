import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import happyVision from "../../images/happyVision.png"
class Intro extends Component {



  
    render() {

        const vision = (
            <div className="row mt-1 mb-5  ">
              <div className=" col-6 mt-1 ml-5 pl-4 text-left">
                 <img src={happyVision}/>
              </div>
              <div className=" col-3 mt-3 ml-auto">
                <FontAwesomeIcon icon={faAlignJustify} />
              </div>
            </div>

        )

        const intro = (

            <div className="row">
            <div className="col-12 ">
            
            <div className="container mt-5">
    
            <div className="intro-title ml-5">
                    Welcom to
                <p className=" intro-title-color m-0 p-0" >
                        happy vision
                </p>
                    the eye wear!
    
            </div>
            <div className="intro-body mx-5 mt-5 text-left">
                Happy vision is a glasses company syu djna
                dmkmflv dkmd wpamf nciw amso sdekk
             </div>
        </div>
         
        </div>
          </div>
        )
    
        return (
            <div>
                 {vision}
           {intro}
            </div>
           
        )




    }


}

export default Intro;