import React, { Component } from 'react'

export default class PTTHForm2 extends Component {
    // Khởi tạo 
    constructor(props){
        super(props);
        this.state = {
            course: "ptth-HTML5"
        }
    }
    //3 Hàm xử lí sự kiện
    ptthHandleChange = (event)=>{
        // cập nhật state
        this.setState({ 
            course:event.target.value
        })
    }
    //4. 
    ptthHandleSubmit = (event)=>{
        event.preventDefault();
        alert(this.state.course)
    }
  render() {
    //2.
    return (
      <div>
        <form onSubmit={this.ptthHandleSubmit}/>
        <form>
            <label> Course </label>
            <select value={this.state.course}
            onChange={this.ptthHandleChange}>
                <option value={"ptth-HTML5"}>ptth-HTML5</option>
                <option value={"ptth-CSS"}>ptth-CSS</option>
                <option value={"ptth-JS"}>ptth-JS</option>
                <option value={"ptth-RJ"}>ptth-ReactJs</option>
            </select>
            <input type='submit' value={"Submit"}/>
        </form>
      </div>
    )
  }
}
