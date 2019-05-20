import React, { Component } from "react";

import Symbole from "./components/navBarComponent";
import Glasses from "./components/Glasses";
import Products from "./components/forthPart/productsComponent";
import { PRODUCTS } from "./shared/products";

import BrandsComponent from "./components/fifthPart/brandsComponent";
import FollowComponent from "./components/sixthPart/followComponent";
import ContactsComponent from "./components/seventhPart/contactsComponent";

import SeperationComponent from './components/thirdPart/seperationComponent'

import Intro from "./components/Intro";
import sunG from "./images/sunG.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStroopwafel,
  faSearch,
  faUser,
  faShoppingBag,
  faAlignJustify
} from "@fortawesome/free-solid-svg-icons";

import TypeComponent  from "./components/secondPart/typesComponent";
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
        <div className="row m-1 ">
          <div className=" col-3 m-3">
            <span id="black">Happy </span>
            <span className="color">V</span>
            <span id="black">ision</span>
          </div>
          <div className=" col-1 mt-4">
            <FontAwesomeIcon icon={faAlignJustify} />
          </div>
          <Symbole />
        </div>

        <div className="row m-1">
          <div className="col-4 ">
            <Intro />
          </div>
          <div className="col-3 ">
            <img
              src="https://i.pinimg.com/564x/e9/00/0d/e9000dab632f80af73a0818c6baf1b94.jpg"
              width="350px"
              height="500px"
              alt=""
            />
          </div>
          <div className="col-5 ">
            <Glasses />
          </div>
        </div>
        <div className= "col-12">
        <BranchesBarComponent/>
          </div>
        
        <div className="row mt-5">
            <TypeComponent />
          </div>
          <div className="row mt-5">
            <TrendsComponent />
          </div>
          <div className="row bg-dark">
            <SeperationComponent/>
          </div>
        <div className="row m-1 ">
          <Products products={this.state.products} />
        </div>

        <div className="footer bg-light">
          <div className="row m-1 ">
            <FollowComponent />
          </div>

          <div className="row m-1 " name ="foo" >
            <ContactsComponent />
          </div>
        </div>
      </div>
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
