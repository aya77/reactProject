import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin, faPhone, faClock } from '@fortawesome/free-solid-svg-icons'


class ContactsComponent extends Component {
    render() {

        const address = (
            <div className="col-3">
                <div className="row">
                    <FontAwesomeIcon icon={faMapPin} />
                </div>
                <div className="row mt-2 ">
                   <strong> Address: </strong>
                </div>
                <div className="row mt-2 text-md-left text-muted">
                   <>address addressaddress address address address address </>
                </div>
            </div>

        )

        const contact =(
            <div className="col-3">
            <div className="row">
                <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="row mt-2 ">
               <strong> Contact Us: </strong>
            </div>
            <div className="row mt-2 text-md-left text-muted">
               <>address addressaddress address address address address </>
            </div>
        </div>

        )

        const hours =(
            <div className="col-3">
            <div className="row">
                <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="row mt-2 ">
               <strong> Working Days/Hours: </strong>
            </div>
            <div className="row mt-2 text-md-left text-muted">
               <>address addressaddress address address address address </>
            </div>
        </div>

        )

        // const copyRights = (
                 

        // )
        return (
            <div className="container mt-5 mb-5">
            <div className="row">
                {address}
                {contact}
                {hours}
            </div>
            </div>
        );
    }
}

export default ContactsComponent;