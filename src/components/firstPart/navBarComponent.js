import React, { Component } from 'react';


import { Navbar, Nav,NavLink } from 'reactstrap';
// fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser,  faShoppingBag, faMapMarker  } from '@fortawesome/free-solid-svg-icons'
class NavBarComponent extends Component {


    render() {
        return (
           
                    <div className=" mb-5 ml-auto m-0 p-0">
                        <Navbar bg="secondary" variant="light">
                            <Nav className=" mx-auto"> 
                                <NavLink href="#home">
                                    <FontAwesomeIcon className="icons" icon={faSearch} />
                                </NavLink>

                                <NavLink href="#pricing">
                                    <FontAwesomeIcon className="icons" icon={faMapMarker} />
                                </NavLink>

                                <NavLink href="#features">
                                    <FontAwesomeIcon className="icons" icon={faShoppingBag} />
                                </NavLink>

                                <NavLink href="#features">
                                    <FontAwesomeIcon className="icons" icon={faUser} />
                                </NavLink>
                            </Nav>
                        </Navbar>
                    </div>
             
           
        );

    }

}

export default NavBarComponent;
