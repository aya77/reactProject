import React, { Component } from 'react';


import { Navbar, NavbarBrand, Nav,NavLink } from 'reactstrap';
// fontAwsome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faUser,  faShoppingBag, faMapMarker  } from '@fortawesome/free-solid-svg-icons'

// end of font awsome

class Symbole extends Component {


    render() {
        return (
           
                    <div className="col-4 ml-auto ">
                        <Navbar bg="secondary" variant="light">
                            <Nav className=" mx-auto"> 
                                <NavLink href="#home">
                                    <FontAwesomeIcon icon={faSearch} />
                                </NavLink>

                                <NavLink href="#pricing">
                                    <FontAwesomeIcon icon={faMapMarker} />
                                </NavLink>

                                <NavLink href="#features">
                                    <FontAwesomeIcon icon={faShoppingBag} />
                                </NavLink>

                                <NavLink href="#features">
                                    <FontAwesomeIcon icon={faUser} />
                                </NavLink>
                            </Nav>
                        </Navbar>
                    </div>
             
           
        );

    }

}

export default Symbole;
