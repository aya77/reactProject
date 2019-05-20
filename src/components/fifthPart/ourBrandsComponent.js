import React , {Component} from 'react'

import { BRANDS } from "../../shared/products";
class OurBrandsComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
    brands: BRANDS,
          
        };

    }
    render(){
        const brands= this.state.brands.map(brand=>
            <img src={brand.image} />

       )
        return(
            <div className="row swipe">
            {brands}
            
            </div>
        )
    }


}


export default OurBrandsComponent;



