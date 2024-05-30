import React from 'react'

export default function PtthListProducts({renderPtthProducts}) {
    console.log("List Product:",renderPtthProducts);
    let ptthTong=0;

    let ptthElementProduct = renderPtthProducts.map((ptthProduct,index)=> {
        ptthTong += ptthProduct.ptth_quantity*ptthProduct.ptth_price;
        return(
            <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{ptthProduct.ptth_productId}</td>
                    <td>{ptthProduct.ptth_productName}</td>
                    <td>{ptthProduct.ptth_quantity}</td>
                    <td>{ptthProduct.ptth_price}</td>
                    <td>{ptthProduct.ptth_quantity*ptthProduct.ptth_price}</td>
                    <td>
                       <button className='btn btn-success mx-1'>
                       <i class="fa-regular fa-pen-to-square"></i>
                        </button>
                        <button className='btn btn-danger mx-1'>
                        <i class="fa-solid fa-delete-left"></i>
                        </button>
                    </td>
        
                   
                
            </tr>

            </>
        )

    })
  return (
    <div>
        <h2> DANH SÁCH SẢN PHẨM</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Số lượng</th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                    <th>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                {ptthElementProduct}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan={5} className='text-end'>Tổng cộng:</th>
                    <th colSpan={2} className='text-start'> 
                    {ptthTong}

                    </th>
                </tr>
            </tfoot>

        </table>
    </div>
  )
}
