import React from 'react';

export default function PtthStudentList({renderPtthStudentList}) {
    console.log("Data:",renderPtthStudentList);
    let ptthElement = renderPtthStudentList.map ((ptthStudent, index)=>{
      return(
          <tr key ={index}>
              <th scope="row">{index+1}</th>
              <td>{ptthStudent.ptthId}</td>
              <td>{ptthStudent.ptthname}</td>
              <td>{ptthStudent.ptthAge}</td>
              <td>{ptthStudent.ptthPhone}</td>
              <td>{ptthStudent.ptthEmail}</td>
              <td>{ptthStudent.ptthStatus}</td>
             <td>
                Edit / Delete
             </td>
        </tr>
      )

    });
  return (
    <div>
        <h2> Danh sách sinh viên </h2>
        <table className="table table- bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Mã sinh viên</th>
      <th scope="col">Họ tên</th>
      <th scope="col">Tuổi</th>
      <th scope="col">Điện thoại</th>
      <th scope="col">Email</th>
      <th scope="col">Trạng thái</th>
      <th scope="col">Chức năng</th>
    </tr>
  </thead>
  <tbody>
    {ptthElement}
  </tbody>
</table>

    </div>
  )
}
