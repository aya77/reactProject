import React, { Component } from 'react';
import { Input, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';
import '../../App.css';


class FollowComponent extends Component {
    render() {
        const input = (
            <div className="col-12 col-md-9 mt-5">
                <div className="row text-uppercase">
                    <strong> recieve our newsletter</strong>
                </div>
                <div className="row mt-4">
                    <InputGroup >
                        <Input />
                        <InputGroupAddon addonType="append">
                            <InputGroupText style={{backgroundColor: 'red', color:'white'}} className="bg-red">submit</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>


            </div >

        )

        const follow = (
            <div className="col-12 col-md-3 ml-auto  mt-5">

                <div className="row">
                    <div className="col-12">
                        <strong> FOLLOW US </strong>
                    </div>

                </div>

                <div className="row justify-contnet-center mt-4">
                    <div className="col-12">


                        <SocialIcon url="http://facebook.com/sara.abdoj" className="ml-2" />
                        <SocialIcon url="http://instagram.com" className="ml-2" />
                        <SocialIcon url="http://youtube.com" className="ml-2" />
                    </div>

                </div>

            </div>
        )

        return (
            <div className="container">
                <div className="row">
                    {input}
                    {follow}
                </div>
            </div>

        );
    }
}

export default FollowComponent;