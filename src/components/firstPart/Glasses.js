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
      <div className=" container m-0 p-0">
        <div className="row p-0 m-0 justify-content-center ">
          <div className="col-12  mx-auto">
            <div className="">
              <img
                className="detailedPhoto"
                src={this.state.currentGlass.image}
                alt="logo"
                width="70%"
                height="70%"
              />
            </div>

            <div className="archivo" key={this.state.currentGlass.id}>
              {this.state.currentGlass.description}
              <br />
             <span className="price"> {this.state.currentGlass.price}$</span>
            </div>
          </div>
        </div>

        <div className="row col-12 justify-content-center align-items-center mt-5  p-0 m-0">
          
          {this.state.pageOfItems.map(item => (
            <div key={item.id} className="glassContainer col-6  p-0 m-0">
              {/* <div className="productContainer "> */}
               
              <img
                className="glassImage"
                onClick={() => this.setState({ currentGlass: item })}
                src={item.image}
                alt="logo"
              />
               {/* </div> */}
            </div>
          ))}
          
        </div>
        <div className="col-12 p-0">
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
