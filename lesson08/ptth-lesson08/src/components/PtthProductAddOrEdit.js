import React, { useState } from 'react'

export default function PtthProductAddOrEdit(ptthOnSubmit) {
    const [ptth_productId , setptth_productId] = useState('');
    const [ptth_productName , setptth_productName] = useState('');
    const [ptth_quantity , setptth_quantity] = useState('0');
    const [ptth_price , setptth_price] = useState('0');

    const ptthHandleSubmit = (ptthEvent) =>{
        ptthEvent.preventDefault();
        let ptthProduct= {
            ptth_productId:ptth_productId,
            ptth_productName:ptth_productName,
            ptth_quantity:ptth_quantity,
            ptth_price:ptth_price,
        }
        ptthOnSubmit(ptthProduct)
    }

  return (
    <div className='col-md-6'>
        <h2> Thêm mới sản phẩm/ Sửa đổi </h2>
        <hr/>
        <form>
        <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Mã sản phẩm</span>
        <input type="text" className="form-control" placeholder="Mã sản phẩm"
        name='ptth_productId' value={ptth_productId}
        onChange={(ev)=> setptth_productId(ev.target.value)}
          aria-describedby="basic-addon1"/>
        </div>
        <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Tên sản phẩm</span>
        <input type="text" className="form-control" placeholder="Tên sản phẩm"
         name='ptth_productName' value={ptth_productName}
         onChange={(ev)=> setptth_productName(ev.target.value)}

          aria-describedby="basic-addon2"/>
        </div>
        <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Số lượng sản phẩm</span>
        <input type="number" className="form-control" placeholder="Số lượng sản phẩm"
          name='ptth_quantity' value={ptth_quantity}
          onChange={(ev)=> setptth_quantity(ev.target.value)}

          aria-describedby="basic-addon3"/>
          </div>
          <div class="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Đơn giá</span>
        <input type="number" className="form-control" placeholder="Đơn giá "
          name='ptth_price' value={ptth_price}
          onChange={(ev)=> setptth_price(ev.target.value)}

          aria-describedby="basic-addon4"/>
        </div>
         
         <button className='btn btn-primary' name='ptthBtnAction'
         onClick={ptthHandleSubmit}
         > Thêm mới</button>


        </form>
    </div>
  )
}
