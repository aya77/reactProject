import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
  CardTitle,
  CardGroup
} from "reactstrap";

class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      items: this.props.items,
      width: this.props.width,
      height: this.props.height


    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = this.state.items.map((item, index, elements) => {
      // do something
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="slider"
        >
          {
            console.log(elements[(index + 1) % elements.length])

          }

<CardGroup>
          
              {elements[(index + 0) % elements.length] ?

                <Card body className="text-center border-0  embed-responsive embed-responsive-16by9"  width={this.state.width} height={this.state.height}>
                  <CardImg src={elements[(index + 0) % elements.length].src} className=" embed-responsive-item"
                    
                  />
                  <CardBody>
                    <CardImgOverlay className=" justify-content-end">
                      <CardTitle className="cardTitle">{elements[(index + 0) % elements.length].title}</CardTitle>
                    </CardImgOverlay>
                  </CardBody>
                </Card>
                : ""}
        
              {elements[(index + 1) % elements.length] ?
                <Card body className="text-center border-0  embed-responsive embed-responsive-16by9">
                  <CardImg src={elements[(index + 1) % elements.length].src} className=" embed-responsive-item"
                  
                  />
                  <CardBody>
                    <CardImgOverlay className=" justify-content-end">
                      <CardTitle className="cardTitle">{elements[(index + 1) % elements.length].title}</CardTitle>
                    </CardImgOverlay>
                  </CardBody>
                </Card>
                : ""}
           
          
              {elements[(index + 2) % elements.length] ?
                <Card body className="text-center border-0  embed-responsive embed-responsive-16by9"  width={this.state.width} height={this.state.height}>
                  <CardImg src={elements[(index + 2) % elements.length].src} className=" embed-responsive-item"
                    width={this.state.width} height={this.state.height}
                  />
                  <CardBody>
                    <CardImgOverlay className=" justify-content-end">
                      <CardTitle className="cardTitle">{elements[(index + 2) % elements.length].title}</CardTitle>
                    </CardImgOverlay>
                  </CardBody>
                </Card>
                : ""}
    
              {elements[(index + 3) % elements.length] ?
                <Card body className="text-center border-0  embed-responsive embed-responsive-16by9"  width={this.state.width} height={this.state.height} >
                  <CardImg src={elements[(index + 3) % elements.length].src} className=" embed-responsive-item"
                   
                  />
                  <CardBody>
                    <CardImgOverlay className=" justify-content-end">
                      <CardTitle className="cardTitle">{elements[(index + 3) % elements.length].title}</CardTitle>
                    </CardImgOverlay>
                  </CardBody>
                </Card>
                : ""}
       </CardGroup>
        
        </CarouselItem>
      );
    });

    // const slides = items.map((item , index, elements) => {
    // console.log(elements[elements.size%index])
    //   return (
    //     <CarouselItem
    //       onExiting={this.onExiting}
    //       onExited={this.onExited}
    //       key={item.src}
    //     >

    //       <img src={item.src} alt={item.altText} className="col-3"/>
    //       <img src={elements[index-1].src} alt={item.altText} className="col-3"/>
    //       <img src={item.src} alt={item.altText} className="col-3"/>
    //       <img src={item.src} alt={item.altText} className="col-3"/>
    //     </CarouselItem>
    //   );
    // });

    return (
      <div className="row">
        <div className="col-12">
          <Carousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
          </Carousel>
        </div>
      </div>
    );
  }
}


export default SliderComponent;
