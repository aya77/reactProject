import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import { BRANDS } from "../../shared/products";

const items = BRANDS

class OurBrandsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
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
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item, index, elements) =>{
        // do something
        return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
                {
                    console.log(elements[(index+1)%elements.length])

                }
              {elements[(index+0)%elements.length]?<img src={elements[(index+0)%elements.length].src} width= {100} height= {100} className="col-3"/>:""}
              {elements[(index+1)%elements.length]?<img src={elements[(index+1)%elements.length].src} width= {100} height= {100} className="col-3"/>:""}
              {elements[(index+2)%elements.length]?<img src={elements[(index+2)%elements.length].src} width= {100} height= {100} className="col-3"/>:""}
              {elements[(index+3)%elements.length]?<img src={elements[(index+3)%elements.length].src} width= {100} height= {100} className="col-3"/>:""}
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
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
      </div>
    );
  }
}


export default OurBrandsComponent;
