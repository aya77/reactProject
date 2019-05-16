import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Navbar, NavbarBrand, NavItem, NavLink, Nav
} from 'reactstrap';

function ProductsComponent(props) {
    return (
        <div>
        <Navbar color="" light expand="md" className="mt-5"> 
          <NavbarBrand href="/"> High maintenance must-have</NavbarBrand>
            <Nav className=" ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Glasses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Sunglasses</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Accessories</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">All</NavLink>
              </NavItem>
            </Nav>
         
        </Navbar>
      </div>
    );
    }


class Products extends Component {
    constructor(props) {
        super(props);

    }

   


    render() {

    

        const glasses = this.props.products.map((product) => {
            return (
                <div key={product.id} className="col-12 col-md-4 mt-4">
                    <Card body className="text-center border-0">
                        <CardImg width="100%" src={product.image} alt={product.title}/>
                        <CardBody>
                            <CardTitle>{product.title} </CardTitle>
                            <CardText className="text-danger">{product.price} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );

        })
        return (
            <div className="container">
                 <ProductsComponent/>
                <div className="row">
                   
                    {glasses}
                </div>

            </div>
        );
    }
}

export default Products;