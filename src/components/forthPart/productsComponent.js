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
import '../../App.css'
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: PRODUCTS,
      sunGlasses: SUNGLASSES,
      accessories: ACCESORIES,
      currentOption: PRODUCTS,
      activeNav: "products"
    };
  }

  render() {
    const glasses = this.state.currentOption.map(product => {
      return (
        <div key={product.id} className="col-12 col-lg-4 mt-4 text-center">
          <Card className="text-center border-0">
            <CardBody className=" productCard">
              <CardImg top className='productCardImage img-fluid' src={product.image} alt={product.title} />
            </CardBody>
            <CardBody className=" productTitle">
              <CardTitle className="proximanova ">{product.title}<br /><span className="cardText">{product.price}</span>  </CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });
    return (
      <div className="container mb-5">
        <div>
          <Navbar color="" light expand="md" className="mt-5">
            <NavbarBrand href="/" className="font-weight-bold achivo">
              HIGH MAINTENANCE MUST-HAVES
            </NavbarBrand>
            <Nav className=" ml-auto" navbar>
              <NavItem>
                <NavLink
                  className={
                    this.state.activeNav === "products" ? "navStyle" : ""
                  }
                  onClick={() =>
                    this.setState({
                      currentOption: this.state.products,
                      activeNav: "products"
                    })
                  }
                >
                  Glasses
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    this.state.activeNav === "sunGlasses" ? "navStyle" : ""
                  }
                  onClick={() =>
                    this.setState({
                      currentOption: this.state.sunGlasses,
                      activeNav: "sunGlasses"
                    })
                  }
                >
                  Sunglasses
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={
                    this.state.activeNav === "accessories" ? "navStyle" : ""
                  }
                  onClick={() =>
                    this.setState({
                      currentOption: this.state.accessories,
                      activeNav: "accessories"
                    })
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
