import React, { Component } from "react";

import NavBarComponent from "./components/firstPart/navBarComponent";
import Glasses from "./components/firstPart/Glasses";
import Products from "./components/forthPart/productsComponent";
import { PRODUCTS } from "./shared/products";

import OurBrandsComponent from "./components/fifthPart/ourBrandsComponent";
import FollowComponent from "./components/sixthPart/followComponent";
import ContactsComponent from "./components/seventhPart/contactsComponent";

import SeperationComponent from './components/thirdPart/seperationComponent'

import Intro from "./components/firstPart/Intro";
import sunG from "./images/sunG.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faSearch,
  faUser,
  faShoppingBag,
  faAlignJustify
} from "@fortawesome/free-solid-svg-icons";

import TypeComponent from "./components/secondPart/typesComponent";
import TrendsComponent from "./components/secondPart/trendsComponent"
import BranchesBarComponent from './components/secondPart/branchesBarComponent'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS
    };
  }
  render() {
    return (



      <div className="App">


        <div className="row">
          <div className="col-4 ">

            <div className="row m-1 mb-5">
              <div className=" col-9 mt-1">
                <span id="black">Happy </span>
                <span className="color">V</span>
                <span id="black">ision</span>
              </div>
              <div className=" col-3 mt-3">
                <FontAwesomeIcon icon={faAlignJustify} />
              </div>
            </div>

            <div className="row m-1">
              <div className="col-12 ">
                <Intro />
              </div>
            </div>

          </div>
          <div className="col-3 p-0 m-0">
            <img
              src="https://i.pinimg.com/564x/e9/00/0d/e9000dab632f80af73a0818c6baf1b94.jpg"
              width="370px"
              height="730px"
              alt=""
            />
          </div>
          <div className="col-4">
            <div className="row d-flex justify-content-right">
              <NavBarComponent />
            </div>
            <div className="row">
              <Glasses />
            </div>
          </div>
        </div>

        <div className= "mb-auto">
       
          <BranchesBarComponent />
       
        </div>
      

        <div className="row mt-5">
          <TypeComponent />
        </div>
        <div className="row mt-5">
          <TrendsComponent />
        </div>
        <div className="row bg-dark">
          <SeperationComponent />
        </div>
        <div className="row m-1 ">
          <Products products={this.state.products} />
        </div>

        <div className="row m-1 ">
          < OurBrandsComponent/>
        </div>

       

        <div className="footer bg-light">
          <div className="row m-1 ">
            <FollowComponent />
          </div>

          <div className="row m-1 " name="foo" >
            <ContactsComponent />
          </div>
        </div>
      </div >
    );
  }
}
export default App;

// import { Navbar, NavbarBrand } from 'reactstrap';
// // fontAwsome
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// library.add(faStroopwafel)
// // end of font awsome
