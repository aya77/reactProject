import React, { Component } from 'react';


import { Navbar, Nav, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserAlt, faShoppingBag, faMapMarkerAlt, faUsers, faUserTag, faUserAltSlash, faUserAstronaut, faUserCheck, faUserCircle, faUserClock, faUserCog, faUserEdit, faUserFriends, faUserMd } from '@fortawesome/free-solid-svg-icons'
class NavBarComponent extends Component {


    render() {
        return (
            <div className="container">

                <div className="row">
                    <Navbar className="row ml-auto" variant="light">
                        <Nav className="col-12 ">
                            <NavLink>
                                <FontAwesomeIcon className="icons" icon={faSearch} />
                            </NavLink>

                            <NavLink>
                                <FontAwesomeIcon className="icons" icon={faMapMarkerAlt} />
                            </NavLink>

                            <NavLink >
                                <FontAwesomeIcon className="icons" icon={faShoppingBag} />
                            </NavLink>

                            <NavLink >
                                <FontAwesomeIcon className="icons" icon={faUserAlt} />
                            </NavLink>
                        </Nav>
                    </Navbar>

                </div>
            </div>


        );

    }

}

export default NavBarComponent;
