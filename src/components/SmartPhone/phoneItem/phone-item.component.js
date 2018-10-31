import React, { Component } from 'react';

class PhoneItemComponent extends Component {
    constructor(props){
        super(props);
        this.state= {
            status: true
        }
    }
    toggleDesc = () => {
        this.setState({
            status: !this.state.status
        })
    }
    getDetail = () => {
        this.props.getProductDetail(this.props.phone);
    }
    putProductToCart = () => {
        this.props.putProductToCart();
    }
    render() {
        // key is value props
        // var phone = this.props.phone;
        var {phone} = this.props;
        return (
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                <div className="container">
                    <div className="card bg-light" style={{ width: 300 }}>
                        <img className="card-img-top" src={phone.img} alt="Card " style={{ maxWidth: '100%', height: 250 }} />
                        <div className="card-body text-center">
                            <h4 ref="phoneName" className="card-title text-center">{phone.name}</h4>
                            <p className="card-text">{this.state.status ? phone.desc : ''}</p>
                            <button href="/" className="btn btn-primary" onClick={this.toggleDesc}>Detail</button>
                            <button href="/" onClick={this.getDetail} className="btn btn-danger" data-toggle="modal" data-target="#myModal">Show Modal</button>
                            <button href="/" className="btn btn-info" onClick={this.putProductToCart}>Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhoneItemComponent;