import React, { Component } from 'react';
import PhoneItem from './phoneItem/phone-item.component';
class PhoneListComponent extends Component {
    // this is data of smart phone,
    // visual machine data
    smartphones = [
        {
            id: 'sp_1',
            name: 'iphoneX',
            // type equals phone to compare with laptop
            type:'phone',
            price: '30.000.000 VNÄ',
            screen: 'screen_1',
            backCamera: 'backCamera_1',
            frontCamera: 'frontCamera_1',
            img: './img/sp_iphoneX.png',
            desc: 'iPhone X features a new all-screen design. Face ID, which makes your face your password'
        },
        {
            id: 'sp_2',
            name: 'Note 7',
            type:'phone',
            price: '20.000.000 VNÄ',
            screen: 'screen_2',
            backCamera: 'backCamera_2',
            frontCamera: 'frontCamera_2',
            img: './img/sp_note7.png',
            desc: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason'
        },
        {
            id: 'sp_3',
            name: 'Vivo',
            type:'phone',
            price: '10.000.000 VNÄ',
            screen: 'screen_3', 
            backCamera: 'backCamera_3',
            frontCamera: 'frontCamera_3',
            img: './img/sp_vivo850.png',
            desc: 'A young global smartphone brand focusing on introducing perfect sound quality'
        },
        {
            id: 'sp_4',
            name: 'Blacberry',
            type:'phone',
            price: '15.000.000 VNÄ',
            screen: 'screen_4',
            backCamera: 'backCamera_4',
            frontCamera: 'frontCamera_4',
            img: './img/sp_blackberry.png',
            desc: 'BlackBerry is a line of smartphones, tablets, and services originally designed'
        }
        
        
    ]
    renderPhoneItem() {
        // depend how many data then created item component
        // call "phone" error function
        //get data in array product
        // index[i]
        return this.smartphones.map((phone,index) => {
            // return component phoneItem
            return <PhoneItem phone = {phone} key={index}  getProductDetail={this.props.getProductDetail} putProductToCart={this.props.putProductToCart}/>
        })
    }
    render() {
        return (
            <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                <div className="row">
                    {/* call this.rederFhoneItem will be call cycle 4 value instead call one by one */}
                   {this.renderPhoneItem()}

                </div>
            </section>

        );
    }
}

export default PhoneListComponent;