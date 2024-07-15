import axios from 'axios'
import React, { useState } from 'react'

export default function PtthFormTableName(renderPtthTableName) {

    const[ptthId,setPtthId]=useState(renderPtthTableName.ptthId)
    const[ptthTbName,setPtthTbName]=useState(renderPtthTableName.ptthTbName)
    const[ptthTbEmail,setPtthTbEmail]=useState(renderPtthTableName.ptthTbEmail)
    const[ptthTbPhone,setPtthTbPhone]=useState(renderPtthTableName.ptthTbPhone)
    const[ptthTbStatus,setPtthTbStatus]=useState(renderPtthTableName.ptthTbStatus)

    const ptthHandleSubmit = async(ptthEvent)=>{
        ptthEvent.prevenDefault();
        const ptthObjTableName ={
        "ptthTbName": ptthTbName,
        "ptthTbEmail": ptthTbEmail,
        "ptthTbPhone": ptthTbPhone,
        "ptthTbStatus": ptthTbStatus,
        "ptthId": ptthId
        }
        console.log(ptthObjTableName);

        //Thêm vào dữ liệu trong api
        await axios.post("ptthTableName",ptthObjTableName);
    }


  return (
    <div>
        <h2> Form xử lí dữ liệu thêm mới</h2>
        <form>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ptthId">ptthId</span>
            <input type="text" className="form-control" placeholder="ptthId" aria-label="ptthId" 
            name='ptthId'
            value={ptthId}
            onChange={(ptthEv)=>setPtthId(ptthEv.target.value)}
            aria-describedby="ptthId"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ptthTbName">ptthTbName</span>
            <input type="text" className="form-control" placeholder="ptthTbName" aria-label="ptthTbName" 
             name='ptthTbName'
             value={ptthTbName}
             onChange={(ptthEv)=>setPtthTbName(ptthEv.target.value)}
            aria-describedby="ptthTbName"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ptthTbEmail">ptthTbEmail</span>
            <input type="text" className="form-control" placeholder="huyenphamthithu1202@gmail.com" aria-label="ptthTbEmail" 
             name='ptthTbEmail'
             value={ptthTbEmail}
             onChange={(ptthEv)=>setPtthTbEmail(ptthEv.target.value)}
            aria-describedby="ptthTbEmail"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ptthTbPhone">ptthTbPhone</span>
            <input type="text" className="form-control" placeholder="0343649641" aria-label="ptthTbPhone" 
             name='ptthTbPhone'
             value={ptthTbPhone}
             onChange={(ptthEv)=>setPtthTbPhone(ptthEv.target.value)}
            aria-describedby="ptthTbPhone"/>
        </div>
        <div class="input-group mb-3">
            <span className="input-group-text" id="ptthTbStatus">ptthTbStatus</span>
          <select id='ptthTbStatus' className='form-control'
                name='ptthTbStatus'
                value={ptthTbStatus}>
                onChange={(ptthEv)=>setPtthTbStatus(ptthEv.target.value)}
            <option value={true}>Active</option>
            <option value={false}>Non-Active</option>

          </select>
        </div>
        <button className='btn btn-primary my-3' name='btnPtthSave' onClick={ptthHandleSubmit}>PTTH: Save</button>
        </form>
    </div>
  )
}
