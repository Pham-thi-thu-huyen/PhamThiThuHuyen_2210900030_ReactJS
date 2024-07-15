import React, { useEffect, useState } from 'react'
import PtthListTableName from './ptth_components/PtthListTableName'
import axios from './ptth_apis/ptth-2210900030'
import PtthFormTableName from './ptth_components/PtthFormTableName'

export default function PtthApp() {
  // Đọc dữ liệu từ api
  const[ptthListTableName, setPtthListTableName] = useState([])
  const ptthGetTableName = async ()=>{
    let ptthResp = await axios.get("ptthTableName");
    console.log("App list:",ptthResp.data);
    setPtthListTableName(ptthResp.data)
  }
  useEffect(()=>{
    ptthGetTableName();
  },[])

  //Hàm xóa
  const ptthHandleDelete= async(ptthId)=>{
   let ptthRes = await axios.delete("ptthTableName/"+ptthId);
   ptthGetTableName();
  }

  const ptthObjTableName = {
    
      "ptthTbName": "Phạm Thị Thu Huyền",
      "ptthTbEmail": "huyenphamthithu1202@gmail.com",
      "ptthTbPhone": "0343649641",
      "ptthTbStatus": true,
      "ptthId": "2210900030"
  };
  const[ptthTableName,setPtthTableName]= useState();


  return (
    <div className='container borded my-3'>
      <h1>Bài đánh giá hết học phần-Phạm Thị Thu Huyền:2210900030</h1>
      <hr/>
      <PtthListTableName renderPtthListTableName= {ptthListTableName} onPtthDelete={ptthHandleDelete}/>
      <PtthFormTableName renderPtthTableName={ptthTableName}/>

    </div>
  )
}
