import React, { Component } from "react";
import { TRENDS } from "../../shared/products";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../firstPart/Pagination";
export default class TrendsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: TRENDS,
      pageOfItems: []
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    const products = this.state.pageOfItems.map(item => (
      <div key={item.id} className="col-12 col-md-4 px-5">
      
          <Card className="text-center border-0">
            <CardBody className=" productCard">
              <CardImg top className='productCardImage img-fluid' src={item.image} alt={item.title} />
            </CardBody>
            <CardBody className="trendTitle proximanova">
              <CardTitle>{item.title}<br /><span className="cardText">{item.price}</span> </CardTitle>
            </CardBody>
          </Card>
      </div>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col-9 d-flex justify-content-left font-weight-bold trends">
            CURRENTLY TRENDS
          </div>
          <div className="col-3 mt-auto">
            <Pagination
              items={this.state.products}
              onChangePage={this.onChangePage}
              leftIcon={faArrowLeft}
              centerButton={0}
              rightIcon={faArrowRight}
              itemsPerPage={3}
            />
          </div>
        </div>
        <div className="row">{products}</div>
      </div>
    );
  }
}
