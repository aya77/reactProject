import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapSigns,
  faPhone,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

class ContactsComponent extends Component {
  render() {
    const address = (
      <div className="col-4 col-md-3 p-1 text proximanova">
        <div className="row contactsIconBG m-1">
          <FontAwesomeIcon className="contactsIcon m-auto" icon={faMapSigns} />
        </div>
        <div className="row mt-2 px-3">
          <strong> Address: </strong>
        </div>
        <div className="row mt-2 text-left text-muted px-3">
          <>Industry Zone , 18 First Section, 12566 October 6, Egypt </>
        </div>
      </div>
    );

    const contact = (
      <div className="col-4 col-md-3 p-1 proximanova">
        <div className="row contactsIconBG m-1">
          <FontAwesomeIcon className="contactsIcon m-auto" icon={faPhone} />
        </div>
        <div className="row mt-2 px-3">
          <strong> Contact us: </strong>
        </div>
        <div className="row mt-2 text-left text-muted px-3">
          01201810111-0100054445t m.omran@theoutlet-eg.com
        </div>
      </div>
    );

    const hours = (
      <div className="col-4 col-md-3 p-1 proximanova">
        <div className="row contactsIconBG m-1">
          <FontAwesomeIcon className="contactsIcon m-auto" icon={faClock} />
        </div>
        <div className="row mt-2 px-3">
          <strong> Working Days/Hours: </strong>
        </div>
        <div className="row mt-2 text-left text-muted px-3">
          Mon - Sun <br/> 9:00 AM - 8:00 PM
        </div>
      </div>
    );

    const copyRights = (
      <div className="col-12 col-md-3  mt-4">
        <div className="row mt-3 ml-1 justify-content-center">
          <img src="assets/images/logo.png" />
        </div>
        <div className="row justify-contnet-center mt-3">
          <div className="col-12 ml-2 text">
            <pre>
              {" "}
              &copy; CopyRight 2016 <br />
              All Rights Reserved{" "}
            </pre>
          </div>
        </div>
      </div>
    );
    return (
      <div className="container mt-5 mb-5">
        <div className="row text">
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
