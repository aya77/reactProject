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
    const types = this.state.pageOfItems.map((item, index) => (
      <div key={item.id} className="col-12 col-md-4 pl-2 ml-1 ml-lg-0">
        <Card className="text-center border-0">
          <CardBody className=" mb-3 typeCard">
            <CardImg
              top
              className={
                index % 2 === 0
                  ? "opacity typeImage img-fluid"
                  : "typeImage img-fluid"
              }
              src={item.image1}
              alt={item.title}
            />
          </CardBody>
          <CardBody>
            <CardImg
              top
              src={item.image2}
              className="imageOver"
              alt={item.type}
            />
          </CardBody>
          <CardBody className="imageTitle proximanova">
            <CardTitle>{item.type}</CardTitle>
          </CardBody>
        </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row  ">
          <div className="col-9 d-flex justify-content-left types ">
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
        <div className="row ml-5 mt-4 mb-5">{types}</div>
      </div>
    );
  }
}
