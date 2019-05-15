import React,{Component} from 'react';

import Symbole from './components/symbolsComponent'
import Glasses from './components/Glasses'

class App extends Component{
  render(){
    return (
      <div className="App">
        
      
          <Symbole/>
          <Glasses />
      
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