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
      <div className=" ">
        <div className="row d-flex p-0 m-0 justify-content-center">
          <div className="col-12 ">
            <img
              src={this.state.currentGlass.image}
              alt="logo"
              width="70%"
              height="70%"
            />
            <div key={this.state.currentGlass.id}>
              {this.state.currentGlass.description}
              <br />
              {this.state.currentGlass.price}
            </div>
          </div>
        </div>

        <div className="row justify-content-center p-0 m-0">
          {this.state.pageOfItems.map(item => (
            <div className=" col-4  ml-3 mt-5">
              <img
                className="productImage"
                width='100%'
                height='100%'
                onClick={() => this.setState({ currentGlass: item })}
                src={item.image}
                alt="logo"
              />
            </div>
          ))}
        </div>
        <div>
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
