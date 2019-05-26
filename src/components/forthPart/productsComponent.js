import React, { Component } from "react";
import { PRODUCTS, SUNGLASSES, ACCESORIES } from "../../shared/products";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      sunGlasses: SUNGLASSES,
      accessories: ACCESORIES,
      currentOption: PRODUCTS
    };
  }

  render() {
    const glasses = this.state.currentOption.map(product => {
      return (
        <div key={product.id} className="col-12 col-md-4 mt-4">
          <Card body className="text-center border-0">
            <CardImg width="100%" height="200" src={product.image} alt={product.title} />
            <CardBody>
              <CardTitle>{product.title} </CardTitle>
              <CardText className="text-danger">{product.price} </CardText>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div>
          <Navbar color="" light expand="md" className="mt-5">
            <NavbarBrand href="/" className="font-weight-bold">
              HIGH MAINTENANCE MUST-HAVES
            </NavbarBrand>
            <Nav className=" ml-auto" navbar>
              <NavItem>
                <NavLink
                  onClick={() =>
                    this.setState({ currentOption: this.state.products })
                  }
                >
                  Glasses
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() =>
                    this.setState({ currentOption: this.state.sunGlasses })
                  }
                >
                  Sunglasses
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={() =>
                    this.setState({ currentOption: this.state.accessories })
                  }
                >
                  Accessories
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>All</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
        <div className="row">{glasses}</div>
        <div className="showMore">
          <strong className="showMoreText">Show More</strong>
        </div>
      </div>
    );
  }
}

export default Products;
