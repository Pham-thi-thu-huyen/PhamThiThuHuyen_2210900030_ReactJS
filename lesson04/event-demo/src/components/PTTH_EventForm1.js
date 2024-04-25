import React, { Component } from 'react'

export default class PTTH_EventForm1 extends Component {


// Hàm xử lí sự kiện
evenHandleClick1 = ()=>{
    alert("event handle 1");
}
eventHandleClick2(){
    alert("Event Click 2")
}
  render() {
    return (
      <div className='alert alert-danger'>
        <h2> Event handle</h2>
        {/* gọi hàm xử lí sự kiện khi render */}
        <button onClick={this.evenHandleClick1()}> Click 1</button>
        {/* gọi hàm xử lí khi click */}
        <button onClick={this.eventHandleClick2}> Click 2</button>

      </div>
    )
  }
}
