import React from 'react'

export default function PtthListUsers({renderPtthListUsers}) {
    console.log("PtthListUsers:",renderPtthListUsers);
    // hiển thị dữ liệu
    let ptthElementUser = renderPtthListUsers.map((ptthUser,index)=>{
        return(
            <>
             <tr>
                    <td>{ptthUser.id}</td>
                    <td>{ptthUser.UsersName}</td>
                    <td>{ptthUser.Password}</td>
                    <td>{ptthUser.Email}</td>
                    <td>{ptthUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
  return (
    <div className='row'>
        <div className='col-md-12'>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                { ptthElementUser}
            </tbody>
             </table>
        </div>
        

    </div>
  )
}
