import React, { Component } from 'react'
import PTTH_EventForm1 from './components/PTTH_EventForm1'
import PTTH_EventForm2 from './components/PTTH_EventForm2'
import PTTH_EventForm3 from './components/PTTH_EventForm3'
import PTTH_EventForm4 from './components/PTTH_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1> Event Form Demo</h1>
        <PTTH_EventForm1/>
        <PTTH_EventForm2/>
        <PTTH_EventForm3/>
        <PTTH_EventForm4 name="Phạm Thị Thu Huyền"/>

      </div>
    )
  }
}
