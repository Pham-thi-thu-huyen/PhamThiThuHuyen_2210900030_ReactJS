import React from 'react'
import PtthuseState from './component/PtthuseState'
import PtthUseEffect from './component/PtthUseEffect'
import PtthUseContext from './component/PtthUseContext'
import './App.css'
export default function App() {
  return (
    <div className='container border mt-3'>
        <h1 className='text-center'>Phạm Thị Thu Huyền-Hook</h1>
        <hr/>
        <PtthuseState />
        <hr/>
        <PtthUseEffect/> 
        <hr/>
        <PtthUseContext/>
    </div>
  )
}
