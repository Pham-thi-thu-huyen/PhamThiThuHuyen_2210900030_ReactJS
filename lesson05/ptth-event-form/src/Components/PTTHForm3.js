import React, { Component } from 'react'

export default class PTTHForm3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            studentName: "Phạm Thị Thu Huyền",
            age:"20",
            course:"PTTH-HTML5",
            gender:true
        }
    }
    ptthHandleChange = (event)=>{
        let name=evnet.target.name;
        let value=event.target.value;
        this.setState({
            [name]:value
        })
    }
    ptthHandleSubmit =(event)=>{
        event.preventDefault();
        console.log(this.state);
        //Chuyển dữ liệu lên App
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div>
        <form>
            <div>
            <label> Student Name: </label>
            <input name='studentName'
            value={ this.state.studentName}
            onChange={''}/>
            </div>
            <div>
            <label> Age: </label>
            <input name='age'
            value={ this.state.age}
            onChange={''}/>
            </div>
            <div>
            <label> Gender: </label>
            <input type='radio' name='gender'
            value={true} checked={(this.state.gender==true)?'checked':''}/> Nữ
            <input type='radio' name='gemder'
            value={false} checked={(this.state.gender==false)?'checked':''}/> Nam

            </div>
            <div>
            <label> Course </label>
            <select name='course'
            value={this.state.course}
            onChange={this.ptthHandleChange}>
                <option value={"ptth-HTML5"}>ptth-HTML5</option>
                <option value={"ptth-CSS"}>ptth-CSS</option>
                <option value={"ptth-JS"}>ptth-JS</option>
                <option value={"ptth-RJ"}>ptth-ReactJs</option>
            </select>
            </div>
            <button onClick={this.ptthHandleSubmit}>Submit </button>
        </form>
      </div>
    )
  }
}
