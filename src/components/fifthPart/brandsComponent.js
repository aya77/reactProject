import React, { Component } from "react";
import "../../App.css";
import $ from "jquery";
import { carousel } from "reactstrap";

class BrandsComponent extends Component {
  componentDidMount() {}

  render() {
    const imgStyle = {
      maxWidth: "100%"
    };

    return (
      <div class="container">
        <div class="row blog">
          <div class="col-md-12">
            <div id="blogCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#blogCarousel"
                  data-slide-to="0"
                  class="active"
                />
                <li data-target="#blogCarousel" data-slide-to="1" />
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row">
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                    <div class="col-md-3">
                      <a href="#">
                        <img
                          src="http://placehold.it/300/f44336/000000"
                          alt="Image"
                          style={imgStyle}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrandsComponent;
