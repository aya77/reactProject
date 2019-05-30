import React, { Component } from 'react';


import { Navbar, Nav, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserAlt, faShoppingBag, faMapMarkerAlt, faUsers, faUserTag, faUserAltSlash, faUserAstronaut, faUserCheck, faUserCircle, faUserClock, faUserCog, faUserEdit, faUserFriends, faUserMd} from '@fortawesome/free-solid-svg-icons'
class NavBarComponent extends Component {


    render() {
        return (
            <div className="container">

                <div className="row pl-5">


                    <div className="col-12 mb-5 pl-5 m-0 p-0">
                        <Navbar bg="secondary" variant="light">
                            <Nav className=" mx-auto">
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
            </div>

        );

    }

}

export default NavBarComponent;
