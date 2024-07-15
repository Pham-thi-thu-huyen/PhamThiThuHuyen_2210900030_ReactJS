import React from 'react'

export default function PtthListTableName({renderPtthListTableName,onPtthDelete}) {
    console.log("List:",renderPtthListTableName);

    //Hiển thị dữ liệu
    const ptthElementTableName = renderPtthListTableName.map((ptthItem,ptthIndex)=>{
        return(
            <tr key={ptthIndex}>
                <td>{ptthItem.ptthId}</td>
                <td>{ptthItem.ptthTbName}</td>
                <td>{ptthItem.ptthTbEmail}</td>
                <td>{ptthItem.ptthTbPhone}</td>
                <td>{ptthItem.ptthTbStatus?"Active":"Non-Active"}</td>
                <td>
                    <button className='btn btn-success m-2'>ptth-edit</button>
                    <button className='btn btn-danger'
                    onClick={(ev)=>ptthHandleDelete(ptthItem.ptthId)}
                    >ptth-delete</button>
                </td>
            </tr>
        );
    })
    //Sự kiện xóa
    const ptthHandleDelete = (ptthId)=>{
        if(window.confirm('Bạn có muốn xóa dữ liệu có ptthId='+ptthId)){
            onPtthDelete(ptthId);
        }
       
    }
  return (
    <div>
        <h2> Danh sách thông tin</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>ptthId</th>
                    <th>ptthTbName</th>
                    <th>ptthTbEmail</th>
                    <th>ptthTbPhone</th>
                    <th>ptthTbStatus</th>
                    <th>ptth: Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {ptthElementTableName}
            </tbody>

        </table>
    </div>
  )
}
