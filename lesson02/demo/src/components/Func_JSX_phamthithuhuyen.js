import React from 'react'

export default function Func_JSX_phamthithuhuyen(props) {
  const users ={
    name:"Pham Thi Thu Huyen",
    age:"20"
  }
  return (
    <div>
        <h2> Function Component demo</h2>
        <h3> 
          Welcome to ,{users.name} - {users.age}
        </h3>
        <hr/>
        <h3>props:
          <br/> Fullname:{props.fullname}
          <br/> Age : {props.age}

        </h3>
    </div>
  )
}
