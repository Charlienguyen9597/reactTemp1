import React, { Component } from 'react';
import './App.css'
// must to import component
import Header from './components/Header/header.component';
import Carousel from './components/Carousel/carousel.component';
import SmartPhoneList from './components/SmartPhone/phonelist.component';
import LaptopList from './components/Laptop/laptop.component';
import Promotions from './components/promotions/promotions.component';
import Modal from './components/modal/modal.component';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            productDetail : {},
            quantity:0
        }
    }
    getProductDetail = (product) =>{
        this.setState({
            productDetail: product
        })
    }
    putProductToCart = () => {
        this.setState({
            quantity: this.state.quantity +1
        })
    }
    render() {
        return (
            <div>
                {/*BEGIN NAVBAR*/}
                {/* two type of call a component 
                one is only call <header/> or <header></<header>*/}
                {/* FIRST WORD MUST BE UPPERCASE */}
                <Header quantity={this.state.quantity}/>
                {/* END NAVBAR */}

                {/* BEGIN CAROUSEL */}
                <Carousel/>
                {/* END CAROUSEL */}

                {/* BEGIN SMARTPHONE */}
                {/* <SmartPhoneList getProductDetail= {this.getProductDetail} putProductToCart={this.putProductToCart}/> */}
                <SmartPhoneList/>
                {/* END SMARTPHONE */}

                {/* BEGIN LAPTOP */}
                <LaptopList/>
                {/* END LAPTOP */}

                {/* BEGIN PROMOTOPN */}
                <Promotions/>
                {/* END PROMOTION */}
                
                <Modal productDetail={this.state.productDetail} />
            </div>

        );
    }
}

export default App;