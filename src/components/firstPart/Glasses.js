import React, { Component } from "react";
import { GLASSESPRODUCT } from "../../shared/products";
import "../../App.css";
import Pagination from "./Pagination";
import {
  faChevronLeft,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
class Glasses extends Component {
  constructor() {
    super();

    this.state = {
      exampleItems: GLASSESPRODUCT,
      pageOfItems: [],
      currentGlass: GLASSESPRODUCT[0]
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return (
      <div className="">
        <div className="row mx-5 d-flex justify-content-center">
          <div className="col-12">
            <img
              src={this.state.currentGlass.image}
              alt="logo"
              width="200px"
              height="100px"
            />
            <div key={this.state.currentGlass.id}>
              {this.state.currentGlass.description}
              <br />
              {this.state.currentGlass.price}
            </div>
          </div>
        </div>

        <div className="row">
          {this.state.pageOfItems.map(item => (
            <div className="col-4  ml-5 mt-5">
              <img
                className="productImage"
                width={160}
                height={70}
                onClick={() => this.setState({ currentGlass: item })}
                src={item.image}
                alt="logo"
              />
            </div>
          ))}
        </div>
        <div className="row">
          <Pagination
            items={this.state.exampleItems}
            onChangePage={this.onChangePage}
            leftIcon={faChevronLeft}
            centerButton={1}
            rightIcon={faChevronRight}
            itemsPerPage={4}
          />
        </div>
      </div>
    );
  }
}
export default Glasses;
