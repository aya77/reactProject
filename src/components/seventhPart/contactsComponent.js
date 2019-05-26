import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns, faPhone, faClock } from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

class ContactsComponent extends Component {
  render() {
   

        const address = (
            <div className="col-4 col-md-3 p-1 ">
                <div className="row contactsIconBG px-3">
                    <FontAwesomeIcon className="contactsIcon m-auto" icon={faMapSigns} />
                </div>
                <div className="row mt-2 px-3">
                    <strong> Address: </strong>
                </div>
                <div className="row mt-2 text-left text-muted px-3">
                    <>address addressaddress address address address address </>
                </div>
            </div>)
            
  
        const contact = (
            <div className="col-4 col-md-3 p-1">
                <div className="row contactsIconBG px-3">
                    <FontAwesomeIcon className="contactsIcon m-auto" icon={faPhone} />
                </div>
                <div className="row mt-2 px-3">
                    <strong> Contact Us: </strong>
                </div>
                <div className="row mt-2 text-left text-muted px-3">
                    <>address addressaddress address address address address </>
                </div>
            </div>

        )

        const hours = (
            <div className="col-4 col-md-3 p-1">
                <div className="row  contactsIconBG px-3">
                    <FontAwesomeIcon className="contactsIcon m-auto" icon={faClock} />
                </div>
                <div className="row mt-2 px-3">
                    <strong> Working Days/Hours: </strong>
                </div>
                <div className="row mt-2 text-left text-muted px-3">
                    <>address addressaddress address address address address </>
                </div>
            </div>

        )

      
    
    const copyRights = (
      <div className="col-6 col-sm-3 justify-content-center">
        <div className="row mt-3 ml-1">
          <span id="black">Happy </span>
          <span className="color"> &nbsp;V</span>
          <span id="black">ision</span>
        </div>
        <div className="row ">
          <pre>
            {" "}
            &copy; CopyRight 2016 <br />
            All Rights Reserved{" "}
          </pre>
        </div>
      </div>
    );
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          {address}
          {contact}
          {hours}
          {copyRights}
        </div>
      </div>
    );
  }
}

export default ContactsComponent;
