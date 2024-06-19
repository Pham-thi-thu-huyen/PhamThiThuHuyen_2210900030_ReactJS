import React from 'react'

export default function PtthCategoryList({renderPtthCategories , onAddNew}) {
  console.log("renderPtthCategories:", renderPtthCategories);
  let ptthCategoryElement = renderPtthCategories.map((ptthCategory,index)=>{
    return(
      <tr key={index}>
        <td>{index+1}</td>
        <td>{ptthCategory.ptthId}</td>
        <td>{ptthCategory.ptthCategoryname}</td>
        <td>{ptthCategory.ptthCategoryStatus===true?"Hiển thị":"Tạm khóa"}</td>
      </tr>
    )
  })


  const ptthHandleAdd = ()=>{
    onAddNew(true);

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
