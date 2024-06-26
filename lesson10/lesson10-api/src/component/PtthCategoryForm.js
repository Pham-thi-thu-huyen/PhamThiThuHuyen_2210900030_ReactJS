import React, { useState } from 'react'
//import axios from '/api/PtthApi';
import axios from '../api/PtthApi';


export default function PtthCategoryForm({onCloseForm, onCategorySubmit}) {
    //state
     const[ptthCategoryname, setptthCategoryname] = useState();
     const[ptthCategoriesStatus, setPtthCategoriesStatus] = useState(true);
   

    const ptthHandleClose = ()=>{
        onCloseForm(false);
    }
    const ptthHandleSubmit = async(event)=>{
        event.preventDefault();
        let ptthData = {
            ptthId:0,
            ptthCategoryname:ptthCategoryname,
            ptthCategoryStatus:ptthCategoriesStatus
        }
        console.log("ptthCategory",ptthData);
        await axios.post("/PtthCategory",ptthData);
        onCategorySubmit(ptthData);
    }
    return (
        <div>
            <form onSubmit={ptthHandleSubmit}>
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Category Name</span>
            <input type="text" className="form-control" 
            name='ptthCategoriesName'
            value={ptthCategoryname}
            onChange={(ev)=> setptthCategoryname(ev.target.value)}
            placeholder="Category Name" aria-label="Category Name" aria-describedby="basic-addon1"/>
            </div>
            
            <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">Category Status</span>
            <select className='form-control'
            name='ptthCategoriesStatus'
            value={ptthCategoriesStatus} 
            onChange={(ev)=> setPtthCategoriesStatus(ev.target.value)}>
            
                <option value={true}>Hiển thị</option>
                <option value={false}>Tạm khóa</option>

            </select>
            
            </div>
            <button className='btn btn-success' type='submit'>Ghi lại</button>
            <button className='btn btn-danger' onClick={ptthHandleClose}>Đóng</button>
            </form>
        </div>
    )
    }
