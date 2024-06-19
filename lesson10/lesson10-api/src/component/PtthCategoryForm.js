import React, { useState } from 'react'
//import axios from '/api/PtthApi';
import axios from '../api/PtthApi';


export default function PtthCategoryForm({onCloseForm, onCategorySubmit}) {
    //state
     const[ptthCategoryName, setPtthCategoryName] = useState("");
     const[ptthCategoryStatus, setPtthCategoryStatus] = useState(true);
    

    const ptthHandleClose = ()=>{
        onCloseForm(false);
    }
    const ptthHandleSubmit = async(event)=>{
        event.preventDefault();
        let ptthCategory = {
            ptthId:0,
            ptthCategoryName:ptthCategoryName,
            ptthCategoryStatus:ptthCategoryStatus
        }
        console.log("ptthCategory",ptthCategory);
        await axios.post("PtthCategory",ptthCategory);
        onCategorySubmit(ptthCategory);
    }
    return (
        <div>
            <form>
            <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name</span>
            <input type="text" className="form-control" 
            name='ptthCategoryName'
            value={ptthCategoryName}
            onChange={(ev)=> setPtthCategoryName(ev.target.value)}
            placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
            </div>
            <div class="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Category Status</span>
            <select className='form-control'
            name='ptthCategoryStatus'
            value={ptthCategoryStatus}>
            onChange={(ev)=> setPtthCategoryStatus(ev.target.value)}
                <option value={true}>Hiển thị</option>
                <option value={false}>Tạm khóa</option>

            </select>
            
            </div>
            <button className='btn btn-success' onClick={ptthHandleSubmit}>Ghi lại</button>
            <button className='btn btn-danger' onClick={ptthHandleClose}>Đóng</button>
            </form>
        </div>
    )
    }
