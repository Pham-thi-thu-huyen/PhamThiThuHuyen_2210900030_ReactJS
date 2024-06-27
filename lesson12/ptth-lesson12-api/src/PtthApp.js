import './App.css';
import PtthListUsers from './components/PtthListUsers';
import axios from './api/ptthApi'
import { useEffect, useState } from 'react';

function PtthApp () {

  const[ptthListUsers,setPtthListUsers]= useState([])

  //đọc dữ liệu từ api 
  const ptthGetAllUsers = async ()=>{
    const ptthResponse = await axios.get("ptthUsers");
    console.log("Api Data",ptthResponse.data);
    setPtthListUsers(ptthResponse.data)
  }

  useEffect(() =>{
    ptthGetAllUsers();
    console.log("State Data:",ptthListUsers);
    
  },[])
  return (
    <div className="container border my-3">
      <h1>Làm việc với MocApi</h1>
      <hr/>
      <PtthListUsers renderPtthListUsers ={ptthListUsers}/>
      
    </div>
  );
}

export default PtthApp;
