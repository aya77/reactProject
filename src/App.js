import React,{Component} from 'react';

import Symbole from './components/navBarComponent'
import Glasses from './components/Glasses'
import Products from './components/forthPart/productsComponent'
import {PRODUCTS} from './shared/products'
import BrandsComponent from './components/fifthPart/brandsComponent'
import FollowComponent from './components/sixthPart/followComponent'
import ContactsComponent from './components/seventhPart/contactsComponent'
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      products: PRODUCTS,
    }
  }
  render(){
    return (
      <div className="App">
         <div className="row m-1">
         
          <Symbole/>
          <Glasses />
              
         
         
             <Products products= {this.state.products}/>
             {/* <BrandsComponent/> */}
          </div>

          <div className="footer bg-light">
          <div className="row m-1 ">
            <FollowComponent/>

          </div>

          <div className="row m-1 ">
            <ContactsComponent/>
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