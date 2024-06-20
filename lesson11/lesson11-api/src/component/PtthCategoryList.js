import React from 'react'

export default function PtthCategoryList({renderPtthCategories , onAddNew , onPtthDelete, onPtthEdit}) {
  console.log("renderPtthCategories:", renderPtthCategories);
  let ptthCategoryElement = renderPtthCategories.map((ptthCategory,index)=>{
    return(
      <tr key={index}>
        <td>{index+1}</td>
        <td>{ptthCategory.ptthId}</td>
        <td>{ptthCategory.ptthCategoryname}</td>
        <td>{ptthCategory.ptthCategoryStatus===true?"Hiển thị":"Tạm khóa"}</td>
        <td>
            <button className='btn btn-danger' onClick={()=>ptthhandleDelete(ptthCategory.ptthId)}>
                Delete
                </button>
                <button className='btn btn-success' onClick={()=>ptthhandleEdit(ptthCategory)}>
                    Edit
                </button>
        </td>
      </tr>
    )
  })


  const ptthHandleAdd = ()=>{
    onAddNew(true);

  }
  // hàm xử lí sự kiện xóa
  const ptthhandleDelete =(ptthId)=>{
    
    if(window.confirm('Bạn có thực sự muốn xóa Category có mã ['+ptthId+'] không?' )){
        console.log("Delete:".ptthId);
        onPtthDelete(ptthId)

    }else{

    }
    
  }
  // Sự kiện cho nút sửa
  const ptthhandleEdit =(ptthCategory)=>{
    onPtthEdit(ptthCategory);
  }

  return (
    <div className='container m-2'>
      <h2>DANH SÁCH LOẠI SẢN PHẨM</h2>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>#</th>
            <th>Mã loại</th>
            <th>Tên loại</th>
            <th>Trạng thái</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {ptthCategoryElement}
        </tbody>
      </table>
      <button className='btn btn-primary' onClick={ptthHandleAdd}>Thêm mới</button>
    </div>
  )
}
