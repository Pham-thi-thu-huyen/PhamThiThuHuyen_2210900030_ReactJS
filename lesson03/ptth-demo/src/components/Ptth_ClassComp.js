import React, { Component } from 'react'

export default class Ptth_ClassComp extends Component {
    constructor(props){
        super(props)
        //tạo đối tượng dữ liệu
        this.state={
            fistName: "Phạm",
            lastName: "Huyền",
            usersName:"K22cnt4",
        }
    }
    // arrow function 
    Member = (props)=>{
        return (
            <div className='alert alert-success'>
                <h3>Xin chào: {props.fullName} - Bạn đã {props.age} tuổi. </h3>
            </div>
        );
    }

    ListMember = ()=>{
        return (
            <>
                <this.Member fullName = "Nguyễn Văn A" age="20"/>
                <this.Member fullName = "Nguyễn Văn B" age="22"/>
                <this.Member fullName = "Nguyễn Văn C" age="21"/>
                <this.Member fullName = "Nguyễn Văn D" age="23"/>
            </>
        );
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2> Class Component Demo</h2>
        <hr/> 
        <h3> Dữ liệu trong state</h3>
        <h3> Xin Chào, {this.state.fistName} {this.lastName} </h3>
        <hr/>
        <h3> Dữ liệu props</h3>
        <p>Company: {this.props.company} </p>
                <p>Course: {this.props.course} </p>
                <hr/>
                <this.Member fullName="Phạm Thị Thu Huyền" age="20"/>
               <hr/>
                <this.ListMember/>

      </div>
    )
  }
}
