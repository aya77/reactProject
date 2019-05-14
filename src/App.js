import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// fontAwsome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
library.add(faStroopwafel)
// end of font awsome

function App() {
  return (
    <div className="App">
      <div className="raw">
      <div className="col-4">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        </div>
      </div>
    </div>
  );
}

export default App;
