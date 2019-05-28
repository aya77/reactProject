import React, { Component } from 'react';


import { Navbar, Nav, NavLink } from 'reactstrap';
// fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faShoppingBag, faMapMarker } from '@fortawesome/free-solid-svg-icons'
class NavBarComponent extends Component {


    render() {
        return (
            <div className="container">

                <div className="row pl-5">


                    <div className="col-12 mb-5 pl-5 m-0 p-0">
                        <Navbar bg="secondary" variant="light">
                            <Nav className=" mx-auto">
                                <NavLink href="#search">
                                    <FontAwesomeIcon className="icons" icon={faSearch} />
                                </NavLink>

                                <NavLink href="#map">
                                    <FontAwesomeIcon className="icons" icon={faMapMarker} />
                                </NavLink>

                                <NavLink href="#shopping">
                                    <FontAwesomeIcon className="icons" icon={faShoppingBag} />
                                </NavLink>

                                <NavLink href="#user">
                                    <FontAwesomeIcon className="icons" icon={faUser} />
                                </NavLink>
                            </Nav>
                        </Navbar>

                    </div>
                </div>
            </div>

        );

    }

}

export default NavBarComponent;
