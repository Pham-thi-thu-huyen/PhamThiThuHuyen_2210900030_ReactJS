
import React, { Component } from 'react'
import PTTHForm1 from './Components/PTTHForm1'
import PTTHForm2 from './Components/PTTHForm2'
import PTTHForm3 from './Components/PTTHForm3'

export default class App extends Component {
  ptthSubmit =(param)=>
  console.log("App:",param);
  render() {
    return (
      <div>
        <h1> Controlled Component ReactJs Form</h1>
        <PTTHForm1/>
        <PTTHForm2/>
        <hr/>
        <PTTHForm3 onSubmit={this.ptthSubmit}/>
      </div>
    )
  }
}
