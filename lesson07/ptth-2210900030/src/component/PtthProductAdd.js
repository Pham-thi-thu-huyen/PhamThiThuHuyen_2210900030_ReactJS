import React, { Component } from 'react'

export default class PtthProductAdd extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            ptth_productId: 0, 
            ptth_productName: '',
            ptth_quantity: 0, 
            ptth_price: 0
        }
    }
    ptthHandleChange = (event)=>{
        let name = event.target.name; 
        let value = event.target.value; 
        this.setState({
            [name]:value
        })
    }
    // submit form
    ptthHandleSubmit = (ev)=>{
        ev.preventDefault();

        this.props.onSubmit(this.state);
    }
  render() {
    return (
        <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                ID
            </span>
            <input
                type="text"
                className="form-control"
                name='ptth_productId'
                value={this.state.ptth_productId}
                onChange={this.ptthHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
               Name
            </span>
            <input
                type="text"
                className="form-control"
                name='ptth_productName'
                value={this.state.ptth_productName}
                onChange={this.ptthHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                Quantity
            </span>
            <input
                type="text"
                className="form-control"
                name='ptth_quantity'
                value={this.state.ptth_quantity}
                onChange={this.ptthHandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                Price
            </span>
            <input
                type="text"
                className="form-control"
                name='ptth_price'
                value={this.state.ptth_price}
                onChange={this.ptthHandleChange}
            />
        </div>
        <button className='btn btn-success' onClick={this.ptthHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    )
  }
}
