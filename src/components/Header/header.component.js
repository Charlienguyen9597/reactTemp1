import React, { Component } from 'react';
import './header.component.css';
class HeaderComponent extends Component {
    render() {
        var {quantity} = this.props;
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">CyberSoft</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#myMenu">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="myMenu">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a href="/" className="nav-link">
                                    <i className="fa fa-shopping-cart mr-2"></i>
                                    <i className="badge badge-light">{quantity}</i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">News</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a href="/" className="nav-link" data-toggle="dropdown">Products</a>
                                <div className="dropdown-menu">
                                    <a href="/" className="dropdown-item">Smarphone</a>
                                    <a href="/" className="dropdown-item">Laptop</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Forum</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;