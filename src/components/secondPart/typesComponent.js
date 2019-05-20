import React, { Component } from "react";
import { TYPES } from "../../shared/products";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import {
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Pagination from "../Pagination";
export default class TypesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TYPES: TYPES,
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    const types = this.state.pageOfItems.map(item => (
      <div key={item.id} className="col-12 col-md-4 mt-4 px-5">
        <Card body className="text-left border-0  embed-responsive embed-responsive-16by9">
          <CardImg src={item.image}  className=" embed-responsive-item"  alt={item.type} />
          <CardBody>
          <CardImgOverlay className="d-flex flex-column justify-content-end">
          <CardTitle>{item.type}</CardTitle>
          </CardImgOverlay>
           
          </CardBody>
        </Card>
      </div>
    ));

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-9 d-flex justify-content-left font-weight-bold">
            WHAT ARE YOU LOOKING FOR?
          </div>
          <div className="col-3 mt-auto">
            <Pagination
              items={this.state.TYPES}
              onChangePage={this.onChangePage}
              leftIcon={faArrowLeft}
              centerButton={0}
              rightIcon={faArrowRight}
              itemsPerPage={3}
            />
          </div>
        </div>
        <div className="row">{types}</div>
      </div>
    );
  }
}
