import React, { Component } from "react";
import logo from "../images/sunglasses_PNG150.png";
import "../App.css";
import Pagination from "./Pagination";
class Glasses extends Component {
  constructor() {
    super();

   var exampleItems = [
      { id: 1, image: logo, description: "Round Folding", price: 99.99 },
      { id: 2, image: logo, description: "Round Folding", price: 99.99 },
      {
        id: 3,
        image: logo,
        description: "Round Folding",
        price: 80.5
      },
      {
        id: 4,
        image: logo,
        description: "Round Folding",
        price: 40.2
      },
      {
        id: 5,
        image: logo,
        description: "Round Folding",
        price: 80.5
      },
      {
        id: 6,
        image: logo,
        description: "Round Folding",
        price: 40.2
      },
      { id: 7, image: logo, description: "Round Folding", price: 99.99 },
      {
        id: 8,
        image: logo,
        description: "Round Folding",
        price: 80.5
      },
      {
        id: 9,
        image: logo,
        description: "Round Folding",
        price: 40.2
      },
      {
        id: 10,
        image: logo,
        description: "Round Folding",
        price: 40.2
      },
      {
        id: 11,
        image: logo,
        description: "Round Folding",
        price: 40.2
      }
    ];

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  render() {
    return (
      <div className="container">
        <div className="text-center">
          {this.state.pageOfItems.map(item => (
            <div className="product">
              <img src={item.image} alt="logo" width="200px" height="100px" />
              <div key={item.id}>{item.description}</div>
              <div>{item.price}</div>
            </div>
          ))}
          <Pagination
            items={this.state.exampleItems}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}
export default Glasses;
