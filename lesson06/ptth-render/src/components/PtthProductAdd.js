import React, { Component } from 'react'

export default class PtthProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            tilte:'',
            status:0
        }
    }
    ptthhandleChange = (event)=>{
        let name = event.target.name ;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //submit form 
    ptthhandleSubmit = (ev)=>{
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
                name='id'
                value={this.state.id}
                onChange={this.ptthhandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
                tilte
            </span>
            <input
                type="text"
                className="form-control"
                name='title'
                value={this.state.title}
                onChange={this.ptthhandleChange}
            />
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
                status
            </span>
            <input
                type="text"
                className="form-control"
                name='status'
                value={this.state.status}
                onChange={this.ptthhandleChange}
            />
        </div>
        <button className='btn btn-success' onClick={this.ptthhandleSubmit}> Ghi lại</button>

        </form>
      </div>
    )
  }
}
