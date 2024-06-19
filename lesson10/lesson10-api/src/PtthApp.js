import './App.css';
import PtthCategoryList from './component/PtthCategoryList';
import { useEffect, useState } from 'react';
//import axios from 'axios';
import axios from './api/PtthApi';
import PtthCategoryForm from './component/PtthCategoryForm';

function PtthApp() {
  // Lấy dữ liệu từ api
  const [ptthCategories,setPtthCategories] =useState([])

  const getCategories = async ()=>{
    try {
      const ptthCateReponse = await axios.get("PtthCategory");
    setPtthCategories(ptthCateReponse.data);
    } catch (error) {
      console.log("Lỗi:",error);
    }
  }


  useEffect(()=>{
    getCategories();
    console.log("ptthCategories:", ptthCategories);
  },[])
  
  // Trạng thái form 
  const[ptthCategoryIsForm, setPtthCategoryIsForm] =useState(false);

  const ptthHandleAddNew = (param)=>{
    setPtthCategoryIsForm(param);
  }

  const ptthHandleCategoryCloseForm = (param)=>{
    setPtthCategoryIsForm(param);
  }

  const ptthHandleCategorySubmit =(param)=>{
    ptthCategories.push(param);
    setPtthCategories((prev)=>{
      return[...prev];
    })

  }

  return (
    <div className="container border my-3">
      <h1>PHẠM THỊ THU HUYỀN - Call API</h1>

      <PtthCategoryList renderPtthCategories = {ptthCategories}
                        onAddNew={ptthHandleAddNew}/>
      <hr/>
      {
        ptthCategoryIsForm===true?<PtthCategoryForm 
                                  onCloseForm={ptthHandleCategoryCloseForm}
                                  onCategorySubmit={ptthHandleCategorySubmit}/>:""
      }
      
      
    </div>
  );
}

export default PtthApp;
