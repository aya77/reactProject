import React, { Component } from "react";
import {GLASSESPRODUCT} from '../../shared/products'
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
      <div className="container mt-5 mb-0">
        <div className="row justify-content-center">
          <div className="col-6 mb-5">
            <img
              src={this.state.currentGlass.image}
              alt="logo"
              width="200px"
              height="100px"
            />
            <div key={this.state.currentGlass.id}>
              {this.state.currentGlass.description}
            </div>
            <div>{this.state.currentGlass.price}</div>
          </div>
        </div>
        <div className="row mx-2">
          {this.state.pageOfItems.map(item => (
            <div className="col-5 mx-3 px-5 py-4">
              <img
              className="productImage"
                width={170}
                height={80}
                onClick={() => this.setState({ currentGlass: item })}
                src={item.image}
                alt="logo"
              />
            </div>
          ))}
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
