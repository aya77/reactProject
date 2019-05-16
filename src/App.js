import React,{Component} from 'react';

import Symbole from './components/navBarComponent'
import Glasses from './components/Glasses'
import Products from './components/forthPart/productsComponent'
import {PRODUCTS} from './shared/products'
import Intro from './components/Intro'
import sunG from "./images/sunG.jpeg";
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
         <div className="row m-1 ">
         
          <Symbole/>
        
          </div>

          <div className="row m-1 ">
          <div className="col-4 ">
               <Intro /> 
          </div>   
          <div className="col-4">  
          <img src={sunG}  width="400px" height="450px" />
          </div>   
          <div className="col-4">  
               <Glasses />
          </div>     
               
          </div>

           <div className="row m-1 ">    
                  <Products products= {this.state.products}/>
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