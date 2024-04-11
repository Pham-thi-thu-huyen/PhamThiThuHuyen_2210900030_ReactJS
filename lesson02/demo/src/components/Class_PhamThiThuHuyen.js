import React, { Component } from 'react'

export default class Class_PhamThiThuHuyen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "Pham Thi Thu Huyen",
            class: "K22CNT4"
        }
    }
    users ={
        name:"Pham Thi Thu Huyen",
        age:"20"
      }
      // Xu ly sk 
    handleChange = (event)=> {
        this.setState({
            fullName: "Thu Huyen",
        })
    }

  render() {
    return (
      <div>
        <h2> Class component demo</h2>
        {this. users.name} - {this.users.age}
        <hr/>
        <h3> info:{this.props.info}</h3>
        <h3> time:{this.props.time}</h3>
        <hr/> 
        <h3>State: 
                Fullname: {this.state.fullName} - 
                Class: {this.state.class}
            </h3>
            <button onClick={this.handleChange}>Change Name</button>
      </div>
    )
  }
}
