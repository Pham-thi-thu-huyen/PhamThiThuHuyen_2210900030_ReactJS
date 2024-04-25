import React, { Component } from 'react'
// Xử lí sự kiện với props, state

export default class PTTH_EventForm3 extends Component {
    constructor(props){
        super(props);
        // Tạo đối tượng dữ liệu thông qua state 
        this.state = {
            name :"Phạm Thị Thu Huyền",
            job: "Dev soft"
        }
    }
    // hàm xử lí sự kiện 
    handleChangeName = ()=>{
        this.setState({
            name:"K22CNT4-ReactJs"
        })
    }
    handleChangeJob = ()=>{
        this.setState({
            job:"Công nghệ phầm mềm",
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2> Thay đổi dữ liệu trong state </h2>
        <p> Dữ liệu:{this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi name </button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
