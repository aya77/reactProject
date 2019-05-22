import React, { Component } from 'react';
import { Input, InputGroupAddon, InputGroup, InputGroupText } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';



class FollowComponent extends Component {
    render() {
        const input = (
            <div className="col-8 mt-1">
                <div className="row">
                    recieve our newsletter
                </div>
                <div className="row mt-2">
                    <InputGroup size='lg'>
                        <Input />
                        <InputGroupAddon addonType="append">
                            <InputGroupText className="bg-danger">submit</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </div>


            </div >

        )

        const follow = (
            <div className="col-3 mt-1 ml-auto">

                <div className="row">
                    Follow Us           
                </div>

                <div className="row mt-2">
                    <SocialIcon url="http://facebook.com/sara.abdoj" className="ml-2" />
                    <SocialIcon url="http://instagram.com" className="ml-2" />
                    <SocialIcon url="http://youtube.com" className="ml-2" />

                </div>

            </div>
        )

        return (
            <div className=" mt-1">
                <div className="row">
                    {input}
                    {follow}
                </div>
            </div>

        );
    }
}

export default FollowComponent;