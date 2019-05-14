import React from 'react';
import LeftSide from './componants/leftSide' ;
import { Container, Row, div } from 'reactstrap';

function App() {
  return (

  <Container>
    <div>
      <div  className="div-4"> <LeftSide/></div>
      <div  className="div-4">Sara</div>
      <div  className="div">Aya</div>
   </div>
   </Container> 
  );
}

export default App;
