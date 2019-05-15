import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class Products extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        const glasses = this.props.products.map((product) => {
            return (
                <div key={product.id} className="col-12 col-md-4 mt-4">
                    <Card body className="text-center border-0">
                        <CardImg width="100%" src={product.image} alt={product.title}/>
                        <CardBody>
                            <CardTitle>{product.title} </CardTitle>
                            <CardText>{product.price} </CardText>
                        </CardBody>
                    </Card>
                </div>
            );

        })
        return (
            <div className="container">
                <div className="row mt-5">
                    {glasses}
                </div>

            </div>
        );
    }
}

export default Products;