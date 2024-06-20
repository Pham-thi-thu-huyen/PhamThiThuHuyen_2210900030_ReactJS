import './App.css';
import PtthCategoryList from './component/PtthCategoryList';
import { useEffect, useState } from 'react';
//import axios from 'axios';
import axios from './api/PtthApi'
import PtthCategoryForm from './component/PtthCategoryForm';

function PtthApp() {
  // Lấy dữ liệu từ api
  const [ptthCategories,setPtthCategories] =useState([])

  const getCategories = async ()=>{
    try {
    const ptthCateReponse = await axios.get("/PtthCategory");
    setPtthCategories(ptthCateReponse.data);
    } catch (error) {
      console.log("Lỗi:",error);
    }
  }


  useEffect(()=>{
    getCategories();
    
  },[])
  
  // Trạng thái form 
  const[ptthCategoryIsForm, setPtthCategoryIsForm] =useState(false);

  //dữ liệu form add/edit
  const[ptthCategoryEdit, setPtthCategoryEdit] =useState("");


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
  // Hàm xử lí sự kiện xóa một đối tượng Category
  const ptthHandleDelete = async (ptthId)=>{
    console.log("App-Delete-ptthId:",ptthId);
    // xóa trên api
    //const ptthResponse = axios.delete(`https://66716088e083e62ee43b56f2.mockapi.io/ptthApi/ptth/v1/PtthCategory/${ptthId}`);
    const ptthResponse = axios.delete(`/PtthCategory/${ptthId}`);

    console.log("ptthResponse-Delete",ptthResponse);
  // await axios.delete(`/PtthCategory,${ptthId}`)
      let ptthDelete = ptthCategories.filter(x=>x.ptthId !==ptthId);
    setPtthCategories(ptthDelete);
    console.log("Delete:",ptthDelete);
  }
  //sửa Category
  const ptthHandleEdit = (ptthCategory)=>{

    setPtthCategoryIsForm(true);
    setPtthCategoryEdit(ptthCategory)

  }

  return (
    <div className="container border my-3">
      <h1>PHẠM THỊ THU HUYỀN - Call API</h1>

      <PtthCategoryList renderPtthCategories = {ptthCategories}
                        onAddNew={ptthHandleAddNew}
                        onPtthDelete={ptthHandleDelete}
                        onPtthEdit={ptthHandleEdit}/>
                        
      <hr/>
      {
        ptthCategoryIsForm===true?<PtthCategoryForm 
                                  renderPtthCategory={ptthCategoryEdit}
                                  onCloseForm={ptthHandleCategoryCloseForm}
                                  onCategorySubmit={ptthHandleCategorySubmit}/>:""
      }
      
      
    </div>
  );
}

export default PtthApp;
