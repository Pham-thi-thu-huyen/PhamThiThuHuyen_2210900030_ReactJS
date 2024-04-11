import React from 'react'

export default function Ptth_FuncDemo(props) {
  return (
    <div> <hr/> 
    <h2> Function component Demo</h2>
    <h3>Sử dụng thuộc tính từ props</h3>
    <p> userName: {props.userName}</p>
    <p> fullName: {props.fullName}</p>
    <p> age: {props.age}</p>
    </div>
  )
}
