// import React, { Component } from 'react';
// import InfiniteCarousel from 'react-leaf-carousel';
// import { PRODUCTS } from '../../shared/products';


// let products = [];
// class ImagesSliderComponent extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             products: PRODUCTS
//         }
//     }

//     componentDidMount() {
//         products = this.state.products.map((product) => {
//             return (

//                 <div>
//                     <img src={product.image} />
//                 </div>
//             );
//         })


//     }
//     render() {


//         return (
//             <div>
//                 <InfiniteCarousel
//                     breakpoints={[
//                         {
//                             breakpoint: 100,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1,
//                             },
//                         },
//                         {
//                             breakpoint: 2000,
//                             settings: {
//                                 slidesToShow: 1,
//                                 slidesToScroll: 1,
//                             },
//                         },
//                     ]}
//                     dots={true}
//                     showSides={true}
//                     sidesOpacity={.5}
//                     sideSize={.001}
//                     slidesToScroll={1}
//                     slidesToShow={1}
//                     scrollOnDevice={true}
//                 >
//                     <div>
//                         <img
                           
//                             src='assets/images/glass2.png'
//                         />
//                     </div>
//                     <div>
//                         <img
//                             alt=''
//                             src='assets/images/glass1.png'
//                         />
//                     </div>
//                     <div>
//                         <img
//                             alt=''
//                             src='assets/images/glass3.png'
//                         />
//                     </div>
//                     <div>
//                         <img
//                             alt=''
//                             src='assets/images/glass2.png'
//                         />
//                     </div>

//                 </InfiniteCarousel>
//             </div>
//         );
//     }
// }

// export default ImagesSliderComponent;




import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
 
export default class ImagesSliderComponent extends React.Component {
    // createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);
 
  componentWillMount() {
    this.setState({
      children: [],
      activeItemIndex: 0,
    });
 
    setTimeout(() => {
      this.setState({
        children: range(20).map(i => <div key={i} style={{ height: 200 }}>{i}</div>)
      })
    }, 100);
  }
 
 
  changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
 
  render() {
    const {
      activeItemIndex,
      children,
    } = this.state;
 
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={<div style={{ height: 200, background: 'black' }}>Placeholder</div>}
 
        // Carousel configurations
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
 
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
 
        chevronWidth={24}
        rightChevron={'>'}
        leftChevron={'<'}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );  
  }
} 