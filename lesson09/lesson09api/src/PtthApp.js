import './App.css';
import {React, useEffect, useState} from 'react'
import axios from "axios";
import PtthStudentList from './components/PtthStudentList';

function PtthApp() {
  //Sử dụng useState của hook
  const [ptthStudentList, setPtthStudentList]=useState([]);
  // get data from api
  const ptthGetStudent = async () => {
    try{
      const respone = await axios.get("https://666a98427013419182cff5c5.mockapi.io/api/ptthv1/ptthStudent");
      setPtthStudentList(respone.data);

    } catch (error){
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() =>{
    ptthGetStudent();
  },[]
);
  return (
    <div className="container border mt-5 p-3">
      <h1 className ="text-center my-3">Xử lí chức năng CRUD - Hook -API</h1>
      <hr/>
      <PtthStudentList renderPtthStudentList = {ptthStudentList} />
    </div>
  );
}

export default PtthApp;
