import React, { Component } from "react";
import { TYPES } from "../../shared/products";
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from "reactstrap";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../firstPart/Pagination";
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
      <div key={item.id} className="col-12 col-md-4 px-5 typeDiv">
        <CardBody top className="accessories">
          <CardImg
            top
            src={item.image2}
            className=" imageOver"
            alt={item.type}
          />
        </CardBody>
        <Card top className=" text-left border-0">
          <CardBody className=" productCard">
            <CardImg
              top
              src={item.image1}
              className="typeImage img-fluid"
              alt={item.type}
            />
         
          </CardBody>
          <CardBody>
            <CardImgOverlay className="d-flex flex-column justify-content-end">
              <CardTitle className="imageTitle proximanova">
                {item.type}
              </CardTitle>
            </CardImgOverlay>
          </CardBody>
        </Card>
      </div>
    ));

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-9 d-flex justify-content-left types">
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
