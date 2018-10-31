import React, { Component } from 'react';

class ModalComponent extends Component {
    a = 'red';
    render() {
        var {productDetail} = this.props;
        return (
            <div className="modal fade" id="myModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{backgroundColor:this.a}}>modal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                          <h1>{productDetail.name}</h1>
                          <p>{productDetail.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalComponent;